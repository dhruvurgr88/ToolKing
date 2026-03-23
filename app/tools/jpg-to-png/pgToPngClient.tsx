"use client";

import React, { useState, useRef } from "react";
import {
  Upload,
  Download,
  ImageIcon,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";

export default function JpgToPngClient() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setResult(null);
    }
  };

  const convertToPng = () => {
    if (!file) return;
    setIsConverting(true);

    const img = new Image();
    img.src = preview!;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0);

      const pngUrl = canvas.toDataURL("image/png");
      setResult(pngUrl);
      setIsConverting(false);
    };
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-800">
      {!result ? (
        <div className="space-y-8">
          <label className="group flex flex-col items-center justify-center border-4 border-dashed border-slate-100 dark:border-slate-800 rounded-[2.5rem] p-16 cursor-pointer hover:border-indigo-500 hover:bg-indigo-50/30 transition-all duration-500">
            <input
              type="file"
              accept="image/jpeg,image/jpg"
              onChange={handleUpload}
              className="hidden"
            />
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-40 h-40 object-cover rounded-2xl shadow-lg"
              />
            ) : (
              <>
                <div className="bg-indigo-100 dark:bg-indigo-500/10 p-5 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <ImageIcon className="text-indigo-600" size={32} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Drop JPG image here
                </p>
              </>
            )}
          </label>

          <button
            onClick={convertToPng}
            disabled={!file || isConverting}
            className="w-full py-6 bg-slate-900 dark:bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 disabled:opacity-20 transition-all active:scale-95"
          >
            {isConverting ? (
              <RefreshCw className="animate-spin" size={18} />
            ) : (
              "Convert to PNG"
            )}
          </button>
        </div>
      ) : (
        <div className="text-center space-y-8 animate-in fade-in zoom-in-95 duration-500">
          <div className="relative inline-block">
            <img
              src={result}
              alt="Result"
              className="w-48 h-48 object-cover rounded-[2rem] mx-auto shadow-2xl border-4 border-white"
            />
            <div className="absolute -top-4 -right-4 bg-emerald-500 text-white p-2 rounded-full shadow-lg">
              <CheckCircle2 size={24} />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-black italic uppercase">
              Conversion Ready!
            </h2>
            <a
              href={result}
              download={`${file?.name.split(".")[0] || "toolking"}.png`}
              className="flex items-center justify-center gap-3 w-full py-6 bg-emerald-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
            >
              <Download size={18} /> Download PNG
            </a>
            <button
              onClick={() => {
                setResult(null);
                setFile(null);
                setPreview(null);
              }}
              className="text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600"
            >
              Convert another image
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
