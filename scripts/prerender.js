import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { termsData } from '../src/data/termsData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatePath = path.resolve(__dirname, '../dist/index.html');

async function run() {
    console.log('Starting custom prerender for SEO...');

    if (!fs.existsSync(templatePath)) {
        console.error('dist/index.html not found. Run vite build first.');
        process.exit(1);
    }

    let template = fs.readFileSync(templatePath, 'utf-8');

    // Generate lightweight HTML content for search engines
    let contentHtml = `<div id="seo-content" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">\n`;
    contentHtml += `<h1>音楽手帳 (ongaku-techo) | 音楽用語辞典 & チューナー</h1>\n`;
    contentHtml += `<p>音楽家・学生のためのデジタル音楽用語辞典。1000語以上の詳細な解説付き用語検索、高精度クロマチックチューナー、メトロノーム、AI演奏支援、カメラによる用語スキャン機能を搭載。</p>\n`;

    termsData.forEach(term => {
        contentHtml += `<h2>${term.term} (${term.reading})</h2>\n`;
        if (term.symbol) contentHtml += `<p><strong>記号:</strong> ${term.symbol}</p>\n`;
        contentHtml += `<p><strong>カテゴリー:</strong> ${term.category} (${term.lang})</p>\n`;
        contentHtml += `<p><strong>意味:</strong> ${term.meaning}</p>\n`;
        contentHtml += `<p><strong>解説:</strong> ${term.detail}</p>\n`;
    });

    contentHtml += `</div>\n`;

    // Inject right before </body> to ensure it doesn't interfere with React hydration/mounting in #root
    const injectionPoint = '</body>';

    if (template.includes('id="seo-content"')) {
        console.log("SEO content already injected.");
    } else {
        template = template.replace(injectionPoint, `${contentHtml}${injectionPoint}`);
        fs.writeFileSync(templatePath, template);
        console.log(`Successfully injected ${termsData.length} terms into dist/index.html for SEO.`);
    }
}

run().catch(e => {
    console.error(e);
    process.exit(1);
});
