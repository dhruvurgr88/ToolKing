"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Link2,
  Copy,
  Check,
  AlertCircle,
  RefreshCcw,
  ExternalLink,
  QrCode,
  Tag,
  Zap,
} from "lucide-react";

export default function ShortenerClient() {
  const [longUrl, setLongUrl] = useState("");
  const [alias, setAlias] = useState(""); // 🔥 FIX 2: Custom Alias
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleShorten = async () => {
    if (!longUrl) return;

    // 🔥 FIX 1: Auto-Fix Protocol
    let finalLongUrl = longUrl.trim();
    if (!finalLongUrl.startsWith("http")) {
      finalLongUrl = "https://" + finalLongUrl;
      setLongUrl(finalLongUrl);
    }

    try {
      new URL(finalLongUrl);
    } catch (_) {
      setError("Please enter a valid URL.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Logic for Custom Alias (Power Feature)
      // Note: Using TinyURL API here; Custom Alias requires your own backend (Supabase/Prisma)
      // For now, we simulate the "Branded" feel
      const res = await fetch(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(finalLongUrl)}${alias ? `&alias=${encodeURIComponent(alias)}` : ""}`,
      );

      if (!res.ok) throw new Error("Alias might already be taken.");

      const data = await res.text();
      setShortUrl(data);
    } catch (err: any) {
      setError(err.message || "Failed to shorten. Try a different alias.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-700">
      <div className="bg-white dark:bg-slate-950 p-8 md:p-12 rounded-[3.5rem] border-2 border-slate-100 dark:border-slate-800 shadow-2xl space-y-6">
        {/* URL Input */}
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
            Destination URL
          </label>
          <div className="relative">
            <Link2 className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
            <input
              type="text"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              placeholder="example.com/very-long-link"
              className="w-full pl-16 pr-8 py-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-blue-500 outline-none font-bold shadow-inner"
            />
          </div>
        </div>

        {/* 🔥 FIX 2: Custom Alias Input */}
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
            Custom Alias (Optional)
          </label>
          <div className="relative">
            <Tag className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
            <input
              type="text"
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
              placeholder="e.g. my-awesome-link"
              className="w-full pl-16 pr-8 py-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-blue-500 outline-none font-bold shadow-inner"
            />
          </div>
        </div>

        <button
          onClick={handleShorten}
          disabled={loading || !longUrl}
          className="w-full py-6 bg-blue-600 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
        >
          {loading ? (
            <RefreshCcw className="w-5 h-5 animate-spin" />
          ) : (
            <Zap className="w-5 h-5" />
          )}
          {loading ? "PROCESSING..." : "GET SHORT LINK"}
        </button>

        {/* --- RESULT CARD --- */}
        {shortUrl && (
          <div className="animate-in zoom-in-95 p-8 bg-blue-50 dark:bg-blue-900/10 border-2 border-blue-100 dark:border-blue-800/30 rounded-[2.5rem] space-y-6">
            <div className="flex justify-between items-center">
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                Success! Your link is ready
              </p>
              {copied && (
                <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full animate-bounce">
                  🔥 COPIED TO CLIPBOARD
                </span>
              )}
            </div>

            <div className="flex items-center gap-3">
              <input
                readOnly
                value={shortUrl}
                className="flex-1 bg-white dark:bg-slate-900 px-6 py-4 rounded-xl font-bold text-blue-600 border border-blue-200 outline-none shadow-sm"
              />
              <button
                onClick={copyToClipboard}
                className="p-4 bg-white dark:bg-slate-900 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-md active:scale-90"
              >
                {copied ? (
                  <Check className="w-6 h-6 text-emerald-500" />
                ) : (
                  <Copy className="w-6 h-6" />
                )}
              </button>
            </div>

            <div className="flex justify-center gap-6 pt-2">
              <a
                href={shortUrl}
                target="_blank"
                className="flex items-center gap-2 text-[10px] font-black uppercase text-blue-400 hover:text-blue-600 transition-colors"
              >
                <ExternalLink className="w-3 h-3" /> Visit Link
              </a>
              {/* 🔥 FIX 3: QR Code Bridge */}
              <Link
                href={`/tools/qr-code-generator?url=${encodeURIComponent(shortUrl)}`}
                className="flex items-center gap-2 text-[10px] font-black uppercase text-indigo-400 hover:text-indigo-600 transition-colors"
              >
                <QrCode className="w-3 h-3" /> Generate QR
              </Link>
            </div>
          </div>
        )}

        {error && (
          <div className="p-4 bg-rose-50 border border-rose-100 text-rose-600 rounded-2xl text-[10px] font-black uppercase flex items-center gap-2 animate-shake">
            <AlertCircle className="w-4 h-4" /> {error}
          </div>
        )}
      </div>
    </div>
  );
}
