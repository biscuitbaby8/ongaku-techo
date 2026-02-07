import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Search, Music, Heart, CheckCircle, X, Camera, Play, Square, Plus, Minus, Brain, Timer, Music2
} from 'lucide-react';

// --- 用語データファイルからデータを読み込む (GitHub/Vercel環境用) ---
// ※プレビューではエラーが出ますが、GitHub上ではこれが正解です。
import { FINAL_TERMS } from './termsData.js';

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

  // メトロノーム・クイズ・カメラ等のステート
  const [quizData, setQuizData] = useState({ active: false, currentQ: 0, score: 0, questions: [] });
  const [bpm, setBpm] = useState(120);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMetronomeOpen, setIsMetronomeOpen] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(0); 

  const audioContext = useRef(null);
  const nextNoteTime = useRef(0);
  const beatRef = useRef(0); 
  const timerID = useRef(null);

  // --- メトロノーム ロジック ---
  useEffect(() => {
    if (isPlaying) {
      audioContext.current = new (window.AudioContext || window.webkitAudioContext)();
      nextNoteTime.current = audioContext.current.currentTime;
      const scheduler = () => {
        while (nextNoteTime.current < audioContext.current.currentTime + 0.1) {
          playTone(nextNoteTime.current, beatRef.current === 0);
          nextNoteTime.current += 60.0 / bpm;
          setCurrentBeat(beatRef.current);
          beatRef.current = (beatRef.current + 1) % 4;
        }
        timerID.current = setTimeout(scheduler, 25);
      };
      scheduler();
    } else {
      clearTimeout(timerID.current);
      if (audioContext.current) audioContext.current.close();
      beatRef.current = 0;
      setCurrentBeat(0);
    }
    return () => clearTimeout(timerID.current);
  }, [isPlaying, bpm]);

  const playTone = (time, isFirstBeat) => {
    const osc = audioContext.current.createOscillator();
    const envelope = audioContext.current.createGain();
    osc.frequency.value = isFirstBeat ? 880 : 440;
    envelope.gain.setValueAtTime(1, time);
    envelope.gain.exponentialRampToValueAtTime(0.001, time + 0.05);
    osc.connect(envelope);
    envelope.connect(audioContext.current.destination);
    osc.start(time);
    osc.stop(time + 0.05);
  };

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

  const startQuiz = () => {
    const shuffled = [...FINAL_TERMS].sort(() => 0.5 - Math.random()).slice(0, 5);
    setQuizData({ active: true, currentQ: 0, score: 0, questions: shuffled });
    setView('quiz');
  };

  return (
    <div className={`min-h-screen ${theme === 'kawaii' ? 'bg-[#FFFDF9]' : 'bg-slate-50'} text-slate-700 font-sans pb-40 transition-colors selection:bg-rose-100`}>
      <header className={`pt-10 pb-20 px-6 text-center relative overflow-hidden ${theme === 'kawaii' ? 'bg-rose-300 text-white' : 'bg-slate-900 text-white'}`}>
        <div className="flex justify-between items-center max-w-md mx-auto mb-4 relative z-10">
           <button onClick={() => {}} className="p-2 opacity-50 cursor-not-allowed"><Camera size={24} /></button>
           <h1 className="text-2xl font-black tracking-widest cursor-pointer flex items-center gap-2" onClick={() => setView('main')}><Music2 size={28} /> おんがく手帳</h1>
           <button onClick={() => setIsMetronomeOpen(true)} className="p-2 hover:bg-white/20 rounded-full transition-colors"><Timer size={24} /></button>
        </div>
        <div className="max-w-xs mx-auto relative z-10">
          <div className="flex justify-between items-center mb-1.5 px-1 font-black text-[10px]">
            <span>習得状況: {mastered.size} / {FINAL_TERMS.length}</span>
            <span>{Math.round((mastered.size / FINAL_TERMS.length) * 100)}%</span>
          </div>
          <div className="w-full h-2 bg-black/10 rounded-full overflow-hidden">
            <div className={`h-full bg-white transition-all duration-1000`} style={{ width: `${(mastered.size / FINAL_TERMS.length) * 100}%` }}></div>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 -mt-8 relative z-20">
        {view === 'main' && (
          <>
            <div className="flex gap-2 mb-6">
              <div className="relative flex-1 group">
                <input type="text" placeholder="用語を検索..." className="w-full pl-10 pr-4 py-4 rounded-3xl border-none shadow-xl focus:ring-4 outline-none transition-all placeholder:text-slate-300 bg-white" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-rose-400" size={20} />
              </div>
              <button onClick={startQuiz} className="bg-rose-400 text-white p-4 rounded-3xl shadow-lg active:scale-95 transition-all"><Brain size={24} /></button>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide mb-4">
              {CATEGORIES.map(cat => (
                <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-5 py-2 rounded-2xl text-sm font-bold whitespace-nowrap transition-all ${selectedCategory === cat ? 'bg-rose-400 text-white shadow-lg' : 'bg-white text-rose-300 border border-rose-50'}`}>{cat}</button>
              ))}
            </div>

            <div className="space-y-3">
              {filteredTerms.slice(0, visibleItems).map(item => (
                <div key={item.id} onClick={() => setSelectedTerm(item)} className="bg-white p-4 rounded-[2rem] shadow-sm flex items-center justify-between active:scale-95 transition-all border-2 border-transparent hover:border-rose-50 cursor-pointer">
                  <div className="flex items-center gap-4 overflow-hidden">
                    <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center relative shrink-0 shadow-inner`}>
                      <TermIcon item={item} />
                      {mastered.has(item.id) && <CheckCircle size={14} className="absolute -top-1 -right-1 text-green-500 bg-white rounded-full" fill="currentColor" />}
                    </div>
                    <div className="text-left min-w-0">
                      <h3 className="font-bold text-slate-800 truncate text-sm md:text-base">{item.term}</h3>
                      <p className="text-[11px] text-slate-500 font-bold truncate">{item.meaning}</p>
                    </div>
                  </div>
                  <button onClick={(e) => toggleFavorite(e, item.id)} className={`p-1.5 rounded-full ${favorites.has(item.id) ? 'text-rose-400 bg-rose-50' : 'text-slate-100'}`}><Heart size={16} fill={favorites.has(item.id) ? "currentColor" : "none"} /></button>
                </div>
              ))}
            </div>

            <footer className="mt-20 p-8 text-center text-[10px] text-slate-400 border-t border-slate-100">
              <p>© 2026 おんがく手帳</p>
              <div className="flex justify-center gap-6 mt-3">
                <a href="/privacy.html" className="hover:text-rose-400 transition-colors underline">プライバシーポリシー</a>
                <a href="#" className="hover:text-rose-400 transition-colors underline">お問い合わせ</a>
              </div>
            </footer>
          </>
        )}

        {view === 'quiz' && (
          <div className="bg-white rounded-[3rem] p-8 shadow-2xl text-center">
             <div className="flex justify-between items-center mb-8">
               <span className="text-xs font-black text-slate-300">QUESTION {quizData.currentQ + 1} / 5</span>
               <button onClick={() => setView('main')} className="text-slate-300 hover:text-rose-400"><X /></button>
             </div>
             <h2 className="text-4xl font-black mb-10">{quizData.questions[quizData.currentQ]?.term}</h2>
             <div className="space-y-4">
               {[...quizData.questions].sort(() => 0.5 - Math.random()).map((opt, i) => (
                 <button key={i} onClick={() => {
                    if(opt.id === quizData.questions[quizData.currentQ].id) setQuizData({...quizData, score: quizData.score + 1});
                    if(quizData.currentQ < 4) setQuizData({...quizData, currentQ: quizData.currentQ + 1});
                    else setView('main');
                  }} className="w-full py-5 px-6 bg-slate-50 hover:bg-rose-50 rounded-3xl font-bold text-slate-700 transition-all active:scale-95">{opt.meaning}</button>
               ))}
             </div>
          </div>
        )}
      </main>

      {isMetronomeOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xl z-[200] flex items-end">
           <div className="bg-white w-full rounded-t-[4rem] p-10 pb-20">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-xl font-black">METRONOME</h3>
                <button onClick={() => setIsMetronomeOpen(false)} className="p-2 bg-slate-100 rounded-full"><X size={20} /></button>
              </div>
              <div className="text-center mb-12">
                 <div className="text-7xl font-black mb-2 tabular-nums">{bpm}</div>
                 <div className="text-slate-300 font-bold tracking-widest uppercase text-xs">BPM</div>
              </div>
              <div className="flex justify-center gap-4 mb-12">
                 {[1, 2, 3, 4].map(b => (
                   <div key={b} className={`w-3 h-3 rounded-full transition-all duration-100 ${currentBeat === b-1 ? 'scale-150 bg-rose-400 shadow-[0_0_15px_rgba(251,113,133,0.6)]' : 'bg-slate-200'}`} />
                 ))}
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                 <button onClick={() => setBpm(Math.max(40, bpm - 1))} className="bg-slate-50 py-6 rounded-3xl flex items-center justify-center active:scale-95"><Minus /></button>
                 <button onClick={() => setBpm(Math.min(250, bpm + 1))} className="bg-slate-50 py-6 rounded-3xl flex items-center justify-center active:scale-95"><Plus /></button>
              </div>
              <button onClick={() => setIsPlaying(!isPlaying)} className={`w-full py-8 rounded-full font-black text-xl shadow-xl active:scale-95 ${isPlaying ? 'bg-slate-800 text-white' : 'bg-rose-400 text-white'}`}>
                {isPlaying ? 'STOP' : 'START'}
              </button>
           </div>
        </div>
      )}

      {selectedTerm && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[100] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-sm rounded-[3.5rem] shadow-2xl p-8 text-center relative">
            <button onClick={() => setSelectedTerm(null)} className="absolute top-6 right-6 p-2 text-slate-300 hover:text-slate-500"><X size={24} /></button>
            <div className={`w-24 h-24 ${selectedTerm.color} rounded-[2.5rem] mx-auto flex items-center justify-center shadow-xl mb-4`}><TermIcon item={selectedTerm} /></div>
            <h2 className="text-3xl font-black text-slate-800">{selectedTerm.term}</h2>
            <p className="text-rose-400 font-black italic uppercase text-sm mt-1 mb-6">{selectedTerm.reading}</p>
            <div className="bg-rose-50/50 p-6 rounded-[2.5rem] mb-6 shadow-inner text-sm leading-relaxed">{selectedTerm.meaning}</div>
            <button onClick={() => { const n = new Set(mastered); n.has(selectedTerm.id) ? n.delete(selectedTerm.id) : n.add(selectedTerm.id); setMastered(n); }} className={`w-full py-5 rounded-[2.2rem] font-black text-white ${mastered.has(selectedTerm.id) ? 'bg-green-400' : 'bg-rose-400'} shadow-lg active:scale-95 transition-all`}>
              {mastered.has(selectedTerm.id) ? 'おぼえた！' : 'これをおぼえる！'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
