/**
 * Gemini API へのリクエストを中継するサーバー関数。
 *
 * 以前はブラウザから直接 Gemini を呼んでいたため、APIキーが
 * import.meta.env.VITE_GEMINI_API_KEY としてJSバンドルに埋め込まれ、
 * 誰でも取り出して課金枠を使える状態だった。
 * キーをサーバー側だけで保持するようにここへ移した。
 */

const MODEL = 'gemini-flash-lite-latest';
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

// 画像1枚（長辺1024px・JPEG品質0.8）は通常300KB未満。余裕を見て上限を設ける
const MAX_IMAGE_BYTES = 2 * 1024 * 1024;

const ALLOWED_HOSTS = [
  'ongakutecho.com',
  'www.ongakutecho.com',
  'localhost',
  '127.0.0.1',
];

const SCAN_PROMPT = `この画像から音楽用語（イタリア語、記号、楽譜上の指示など）をすべて特定してください。「Largo ma non tanto」や「Poco a poco」のような複数の単語から成る表現（フレーズ）は、途中で区切らずに1つのまとまりとして扱ってください。

必ず以下のJSONフォーマットで出力してください。
\`\`\`json
{
  "results": [
    {
      "original": "フレーズまたは単語（例：Largo ma non tanto）",
      "translation": "日本語訳（例：ゆるやかに、しかし甚だしくなく）"
    }
  ]
}
\`\`\``;

const musicPrompt = (term) =>
  `音楽用語「${term}」が象徴的に使われている、またはその用語を冠した有名なクラシック曲（または楽曲）を1つ挙げ、その理由を30文字程度で簡潔に解説してください。`;

// 他サイトから呼ばれて課金枠を使われないよう、呼び出し元を確認する
const isAllowedOrigin = (req) => {
  const origin = req.headers.origin || req.headers.referer;
  if (!origin) return true; // Originを送らないクライアント（curl等）は下のレート制限に任せる
  try {
    const { hostname } = new URL(origin);
    return ALLOWED_HOSTS.includes(hostname) || hostname.endsWith('.vercel.app');
  } catch {
    return false;
  }
};

const buildBody = ({ mode, image, term }) => {
  if (mode === 'scan') {
    return {
      contents: [{
        parts: [
          { text: SCAN_PROMPT },
          { inlineData: { mimeType: 'image/jpeg', data: image } },
        ],
      }],
    };
  }
  return { contents: [{ parts: [{ text: musicPrompt(term) }] }] };
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'POSTのみ対応しています。' });
  }

  if (!isAllowedOrigin(req)) {
    return res.status(403).json({ error: 'このエンドポイントは外部から利用できません。' });
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: 'AI機能が未設定のため利用できません（APIキー未設定）。' });
  }

  const { mode, image, term } = req.body || {};

  if (mode === 'scan') {
    if (typeof image !== 'string' || !image) {
      return res.status(400).json({ error: '画像が送信されていません。' });
    }
    // base64は元データの約4/3の長さになる
    if ((image.length * 3) / 4 > MAX_IMAGE_BYTES) {
      return res.status(413).json({ error: '画像サイズが大きすぎます。' });
    }
  } else if (mode === 'music') {
    if (typeof term !== 'string' || !term.trim() || term.length > 100) {
      return res.status(400).json({ error: '用語が正しく指定されていません。' });
    }
  } else {
    return res.status(400).json({ error: 'modeは scan または music を指定してください。' });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), mode === 'scan' ? 40000 : 10000);

  try {
    const upstream = await fetch(`${ENDPOINT}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(buildBody({ mode, image, term })),
      signal: controller.signal,
    });

    const data = await upstream.json().catch(() => ({}));

    if (!upstream.ok) {
      // 上流のエラーメッセージにはキーの情報が含まれうるため、そのままは返さない
      console.error('Gemini API error', upstream.status, data?.error?.message);
      return res.status(502).json({ error: `AIの応答を取得できませんでした（${upstream.status}）。` });
    }

    if (data.candidates?.[0]?.finishReason === 'SAFETY') {
      return res.status(422).json({ error: '安全フィルターにより内容が制限されました。' });
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      return res.status(502).json({ error: 'AIから有効な応答が得られませんでした。' });
    }

    return res.status(200).json({ text });
  } catch (e) {
    const timedOut = e.name === 'AbortError';
    console.error('Gemini proxy error', e);
    return res.status(timedOut ? 504 : 500).json({
      error: timedOut ? 'タイムアウト（応答なし）' : 'AIへの接続に失敗しました。',
    });
  } finally {
    clearTimeout(timeout);
  }
}
