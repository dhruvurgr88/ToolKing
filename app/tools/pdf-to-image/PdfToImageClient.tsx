"use client";
import React, { useState, useEffect, useCallback } from "react";
import * as pdfjsLib from "pdfjs-dist";
import JSZip from "jszip";
import {
  Upload,
  FileImage,
  Download,
  X,
  RefreshCw,
  Archive,
  AlertCircle,
  Sliders,
  Trash2,
  PlusCircle,
  Zap,
  FileType,
  Image as ImageIcon,
} from "lucide-react";

// Use a stable CDN worker that matches the installed version
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

interface PageData {
  id: number;
  url: string;
  blob: Blob;
  name: string;
}

export default function PdfToImageClient() {
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState<PageData[]>([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [quality, setQuality] = useState(2);
  const [format, setFormat] = useState<"image/jpeg" | "image/png">(
    "image/jpeg",
  );
  const [error, setError] = useState<string | null>(null);

  // 🔥 SESSION CLEANUP: Prevents Memory Leaks
  const clearSession = useCallback(() => {
    pages.forEach((p) => URL.revokeObjectURL(p.url));
    setPages([]);
    setFile(null);
    setProgress(0);
    setError(null);
  }, [pages]);

  useEffect(() => {
    return () => pages.forEach((p) => URL.revokeObjectURL(p.url));
  }, [pages]);

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f && f.type === "application/pdf") {
      setFile(f);
      setError(null);
      setPages([]);
    } else if (f) {
      setError("Please upload a valid PDF document.");
    }
  };

  const startConversion = async () => {
    if (!file) return;
    setLoading(true);
    setPages([]);
    setProgress(0);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
      const pdf = await loadingTask.promise;
      const numPages = pdf.numPages;
      const results: PageData[] = [];

      for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: quality });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        if (context) {
          await page.render({ canvasContext: context, viewport: viewport })
            .promise;

          // Use format from state
          const blob = await new Promise<Blob | null>((res) =>
            canvas.toBlob(
              res,
              format,
              format === "image/jpeg" ? 0.92 : undefined,
            ),
          );

          if (blob) {
            const ext = format === "image/jpeg" ? "jpg" : "png";
            results.push({
              id: i,
              url: URL.createObjectURL(blob),
              blob: blob,
              name: `ToolKing-Page-${i}.${ext}`,
            });
          }
        }
        setProgress(Math.round((i / numPages) * 100));
      }
      setPages(results);
    } catch (err) {
      setError(
        "Engine failed to initialize. Try refreshing or using a different PDF.",
      );
    } finally {
      setLoading(false);
    }
  };

  const downloadZip = async () => {
    if (pages.length === 0) return;
    const zip = new JSZip();
    pages.forEach((p) => zip.file(p.name, p.blob));
    const content = await zip.generateAsync({ type: "blob" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(content);
    link.download = `ToolKing-Images-${file?.name.replace(".pdf", "")}.zip`;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      {!file ? (
        /* --- NEON UPLOAD ZONE --- */
        <div className="relative group overflow-hidden bg-slate-900 rounded-[4rem] p-20 text-center border-2 border-slate-800 hover:border-rose-500/50 transition-all duration-500 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <div className="w-20 h-20 bg-rose-600 rounded-3xl mx-auto flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(225,29,72,0.4)] group-hover:scale-110 transition-transform duration-500">
              <Upload className="text-white w-10 h-10" />
            </div>
            <h2 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase italic">
              PDF Image Lab
            </h2>
            <p className="text-slate-400 font-medium mb-10 max-w-xs mx-auto text-sm leading-relaxed tracking-wide">
              Convert documents into high-res visual assets. 100% Client-side.
            </p>
            <label className="px-12 py-5 bg-white text-black rounded-full font-black text-[10px] uppercase tracking-[0.3em] cursor-pointer hover:bg-rose-500 hover:text-white transition-all shadow-xl active:scale-95 inline-block">
              Select PDF File
              <input
                type="file"
                accept=".pdf"
                onChange={handleFile}
                className="hidden"
              />
            </label>
          </div>
        </div>
      ) : (
        /* --- STAGE UI --- */
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-700">
          <div className="bg-white dark:bg-slate-950 rounded-[4rem] p-4 md:p-12 border border-slate-100 dark:border-slate-800 shadow-2xl min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden">
            {/* RESET BUTTON */}
            <button
              onClick={clearSession}
              className="absolute top-8 right-8 z-20 flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-rose-500 rounded-2xl transition-all font-black text-[10px] uppercase tracking-widest border border-transparent hover:border-rose-500/20"
            >
              <Trash2 size={14} /> Reset Lab
            </button>

            {pages.length > 0 ? (
              /* --- FILMSTRIP VIEW --- */
              <div className="flex gap-8 overflow-x-auto w-full p-12 no-scrollbar snap-x items-center">
                {pages.map((p) => (
                  <div
                    key={p.id}
                    className="snap-center shrink-0 w-72 md:w-[400px] group relative"
                  >
                    <img
                      src={p.url}
                      className="rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 transition-all duration-500 group-hover:scale-[1.03] group-hover:-translate-y-2"
                      alt={`Page ${p.id}`}
                    />
                    <div className="absolute top-6 left-6 bg-slate-900/80 backdrop-blur-md text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                      Page {p.id}
                    </div>
                    <a
                      href={p.url}
                      download={p.name}
                      className="absolute bottom-6 right-6 p-4 bg-white text-rose-600 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-rose-600 hover:text-white"
                    >
                      <Download size={20} />
                    </a>
                  </div>
                ))}
                <button
                  onClick={clearSession}
                  className="snap-center shrink-0 w-32 h-32 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[2.5rem] text-slate-400 hover:text-rose-500 hover:border-rose-500 transition-all group"
                >
                  <PlusCircle
                    size={32}
                    className="group-hover:rotate-90 transition-transform duration-500"
                  />
                  <span className="text-[8px] font-black uppercase tracking-widest">
                    Add New
                  </span>
                </button>
              </div>
            ) : (
              /* --- FILE PREVIEW --- */
              <div className="text-center space-y-8 animate-pulse">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-rose-500 rounded-full blur-2xl opacity-20 animate-pulse" />
                  <FileImage className="w-24 h-24 text-rose-500 relative" />
                </div>
                <div>
                  <h3 className="text-2xl font-black tracking-tight">
                    {file.name}
                  </h3>
                  <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-2">
                    Document Ready for Rendering
                  </p>
                </div>
              </div>
            )}

            {/* --- FLOATING GLASS BAR --- */}
            <div className="mt-4 bg-slate-900/95 backdrop-blur-3xl border border-white/10 p-4 md:p-5 rounded-[3rem] flex flex-wrap items-center justify-center gap-4 md:gap-8 shadow-2xl ring-1 ring-white/5">
              {/* FORMAT SELECTOR */}
              <div className="flex items-center gap-3 px-4 md:px-6 border-r border-white/10">
                <FileType className="text-rose-500 w-4 h-4" />
                <select
                  disabled={loading || pages.length > 0}
                  value={format}
                  onChange={(e) => setFormat(e.target.value as any)}
                  className="bg-transparent text-white font-black text-[10px] uppercase outline-none cursor-pointer tracking-widest disabled:opacity-30"
                >
                  <option value="image/jpeg" className="bg-slate-900">
                    JPG (Compact)
                  </option>
                  <option value="image/png" className="bg-slate-900">
                    PNG (Lossless)
                  </option>
                </select>
              </div>

              {/* QUALITY SELECTOR */}
              <div className="flex items-center gap-3 px-4 md:px-6 border-r border-white/10">
                <Sliders className="text-slate-500 w-4 h-4" />
                <select
                  disabled={loading || pages.length > 0}
                  value={quality}
                  onChange={(e) => setQuality(Number(e.target.value))}
                  className="bg-transparent text-white font-black text-[10px] uppercase outline-none cursor-pointer tracking-widest disabled:opacity-30"
                >
                  <option value={1.5} className="bg-slate-900">
                    Standard
                  </option>
                  <option value={3} className="bg-slate-900">
                    Ultra HD (3x)
                  </option>
                </select>
              </div>

              {/* DYNAMIC ACTION BUTTON */}
              {loading ? (
                <div className="flex items-center gap-6 px-6">
                  <RefreshCw className="text-rose-500 animate-spin w-6 h-6" />
                  <span className="text-white font-black text-[10px] tracking-widest italic">
                    {progress}% RENDERING
                  </span>
                </div>
              ) : pages.length > 0 ? (
                <button
                  onClick={downloadZip}
                  className="flex items-center gap-3 px-10 py-4 bg-rose-600 text-white rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-rose-700 transition-all shadow-xl shadow-rose-600/30 hover:scale-105 active:scale-95"
                >
                  <Archive className="w-4 h-4" /> Download ALL (ZIP)
                </button>
              ) : (
                <button
                  onClick={startConversion}
                  className="flex items-center gap-3 px-10 py-4 bg-white text-black rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-rose-500 hover:text-white transition-all shadow-xl hover:scale-105 active:scale-95"
                >
                  <Zap className="w-4 h-4 fill-current" /> Ignite Converter
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="p-6 bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded-[2.5rem] text-center font-black text-[10px] uppercase flex items-center justify-center gap-3 animate-shake">
          <AlertCircle size={18} /> {error}
        </div>
      )}
    </div>
  );
}
