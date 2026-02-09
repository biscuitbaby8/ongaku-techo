import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Search, Music, Info, ChevronRight, X, 
  Sparkles, Heart, CheckCircle, Edit3, 
  Shuffle, Camera, Loader2, Play, Square, Plus, Minus, BookOpen, Languages, Palette, Settings, Mail, ShieldCheck, User, Volume2, Smartphone, Share, MoreVertical, PlusSquare, ChevronDown, Trophy, Cookie, ExternalLink
} from 'lucide-react';

// --- データのインポート ---
import { termsData as INITIAL_TERMS, CATEGORIES, ALPHABET } from './data/termsData';

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

const AdSlot = ({ type }) => (
  <div className="my-6 p-4 bg-slate-100/50 border border-dashed border-slate-200 rounded-2xl text-center min-h-[100px] flex flex-col items-center justify-center">
    <span className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">Sponsored</span>
    <div className="text-slate-300 text-xs italic">広告掲載エリア ({type})</div>
  </div>
);

export default function App() {
  const apiKey = ""; 
  const contactEmail = "biscuitbaby.candy@gmail.com";
  const contactFormUrl = "https://forms.gle/WWrbB7uxuMHxg6VA9";

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
    return INITIAL_TERMS[parseInt(dateStr) % INITIAL_TERMS.length];
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

  const s = {
    kawaii: { bg: 'bg-[#FFFDF9]', header: 'bg-rose-300 rounded-b-[50px] shadow-inner text-white', accent: 'bg-rose-400', accentText: 'text-rose-400', tabActive: 'bg-rose-400 text-white shadow-lg scale-105', tabInactive: 'bg-white text-rose-300 border-rose-50', button: 'rounded-3xl shadow-rose-100', card: 'rounded-[2.2rem]', loadMore: 'bg-rose-400 text-white shadow-rose-100 hover:bg-rose-500 rounded-3xl' },
    modern: { bg: 'bg-slate-50', header: 'bg-slate-900 rounded-none shadow-md text-slate-100', accent: 'bg-indigo-600', accentText: 'text-indigo-600', tabActive: 'bg-indigo-600 text-white shadow-md', tabInactive: 'bg-slate-200 text-slate-600 border-transparent', button: 'rounded-xl shadow-slate-200', card: 'rounded-xl', loadMore: 'bg-indigo-600 text-white shadow-indigo-100 hover:bg-indigo-700 rounded-xl' }
  }[theme];

  const toggleFavorite = (id) => {
    const n = new Set(favorites);
    if(n.has(id)) n.delete(id); else n.add(id);
    setFavorites(n);
  };

  const getAiMusic = async (term) => {
    if (!apiKey) return setAiAnalysis("APIキーを設定してください。");
    setIsAiLoading(true);
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: `音楽用語「${term}」が象徴的なクラシック曲を1つ挙げ、理由を30文字程度で解説。` }] }] })
      });
      const data = await response.json();
      setAiAnalysis(data.candidates[0].content.parts[0].text);
    } catch (e) { setAiAnalysis("AI検索エラー。"); }
    finally { setIsAiLoading(false); }
  };

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
            <p className="flex-1 text-xs font-bold text-left">Cookieの使用に同意して、学習体験をパーソナライズしましょう！</p>
            <button onClick={() => setHasAcceptedCookies(true)} className={`${s.accent} px-8 py-3 rounded-2xl font-black text-xs`}>同意する</button>
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
                  <button onClick={() => { setView('install'); setShowSettings(false); }} className="w-full flex items-center gap-3 p-4 bg-slate-50 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all shadow-sm"><Smartphone size={18} className={s.accentText}/> ホーム画面に追加</button>
                  <button onClick={() => { setView('privacy'); setShowSettings(false); }} className="w-full flex items-center gap-3 p-4 bg-slate-50 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all shadow-sm"><ShieldCheck size={18} className={s.accentText}/> プライバシーポリシー</button>
                  <button onClick={() => { setView('contact'); setShowSettings(false); }} className="w-full flex items-center gap-3 p-4 bg-slate-50 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all shadow-sm"><Mail size={18} className={s.accentText}/> お問い合わせ</button>
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
                  <button key={letter} onClick={() => { setSelectedLetter(letter); setVisibleItems(40); }} className={`min-w-[40px] h-7 px-2 rounded-xl text-[9px] font-black transition-all border ${selectedLetter === letter ? (theme === 'kawaii' ? 'bg-rose-100 text-rose-500 border-rose-200 shadow-sm scale-110' : 'bg-indigo-600 text-white border-indigo-600 shadow-sm scale-110') : 'bg-white text-slate-400 border-slate-200 hover:text-indigo-600'}`}>{letter}</button>
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
                    <div className="min-w-0">
                      <h3 className="font-bold text-slate-800 leading-tight truncate text-base">{item.term}</h3>
                      <p className="text-[10px] font-bold text-slate-400 truncate mt-0.5">{item.meaning}</p>
                      <div className="flex items-center gap-2 mt-1"><span className="text-slate-300 text-[8px] font-black uppercase tracking-widest">{item.category}</span><span className="w-1 h-1 bg-slate-200 rounded-full"></span><span className={`${s.accentText} text-[8px] font-bold`}>{item.lang}</span></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200 shrink-0">
                    <button onClick={(e) => { e.stopPropagation(); toggleFavorite(item.id); }} className={`p-2 rounded-full transition-all ${favorites.has(item.id) ? (theme === 'kawaii' ? 'text-rose-400 bg-rose-50' : 'text-indigo-600 bg-indigo-50') : 'hover:text-rose-200'}`}>
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
{/* 1. プライバシービューのエリア（ここから） */}
      {view === 'privacy' && (
        <div className="space-y-4 animate-in fade-in duration-500">
          <h2 className="text-2xl font-black text-slate-800 uppercase tracking-widest">Privacy Policy</h2>
          
          <div className="text-left max-h-[400px] overflow-y-auto p-5 bg-slate-50 rounded-2xl text-sm text-slate-600 border border-slate-200 leading-relaxed shadow-inner">
            <h3 className="font-bold text-rose-500 mb-2">1. 個人情報の収集と利用目的</h3>
            <p className="mb-4">お問い合わせ時のお名前やメールアドレス等の個人情報は、回答や連絡以外の目的で利用することはありません。</p>
            <h3 className="font-bold text-rose-500 mb-2">2. 広告の配信について</h3>
            <p className="mb-4">当サイトは、Google AdSenseを利用しています。広告配信事業者はCookieを使用して適切な広告を表示することがあります。</p>
            <h3 className="font-bold text-rose-500 mb-2">3. データの保存</h3>
            <p className="mb-4">入力データはブラウザのLocalStorageにのみ保存され、サーバーへ送信されることはありません。</p>
            <h3 className="font-bold text-rose-500 mb-2">4. 免責事項</h3>
            <p className="mb-4">当サイトの利用により生じた損害等の一切の責任を負いかねます。</p>
            <p className="text-xs text-slate-400 mt-6">策定日：2026年2月9日</p>
          </div>

          <p className="text-xs text-slate-500 font-bold">
            詳細は <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="text-rose-500 underline">独立したポリシーページ</a> でも確認できます。
          </p>
          {/* AdSlotコンポーネントがある場合はここに戻す */}
          <div className="mt-4 border-2 border-dashed border-slate-200 rounded-xl p-8 text-center text-[10px] font-black text-slate-300 tracking-widest italic">SPONSORED</div>
        </div>
      )} 
      {/* 1. ここまでで条件分岐をしっかり閉じる */}

    </main>

    {/* 2. フッター：どの画面でも一番下に出るように main の外に配置 */}
    <footer className="text-center py-10 mt-10 border-t border-slate-100 bg-white/30 backdrop-blur-sm">
      <div className="flex justify-center gap-8 mb-4">
        <a href="https://forms.gle/WWrbB7uxuMHxg6VA9" target="_blank" rel="noopener noreferrer" className="text-rose-400 font-black text-[10px] uppercase tracking-widest hover:text-rose-600 transition-colors">Contact</a>
        <button onClick={() => setView('privacy')} className="text-rose-400 font-black text-[10px] uppercase tracking-widest hover:text-rose-600 transition-colors cursor-pointer">Privacy</button>
      </div>
      <p className="text-slate-300 text-[10px] font-bold">© 2026 おんがく手帳 / MUSIC DIARY</p>
    </footer>

    {/* 3. メトロノームなどの固定要素（ここから下は既存のまま） */}
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-[100]">

    {/* 2. フッター：どの画面でも一番下に出るように main の外に配置 */}
    <footer className="text-center py-10 mt-10 border-t border-slate-100">
      <div className="flex justify-center gap-8 mb-4">
        <a href="https://forms.gle/WWrbB7uxuMHxg6VA9" target="_blank" rel="noopener noreferrer" className="text-rose-400 font-black text-xs uppercase tracking-widest hover:text-rose-600 transition-colors">Contact</a>
        <button onClick={() => setView('privacy')} className="text-rose-400 font-black text-xs uppercase tracking-widest hover:text-rose-600 transition-colors cursor-pointer">Privacy</button>
      </div>
      <p className="text-slate-300 text-[10px] font-bold">© 2026 おんがく手帳 / MUSIC DIARY</p>
    </footer>

    {/* 3. メトロノームなどの固定要素（ここから下は既存のまま） */}
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-[100]">
    {/* 【新設】全ページ共通フッター：Google審査に必須です */}
    <footer className="text-center py-10 mt-10 border-t border-slate-100 bg-white/50">
      <div className="flex justify-center gap-8 mb-4">
        <a href="https://forms.gle/WWrbB7uxuMHxg6VA9" target="_blank" rel="noopener noreferrer" className="text-rose-400 font-black text-xs uppercase tracking-widest hover:text-rose-600 transition-colors">Contact</a>
        <button onClick={() => setView('privacy')} className="text-rose-400 font-black text-xs uppercase tracking-widest hover:text-rose-600 transition-colors">Privacy</button>
      </div>
      <p className="text-slate-300 text-[10px] font-bold">© 2026 おんがく手帳 / MUSIC DIARY</p>
    </footer>

    {/* メトロノーム、モーダル、スキャナー等の浮遊要素（変更なし） */}
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-[100]">
      {/* ...メトロノームのコード（中身はそのまま）... */}
