import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Search, Music, ChevronRight, X, Sparkles, Heart, CheckCircle, Edit3, 
  Shuffle, Camera, Loader2, Plus, Minus, BookOpen, Languages, Settings, 
  Mail, ShieldCheck, User, Volume2, Smartphone, Share, MoreVertical, 
  PlusSquare, ChevronDown, Cookie
} from 'lucide-react';

// 外部データのインポート
import { termsData, categories, alphabet } from './data/termsData';

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
    {/* 実際の審査通過後はここに <ins> タグを配置 */}
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

  // カメラ・スキャン状態
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanError, setScanError] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // --- 本日の用語 ---
  const termOfDay = useMemo(() => {
    const today = new Date();
    const seed = today.getFullYear() + today.getMonth() + today.getDate();
    return termsData[seed % termsData.length];
  }, []);

  // --- 自動保存 ---
  useEffect(() => {
    localStorage.setItem('music-theme', theme);
    localStorage.setItem('music-favs', JSON.stringify([...favorites]));
    localStorage.setItem('music-mastered', JSON.stringify([...mastered]));
    localStorage.setItem('music-memos', JSON.stringify(memos));
    localStorage.setItem('music-cookies', hasAcceptedCookies);
  }, [theme, favorites, mastered, memos, hasAcceptedCookies]);

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

  // --- メトロノームロジック ---
  const playClick = (time, beatNumber) => {
    if (!audioContext.current) return;
    const osc = audioContext.current.createOscillator();
    const envelope = audioContext.current.createGain();
    let freq = (beatNumber % beatsPerMeasure === 0) ? 1000 : 500;
    if (beatsPerMeasure === 6 && beatNumber % 6 === 3) freq = 800;
    osc.frequency.value = freq;
    envelope.gain.value = 0.5;
    envelope.gain.exponentialRampToValueAtTime(0.001, time + 0.1);
    osc.connect(envelope); envelope.connect(audioContext.current.destination);
    osc.start(time); osc.stop(time + 0.1);
  };

  const scheduler = () => {
    while (nextNoteTime.current < audioContext.current.currentTime + 0.1) {
      playClick(nextNoteTime.current, beatRef.current);
      setCurrentBeat(beatRef.current % beatsPerMeasure);
      nextNoteTime.current += 60.0 / bpm;
      beatRef.current++;
    }
    timerID.current = requestAnimationFrame(scheduler);
  };

  const toggleMetronome = async () => {
    if (!isPlaying) {
      if (!audioContext.current) audioContext.current = new (window.AudioContext || window.webkitAudioContext)();
      if (audioContext.current.state === 'suspended') await audioContext.current.resume();
      beatRef.current = 0; setCurrentBeat(0);
      nextNoteTime.current = audioContext.current.currentTime;
      setIsPlaying(true);
    } else setIsPlaying(false);
  };

  useEffect(() => {
    if (isPlaying) timerID.current = requestAnimationFrame(scheduler);
    else cancelAnimationFrame(timerID.current);
    return () => cancelAnimationFrame(timerID.current);
  }, [isPlaying, bpm, beatsPerMeasure]);

  // --- 検索フィルタリング ---
  const filteredTerms = useMemo(() => {
    return termsData.filter(item => {
      const lowSearch = searchTerm.toLowerCase();
      const matchesSearch = searchTerm === '' || item.term.toLowerCase().includes(lowSearch) || item.reading.includes(searchTerm) || item.meaning.includes(searchTerm);
      const matchesCategory = selectedCategory === 'All' || (selectedCategory === 'お気に入り' ? favorites.has(item.id) : item.category === selectedCategory);
      const matchesLetter = selectedLetter === 'All' || item.term[0].toUpperCase() === selectedLetter;
      return matchesSearch && matchesCategory && matchesLetter;
    });
  }, [searchTerm, selectedCategory, selectedLetter, favorites]);

  const handleToggleFavorite = (id) => {
    const next = new Set(favorites);
    if(next.has(id)) next.delete(id); else next.add(id);
    setFavorites(next);
  };

  return (
    <div className={`min-h-screen ${s.bg} text-slate-700 font-sans pb-40 transition-colors duration-500 overflow-x-hidden selection:bg-rose-100`}>
      {/* Header (Semantic) */}
      <header className={`${s.header} pt-10 pb-16 px-6 text-center relative overflow-hidden transition-all duration-500`}>
        <div className="absolute top-0 left-0 p-4 opacity-10 rotate-12"><BookOpen size={100} /></div>
        <button onClick={() => setShowSettings(true)} className="absolute top-10 right-6 p-2 bg-white/20 rounded-full hover:bg-white/30 z-30 transition-colors"><Settings size={20} /></button>
        <h1 className="text-2xl font-black tracking-widest relative z-10 flex items-center justify-center gap-2 cursor-pointer text-white" onClick={() => { setView('main'); setSearchTerm(''); }}>
          <Music size={28} /> おんがく手帳
        </h1>
        <p className="text-[10px] font-bold mt-1 opacity-80 uppercase tracking-[0.3em] relative z-10 font-mono italic text-white/80">Search Optimized v7.5</p>
      </header>

      {/* Main Content Area */}
      <main className="max-w-md mx-auto px-4 -mt-8 relative z-20">
        {view === 'main' ? (
          <>
            {/* Search Box */}
            <section className="flex gap-2 mb-6">
              <div className="relative flex-1">
                <input 
                  type="text" 
                  placeholder="用語を検索..." 
                  className={`w-full pl-10 pr-10 py-4 ${s.button} border-none shadow-xl focus:ring-4 outline-none transition-all placeholder:text-slate-300`} 
                  value={searchTerm} 
                  onChange={(e) => { setSearchTerm(e.target.value); setVisibleItems(40); }} 
                />
                <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${s.accentText}`} size={20} />
              </div>
              <button onClick={() => setSelectedTerm(termsData[Math.floor(Math.random()*termsData.length)])} className={`bg-white p-4 ${s.button} ${s.accentText} shadow-xl active:scale-90`} aria-label="ランダム抽出"><Shuffle size={24} /></button>
            </section>

            {/* Daily Term (Article Tag for SEO) */}
            {!searchTerm && (
              <article onClick={() => setSelectedTerm(termOfDay)} className={`${theme === 'kawaii' ? 'bg-gradient-to-br from-rose-50 to-orange-50' : 'bg-slate-800 text-white'} p-6 ${s.card} shadow-lg mb-8 relative overflow-hidden group active:scale-[0.98] cursor-pointer`}>
                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-2 inline-block ${theme === 'kawaii' ? 'bg-rose-400 text-white' : 'bg-indigo-600'}`}>本日の用語</span>
                <h2 className="text-2xl font-black mb-1">{termOfDay.term}</h2>
                <p className={`text-xs font-bold ${theme === 'kawaii' ? 'text-rose-400' : 'text-slate-400'}`}>"{termOfDay.meaning}"</p>
              </article>
            )}

            <div ref={resultsRef} className="scroll-mt-4">
              {/* Category & Alpha Tabs */}
              <nav className="flex gap-2 overflow-x-auto pb-2 mb-2 scrollbar-hide px-1">
                {categories.map(cat => (
                  <button key={cat} onClick={() => { setSelectedCategory(cat); setSelectedLetter('All'); setVisibleItems(40); }} className={`px-5 py-2 rounded-2xl text-sm font-bold whitespace-nowrap transition-all ${selectedCategory === cat ? s.tabActive : s.tabInactive + ' border'}`}>{cat}</button>
                ))}
              </nav>
              <nav className={`flex gap-1.5 overflow-x-auto pb-4 mb-4 scrollbar-hide px-1 border-b ${theme === 'kawaii' ? 'border-rose-50' : 'border-slate-200'}`}>
                {alphabet.map(letter => (
                  <button key={letter} onClick={() => { setSelectedLetter(letter); setVisibleItems(40); }} className={`min-w-[40px] h-7 px-2 rounded-xl text-[9px] font-black transition-all border ${selectedLetter === letter ? (theme === 'kawaii' ? 'bg-rose-100 text-rose-500 border-rose-200' : 'bg-indigo-600 text-white') : 'bg-white text-slate-400'}`}>{letter}</button>
                ))}
              </nav>
            </div>

            <AdSlot type="List Top" />

            {/* Terms List (Article wrapped items for SEO) */}
            <div className="space-y-3">
              {filteredTerms.slice(0, visibleItems).map(item => (
                <article key={item.id} onClick={() => setSelectedTerm(item)} className={`bg-white p-4 ${s.card} shadow-sm flex items-center justify-between border-2 border-transparent hover:border-slate-100 active:scale-95 transition-all`}>
                  <div className="flex items-center gap-4 overflow-hidden text-left">
                    <div className={`w-12 h-12 ${item.color} ${theme === 'kawaii' ? 'rounded-2xl' : 'rounded-lg'} flex items-center justify-center shrink-0`}>
                      <TermIcon item={item} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-slate-800 leading-tight truncate">{item.term}</h3>
                      <p className="text-[10px] font-bold text-slate-400 truncate mt-0.5">{item.meaning}</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-slate-200" />
                </article>
              ))}
              
              {filteredTerms.length > visibleItems && (
                <button onClick={() => setVisibleItems(p => p + 40)} className={`w-full py-5 mt-6 font-black text-sm flex items-center justify-center gap-2 ${s.loadMore}`}>
                  さらに表示 ({filteredTerms.length - visibleItems}語)
                </button>
              )}
            </div>
            
            <AdSlot type="List Bottom" />
          </>
        ) : (
          /* Static Sub Pages */
          <div className="bg-white rounded-[2.5rem] p-8 shadow-xl text-left">
            <button onClick={() => setView('main')} className={`${s.accentText} font-bold text-sm mb-6 flex items-center gap-1`}>← 辞典にもどる</button>
            {view === 'privacy' && (
              <section className="space-y-4">
                <h2 className="text-2xl font-black">Privacy Policy</h2>
                <p className="text-xs text-slate-500 font-bold leading-relaxed">詳細は public/privacy.html を参照してください。当サイトはGoogle AdSenseを使用し、適切なデータ保護を行っています。</p>
              </section>
            )}
            {/* 他のサブページも同様に配置 */}
          </div>
        )}
      </main>

      {/* Floating Metronome */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-[100]">
        {isMetronomeOpen && (
          <div className={`bg-white p-6 ${s.card} shadow-2xl border-2 border-slate-100 w-72 animate-in slide-in-from-bottom-4`}>
             <div className="flex justify-between items-center mb-4">
               <span className={`${s.accentText} font-black text-[10px] uppercase`}>Metronome</span>
               <button onClick={() => setIsMetronomeOpen(false)}><X size={20} className="text-slate-300"/></button>
             </div>
             <div className="text-center text-5xl font-black mb-6">{bpm}</div>
             <input type="range" min="40" max="240" value={bpm} onChange={(e) => setBpm(parseInt(e.target.value))} className={`w-full mb-6 ${s.accentText}`} />
             <button onClick={toggleMetronome} className={`w-full py-4 rounded-2xl font-black text-white ${isPlaying ? 'bg-slate-400' : s.accent}`}>{isPlaying ? 'STOP' : 'START'}</button>
          </div>
        )}
        <button onClick={() => setIsMetronomeOpen(!isMetronomeOpen)} className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-90 bg-white ${s.accentText}`}>
          <Volume2 size={28} />
        </button>
      </div>

      {/* Detail Modal */}
      {selectedTerm && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[130] flex items-center justify-center p-4">
          <article className={`bg-white w-full max-w-sm ${s.card} shadow-2xl p-8 relative max-h-[90vh] overflow-y-auto`}>
            <button onClick={() => setSelectedTerm(null)} className="absolute top-6 right-6 p-2 bg-slate-50 rounded-xl"><X size={20}/></button>
            <div className={`w-20 h-20 ${selectedTerm.color} rounded-2xl mx-auto flex items-center justify-center mb-4`}>
              <TermIcon item={selectedTerm} />
            </div>
            <h2 className="text-3xl font-black text-slate-800 text-center">{selectedTerm.term}</h2>
            <p className="text-center text-rose-400 font-bold mb-6">{selectedTerm.reading}</p>
            <div className="bg-slate-50 p-6 rounded-2xl mb-6">
              <p className="font-black text-lg mb-2 text-center italic">"{selectedTerm.meaning}"</p>
              <p className="text-xs text-slate-600 leading-relaxed text-center">{selectedTerm.detail}</p>
            </div>
            <button onClick={() => handleToggleFavorite(selectedTerm.id)} className={`w-full py-4 rounded-2xl font-black transition-all ${favorites.has(selectedTerm.id) ? 'bg-rose-50 text-rose-400' : 'bg-slate-100 text-slate-400'}`}>
              <Heart className="inline mr-2" size={18} fill={favorites.has(selectedTerm.id) ? "currentColor" : "none"} />
              {favorites.has(selectedTerm.id) ? 'お気に入りから外す' : 'お気に入りに追加'}
            </button>
          </article>
        </div>
      )}

      {/* Cookie Banner */}
      {!hasAcceptedCookies && (
        <div className="fixed bottom-0 inset-x-0 z-[110] p-4">
          <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-2xl flex items-center gap-4 max-w-2xl mx-auto">
            <Cookie size={24} className="text-yellow-400" />
            <p className="flex-1 text-xs font-bold">Cookieの使用に同意して、学習体験を最適化しましょう。</p>
            <button onClick={() => setHasAcceptedCookies(true)} className={`${s.accent} px-6 py-2 rounded-xl text-xs font-black`}>同意</button>
          </div>
        </div>
      )}
    </div>
  );
}
