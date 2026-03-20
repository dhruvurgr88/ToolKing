"use client";
import React, { useState, useEffect } from "react";
import {
  Hash,
  FileText,
  Clock,
  Mic,
  RotateCcw,
  Copy,
  Check,
} from "lucide-react";

export default function WordCounterClient() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const [stats, setStats] = useState({
    words: 0,
    chars: 0,
    readingTime: 0,
    speakingTime: 0,
  });

  useEffect(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    setStats({
      words,
      chars,
      readingTime: Math.ceil(words / 225),
      speakingTime: Math.ceil(words / 130),
    });
  }, [text]);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* DASHBOARD */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          icon={<Hash className="w-5 h-5" />}
          label="Words"
          value={stats.words}
          color="text-indigo-600"
        />
        <StatCard
          icon={<FileText className="w-5 h-5" />}
          label="Chars"
          value={stats.chars}
          color="text-emerald-600"
        />
        <StatCard
          icon={<Clock className="w-5 h-5" />}
          label="Read"
          value={`${stats.readingTime}m`}
          color="text-amber-600"
        />
        <StatCard
          icon={<Mic className="w-5 h-5" />}
          label="Speak"
          value={`${stats.speakingTime}m`}
          color="text-rose-600"
        />
      </div>

      {/* TEXT AREA */}
      <div className="relative group">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste or type your text here..."
          className="w-full h-96 p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-8 focus:ring-indigo-500/5 outline-none transition-all text-lg shadow-xl shadow-indigo-500/5 resize-none"
        />
        <div className="absolute bottom-6 right-6 flex gap-2">
          <button
            onClick={handleCopy}
            className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-500/20 text-slate-400 hover:text-emerald-600 transition-all shadow-lg"
            title="Copy Text"
          >
            {copied ? (
              <Check className="w-5 h-5" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={() => setText("")}
            className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:bg-red-50 dark:hover:bg-red-500/20 text-slate-400 hover:text-red-600 transition-all shadow-lg"
            title="Clear All"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, color }: any) {
  return (
    <div className="p-6 rounded-[2rem] bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center transition-all shadow-sm">
      <div
        className={`mb-3 p-2 rounded-xl bg-slate-50 dark:bg-slate-800 ${color}`}
      >
        {icon}
      </div>
      <span className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
        {value}
      </span>
      <span className="text-[10px] uppercase tracking-widest text-slate-400 font-black mt-1">
        {label}
      </span>
    </div>
  );
}
