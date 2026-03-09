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
    <loc>${BASE_URL}/index</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${BASE_URL}/privacy.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
`;

    // Category index pages
    CATEGORIES.filter(c => c !== 'All').forEach(cat => {
        xml += `  <url>
    <loc>${BASE_URL}/index/${encodeURIComponent(cat)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
    });

    // Individual term pages
    termsData.forEach(term => {
        xml += `  <url>
    <loc>${BASE_URL}/term/${termSlug(term)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
    });

    xml += `</urlset>`;

    const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(outputPath, xml);
    console.log(`Generated sitemap.xml with ${termsData.length + CATEGORIES.length + 1} URLs`);
}

generateSitemap();
