// components/BlogPost.tsx
import React from "react";

export default function BlogPost({
  title,
  date,
  category,
  children,
}: {
  title: string;
  date: string;
  category: string;
  children: React.ReactNode;
}) {
  return (
    <article className="max-w-4xl mx-auto px-6 py-24 bg-white dark:bg-slate-950 min-h-screen">
      <div className="mb-12 text-center">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 px-4 py-2 rounded-full">
          {category}
        </span>
        <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter mt-6 mb-4 leading-tight uppercase">
          {title}
        </h1>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
          Published: {date} • 5 Min Read
        </p>
      </div>
      <div
        className="prose prose-slate dark:prose-invert max-w-none 
        prose-h2:text-3xl prose-h2:font-black prose-h2:italic prose-h2:uppercase prose-h2:tracking-tighter
        prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed prose-p:font-medium
        prose-strong:text-indigo-600 prose-strong:font-black"
      >
        {children}
      </div>
    </article>
  );
}
