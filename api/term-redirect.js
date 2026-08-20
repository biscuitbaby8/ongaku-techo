/**
 * 個別ページを廃止した用語の旧URL（/term/{slug}/）を 301 で転送するサーバー関数。
 *
 * 1,116語すべてに個別ページを持たせていた頃のURLが外部やGoogleのインデックスに
 * 残っているため、それらを「その用語の解説が実際に載っている場所」＝
 * カテゴリ一覧ページの該当項目へ転送する。
 * 詳しい経緯は docs/adsense-2026-08-investigation.md を参照。
 *
 * Vercel はファイルシステムを rewrites より先に評価するため、個別ページが
 * 存在する用語（dist/term/{slug}/index.html）はこの関数まで到達しない。
 * ここに来るのは「廃止した用語」か「存在しない用語」だけ。
 *
 * リダイレクト先を静的な設定に書き出さずサーバー関数にしているのは、
 * 用語が増減するたびに vercel.json の redirects（上限1024件）を
 * 作り直す運用にしないため。
 */

import { termsData } from '../src/data/termsData.js';
import { FEATURED_SLUGS } from '../src/data/featuredTerms.js';

const slugOfTerm = (term) => term.toLowerCase().replace(/\s+/g, '-');

// スラッグ → カテゴリ。モジュールスコープなのでコールドスタート時に一度だけ構築される。
const categoryBySlug = new Map(termsData.map((t) => [slugOfTerm(t.term), t.category]));

export default function handler(req, res) {
  const raw = req.query?.slug;
  // catch-all の :slug* は配列で渡ることがある
  const slug = decodeURIComponent(String(Array.isArray(raw) ? raw[0] : raw || ''))
    .replace(/\/+$/, '')
    .toLowerCase();

  const category = categoryBySlug.get(slug);

  if (!category) {
    // 存在しない用語。さくいんへ送らず 404 を返す
    // （実在しないURLを恒久リダイレクトすると、Google にソフト404として扱われる）。
    res.status(404).setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.send(notFoundHtml());
  }

  // Location ヘッダーはASCIIでなければならない。スラッグには "più-mosso" や
  // "mäßig" のように非ASCIIを含むものがあるため、必ずエンコードして渡す。
  // ブラウザはフラグメントをデコードしてから id と照合するので、
  // カテゴリ一覧ページ側の id="più-mosso" にそのまま一致する。
  const encodedSlug = encodeURIComponent(slug);

  if (FEATURED_SLUGS.has(slug)) {
    // Vercel はファイルシステムを rewrites より先に評価するため、個別ページが
    // ある用語は静的HTMLが返り、ここへは来ないはずである。
    // それでも来た場合は、静的ファイルが欠けているデプロイということになる。
    // 同じURLへ送り返すと無限ループになりうるので、一度だけ試して、
    // それでも戻ってきたらカテゴリ一覧へ逃がす。
    if (!req.query?.retry) {
      return res.redirect(302, `/term/${encodedSlug}/?retry=1`);
    }
    return res.redirect(302, `/index/${encodeURIComponent(category)}/#${encodedSlug}`);
  }

  return res.redirect(301, `/index/${encodeURIComponent(category)}/#${encodedSlug}`);
}

function notFoundHtml() {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex">
  <title>ページが見つかりません | おんがく手帳</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
           background: #FFFDF9; color: #334155; display: flex; align-items: center;
           justify-content: center; min-height: 100vh; margin: 0; padding: 24px; }
    .box { max-width: 480px; text-align: center; }
    h1 { font-size: 1.25rem; font-weight: 900; color: #1e293b; }
    p { font-size: 0.9rem; line-height: 1.8; }
    a { display: inline-block; margin: 8px 6px 0; padding: 12px 20px; background: #fb7185;
        color: #fff; border-radius: 16px; font-weight: 700; font-size: 0.85rem; text-decoration: none; }
  </style>
</head>
<body>
  <div class="box">
    <h1>🎵 ページが見つかりません</h1>
    <p>お探しの用語ページは見つかりませんでした。<br>用語さくいんから探してみてください。</p>
    <a href="/index/">用語さくいん</a>
    <a href="/">トップへ</a>
  </div>
</body>
</html>`;
}
