import React, { useState } from 'react';
import { Mail, Lock, UserPlus, LogIn, X, Loader2, Info } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

export default function AuthModal({ onClose, s, theme }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const handleAuth = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg('');
        setSuccessMsg('');

        try {
            if (isLogin) {
                const { error } = await supabase.auth.signInWithPassword({ email, password });
                if (error) throw error;
                // On success, App.jsx's onAuthStateChange listener will catch it.
                onClose();
            } else {
                const { error } = await supabase.auth.signUp({ email, password });
                if (error) throw error;
                setSuccessMsg('確認メールを送信しました。メールのリンクからログインしてください。');
            }
        } catch (error) {
            if (error.message.includes('Invalid login credentials')) {
                setErrorMsg('メールアドレスまたはパスワードが間違っています。');
            } else if (error.message.includes('User already registered')) {
                setErrorMsg('このメールアドレスは既に登録されています。');
            } else {
                setErrorMsg(error.message);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[250] flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className={`bg-white w-full max-w-sm ${theme === 'kawaii' ? 'rounded-[3.5rem]' : 'rounded-2xl'} shadow-2xl p-8`}>
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-black text-slate-800">{isLogin ? 'ログイン' : '新規登録'}</h3>
                    <button onClick={onClose} className="p-2 bg-slate-50 rounded-xl text-slate-300 hover:text-slate-500 transition-colors"><X size={24} /></button>
                </div>

                <div className="mb-6 bg-indigo-50/50 p-4 rounded-2xl flex gap-3 text-indigo-800/80 text-xs font-bold leading-relaxed border border-indigo-100/50">
                    <Info size={16} className="shrink-0 mt-0.5 text-indigo-500" />
                    <p>ログインすると、お使いの端末を変えたりキャッシュを消去しても、お気に入りや予定などのデータが消えずに引き継げます。</p>
                </div>

                <form onSubmit={handleAuth} className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Email</label>
                        <div className="relative">
                            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="w-full p-4 pl-11 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-200 outline-none font-bold text-sm transition-all"
                                placeholder="example@email.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Password</label>
                        <div className="relative">
                            <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                            <input
                                type="password"
                                required
                                minLength={6}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="w-full p-4 pl-11 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-200 outline-none font-bold text-sm transition-all"
                                placeholder="6文字以上のパスワード"
                            />
                        </div>
                    </div>

                    {errorMsg && <p className="text-xs text-rose-500 font-bold px-2">{errorMsg}</p>}
                    {successMsg && <p className="text-xs text-emerald-500 font-bold px-2">{successMsg}</p>}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-4 mt-2 ${s.accent} text-white rounded-2xl font-black shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2`}
                    >
                        {isLoading ? <Loader2 size={18} className="animate-spin" /> : (isLogin ? <LogIn size={18} /> : <UserPlus size={18} />)}
                        {isLogin ? 'ログインする' : '登録してデータを保護する'}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-xs font-bold text-slate-400">
                        {isLogin ? 'アカウントをお持ちでないですか？' : 'すでにアカウントをお持ちですか？'}
                    </p>
                    <button
                        type="button"
                        onClick={() => { setIsLogin(!isLogin); setErrorMsg(''); setSuccessMsg(''); }}
                        className={`mt-2 text-sm font-black ${s.accentText} hover:opacity-80 transition-opacity`}
                    >
                        {isLogin ? '新しくアカウントを作成' : 'ログイン画面へ'}
                    </button>
                </div>
            </div>
        </div>
    );
}
