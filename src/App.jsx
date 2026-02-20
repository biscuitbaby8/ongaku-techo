import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Search, Music, Info, ChevronRight, X,
  Sparkles, Heart, CheckCircle, Edit3,
  Shuffle, Camera, Loader2, Play, Square, Plus, Minus, BookOpen, Languages, Palette, Settings, Mail, ShieldCheck, User, Volume2, Smartphone, Share, MoreVertical, PlusSquare, ChevronDown, Trophy, Cookie, ExternalLink
} from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';

// --- データのインポート ---
import { termsData as INITIAL_TERMS, CATEGORIES, ALPHABET } from './data/termsData';

const TermIcon = ({ item }) => {
  if (item.symbol) {
    return (
      <span className={`${item.category === '強弱'
        ? 'font-serif italic font-black text-2xl tracking-tighter'
        : 'font-sans font-black text-[9px] md:text-[10px] leading-tight text-center uppercase'
        } select-none text-current opacity-90 px-0.5 break-all line-clamp-2`}>
        {item.symbol}
      </span>
    );
  }
  return null;
};

const AdSlot = ({ type }) => {
  const SHOW_ADS = false; // AdSense審査に備え、一時的に非表示（審査通過後にtrueにする）
  if (!SHOW_ADS) return null;

  return (
    <div className="my-6 p-4 bg-slate-100/50 border border-dashed border-slate-200 rounded-2xl text-center min-h-[100px] flex flex-col items-center justify-center">
      <span className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">Sponsored</span>
      <div className="text-slate-300 text-xs italic">広告掲載エリア ({type})</div>
    </div>
  );
};

export default function App() {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
  const contactEmail = "biscuitbaby.candy@gmail.com";
  const contactFormUrl = "https://forms.gle/WWrbB7uxuMHxg6VA9";

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('music-theme');
    return (saved === 'kawaii' || saved === 'modern') ? saved : 'kawaii';
  });
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

  // --- JSON-LD 構造化データの動的埋め込み ---
  useEffect(() => {
    const scriptId = 'json-ld-sd';
    let script = document.getElementById(scriptId);
    if (script) script.remove();

    script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';

    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "おんがく手帳",
      "url": "https://ongaku-techo.vercel.app",
      "description": "1000語以上の音楽用語を網羅した、音楽家・学生のためのデジタルツール。",
      "publisher": {
        "@type": "Organization",
        "name": "ongaku-techo Project",
        "logo": "https://ongaku-techo.vercel.app/icon-192.png"
      }
    };

    if (selectedTerm) {
      baseSchema["@type"] = "DefinedTerm";
      baseSchema["name"] = selectedTerm.term;
      baseSchema["description"] = selectedTerm.meaning;
      baseSchema["inDefinedTermSet"] = "https://ongaku-techo.vercel.app";
    }

    script.text = JSON.stringify(baseSchema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
  }, [selectedTerm]);

  const s = ({
    kawaii: { bg: 'bg-[#FFFDF9]', header: 'bg-rose-300 rounded-b-[50px] shadow-inner text-white', accent: 'bg-rose-400', accentText: 'text-rose-400', tabActive: 'bg-rose-400 text-white shadow-lg scale-105', tabInactive: 'bg-white text-rose-300 border-rose-50', button: 'rounded-3xl shadow-rose-100', card: 'rounded-[2.2rem]', loadMore: 'bg-rose-400 text-white shadow-rose-100 hover:bg-rose-500 rounded-3xl' },
    modern: { bg: 'bg-slate-50', header: 'bg-slate-900 rounded-none shadow-md text-slate-100', accent: 'bg-indigo-600', accentText: 'text-indigo-600', tabActive: 'bg-indigo-600 text-white shadow-md', tabInactive: 'bg-slate-200 text-slate-600 border-transparent', button: 'rounded-xl shadow-slate-200', card: 'rounded-xl', loadMore: 'bg-indigo-600 text-white shadow-indigo-100 hover:bg-indigo-700 rounded-xl' }
  }[theme]) || { bg: 'bg-[#FFFDF9]', header: 'bg-rose-300', accent: 'bg-rose-400', accentText: 'text-rose-400', tabActive: 'bg-rose-400 text-white', tabInactive: 'bg-white', button: 'rounded-3xl', card: 'rounded-[2.2rem]', loadMore: 'bg-rose-400 text-white' };

  const toggleFavorite = (id) => {
    const n = new Set(favorites);
    if (n.has(id)) n.delete(id); else n.add(id);
    setFavorites(n);
  };

  const getAiMusic = async (term) => {
    if (!apiKey) return setAiAnalysis("APIキーを設定してください。");
    setIsAiLoading(true);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10秒でタイムアウト

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key=${apiKey}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: `音楽用語「${term}」が象徴的に使われている、またはその用語を冠した有名なクラシック曲（または楽曲）を1つ挙げ、その理由を30文字程度で簡潔に解説してください。` }] }] }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(`API Error ${response.status}: ${errData.error?.message || response.statusText}`);
      }

      const data = await response.json();
      console.log("AI Music Data Raw:", data);

      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        setAiAnalysis(data.candidates[0].content.parts[0].text);
      } else if (data.candidates?.[0]?.finishReason === "SAFETY") {
        throw new Error("安全フィルターにより内容が制限されました。");
      } else {
        throw new Error("Invalid API response format");
      }
    } catch (e) {
      console.error("AI Music Search Error:", e);
      setAiAnalysis(`エラー: ${e.name === 'AbortError' ? 'タイムアウト（応答なし）' : e.message}`);
    }
    finally { setIsAiLoading(false); clearTimeout(timeoutId); }
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
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 45000); // 45秒に延長

    try {
      const ctx = canvasRef.current.getContext('2d');
      // リサイズ処理 (長辺1024px)
      const MAX_SIZE = 1024;
      let w = videoRef.current.videoWidth;
      let h = videoRef.current.videoHeight;
      if (w > h && w > MAX_SIZE) { h = (h * MAX_SIZE) / w; w = MAX_SIZE; }
      else if (h > MAX_SIZE) { w = (w * MAX_SIZE) / h; h = MAX_SIZE; }

      canvasRef.current.width = w;
      canvasRef.current.height = h;
      ctx.drawImage(videoRef.current, 0, 0, w, h);

      // JPEG形式で圧縮送信 (品質0.8)
      const b64 = canvasRef.current.toDataURL('image/jpeg', 0.8).split(',')[1];

      // 安定性の高い 1.5-flash モデルを使用
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [
              { text: "この画像から音楽用語（イタリア語、記号、楽譜上の指示など）をすべて特定してください。複数の単語がある場合は、スペースまたは読点（、）で区切って、用語名のみを出力してください。" },
              { inlineData: { mimeType: "image/jpeg", data: b64 } }
            ]
          }]
        }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(`API Error ${res.status}: ${errData.error?.message || res.statusText}`);
      }

      const data = await res.json();
      const resText = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

      if (!resText) {
        throw new Error("API did not return a term.");
      }

      const detectedWords = resText.split(/[ ,、\n\t]+/).filter(w => w.length > 1);
      const matches = [];

      detectedWords.forEach(word => {
        const found = INITIAL_TERMS.find(t =>
          word.toLowerCase().includes(t.term.toLowerCase()) ||
          t.term.toLowerCase().includes(word.toLowerCase())
        );
        if (found) matches.push(found);
      });

      if (matches.length > 0) {
        const uniqueMatches = Array.from(new Set(matches.map(m => m.id)))
          .map(id => matches.find(m => m.id === id));

        setSelectedTerm(uniqueMatches[0]);
        setSearchTerm(uniqueMatches.map(m => m.term).join(' '));
        setView('main');
        setTimeout(() => {
          if (resultsRef.current) resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      } else {
        throw new Error(`用語が見つかりませんでした: ${resText}`);
      }
    } catch (e) {
      setScanError(`エラー: ${e.name === 'AbortError' ? 'タイムアウト（応答なし）' : e.message}`);
    } finally { setIsScanning(false); clearTimeout(timeoutId); }
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
        <p className="text-[10px] font-bold mt-1 opacity-80 uppercase tracking-[0.3em] relative z-10 font-mono italic">Search Optimized v8.0</p>
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
              <button onClick={() => setShowSettings(false)} className="p-2 text-slate-300 hover:text-slate-500 active:scale-90"><X size={24} /></button>
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
                  <button onClick={() => { setView('about'); setShowSettings(false); }} className="w-full flex items-center gap-3 p-4 bg-slate-50 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all shadow-sm"><Info size={18} className={s.accentText} /> おんがく手帳について</button>
                  <button onClick={() => { setView('install'); setShowSettings(false); }} className="w-full flex items-center gap-3 p-4 bg-slate-50 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all shadow-sm"><Smartphone size={18} className={s.accentText} /> ホーム画面に追加</button>
                  <button onClick={() => { setView('privacy'); setShowSettings(false); }} className="w-full flex items-center gap-3 p-4 bg-slate-50 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all shadow-sm"><ShieldCheck size={18} className={s.accentText} /> プライバシーポリシー</button>
                  <button onClick={() => { setView('contact'); setShowSettings(false); }} className="w-full flex items-center gap-3 p-4 bg-slate-50 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all shadow-sm"><Mail size={18} className={s.accentText} /> お問い合わせ</button>
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
              <button onClick={() => { setSelectedTerm(INITIAL_TERMS[Math.floor(Math.random() * INITIAL_TERMS.length)]); setAiAnalysis(null); }} className={`bg-white p-4 ${s.button} ${s.accentText} shadow-xl active:scale-90`}><Shuffle size={24} /></button>
            </div>

            {!searchTerm && (
              <div onClick={() => { setSelectedTerm(termOfDay); setAiAnalysis(null); }} className={`${theme === 'kawaii' ? 'bg-gradient-to-br from-rose-50 to-orange-50' : 'bg-slate-800 text-white'} p-6 ${s.card} shadow-lg mb-8 relative overflow-hidden group active:scale-[0.98] cursor-pointer animate-in fade-in zoom-in-95 duration-500`}>
                <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform"><Sparkles size={100} /></div>
                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-2 inline-block ${theme === 'kawaii' ? 'bg-rose-400 text-white' : 'bg-indigo-600'}`}>本日の用語</span>
                <h2 className="text-2xl font-black mb-1">{termOfDay.term}</h2>
                <p className={`text-xs font-bold ${theme === 'kawaii' ? 'text-rose-400' : 'text-slate-400'}`}>"{termOfDay.meaning}"</p>
              </div>
            )}

            {!searchTerm && selectedCategory === 'All' && selectedLetter === 'All' && (
              <section className={`${theme === 'kawaii' ? 'bg-white/50 border-rose-100' : 'bg-slate-50 border-slate-200'} p-6 rounded-[2.5rem] border-2 border-dashed mb-8 text-center`}>
                <h3 className={`text-sm font-black ${s.accentText} uppercase tracking-widest mb-3 flex items-center justify-center gap-2`}><Info size={16} /> 音楽手帳について</h3>
                <p className="text-[11px] text-slate-600 font-bold leading-relaxed px-2">
                  1000語以上の膨大な用語に対し、現役の奏者や講師の視点から「演奏に役立つ独自解説」を執筆しました。<br />さらに、日々の練習に必須の<strong>「高精度クロマチックチューナー」</strong>と<strong>「メトロノーム」</strong>を搭載。これひとつで音楽ライフをサポートする、本格的なデジタル音楽手帳プロジェクトです。
                </p>
              </section>
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
            {view === 'about' && (
              <div className="space-y-10 py-4">
                <div className="text-center group">
                  <div className={`w-20 h-20 ${s.accent} rounded-[2.5rem] flex items-center justify-center mx-auto text-white shadow-xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Music size={40} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-800 tracking-tighter">おんがく手帳について</h2>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-2 italic">Vision & Mission</p>
                </div>

                <div className="space-y-6 text-sm leading-relaxed text-slate-600 font-bold">
                  <section className="bg-rose-50/30 p-8 rounded-[3rem] border border-rose-100/50">
                    <h3 className="font-black text-rose-500 mb-4 flex items-center gap-2 text-lg"><Heart size={20} /> 制作の想い</h3>
                    <p>
                      「昨日の自分より、音楽をもっと深く楽しみたい」<br />
                      そんなすべての音楽学習者のために、この『おんがく手帳』は誕生しました。
                    </p>
                    <p className="mt-4">
                      膨大な音楽用語の世界は、初心者にとっては少し難しく感じられることもあります。しかし、用語の一つひとつには作曲家の意図や豊かな表現が込められています。私たちは、それらを「単なる記号」ではなく「生きた音楽の言葉」として、視覚的にも直感的にも理解できるツールを目指しています。
                    </p>
                  </section>

                  <section className="bg-indigo-50/30 p-8 rounded-[3rem] border border-indigo-100/50">
                    <h3 className="font-black text-indigo-600 mb-4 flex items-center gap-2 text-lg"><Sparkles size={20} /> このアプリでできること</h3>
                    <ul className="space-y-4 list-none">
                      <li className="flex gap-3">
                        <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center shrink-0 mt-1"><CheckCircle size={12} className="text-indigo-600" /></div>
                        <span><strong>1000語以上の用語辞典</strong>: 独自に執筆した分かりやすい解説と、演奏に役立つアドバイスを掲載しています。</span>
                      </li>
                      <li className="flex gap-3">
                        <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center shrink-0 mt-1"><CheckCircle size={12} className="text-indigo-600" /></div>
                        <span><strong>高精度チューナー & メトロノーム</strong>: 練習に妥協しない、プロ品質の精度を追求しました。</span>
                      </li>
                      <li className="flex gap-3">
                        <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center shrink-0 mt-1"><CheckCircle size={12} className="text-indigo-600" /></div>
                        <span><strong>AIスマートスキャン</strong>: 楽譜の難しい言葉をカメラで撮るだけで即座に解析します。</span>
                      </li>
                    </ul>
                  </section>

                  <section className="bg-amber-50/30 p-8 rounded-[3rem] border border-amber-100/50">
                    <h3 className="font-black text-amber-600 mb-4 flex items-center gap-2 text-lg"><User size={20} /> 運営からのメッセージ</h3>
                    <p>
                      音楽の道は終わりのない旅のようなものです。この手帳が、あなたの譜読みを助け、音を研ぎ澄ませ、毎日の練習を少しでも楽しく彩る存在になれば幸いです。
                    </p>
                    <p className="mt-4 text-[10px] opacity-60">
                      ※このアプリは、現役の奏者や講師の監修を元に、biscuitbaby / ongaku-techo Projectが運営しています。
                    </p>
                  </section>
                </div>
              </div>
            )}
            {view === 'install' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2"><Smartphone className={s.accentText} /> ホーム画面に追加</h2>
                <div className="space-y-6 text-[11px] leading-loose text-slate-600 font-bold">
                  <section className="bg-rose-50/50 p-6 rounded-[2rem] border border-rose-100"><h3 className="font-black text-rose-500 mb-2 flex items-center gap-2"><PlusSquare size={16} /> iPhone (Safari)</h3><p>1. 共有ボタン <Share size={14} className="inline text-blue-500" /> をタップ<br />2. 「ホーム画面に追加」を選択してください。</p></section>
                  <section className="bg-indigo-50/50 p-6 rounded-[2rem] border border-indigo-100"><h3 className="font-black text-indigo-500 mb-2 flex items-center gap-2"><PlusSquare size={16} /> Android (Chrome)</h3><p>1. メニュースペース <MoreVertical size={14} className="inline" /> をタップ<br />2. 「アプリをインストール」を選択してください。</p></section>
                </div>
              </div>
            )}
            {view === 'contact' && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">Contact</h2>
                <div className="space-y-3">
                  <a href={`mailto:${contactEmail}`} className={`flex items-center justify-between p-5 ${theme === 'kawaii' ? 'bg-rose-50 text-rose-500' : 'bg-slate-50 text-slate-600'} border-2 rounded-3xl font-black text-sm active:scale-95 transition-all shadow-sm`}><div className="flex items-center gap-3"><Mail size={20} /> メールを送る</div><ChevronRight size={18} /></a>
                  <a href={contactFormUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-between p-5 ${theme === 'kawaii' ? 'bg-orange-50 text-orange-500' : 'bg-indigo-50 text-indigo-600'} border-2 rounded-3xl font-black text-sm active:scale-95 transition-all shadow-sm`}><div className="flex items-center gap-3"><ExternalLink size={20} /> 問い合わせフォーム</div><ChevronRight size={18} /></a>
                </div>
              </div>
            )}
            {view === 'privacy' && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <h2 className="text-2xl font-black text-slate-800 uppercase tracking-widest">Privacy Policy</h2>
                <div className={`${theme === 'kawaii' ? 'bg-rose-50' : 'bg-slate-50'} p-6 rounded-[2rem] border border-rose-100/50`}>
                  <p className="text-xs text-slate-600 font-bold leading-relaxed mb-4">
                    「音楽手帳」では、ユーザーの皆様に安心してご利用いただけるよう、個人情報保護法に基づき詳細なプライバシーポリシーを定めています。
                  </p>
                  <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className={`w-full flex items-center justify-center gap-2 p-4 ${s.accent} text-white rounded-2xl font-black text-sm shadow-lg active:scale-95 transition-all`}>
                    <ShieldCheck size={18} /> 全文を確認する (別タブ)
                  </a>
                </div>
              </div>
            )}
            <AdSlot type="Sub Page Bottom" />
          </div>
        )}
      </main>

      <footer className="max-w-md mx-auto px-6 py-12 text-center">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
          <button onClick={() => setView('about')} className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-rose-400 transition-colors">About Us</button>
          <button onClick={() => setView('privacy')} className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-rose-400 transition-colors">Privacy Policy</button>
          <button onClick={() => setView('contact')} className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-rose-400 transition-colors">Contact</button>
          <button onClick={() => setView('install')} className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-rose-400 transition-colors">Install</button>
        </div>
        <div className="space-y-1">
          <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">© 2026 ongaku-techo / biscuitbaby</p>
          <p className="text-[8px] font-bold text-slate-300">All rights reserved. Designed for Musicians.</p>
        </div>
      </footer>



      {selectedTerm && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[130] flex items-center justify-center p-4 overflow-y-auto">
          <article className={`bg-white w-full max-w-sm ${theme === 'kawaii' ? 'rounded-[3.5rem]' : 'rounded-2xl'} shadow-2xl p-8 relative max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200 text-center`}>
            <div className="flex justify-between items-center mb-4">
              <button onClick={() => toggleFavorite(selectedTerm.id)} className={`p-3 rounded-2xl transition-all active:scale-90 ${favorites.has(selectedTerm.id) ? (theme === 'kawaii' ? 'text-rose-400 bg-rose-50' : 'text-indigo-600 bg-indigo-50') : 'text-slate-200 bg-slate-50'}`}><Heart size={24} fill={favorites.has(selectedTerm.id) ? "currentColor" : "none"} /></button>
              <button onClick={() => { setSelectedTerm(null); setAiAnalysis(null); }} className="p-3 bg-slate-50 text-slate-300 rounded-2xl active:scale-90 transition-colors"><X size={24} /></button>
            </div>
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
                <div className="flex justify-between items-center mb-2"><p className="text-[10px] font-black text-indigo-600 flex items-center gap-1 uppercase tracking-widest"><Sparkles size={12} /> AI名曲検索</p>{!aiAnalysis && !isAiLoading && <button onClick={() => getAiMusic(selectedTerm.term)} className="text-[10px] font-black bg-indigo-600 text-white px-3 py-1 rounded-lg">検索</button>}</div>
                {isAiLoading && <div className="text-indigo-300 text-[10px] font-bold py-2 animate-pulse text-center">AI探索中...</div>}
                {aiAnalysis && <p className="text-xs text-slate-600 font-bold leading-relaxed">{aiAnalysis}</p>}
              </div>
              <div className={`${theme === 'kawaii' ? 'bg-amber-50/40 border-amber-100 rounded-3xl' : 'bg-slate-50 border-slate-200 rounded-xl'} p-4 border shadow-sm`}>
                <p className="text-[10px] font-black text-amber-600 mb-2 flex items-center gap-1 uppercase tracking-widest"><Edit3 size={12} />じぶんメモ</p>
                <textarea className="w-full bg-transparent border-none text-sm text-slate-600 h-16 outline-none resize-none" value={memos[selectedTerm.id] || ''} onChange={(e) => setMemos({ ...memos, [selectedTerm.id]: e.target.value })} />
              </div>
            </div>
            <button onClick={() => { const n = new Set(mastered); if (n.has(selectedTerm.id)) n.delete(selectedTerm.id); else n.add(selectedTerm.id); setMastered(n); }} className={`w-full py-5 ${theme === 'kawaii' ? 'rounded-[2.2rem]' : 'rounded-xl'} font-black text-white ${mastered.has(selectedTerm.id) ? 'bg-green-400' : s.accent} shadow-lg active:scale-95 transition-all mb-8`}>{mastered.has(selectedTerm.id) ? 'おぼえた！' : 'これをおぼえる！'}</button>

            {/* 関連用語セクション */}
            <div className="border-t border-slate-100 pt-8 text-left">
              <h3 className={`text-[10px] font-black ${s.accentText} uppercase tracking-[0.2em] mb-4 flex items-center gap-2`}><Plus size={14} /> 関連する用語</h3>
              <div className="grid gap-2">
                {INITIAL_TERMS
                  .filter(t => t.category === selectedTerm.category && t.id !== selectedTerm.id)
                  .sort(() => 0.5 - Math.random())
                  .slice(0, 3)
                  .map(item => (
                    <button key={item.id} onClick={() => { setSelectedTerm(item); setAiAnalysis(null); }} className={`flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all active:scale-95 text-left`}>
                      <div className={`w-8 h-8 ${item.color} rounded-lg flex items-center justify-center shrink-0`}>
                        <TermIcon item={item} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-black text-slate-700 truncate">{item.term}</p>
                        <p className="text-[9px] font-bold text-slate-400 truncate">{item.meaning}</p>
                      </div>
                      <ChevronRight size={14} className="text-slate-300" />
                    </button>
                  ))}
              </div>
            </div>
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

      <div className={`fixed bottom-0 left-0 right-0 ${theme === 'kawaii' ? 'bg-white/70 text-rose-300' : 'bg-slate-900/80 text-slate-400'} backdrop-blur-md py-1.5 text-center pointer-events-none md:hidden border-t border-white/10 z-40`}><p className="text-[8px] font-black tracking-[0.4em] uppercase">Terms: {INITIAL_TERMS.length} / v8.0</p></div>
      <Analytics />

      {/* --- Tuner Logic & UI --- */}
      <TunerModule
        theme={theme}
        s={s}
        isMetronomeOpen={isMetronomeOpen}
        setIsMetronomeOpen={setIsMetronomeOpen}
        isPlaying={isPlaying}
        toggleMetronome={toggleMetronome}
        bpm={bpm}
        setBpm={setBpm}
        beatsPerMeasure={beatsPerMeasure}
        setBeatsPerMeasure={setBeatsPerMeasure}
        currentBeat={currentBeat}
        beatRef={beatRef}
        setCurrentBeat={setCurrentBeat}
      />
    </div>
  );
}

// --- Tuner Component ---
const TunerModule = ({ theme, s, isMetronomeOpen, setIsMetronomeOpen, isPlaying, toggleMetronome, bpm, setBpm, beatsPerMeasure, setBeatsPerMeasure, currentBeat, beatRef, setCurrentBeat }) => {
  const [isTunerOpen, setIsTunerOpen] = useState(false);
  const [pitch, setPitch] = useState(0);
  const [note, setNote] = useState('-');
  const [cents, setCents] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const audioContextTuner = useRef(null);
  const analyser = useRef(null);
  const rafId = useRef(null);
  const source = useRef(null);

  const noteStrings = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

  const autoCorrelate = (buf, sampleRate) => {
    let SIZE = buf.length;
    let rms = 0;
    for (let i = 0; i < SIZE; i++) {
      const val = buf[i];
      rms += val * val;
    }
    rms = Math.sqrt(rms / SIZE);
    if (rms < 0.01) return -1;

    let r1 = 0, r2 = SIZE - 1, thres = 0.2;
    for (let i = 0; i < SIZE / 2; i++)
      if (Math.abs(buf[i]) < thres) { r1 = i; break; }
    for (let i = 1; i < SIZE / 2; i++)
      if (Math.abs(buf[SIZE - i]) < thres) { r2 = SIZE - i; break; }

    buf = buf.slice(r1, r2);
    SIZE = buf.length;

    let c = new Array(SIZE).fill(0);
    for (let i = 0; i < SIZE; i++)
      for (let j = 0; j < SIZE - i; j++)
        c[i] = c[i] + buf[j] * buf[j + i];

    let d = 0; while (c[d] > c[d + 1]) d++;
    let maxval = -1, maxpos = -1;
    for (let i = d; i < SIZE; i++) {
      if (c[i] > maxval) { maxval = c[i]; maxpos = i; }
    }
    let T0 = maxpos;

    let x1 = c[T0 - 1], x2 = c[T0], x3 = c[T0 + 1];
    let a = (x1 + x3 - 2 * x2) / 2;
    let b = (x3 - x1) / 2;
    if (a) T0 = T0 - b / (2 * a);

    return sampleRate / T0;
  };

  const getNote = (frequency) => {
    const noteNum = 12 * (Math.log(frequency / 440) / Math.log(2)) + 69;
    return Math.round(noteNum) + 69; // MIDI note? No, wait.
  };

  const updatePitch = () => {
    if (!analyser.current) return;
    const buf = new Float32Array(2048);
    analyser.current.getFloatTimeDomainData(buf);
    const ac = autoCorrelate(buf, audioContextTuner.current.sampleRate);

    if (ac !== -1) {
      setPitch(ac);
      const noteNum = 12 * (Math.log(ac / 440) / Math.log(2)) + 69;
      const noteIndex = Math.round(noteNum) % 12;
      setNote(noteStrings[noteIndex] || '-');
      const detune = Math.floor(1200 * Math.log2(ac / (440 * Math.pow(2, (Math.round(noteNum) - 69) / 12))));
      setCents(detune);
    }
    rafId.current = requestAnimationFrame(updatePitch);
  };

  const startTuner = async () => {
    try {
      if (!audioContextTuner.current) audioContextTuner.current = new (window.AudioContext || window.webkitAudioContext)();
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (audioContextTuner.current.state === 'suspended') await audioContextTuner.current.resume();

      source.current = audioContextTuner.current.createMediaStreamSource(stream);
      analyser.current = audioContextTuner.current.createAnalyser();
      analyser.current.fftSize = 2048;
      source.current.connect(analyser.current);

      setIsListening(true);
      updatePitch();
    } catch (e) {
      console.error("Tuner Error", e);
      setIsListening(false);
    }
  };

  const stopTuner = () => {
    setIsListening(false);
    if (rafId.current) cancelAnimationFrame(rafId.current);
    if (source.current) {
      source.current.disconnect();
      source.current = null;
    }
    setPitch(0);
    setNote('-');
    setCents(0);
  };

  useEffect(() => {
    if (isTunerOpen && !isListening) startTuner();
    if (!isTunerOpen && isListening) stopTuner();
    return () => stopTuner();
  }, [isTunerOpen]);

  const toggleTuner = () => {
    setIsTunerOpen(!isTunerOpen);
    if (isMetronomeOpen) setIsMetronomeOpen(false);
  }

  // Handle metronome open to close tuner
  useEffect(() => {
    if (isMetronomeOpen && isTunerOpen) setIsTunerOpen(false);
  }, [isMetronomeOpen]);


  // Visual helpers
  const isSharp = cents > 5;
  const isFlat = cents < -5;
  const isInTune = !isSharp && !isFlat && pitch > 0;

  const statusColor = isInTune
    ? 'text-emerald-500'
    : (isSharp ? 'text-rose-500' : 'text-sky-500');

  const bgColor = isInTune
    ? 'bg-emerald-50'
    : (isSharp ? 'bg-rose-50' : (isFlat ? 'bg-sky-50' : 'bg-slate-50'));

  const needleRotation = Math.max(-45, Math.min(45, cents));

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-[100]">
      {/* Tuner Panel */}
      {isTunerOpen && (
        <div className={`bg-white p-6 ${theme === 'kawaii' ? 'rounded-[2.5rem] border-rose-100' : 'rounded-2xl border-slate-200'} shadow-2xl border-2 w-72 mb-2 animate-in slide-in-from-bottom-4 duration-300`}>
          <div className="flex justify-between items-center mb-4">
            <span className={`${s.accentText} font-black text-[10px] uppercase tracking-widest flex items-center gap-1`}>
              <Volume2 size={12} /> Tuner
            </span>
            <button onClick={() => setIsTunerOpen(false)}><X size={20} className="text-slate-300 hover:text-slate-500" /></button>
          </div>

          <div className="text-center mb-6">
            <div className="relative inline-block">
              <div className={`text-7xl font-black ${pitch > 0 ? 'text-slate-800' : 'text-slate-200'} leading-none`}>
                {note}
              </div>
            </div>
            <div className="text-xs font-bold text-slate-400 mt-1 font-mono">{pitch > 0 ? `${Math.round(pitch)} Hz` : 'Listening...'}</div>
          </div>

          <div className={`relative h-12 mb-4 mx-2`}>
            <div className="flex justify-between text-[8px] text-slate-300 font-bold px-1 mb-1">
              <span>FLAT</span>
              <span className={isInTune ? 'text-emerald-500' : ''}>TUNE</span>
              <span>SHARP</span>
            </div>
            <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className={`absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-200`}></div>
            </div>

            {/* Needle */}
            <div
              className={`absolute top-1/2 left-1/2 w-1 h-8 -translate-x-1/2 -translate-y-[80%] rounded-full origin-bottom shadow-lg z-10 transition-transform duration-75 ease-out ${isInTune ? 'bg-emerald-500' : 'bg-rose-400'}`}
              style={{ transform: `translate(-50%, -80%) rotate(${needleRotation}deg)` }}
            >
              {isInTune && <div className="absolute -top-1 -left-1.5 w-4 h-4 bg-emerald-400/30 rounded-full animate-ping"></div>}
            </div>
          </div>

          <div className="text-center h-6">
            {isInTune && pitch > 0 && (
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 rounded-lg text-[10px] font-black uppercase tracking-widest animate-bounce">
                Perfect!
              </span>
            )}
            {isSharp && pitch > 0 && <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest">Too Sharp</span>}
            {isFlat && pitch > 0 && <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest">Too Flat</span>}
          </div>
        </div>
      )}

      {/* Metronome Panel (Existing) */}
      {isMetronomeOpen && (
        <div className={`bg-white p-6 ${theme === 'kawaii' ? 'rounded-[2.5rem]' : 'rounded-2xl'} shadow-2xl border-2 ${theme === 'kawaii' ? 'border-rose-100' : 'border-slate-200'} w-72 animate-in slide-in-from-bottom-4 duration-300`}>
          <div className="flex justify-between items-center mb-2"><span className={`${s.accentText} font-black text-[10px] uppercase tracking-widest`}>Metronome</span><button onClick={() => setIsMetronomeOpen(false)}><X size={20} /></button></div>
          <div className="grid grid-cols-4 gap-1 mb-4">{[2, 3, 4, 6].map(num => (<button key={num} onClick={() => { setBeatsPerMeasure(num); beatRef.current = 0; setCurrentBeat(0); }} className={`py-1 rounded-xl text-[10px] font-black transition-all ${beatsPerMeasure === num ? s.accent + ' text-white' : 'bg-slate-100 text-slate-400'}`}>{num === 6 ? '6/8' : `${num}拍`}</button>))}</div>
          <div className="text-center mb-6">
            <div className={`text-5xl font-black text-slate-800 mb-2 transition-all duration-75 ${isPlaying && currentBeat === 0 ? 'scale-110 ' + s.accentText : 'scale-100'}`}>
              {bpm}
            </div>

            {/* ビジュアルインジケータ（ドット） */}
            <div className="flex justify-center gap-2 mt-4">
              {[...Array(beatsPerMeasure)].map((_, i) => (
                <div
                  key={i}
                  className={`transition-all duration-150 rounded-full ${i === 0 ? 'w-3 h-3' : 'w-2 h-2'
                    } ${isPlaying && currentBeat === i
                      ? (i === 0 ? s.accent : (theme === 'kawaii' ? 'bg-rose-300' : 'bg-indigo-400'))
                      : 'bg-slate-100'
                    } ${isPlaying && currentBeat === i && i === 0 ? 'ring-4 ring-rose-100' : ''
                    }`}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 mb-6 px-2">
            <button onClick={() => setBpm(Math.max(40, bpm - 1))} className="p-2 bg-slate-100 rounded-full active:scale-90"><Minus size={18} /></button>
            <input type="range" min="40" max="240" value={bpm} onChange={(e) => setBpm(parseInt(e.target.value))} className={`flex-1 ${theme === 'kawaii' ? 'accent-rose-400' : 'accent-indigo-600'} h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer`} />
            <button onClick={() => setBpm(Math.min(240, bpm + 1))} className="p-2 bg-slate-100 rounded-full active:scale-90"><Plus size={18} /></button>
          </div>
          <button onClick={toggleMetronome} className={`w-full py-4 rounded-2xl font-black text-white shadow-lg ${isPlaying ? 'bg-slate-400' : s.accent + ' shadow-rose-200'}`}>{isPlaying ? 'STOP' : 'START'}</button>
        </div>
      )}

      {/* Buttons */}
      <button onClick={toggleTuner} className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all active:scale-90 overflow-hidden ${isTunerOpen ? s.accent + ' text-white ring-4 ring-rose-50' : 'bg-white text-slate-400 border-2 ' + (theme === 'kawaii' ? 'border-rose-100' : 'border-slate-100')}`}>
        {/* Tuning Fork SVG Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 18v3" />
          <path d="M12 18a5 5 0 0 1-5-5V3" />
          <path d="M12 18a5 5 0 0 0 5-5V3" />
        </svg>
      </button>

      <button onClick={() => { setIsMetronomeOpen(!isMetronomeOpen); if (isTunerOpen) setIsTunerOpen(false); }} className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-90 ${isMetronomeOpen ? s.accent + ' text-white ring-4 ring-rose-50' : 'bg-white ' + s.accentText + ' border-2 ' + (theme === 'kawaii' ? 'border-rose-100' : 'border-slate-100')}`}>
        {isPlaying ? (<Volume2 size={28} className="animate-pulse" />) : (<Music size={28} />)}
      </button>
    </div>
  );
};
