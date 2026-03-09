import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Heart, BookOpen, Music, Languages } from 'lucide-react';
import { termsData as INITIAL_TERMS, CATEGORIES } from '../data/termsData';

export default function TermPage() {
    const { termId } = useParams();

    const term = useMemo(() => {
        // Try matching by term name (URL-friendly) first, then by numeric id
        const decoded = decodeURIComponent(termId);
        return INITIAL_TERMS.find(t =>
            t.term.toLowerCase().replace(/\s+/g, '-') === decoded.toLowerCase()
        ) || INITIAL_TERMS.find(t => String(t.id) === termId);
    }, [termId]);

    if (!term) {
        return (
            <div className="min-h-screen bg-[#FFFDF9] flex flex-col items-center justify-center p-8 text-center">
                <h1 className="text-2xl font-black text-slate-800 mb-4">用語が見つかりません</h1>
                <p className="text-sm text-slate-500 mb-6">指定された音楽用語はデータベースに存在しません。</p>
                <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-rose-400 text-white rounded-2xl font-black text-sm shadow-lg hover:bg-rose-500 transition-all">
                    <Music size={18} /> トップページへ戻る
                </Link>
            </div>
        );
    }

    // Find related terms (same category)
    const relatedTerms = useMemo(() => {
        return INITIAL_TERMS
            .filter(t => t.category === term.category && t.id !== term.id)
            .slice(0, 8);
    }, [term]);

    const termSlug = (t) => t.term.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className="min-h-screen bg-[#FFFDF9] text-slate-700 font-sans">
            {/* Header */}
            <header className="bg-rose-300 rounded-b-[50px] shadow-inner text-white pt-10 pb-16 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 p-4 opacity-10 rotate-12"><BookOpen size={100} /></div>
                <div className="flex justify-between items-center relative z-20 max-w-4xl mx-auto">
                    <Link to="/" className="text-2xl font-black tracking-widest flex items-center gap-2 text-white no-underline">
                        <Music size={28} /> おんがく手帳
                    </Link>
                </div>
            </header>

            {/* Breadcrumb */}
            <div className="max-w-md mx-auto px-6 pt-6">
                <nav className="flex items-center gap-1 text-[10px] font-bold text-slate-400 mb-4">
                    <Link to="/" className="hover:text-rose-400 transition-colors">トップ</Link>
                    <span>/</span>
                    <Link to={`/index/${encodeURIComponent(term.category)}`} className="hover:text-rose-400 transition-colors">{term.category}</Link>
                    <span>/</span>
                    <span className="text-slate-600">{term.term}</span>
                </nav>
            </div>

            {/* Main Content */}
            <main className="max-w-md mx-auto px-6 pb-20">
                <article className="bg-white rounded-[2.2rem] shadow-xl shadow-slate-100 border border-slate-50 p-8 mb-8">
                    {/* Term Header */}
                    <div className="flex items-start gap-4 mb-6">
                        {term.symbol && (
                            <div className={`w-16 h-16 ${term.color || 'bg-rose-50 text-rose-500'} rounded-2xl flex items-center justify-center font-serif italic font-black text-2xl flex-shrink-0`}>
                                {term.symbol}
                            </div>
                        )}
                        <div>
                            <h1 className="text-2xl font-black text-slate-800 leading-tight">{term.term}</h1>
                            <p className="text-sm text-slate-400 font-bold mt-1">{term.reading}</p>
                        </div>
                    </div>

                    {/* Metadata */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1 bg-rose-50 text-rose-500 rounded-full text-[10px] font-black uppercase">{term.category}</span>
                        <span className="px-3 py-1 bg-indigo-50 text-indigo-500 rounded-full text-[10px] font-black flex items-center gap-1">
                            <Languages size={10} /> {term.lang}
                        </span>
                    </div>

                    {/* Meaning */}
                    <div className="mb-6">
                        <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">意味</h2>
                        <p className="text-lg font-black text-slate-800">{term.meaning}</p>
                    </div>

                    {/* Detail */}
                    <div className="mb-2">
                        <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">解説</h2>
                        <p className="text-sm text-slate-600 font-bold leading-relaxed">{term.detail}</p>
                    </div>
                </article>

                {/* Related Terms */}
                {relatedTerms.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-lg font-black text-slate-800 mb-4 flex items-center gap-2">
                            <Heart size={18} className="text-rose-400" /> 関連する{term.category}用語
                        </h2>
                        <div className="grid grid-cols-2 gap-3">
                            {relatedTerms.map(r => (
                                <Link
                                    key={r.id}
                                    to={`/term/${termSlug(r)}`}
                                    className="block p-4 bg-white rounded-2xl shadow-sm border border-slate-50 hover:shadow-md hover:border-rose-100 transition-all no-underline"
                                >
                                    <p className="text-sm font-black text-slate-700 truncate">{r.term}</p>
                                    <p className="text-[10px] text-slate-400 font-bold mt-1">{r.reading}</p>
                                    <p className="text-[10px] text-slate-500 font-bold mt-1 line-clamp-2">{r.meaning}</p>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Back to Top */}
                <div className="text-center">
                    <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-rose-400 text-white rounded-2xl font-black text-sm shadow-lg hover:bg-rose-500 transition-all no-underline">
                        <ChevronLeft size={16} /> 辞書のトップへ戻る
                    </Link>
                </div>
            </main>

            {/* Footer */}
            <footer className="max-w-md mx-auto px-6 py-12 text-center">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
                    <Link to="/" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-rose-400 transition-colors no-underline">Home</Link>
                    <Link to="/index" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-rose-400 transition-colors no-underline">Index</Link>
                    <a href="/privacy.html" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-rose-400 transition-colors no-underline">Privacy</a>
                </div>
                <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">© 2026 ongaku-techo / biscuitbaby</p>
            </footer>
        </div>
    );
}
