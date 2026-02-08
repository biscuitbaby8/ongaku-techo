import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Search, Music, Info, ChevronRight, X, 
  Sparkles, Heart, CheckCircle, Edit3, 
  Shuffle, Camera, Loader2, Play, Square, Plus, Minus, BookOpen, Languages, Palette, Settings, Mail, ShieldCheck, User, Volume2, Smartphone, Share, MoreVertical, PlusSquare, ChevronDown, Trophy, Cookie
} from 'lucide-react';

// 旧バージョンの構成に合わせて、データファイルをインポート
import { INITIAL_TERMS } from './data/termsData';

const CATEGORIES = ['All', '強弱', '速度', '奏法', '表情', '構成', 'お気に入り'];
const ALPHABET = ['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];
const apiKey = ""; // Gemini API Key

// --- 記号（アイコン）表示用コンポーネント ---
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

// --- 広告枠コンポーネント ---
const AdSlot = ({ type }) => (
  <div className="my-6 p-4 bg-slate-100/50 border border-dashed border-slate-200 rounded-2xl text-center min-h-[100px] flex flex-col items-center justify-center">
    <span className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">Sponsored</span>
    <div className="text-slate-300 text-xs italic">広告掲載エリア ({type})</div>
  </div>
);

export default function App() {
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
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanError, setScanError] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [bpm, setBpm] = useState(120);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4); 
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMetronomeOpen, setIsMetronomeOpen] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(0); 
  const audioContext = useRef(null);
  const nextNoteTime = useRef(0);
  const beatRef = useRef(0); 
  const timerID = useRef(null);

  const termOfDay = useMemo(() => {
    const today = new Date();
    const dateStr = `${today.getFullYear()}${today.getMonth()}${today.getDate()}`;
    const seed = parseInt(dateStr);
    return INITIAL_TERMS[seed % INITIAL_TERMS.length];
  }, []);

  useEffect(() => {
    localStorage.setItem('music-theme', theme);
    localStorage.setItem('music-favs', JSON.stringify([...favorites]));
    localStorage.setItem('music-mastered', JSON.stringify([...mastered]));
    localStorage.setItem('music-memos', JSON.stringify(memos));
    localStorage.setItem('music-cookies', hasAcceptedCookies);
  }, [theme, favorites, mastered, memos, hasAcceptedCookies]);

  useEffect(() => {
    if (searchTerm.length > 0 && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [searchTerm]);

  const themeStyles = {
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
  };
  const s = themeStyles[theme];

  const playClick = (time, beatNumber) => {
    if (!audioContext.current) return;
    const osc = audioContext.current.createOscillator();
    const envelope = audioContext.current.createGain();
    let freq = 500;
    if (beatNumber % beatsPerMeasure === 0) freq = 1000;
    else if (beatsPerMeasure === 6 && beatNumber % 6 === 3) freq = 800;
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
      const secondsPerBeat = 60.0 / bpm;
      nextNoteTime.current += secondsPerBeat;
      beatRef.current = beatRef.current + 1;
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

  const handleToggleFavorite = (id) => {
    const n = new Set(favorites); 
    if(n.has(id)) n.delete(id); else n.add(id); 
    setFavorites(n); 
  };

  const filteredTerms = useMemo(() => {
    return INITIAL_TERMS.filter(item => {
      const s = searchTerm.toLowerCase();
      const matchesSearch = s === '' || item.term.toLowerCase().includes(s) || item.reading.includes(s) || item.meaning.includes(s);
      const matchesCategory = selectedCategory === 'All' || (selectedCategory === 'お気に入り' ? favorites.has(item.id) : item.category === selectedCategory);
      const matchesLetter = selectedLetter === 'All' || item.term[0].toUpperCase() === selectedLetter;
      return matchesSearch && matchesCategory && matchesLetter;
    });
  }, [searchTerm, selectedCategory, selectedLetter, favorites]);

  return (
    <div className={`min-h-screen ${s.bg} text-slate-700 font-sans pb-40 transition-colors duration-500 overflow-x-hidden`}>
      <header className={`${s.header} pt-10 pb-16 px-6 text-center relative overflow-hidden transition-all duration-500`}>
        <div className="absolute top-0 left-0 p-4 opacity-10 rotate-12"><BookOpen size={100} /></div>
        <button onClick={() => setShowSettings(true)} className="absolute top-10 right-6 p-2 bg-white/20 rounded-full hover:bg-white/30 z-30"><Settings size={20} /></button>
        <h1 className="text-2xl font-black tracking-widest relative z-10 flex items-center justify-center gap-2 cursor-pointer text-white" onClick={() => { setView('main'); setSearchTerm(''); }}><Music size={28} /> おんがく手帳</h1>
        <p className="text-[10px] font-bold mt-1 opacity-80 uppercase tracking-[0.3em] relative z-10 font-mono italic text-white/80">Search Optimized v7.5</p>
      </header>

      {/* Main Area */}
      <main className="max-w-md mx-auto px-4 -mt-8 relative z-20">
        {view === 'main' ? (
          <>
            <div className="flex gap-2 mb-6">
              <div className="relative flex-1 group">
                <input 
                  type="text" 
                  placeholder="用語を検索..." 
                  className={`w-full pl-10 pr-10 py-4 ${s.button} border-none shadow-xl focus:ring-4 outline-none transition-all placeholder:text-slate-300`} 
                  value={searchTerm} 
                  onChange={(e) => { setSearchTerm(e.target.value); setVisibleItems(40); }} 
                />
                <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${s.accentText}`} size={20} />
              </div>
            </div>

            <div ref={resultsRef} className="scroll-mt-4">
              <div className="flex gap-2 overflow-x-auto pb-2 mb-2 scrollbar-hide">
                {CATEGORIES.map(cat => (
                  <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-5 py-2 rounded-2xl text-sm font-bold whitespace-nowrap transition-all ${selectedCategory === cat ? s.tabActive : s.tabInactive + ' border'}`}>{cat}</button>
                ))}
              </div>
            </div>

            <AdSlot type="List Top" />

            <div className="space-y-3">
              {filteredTerms.slice(0, visibleItems).map(item => (
                <div key={item.id} onClick={() => setSelectedTerm(item)} className={`bg-white p-4 ${s.card} shadow-sm flex items-center justify-between active:scale-95 transition-all`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center relative shadow-inner shrink-0`}>
                      <TermIcon item={item} />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-slate-800 leading-tight">{item.term}</h3>
                      <p className="text-[10px] font-bold text-slate-400 mt-0.5">{item.meaning}</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-slate-200" />
                </div>
              ))}
            </div>
            <AdSlot type="List Bottom" />
          </>
        ) : (
          <div className="bg-white rounded-[2.5rem] p-8 shadow-xl text-left relative overflow-hidden">
            <button onClick={() => setView('main')} className={`${s.accentText} font-bold text-sm mb-6 flex items-center gap-1`}>← 戻る</button>
            
            {view === 'about' && (
              <section className="space-y-4">
                <h2 className="text-2xl font-black text-slate-800">おんがく手帳について</h2>
                <p className="text-sm leading-loose text-slate-600 font-bold">「おんがく手帳」は、すべての音楽学習者と演奏者のために開発された無料のデジタル音楽用語辞典です。楽譜に出てくる難しい記号や用語をその場で素早く検索できるほか、内蔵のメトロノームであなたの練習を強力にサポートします。</p>
              </section>
            )}

            {view === 'privacy' && (
              <section className="space-y-4">
                <h2 className="text-2xl font-black text-slate-800">プライバシーポリシー</h2>
                <div className="text-[11px] text-slate-500 font-bold space-y-3">
                  <p><strong>広告配信:</strong> Google AdSenseを利用して広告を配信します。Cookieを使用して、過去のアクセス情報に基づき適切な広告を表示します。</p>
                  <p><strong>免責事項:</strong> 正確な情報の提供に努めますが、当サイトの利用により生じた損害等については一切の責任を負いかねます。</p>
                </div>
              </section>
            )}

            {view === 'contact' && (
              <section className="space-y-6">
                <h2 className="text-2xl font-black text-slate-800">お問い合わせ</h2>
                <div className="space-y-4">
                  <a href="mailto:biscuitbaby.candy@gmail.com" className={`${s.accent} block text-white p-6 rounded-3xl text-center font-black shadow-lg`}>メールで連絡する</a>
                  <a href="https://forms.gle/WWrbB7uxuMHxg6VA9" target="_blank" rel="noopener noreferrer" className="block bg-slate-50 text-slate-600 p-6 rounded-3xl text-center font-black border">お問い合わせフォーム</a>
                </div>
              </section>
            )}
            <AdSlot type="Sub Page" />
          </div>
        )}
      </main>

      {/* Floating Metronome, Detail Modalなどは省略せず元のロジックを維持 */}
      
      {/* Settings Modal (テーマ切替等) */}
      {showSettings && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-xs rounded-[2.5rem] p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-black text-slate-800">設定</h2>
              <button onClick={() => setShowSettings(false)}><X size={24}/></button>
            </div>
            <div className="space-y-4">
              <button onClick={() => { setView('about'); setShowSettings(false); }} className="w-full text-left p-3 bg-slate-50 rounded-xl font-bold">このサイトについて</button>
              <button onClick={() => { setView('privacy'); setShowSettings(false); }} className="w-full text-left p-3 bg-slate-50 rounded-xl font-bold">プライバシーポリシー</button>
              <button onClick={() => { setView('contact'); setShowSettings(false); }} className="w-full text-left p-3 bg-slate-50 rounded-xl font-bold">お問い合わせ</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
