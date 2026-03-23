"use client";

import React, { useState } from "react";
import { saveAs } from "file-saver";
import {
  Unlock,
  Loader2,
  FileText,
  CheckCircle2,
  Eye,
  EyeOff,
  Download,
  AlertCircle,
  ShieldAlert,
} from "lucide-react";

export default function UnlockPdfClient() {
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [unlockedBlob, setUnlockedBlob] = useState<Blob | null>(null);
  const [error, setError] = useState("");

  const handleUnlock = async () => {
    if (!file || !password) return;

    setError("");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("File", file);
      formData.append("Password", password);

      // 🚀 Calling your ASP.NET API via the Next.js Proxy
      const res = await fetch("/api/unlock-pdf", {
        method: "POST",
        body: formData,
      });

      if (res.status === 401) {
        throw new Error("Incorrect password. Please try again.");
      }

      if (!res.ok) {
        throw new Error(
          "Unable to unlock this PDF. It might not be encrypted.",
        );
      }

      const blob = await res.blob();
      setUnlockedBlob(blob);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (unlockedBlob && file) {
      saveAs(unlockedBlob, `unlocked_${file.name}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 md:p-12 bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-800">
      <div className="flex flex-col items-center gap-6">
        <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl text-indigo-600">
          <Unlock size={40} />
        </div>

        {!unlockedBlob ? (
          <div className="w-full space-y-6 animate-in fade-in duration-500">
            <label className="block border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center cursor-pointer hover:border-indigo-400 transition-all">
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="hidden"
              />
              <FileText className="mx-auto mb-2 text-slate-300" />
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                {file ? file.name : "Select Locked PDF"}
              </span>
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Current PDF Password"
                className="w-full p-4 bg-slate-50 dark:bg-slate-800 dark:text-white rounded-2xl outline-none font-bold text-sm border-2 border-transparent focus:border-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-rose-500 text-[10px] font-black uppercase italic animate-bounce">
                <ShieldAlert size={14} /> {error}
              </div>
            )}

            <button
              onClick={handleUnlock}
              disabled={!file || !password || loading}
              className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg disabled:opacity-30 transition-all active:scale-95"
            >
              {loading ? (
                <Loader2 className="animate-spin mx-auto" size={20} />
              ) : (
                "Unlock PDF"
              )}
            </button>
          </div>
        ) : (
          <div className="w-full text-center space-y-8 animate-in zoom-in-95 duration-500">
            <div className="p-10 bg-emerald-50 dark:bg-emerald-900/10 rounded-[2.5rem] border border-emerald-100 dark:border-emerald-900/20">
              <CheckCircle2
                size={50}
                className="text-emerald-500 mx-auto mb-4"
              />
              <h3 className="font-black italic text-2xl uppercase tracking-tighter text-slate-900 dark:text-white">
                Unlocked!
              </h3>
              <p className="text-[10px] text-slate-500 font-bold uppercase mt-2">
                Security Restrictions Removed
              </p>
            </div>

            <button
              onClick={handleDownload}
              className="w-full py-6 bg-emerald-500 hover:bg-emerald-600 text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs shadow-xl flex items-center justify-center gap-3 transition-all"
            >
              <Download size={20} /> Download Unlocked PDF
            </button>

            <button
              onClick={() => {
                setUnlockedBlob(null);
                setPassword("");
              }}
              className="text-slate-400 font-bold text-[10px] uppercase tracking-widest"
            >
              Unlock Another File
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
