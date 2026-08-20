/**
 * 「個別ページを持たせる用語」の判定基準。
 *
 * 1,116語すべてに個別ページを作ると、1ページあたりの独自本文が中央値450文字の
 * 薄いページが大量に並ぶ状態になる（詳細は docs/adsense-2026-08-investigation.md）。
 * そこで、下記の品質基準を満たした用語だけを個別ページにし、
 * 満たさない用語はカテゴリ一覧ページ内の項目として掲載する。
 *
 * 基準を満たすように記事を書き足せば、その用語は自動的に個別ページへ昇格する。
 * 逆に基準を下回るページは作られないので、薄いページが増えることはない。
 *
 * このファイルはビルドスクリプト専用。クライアントのバンドルには含めない
 * （termArticles.js は 1.8MB あるため、アプリ側から読むとバンドルが膨らむ）。
 */

/** 個別ページに必要な独自本文の最低文字数 */
export const MIN_ARTICLE_LENGTH = 500;

/** 用語名 → URLスラッグ */
export function slugOfTerm(term) {
    return term.toLowerCase().replace(/\s+/g, '-');
}

/** 記事1本の独自本文の文字数。定型のヘッダー・フッターは含めない。 */
export function articleLength(article) {
    if (!article) return 0;
    let n = (article.lead || '').length;
    for (const s of article.sections || []) n += (s.heading || '').length + (s.body || '').length;
    for (const c of article.confusions || []) n += (c.term || '').length + (c.note || '').length;
    for (const i of article.instruments || []) n += (i.name || '').length + (i.tip || '').length;
    for (const w of article.works || []) n += (w.title || '').length + (w.note || '').length;
    return n;
}

/**
 * 個別ページを持たせてよい記事か。
 * 語源・演奏のヒント（楽器別）・混同しやすい用語・使われている曲まで揃っていて、
 * かつ独自本文が MIN_ARTICLE_LENGTH 以上あることを求める。
 */
export function qualifiesForOwnPage(article) {
    if (!article) return false;
    if (!(article.instruments || []).length) return false;
    if (!(article.works || []).length) return false;
    if (!(article.sections || []).length) return false;
    return articleLength(article) >= MIN_ARTICLE_LENGTH;
}

/** termArticles 全体から、個別ページを持たせるスラッグを昇順で返す。 */
export function computeFeaturedSlugs(termArticles) {
    return Object.keys(termArticles)
        .filter((slug) => qualifiesForOwnPage(termArticles[slug]))
        .sort();
}
