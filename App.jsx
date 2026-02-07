import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Search, Music, Info, ChevronRight, X, 
  Sparkles, Heart, CheckCircle, Edit3, 
  Shuffle, Camera, Loader2, Play, Square, Plus, Minus, BookOpen, Languages, Palette, Settings, Mail, ShieldCheck, User, Volume2, Smartphone, Share, MoreVertical, PlusSquare, ChevronDown, Trophy, Brain, Timer, Clock
} from 'lucide-react';

// --- 用語データファイルからデータを読み込む (GitHub/Vercel環境用) ---
// この1行が termsData.js と接続するための重要な鍵です。
// ※Canvasのプレビューではエラーになりますが、GitHub/Vercel上では正しく動作します。
import { FINAL_TERMS } from './termsData.js';

// --- 記号（アイコン）表示用コンポーネント ---
const TermIcon = ({ item }) => {
  if (item.symbol) {
    return (
      <span className={`${
        item.category === '強弱' 
          ? 'font-serif italic font-black text-2xl tracking-tighter' 
          : 'font-sans font-black text-[10px] md:text-[11px] leading-none text-center uppercase'
      } select-none text-current opacity-90 px-0.5 break-all flex items-center justify-center h-full w-full`}>
        {item.symbol}
      </span>
    );
  }
  return <div className="w-1.5 h-1.5 rounded-full bg-current opacity-20" />;
};

const CATEGORIES = ['All', '強弱', '速度', '奏法', '表情', '楽曲形式', '楽典', '構成', 'お気に入り'];

export default function App() {
  const [theme, setTheme] = useState('kawaii'); 
  const [view, setView] = useState('main'); 
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [favorites, setFavorites] = useState(new Set());
  const [mastered, setMastered] = useState(new Set());
  const [visibleItems, setVisibleItems] = useState(40);

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    const newFavs = new Set(favorites);
    if (newFavs.has(id)) newFavs.delete(id);
    else newFavs.add(id);
    setFavorites(newFavs);
  };

  const filteredTerms = useMemo(() => {
    return FINAL_TERMS.filter(item => {
      const s = searchTerm.toLowerCase();
      const matchesSearch = s === '' || item.term.toLowerCase().includes(s) || item.reading.includes(s) || item.meaning.includes(s);
      const matchesCategory = selectedCategory === 'All' || (selectedCategory === 'お気に入り' ? favorites.has(item.id) : item.category === selectedCategory);
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, favorites]);

  const masteryPercent = Math.round((mastered.size / FINAL_TERMS.length) * 100);

  return (
    <div className={`min-h-screen ${theme === 'kawaii' ? 'bg-[#FFFDF9]' : 'bg-slate-50'} text-slate-700 font-sans pb-40 transition-colors selection:bg-rose-100`}>
      <header className={`pt-10 pb-20 px-6 text-center relative overflow-hidden transition-all duration-500 ${theme === 'kawaii' ? 'bg-rose-300 text-white' : 'bg-slate-900 text-white'}`}>
        <h1 className="text-2xl font-black tracking-widest relative z-10 flex items-center justify-center gap-2 cursor-pointer" onClick={() => setView('main')}><Music size={28} /> おんがく手帳</h1>
        <div className="max-w-xs mx-auto mt-6 relative z-10">
          <div className="flex justify-between items-center mb-1.5 px-1 font-black text-[10px]">
            <span>習得状況: {mastered.size} / {FINAL_TERMS.length}</span>
            <span>{masteryPercent}%</span>
          </div>
          <div className="w-full h-2 bg-black/10 rounded-full overflow-hidden">
            <div className={`h-full bg-white transition-all duration-1000`} style={{ width: `${masteryPercent}%` }}></div>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 -mt-8 relative z-20">
        <div className="flex gap-2 mb-6">
          <div className="relative flex-1 group">
            <input type="text" placeholder="用語を検索..." className="w-full pl-10 pr-4 py-4 rounded-3xl border-none shadow-xl focus:ring-4 outline-none transition-all placeholder:text-slate-300 bg-white" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-rose-400" size={20} />
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide px-1 mb-4">
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-5 py-2 rounded-2xl text-sm font-bold whitespace-nowrap transition-all ${selectedCategory === cat ? 'bg-rose-400 text-white shadow-lg scale-105' : 'bg-white text-rose-300 border border-rose-50'}`}>{cat}</button>
          ))}
        </div>

        <div className="space-y-3">
          {filteredTerms.slice(0, visibleItems).map(item => (
            <div key={item.id} onClick={() => setSelectedTerm(item)} className="bg-white p-4 rounded-[2rem] shadow-sm flex items-center justify-between active:scale-95 group transition-all border-2 border-transparent hover:border-rose-50">
              <div className="flex items-center gap-4 overflow-hidden">
                <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center relative shadow-inner overflow-hidden shrink-0`}>
                  <TermIcon item={item} />
                  {mastered.has(item.id) && <CheckCircle size={14} className="absolute -top-1 -right-1 text-green-500 bg-white rounded-full" fill="currentColor" />}
                </div>
                <div className="text-left min-w-0">
                  <h3 className="font-bold text-slate-800 leading-tight truncate text-sm md:text-base group-hover:text-rose-500">{item.term}</h3>
                  <p className="text-[11px] text-slate-500 font-bold truncate mt-0.5">{item.meaning}</p>
                </div>
              </div>
              <button onClick={(e) => toggleFavorite(e, item.id)} className={`p-1.5 rounded-full ${favorites.has(item.id) ? 'text-rose-400 bg-rose-50' : 'text-slate-100'}`}>
                <Heart size={16} fill={favorites.has(item.id) ? "currentColor" : "none"} />
              </button>
            </div>
          ))}
        </div>
      </main>

      {selectedTerm && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[100] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-sm rounded-[3.5rem] shadow-2xl p-8 text-center relative animate-in zoom-in-95">
            <button onClick={() => setSelectedTerm(null)} className="absolute top-6 right-6 p-2 text-slate-300 hover:text-slate-500"><X size={24} /></button>
            <div className={`w-24 h-24 ${selectedTerm.color} rounded-[2.5rem] mx-auto flex items-center justify-center shadow-xl mb-4`}>
              <TermIcon item={selectedTerm} />
            </div>
            <h2 className="text-3xl font-black text-slate-800">{selectedTerm.term}</h2>
            <p className="text-rose-400 font-black italic uppercase text-sm mt-1 mb-6 tracking-widest">{selectedTerm.reading}</p>
            <div className="bg-rose-50/50 p-6 rounded-[2.5rem] mb-6 shadow-inner">
              <p className="text-slate-800 font-black text-xl mb-3">"{selectedTerm.meaning}"</p>
              <p className="text-slate-500 text-xs leading-relaxed">{selectedTerm.detail}</p>
            </div>
            <button onClick={() => { const n = new Set(mastered); n.has(selectedTerm.id) ? n.delete(selectedTerm.id) : n.add(selectedTerm.id); setMastered(n); }} className={`w-full py-5 rounded-[2.2rem] font-black text-white ${mastered.has(selectedTerm.id) ? 'bg-green-400' : 'bg-rose-400'} shadow-lg active:scale-95 transition-all`}>
              {mastered.has(selectedTerm.id) ? 'おぼえた！' : 'これをおぼえる！'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
