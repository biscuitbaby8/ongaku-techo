/**
 * public/sitemap.xml を生成する。
 *
 * 個別ページを持たない用語（scripts/article-quality.js の基準を満たさないもの）の
 * /term/{slug}/ は 301 でカテゴリ一覧へ転送されるため、sitemap には載せない。
 * 載せるとリダイレクトURLを申告することになり、クロールの無駄になる。
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { termsData, CATEGORIES } from '../src/data/termsData.js';
import { guideArticles } from '../src/data/guideArticles.js';
import { FEATURED_SLUGS } from '../src/data/featuredTerms.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://ongakutecho.com';

function generateSitemap() {
  const termSlug = (t) => t.term.toLowerCase().replace(/\s+/g, '-');
  const today = new Date().toISOString().split('T')[0];

  const entries = [
    { loc: '/', changefreq: 'weekly', priority: '1.0' },
    { loc: '/index/', changefreq: 'weekly', priority: '0.9' },
    { loc: '/guide/', changefreq: 'weekly', priority: '0.8' },
    { loc: '/about.html', changefreq: 'monthly', priority: '0.5' },
    { loc: '/contact.html', changefreq: 'monthly', priority: '0.4' },
    { loc: '/privacy.html', changefreq: 'monthly', priority: '0.3' },
  ];

  // カテゴリ一覧ページ。
  // 'All' と 'お気に入り' は静的ページを生成していない（お気に入りは端末内のデータ）。
  CATEGORIES.filter((c) => c !== 'All' && c !== 'お気に入り').forEach((cat) => {
    entries.push({ loc: `/index/${encodeURIComponent(cat)}/`, changefreq: 'weekly', priority: '0.8' });
  });

  // 読み物記事。
  guideArticles.forEach((g) => {
    entries.push({ loc: `/guide/${g.slug}/`, changefreq: 'monthly', priority: '0.8' });
  });

  // 個別ページを持つ用語だけ。
  termsData
    .filter((t) => FEATURED_SLUGS.has(termSlug(t)))
    .forEach((t) => {
      entries.push({ loc: `/term/${termSlug(t)}/`, changefreq: 'monthly', priority: '0.7' });
    });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map((e) => `  <url>
    <loc>${BASE_URL}${e.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, xml);
  console.log(`Generated sitemap.xml with ${entries.length} URLs`);
}

generateSitemap();
