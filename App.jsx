import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Search, Music, Info, ChevronRight, X, Sparkles, Heart, CheckCircle, Edit3, Camera, Loader2, Play, Square, Plus, Minus, BookOpen, Languages, Palette, Settings, Mail, ShieldCheck, User, Volume2, Smartphone, Share, MoreVertical, ChevronDown, Brain
} from 'lucide-react';

// 【重要】自分で分割する場合、ここが接続コードになります
import { FINAL_TERMS } from './termsData.js';

const TermIcon = ({ item }) => {
  if (item.symbol) {
    return (
      <span className={`${
        item.category === '強弱' ? 'font-serif italic font-black text-2xl tracking-tighter' : 'font-sans font-black text-[9px] md:text-[10px] leading-tight text-center uppercase'
      } select-none text-current opacity-90 px-0.5 break-all line-clamp-2`}>
        {item.symbol}
      </span>
    );
  }
  return null;
};

const CATEGORIES = ['All', '強弱', '速度', '奏法', '表情', '構成', 'お気に入り'];
const ALPHABET = ['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];
const apiKey = ""; 

export default function App() {
  const [theme, setTheme] = useState('kawaii'); 
  const [view, setView] = useState('main'); 
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLetter, setSelectedLetter] = useState('All');
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [favorites, setFavorites] = useState(new Set());
  const [mastered, setMastered] = useState(new Set());
  const [memos, setMemos] = useState({});
  const [showSettings, setShowSettings] = useState(false);
  const [visibleItems, setVisibleItems] = useState(40);

  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanError, setScanError] = useState(null);
  const videoRef = useRef(null);

  const [bpm, setBpm] = useState(120);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4); 
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMetronomeOpen, setIsMetronomeOpen] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(0); 
  const audioContext = useRef(null);
  const nextNoteTime = useRef(0);
  const beatRef = useRef(0); 
  const timerID = useRef(null);

  const [quiz, setQuiz] = useState({ active: false, currentQ: 0, score: 0, questions: [] });

  const s = theme === 'kawaii' ? {
    bg: 'bg-[#FFFDF9]',
    header: 'bg-rose-300 rounded-b-[50px] text-white',
    accent: 'bg-rose-400',
    accentText: 'text-rose-400',
    tabActive: 'bg-rose-400 text-white shadow-lg scale-105',
    tabInactive: 'bg-white text-rose-300 border-rose-50',
    card: 'rounded-[2.2rem]',
    button: 'rounded-3xl shadow-rose-100',
  } : {
    bg: 'bg-slate-50',
    header: 'bg-slate-900 rounded-none text-slate-100',
    accent: 'bg-indigo-600',
    accentText: 'text-indigo-600',
    tabActive: 'bg-indigo-600 text-white shadow-md',
    tabInactive: 'bg-slate-200 text-slate-600 border-transparent',
    card: 'rounded-xl',
    button: 'rounded-xl shadow-slate-200',
  };

  const playClick = (time, beatNumber) => {
    if (!audioContext.current) return;
    const osc = audioContext.current.createOscillator();
    const envelope = audioContext.current.createGain();
    osc.frequency.value = beatNumber % beatsPerMeasure === 0 ? 1000 : 500;
    envelope.gain.value = 0.5;
    envelope.gain.exponentialRampToValueAtTime(0.001, time + 0.1);
    osc.connect(envelope);
    envelope.connect(audioContext.current.destination);
    osc.start(time);
    osc.stop(time + 0.1);
  };

  const scheduler = () => {
    while (nextNoteTime.current < audioContext.current.currentTime + 0.1) {
      playClick(nextNoteTime.current, beatRef.current);
      setCurrentBeat(beatRef.current % beatsPerMeasure);
      nextNoteTime.current += 60.0 / bpm;
      beatRef.current += 1;
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

  const filteredTerms = useMemo(() => {
    return FINAL_TERMS.filter(item => {
      const s = searchTerm.toLowerCase();
      const matchesSearch = s === '' || item.term.toLowerCase().includes(s) || item.reading.includes(s) || item.meaning.includes(s);
      const matchesCategory = selectedCategory === 'All' || (selectedCategory === 'お気に入り' ? favorites.has(item.id) : item.category === selectedCategory);
      const matchesLetter = selectedLetter === 'All' || item.term[0].toUpperCase() === selectedLetter;
      return matchesSearch && matchesCategory && matchesLetter;
    });
  }, [searchTerm, selectedCategory, selectedLetter, favorites]);

  return (
    <div className={`min-h-screen ${s.bg} text-slate-700 font-sans pb-40 transition-colors duration-500 selection:bg-rose-100`}>
      <header className={`${s.header} pt-10 pb-16 px-6 text-center relative overflow-hidden transition-all duration-500`}>
        <div className="absolute top-0 left-0 p-4 opacity-10 rotate-12"><BookOpen size={100} /></div>
        <button onClick={() => setShowSettings(true)} className="absolute top-10 right-6 p-2 bg-white/20 rounded-full hover:bg-white/30 z-30 transition-colors"><Settings size={20} /></button>
        <h1 className="text-2xl font-black tracking-widest relative z-10 flex items-center justify-center gap-2 cursor-pointer text-white" onClick={() => setView('main')}><Music size={28} /> おんがく手帳</h1>
        
        <div className="max-w-xs mx-auto mt-6 relative z-10">
          <div className="flex justify-between items-center mb-1.5 px-1 font-black text-[10px]">
            <span>習得状況: {mastered.size} / {FINAL_TERMS.length}</span>
            <span>{Math.round((mastered.size / FINAL_TERMS.length) * 100)}%</span>
          </div>
          <div className="w-full h-2 bg-black/10 rounded-full overflow-hidden">
            <div className="h-full bg-white transition-all duration-1000" style={{ width: `${(mastered.size / FINAL_TERMS.length) * 100}%` }}></div>
          </div>
        </div>
      </header>

      {showSettings && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-xs rounded-[2.5rem] shadow-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-black flex items-center gap-2 text-slate-800"><Settings size={20} className={s.accentText} /> 設定</h2>
              <button onClick={() => setShowSettings(false)} className="p-2 text-slate-300 hover:text-slate-500"><X size={24}/></button>
            </div>
            <div className="space-y-6 text-left">
              <section>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">テーマ切替</p>
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => { setTheme('kawaii'); setShowSettings(false); }} className={`py-3 rounded-xl font-bold text-xs ${theme === 'kawaii' ? 'bg-rose-400 text-white' : 'bg-slate-50 text-slate-400'}`}>Kawaii</button>
                  <button onClick={() => { setTheme('modern'); setShowSettings(false); }} className={`py-3 rounded-xl font-bold text-xs ${theme === 'modern' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-400'}`}>Modern</button>
                </div>
              </section>
              <section>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">サイト情報</p>
                <div className="grid gap-2">
                  <button onClick={() => { setView('privacy'); setShowSettings(false); }} className="w-full flex items-center gap-3 p-3 bg-slate-50 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"><ShieldCheck size={16}/> プライバシーポリシー</button>
                  <button onClick={() => { setView('contact'); setShowSettings(false); }} className="w-full flex items-center gap-3 p-3 bg-slate-50 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"><Mail size={16}/> お問い合わせ</button>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-md mx-auto px-4 -mt-8 relative z-20">
        {view === 'main' && (
          <>
            <div className="flex gap-2 mb-6">
              <div className="relative flex-1">
                <input type="text" placeholder="用語を検索..." className={`w-full pl-10 pr-4 py-4 ${s.button} border-none shadow-xl focus:ring-4 outline-none bg-white`} value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setVisibleItems(40); }} />
                <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${s.accentText}`} size={20} />
              </div>
              <button onClick={() => { const q = [...FINAL_TERMS].sort(() => 0.5 - Math.random()).slice(0, 5); setQuiz({active: true, currentQ: 0, score: 0, questions: q}); setView('quiz'); }} className={`bg-rose-400 p-4 ${s.button} text-white shadow-xl active:scale-90`}><Brain size={24} /></button>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 mb-2 scrollbar-hide px-1">
              {CATEGORIES.map(cat => (
                <button key={cat} onClick={() => { setSelectedCategory(cat); setSelectedLetter('All'); setVisibleItems(40); }} className={`px-5 py-2 rounded-2xl text-sm font-bold whitespace-nowrap transition-all ${selectedCategory === cat ? s.tabActive : s.tabInactive + ' border'}`}>{cat}</button>
              ))}
            </div>
            <div className={`flex gap-1.5 overflow-x-auto pb-4 mb-4 scrollbar-hide px-1 border-b ${theme === 'kawaii' ? 'border-rose-50' : 'border-slate-200'}`}>
              {ALPHABET.map(letter => (
                <button key={letter} onClick={() => { setSelectedLetter(letter); setVisibleItems(40); }} className={`min-w-[40px] h-7 px-2 rounded-xl text-[9px] font-black border ${selectedLetter === letter ? (theme === 'kawaii' ? 'bg-rose-100 text-rose-500 border-rose-200 shadow-sm scale-110' : 'bg-indigo-600 text-white border-indigo-600 shadow-sm scale-110') : 'bg-white text-slate-400'}`}>{letter}</button>
              ))}
            </div>

            <div className="space-y-3">
              {filteredTerms.slice(0, visibleItems).map(item => (
                <div key={item.id} onClick={() => setSelectedTerm(item)} className={`bg-white p-4 ${s.card} shadow-sm flex items-center justify-between border-2 border-transparent hover:border-slate-100 transition-all active:scale-95`}>
                  <div className="flex items-center gap-4 overflow-hidden">
                    <div className={`w-12 h-12 ${item.color} ${theme === 'kawaii' ? 'rounded-2xl' : 'rounded-lg'} flex items-center justify-center relative shrink-0`}>
                      <TermIcon item={item} />
                      {mastered.has(item.id) && <CheckCircle size={14} className="absolute -top-1 -right-1 text-green-500 bg-white rounded-full shadow-sm" fill="currentColor" />}
                    </div>
                    <div className="min-w-0 text-left">
                      <h3 className="font-bold text-slate-800 leading-tight truncate">{item.term}</h3>
                      {/* --- 改良：一覧画面での意味表示 --- */}
                      <p className="text-[10px] text-slate-500 font-bold truncate mt-0.5">{item.meaning}</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-slate-200" />
                </div>
              ))}
              
              {filteredTerms.length > visibleItems && (
                <button onClick={() => setVisibleItems(prev => prev + 40)} className={`w-full py-5 mt-6 font-black text-sm flex items-center justify-center gap-2 shadow-xl ${s.button} ${s.accent} text-white`}>
                  <ChevronDown size={20} /> さらに表示する
                </button>
              )}
            </div>
          </>
        )}

        {view === 'quiz' && (
          <div className="bg-white rounded-[3rem] p-10 shadow-2xl text-center">
             <div className="flex justify-between items-center mb-10">
               <span className="px-4 py-1.5 bg-rose-50 text-rose-400 rounded-full text-[10px] font-black uppercase">Q {quiz.currentQ + 1} / 5</span>
               <button onClick={() => setView('main')} className="p-2 text-slate-200 hover:text-rose-400"><X size={28} /></button>
             </div>
             <h2 className="text-4xl font-black text-slate-800 mb-12">{quiz.questions[quiz.currentQ]?.term}</h2>
             <div className="space-y-4">
               {quiz.questions.map((opt, i) => (
                 <button key={i} onClick={() => {
                      let ns = quiz.score;
                      if(opt.id === quiz.questions[quiz.currentQ].id) ns += 1;
                      if(quiz.currentQ < 4) setQuiz({...quiz, currentQ: quiz.currentQ + 1, score: ns});
                      else { setView('main'); alert(`終了！ スコア: ${ns} / 5`); }
                    }} className="w-full py-6 px-8 bg-slate-50 hover:bg-rose-50 hover:text-rose-500 rounded-[2.2rem] font-black text-slate-600 active:scale-95 transition-all text-sm"
                 >
                   {opt.meaning}
                 </button>
               ))}
             </div>
          </div>
        )}

        {/* Legal Views */}
        {(view === 'privacy' || view === 'contact') && (
           <div className="bg-white rounded-[2.5rem] p-8 shadow-xl text-left">
             <button onClick={() => setView('main')} className={`${s.accentText} font-bold text-sm mb-6 flex items-center gap-1`}>← 辞典にもどる</button>
             {view === 'privacy' && (<div><h2 className="text-2xl font-black mb-4 text-slate-800 uppercase tracking-widest">Privacy Policy</h2><p className="text-xs text-slate-500 font-bold leading-relaxed">当サイトではGoogle AdSenseを利用しています。データ収集に関する詳細はGoogleのポリシーをご確認ください。</p></div>)}
             {view === 'contact' && (<div><h2 className="text-2xl font-black mb-4 text-slate-800 uppercase tracking-widest">Contact</h2><div className={`${s.accent} text-white p-4 rounded-2xl text-center font-bold shadow-lg`}><a href="mailto:info@example.com">メールで問い合わせる</a></div></div>)}
           </div>
        )}
      </main>

      {/* Floating Metronome */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-40">
        {isMetronomeOpen && (
          <div className={`bg-white p-6 ${theme === 'kawaii' ? 'rounded-[2.5rem]' : 'rounded-2xl'} shadow-2xl border-2 ${theme === 'kawaii' ? 'border-rose-100' : 'border-slate-200'} w-64`}>
            <div className="flex justify-between items-center mb-2"><span className={`${s.accentText} font-black text-[10px] uppercase tracking-widest`}>Metronome</span><button onClick={() => { setIsMetronomeOpen(false); setIsPlaying(false); }} className="text-slate-300 hover:text-slate-500"><X size={20}/></button></div>
            <div className="text-center mb-6"><div className={`text-5xl font-black text-slate-800 mb-1`}>{bpm}</div><div className="flex justify-center gap-2">{[...Array(beatsPerMeasure)].map((_, b) => (<div key={b} className={`w-2 h-2 rounded-full transition-all ${isPlaying && currentBeat === b ? s.accent + ' scale-150' : 'bg-slate-100'}`} />))}</div></div>
            <div className="flex items-center gap-3 mb-6 px-2"><button onClick={() => setBpm(Math.max(40, bpm - 1))} className="p-2 bg-slate-100 rounded-full"><Minus size={18}/></button><input type="range" min="40" max="240" value={bpm} onChange={(e) => setBpm(parseInt(e.target.value))} className={`flex-1 h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer`} /><button onClick={() => setBpm(Math.min(240, bpm + 1))} className="p-2 bg-slate-100 rounded-full"><Plus size={18}/></button></div>
            <button onClick={toggleMetronome} className={`w-full py-4 rounded-2xl font-black text-white transition-all shadow-lg ${isPlaying ? 'bg-slate-400' : s.accent}`}>{isPlaying ? 'STOP' : 'START'}</button>
          </div>
        )}
        <button onClick={() => setIsMetronomeOpen(!isMetronomeOpen)} className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl active:scale-90 ${isMetronomeOpen ? s.accent + ' text-white' : 'bg-white ' + s.accentText + ' border-2'}`}>
          {isPlaying ? (<Volume2 size={28} className="animate-pulse" />) : (<Music size={28} />)}
        </button>
      </div>

      {/* Detail Modal */}
      {selectedTerm && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto text-center">
          <div className={`bg-white w-full max-w-sm ${theme === 'kawaii' ? 'rounded-[3.5rem]' : 'rounded-2xl'} shadow-2xl p-8`}>
            <div className="flex justify-end mb-4"><button onClick={() => setSelectedTerm(null)} className="p-3 bg-slate-50 text-slate-300 rounded-2xl hover:bg-slate-100"><X size={24} /></button></div>
            <div className={`w-24 h-24 ${selectedTerm.color} ${theme === 'kawaii' ? 'rounded-[2.5rem]' : 'rounded-xl'} mx-auto flex items-center justify-center shadow-inner border-4 border-white mb-4`}><TermIcon item={selectedTerm} /></div>
            <h2 className="text-3xl font-black text-slate-800">{selectedTerm.term}</h2>
            <p className={`${s.accentText} font-bold italic uppercase text-sm tracking-widest mt-1 mb-6`}>{selectedTerm.reading}</p>
            <div className={`${theme === 'kawaii' ? 'bg-rose-50/50 rounded-[2.5rem]' : 'bg-slate-50 rounded-xl'} p-6 mb-8 shadow-inner`}><p className="text-slate-800 font-black text-xl mb-3">"{selectedTerm.meaning}"</p><p className="text-slate-600 text-xs leading-relaxed">{selectedTerm.detail}</p></div>
            <button onClick={() => { const n = new Set(mastered); if(n.has(selectedTerm.id)) n.delete(selectedTerm.id); else n.add(selectedTerm.id); setMastered(n); }} className={`w-full py-5 ${s.card} font-black text-white ${mastered.has(selectedTerm.id) ? 'bg-green-400' : s.accent} shadow-lg active:scale-95 transition-all`}>{mastered.has(selectedTerm.id) ? 'おぼえた！' : 'これをおぼえる！'}</button>
          </div>
        </div>
      )}
    </div>
  );
}
