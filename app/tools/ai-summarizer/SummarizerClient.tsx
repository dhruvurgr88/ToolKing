"use client";

import React, { useState } from "react";
import {
  Sparkles,
  FileText,
  Copy,
  Check,
  Loader2,
  Zap,
  Trash2,
  BrainCircuit,
  StopCircle,
  RefreshCcw,
} from "lucide-react";

export default function SummarizerClient() {
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [length, setLength] = useState("medium");
  const [copied, setCopied] = useState(false);

  const handleSummarize = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input || isLoading) return;

    setIsLoading(true);
    setSummary("");

    try {
      const response = await fetch("/api", {
        method: "POST",
        body: JSON.stringify({ prompt: input, length }),
      });

      if (!response.ok) throw new Error("Connection failed");

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let fullRawText = "";

      while (!done) {
        const { value, done: doneReading } = await reader!.read();
        done = doneReading;
        const chunk = decoder.decode(value);
        fullRawText += chunk;

        // Clean JSON formatting from the stream
        let cleanText = fullRawText
          .replace(/^\{"output":"/, "")
          .replace(/"\}$/, "")
          .replace(/\\n/g, "\n")
          .replace(/\\"/g, '"');

        setSummary(cleanText);
      }
    } catch (error) {
      setSummary("Error: AI could not process the request. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const wordCount = input.trim() ? input.trim().split(/\s+/).length : 0;

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* --- MAIN TOOL INTERFACE --- */}
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* INPUT PANEL */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <FileText size={14} /> Input Source
            </span>
            <button
              type="button"
              onClick={() => {
                setInput("");
                setSummary("");
              }}
              className="text-[10px] font-black uppercase text-rose-500 font-bold"
            >
              <Trash2 size={12} className="inline mr-1" /> Clear
            </button>
          </div>

          <form onSubmit={handleSummarize} className="space-y-6">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste your long article, essay, or notes here..."
              className="w-full h-[400px] p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 outline-none text-slate-900 dark:text-slate-100 font-medium text-sm focus:ring-2 focus:ring-indigo-500 transition-all"
            />

            <div className="flex justify-between items-center px-2">
              <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                {["short", "medium", "long"].map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setLength(l)}
                    className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase transition-all ${
                      length === l
                        ? "bg-white dark:bg-slate-700 text-indigo-600 shadow-sm"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <span
                className={`text-[10px] font-bold uppercase ${wordCount > 2000 ? "text-rose-500" : "text-slate-400"}`}
              >
                {wordCount} / 2000 Words
              </span>
            </div>

            <button
              type="submit"
              disabled={isLoading || !input || wordCount > 2000}
              className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 transition-transform active:scale-95"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size={18} />
              ) : (
                <Sparkles size={18} />
              )}
              {isLoading ? "Analyzing..." : "Summarize with AI"}
            </button>
          </form>
        </div>

        {/* RESULT PANEL */}
        <div className="sticky top-10">
          <div
            className={`p-10 min-h-[580px] rounded-[3rem] border bg-white dark:bg-slate-900 shadow-2xl relative flex flex-col transition-all duration-500 ${
              isLoading
                ? "border-indigo-400 ring-4 ring-indigo-50/50"
                : "border-slate-200 dark:border-slate-800"
            }`}
          >
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-xl font-black italic flex items-center gap-2 text-slate-900 dark:text-white">
                <BrainCircuit size={22} className="text-indigo-600" /> Summary
                Result
              </h3>
              {summary && !isLoading && (
                <button
                  onClick={copyToClipboard}
                  className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:text-indigo-600 transition-all"
                >
                  {copied ? (
                    <Check size={18} className="text-emerald-500" />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
              )}
            </div>

            <div className="flex-1">
              {isLoading && !summary ? (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <div className="relative mb-6">
                    <Loader2
                      className="animate-spin text-indigo-600"
                      size={60}
                      strokeWidth={1.5}
                    />
                    <RefreshCcw
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-300 animate-reverse-spin"
                      size={20}
                    />
                  </div>
                  <p className="text-sm font-black uppercase tracking-[0.3em] text-indigo-600 animate-pulse">
                    AI is Reading...
                  </p>
                </div>
              ) : summary ? (
                <div className="animate-in fade-in duration-300">
                  <p className="text-lg leading-relaxed whitespace-pre-line font-bold text-slate-900 dark:text-slate-100 p-8 bg-slate-50 dark:bg-slate-950 rounded-[2.5rem] border border-indigo-50 dark:border-indigo-900/20 shadow-inner italic selection:bg-indigo-100">
                    {summary}
                    {isLoading && (
                      <span className="inline-block w-2 h-5 ml-1 bg-indigo-500 animate-pulse" />
                    )}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-center opacity-20 italic">
                  <Zap size={50} className="mb-6 text-slate-300" />
                  <p className="text-sm font-black uppercase tracking-[0.3em] text-slate-400">
                    Awaiting Content
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* --- SEO CONTENT SECTION (CRITICAL FOR RANKING) --- */}
      <div className="max-w-5xl mx-auto mt-32 space-y-24 pb-20 border-t border-slate-100 dark:border-slate-800 pt-20">
        {/* KEYWORD RICH DESCRIPTION */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-black italic text-slate-900 dark:text-white leading-tight">
              Free AI <span className="text-indigo-600">Article & Essay</span>{" "}
              Summarizer Online
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Don't waste hours reading lengthy documents. Our{" "}
              <span className="font-bold text-slate-900 dark:text-white">
                free AI text summarizer
              </span>{" "}
              uses state-of-the-art Natural Language Processing to condense any
              text into a short, clear summary. Whether you are a student
              looking to{" "}
              <span className="underline decoration-indigo-400 font-bold text-slate-900 dark:text-white">
                summarize essays free
              </span>{" "}
              or a professional needing quick insights from business reports,
              ToolKing delivers instant results.
            </p>
          </div>
          <div className="bg-indigo-600/5 p-10 rounded-[3rem] border border-indigo-100 dark:border-indigo-900/30 shadow-sm">
            <h3 className="text-sm font-black uppercase tracking-widest text-indigo-600 mb-6">
              How to use AI Summarizer?
            </h3>
            <ol className="space-y-6">
              {[
                "Paste your long-form article or essay into the input field above.",
                "Choose your desired summary length (Short, Medium, or Long).",
                "Click 'Generate Summary' to get your concise AI-generated text.",
              ].map((step, i) => (
                <li
                  key={i}
                  className="flex gap-4 text-sm font-bold text-slate-700 dark:text-slate-300"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs shadow-lg">
                    {i + 1}
                  </span>
                  <p className="pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* USE CASE GRID */}
        <section className="space-y-12">
          <h2 className="text-3xl font-black italic text-slate-900 dark:text-white text-center">
            Who uses ToolKing's AI Summarizer?
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: "Students",
                desc: "Instantly summarize research papers and textbook chapters to speed up study sessions.",
              },
              {
                title: "Content Creators",
                desc: "Generate short summaries for social media posts, newsletters, and meta descriptions.",
              },
              {
                title: "Business Pros",
                desc: "Scan reports, meeting notes, and long emails quickly to capture vital data points.",
              },
            ].map((box, i) => (
              <div
                key={i}
                className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-indigo-600/30 transition-all group"
              >
                <h4 className="text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4 group-hover:scale-110 transition-transform origin-left">
                  {box.title}
                </h4>
                <p className="text-sm font-medium text-slate-500 leading-relaxed">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="space-y-12">
          <h2 className="text-3xl font-black italic text-slate-900 dark:text-white text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "Is this AI summarizer tool free?",
                a: "Yes, our tool is 100% free with no login required. You can summarize articles and essays as much as you need.",
              },
              {
                q: "Is my data private and secure?",
                a: "Absolutely. We do not store your text. Everything is processed in real-time and deleted immediately after use.",
              },
              {
                q: "What is the word limit?",
                a: "You can paste up to 2000 words at a time for optimal AI processing and summary accuracy.",
              },
              {
                q: "Can I use it on mobile?",
                a: "Yes! ToolKing is optimized for mobile browsers, so you can summarize on the go.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <h4 className="font-black text-slate-900 dark:text-white mb-3 text-sm">
                  {faq.q}
                </h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed uppercase tracking-wider">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
