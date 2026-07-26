/**
 * カメラスキャン結果と辞典データの照合ロジック。
 *
 * AIが読み取った文字列（"Più mosso" / "cresc." / "D.C." など）を正規化し、
 * 一致度をスコアリングして最も確度の高い用語を返します。
 * 単純な includes + find では、たとえば "Piu mosso" が
 * 逆の意味の "Meno mosso" に一致してしまうため、
 * ここでアクセント・句読点の正規化とスコア比較を行っています。
 */

// アクセント記号・句読点・装飾記号を落として比較用の文字列を作る
export const normalizeTerm = (str) => (str || '')
  .normalize('NFD')
  .replace(/[̀-ͯ]/g, '') // Più -> Piu, Café -> Cafe
  .replace(/[’‘´`]/g, "'")
  .replace(/[*#_]/g, ' ')
  .toLowerCase()
  .replace(/[.,;:!?()[\]"、。「」]/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const SCORE = {
  EXACT_TERM: 100,
  EXACT_SYMBOL: 95,
  PREFIX: 70,   // "cresc" -> "crescendo"
  HEAD: 60,     // "allegro assai" -> "allegro"
  PARTIAL: 40,
};

const scoreEntry = (entry, q) => {
  if (!q) return 0;
  if (entry.n === q) return SCORE.EXACT_TERM;
  if (entry.sym && entry.sym === q) return SCORE.EXACT_SYMBOL;
  if (q.length >= 2 && entry.n.startsWith(q)) return SCORE.PREFIX;
  if (entry.n.length >= 4 && q.startsWith(entry.n + ' ')) return SCORE.HEAD;
  if (q.length >= 5 && entry.n.includes(q)) return SCORE.PARTIAL;
  return 0;
};

/**
 * 用語データからインデックスを作る（アプリ起動時に一度だけ実行）
 */
export const buildTermIndex = (terms) => terms.map(term => ({
  term,
  n: normalizeTerm(term.term),
  sym: term.symbol ? normalizeTerm(term.symbol) : null,
}));

// 同点の候補が複数ある場合は、誤った1件を断定せず候補として複数返す
const topMatches = (index, q, limit) => {
  let best = 0;
  const hits = [];
  for (const entry of index) {
    const score = scoreEntry(entry, q);
    if (score === 0) continue;
    if (score > best) best = score;
    hits.push({ score, entry });
  }
  const terms = hits
    .filter(h => h.score === best)
    .sort((a, b) => a.entry.n.length - b.entry.n.length)
    .slice(0, limit)
    .map(h => h.entry.term);
  return { best, terms };
};

// 単語単体で照合してよい最小条件（p, ff などの強弱記号は1〜2文字でも許可）
const isSearchableWord = (w) => w.length >= 3 || /^[pfms]+$/.test(w);

// 単語単位で拾っても情報量のない機能語
const STOPWORDS = new Set(['con', 'the', 'and', 'del', 'della', 'des', 'les', 'una', 'uno']);

/**
 * スキャンされたフレーズに対応する辞典の用語を返す。
 * フレーズ全体が完全一致すればそれだけを返し、部分的な一致にとどまる場合は
 * 構成する単語（"molto rit." の molto と rit. など）も併せて拾う。
 */
export const findDictionaryMatches = (index, phrase, limit = 4) => {
  const q = normalizeTerm(phrase);
  if (!q) return [];

  const whole = topMatches(index, q, 3);
  if (whole.best >= SCORE.EXACT_SYMBOL) return whole.terms.slice(0, limit);

  const found = [...whole.terms];
  const push = (terms) => {
    for (const term of terms) {
      if (!found.some(t => t.id === term.id)) found.push(term);
    }
  };

  const words = q.split(' ');
  // "Andante con moto" の "con moto" のように、隣接2語で成立する用語を先に拾う
  for (let i = 0; i + 1 < words.length && found.length < limit; i++) {
    const pair = topMatches(index, `${words[i]} ${words[i + 1]}`, 1);
    if (pair.best >= SCORE.EXACT_SYMBOL) push(pair.terms);
  }
  for (const word of words) {
    if (found.length >= limit) break;
    if (!isSearchableWord(word) || STOPWORDS.has(word)) continue;
    push(topMatches(index, word, 2).terms);
  }
  return found.slice(0, limit);
};
