/**
 * src/data/featuredTerms.js を生成する。
 *
 * 判定ロジックそのものは scripts/article-quality.js にあるが、その計算には
 * termArticles.js（1.8MB）が必要になる。アプリ側でそれを import すると
 * バンドルが肥大化するため、結果のスラッグ一覧だけを小さなデータモジュールとして
 * 書き出し、アプリとビルドスクリプトの双方がそれを参照する。
 *
 * 生成物はコミットする。内容が古くなっていれば generate-static-pages.js が
 * ビルドを失敗させるので、記事を書き足したらこのスクリプトを再実行すること。
 *
 *   node scripts/generate-featured-terms.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { termArticles } from '../src/data/termArticles.js';
import { computeFeaturedSlugs, MIN_ARTICLE_LENGTH } from './article-quality.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, '../src/data/featuredTerms.js');

const slugs = computeFeaturedSlugs(termArticles);

const body = `/**
 * 個別ページ（/term/{slug}/）を持つ用語のスラッグ一覧。
 *
 * このファイルは自動生成される。直接編集しないこと。
 *   node scripts/generate-featured-terms.js
 *
 * 収録の基準は scripts/article-quality.js を参照。
 * 語源・楽器別の演奏のヒント・混同しやすい用語・使われている曲が揃っていて、
 * 独自本文が${MIN_ARTICLE_LENGTH}文字以上ある記事だけがここに入る。
 * ここに無い用語は個別ページを持たず、カテゴリ一覧ページ内で解説する。
 */

export const FEATURED_SLUGS = new Set([
${slugs.map((s) => `    '${s}',`).join('\n')}
]);

export const slugOfTerm = (term) => term.toLowerCase().replace(/\\s+/g, '-');

/** 用語オブジェクトが個別ページを持つか */
export const hasOwnPage = (item) => Boolean(item) && FEATURED_SLUGS.has(slugOfTerm(item.term));
`;

fs.writeFileSync(OUT, body);
console.log(`✅ src/data/featuredTerms.js を生成しました（${slugs.length}語）`);
