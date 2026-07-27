import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Music2, GitCompare, Disc3 } from 'lucide-react';

/**
 * 詳しい解説（termArticles.js）の表示。
 *
 * 静的HTML版（scripts/generate-static-pages.js）と同じ内容を描画する。
 * 同じURLに検索から来た場合とアプリ内リンクから来た場合とで
 * 内容が食い違わないようにするためのコンポーネント。
 */

const SectionHeading = ({ icon: Icon, children }) => (
    <h2 className="text-base font-black text-slate-800 mb-3 pl-3 border-l-4 border-rose-300 flex items-center gap-2">
        {Icon && <Icon size={16} className="text-rose-400" />}{children}
    </h2>
);

export default function TermArticle({ article }) {
    if (!article) return null;

    return (
        <div className="bg-white rounded-[2.2rem] shadow-xl shadow-slate-100 border border-slate-50 p-8 mb-8">
            <p className="text-sm text-slate-700 font-bold leading-loose mb-8 pb-8 border-b border-slate-100">
                {article.lead}
            </p>

            {article.sections?.map((sec, i) => (
                <section key={i} className="mb-8">
                    <SectionHeading icon={BookOpen}>{sec.heading}</SectionHeading>
                    <p className="text-sm text-slate-600 leading-loose">{sec.body}</p>
                </section>
            ))}

            {article.instruments?.length > 0 && (
                <section className="mb-8">
                    <SectionHeading icon={Music2}>演奏のヒント</SectionHeading>
                    <div className="grid gap-3">
                        {article.instruments.map((inst, i) => (
                            <div key={i} className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                                <p className="text-xs font-black text-rose-500 mb-1">{inst.name}</p>
                                <p className="text-sm text-slate-600 leading-relaxed">{inst.tip}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {article.confusions?.length > 0 && (
                <section className="mb-8">
                    <SectionHeading icon={GitCompare}>混同しやすい用語</SectionHeading>
                    <div className="grid gap-3">
                        {article.confusions.map((c, i) => (
                            <Link
                                key={i}
                                to={`/term/${c.slug}`}
                                className="block bg-white rounded-2xl p-4 border border-slate-100 hover:border-rose-200 transition-all no-underline"
                            >
                                <p className="text-sm font-black text-slate-800 mb-1">{c.term}</p>
                                <p className="text-sm text-slate-600 leading-relaxed">{c.note}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {article.works?.length > 0 && (
                <section>
                    <SectionHeading icon={Disc3}>この指示が使われる曲</SectionHeading>
                    <div className="grid gap-3">
                        {article.works.map((w, i) => (
                            <div key={i} className="bg-amber-50/50 rounded-2xl p-4 border border-amber-100">
                                <p className="text-sm font-black text-amber-700 mb-1">{w.title}</p>
                                <p className="text-sm text-slate-600 leading-relaxed">{w.note}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
