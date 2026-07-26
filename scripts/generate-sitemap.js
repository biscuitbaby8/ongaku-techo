import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { termsData, CATEGORIES } from '../src/data/termsData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://ongakutecho.com';

function generateSitemap() {
  const termSlug = (t) => t.term.toLowerCase().replace(/\s+/g, '-');
  const today = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE_URL}/index/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${BASE_URL}/about.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${BASE_URL}/contact.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>
  <url>
    <loc>${BASE_URL}/privacy.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
`;

  // Category index pages
  // 'All' と 'お気に入り' は静的ページを生成していない（お気に入りは端末内のデータ）。
  // sitemap に載せると 404 URL を Google に申告することになるため除外する。
  CATEGORIES.filter(c => c !== 'All' && c !== 'お気に入り').forEach(cat => {
    xml += `  <url>
    <loc>${BASE_URL}/index/${encodeURIComponent(cat)}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  });

  // Individual term pages
  termsData.forEach(term => {
    xml += `  <url>
    <loc>${BASE_URL}/term/${termSlug(term)}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  });

  xml += `</urlset>`;

  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, xml);
  const urlCount = (xml.match(/<loc>/g) || []).length;
  console.log(`Generated sitemap.xml with ${urlCount} URLs`);
}

generateSitemap();
