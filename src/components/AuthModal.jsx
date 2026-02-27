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

    const handleGoogleLogin = async () => {
        setIsLoading(true);
        setErrorMsg('');
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: window.location.origin,
                },
            });
            if (error) throw error;
        } catch (error) {
            setErrorMsg(error.message);
            setIsLoading(false);
        }
    };

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

                <button
                    onClick={handleGoogleLogin}
                    disabled={isLoading}
                    className="w-full py-4 mb-4 bg-white border-2 border-slate-100 hover:border-slate-200 hover:bg-slate-50 text-slate-700 rounded-2xl font-black shadow-sm active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                    <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                            <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                            <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                            <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                            <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
                        </g>
                    </svg>
                    Googleで続ける
                </button>

                <div className="flex items-center gap-3 mb-4">
                    <div className="h-px bg-slate-100 flex-1"></div>
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">or email</span>
                    <div className="h-px bg-slate-100 flex-1"></div>
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
                        {isLogin ? 'ログインする' : '登録してメールを送信'}
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
                        {isLogin ? 'メールアドレスで新しく登録' : 'ログイン画面へ'}
                    </button>
                </div>
            </div>
        </div>
    );
}
