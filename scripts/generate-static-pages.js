/**
 * Static HTML Page Generator for AdSense SEO
 * 
 * Generates standalone HTML pages for every term and category index page
 * so that Google's crawler can see actual content without executing JavaScript.
 * 
 * Run after `vite build`: node scripts/generate-static-pages.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { termsData, CATEGORIES } from '../src/data/termsData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST = path.resolve(__dirname, '../dist');

const BASE_URL = 'https://ongakutecho.com';
const ADSENSE_ID = 'ca-pub-2953839366795600';

// --- Helper: Escape HTML ---
function esc(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// --- Helper: Term slug ---
function termSlug(term) {
    return term.term.toLowerCase().replace(/\s+/g, '-');
}

// --- Shared HTML head ---
function htmlHead({ title, description, canonicalPath, ogImagePath }) {
    return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="google-site-verification" content="ycaRsLtFDka2_bRxNzbG7intBfcH9jkGZMGFrL0P_n8">

  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">

  <link rel="canonical" href="${BASE_URL}${canonicalPath}">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${BASE_URL}${canonicalPath}">
  <meta property="og:image" content="${BASE_URL}${ogImagePath || '/og-image.png'}">
  <meta name="twitter:card" content="summary_large_image">

  <link rel="manifest" href="/manifest.json">
  <link rel="apple-touch-icon" href="/icon-192.png">
  <meta name="theme-color" content="#E11D48">

  <script src="https://cdn.tailwindcss.com"></script>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}" crossorigin="anonymous"></script>

  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    a { text-decoration: none; }
    .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  </style>
</head>`;
}

// --- Shared Header ---
function siteHeader() {
    return `
  <header class="bg-rose-300 rounded-b-[50px] shadow-inner text-white pt-10 pb-16 px-6 relative overflow-hidden">
    <div class="max-w-2xl mx-auto relative z-20">
      <a href="/" class="text-2xl font-black tracking-widest flex items-center gap-2 text-white">🎵 おんがく手帳</a>
      <p class="text-xs font-bold text-white/70 mt-1">1000語以上の音楽用語辞典 &amp; チューナー・メトロノーム</p>
    </div>
  </header>`;
}

// --- Shared Footer ---
function siteFooter() {
    return `
  <footer class="max-w-2xl mx-auto px-6 py-12 text-center">
    <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
      <a href="/" class="text-xs font-black text-slate-400 uppercase tracking-widest hover:text-rose-400">Home</a>
      <a href="/index/" class="text-xs font-black text-slate-400 uppercase tracking-widest hover:text-rose-400">用語さくいん</a>
      <a href="/privacy.html" class="text-xs font-black text-slate-400 uppercase tracking-widest hover:text-rose-400">Privacy</a>
    </nav>
    <p class="text-xs font-black text-slate-300 uppercase tracking-widest">&copy; 2026 ongaku-techo / biscuitbaby</p>
  </footer>`;
}

// --- Shared Navigation ---
function categoryNav(activeCategory) {
    const cats = CATEGORIES.filter(c => c !== 'All' && c !== 'お気に入り');
    return `
    <nav class="flex gap-2 overflow-x-auto pb-2 mb-6">
      <a href="/index/" class="px-4 py-2 rounded-2xl text-sm font-bold whitespace-nowrap ${!activeCategory ? 'bg-rose-400 text-white' : 'bg-white text-slate-500 border border-slate-200'}">全カテゴリ</a>
      ${cats.map(cat => `<a href="/index/${encodeURIComponent(cat)}/" class="px-4 py-2 rounded-2xl text-sm font-bold whitespace-nowrap ${activeCategory === cat ? 'bg-rose-400 text-white' : 'bg-white text-slate-500 border border-slate-200'}">${esc(cat)}</a>`).join('\n      ')}
    </nav>`;
}

// =============================================
// 1. Generate Individual Term Pages
// =============================================
function generateTermPage(term) {
    const slug = termSlug(term);
    const related = termsData
        .filter(t => t.category === term.category && t.id !== term.id)
        .slice(0, 8);

    const title = `${term.term}（${term.reading}）の意味・解説 | おんがく手帳`;
    const description = `${term.term}（${term.reading}）は「${term.meaning}」という意味の${term.lang}の音楽用語です。${term.detail.substring(0, 80)}`;

    const html = `${htmlHead({ title, description, canonicalPath: `/term/${slug}/` })}
<body class="bg-[#FFFDF9] text-slate-700">
  ${siteHeader()}

  <main class="max-w-2xl mx-auto px-6 -mt-8 relative z-20 pb-12">
    <!-- Breadcrumb -->
    <nav class="flex items-center gap-1 text-xs font-bold text-slate-400 mb-4 pt-12">
      <a href="/" class="hover:text-rose-400">トップ</a>
      <span>/</span>
      <a href="/index/${encodeURIComponent(term.category)}/" class="hover:text-rose-400">${esc(term.category)}</a>
      <span>/</span>
      <span class="text-slate-600">${esc(term.term)}</span>
    </nav>

    <!-- Term Detail Article -->
    <article class="bg-white rounded-3xl shadow-xl border border-slate-50 p-8 mb-8">
      <div class="flex items-start gap-4 mb-6">
        ${term.symbol ? `<div class="w-16 h-16 ${term.color || 'bg-rose-50 text-rose-500'} rounded-2xl flex items-center justify-center font-serif italic font-black text-2xl flex-shrink-0">${esc(term.symbol)}</div>` : ''}
        <div>
          <h1 class="text-2xl font-black text-slate-800 leading-tight">${esc(term.term)}</h1>
          <p class="text-sm text-slate-400 font-bold mt-1">${esc(term.reading)}</p>
        </div>
      </div>

      <div class="flex flex-wrap gap-2 mb-6">
        <span class="px-3 py-1 bg-rose-50 text-rose-500 rounded-full text-xs font-black">${esc(term.category)}</span>
        <span class="px-3 py-1 bg-indigo-50 text-indigo-500 rounded-full text-xs font-black">🌐 ${esc(term.lang)}</span>
      </div>

      <section class="mb-6">
        <h2 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">意味</h2>
        <p class="text-lg font-black text-slate-800">${esc(term.meaning)}</p>
      </section>

      <section class="mb-2">
        <h2 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">解説</h2>
        <p class="text-sm text-slate-600 font-bold leading-relaxed">${esc(term.detail)}</p>
      </section>
    </article>

    <!-- Related Terms -->
    ${related.length > 0 ? `
    <section class="mb-12">
      <h2 class="text-lg font-black text-slate-800 mb-4">❤️ 関連する${esc(term.category)}用語</h2>
      <div class="grid grid-cols-2 gap-3">
        ${related.map(r => `
        <a href="/term/${termSlug(r)}/" class="block p-4 bg-white rounded-2xl shadow-sm border border-slate-50 hover:shadow-md hover:border-rose-100 transition-all">
          <p class="text-sm font-black text-slate-700 truncate">${esc(r.term)}</p>
          <p class="text-xs text-slate-400 font-bold mt-1">${esc(r.reading)}</p>
          <p class="text-xs text-slate-500 font-bold mt-1 line-clamp-2">${esc(r.meaning)}</p>
        </a>`).join('')}
      </div>
    </section>` : ''}

    <div class="text-center">
      <a href="/" class="inline-flex items-center gap-2 px-6 py-3 bg-rose-400 text-white rounded-2xl font-black text-sm shadow-lg hover:bg-rose-500 transition-all">← 辞書のトップへ戻る</a>
    </div>
  </main>

  ${siteFooter()}

  <!-- JSON-LD Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": "${esc(term.term)}",
    "description": "${esc(term.meaning)}。${esc(term.detail)}",
    "inDefinedTermSet": "${BASE_URL}",
    "url": "${BASE_URL}/term/${slug}/"
  }
  </script>
</body>
</html>`;

    const dir = path.join(DIST, 'term', slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
}

// =============================================
// 2. Generate Index Pages (All + Per Category)
// =============================================
function generateIndexPage(category) {
    const isAll = !category;
    const filtered = isAll
        ? termsData
        : termsData.filter(t => t.category === category);

    const title = isAll
        ? '音楽用語さくいん（全カテゴリ）| おんがく手帳'
        : `${category}の音楽用語一覧 | おんがく手帳`;
    const description = isAll
        ? `1000語以上の音楽用語を五十音順・カテゴリ別に一覧で紹介。強弱、速度、奏法、表情、構成の各カテゴリから探せます。`
        : `「${category}」に関する音楽用語を一覧で紹介。${filtered.length}語の解説を掲載中。`;
    const canonicalPath = isAll ? '/index/' : `/index/${encodeURIComponent(category)}/`;

    const html = `${htmlHead({ title, description, canonicalPath })}
<body class="bg-[#FFFDF9] text-slate-700">
  ${siteHeader()}

  <main class="max-w-2xl mx-auto px-6 -mt-8 relative z-20 pb-12">
    <div class="pt-12">
      <h1 class="text-2xl font-black text-slate-800 mb-2">${isAll ? '🔍 音楽用語さくいん' : `📁 ${esc(category)}の用語一覧`}</h1>
      <p class="text-sm text-slate-500 font-bold mb-6">${filtered.length}語を掲載中</p>

      ${categoryNav(category || null)}

      <div class="space-y-3">
        ${filtered.map(item => `
        <a href="/term/${termSlug(item)}/" class="block bg-white p-4 rounded-2xl shadow-sm border-2 border-transparent hover:border-rose-100 transition-all">
          <div class="flex items-center gap-4">
            ${item.symbol ? `<div class="w-12 h-12 ${item.color || 'bg-rose-50 text-rose-500'} rounded-2xl flex items-center justify-center font-serif italic font-black text-lg flex-shrink-0">${esc(item.symbol)}</div>` : `<div class="w-12 h-12 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center font-black text-lg flex-shrink-0">♪</div>`}
            <div class="min-w-0 flex-1">
              <h2 class="font-bold text-slate-800 leading-tight text-base">${esc(item.term)}</h2>
              <p class="text-xs font-bold text-slate-400 mt-0.5">${esc(item.reading)} ・ ${esc(item.meaning)}</p>
              <div class="flex items-center gap-2 mt-1">
                <span class="text-slate-300 text-xs font-black uppercase tracking-widest">${esc(item.category)}</span>
                <span class="text-rose-400 text-xs font-bold">${esc(item.lang)}</span>
              </div>
            </div>
          </div>
        </a>`).join('')}
      </div>
    </div>
  </main>

  ${siteFooter()}

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "${esc(title)}",
    "description": "${esc(description)}",
    "url": "${BASE_URL}${canonicalPath}",
    "numberOfItems": ${filtered.length}
  }
  </script>
</body>
</html>`;

    const dir = isAll
        ? path.join(DIST, 'index')
        : path.join(DIST, 'index', category);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
}

// =============================================
// 3. Generate Homepage (with content)
// =============================================
function generateHomepage() {
    const title = '音楽手帳 (ongaku-techo) | 1000語以上の音楽用語辞典 & チューナー・メトロノーム';
    const description = '音楽家・学生のためのデジタル音楽用語辞典。1000語以上の詳細な解説付き用語検索、高精度クロマチックチューナー、メトロノーム、AI演奏支援、カメラによる用語スキャン機能を搭載。';

    // Show first 50 terms as a taste of content
    const previewTerms = termsData.slice(0, 50);
    const cats = CATEGORIES.filter(c => c !== 'All' && c !== 'お気に入り');

    // Read the existing dist/index.html to get the JS bundle reference
    const existingHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');
    const scriptMatch = existingHtml.match(/<script type="module" crossorigin src="([^"]+)">/);
    const jsBundle = scriptMatch ? scriptMatch[1] : '/assets/index.js';

    // We'll enhance the existing index.html by adding a <noscript> section
    // with visible content for crawlers, while keeping the React app working
    const noscriptContent = `
    <noscript>
      <style>
        .noscript-content { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        .noscript-content h1 { font-size: 24px; font-weight: 900; color: #1e293b; margin-bottom: 8px; }
        .noscript-content h2 { font-size: 18px; font-weight: 900; color: #1e293b; margin: 24px 0 12px; }
        .noscript-content p { font-size: 14px; color: #64748b; line-height: 1.6; margin-bottom: 16px; }
        .noscript-content a { color: #fb7185; font-weight: bold; }
        .noscript-content ul { list-style: none; padding: 0; }
        .noscript-content li { padding: 12px; margin-bottom: 8px; background: white; border-radius: 12px; border: 1px solid #f1f5f9; }
        .noscript-content .term-name { font-weight: 900; color: #1e293b; font-size: 16px; }
        .noscript-content .term-reading { font-size: 12px; color: #94a3b8; }
        .noscript-content .term-meaning { font-size: 13px; color: #64748b; margin-top: 4px; }
        .noscript-content .cat-links { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }
        .noscript-content .cat-link { padding: 6px 16px; background: #fff1f2; color: #fb7185; border-radius: 20px; font-size: 13px; font-weight: 700; }
      </style>
      <div class="noscript-content">
        <h1>🎵 おんがく手帳 — 音楽用語辞典</h1>
        <p>1000語以上の音楽用語を網羅した、音楽家・学生のためのデジタル辞典。独自の解説や演奏に役立つアドバイスも掲載。高精度クロマチックチューナーとメトロノーム機能も搭載しています。</p>
        
        <h2>📁 カテゴリで探す</h2>
        <div class="cat-links">
          <a href="/index/" class="cat-link">全カテゴリ (${termsData.length}語)</a>
          ${cats.map(cat => {
        const count = termsData.filter(t => t.category === cat).length;
        return `<a href="/index/${encodeURIComponent(cat)}/" class="cat-link">${esc(cat)} (${count}語)</a>`;
    }).join('\n          ')}
        </div>

        <h2>📖 音楽用語一覧（一部抜粋）</h2>
        <ul>
          ${previewTerms.map(t => `
          <li>
            <a href="/term/${termSlug(t)}/">
              <span class="term-name">${esc(t.term)}</span>
              <span class="term-reading">（${esc(t.reading)}）</span>
              <p class="term-meaning">${esc(t.meaning)}。${esc(t.detail.substring(0, 100))}</p>
            </a>
          </li>`).join('')}
        </ul>
        <p><a href="/index/">→ 全${termsData.length}語の一覧を見る</a></p>

        <h2>🔧 このアプリの機能</h2>
        <ul>
          <li><strong>1000語以上の音楽用語辞典</strong> — 独自に執筆した分かりやすい解説と、演奏に役立つアドバイスを掲載</li>
          <li><strong>高精度クロマチックチューナー</strong> — 練習に妥協しない、プロ品質の精度を追求</li>
          <li><strong>メトロノーム</strong> — 正確なリズム感を養うための必須ツール</li>
          <li><strong>AIスマートスキャン</strong> — 楽譜をカメラで撮るだけで用語を即座に解析</li>
          <li><strong>レッスン予定管理カレンダー</strong> — 日々のレッスンスケジュールを管理</li>
        </ul>

        <h2>ℹ️ サイト情報</h2>
        <p><a href="/privacy.html">プライバシーポリシー</a></p>
        <p>© 2026 ongaku-techo / biscuitbaby. 現役の奏者や講師の監修を元に制作されています。</p>
      </div>
    </noscript>`;

    // Insert noscript content right after <div id="root"></div>
    const updatedHtml = existingHtml.replace(
        '<div id="root"></div>',
        `<div id="root"></div>${noscriptContent}`
    );

    fs.writeFileSync(path.join(DIST, 'index.html'), updatedHtml);
}

// =============================================
// Main
// =============================================
function main() {
    console.log('🔨 Generating static HTML pages for SEO...');
    console.log(`   Terms: ${termsData.length}`);

    // 1. Generate all term pages
    let termCount = 0;
    termsData.forEach(term => {
        generateTermPage(term);
        termCount++;
    });
    console.log(`   ✅ Generated ${termCount} term pages`);

    // 2. Generate index pages
    generateIndexPage(null); // All terms
    const cats = CATEGORIES.filter(c => c !== 'All' && c !== 'お気に入り');
    cats.forEach(cat => generateIndexPage(cat));
    console.log(`   ✅ Generated ${cats.length + 1} index pages`);

    // 3. Enhance homepage with noscript content
    generateHomepage();
    console.log('   ✅ Enhanced homepage with noscript content');

    console.log(`\n🎉 Total: ${termCount + cats.length + 2} static pages generated!`);
    console.log('   Google crawler will now see full content on every page.');
}

main();
