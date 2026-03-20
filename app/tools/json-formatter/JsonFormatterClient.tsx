"use client";
import React, { useState, useRef } from "react";
import {
  Copy,
  Check,
  RotateCcw,
  Braces,
  AlertCircle,
  Zap,
  Code2,
  Terminal,
} from "lucide-react";

export default function JsonFormatterClient() {
  const [json, setJson] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // --- 🎨 SYNTAX HIGHLIGHTING ENGINE ---
  const highlightJSON = (code: string) => {
    if (!code) return "";
    const escaped = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    return escaped.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      (match) => {
        let cls = "text-emerald-500"; // Numbers
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = "text-indigo-500 font-bold"; // Keys
          } else {
            cls = "text-amber-500"; // Strings
          }
        } else if (/true|false/.test(match)) {
          cls = "text-rose-500 font-bold"; // Booleans
        } else if (/null/.test(match)) {
          cls = "text-slate-400 italic"; // Null
        }
        return `<span class="${cls}">${match}</span>`;
      },
    );
  };

  // Synchronize scrolling between textarea and highlighted background
  const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = e.currentTarget.scrollTop;
      scrollRef.current.scrollLeft = e.currentTarget.scrollLeft;
    }
  };

  // --- ⚙️ LOGIC: JSON TO TYPESCRIPT ---
  const generateTypeScript = (obj: any): string => {
    let interfaces: string[] = [];
    const parseObject = (data: any, name: string): string => {
      if (data === null) return "any";
      if (Array.isArray(data))
        return `${data.length > 0 ? parseObject(data[0], name) : "any"}[]`;
      if (typeof data === "object") {
        const interfaceName = name.charAt(0).toUpperCase() + name.slice(1);
        let str = `interface ${interfaceName} {\n`;
        Object.keys(data).forEach(
          (key) => (str += `  ${key}: ${parseObject(data[key], key)};\n`),
        );
        str += `}`;
        interfaces.push(str);
        return interfaceName;
      }
      return typeof data;
    };
    try {
      parseObject(JSON.parse(obj), "RootObject");
      return interfaces.join("\n\n");
    } catch {
      return "/* Invalid JSON */";
    }
  };

  const handleAction = (type: "format" | "minify" | "ts") => {
    try {
      const parsed = JSON.parse(json);
      if (type === "format") setJson(JSON.stringify(parsed, null, 2));
      if (type === "minify") setJson(JSON.stringify(parsed));
      if (type === "ts") {
        navigator.clipboard.writeText(generateTypeScript(json));
        setCopied("ts");
        setTimeout(() => setCopied(null), 2000);
      }
      setError(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      {/* --- TOOLBAR --- */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => handleAction("format")}
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-indigo-500/20"
        >
          <Braces className="w-4 h-4" /> Prettify
        </button>
        <button
          onClick={() => handleAction("ts")}
          className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-emerald-500/20"
        >
          <Code2 className="w-4 h-4" /> Copy TS
        </button>
        <button
          onClick={() => handleAction("minify")}
          className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-2xl font-black text-xs uppercase tracking-widest border border-slate-200 dark:border-slate-700 hover:bg-slate-200 transition-all"
        >
          <Zap className="w-4 h-4" /> Minify
        </button>
      </div>

      {/* --- EDITOR CANVAS --- */}
      <div className="relative group">
        <div className="w-full h-[550px] rounded-[2.5rem] bg-white dark:bg-slate-950 border-2 border-slate-100 dark:border-slate-800 overflow-hidden relative shadow-2xl">
          {/* LAYER 1: HIGHLIGHTED (Behind) */}
          <div
            ref={scrollRef}
            className="absolute inset-0 p-8 font-mono text-sm leading-relaxed whitespace-pre overflow-auto pointer-events-none"
            dangerouslySetInnerHTML={{ __html: highlightJSON(json) }}
          />

          {/* LAYER 2: CUSTOM PLACEHOLDER */}
          {!json && (
            <div className="absolute inset-0 p-8 font-mono text-sm leading-relaxed text-slate-400 dark:text-slate-600 pointer-events-none italic opacity-60">
              {`{
  "status": "ready",
  "action": "paste messy json here",
  "tip": "use buttons above to prettify or generate types",
  "safety": "100% private - browser based"
}`}
            </div>
          )}

          {/* LAYER 3: EDITING (On Top) */}
          <textarea
            value={json}
            onChange={(e) => setJson(e.target.value)}
            onScroll={handleScroll}
            className="absolute inset-0 w-full h-full p-8 bg-transparent text-transparent caret-indigo-500 font-mono text-sm leading-relaxed outline-none resize-none selection:bg-indigo-500/20"
            spellCheck={false}
          />
        </div>

        {/* FLOATING CONTROLS */}
        <div className="absolute bottom-6 right-6 flex gap-3">
          <button
            onClick={() => {
              navigator.clipboard.writeText(json);
              setCopied("raw");
              setTimeout(() => setCopied(null), 2000);
            }}
            className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:bg-indigo-500 hover:text-white transition-all shadow-xl"
            title="Copy Raw JSON"
          >
            {copied === "raw" ? (
              <Check className="w-5 h-5" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={() => {
              setJson("");
              setError(null);
            }}
            className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:bg-rose-500 hover:text-white transition-all shadow-xl"
            title="Clear All"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        {/* TS COPY NOTIFICATION */}
        {copied === "ts" && (
          <div className="absolute top-6 right-6 animate-in slide-in-from-right-4 p-3 bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xl z-10">
            <Terminal className="w-4 h-4" /> TypeScript Interface Copied!
          </div>
        )}
      </div>

      {/* --- ERROR FEEDBACK --- */}
      {error && (
        <div className="flex items-center gap-3 p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-rose-600 dark:text-rose-400 text-xs font-bold animate-in slide-in-from-top-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
