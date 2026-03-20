"use client";
import React, { useState } from "react";
import { Copy, Check, RotateCcw, Type } from "lucide-react";

export default function CaseConverterClient() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const convert = (type: string) => {
    if (!text) return;

    // STEP 1: Smart Sanitizer
    // This replaces underscores (_) and hyphens (-) with spaces
    // ONLY if the target is a "human" case (Sentence, Title, Lower, Upper).
    // We keep them if we are converting between dev cases (snake/camel).
    let cleanText = text;
    if (["upper", "lower", "sentence", "title"].includes(type)) {
      cleanText = text.replace(/[_-]/g, " ");
    }

    let result = cleanText;

    switch (type) {
      case "upper":
        result = cleanText.toUpperCase();
        break;
      case "lower":
        result = cleanText.toLowerCase();
        break;
      case "sentence":
        // Lowercase everything first, then capitalize first letter of sentences
        result = cleanText
          .toLowerCase()
          .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
        break;
      case "title":
        result = cleanText
          .toLowerCase()
          .split(" ")
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(" ");
        break;
      case "camel":
        // Removes spaces/underscores and capitalizes following letters
        result = cleanText
          .replace(/(?:^\w|[A-Z]|\b\w)/g, (w, i) =>
            i === 0 ? w.toLowerCase() : w.toUpperCase(),
          )
          .replace(/[\s_-]+/g, "");
        break;
      case "snake":
        // Converts any case (including camelCase) to snake_case
        result = cleanText
          .replace(/([a-z])([A-Z])/g, "$1_$2") // Handle camelCase split
          .replace(/[\s-]+/g, "_") // Replace spaces/hyphens with _
          .toLowerCase();
        break;
    }
    setText(result);
  };

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* TOOLBAR */}
      <div className="flex flex-wrap gap-2">
        <ActionButton
          label="Sentence case"
          onClick={() => convert("sentence")}
        />
        <ActionButton label="lower case" onClick={() => convert("lower")} />
        <ActionButton label="UPPER CASE" onClick={() => convert("upper")} />
        <ActionButton label="Title Case" onClick={() => convert("title")} />
        <ActionButton
          label="camelCase"
          onClick={() => convert("camel")}
          color="bg-indigo-600 text-white border-transparent"
        />
        <ActionButton
          label="snake_case"
          onClick={() => convert("snake")}
          color="bg-slate-900 dark:bg-white text-white dark:text-black border-transparent"
        />
      </div>

      {/* INPUT AREA */}
      <div className="relative group">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your content here..."
          className="w-full h-80 p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-8 focus:ring-indigo-500/5 outline-none transition-all text-lg shadow-xl shadow-indigo-500/5 resize-none"
        />
        <div className="absolute bottom-6 right-6 flex gap-2">
          <button
            onClick={copy}
            className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:bg-emerald-50 text-slate-400 hover:text-emerald-600 transition-all shadow-lg"
          >
            {copied ? (
              <Check className="w-5 h-5" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={() => setText("")}
            className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:bg-red-50 text-slate-400 hover:text-red-600 transition-all shadow-lg"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ActionButton({
  label,
  onClick,
  color = "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800",
}: any) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl border font-bold text-[10px] uppercase tracking-wider hover:scale-105 active:scale-95 transition-all ${color}`}
    >
      {label}
    </button>
  );
}
