"use client";
import React, { useState, useEffect, useCallback } from "react";
import imageCompression from "browser-image-compression";
import {
  Upload,
  Download,
  X,
  RefreshCw,
  Zap,
  CheckCircle,
  Trash2,
  Sliders,
  FileType,
  Info,
  AlertCircle,
  Settings2,
} from "lucide-react";

type ExamType = "CUSTOM" | "SSC" | "JEE" | "VYAPAM";
type Mode = "PHOTO" | "SIGNATURE";

export default function CompressorClient() {
  const [file, setFile] = useState<File | null>(null);
  const [compressedFile, setCompressedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [compPreview, setCompPreview] = useState<string | null>(null);

  const [exam, setExam] = useState<ExamType>("CUSTOM");
  const [mode, setMode] = useState<Mode>("PHOTO");
  const [targetSize, setTargetSize] = useState(50);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  // Auto-set defaults based on Exam
  useEffect(() => {
    if (exam === "SSC") setTargetSize(mode === "PHOTO" ? 45 : 18);
    else if (exam === "JEE") setTargetSize(mode === "PHOTO" ? 180 : 25);
    else if (exam === "VYAPAM") setTargetSize(95);
  }, [exam, mode]);

  // Memory Cleanup
  const resetLab = useCallback(() => {
    if (preview) URL.revokeObjectURL(preview);
    if (compPreview) URL.revokeObjectURL(compPreview);
    setFile(null);
    setCompressedFile(null);
    setPreview(null);
    setCompPreview(null);
    setError(null);
    setProgress(0);
  }, [preview, compPreview]);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
      if (compPreview) URL.revokeObjectURL(compPreview);
    };
  }, [preview, compPreview]);

  // 🔥 THE PRECISION ENGINE: Fixes the 6KB issue
  const handleCompress = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);

    // We start with a target slightly below the user's limit to be safe
    let safetyTarget = targetSize * 0.95;

    let options = {
      maxSizeMB: safetyTarget / 1024,
      maxWidthOrHeight: mode === "PHOTO" ? 1024 : 400,
      useWebWorker: true,
      initialQuality: 0.9,
    };

    try {
      let compressed = await imageCompression(file, options);
      let currentSizeKB = compressed.size / 1024;

      // 🔥 RECURSIVE REFINEMENT
      // If the file is too small (like 6kb for a 50kb target), we increase quality
      // If it's still too large, we decrease quality
      let attempts = 0;
      while (attempts < 4) {
        if (currentSizeKB > targetSize) {
          // Too big: Reduce quality
          options.initialQuality *= 0.8;
          options.maxSizeMB *= 0.8;
        } else if (
          currentSizeKB < targetSize * 0.7 &&
          options.initialQuality < 0.95
        ) {
          // Too small: Increase quality to get closer to target
          options.initialQuality += 0.1;
          options.maxSizeMB = targetSize / 1024;
        } else {
          break; // We are in the "Goldilocks" zone (just right)
        }
        compressed = await imageCompression(file, options);
        currentSizeKB = compressed.size / 1024;
        attempts++;
      }

      setCompressedFile(compressed);
      setCompPreview(URL.createObjectURL(compressed));
    } catch (err) {
      setError("Compression failed. Please try a different image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700">
      <div className="bg-white dark:bg-slate-950 p-8 md:p-12 rounded-[3.5rem] border-2 border-slate-100 dark:border-slate-800 shadow-2xl space-y-8 relative overflow-hidden">
        {!file ? (
          /* UPLOAD STATE */
          <label className="flex flex-col items-center justify-center h-80 border-4 border-dashed border-slate-100 dark:border-slate-800 rounded-[3rem] cursor-pointer group hover:border-blue-500/50 transition-all bg-slate-50/30">
            <Upload className="w-12 h-12 text-slate-300 group-hover:text-blue-500 mb-4 transition-colors animate-bounce" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              Drag & Drop Exam Photo
            </span>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) {
                  setFile(f);
                  setPreview(URL.createObjectURL(f));
                }
              }}
              className="hidden"
            />
          </label>
        ) : (
          /* CONFIGURATION STATE */
          <div className="space-y-10">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-black uppercase tracking-widest text-blue-600 flex items-center gap-2">
                <Settings2 size={16} /> Exam Configuration
              </h3>
              <button
                onClick={resetLab}
                className="flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 rounded-xl font-black text-[10px] uppercase hover:bg-rose-100 transition-all"
              >
                <Trash2 size={14} /> Reset Lab
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2 italic">
                  Target Exam
                </label>
                <div className="flex flex-wrap gap-2">
                  {["CUSTOM", "SSC", "JEE", "VYAPAM"].map((e) => (
                    <button
                      key={e}
                      onClick={() => setExam(e as ExamType)}
                      className={`px-4 py-3 rounded-xl font-black text-[10px] uppercase transition-all border-2 ${exam === e ? "border-blue-600 bg-blue-50 text-blue-600" : "border-slate-100 dark:border-slate-800 text-slate-400"}`}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-3 text-right">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mr-2 italic">
                  Upload Type
                </label>
                <div className="flex justify-end gap-2">
                  {["PHOTO", "SIGNATURE"].map((m) => (
                    <button
                      key={m}
                      onClick={() => setMode(m as Mode)}
                      className={`px-4 py-3 rounded-xl font-black text-[10px] uppercase transition-all border-2 ${mode === m ? "border-blue-600 bg-blue-50 text-blue-600" : "border-slate-100 dark:border-slate-800 text-slate-400"}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center border-y border-slate-50 dark:border-slate-900 py-10">
              <div className="relative group">
                <div className="aspect-square bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border-2 border-slate-100 dark:border-slate-800 shadow-inner p-4">
                  <img
                    src={preview!}
                    alt="Original"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-4 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">
                  Original: {(file.size / 1024).toFixed(1)} KB
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center px-2">
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest italic">
                      Set Max KB Limit
                    </span>
                    <span className="text-sm font-black text-blue-600">
                      {targetSize} KB
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    value={targetSize}
                    onChange={(e) => setTargetSize(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-center gap-4">
                    {[20, 50, 100].map((val) => (
                      <button
                        key={val}
                        onClick={() => setTargetSize(val)}
                        className="text-[9px] font-black text-slate-400 hover:text-blue-600 uppercase tracking-tighter underline"
                      >
                        Set {val}kb
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleCompress}
                  disabled={loading}
                  className="w-full py-6 bg-blue-600 text-white rounded-[2.5rem] font-black text-xs uppercase tracking-[0.3em] shadow-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
                >
                  {loading ? (
                    <RefreshCw className="animate-spin" />
                  ) : (
                    <Zap className="fill-current" />
                  )}
                  {loading
                    ? "FIGHTING FOR KB MATCH..."
                    : "START PRECISION COMPRESSION"}
                </button>
              </div>
            </div>

            {/* RESULTS SECTION */}
            {compressedFile && (
              <div className="animate-in zoom-in-95 p-8 bg-emerald-50 dark:bg-emerald-900/10 border-2 border-emerald-100 dark:border-emerald-800/30 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-white rounded-2xl overflow-hidden shadow-md shrink-0 p-2">
                  <img
                    src={compPreview!}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <div>
                    <h4 className="text-lg font-black text-emerald-700 dark:text-emerald-400 flex items-center justify-center md:justify-start gap-2 italic">
                      <CheckCircle size={20} /> Optimized for {exam}
                    </h4>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">
                      Final Size:{" "}
                      <span className="text-emerald-600">
                        {(compressedFile.size / 1024).toFixed(1)} KB
                      </span>{" "}
                      — High Clarity
                    </p>
                  </div>
                  <a
                    href={compPreview!}
                    download={`ToolKing-${exam}-${targetSize}KB-${file.name}`}
                    className="inline-flex items-center gap-3 px-10 py-4 bg-emerald-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-emerald-600/20 hover:scale-105 transition-all"
                  >
                    <Download size={16} /> Download {mode}
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {error && (
        <div className="p-4 bg-rose-50 border border-rose-100 text-rose-600 rounded-2xl text-[10px] font-black uppercase text-center flex items-center justify-center gap-2">
          <AlertCircle size={14} /> {error}
        </div>
      )}
    </div>
  );
}
