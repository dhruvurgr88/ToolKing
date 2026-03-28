"use client";

import React, { useState } from "react";
import {
  FileDown,
  Upload,
  Zap,
  ShieldCheck,
  FileType,
  RefreshCw,
  Settings2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import * as pdfjsLib from "pdfjs-dist";
import { PDFDocument } from "pdf-lib";

// Initialize PDF.js Worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export default function PremiumPdfCompressor() {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState(50);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<{
    url: string;
    size: string;
    saving: string;
  } | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
      setResult(null);
      setProgress(0);
    }
  };

  const startDeepCompression = async () => {
    if (!file) return;
    setLoading(true);
    setProgress(5);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const outPdf = await PDFDocument.create();

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 1.5 });

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        if (!context) throw new Error("Canvas context failed");

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({
          canvasContext: context,
          viewport,
          canvas: canvas,
        }).promise;

        const imageData = canvas.toDataURL("image/jpeg", quality / 100);
        const image = await outPdf.embedJpg(imageData);

        const newPage = outPdf.addPage([viewport.width, viewport.height]);
        newPage.drawImage(image, {
          x: 0,
          y: 0,
          width: viewport.width,
          height: viewport.height,
        });

        setProgress(Math.round((i / pdf.numPages) * 90));
      }

      // --- 🛠️ THE FINAL FIX FOR BLOBPART ERROR ---
      const compressedBytes = await outPdf.save();

      // We use 'as any' to force TypeScript to accept the Uint8Array as a BlobPart.
      // This is the most reliable way to bypass strict buffer typing issues.
      const blob = new Blob([compressedBytes as any], {
        type: "application/pdf",
      });

      const saving = Math.round(((file.size - blob.size) / file.size) * 100);
      setProgress(100);

      setResult({
        url: URL.createObjectURL(blob),
        size: (blob.size / 1024 / 1024).toFixed(2) + " MB",
        saving: saving > 0 ? saving + "%" : "Optimized",
      });
    } catch (error) {
      console.error("Deep Compression Error:", error);
      alert(
        "Compression failed. The file might be corrupted or too large for browser memory.",
      );
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-32 pb-20 px-6 font-sans">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-slate-900 dark:text-white mb-4 leading-none">
            PDF <span className="text-indigo-600">Squeezer</span>
          </h1>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
            Advanced Image Recalculation Engine
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-[3.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl p-8 md:p-12">
          {!file ? (
            <label className="flex flex-col items-center justify-center border-4 border-dashed border-slate-100 dark:border-slate-800 rounded-[3rem] py-24 cursor-pointer hover:bg-slate-50 dark:hover:bg-indigo-500/5 transition-all group">
              <Upload
                className="text-indigo-600 mb-6 group-hover:-translate-y-2 transition-transform duration-500"
                size={56}
              />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                Select PDF to Compress
              </span>
              <input
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={handleUpload}
              />
            </label>
          ) : (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-6 p-6 bg-slate-50 dark:bg-slate-800/40 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                <div className="w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <FileType className="text-white" size={32} />
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="font-black text-sm text-slate-900 dark:text-white truncate uppercase tracking-tight">
                    {file.name}
                  </p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>

              {!result ? (
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center px-1">
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                        <Settings2 size={14} /> Squeeze Power
                      </h3>
                      <span className="text-xs font-black text-indigo-600">
                        {100 - quality}% Intensity
                      </span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="90"
                      value={quality}
                      onChange={(e) => setQuality(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                    />
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-amber-500/5 rounded-2xl border border-amber-500/10">
                    <AlertCircle
                      className="text-amber-500 shrink-0"
                      size={16}
                    />
                    <p className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase leading-relaxed">
                      This method redraws pages as JPEGs to hit tiny file
                      limits. Ideal for govt portals.
                    </p>
                  </div>

                  <button
                    onClick={startDeepCompression}
                    disabled={loading}
                    className="w-full py-6 bg-indigo-600 hover:bg-indigo-500 text-white rounded-[2.5rem] font-black uppercase tracking-[0.3em] text-[10px] shadow-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 active:scale-95"
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="animate-spin" size={18} />{" "}
                        Squeezing {progress}%
                      </>
                    ) : (
                      <>
                        <Zap size={18} /> Deep Squeeze PDF
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <div className="space-y-6 animate-in zoom-in duration-500">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-[2rem] text-center border border-slate-100 dark:border-slate-800">
                      <p className="text-[9px] font-black text-slate-400 uppercase mb-2">
                        New Size
                      </p>
                      <p className="text-2xl font-black text-slate-900 dark:text-white leading-none">
                        {result.size}
                      </p>
                    </div>
                    <div className="bg-emerald-500/10 p-8 rounded-[2rem] text-center border border-emerald-500/20">
                      <p className="text-[9px] font-black text-emerald-600 uppercase mb-2">
                        Reduced By
                      </p>
                      <p className="text-2xl font-black text-emerald-600 leading-none">
                        {result.saving}
                      </p>
                    </div>
                  </div>
                  <a
                    href={result.url}
                    download={`ToolKing_Squeezed_${file.name}`}
                    className="w-full py-6 bg-emerald-500 hover:bg-emerald-400 text-white rounded-[2.5rem] font-black uppercase tracking-[0.3em] text-[10px] shadow-2xl flex items-center justify-center gap-3 transition-all"
                  >
                    <FileDown size={18} /> Download Result
                  </a>
                  <button
                    onClick={() => setFile(null)}
                    className="w-full text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 hover:text-indigo-600 transition-colors"
                  >
                    Reset Engine
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
