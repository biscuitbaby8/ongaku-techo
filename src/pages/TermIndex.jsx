import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Music, BookOpen, ChevronRight, Search } from 'lucide-react';
import { termsData as INITIAL_TERMS, CATEGORIES } from '../data/termsData';

export default function TermIndex() {
    const { category } = useParams();
    const [searchTerm, setSearchTerm] = useState('');

    const termSlug = (t) => t.term.toLowerCase().replace(/\s+/g, '-');

    // Group terms by category
    const groupedTerms = useMemo(() => {
        let filtered = INITIAL_TERMS;

        if (category) {
            const decoded = decodeURIComponent(category);
            filtered = filtered.filter(t => t.category === decoded);
        }

        if (searchTerm) {
            const s = searchTerm.toLowerCase();
            filtered = filtered.filter(t =>
                t.term.toLowerCase().includes(s) ||
                t.reading.includes(s) ||
                t.meaning.includes(s)
            );
        }

        const groups = {};
        filtered.forEach(t => {
            if (!groups[t.category]) groups[t.category] = [];
            groups[t.category].push(t);
        });
        return groups;
    }, [category, searchTerm]);

    const currentCategory = category ? decodeURIComponent(category) : null;
    const totalCount = Object.values(groupedTerms).reduce((acc, arr) => acc + arr.length, 0);

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

            <main className="max-w-md mx-auto px-6 py-8">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-1 text-[10px] font-bold text-slate-400 mb-6">
                    <Link to="/" className="hover:text-rose-400 transition-colors">トップ</Link>
                    <span>/</span>
                    {currentCategory ? (
                        <>
                            <Link to="/index" className="hover:text-rose-400 transition-colors">用語さくいん</Link>
                            <span>/</span>
                            <span className="text-slate-600">{currentCategory}</span>
                        </>
                    ) : (
                        <span className="text-slate-600">用語さくいん</span>
                    )}
                </nav>

                <h1 className="text-2xl font-black text-slate-800 mb-2">
                    {currentCategory ? `${currentCategory}の用語一覧` : '音楽用語さくいん'}
                </h1>
                <p className="text-sm text-slate-500 font-bold mb-6">全 {totalCount} 語</p>

                {/* Search */}
                <div className="relative mb-8">
                    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="用語を検索..."
                        className="w-full pl-12 pr-5 py-4 bg-white rounded-2xl border-2 border-slate-100 text-sm font-bold focus:outline-none focus:border-rose-200 transition-all shadow-sm"
                    />
                </div>

                {/* Category Navigation (only on main index) */}
                {!currentCategory && (
                    <div className="flex flex-wrap gap-2 mb-8">
                        {CATEGORIES.filter(c => c !== 'All').map(cat => (
                            <Link
                                key={cat}
                                to={`/index/${encodeURIComponent(cat)}`}
                                className="px-4 py-2 bg-white border-2 border-rose-100 text-rose-400 rounded-2xl text-xs font-black hover:bg-rose-50 transition-all no-underline shadow-sm"
                            >
                                {cat} ({INITIAL_TERMS.filter(t => t.category === cat).length})
                            </Link>
                        ))}
                    </div>
                )}

                {/* Term Lists */}
                {Object.entries(groupedTerms).map(([cat, terms]) => (
                    <section key={cat} className="mb-10">
                        {!currentCategory && (
                            <h2 className="text-lg font-black text-slate-700 mb-4 border-l-4 border-rose-300 pl-3">
                                <Link to={`/index/${encodeURIComponent(cat)}`} className="hover:text-rose-400 transition-colors no-underline text-slate-700">
                                    {cat}
                                </Link>
                                <span className="text-slate-300 text-sm ml-2">({terms.length})</span>
                            </h2>
                        )}
                        <div className="space-y-2">
                            {terms.map(term => (
                                <Link
                                    key={term.id}
                                    to={`/term/${termSlug(term)}`}
                                    className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-50 hover:shadow-md hover:border-rose-100 transition-all no-underline group"
                                >
                                    {term.symbol && (
                                        <div className={`w-10 h-10 ${term.color || 'bg-rose-50 text-rose-500'} rounded-xl flex items-center justify-center font-serif italic font-black text-sm flex-shrink-0`}>
                                            {term.symbol}
                                        </div>
                                    )}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-black text-slate-700 group-hover:text-rose-500 transition-colors truncate">{term.term}</p>
                                        <p className="text-[10px] text-slate-400 font-bold">{term.reading} — {term.meaning}</p>
                                    </div>
                                    <ChevronRight size={16} className="text-slate-300 group-hover:text-rose-300 transition-colors flex-shrink-0" />
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}

                {totalCount === 0 && (
                    <div className="text-center py-12">
                        <p className="text-slate-400 font-bold text-sm">該当する用語が見つかりません。</p>
                    </div>
                )}
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
