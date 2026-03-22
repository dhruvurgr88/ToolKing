"use client";

import React, { useState } from "react";
import { saveAs } from "file-saver";
import {
  FileUp,
  FileText,
  Lock,
  Loader2,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
  Eye,
  EyeOff,
} from "lucide-react";

export default function ProtectPdfClient() {
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [error, setError] = useState("");

  const protectPdf = async () => {
    if (!file || !password) return;
    setIsProcessing(true);
    setError("");

    try {
      // 1. Prepare FormData to match your .NET DTO
      const formData = new FormData();
      // 🔥 MUST match your C# Property names: 'File' and 'Password'
      formData.append("File", file);
      formData.append("Password", password);

      // 2. Call your verified Azure API
      const response = await fetch(
        "https://vidyaos-api-bmggd8fecxfqh9gf.centralindia-01.azurewebsites.net/api/AIChat/ProtectPdf",
        {
          method: "POST",
          body: formData,
          // ❌ IMPORTANT: Do not set Content-Type header manually
        },
      );

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || "Server failed to process PDF");
      }

      // 3. Handle the binary PDF response
      const blob = await response.blob();

      // Short delay for smooth UI transition
      setTimeout(() => {
        saveAs(blob, `${file.name.replace(".pdf", "")}_Protected.pdf`);
        setIsProcessing(false);
        setIsDone(true);
      }, 1000);
    } catch (err: any) {
      console.error("ToolKing API Error:", err);
      setError(err.message || "Connection to VidyaOS API failed. Check CORS.");
      setIsProcessing(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected && selected.type === "application/pdf") {
      setFile(selected);
      setError("");
      setIsDone(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-white dark:bg-slate-900 rounded-[3.5rem] p-10 md:p-16 shadow-2xl border border-slate-200 dark:border-slate-800 relative overflow-hidden">
        {/* --- PROCESSING OVERLAY --- */}
        {isProcessing && (
          <div className="absolute inset-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center space-y-6">
            <div className="relative">
              <Loader2
                className="animate-spin text-indigo-600"
                size={70}
                strokeWidth={1.5}
              />
              <Lock
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-400"
                size={20}
              />
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 animate-pulse text-center">
              Encrypting via VidyaOS Azure...
            </p>
          </div>
        )}

        <div className="flex flex-col items-center">
          <div className="mb-10 p-5 rounded-[2rem] bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600">
            <ShieldCheck size={40} />
          </div>

          {!isDone ? (
            <div className="w-full space-y-8 animate-in fade-in duration-500">
              {/* UPLOAD AREA */}
              <label
                className={`block border-4 border-dashed rounded-[2.5rem] p-12 text-center cursor-pointer transition-all ${
                  file
                    ? "border-indigo-500 bg-indigo-50/20"
                    : "border-slate-100 dark:border-slate-800 hover:border-indigo-400"
                }`}
              >
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="flex flex-col items-center gap-4">
                  <FileText
                    size={48}
                    className={file ? "text-indigo-600" : "text-slate-300"}
                  />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    {file ? file.name : "Select PDF Document"}
                  </span>
                </div>
              </label>

              {file && (
                <div className="relative group animate-in slide-in-from-top-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Access Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full py-5 px-8 bg-slate-50 dark:bg-slate-800 rounded-[2rem] border-2 border-transparent focus:border-indigo-500 outline-none font-bold text-slate-700 dark:text-white transition-all shadow-inner"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-8 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              )}

              <button
                onClick={protectPdf}
                disabled={!file || !password || isProcessing}
                className="w-full py-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[2.2rem] font-black text-xs uppercase tracking-[0.25em] shadow-xl disabled:opacity-30 transition-all active:scale-95"
              >
                Apply Password Protection
              </button>
            </div>
          ) : (
            /* SUCCESS STATE */
            <div className="w-full space-y-10 animate-in zoom-in-95 duration-500 text-center">
              <div className="p-10 bg-emerald-50 dark:bg-emerald-900/10 rounded-[3rem] border border-emerald-100 dark:border-emerald-900/20 flex flex-col items-center">
                <CheckCircle2
                  size={60}
                  className="text-emerald-500 mb-4 animate-bounce"
                />
                <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase italic">
                  Protection Applied!
                </h4>
                <p className="text-[10px] text-slate-400 font-bold mt-2 uppercase tracking-widest text-center">
                  Your PDF is now encrypted with AES-256
                </p>
              </div>

              <button
                onClick={() => {
                  setFile(null);
                  setPassword("");
                  setIsDone(false);
                }}
                className="w-full py-5 border-2 border-slate-100 dark:border-slate-800 text-slate-400 hover:text-indigo-600 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all"
              >
                Protect Another PDF
              </button>
            </div>
          )}
        </div>

        {error && (
          <div className="mt-8 p-4 bg-rose-50 dark:bg-rose-900/10 rounded-2xl flex items-center gap-3 text-rose-500 font-bold text-xs uppercase italic border border-rose-100 dark:border-rose-900/20 animate-in shake duration-500">
            <AlertCircle size={18} /> {error}
          </div>
        )}
      </div>
    </div>
  );
}
