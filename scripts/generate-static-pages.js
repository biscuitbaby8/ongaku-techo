/**
 * Static HTML Page Generator
 *
 * 生成するもの:
 *   /term/{slug}/       … 個別ページ（scripts/article-quality.js の基準を満たす用語のみ）
 *   /index/            … 用語さくいん（全カテゴリの一覧）
 *   /index/{カテゴリ}/  … カテゴリ解説 + そのカテゴリの全用語（解説文つき）
 *   /guide/            … 読み物記事の一覧
 *   /guide/{slug}/     … 読み物記事
 *   /                  … トップページ（ビルド済み index.html に静的コンテンツを追記）
 *
 * 個別ページを絞っている理由は docs/adsense-2026-08-investigation.md を参照。
 * 基準を満たさない用語は個別ページを持たず、カテゴリ一覧ページ内で解説する。
 * 旧URL（/term/{slug}/）は api/term-redirect.js が 301 でその位置へ転送する。
 *
 * Run after `vite build`: node scripts/generate-static-pages.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { termsData, CATEGORIES } from '../src/data/termsData.js';
import { termArticles } from '../src/data/termArticles.js';
import { categoryIntros } from '../src/data/categoryIntros.js';
import { guideArticles } from '../src/data/guideArticles.js';
import { FEATURED_SLUGS } from '../src/data/featuredTerms.js';
import { computeFeaturedSlugs, articleLength, MIN_ARTICLE_LENGTH } from './article-quality.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST = path.resolve(__dirname, '../dist');

const BASE_URL = 'https://ongakutecho.com';
const ADSENSE_ID = 'ca-pub-2953839366795600';
const GA_MEASUREMENT_ID = 'G-2KC3RV4HX7';

// vite build が出力したCSSファイル名はハッシュ付きで毎回変わるため、
// dist/assets を実際に見て見つける（決め打ちしない）。
function findBuiltCssHref() {
    const assetsDir = path.join(DIST, 'assets');
    const files = fs.readdirSync(assetsDir);
    const cssFile = files.find((f) => f.endsWith('.css'));
    if (!cssFile) {
        throw new Error('ビルド済みのCSSファイルが dist/assets に見つかりません。vite build が先に実行されているか確認してください。');
    }
    return `/assets/${cssFile}`;
}
const BUILT_CSS_HREF = findBuiltCssHref();

const REAL_CATEGORIES = CATEGORIES.filter((c) => c !== 'All' && c !== 'お気に入り');

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

// スラッグ → 用語。リンク先の解決に使う。
const bySlug = new Map(termsData.map((t) => [termSlug(t), t]));

/**
 * 用語へのリンク先。
 * 個別ページを持つ用語はそのページへ、持たない用語はカテゴリ一覧ページの
 * 該当項目（アンカー）へ。存在しない用語は null（リンクを張らない）。
 */
function termUrl(slug) {
    const term = bySlug.get(slug);
    if (!term) return null;
    if (FEATURED_SLUGS.has(slug)) return `/term/${slug}/`;
    return `/index/${encodeURIComponent(term.category)}/#${slug}`;
}

// --- Shared HTML head ---
function htmlHead({ title, description, canonicalPath, ogType = 'article' }) {
    return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="google-site-verification" content="ycaRsLtFDka2_bRxNzbG7intBfcH9jkGZMGFrL0P_n8">

  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">

  <link rel="canonical" href="${BASE_URL}${canonicalPath}">
  <meta property="og:type" content="${ogType}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${BASE_URL}${canonicalPath}">
  <meta property="og:image" content="${BASE_URL}/og-image.png">
  <meta name="twitter:card" content="summary_large_image">

  <link rel="manifest" href="/manifest.json">
  <link rel="apple-touch-icon" href="/icon-192.png">
  <meta name="theme-color" content="#E11D48">

  <link rel="stylesheet" href="${BUILT_CSS_HREF}">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}" crossorigin="anonymous"></script>

  <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  </script>

  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    a { text-decoration: none; }
    .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
    :target { scroll-margin-top: 24px; }
  </style>
</head>`;
}

// --- Shared Header ---
function siteHeader() {
    return `
  <header class="bg-rose-300 rounded-b-[50px] shadow-inner text-white pt-10 pb-16 px-6 relative overflow-hidden">
    <div class="max-w-2xl mx-auto relative z-20">
      <a href="/" class="text-2xl font-black tracking-widest flex items-center gap-2 text-white">🎵 おんがく手帳</a>
      <p class="text-xs font-bold text-white/70 mt-1">音楽用語辞典 &amp; チューナー・メトロノーム</p>
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
      <a href="/guide/" class="text-xs font-black text-slate-400 uppercase tracking-widest hover:text-rose-400">読みもの</a>
      <a href="/about.html" class="text-xs font-black text-slate-400 uppercase tracking-widest hover:text-rose-400">About</a>
      <a href="/contact.html" class="text-xs font-black text-slate-400 uppercase tracking-widest hover:text-rose-400">Contact</a>
      <a href="/privacy.html" class="text-xs font-black text-slate-400 uppercase tracking-widest hover:text-rose-400">Privacy</a>
    </nav>
    <p class="text-xs font-black text-slate-300 uppercase tracking-widest">&copy; 2026 ongaku-techo / biscuitbaby</p>
  </footer>`;
}

// --- Shared Navigation ---
function categoryNav(activeCategory) {
    return `
    <nav class="flex gap-2 overflow-x-auto pb-2 mb-6">
      <a href="/index/" class="px-4 py-2 rounded-2xl text-sm font-bold whitespace-nowrap ${!activeCategory ? 'bg-rose-400 text-white' : 'bg-white text-slate-500 border border-slate-200'}">全カテゴリ</a>
      ${REAL_CATEGORIES.map((cat) => `<a href="/index/${encodeURIComponent(cat)}/" class="px-4 py-2 rounded-2xl text-sm font-bold whitespace-nowrap ${activeCategory === cat ? 'bg-rose-400 text-white' : 'bg-white text-slate-500 border border-slate-200'}">${esc(cat)}</a>`).join('\n      ')}
    </nav>`;
}

// --- 見出し + 本文のセクション群（記事・カテゴリ解説で共用） ---
function sectionsHtml(sections) {
    return (sections || []).map((sec) => `
      <section class="mb-8">
        <h2 class="text-base font-black text-slate-800 mb-3 pl-3 border-l-4 border-rose-300">${esc(sec.heading)}</h2>
        <p class="text-sm text-slate-600 leading-loose">${esc(sec.body)}</p>
      </section>`).join('');
}

// --- 詳しい解説 ---
function articleHtml(article) {
    if (!article) return '';

    const instruments = article.instruments?.length ? `
      <section class="mb-8">
        <h2 class="text-base font-black text-slate-800 mb-3 pl-3 border-l-4 border-rose-300">演奏のヒント</h2>
        <div class="grid gap-3">
          ${article.instruments.map((i) => `
          <div class="bg-slate-50 rounded-2xl p-4 border border-slate-100">
            <p class="text-xs font-black text-rose-500 mb-1">${esc(i.name)}</p>
            <p class="text-sm text-slate-600 leading-relaxed">${esc(i.tip)}</p>
          </div>`).join('')}
        </div>
      </section>` : '';

    const confusions = article.confusions?.length ? `
      <section class="mb-8">
        <h2 class="text-base font-black text-slate-800 mb-3 pl-3 border-l-4 border-rose-300">混同しやすい用語</h2>
        <div class="grid gap-3">
          ${article.confusions.map((c) => {
        const href = termUrl(c.slug);
        const inner = `
            <p class="text-sm font-black text-slate-800 mb-1">${esc(c.term)}</p>
            <p class="text-sm text-slate-600 leading-relaxed">${esc(c.note)}</p>`;
        return href
            ? `<a href="${href}" class="block bg-white rounded-2xl p-4 border border-slate-100 hover:border-rose-200 transition-all">${inner}
          </a>`
            : `<div class="bg-white rounded-2xl p-4 border border-slate-100">${inner}
          </div>`;
    }).join('')}
        </div>
      </section>` : '';

    const works = article.works?.length ? `
      <section class="mb-8">
        <h2 class="text-base font-black text-slate-800 mb-3 pl-3 border-l-4 border-rose-300">この指示が使われる曲</h2>
        <div class="grid gap-3">
          ${article.works.map((w) => `
          <div class="bg-amber-50/50 rounded-2xl p-4 border border-amber-100">
            <p class="text-sm font-black text-amber-700 mb-1">${esc(w.title)}</p>
            <p class="text-sm text-slate-600 leading-relaxed">${esc(w.note)}</p>
          </div>`).join('')}
        </div>
      </section>` : '';

    return `
    <div class="bg-white rounded-3xl shadow-xl border border-slate-50 p-8 mb-8">
      <p class="text-sm text-slate-700 font-bold leading-loose mb-8 pb-8 border-b border-slate-100">${esc(article.lead)}</p>
      ${sectionsHtml(article.sections)}${instruments}${confusions}${works}
    </div>`;
}

// =============================================
// 1. 個別の用語ページ（基準を満たした用語のみ）
// =============================================
function generateTermPage(term) {
    const slug = termSlug(term);
    const article = termArticles[slug];

    // 関連用語は、同カテゴリで個別ページを持つ用語から選ぶ（リンク切れを作らない）。
    const related = termsData
        .filter((t) => t.category === term.category && t.id !== term.id && FEATURED_SLUGS.has(termSlug(t)))
        .slice(0, 8);

    const title = `${term.term}（${term.reading}）の意味・解説 | おんがく手帳`;
    const description = `${term.term}（${term.reading}）は「${term.meaning}」という意味の${term.lang}の音楽用語です。${article.lead.substring(0, 90)}`;

    const html = `${htmlHead({ title, description, canonicalPath: `/term/${slug}/` })}
<body class="bg-[#FFFDF9] text-slate-700">
  ${siteHeader()}

  <main class="max-w-2xl mx-auto px-6 -mt-8 relative z-20 pb-12">
    <div class="pt-12 mb-4">
      <a href="/" class="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white text-rose-500 rounded-2xl font-black text-xs shadow-md border border-rose-100 hover:bg-rose-50 transition-all">← 辞典にもどる</a>
    </div>

    <!-- Breadcrumb -->
    <nav class="flex items-center gap-1 text-xs font-bold text-slate-400 mb-4">
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

    ${articleHtml(article)}

    <!-- Related Terms -->
    ${related.length > 0 ? `
    <section class="mb-12">
      <h2 class="text-lg font-black text-slate-800 mb-4">❤️ 関連する${esc(term.category)}用語</h2>
      <div class="grid grid-cols-2 gap-3">
        ${related.map((r) => `
        <a href="/term/${termSlug(r)}/" class="block p-4 bg-white rounded-2xl shadow-sm border border-slate-50 hover:shadow-md hover:border-rose-100 transition-all">
          <p class="text-sm font-black text-slate-700 truncate">${esc(r.term)}</p>
          <p class="text-xs text-slate-400 font-bold mt-1">${esc(r.reading)}</p>
          <p class="text-xs text-slate-500 font-bold mt-1 line-clamp-2">${esc(r.meaning)}</p>
        </a>`).join('')}
      </div>
    </section>` : ''}

    <div class="text-center">
      <a href="/index/${encodeURIComponent(term.category)}/" class="inline-flex items-center gap-2 px-6 py-3 bg-rose-400 text-white rounded-2xl font-black text-sm shadow-lg hover:bg-rose-500 transition-all">← ${esc(term.category)}の用語一覧へ</a>
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
// 2-a. カテゴリ一覧ページ（解説 + そのカテゴリの全用語）
// =============================================
function generateCategoryPage(category) {
    const filtered = termsData.filter((t) => t.category === category);
    const intro = categoryIntros[category];
    const featuredCount = filtered.filter((t) => FEATURED_SLUGS.has(termSlug(t))).length;

    const title = `${category}の音楽用語 — ${intro.title} | おんがく手帳`;
    const description = `${intro.lead.substring(0, 110)}`;
    const canonicalPath = `/index/${encodeURIComponent(category)}/`;

    const html = `${htmlHead({ title, description, canonicalPath })}
<body class="bg-[#FFFDF9] text-slate-700">
  ${siteHeader()}

  <main class="max-w-2xl mx-auto px-6 -mt-8 relative z-20 pb-12">
    <div class="pt-12">
      <nav class="flex items-center gap-1 text-xs font-bold text-slate-400 mb-4">
        <a href="/" class="hover:text-rose-400">トップ</a>
        <span>/</span>
        <a href="/index/" class="hover:text-rose-400">用語さくいん</a>
        <span>/</span>
        <span class="text-slate-600">${esc(category)}</span>
      </nav>

      <h1 class="text-2xl font-black text-slate-800 mb-2">${esc(category)}の音楽用語</h1>
      <p class="text-sm text-slate-500 font-bold mb-6">${filtered.length}語を掲載（うち${featuredCount}語は詳しい解説ページつき）</p>

      ${categoryNav(category)}

      <!-- カテゴリ解説 -->
      <div class="bg-white rounded-3xl shadow-xl border border-slate-50 p-8 mb-10">
        <h2 class="text-lg font-black text-slate-800 mb-4">${esc(intro.title)}</h2>
        <p class="text-sm text-slate-700 font-bold leading-loose mb-8 pb-8 border-b border-slate-100">${esc(intro.lead)}</p>
        ${sectionsHtml(intro.sections)}
      </div>

      <h2 class="text-lg font-black text-slate-800 mb-4">${esc(category)}の用語一覧</h2>
      <div class="space-y-3">
        ${filtered.map((item) => {
        const slug = termSlug(item);
        const featured = FEATURED_SLUGS.has(slug);
        return `
        <article id="${slug}" class="bg-white p-5 rounded-2xl shadow-sm border-2 border-transparent">
          <div class="flex items-start gap-4">
            ${item.symbol
                ? `<div class="w-12 h-12 ${item.color || 'bg-rose-50 text-rose-500'} rounded-2xl flex items-center justify-center font-serif italic font-black text-lg flex-shrink-0">${esc(item.symbol)}</div>`
                : `<div class="w-12 h-12 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center font-black text-lg flex-shrink-0">♪</div>`}
            <div class="min-w-0 flex-1">
              <h3 class="font-black text-slate-800 leading-tight text-base">${esc(item.term)}</h3>
              <p class="text-xs font-bold text-slate-400 mt-0.5">${esc(item.reading)} ・ ${esc(item.lang)}</p>
              <p class="text-sm font-black text-slate-700 mt-2">${esc(item.meaning)}</p>
              <p class="text-sm text-slate-600 leading-relaxed mt-1">${esc(item.detail)}</p>
              ${featured ? `<a href="/term/${slug}/" class="inline-block mt-3 text-xs font-black text-rose-500 hover:text-rose-600">→ ${esc(item.term)} の詳しい解説を読む</a>` : ''}
            </div>
          </div>
        </article>`;
    }).join('')}
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

    const dir = path.join(DIST, 'index', category);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
}

// =============================================
// 2-b. 用語さくいん（全カテゴリ）
// =============================================
function generateIndexPage() {
    const intro = categoryIntros['All'];
    const title = `音楽用語さくいん — ${intro.title} | おんがく手帳`;
    const description = `${intro.lead.substring(0, 110)}`;

    const html = `${htmlHead({ title, description, canonicalPath: '/index/' })}
<body class="bg-[#FFFDF9] text-slate-700">
  ${siteHeader()}

  <main class="max-w-2xl mx-auto px-6 -mt-8 relative z-20 pb-12">
    <div class="pt-12">
      <h1 class="text-2xl font-black text-slate-800 mb-2">🔍 音楽用語さくいん</h1>
      <p class="text-sm text-slate-500 font-bold mb-6">${termsData.length}語を掲載中</p>

      ${categoryNav(null)}

      <div class="bg-white rounded-3xl shadow-xl border border-slate-50 p-8 mb-10">
        <h2 class="text-lg font-black text-slate-800 mb-4">${esc(intro.title)}</h2>
        <p class="text-sm text-slate-700 font-bold leading-loose mb-8 pb-8 border-b border-slate-100">${esc(intro.lead)}</p>
        ${sectionsHtml(intro.sections)}
      </div>

      <h2 class="text-lg font-black text-slate-800 mb-4">カテゴリから探す</h2>
      <div class="grid gap-3 mb-10">
        ${REAL_CATEGORIES.map((cat) => {
        const count = termsData.filter((t) => t.category === cat).length;
        const ci = categoryIntros[cat];
        return `
        <a href="/index/${encodeURIComponent(cat)}/" class="block bg-white p-5 rounded-2xl shadow-sm border-2 border-transparent hover:border-rose-100 transition-all">
          <p class="font-black text-slate-800">${esc(cat)}<span class="text-xs font-bold text-slate-400 ml-2">${count}語</span></p>
          <p class="text-sm font-black text-rose-500 mt-1">${esc(ci.title)}</p>
          <p class="text-sm text-slate-600 leading-relaxed mt-1">${esc(ci.lead.substring(0, 120))}…</p>
        </a>`;
    }).join('')}
      </div>

      <h2 class="text-lg font-black text-slate-800 mb-4">全用語（${termsData.length}語）</h2>
      <div class="space-y-2">
        ${termsData.map((item) => {
        const slug = termSlug(item);
        const href = termUrl(slug);
        return `
        <a href="${href}" class="block bg-white px-4 py-3 rounded-xl shadow-sm border-2 border-transparent hover:border-rose-100 transition-all">
          <span class="font-bold text-slate-800 text-sm">${esc(item.term)}</span>
          <span class="text-xs font-bold text-slate-400 ml-2">${esc(item.reading)}</span>
          <span class="text-xs text-slate-500 ml-2">${esc(item.meaning)}</span>
          <span class="text-[10px] font-black text-rose-300 ml-2 uppercase tracking-widest">${esc(item.category)}</span>
        </a>`;
    }).join('')}
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
    "url": "${BASE_URL}/index/",
    "numberOfItems": ${termsData.length}
  }
  </script>
</body>
</html>`;

    const dir = path.join(DIST, 'index');
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
}

// =============================================
// 3. 読み物記事
// =============================================
function generateGuidePage(guide) {
    const related = (guide.relatedTerms || [])
        .map((slug) => ({ slug, term: bySlug.get(slug), href: termUrl(slug) }))
        .filter((r) => r.term && r.href);

    const html = `${htmlHead({ title: `${guide.title} | おんがく手帳`, description: guide.description, canonicalPath: `/guide/${guide.slug}/` })}
<body class="bg-[#FFFDF9] text-slate-700">
  ${siteHeader()}

  <main class="max-w-2xl mx-auto px-6 -mt-8 relative z-20 pb-12">
    <div class="pt-12">
      <nav class="flex items-center gap-1 text-xs font-bold text-slate-400 mb-4">
        <a href="/" class="hover:text-rose-400">トップ</a>
        <span>/</span>
        <a href="/guide/" class="hover:text-rose-400">読みもの</a>
        <span>/</span>
        <span class="text-slate-600 truncate">${esc(guide.title)}</span>
      </nav>

      <article class="bg-white rounded-3xl shadow-xl border border-slate-50 p-8 mb-8">
        <h1 class="text-xl font-black text-slate-800 leading-relaxed mb-2">${esc(guide.title)}</h1>
        <p class="text-xs font-bold text-slate-400 mb-6">公開 ${esc(guide.published)}</p>
        <p class="text-sm text-slate-700 font-bold leading-loose mb-8 pb-8 border-b border-slate-100">${esc(guide.lead)}</p>
        ${sectionsHtml(guide.sections)}
      </article>

      ${related.length ? `
      <section class="mb-10">
        <h2 class="text-lg font-black text-slate-800 mb-4">この記事に出てくる用語</h2>
        <div class="grid grid-cols-2 gap-3">
          ${related.map((r) => `
          <a href="${r.href}" class="block p-4 bg-white rounded-2xl shadow-sm border border-slate-50 hover:border-rose-100 transition-all">
            <p class="text-sm font-black text-slate-700 truncate">${esc(r.term.term)}</p>
            <p class="text-xs text-slate-400 font-bold mt-1">${esc(r.term.reading)}</p>
            <p class="text-xs text-slate-500 font-bold mt-1 line-clamp-2">${esc(r.term.meaning)}</p>
          </a>`).join('')}
        </div>
      </section>` : ''}

      <div class="text-center">
        <a href="/guide/" class="inline-flex items-center gap-2 px-6 py-3 bg-rose-400 text-white rounded-2xl font-black text-sm shadow-lg hover:bg-rose-500 transition-all">← 読みものの一覧へ</a>
      </div>
    </div>
  </main>

  ${siteFooter()}

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${esc(guide.title)}",
    "description": "${esc(guide.description)}",
    "datePublished": "${esc(guide.published)}",
    "url": "${BASE_URL}/guide/${guide.slug}/",
    "author": { "@type": "Organization", "name": "ongaku-techo Project" },
    "publisher": { "@type": "Organization", "name": "ongaku-techo Project", "url": "${BASE_URL}" }
  }
  </script>
</body>
</html>`;

    const dir = path.join(DIST, 'guide', guide.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
}

function generateGuideIndex() {
    const title = '読みもの — 練習と譜読みのための記事 | おんがく手帳';
    const description = '用語の定義ではなく、その用語や道具を実際の練習でどう使うかを扱った記事の一覧。メトロノーム練習の設計、チューナーのセント表示の読み方、譜読みの手順など。';

    const html = `${htmlHead({ title, description, canonicalPath: '/guide/' })}
<body class="bg-[#FFFDF9] text-slate-700">
  ${siteHeader()}

  <main class="max-w-2xl mx-auto px-6 -mt-8 relative z-20 pb-12">
    <div class="pt-12">
      <h1 class="text-2xl font-black text-slate-800 mb-2">📝 読みもの</h1>
      <p class="text-sm text-slate-500 font-bold mb-8">用語の意味そのものではなく、それを練習でどう使うかを扱った記事です。</p>

      <div class="grid gap-4">
        ${guideArticles.map((g) => `
        <a href="/guide/${g.slug}/" class="block bg-white p-6 rounded-2xl shadow-sm border-2 border-transparent hover:border-rose-100 transition-all">
          <h2 class="font-black text-slate-800 leading-relaxed">${esc(g.title)}</h2>
          <p class="text-xs font-bold text-slate-400 mt-1">${esc(g.published)}</p>
          <p class="text-sm text-slate-600 leading-relaxed mt-2">${esc(g.description)}</p>
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
    "url": "${BASE_URL}/guide/",
    "numberOfItems": ${guideArticles.length}
  }
  </script>
</body>
</html>`;

    const dir = path.join(DIST, 'guide');
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
}

// =============================================
// 4. トップページ
// =============================================
function generateHomepage() {
    // 個別ページを持つ用語から抜粋する（リンク先が必ず存在するように）。
    const previewTerms = termsData.filter((t) => FEATURED_SLUGS.has(termSlug(t))).slice(0, 24);

    const existingHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');

    // トップページに置く静的コンテンツ。
    // ここは #root の「あと」に置き、JS実行後も DOM から削除しない。
    // クローラーだけに見せて利用者から隠すと Google のクローキング
    // （スパムポリシー違反 = AdSense 不承認の直接原因）になるため、
    // 実際の訪問者もスクロールして読める通常のコンテンツとして扱う。
    const seoContent = `
    <div id="seo-content" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
      <style>
        #seo-content { border-top: 1px solid #f1f5f9; margin-top: 24px; padding-bottom: 96px; }
        #seo-content h2 { font-size: 18px; font-weight: 900; color: #1e293b; margin: 24px 0 12px; }
        #seo-content .section-title { font-size: 22px; font-weight: 900; color: #1e293b; margin-bottom: 8px; }
        #seo-content p { font-size: 14px; color: #64748b; line-height: 1.6; margin-bottom: 16px; }
        #seo-content a { color: #fb7185; font-weight: bold; }
        #seo-content ul { list-style: none; padding: 0; }
        #seo-content li { padding: 12px; margin-bottom: 8px; background: white; border-radius: 12px; border: 1px solid #f1f5f9; }
        #seo-content .term-name { font-weight: 900; color: #1e293b; font-size: 16px; }
        #seo-content .term-reading { font-size: 12px; color: #94a3b8; }
        #seo-content .term-meaning { font-size: 13px; color: #64748b; margin-top: 4px; }
        #seo-content .cat-links { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }
        #seo-content .cat-link { padding: 6px 16px; background: #fff1f2; color: #fb7185; border-radius: 20px; font-size: 13px; font-weight: 700; text-decoration: none; }
        #seo-content .seo-nav a { margin: 0 8px; font-size: 12px; font-weight: 700; color: #94a3b8; text-decoration: none; }
        #seo-content .seo-nav a:hover { color: #fb7185; }
      </style>
      <p class="section-title">🎵 おんがく手帳 — 音楽用語辞典</p>

      <p>楽譜に書かれた指示語を、訳語ではなく「演奏で何をすることになるのか」まで踏み込んで解説しています。${termsData.length}語を収録し、そのうち${FEATURED_SLUGS.size}語には語源・楽器別の演奏のヒント・混同しやすい用語・実際に使われている曲を含む詳しい解説ページを用意しました。高精度クロマチックチューナーとメトロノームも搭載しています。</p>

      <h2>📁 カテゴリごとの解説</h2>
      <div class="cat-links">
        <a href="/index/" class="cat-link">用語さくいん (${termsData.length}語)</a>
        ${REAL_CATEGORIES.map((cat) => {
        const count = termsData.filter((t) => t.category === cat).length;
        return `<a href="/index/${encodeURIComponent(cat)}/" class="cat-link">${esc(cat)} (${count}語)</a>`;
    }).join('\n        ')}
      </div>
      <p>各カテゴリのページには、そこに含まれる用語をどう読めばいいのかという解説をつけています。たとえば「強弱」なら、p や f が音量の絶対値ではないこと、「速度」なら Allegro が速さではなく性格を指す語であることから説明しています。</p>

      <h2>📝 読みもの</h2>
      <ul>
        ${guideArticles.map((g) => `
        <li>
          <a href="/guide/${g.slug}/">
            <span class="term-name">${esc(g.title)}</span>
            <p class="term-meaning">${esc(g.description)}</p>
          </a>
        </li>`).join('')}
      </ul>

      <h2>📖 詳しい解説のある用語（抜粋）</h2>
      <ul>
        ${previewTerms.map((t) => `
        <li>
          <a href="/term/${termSlug(t)}/">
            <span class="term-name">${esc(t.term)}</span>
            <span class="term-reading">（${esc(t.reading)}）</span>
            <p class="term-meaning">${esc(t.meaning)}。${esc(t.detail.substring(0, 100))}</p>
          </a>
        </li>`).join('')}
      </ul>
      <p><a href="/index/">→ 全${termsData.length}語のさくいんを見る</a></p>

      <h2>🔧 このアプリの機能</h2>
      <ul>
        <li><strong>音楽用語辞典</strong> — ${termsData.length}語を収録。うち${FEATURED_SLUGS.size}語は詳しい解説ページつき</li>
        <li><strong>高精度クロマチックチューナー</strong> — マイクを使ってリアルタイムに音程を判定</li>
        <li><strong>メトロノーム</strong> — BPMと拍子を設定でき、視覚的なビート表示に対応</li>
        <li><strong>AIスマートスキャン</strong> — 楽譜をカメラで撮って用語を解析</li>
        <li><strong>レッスン予定管理カレンダー</strong> — 練習やレッスンのスケジュール管理</li>
      </ul>

      <h2>ℹ️ サイト情報</h2>
      <nav class="seo-nav" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: 16px;">
        <a href="/">Home</a>
        <a href="/index/">用語さくいん</a>
        <a href="/guide/">読みもの</a>
        <a href="/about.html">About</a>
        <a href="/contact.html">Contact</a>
        <a href="/privacy.html">Privacy Policy</a>
      </nav>
      <p style="text-align: center; font-size: 12px;">© 2026 ongaku-techo / biscuitbaby</p>
    </div>`;

    // #root のあとに挿入する（利用者もクローラーも同じものを見る）
    const updatedHtml = existingHtml.replace(
        '<div id="root"></div>',
        `<div id="root"></div>\n${seoContent}`
    );

    fs.writeFileSync(path.join(DIST, 'index.html'), updatedHtml);
}

// =============================================
// ビルド時チェック
// =============================================
function runGuards() {
    const errors = [];

    // 1. スラッグの重複。放置すると片方のページが上書きされて消える。
    const slugOwners = new Map();
    termsData.forEach((term) => {
        const slug = termSlug(term);
        if (slugOwners.has(slug)) errors.push(`URLスラッグが重複しています: ${slug} (id:${slugOwners.get(slug)} と id:${term.id})`);
        else slugOwners.set(slug, term.id);
    });

    // 2. CATEGORIES に無いカテゴリ。一覧ページが作られず、パンくずが404になる。
    const unknownCategories = new Set();
    termsData.forEach((term) => {
        if (!CATEGORIES.includes(term.category)) unknownCategories.add(term.category);
    });
    unknownCategories.forEach((cat) => errors.push(`CATEGORIES に登録されていないカテゴリがあります: "${cat}"`));

    // 3. カテゴリ解説の欠落。導入文の無い一覧ページを作らない。
    REAL_CATEGORIES.forEach((cat) => {
        if (!categoryIntros[cat]) errors.push(`categoryIntros.js に "${cat}" の解説がありません`);
    });
    if (!categoryIntros['All']) errors.push('categoryIntros.js に "All" の解説がありません');

    // 4. termArticles のリンク切れ。
    Object.entries(termArticles).forEach(([key, article]) => {
        if (!slugOwners.has(key)) errors.push(`記事のキー "${key}" に対応する用語がありません`);
        (article.confusions || []).forEach((c) => {
            if (!slugOwners.has(c.slug)) errors.push(`"${key}" の関連リンク "${c.slug}"（${c.term}）が存在しません`);
        });
    });

    // 5. featuredTerms.js が古くなっていないか。
    //    記事を書き足したら node scripts/generate-featured-terms.js を再実行する。
    const expected = computeFeaturedSlugs(termArticles);
    const actual = [...FEATURED_SLUGS].sort();
    if (expected.length !== actual.length || expected.some((s, i) => s !== actual[i])) {
        const missing = expected.filter((s) => !FEATURED_SLUGS.has(s));
        const extra = actual.filter((s) => !expected.includes(s));
        errors.push(
            `src/data/featuredTerms.js が最新ではありません（不足 ${missing.length}件 / 余分 ${extra.length}件）。` +
            ' node scripts/generate-featured-terms.js を実行してください'
        );
    }

    // 6. 個別ページを持つ用語が基準を満たしているか（薄いページを作らない）。
    FEATURED_SLUGS.forEach((slug) => {
        const article = termArticles[slug];
        if (!article) { errors.push(`featuredTerms に記事の無いスラッグがあります: ${slug}`); return; }
        const len = articleLength(article);
        if (len < MIN_ARTICLE_LENGTH) errors.push(`個別ページの本文が短すぎます: ${slug} (${len}文字 < ${MIN_ARTICLE_LENGTH})`);
    });

    // 7. 読み物記事のスラッグ重複と、参照している用語の存在確認。
    const guideSlugs = new Set();
    guideArticles.forEach((g) => {
        if (guideSlugs.has(g.slug)) errors.push(`読み物記事のスラッグが重複しています: ${g.slug}`);
        guideSlugs.add(g.slug);
        (g.relatedTerms || []).forEach((s) => {
            if (!slugOwners.has(s)) errors.push(`読み物 "${g.slug}" が参照する用語 "${s}" が存在しません`);
        });
    });

    if (errors.length) {
        console.error('❌ 静的ページを生成できません:');
        errors.forEach((e) => console.error(`   - ${e}`));
        process.exit(1);
    }
}

// =============================================
// Main
// =============================================
function main() {
    console.log('🔨 静的HTMLページを生成します...');
    runGuards();

    const featuredTerms = termsData.filter((t) => FEATURED_SLUGS.has(termSlug(t)));
    featuredTerms.forEach(generateTermPage);
    console.log(`   ✅ 用語の個別ページ ${featuredTerms.length}枚（全${termsData.length}語中）`);
    console.log(`      残り${termsData.length - featuredTerms.length}語はカテゴリ一覧ページ内で解説（旧URLは301転送）`);

    generateIndexPage();
    REAL_CATEGORIES.forEach(generateCategoryPage);
    console.log(`   ✅ さくいん・カテゴリ一覧 ${REAL_CATEGORIES.length + 1}枚`);

    generateGuideIndex();
    guideArticles.forEach(generateGuidePage);
    console.log(`   ✅ 読み物記事 ${guideArticles.length}本 + 一覧1枚`);

    generateHomepage();
    console.log('   ✅ トップページに静的コンテンツを追記');

    const total = featuredTerms.length + REAL_CATEGORIES.length + 1 + guideArticles.length + 1 + 1;
    console.log(`\n🎉 合計 ${total} ページ`);
}

main();
