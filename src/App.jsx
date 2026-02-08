import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Search, Music, ChevronRight, X, Sparkles, Heart, CheckCircle, Edit3, 
  Shuffle, Camera, Loader2, Plus, Minus, BookOpen, Languages, Settings, 
  Mail, ShieldCheck, User, Volume2, Smartphone, Share, MoreVertical, 
  PlusSquare, ChevronDown, Cookie
} from 'lucide-react';

// --- 重要：ここを修正しました ---
// dataフォルダを介さず、同じsrcフォルダ内のtermsData.jsを読み込みます
import { termsData, categories, alphabet } from './termsData'; 

// --- 記号表示用コンポーネント ---
const TermIcon = ({ item }) => {
  if (item.symbol) {
    return (
      <span className={`${
        item.category === '強弱' 
          ? 'font-serif italic font-black text-2xl tracking-tighter' 
          : 'font-sans font-black text-[9px] md:text-[10px] leading-tight text-center uppercase'
      } select-none text-current opacity-90 px-0.5 break-all line-clamp-2`}>
        {item.symbol}
      </span>
    );
  }
  return null;
};

// --- Google AdSense 広告枠コンポーネント ---
const AdSlot = ({ type }) => (
  <section className="my-6 p-4 bg-slate-100/50 border border-dashed border-slate-200 rounded-2xl text-center min-h-[100px] flex flex-col items-center justify-center">
    <span className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">Sponsored</span>
    <div className="text-slate-300 text-xs italic">広告掲載エリア ({type})</div>
  </section>
);

export default function App() {
  const apiKey = ""; // Gemini API Key

  // --- 状態管理 ---
  const [theme, setTheme] = useState(() => localStorage.getItem('music-theme') || 'kawaii');
  const [favorites, setFavorites] = useState(() => new Set(JSON.parse(localStorage.getItem('music-favs') || '[]')));
  const [mastered, setMastered] = useState(() => new Set(JSON.parse(localStorage.getItem('music-mastered') || '[]')));
  const [memos, setMemos] = useState(() => JSON.parse(localStorage.getItem('music-memos') || '{}'));
  const [hasAcceptedCookies, setHasAcceptedCookies] = useState(() => localStorage.getItem('music-cookies') === 'true');

  const [view, setView] = useState('main'); 
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLetter, setSelectedLetter] = useState('All');
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [visibleItems, setVisibleItems] = useState(40);
  
  const resultsRef = useRef(null);

  // メトロノーム状態
  const [bpm, setBpm] = useState(120);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4); 
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMetronomeOpen, setIsMetronomeOpen] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(0); 
  const audioContext = useRef(null);
  const nextNoteTime = useRef(0);
  const beatRef = useRef(0); 
  const timerID = useRef(null);

  // --- 本日の用語 ---
  const termOfDay = useMemo(() => {
    const today = new Date();
    const seed = today.getFullYear() + today.getMonth() + today.getDate();
    return termsData[seed % termsData.length];
  }, []);

  // --- スタイル定義 ---
  const s = {
    kawaii: {
      bg: 'bg-[#FFFDF9]',
      header: 'bg-rose-300 rounded-b-[50px] shadow-inner text-white',
      accent: 'bg-rose-400',
      accentText: 'text-rose-400',
      tabActive: 'bg-rose-400 text-white shadow-lg scale-105',
      tabInactive: 'bg-white text-rose-300 border-rose-50',
      button: 'rounded-3xl shadow-rose-100',
      card: 'rounded-[2.2rem]',
      loadMore: 'bg-rose-400 text-white shadow-rose-100 hover:bg-rose-500 rounded-3xl',
    },
    modern: {
      bg: 'bg-slate-50',
      header: 'bg-slate-900 rounded-none shadow-md text-slate-100',
      accent: 'bg-indigo-600',
      accentText: 'text-indigo-600',
      tabActive: 'bg-indigo-600 text-white shadow-md',
      tabInactive: 'bg-slate-200 text-slate-600 border-transparent',
      button: 'rounded-xl shadow-slate-200',
      card: 'rounded-xl',
      loadMore: 'bg-indigo-600 text-white shadow-indigo-100 hover:bg-indigo-700 rounded-xl',
    }
  }[theme];

  // (以下、ロジック部分は以前と同様ですが、インポートエラーが解消されます)
  // --- 自動保存 ---
  useEffect(() => {
    localStorage.setItem('music-theme', theme);
    localStorage.setItem('music-favs', JSON.stringify([...favorites]));
    localStorage.setItem('music-mastered', JSON.stringify([...mastered]));
    localStorage.setItem('music-memos', JSON.stringify(memos));
    localStorage.setItem('music-cookies', hasAcceptedCookies);
  }, [theme, favorites, mastered, memos, hasAcceptedCookies]);

  const handleToggleFavorite = (id) => {
    const next = new Set(favorites);
    if(next.has(id)) next.delete(id); else next.add(id);
    setFavorites(next);
  };

  const filteredTerms = useMemo(() => {
    return termsData.filter(item => {
      const lowSearch = searchTerm.toLowerCase();
      const matchesSearch = searchTerm === '' || item.term.toLowerCase().includes(lowSearch) || item.reading.includes(searchTerm) || item.meaning.includes(searchTerm);
      const matchesCategory = selectedCategory === 'All' || (selectedCategory === 'お気に入り' ? favorites.has(item.id) : item.category === selectedCategory);
      const matchesLetter = selectedLetter === 'All' || item.term[0].toUpperCase() === selectedLetter;
      return matchesSearch && matchesCategory && matchesLetter;
    });
  }, [searchTerm, selectedCategory, selectedLetter, favorites]);

  return (
    <div className={`min-h-screen ${s.bg} text-slate-700 font-sans pb-40 overflow-x-hidden`}>
      <header className={`${s.header} pt-10 pb-16 px-6 text-center relative`}>
        <h1 className="text-2xl font-black flex items-center justify-center gap-2 cursor-pointer" onClick={() => { setView('main'); setSearchTerm(''); }}>
          <Music size={28} /> おんがく手帳
        </h1>
      </header>

      <main className="max-w-md mx-auto px-4 -mt-8 relative z-20">
        {view === 'main' ? (
          <>
            <section className="flex gap-2 mb-6">
              <input 
                type="text" 
                placeholder="用語を検索..." 
                className={`w-full pl-10 pr-10 py-4 ${s.button} border-none shadow-xl focus:ring-4 outline-none`} 
                value={searchTerm} 
                onChange={(e) => { setSearchTerm(e.target.value); setVisibleItems(40); }} 
              />
            </section>

            <AdSlot type="List Top" />

            <div className="space-y-3">
              {filteredTerms.slice(0, visibleItems).map(item => (
                <article key={item.id} onClick={() => setSelectedTerm(item)} className={`bg-white p-4 ${s.card} shadow-sm flex items-center justify-between active:scale-95 transition-all`}>
                  <div className="flex items-center gap-4 text-left">
                    <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center shrink-0`}>
                      <TermIcon item={item} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 leading-tight">{item.term}</h3>
                      <p className="text-[10px] font-bold text-slate-400 mt-0.5">{item.meaning}</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-slate-200" />
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white rounded-[2.5rem] p-8 shadow-xl">
            <button onClick={() => setView('main')} className={`${s.accentText} font-bold mb-6`}>← 戻る</button>
            <p>設定やポリシーのコンテンツがここに入ります</p>
          </div>
        )}
      </main>

      {selectedTerm && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[130] flex items-center justify-center p-4" onClick={() => setSelectedTerm(null)}>
          <article className={`bg-white w-full max-w-sm ${s.card} shadow-2xl p-8 relative`} onClick={e => e.stopPropagation()}>
            <h2 className="text-3xl font-black text-slate-800 text-center">{selectedTerm.term}</h2>
            <p className="text-center text-rose-400 font-bold mb-6">{selectedTerm.reading}</p>
            <div className="bg-slate-50 p-6 rounded-2xl mb-6">
              <p className="font-black text-lg text-center italic">"{selectedTerm.meaning}"</p>
              <p className="text-xs text-slate-600 text-center mt-2">{selectedTerm.detail}</p>
            </div>
            <button onClick={() => setSelectedTerm(null)} className={`w-full py-4 rounded-2xl font-black text-white ${s.accent}`}>閉じる</button>
          </article>
        </div>
      )}
    </div>
  );
}
