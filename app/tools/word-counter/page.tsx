"use client";
import React, { useState, useEffect } from "react";
import {
  FileText,
  Clock,
  Mic,
  Hash,
  RotateCcw,
  Info,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";
import FAQItem from "../../components/FAQItem";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ToolKing Word Counter",
  operatingSystem: "Web",
  applicationCategory: "UtilitiesApplication",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Professional real-time word counter tool for tracking word count, characters, and reading time.",
};

export default function WordCounter() {
  const [text, setText] = useState("");
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

  const faqs = [
    {
      question: "Is ToolKing Word Counter free?",
      answer:
        "Yes, our word counter is 100% free to use with no hidden costs or subscription requirements.",
    },
    {
      question: "Does it work with non-English languages?",
      answer:
        "Absolutely. It calculates word and character counts based on universal spacing, supporting Hindi, Spanish, French, and more.",
    },
    {
      question: "Is there a character limit?",
      answer:
        "There is no hard limit. You can paste content as long as your browser's memory allows, making it perfect for long-form manuscripts.",
    },
    {
      question: "How secure is my data?",
      answer:
        "ToolKing is a 'Client-Side' application. Your text never leaves your computer; it is processed locally in your browser.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADER */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-emerald-600 dark:from-indigo-400 dark:to-emerald-400 bg-clip-text text-transparent">
          Online Free Word Counter
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          Analyze your content's length and estimated reading time instantly
          with our premium analytics dashboard.
        </p>
      </header>

      {/* DASHBOARD - Adaptive Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard
          icon={<Hash className="w-5 h-5" />}
          label="Words"
          value={stats.words}
          color="text-indigo-600 dark:text-indigo-400"
        />
        <StatCard
          icon={<FileText className="w-5 h-5" />}
          label="Chars"
          value={stats.chars}
          color="text-emerald-600 dark:text-emerald-400"
        />
        <StatCard
          icon={<Clock className="w-5 h-5" />}
          label="Read Time"
          value={`${stats.readingTime}m`}
          color="text-amber-600 dark:text-amber-400"
        />
        <StatCard
          icon={<Mic className="w-5 h-5" />}
          label="Speak Time"
          value={`${stats.speakingTime}m`}
          color="text-rose-600 dark:text-rose-400"
        />
      </div>

      {/* TEXT AREA - High Contrast in Light, Glass in Dark */}
      <main className="relative mb-20 group">
        <textarea
          id="word-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste or type your text here..."
          className="w-full h-96 p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 focus:border-indigo-500/50 focus:ring-8 focus:ring-indigo-500/5 outline-none transition-all text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none font-sans text-lg shadow-sm dark:shadow-none"
        />
        <div className="absolute bottom-6 right-6">
          <button
            onClick={() => setText("")}
            className="p-4 bg-white dark:bg-slate-800/80 hover:bg-red-50 dark:hover:bg-red-500/20 hover:text-red-600 dark:hover:text-red-400 text-slate-400 rounded-2xl transition-all border border-slate-200 dark:border-slate-700 backdrop-blur-md shadow-md dark:shadow-none"
            title="Clear All"
          >
            <RotateCcw className="w-6 h-6" />
          </button>
        </div>
      </main>

      {/* SEO & FAQ SECTION */}
      <div className="grid lg:grid-cols-3 gap-16 border-t border-slate-100 dark:border-slate-900 pt-16">
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 dark:text-white">
            <ShieldCheck className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Privacy First
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            Everything you type remains local to your device. We do not store,
            view, or share your text with anyone.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
              Real-time browser-based processing.
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-8 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="bg-slate-50/50 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, color }: any) {
  return (
    <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center group hover:border-indigo-500/40 transition-all shadow-sm dark:shadow-none">
      <div
        className={`mb-3 p-2 rounded-lg bg-slate-50 dark:bg-slate-800 group-hover:scale-110 transition-transform ${color}`}
      >
        {icon}
      </div>
      <span className="text-3xl font-bold text-slate-900 dark:text-white">
        {value}
      </span>
      <span className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold mt-1">
        {label}
      </span>
    </div>
  );
}
