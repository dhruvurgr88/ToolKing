"use client";

import React, { useState } from "react";
import { saveAs } from "file-saver";
import {
  ShieldCheck,
  Loader2,
  FileText,
  CheckCircle2,
  Lock,
  Eye,
  EyeOff,
  Download,
  AlertCircle,
} from "lucide-react";

export default function ProtectPdfClient() {
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [protectedBlob, setProtectedBlob] = useState<Blob | null>(null);
  const [error, setError] = useState("");

  const handleProtect = async () => {
    // 1. Validation Logic
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    if (password.length < 4) {
      setError("Password must be at least 4 characters.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("File", file!);
      formData.append("Password", password);

      // 🚀 Calling your local Next.js API route
      const res = await fetch("/api/protect-pdf", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Processing failed");
      }

      const blob = await res.blob();

      // 2. Instead of auto-download, we store the blob to show the download button
      setProtectedBlob(blob);
    } catch (err: any) {
      console.error("Protection Error:", err);
      setError(err.message || "Error protecting PDF. Check connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (protectedBlob && file) {
      saveAs(protectedBlob, `protected_${file.name}`);
    }
  };

  const resetForm = () => {
    setFile(null);
    setPassword("");
    setConfirmPassword("");
    setProtectedBlob(null);
    setError("");
  };

  return (
    <div className="max-w-2xl mx-auto p-8 md:p-12 bg-white dark:bg-slate-900 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800">
      <div className="flex flex-col items-center gap-6">
        <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl text-indigo-600">
          <ShieldCheck size={40} />
        </div>

        {!protectedBlob ? (
          <div className="w-full space-y-6 animate-in fade-in duration-500">
            {/* FILE UPLOAD SLOT */}
            <label className="block border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center cursor-pointer hover:border-indigo-400 transition-all">
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => {
                  setFile(e.target.files?.[0] || null);
                  setError("");
                }}
                className="hidden"
              />
              <FileText className="mx-auto mb-2 text-slate-300" />
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                {file ? file.name : "Select PDF Document"}
              </span>
            </label>

            {/* PASSWORD INPUTS */}
            <div className="space-y-3">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create Password"
                  className="w-full p-4 bg-slate-50 dark:bg-slate-800 dark:text-white rounded-2xl outline-none font-bold text-sm border-2 border-transparent focus:border-indigo-500 transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full p-4 bg-slate-50 dark:bg-slate-800 dark:text-white rounded-2xl outline-none font-bold text-sm border-2 border-transparent focus:border-indigo-500 transition-all"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {/* ERROR DISPLAY */}
            {error && (
              <div className="flex items-center gap-2 text-rose-500 text-[10px] font-black uppercase italic animate-in shake duration-300">
                <AlertCircle size={14} /> {error}
              </div>
            )}

            <button
              onClick={handleProtect}
              disabled={!file || !password || !confirmPassword || loading}
              className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg shadow-indigo-500/20 disabled:opacity-30 transition-all active:scale-95 flex items-center justify-center"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                "Encrypt & Protect"
              )}
            </button>
          </div>
        ) : (
          /* SUCCESS & MANUAL DOWNLOAD STATE */
          <div className="w-full text-center space-y-8 animate-in zoom-in-95 duration-500">
            <div className="p-10 bg-emerald-50 dark:bg-emerald-900/10 rounded-[2.5rem] border border-emerald-100 dark:border-emerald-900/20">
              <CheckCircle2
                size={50}
                className="text-emerald-500 mx-auto mb-4 animate-bounce"
              />
              <h3 className="font-black italic text-2xl uppercase tracking-tighter text-slate-900 dark:text-white">
                Vault Secured
              </h3>
              <p className="text-[10px] text-slate-500 font-bold uppercase mt-2 tracking-widest">
                Your file is ready for download
              </p>
            </div>

            <button
              onClick={handleDownload}
              className="w-full py-6 bg-emerald-500 hover:bg-emerald-600 text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs shadow-xl flex items-center justify-center gap-3 transition-all active:scale-95"
            >
              <Download size={20} /> Download Protected PDF
            </button>

            <button
              onClick={resetForm}
              className="text-slate-400 hover:text-indigo-600 font-bold text-[10px] uppercase tracking-widest border-b border-transparent hover:border-indigo-600 transition-all"
            >
              Protect Another File
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
