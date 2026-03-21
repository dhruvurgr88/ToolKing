"use client";
import React, { useState, useEffect, useCallback } from "react";
import JSZip from "jszip";
import {
  Upload,
  Image as ImageIcon,
  Download,
  X,
  RefreshCw,
  Archive,
  AlertCircle,
  Scaling,
  PlusCircle,
  Trash2,
  Link2,
  Link2Off,
  ArrowRight,
  Instagram,
  Monitor,
  Smartphone,
  CheckCircle2,
  Eye,
  RotateCcw,
  Info,
} from "lucide-react";

interface ImageFile {
  id: string;
  file: File;
  url: string;
  width: number;
  height: number;
}

interface ResizedResult {
  id: string;
  name: string;
  url: string;
  blob: Blob;
  width: number;
  height: number;
  size: string;
}

export default function ResizerClient() {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [resizedResults, setResizedResults] = useState<ResizedResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState<"pixels" | "percentage" | "cm">("pixels");

  // Settings
  const [width, setWidth] = useState<number>(1920);
  const [height, setHeight] = useState<number>(1080);
  const [cmWidth, setCmWidth] = useState<number>(3.5);
  const [cmHeight, setCmHeight] = useState<number>(4.5);
  const [percent, setPercent] = useState<number>(50);
  const [maintainRatio, setMaintainRatio] = useState(true);
  const [noEnlarge, setNoEnlarge] = useState(true);

  const DPI = 300;
  const cmToPx = (cm: number) => Math.round((cm * DPI) / 2.54);

  // 🔥 CLEANUP & RESET LOGIC
  const clearPreviews = useCallback(() => {
    resizedResults.forEach((img) => URL.revokeObjectURL(img.url));
    setResizedResults([]);
    setProgress(0);
  }, [resizedResults]);

  const resetAllSettings = () => {
    clearPreviews();
    setWidth(1920);
    setHeight(1080);
    setCmWidth(3.5);
    setCmHeight(4.5);
    setPercent(50);
    setMode("pixels");
  };

  useEffect(() => {
    return () => {
      images.forEach((img) => URL.revokeObjectURL(img.url));
      resizedResults.forEach((img) => URL.revokeObjectURL(img.url));
    };
  }, [images, resizedResults]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      const img = new Image();
      const objectUrl = URL.createObjectURL(file);
      img.src = objectUrl;
      img.onload = () => {
        setImages((prev) => [
          ...prev,
          {
            id: Math.random().toString(36).substr(2, 9),
            file,
            url: objectUrl,
            width: img.width,
            height: img.height,
          },
        ]);
      };
    });
    clearPreviews();
  };

  const processImages = async () => {
    if (images.length === 0) return;
    setLoading(true);
    setProgress(0);
    const results: ResizedResult[] = [];

    try {
      for (let i = 0; i < images.length; i++) {
        const imgData = images[i];
        const img = new Image();
        img.src = imgData.url;
        await new Promise((res) => (img.onload = res));

        let targetW: number, targetH: number;
        if (mode === "pixels") {
          targetW = width;
          targetH = height;
        } else if (mode === "cm") {
          targetW = cmToPx(cmWidth);
          targetH = cmToPx(cmHeight);
        } else {
          targetW = Math.round((img.width * percent) / 100);
          targetH = Math.round((img.height * percent) / 100);
        }

        if (noEnlarge && (targetW > img.width || targetH > img.height)) {
          targetW = img.width;
          targetH = img.height;
        }

        const canvas = document.createElement("canvas");
        canvas.width = targetW;
        canvas.height = targetH;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.imageSmoothingQuality = "high";
          ctx.drawImage(img, 0, 0, targetW, targetH);
          const blob = await new Promise<Blob>((res) =>
            canvas.toBlob((b) => res(b!), imgData.file.type, 0.92),
          );
          results.push({
            id: imgData.id,
            name: imgData.file.name,
            url: URL.createObjectURL(blob),
            blob: blob,
            width: targetW,
            height: targetH,
            size: (blob.size / 1024).toFixed(1) + " KB",
          });
        }
        setProgress(Math.round(((i + 1) / images.length) * 100));
      }
      setResizedResults(results);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {!images.length ? (
        <div className="flex flex-col items-center justify-center h-[500px] border-4 border-dashed border-slate-200 dark:border-slate-800 rounded-[4rem] bg-white dark:bg-slate-950 transition-all hover:border-emerald-500/50 group shadow-2xl">
          <div className="p-8 bg-emerald-600 rounded-[2.5rem] shadow-2xl mb-6 group-hover:scale-110 transition-transform">
            <Upload className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-black mb-2 tracking-tighter uppercase italic">
            Bulk Resizer Pro
          </h2>
          <label className="mt-8 px-12 py-5 bg-emerald-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] cursor-pointer hover:bg-emerald-700 transition-all shadow-xl active:scale-95">
            Upload Images
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleUpload}
              className="hidden"
            />
          </label>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-10 animate-in fade-in zoom-in-95 duration-500">
          {/* LEFT: PREVIEW & QUEUE */}
          <div className="flex-1 space-y-8">
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-[3.5rem] p-8 border border-slate-100 dark:border-slate-800 shadow-inner">
              <div className="flex justify-between items-center mb-6 px-4">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">
                  Input Queue: {images.length} Files
                </h3>
                <button
                  onClick={() => {
                    setImages([]);
                    setResizedResults([]);
                  }}
                  className="p-2 hover:bg-rose-50 text-rose-500 rounded-full transition-all hover:rotate-90"
                >
                  <Trash2 size={20} />
                </button>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                {images.map((img) => (
                  <div
                    key={img.id}
                    className="relative shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-2 border-white shadow-md"
                  >
                    <img
                      src={img.url}
                      className="w-full h-full object-cover"
                      alt="Original"
                    />
                  </div>
                ))}
                <label className="shrink-0 w-24 h-24 flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl cursor-pointer hover:border-emerald-500 text-slate-300 bg-white/50">
                  <PlusCircle size={24} />
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* PREVIEW GALLERY (Hidden after Reset) */}
            {resizedResults.length > 0 && (
              <div className="bg-white dark:bg-slate-950 rounded-[3.5rem] p-8 border border-slate-100 dark:border-slate-800 shadow-2xl animate-in slide-in-from-bottom-5">
                <div className="flex items-center gap-2 mb-8 px-4 text-emerald-600">
                  <CheckCircle2 size={20} />
                  <h3 className="text-[10px] font-black uppercase tracking-widest italic tracking-[0.2em]">
                    Final Resized Gallery
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                  {resizedResults.map((res) => (
                    <div
                      key={res.id}
                      className="group relative aspect-square rounded-[2rem] overflow-hidden border-4 border-emerald-50 bg-slate-50 shadow-md"
                    >
                      <img
                        src={res.url}
                        className="w-full h-full object-cover"
                        alt="Resized"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4">
                        <span className="text-[10px] font-black uppercase mb-1">
                          {res.width}x{res.height} px
                        </span>
                        <span className="text-[8px] font-bold text-emerald-400 uppercase">
                          {res.size}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: CONTROL PANEL */}
          <div className="w-full lg:w-[420px] bg-white dark:bg-slate-950 rounded-[4rem] shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col h-fit overflow-hidden">
            <div className="p-10 space-y-8">
              <div className="flex justify-between items-center px-2">
                <h3 className="text-xl font-black uppercase tracking-widest italic">
                  Resize Engine
                </h3>
                {/* 🔥 RESET BUTTON */}
                <button
                  onClick={resetAllSettings}
                  className="p-2 text-slate-400 hover:text-emerald-600 transition-all hover:rotate-[-180deg]"
                  title="Reset All Settings"
                >
                  <RotateCcw size={20} />
                </button>
              </div>

              <div className="grid grid-cols-3 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-[1.5rem]">
                <button
                  onClick={() => {
                    setMode("pixels");
                    clearPreviews();
                  }}
                  className={`py-4 rounded-xl font-black text-[9px] uppercase transition-all ${mode === "pixels" ? "bg-white text-emerald-600 shadow-lg" : "text-slate-400"}`}
                >
                  Pixels
                </button>
                <button
                  onClick={() => {
                    setMode("cm");
                    clearPreviews();
                  }}
                  className={`py-4 rounded-xl font-black text-[9px] uppercase transition-all ${mode === "cm" ? "bg-white text-emerald-600 shadow-lg" : "text-slate-400"}`}
                >
                  CM (Exam)
                </button>
                <button
                  onClick={() => {
                    setMode("percentage");
                    clearPreviews();
                  }}
                  className={`py-4 rounded-xl font-black text-[9px] uppercase transition-all ${mode === "percentage" ? "bg-white text-emerald-600 shadow-lg" : "text-slate-400"}`}
                >
                  Percent
                </button>
              </div>

              {/* PIXELS */}
              {mode === "pixels" && (
                <div className="space-y-6 animate-in fade-in">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center px-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 italic tracking-widest">
                        Width (px)
                      </label>
                      <input
                        type="number"
                        value={width}
                        onChange={(e) => {
                          setWidth(Number(e.target.value));
                          clearPreviews();
                        }}
                        className="w-24 p-2 bg-slate-50 rounded-lg font-black text-right text-emerald-600 outline-none"
                      />
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="3840"
                      value={width}
                      onChange={(e) => {
                        setWidth(Number(e.target.value));
                        clearPreviews();
                      }}
                      className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center px-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 italic tracking-widest">
                        Height (px)
                      </label>
                      <input
                        type="number"
                        value={height}
                        onChange={(e) => {
                          setHeight(Number(e.target.value));
                          clearPreviews();
                        }}
                        className="w-24 p-2 bg-slate-50 rounded-lg font-black text-right text-emerald-600 outline-none"
                      />
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="2160"
                      value={height}
                      onChange={(e) => {
                        setHeight(Number(e.target.value));
                        clearPreviews();
                      }}
                      className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>
                </div>
              )}

              {/* CM MODE */}
              {mode === "cm" && (
                <div className="space-y-6 animate-in fade-in">
                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-[9px] font-bold text-emerald-700 leading-relaxed italic">
                    <Info size={14} className="inline mr-2" /> Portals like
                    SSC/Vyapam use 3.5cm x 4.5cm at 300 DPI.
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 ml-1">
                        Width (cm)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={cmWidth}
                        onChange={(e) => {
                          setCmWidth(Number(e.target.value));
                          clearPreviews();
                        }}
                        className="w-full p-4 bg-slate-50 rounded-xl font-black text-emerald-600 outline-none border-2 border-transparent focus:border-emerald-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 ml-1">
                        Height (cm)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={cmHeight}
                        onChange={(e) => {
                          setCmHeight(Number(e.target.value));
                          clearPreviews();
                        }}
                        className="w-full p-4 bg-slate-50 rounded-xl font-black text-emerald-600 outline-none border-2 border-transparent focus:border-emerald-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* PERCENTAGE */}
              {mode === "percentage" && (
                <div className="space-y-6 animate-in fade-in">
                  <div className="flex justify-between items-center px-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 italic tracking-widest">
                      Scale Factor
                    </label>
                    <span className="text-xl font-black text-emerald-600">
                      {percent}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={percent}
                    onChange={(e) => {
                      setPercent(Number(e.target.value));
                      clearPreviews();
                    }}
                    className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-emerald-600"
                  />
                </div>
              )}

              <label className="flex items-center justify-between cursor-pointer group pt-6 border-t border-slate-100">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Do not enlarge if smaller
                </span>
                <div
                  onClick={() => {
                    setNoEnlarge(!noEnlarge);
                    clearPreviews();
                  }}
                  className={`w-12 h-6 rounded-full transition-all relative ${noEnlarge ? "bg-emerald-600 shadow-lg" : "bg-slate-200"}`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${noEnlarge ? "left-7" : "left-1"}`}
                  />
                </div>
              </label>
            </div>

            {/* ACTION AREA */}
            <div className="p-8 bg-slate-900 mt-auto">
              {loading ? (
                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] font-black text-white italic tracking-widest">
                    <span>RE-SAMPLING...</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-500 h-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              ) : resizedResults.length > 0 ? (
                <div className="space-y-4">
                  <button
                    onClick={async () => {
                      const zip = new JSZip();
                      resizedResults.forEach((img) =>
                        zip.file(`ToolKing-${img.name}`, img.blob),
                      );
                      const content = await zip.generateAsync({ type: "blob" });
                      const link = document.createElement("a");
                      link.href = URL.createObjectURL(content);
                      link.download = `ToolKing-Batch-Resized.zip`;
                      link.click();
                    }}
                    className="w-full py-6 bg-emerald-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-xl hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 active:scale-95"
                  >
                    Download ZIP <Archive size={20} />
                  </button>
                  <button
                    onClick={clearPreviews}
                    className="w-full py-2 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-white transition-colors"
                  >
                    Modify Settings
                  </button>
                </div>
              ) : (
                <button
                  onClick={processImages}
                  className="w-full py-6 bg-emerald-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-xl hover:bg-emerald-700 transition-all flex items-center justify-center gap-3"
                >
                  Generate Preview <Eye size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
