import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Search, Music, Info, ChevronRight, X, 
  Sparkles, Heart, CheckCircle, Edit3, 
  Shuffle, Camera, Loader2, Play, Square, Plus, Minus, BookOpen, Languages, Palette, Settings, Mail, ShieldCheck, User, Volume2, Smartphone, Share, MoreVertical, PlusSquare, ChevronDown, Trophy, Cookie
} from 'lucide-react';

// --- インポートパスだけ修正 ---
import { termsData, categories, alphabet } from './termsData';

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
  const apiKey = ""; // Gemini API Key

  // --- 状態管理 (元コードを完全維持) ---
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
  const [aiAnalysis, setAiAnalysis] = useState(null);
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
    return termsData[seed % termsData.length];
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

  // メトロノームロジック
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

  const captureAndScan = async () => {
    if (!videoRef.current || !canvasRef.current) return;
    setIsScanning(true);
    try {
      const ctx = canvasRef.current.getContext('2d');
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      ctx.drawImage(videoRef.current, 0, 0);
      const base64 = canvasRef.current.toDataURL('image/png').split(',')[1];
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: "Identify ONE music term in this image. Output ONLY the term name." }, { inlineData: { mimeType: "image/png", data: base64 } }] }] })
      });
      const data = await res.json();
      const result = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
      if (result) {
        const found = termsData.find(t => result.toLowerCase().includes(t.term.toLowerCase()));
        if (found) { setSelectedTerm(found); setIsCameraOpen(false); }
        else setScanError(`「${result}」は見つかりませんでした。`);
      }
    } catch (e) { setScanError("スキャンエラー。"); }
    finally { setIsScanning(false); }
  };

  const filteredTerms = useMemo(() => {
    return termsData.filter(item => {
      const low = searchTerm.toLowerCase();
      const matchesSearch = low === '' || item.term.toLowerCase().includes(low) || item.reading.includes(low) || item.meaning.includes(low);
      const matchesCategory = selectedCategory === 'All' || (selectedCategory === 'お気に入り' ? favorites.has(item.id) : item.category === selectedCategory);
      const matchesLetter = selectedLetter === 'All' || item.term[0].toUpperCase() === selectedLetter;
      return matchesSearch && matchesCategory && matchesLetter;
    });
  }, [searchTerm, selectedCategory, selectedLetter, favorites]);

  // --- JSX (ここがデザインの肝) ---
  return (
    <div className={`min-h-screen ${s.bg} text-slate-700 font-sans pb-40 transition-colors duration-500 overflow-x-hidden selection:bg-rose-100`}>
      <header className={`${s.header} pt-10 pb-16 px-6 text-center relative overflow-hidden transition-all duration-500`}>
        <div className="absolute top-0 left-0 p-4 opacity-10 rotate-12"><BookOpen size={100} /></div>
        <button onClick={() => setShowSettings(true)} className="absolute top-10 right-6 p-2 bg-white/20 rounded-full hover:bg-white/30 z-30 transition-colors"><Settings size={20} /></button>
        <h1 className="text-2xl font-black tracking-widest relative z-10 flex items-center justify-center gap-2 cursor-pointer text-white" onClick={() => { setView('main'); setSearchTerm(''); }}><Music size={28} /> おんがく手帳</h1>
        <p className="text-[10px] font-bold mt-1 opacity-80 uppercase tracking-[0.3em] relative z-10 font-mono italic text-white/80">Search Optimized v7.5</p>
      </header>

      {!hasAcceptedCookies && (
        <div className="fixed bottom-0 inset-x-0 z-[110] p-4">
          <div className="bg-slate-900 text-white p-6 rounded-[2rem] shadow-2xl flex flex-col md:flex-row items-center gap-4 max-w-2xl mx-auto border border-white/10">
            <Cookie size={40} className="text-yellow-400 shrink-0" />
            <div className="flex-1 text-left text-xs font-bold leading-relaxed">Cookieの使用に同意して、学習体験をパーソナライズしましょう！</div>
            <button onClick={() => setHasAcceptedCookies(true)} className={`${s.accent} px-8 py-3 rounded-2xl font-black text-xs`}>同意する</button>
          </div>
        </div>
      )}

      {showSettings && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-xs rounded-[2.5rem] shadow-2xl p-6 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-black flex items-center gap-2 text-slate-800"><Settings size={20} className={s.accentText} /> 設定</h2>
              <button onClick={() => setShowSettings(false)} className="p-2 text-slate-300 hover:text-slate-500"><X size={24}/></button>
            </div>
            <div className="space-y-6 text-left">
              <section>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">テーマ切替</p>
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => setTheme('kawaii')} className={`py-3 rounded-xl font-bold text-xs ${theme === 'kawaii' ? 'bg-rose-400 text-white shadow-md' : 'bg-slate-50 text-slate-400'}`}>Kawaii</button>
                  <button onClick={() => setTheme('modern')} className={`py-3 rounded-xl font-bold text-xs ${theme === 'modern' ? 'bg-slate-900 text-white shadow-md' : 'bg-slate-50 text-slate-400'}`}>Modern</button>
                </div>
              </section>
              <section>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">サイト情報</p>
                <div className="grid gap-2">
                  <button onClick={() => setView('install')} className="w-full flex items-center gap-3 p-3 bg-slate-50 rounded-xl text-xs font-bold text-slate-600"><Smartphone size={16}/> ホームに追加</button>
                  <button onClick={() => setView('privacy')} className="w-full flex items-center gap-3 p-3 bg-slate-50 rounded-xl text-xs font-bold text-slate-600"><ShieldCheck size={16}/> プライバシー</button>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-md mx-auto px-4 -mt-8 relative z-20">
        {view === 'main' ? (
          <>
            <div className="flex gap-2 mb-6">
              <div className="relative flex-1 group">
                <input type="text" placeholder="用語を検索..." className={`w-full pl-10 pr-10 py-4 ${s.button} border-none shadow-xl focus:ring-4 outline-none transition-all placeholder:text-slate-300`} value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setVisibleItems(40); }} />
                <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${s.accentText}`} size={20} />
              </div>
              <button onClick={() => setIsCameraOpen(true)} className={`bg-white p-4 ${s.button} ${s.accentText} shadow-xl active:scale-90`}><Camera size={24} /></button>
            </div>

            {!searchTerm && (
              <div onClick={() => setSelectedTerm(termOfDay)} className={`${theme === 'kawaii' ? 'bg-gradient-to-br from-rose-50 to-orange-50' : 'bg-slate-800 text-white'} p-6 ${s.card} shadow-lg mb-8 relative overflow-hidden group active:scale-[0.98] cursor-pointer`}>
                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-2 inline-block ${theme === 'kawaii' ? 'bg-rose-400 text-white' : 'bg-indigo-600'}`}>本日の用語</span>
                <h2 className="text-2xl font-black mb-1">{termOfDay.term}</h2>
                <p className={`text-xs font-bold ${theme === 'kawaii' ? 'text-rose-400' : 'text-slate-400'}`}>"{termOfDay.meaning}"</p>
              </div>
            )}

            <div ref={resultsRef} className="scroll-mt-4">
              <div className="flex gap-2 overflow-x-auto pb-2 mb-2 scrollbar-hide px-1">
                {categories.map(cat => (
                  <button key={cat} onClick={() => { setSelectedCategory(cat); setSelectedLetter('All'); setVisibleItems(40); }} className={`px-5 py-2 rounded-2xl text-sm font-bold whitespace-nowrap transition-all ${selectedCategory === cat ? s.tabActive : s.tabInactive + ' border'}`}>{cat}</button>
                ))}
              </div>
              <div className={`flex gap-1.5 overflow-x-auto pb-4 mb-4 scrollbar-hide px-1 border-b ${theme === 'kawaii' ? 'border-rose-50' : 'border-slate-200'}`}>
                {alphabet.map(letter => (
                  <button key={letter} onClick={() => { setSelectedLetter(letter); setVisibleItems(40); }} className={`min-w-[40px] h-7 px-2 rounded-xl text-[9px] font-black transition-all border ${selectedLetter === letter ? (theme === 'kawaii' ? 'bg-rose-100 text-rose-500 border-rose-200 shadow-sm' : 'bg-indigo-600 text-white border-indigo-600 shadow-sm') : 'bg-white text-slate-400 border-slate-200'}`}>{letter}</button>
                ))}
              </div>
            </div>

            <AdSlot type="List Top" />

            <div className="space-y-3">
              {filteredTerms.slice(0, visibleItems).map(item => (
                <div key={item.id} onClick={() => setSelectedTerm(item)} className={`bg-white p-4 ${s.card} shadow-sm flex items-center justify-between border-2 border-transparent hover:border-slate-100 active:scale-95 transition-all`}>
                  <div className="flex items-center gap-4 overflow-hidden">
                    <div className={`w-12 h-12 ${item.color} ${theme === 'kawaii' ? 'rounded-2xl' : 'rounded-lg'} flex items-center justify-center relative shadow-inner shrink-0 overflow-hidden`}>
                      <TermIcon item={item} />
                      {mastered.has(item.id) && <CheckCircle size={14} className="absolute -top-1 -right-1 text-green-500 bg-white rounded-full shadow-sm" fill="currentColor" />}
                    </div>
                    <div className="min-w-0 text-left">
                      <h3 className="font-bold text-slate-800 leading-tight truncate">{item.term}</h3>
                      <p className="text-[10px] font-bold text-slate-400 truncate mt-0.5">{item.meaning}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <Heart size={20} className={favorites.has(item.id) ? (theme === 'kawaii' ? 'text-rose-400' : 'text-indigo-600') : ''} fill={favorites.has(item.id) ? "currentColor" : "none"} />
                    <ChevronRight size={18} />
                  </div>
                </div>
              ))}
            </div>
            <AdSlot type="List Bottom" />
          </>
        ) : (
          <div className="bg-white rounded-[2.5rem] p-8 shadow-xl animate-in slide-in-from-bottom-4 text-left">
            <button onClick={() => setView('main')} className={`${s.accentText} font-bold text-sm mb-6 flex items-center gap-1`}>← もどる</button>
            <h2 className="text-2xl font-black text-slate-800 mb-4">{view === 'privacy' ? 'プライバシーポリシー' : 'ホームに追加'}</h2>
            <p className="text-xs text-slate-500 leading-loose">コンテンツをここに配置します。</p>
          </div>
        )}
      </main>

      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-[100]">
        {isMetronomeOpen && (
          <div className={`bg-white p-6 ${s.card} shadow-2xl border-2 border-slate-100 w-72 animate-in slide-in-from-bottom-4`}>
            <div className="flex justify-between items-center mb-4"><span className={`${s.accentText} font-black text-[10px] uppercase tracking-widest`}>Metronome</span><button onClick={() => setIsMetronomeOpen(false)}><X size={20}/></button></div>
            <div className="grid grid-cols-4 gap-1 mb-4">
              {[2, 3, 4, 6].map(num => (
                <button key={num} onClick={() => { setBeatsPerMeasure(num); beatRef.current = 0; setCurrentBeat(0); }} className={`py-1 rounded-xl text-[10px] font-black ${beatsPerMeasure === num ? s.accent + ' text-white' : 'bg-slate-100 text-slate-400'}`}>{num === 6 ? '6/8' : `${num}拍`}</button>
              ))}
            </div>
            <div className="text-center mb-6"><div className={`text-5xl font-black ${isPlaying && currentBeat === 0 ? s.accentText : 'text-slate-800'}`}>{bpm}</div></div>
            <input type="range" min="40" max="240" value={bpm} onChange={(e) => setBpm(parseInt(e.target.value))} className="w-full mb-6" />
            <button onClick={toggleMetronome} className={`w-full py-4 rounded-2xl font-black text-white ${isPlaying ? 'bg-slate-400' : s.accent}`}>{isPlaying ? 'STOP' : 'START'}</button>
          </div>
        )}
        <button onClick={() => setIsMetronomeOpen(!isMetronomeOpen)} className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-90 bg-white ${s.accentText} border-2 border-slate-100`}>
          <Volume2 size={28} />
        </button>
      </div>

      {selectedTerm && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[130] flex items-center justify-center p-4">
          <div className={`bg-white w-full max-w-sm ${s.card} shadow-2xl p-8 relative max-h-[90vh] overflow-y-auto`}>
            <button onClick={() => setSelectedTerm(null)} className="absolute top-6 right-6 p-3 bg-slate-50 text-slate-300 rounded-2xl"><X size={24} /></button>
            <div className={`w-24 h-24 ${selectedTerm.color} rounded-[2.5rem] mx-auto flex items-center justify-center shadow-xl mb-4`}><TermIcon item={selectedTerm} /></div>
            <h2 className="text-3xl font-black text-slate-800 text-center">{selectedTerm.term}</h2>
            <p className="text-center text-rose-400 font-bold mb-6 italic">{selectedTerm.reading}</p>
            <div className="bg-rose-50/50 p-6 rounded-[2.5rem] border border-rose-100 mb-6 text-center">
              <p className="font-black text-xl mb-2">"{selectedTerm.meaning}"</p>
              <p className="text-xs text-slate-600 leading-relaxed px-2">{selectedTerm.detail}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-3xl mb-6">
              <p className="text-[10px] font-black text-amber-600 mb-2 flex items-center gap-1"><Edit3 size={12}/>じぶんメモ</p>
              <textarea className="w-full bg-transparent border-none text-sm h-16 outline-none" placeholder="気づきをメモ..." value={memos[selectedTerm.id] || ''} onChange={(e) => setMemos({...memos, [selectedTerm.id]: e.target.value})} />
            </div>
            <button onClick={() => { const n = new Set(mastered); if(n.has(selectedTerm.id)) n.delete(selectedTerm.id); else n.add(selectedTerm.id); setMastered(n); }} className={`w-full py-5 rounded-[2.2rem] font-black text-white ${mastered.has(selectedTerm.id) ? 'bg-green-400' : s.accent}`}>
              {mastered.has(selectedTerm.id) ? 'おぼえた！' : 'これをおぼえる！'}
            </button>
          </div>
        </div>
      )}

      {isCameraOpen && (
        <div className="fixed inset-0 bg-black z-[150] flex flex-col items-center">
          <video ref={videoRef} autoPlay playsInline className="flex-1 w-full object-cover" />
          <canvas ref={canvasRef} className="hidden" />
          <div className="absolute top-6 right-6"><button onClick={() => setIsCameraOpen(false)} className="p-3 bg-white/20 rounded-full text-white"><X size={24} /></button></div>
          <div className={`w-full bg-white rounded-t-[40px] p-8 flex flex-col items-center gap-4`}>
             <button onClick={captureAndScan} className={`w-20 h-20 rounded-full border-4 ${s.accentText} p-1 flex items-center justify-center`}>
               {isScanning ? <Loader2 className="animate-spin" size={32} /> : <div className={`w-full h-full ${s.accent} rounded-full`} />}
             </button>
          </div>
        </div>
      )}
    </div>
  );
}
