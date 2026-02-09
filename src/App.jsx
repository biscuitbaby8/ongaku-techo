import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Search, Music, Info, ChevronRight, X, 
  Sparkles, Heart, CheckCircle, Edit3, 
  Shuffle, Camera, Loader2, Play, Square, Plus, Minus, BookOpen, Languages, Palette, Settings, Mail, ShieldCheck, User, Volume2, Smartphone, Share, MoreVertical, PlusSquare, ChevronDown, Trophy, Cookie, ExternalLink
} from 'lucide-react';

// --- データのインポート ---
import { termsData as INITIAL_TERMS, CATEGORIES, ALPHABET } from './data/termsData';

// --- 記号（アイコン）表示用コンポーネント (完全復元) ---
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
  const contactEmail = "biscuitbaby.candy@gmail.com";
  const contactFormUrl = "https://forms.gle/WWrbB7uxuMHxg6VA9";

  // --- 永続化状態 (完全復元) ---
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

  // --- 本日の用語 (復元) ---
  const termOfDay = useMemo(() => {
    const today = new Date();
    const dateStr = `${today.getFullYear()}${today.getMonth()}${today.getDate()}`;
    const seed = parseInt(dateStr);
    return INITIAL_TERMS[seed % INITIAL_TERMS.length];
  }, []);

  // --- 自動保存 ---
  useEffect(() => {
    localStorage.setItem('music-theme', theme);
    localStorage.setItem('music-favs', JSON.stringify([...favorites]));
    localStorage.setItem('music-mastered', JSON.stringify([...mastered]));
    localStorage.setItem('music-memos', JSON.stringify(memos));
    localStorage.setItem('music-cookies', hasAcceptedCookies);
  }, [theme, favorites, mastered, memos, hasAcceptedCookies]);

  // --- スタイル定義 (UI切り替え用・完全復元) ---
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

  // --- AI 名曲検索 (復元) ---
  const getAiMusic = async (term) => {
    if (!apiKey) return setAiAnalysis("APIキーを設定してください。");
    setIsAiLoading(true);
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: `音楽用語「${term}」が象徴的な有名なクラシック曲を1つ挙げ、理由を30文字程度で解説。` }] }] })
      });
      const data = await response.json();
      setAiAnalysis(data.candidates[0].content.parts[0].text);
    } catch (e) { setAiAnalysis("AI検索エラー。"); }
    finally { setIsAiLoading(false); }
  };

  // --- メトロノーム (6/8対応・完全復元) ---
  const playClick = (time, beatNumber) => {
    if (!audioContext.current) return;
    const osc = audioContext.current.createOscillator();
    const env = audioContext.current.createGain();
    let freq = (beatNumber % beatsPerMeasure === 0) ? 1000 : 500;
    if (beatsPerMeasure === 6 && beatNumber % 6 === 3) freq = 800;
    osc.frequency.value = freq; env.gain.value = 0.5;
    env.gain.exponentialRampToValueAtTime(0.001, time + 0.1);
    osc.connect(env); env.connect(audioContext.current.destination);
    osc.start(time); osc.stop(time + 0.1);
  };
  const scheduler = () => {
    while (nextNoteTime.current < audioContext.current.currentTime + 0.1) {
      playClick(nextNoteTime.current, beatRef.current);
      setCurrentBeat(beatRef.current % beatsPerMeasure);
      nextNoteTime.current += 60.0 / bpm; beatRef.current++;
    }
    timerID.current = requestAnimationFrame(scheduler);
  };
  const toggleMetronome = async () => {
    if (!isPlaying) {
      if (!audioContext.current) audioContext.current = new (window.AudioContext || window.webkitAudioContext)();
      if (audioContext.current.state === 'suspended') await audioContext.current.resume();
      beatRef.current = 0; setCurrentBeat(0); nextNoteTime.current = audioContext.current.currentTime;
      setIsPlaying(true);
    } else setIsPlaying(false);
  };
  useEffect(() => {
    if (isPlaying) timerID.current = requestAnimationFrame(scheduler);
    else cancelAnimationFrame(timerID.current);
    return () => cancelAnimationFrame(timerID.current);
  }, [isPlaying, bpm, beatsPerMeasure]);

  // --- カメラ/スキャン (復元) ---
  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      setIsCameraOpen(true); setTimeout(() => { if (videoRef.current) videoRef.current.srcObject = stream; }, 100);
    } catch (err) { setScanError("カメラ起動失敗。"); }
  };
  const captureAndScan = async () => {
    if (!videoRef.current || !canvasRef.current) return;
    setIsScanning(true);
    try {
      const ctx = canvasRef.current.getContext('2d');
      canvasRef.current.width = videoRef.current.videoWidth; canvasRef.current.height = videoRef.current.videoHeight;
      ctx.drawImage(videoRef.current, 0, 0);
      const b64 = canvasRef.current.toDataURL('image/png').split(',')[1];
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-preview:generateContent?key=${apiKey}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: "Identify ONE music term in this image. Output ONLY the term name." }, { inlineData: { mimeType: "image/png", data: b64 } }] }] })
      });
      const data = await res.json();
      const resText = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
      const found = INITIAL_TERMS.find(t => resText.toLowerCase().includes(t.term.toLowerCase()));
      if (found) { setSelectedTerm(found); setIsCameraOpen(false); } else setScanError(`「${resText}」は見つかりませんでした。`);
    } catch (e) { setScanError("解析エラー。"); } finally { setIsScanning(false); }
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
    <div className={`min-h-screen ${s.bg} text-slate-700 font-sans pb-40 transition-colors duration-500 overflow-x-hidden selection:bg-rose-100`}>
      <header className={`${s.header} pt-10 pb-16 px-6 text-center relative overflow-hidden transition-all duration-500`}>
        <div className="absolute top-0 left-0 p-4 opacity-10 rotate-12"><BookOpen size={100} /></div>
        <button onClick={() => setShowSettings(true)} className="absolute top-10 right-6 p-2 bg-white/20 rounded-full hover:bg-white/30 z-30 transition-colors shadow-sm"><Settings size={20} /></button>
        <h1 className="text-2xl font-black tracking-widest relative z-10 flex items-center justify-center gap-2 cursor-pointer text-white" onClick={() => { setView('main'); setSearchTerm(''); }}><Music size={28} /> おんがく手帳</h1>
        <p className="text-[10px] font-bold mt-1 opacity-80 uppercase tracking-[0.3em] relative z-10 font-mono italic">Search Optimized v7.5</p>
      </header>

      {!hasAcceptedCookies && (
        <div className="fixed bottom-0 inset-x-0 z-[110] p-4 animate-in slide-in-from-bottom-full duration-500">
          <div className="bg-slate-900 text-white p-6 rounded-[2rem] shadow-2xl flex flex-col md:flex-row items-center gap-4 max-w-2xl mx-auto border border-white/10">
            <Cookie size={40} className="text-yellow-400 shrink-0" />
            <p className="flex-1 text-xs font-bold leading-relaxed text-left">Cookieの使用に同意して、学習体験をパーソナライズしましょう！</p>
            <button onClick={() => setHasAcceptedCookies(true)} className={`${s.accent} px-8 py-3 rounded-2xl font-black text-xs active:scale-95 transition-all`}>同意する</button>
          </div>
        </div>
      )}

      {showSettings && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-xs rounded-[2.5rem] shadow-2xl p-6 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-black flex items-center gap-2 text-slate-800"><Settings size={20} className={s.accentText} /> 設定</h2>
              <button onClick={() => setShowSettings(false)} className="p-2 text-slate-300 hover:text-slate-500 active:scale-90"><X size={24}/></button>
            </div>
            <div className="space-y-6 text-left">
              {/* テーマ切替セクション (完全復元) */}
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
                  <button onClick={() => { setView('install'); setShowSettings(false); }} className="w-full flex items-center gap-3 p-3 bg-slate-50 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"><Smartphone size={16}/> ホーム画面に追加</button>
                  <button onClick={() => { setView('privacy'); setShowSettings(false); }} className="w-full flex items-center gap-3 p-3 bg-slate-50 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"><ShieldCheck size={16}/> プライバシーポリシー</button>
                  <button onClick={() => { setView('contact'); setShowSettings(false); }} className="w-full flex items-center gap-3 p-3 bg-slate-50 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"><Mail size={16}/> お問い合わせ</button>
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
                <input type="text" placeholder="用語を検索..." className={`w-full pl-10 pr-10 py-4 ${s.button} border-none shadow-xl outline-none focus:ring-4 transition-all placeholder:text-slate-300`} value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setVisibleItems(40); }} />
                <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${s.accentText}`} size={20} />
                {searchTerm && <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500"><X size={18} /></button>}
              </div>
              <button onClick={openCamera} className={`bg-white p-4 ${s.button} ${s.accentText} shadow-xl active:scale-90`}><Camera size={24} /></button>
              <button onClick={() => { setSelectedTerm(INITIAL_TERMS[Math.floor(Math.random()*INITIAL_TERMS.length)]); setAiAnalysis(null); }} className={`bg-white p-4 ${s.button} ${s.accentText} shadow-xl active:scale-90`}><Shuffle size={24} /></button>
            </div>

            {/* 本日の用語カード (完全復元) */}
            {!searchTerm && (
              <div onClick={() => { setSelectedTerm(termOfDay); setAiAnalysis(null); }} className={`${theme === 'kawaii' ? 'bg-gradient-to-br from-rose-50 to-orange-50' : 'bg-slate-800 text-white'} p-6 ${s.card} shadow-lg mb-8 relative overflow-hidden group active:scale-[0.98] cursor-pointer animate-in fade-in zoom-in-95 duration-500`}>
                <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform"><Sparkles size={100} /></div>
                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-2 inline-block ${theme === 'kawaii' ? 'bg-rose-400 text-white' : 'bg-indigo-600'}`}>本日の用語</span>
                <h2 className="text-2xl font-black mb-1">{termOfDay.term}</h2>
                <p className={`text-xs font-bold ${theme === 'kawaii' ? 'text-rose-400' : 'text-slate-400'}`}>"{termOfDay.meaning}"</p>
              </div>
            )}

            <div ref={resultsRef} className="scroll-mt-4">
              <div className="flex gap-2 overflow-x-auto pb-2 mb-2 scrollbar-hide px-1">
                {CATEGORIES.map(cat => (
                  <button key={cat} onClick={() => { setSelectedCategory(cat); setSelectedLetter('All'); setVisibleItems(40); }} className={`px-5 py-2 rounded-2xl text-sm font-bold whitespace-nowrap transition-all ${selectedCategory === cat ? s.tabActive : s.tabInactive + ' border'}`}>{cat}</button>
                ))}
              </div>
              <div className={`flex gap-1.5 overflow-x-auto pb-4 mb-4 scrollbar-hide px-1 border-b ${theme === 'kawaii' ? 'border-rose-50' : 'border-slate-200'}`}>
                {ALPHABET.map(letter => (
                  <button key={letter} onClick={() => { setSelectedLetter(letter); setVisibleItems(40); }} className={`min-w-[40px] h-7 px-2 rounded-xl text-[9px] font-black transition-all border ${selectedLetter === letter ? (theme === 'kawaii' ? 'bg-rose-100 text-rose-500 border-rose-200 shadow-sm scale-110' : 'bg-indigo-600 text-white border-indigo-600 shadow-sm scale-110') : (theme === 'kawaii' ? 'bg-white text-rose-200 border-rose-50' : 'bg-white text-slate-400 border-slate-200 hover:text-indigo-600')}`}>{letter}</button>
                ))}
              </div>
            </div>

            <AdSlot type="List Top" />

            <div className="space-y-3">
              {filteredTerms.slice(0, visibleItems).map(item => (
                <article key={item.id} onClick={() => { setSelectedTerm(item); setAiAnalysis(null); }} className={`bg-white p-4 ${s.card} shadow-sm flex items-center justify-between border-2 border-transparent hover:border-slate-100 active:scale-95 transition-all cursor-pointer`}>
                  <div className="flex items-center gap-4 overflow-hidden text-left">
                    <div className={`w-12 h-12 ${item.color} ${theme === 'kawaii' ? 'rounded-2xl' : 'rounded-lg'} flex items-center justify-center relative shrink-0 overflow-hidden shadow-inner`}>
                      <TermIcon item={item} />
                      {mastered.has(item.id) && <CheckCircle size={14} className="absolute -top-1 -right-1 text-green-500 bg-white rounded-full shadow-sm" fill="currentColor" />}
                    </div>
                    <div className="min-w-0 text-left">
                      <h3 className="font-bold text-slate-800 leading-tight truncate text-base">{item.term}</h3>
                      <p className="text-[10px] font-bold text-slate-400 truncate mt-0.5">{item.meaning}</p>
                      <div className="flex items-center gap-2 mt-1"><span className="text-slate-300 text-[8px] font-black uppercase tracking-widest">{item.category}</span><span className="w-1 h-1 bg-slate-200 rounded-full"></span><span className={`${s.accentText} text-[8px] font-bold`}>{item.lang}</span></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200 shrink-0">
                    <button onClick={(e) => { e.stopPropagation(); const n = new Set(favorites); if(n.has(item.id)) n.delete(item.id); else n.add(item.id); setFavorites(n); }} className={`p-2 rounded-full transition-all ${favorites.has(item.id) ? (theme === 'kawaii' ? 'text-rose-400 bg-rose-50' : 'text-indigo-600 bg-indigo-50') : 'hover:text-rose-200'}`}>
                      <Heart size={20} fill={favorites.has(item.id) ? "currentColor" : "none"} />
                    </button>
                    <ChevronRight size={18} />
                  </div>
                </article>
              ))}
              {filteredTerms.length > visibleItems && (
                <button onClick={() => setVisibleItems(p => p + 40)} className={`w-full py-5 mt-6 font-black text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl ${s.loadMore}`}>
                  <ChevronDown size={20} /> さらに表示 ({filteredTerms.length - visibleItems}語)
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="bg-white rounded-[2.5rem] p-8 shadow-xl text-left relative overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
            <button onClick={() => setView('main')} className={`${s.accentText} font-bold text-sm mb-6 flex items-center gap-1 active:scale-95 transition-transform`}>← 辞典にもどる</button>
            {view === 'install' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2"><Smartphone className={s.accentText} /> ホーム画面に追加</h2>
                <div className="space-y-6 text-[11px] leading-loose text-slate-600 font-bold">
                  <section className="bg-rose-50/50 p-6 rounded-[2rem] border border-rose-100"><h3 className="font-black text-rose-500 mb-2 flex items-center gap-2"><PlusSquare size={16}/> iPhone (Safari)</h3><p>1. 共有ボタン <Share size={14} className="inline text-blue-500"/> をタップ<br/>2. 「ホーム画面に追加」を選択してください。</p></section>
                  <section className="bg-indigo-50/50 p-6 rounded-[2rem] border border-indigo-100"><h3 className="font-black text-indigo-500 mb-2 flex items-center gap-2"><PlusSquare size={16}/> Android (Chrome)</h3><p>1. メニュー <MoreVertical size={14} className="inline"/> をタップ<br/>2. 「アプリをインストール」を選択してください。</p></section>
                </div>
              </div>
            )}
            {view === 'contact' && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">Contact</h2>
                <div className="space-y-3">
                  <a href={`mailto:${contactEmail}`} className={`flex items-center justify-between p-5 ${theme === 'kawaii' ? 'bg-rose-50 text-rose-500' : 'bg-slate-50 text-slate-600'} border-2 rounded-3xl font-black text-sm active:scale-95 transition-all shadow-sm`}><div className="flex items-center gap-3"><Mail size={20}/> メールを送る</div><ChevronRight size={18}/></a>
                  <a href={contactFormUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-between p-5 ${theme === 'kawaii' ? 'bg-orange-50 text-orange-500' : 'bg-indigo-50 text-indigo-600'} border-2 rounded-3xl font-black text-sm active:scale-95 transition-all shadow-sm`}><div className="flex items-center gap-3"><ExternalLink size={20}/> 問い合わせフォーム</div><ChevronRight size={18}/></a>
                </div>
              </div>
            )}
            {view === 'privacy' && (
              <div className="space-y-4 animate-in fade-in duration-500">
                <h2 className="text-2xl font-black text-slate-800 uppercase tracking-widest">Privacy Policy</h2>
                <p className="text-xs text-slate-500 font-bold leading-relaxed">当サイトはAdSense広告を利用します。詳細は /privacy.html を確認してください。</p>
              </div>
            )}
            <AdSlot type="Sub Page Bottom" />
          </div>
        )}
      </main>

      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-[100]">
        {isMetronomeOpen && (
          <div className={`bg-white p-6 ${theme === 'kawaii' ? 'rounded-[2.5rem]' : 'rounded-2xl'} shadow-2xl border-2 ${theme === 'kawaii' ? 'border-rose-100' : 'border-slate-200'} w-72 animate-in slide-in-from-bottom-4 duration-300`}>
            <div className="flex justify-between items-center mb-2"><span className={`${s.accentText} font-black text-[10px] uppercase tracking-widest`}>Metronome</span><button onClick={() => setIsMetronomeOpen(false)}><X size={20}/></button></div>
            <div className="grid grid-cols-4 gap-1 mb-4">{[2, 3, 4, 6].map(num => (<button key={num} onClick={() => { setBeatsPerMeasure(num); beatRef.current = 0; setCurrentBeat(0); }} className={`py-1 rounded-xl text-[10px] font-black transition-all ${beatsPerMeasure === num ? s.accent + ' text-white' : 'bg-slate-100 text-slate-400'}`}>{num === 6 ? '6/8' : `${num}拍`}</button>))}</div>
            <div className="text-center mb-6"><div className={`text-5xl font-black text-slate-800 mb-1 transition-all duration-75 ${isPlaying && currentBeat === 0 ? 'scale-110 ' + s.accentText : 'scale-100'}`}>{bpm}</div></div>
            <div className="flex items-center gap-3 mb-6 px-2">
              <button onClick={() => setBpm(Math.max(40, bpm - 1))} className="p-2 bg-slate-100 rounded-full active:scale-90"><Minus size={18}/></button>
              <input type="range" min="40" max="240" value={bpm} onChange={(e) => setBpm(parseInt(e.target.value))} className={`flex-1 ${theme === 'kawaii' ? 'accent-rose-400' : 'accent-indigo-600'} h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer`} />
              <button onClick={() => setBpm(Math.min(240, bpm + 1))} className="p-2 bg-slate-100 rounded-full active:scale-90"><Plus size={18}/></button>
            </div>
            <button onClick={toggleMetronome} className={`w-full py-4 rounded-2xl font-black text-white shadow-lg ${isPlaying ? 'bg-slate-400' : s.accent + ' shadow-rose-200'}`}>{isPlaying ? 'STOP' : 'START'}</button>
          </div>
        )}
        <button onClick={() => setIsMetronomeOpen(!isMetronomeOpen)} className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-90 ${isMetronomeOpen ? s.accent + ' text-white ring-4 ring-rose-50' : 'bg-white ' + s.accentText + ' border-2 ' + (theme === 'kawaii' ? 'border-rose-100' : 'border-slate-100')}`}>
          {isPlaying ? (<Volume2 size={28} className="animate-pulse" />) : (<Music size={28} />)}
        </button>
      </div>

      {selectedTerm && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[130] flex items-center justify-center p-4 overflow-y-auto">
          <article className={`bg-white w-full max-w-sm ${theme === 'kawaii' ? 'rounded-[3.5rem]' : 'rounded-2xl'} shadow-2xl p-8 relative max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200 text-center`}>
            <button onClick={() => { setSelectedTerm(null); setAiAnalysis(null); }} className="absolute top-6 right-6 p-3 bg-slate-50 text-slate-300 rounded-2xl active:scale-90"><X size={24} /></button>
            <div className={`w-24 h-24 ${selectedTerm.color} ${theme === 'kawaii' ? 'rounded-[2.5rem]' : 'rounded-xl'} mx-auto flex items-center justify-center shadow-xl border-4 border-white mb-4 shrink-0 overflow-hidden`}>
              <TermIcon item={selectedTerm} />
            </div>
            <h2 className="text-3xl font-black text-slate-800 leading-tight">{selectedTerm.term}</h2>
            <div className="flex items-center justify-center gap-2 mt-1 mb-6 text-[10px] font-black italic uppercase tracking-widest text-slate-400">
              <p className={s.accentText}>{selectedTerm.reading}</p>
              <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
              <div className={`flex items-center gap-1 ${theme === 'kawaii' ? 'bg-rose-50 text-rose-400' : 'bg-indigo-50 text-indigo-600'} px-2 py-0.5 rounded-lg shadow-sm`}><Languages size={10} />{selectedTerm.lang}</div>
            </div>
            <div className="space-y-4 mb-8 text-left">
              <div className={`${theme === 'kawaii' ? 'bg-rose-50/50 rounded-[2.5rem]' : 'bg-slate-50 rounded-xl'} p-6 border shadow-inner text-center`}>
                <p className="text-slate-800 font-black text-xl mb-3 italic">"{selectedTerm.meaning}"</p>
                <p className="text-xs text-slate-600 px-2 leading-relaxed">{selectedTerm.detail}</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-3xl border border-indigo-100">
                <div className="flex justify-between items-center mb-2"><p className="text-[10px] font-black text-indigo-600 flex items-center gap-1 uppercase tracking-widest"><Sparkles size={12}/> AI名曲検索</p>{!aiAnalysis && !isAiLoading && <button onClick={() => getAiMusic(selectedTerm.term)} className="text-[10px] font-black bg-indigo-600 text-white px-3 py-1 rounded-lg">検索</button>}</div>
                {isAiLoading && <div className="text-indigo-300 text-[10px] font-bold py-2 animate-pulse text-center">AI探索中...</div>}
                {aiAnalysis && <p className="text-xs text-slate-600 font-bold leading-relaxed">{aiAnalysis}</p>}
              </div>
              <div className={`${theme === 'kawaii' ? 'bg-amber-50/40 border-amber-100 rounded-3xl' : 'bg-slate-50 border-slate-200 rounded-xl'} p-4 border shadow-sm`}>
                <p className="text-[10px] font-black text-amber-600 mb-2 flex items-center gap-1 uppercase tracking-widest"><Edit3 size={12}/>じぶんメモ</p>
                <textarea className="w-full bg-transparent border-none text-sm text-slate-600 h-16 outline-none resize-none" value={memos[selectedTerm.id] || ''} onChange={(e) => setMemos({...memos, [selectedTerm.id]: e.target.value})} />
              </div>
            </div>
            <button onClick={() => { const n = new Set(mastered); if(n.has(selectedTerm.id)) n.delete(selectedTerm.id); else n.add(selectedTerm.id); setMastered(n); }} className={`w-full py-5 ${theme === 'kawaii' ? 'rounded-[2.2rem]' : 'rounded-xl'} font-black text-white ${mastered.has(selectedTerm.id) ? 'bg-green-400' : s.accent} shadow-lg active:scale-95 transition-all`}>{mastered.has(selectedTerm.id) ? 'おぼえた！' : 'これをおぼえる！'}</button>
          </article>
        </div>
      )}

      {isCameraOpen && (
        <div className="fixed inset-0 bg-black z-[150] flex flex-col items-center">
          <video ref={videoRef} autoPlay playsInline className="flex-1 w-full object-cover" />
          <canvas ref={canvasRef} className="hidden" />
          <div className="absolute top-6 right-6"><button onClick={() => setIsCameraOpen(false)} className="p-3 bg-white/20 rounded-full text-white active:scale-90 transition-colors"><X size={24} /></button></div>
          <div className={`w-full bg-white ${theme === 'kawaii' ? 'rounded-t-[40px]' : 'rounded-none'} p-8 flex flex-col items-center gap-4 shadow-2xl animate-in slide-in-from-bottom-full duration-300`}>
            {scanError && <p className="text-rose-500 text-xs font-bold text-center bg-rose-50 px-4 py-2 rounded-xl border border-rose-100">{scanError}</p>}
            <button onClick={captureAndScan} disabled={isScanning} className={`w-20 h-20 rounded-full border-4 ${theme === 'kawaii' ? 'border-rose-400' : 'border-indigo-600'} p-1 flex items-center justify-center active:scale-90 shadow-xl`}>{isScanning ? <Loader2 className={`animate-spin ${theme === 'kawaii' ? 'text-rose-400' : 'text-indigo-600'}`} size={32} /> : <div className={`w-full h-full ${theme === 'kawaii' ? 'bg-rose-400' : 'bg-indigo-600'} rounded-full`} />}</button>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] italic text-center">AI Smart Scanner</p>
          </div>
        </div>
      )}

      <div className={`fixed bottom-0 left-0 right-0 ${theme === 'kawaii' ? 'bg-white/70 text-rose-300' : 'bg-slate-900/80 text-slate-400'} backdrop-blur-md py-1.5 text-center pointer-events-none md:hidden border-t border-white/10 z-40`}><p className="text-[8px] font-black tracking-[0.4em] uppercase">Terms: {INITIAL_TERMS.length} / v7.5</p></div>
    </div>
  );
}
