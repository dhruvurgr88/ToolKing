"use client";
import React, { useState, useEffect, useRef } from "react";
import bwipjs from "bwip-js";
import {
  Download,
  Settings2,
  Type,
  RefreshCw,
  AlertCircle,
  Copy,
  Check,
} from "lucide-react";

export default function BarcodeClient() {
  const [text, setText] = useState("TOOLKING123");
  const [bcid, setBcid] = useState("code128");
  const [scale, setScale] = useState(4); // 🔥 FIX 5: High Print Quality
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    generateBarcode();
  }, [text, bcid, scale]);

  const generateBarcode = () => {
    if (!text) {
      setError("Please enter some text");
      return;
    }

    // 🔥 FIX 4: Advanced Validation
    if ((bcid === "ean13" || bcid === "upca") && !/^\d+$/.test(text)) {
      setError(`${bcid.toUpperCase()} only accepts numbers (0-9).`);
      return;
    }
    if (bcid === "ean13" && text.length !== 13) {
      setError("EAN-13 requires exactly 13 digits.");
      return;
    }

    setError(null);
    try {
      bwipjs.toCanvas(canvasRef.current!, {
        bcid: bcid,
        text: text,
        scale: scale,
        height: 15,
        includetext: true,
        textxalign: "center",
      });
    } catch (e: any) {
      setError("Input is invalid for this barcode format.");
    }
  };

  // 🔥 FIX 6: Copy Feature
  const copyToClipboard = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    try {
      canvas.toBlob(async (blob) => {
        if (blob) {
          await navigator.clipboard.write([
            new ClipboardItem({ "image/png": blob }),
          ]);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
      });
    } catch (err) {
      setError("Could not copy image to clipboard.");
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start mt-10">
      <div className="space-y-6 bg-white dark:bg-slate-950 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
            Barcode Content
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-indigo-500 outline-none font-bold text-xl"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <select
            value={bcid}
            onChange={(e) => setBcid(e.target.value)}
            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 font-bold text-xs"
          >
            <option value="code128">Code 128</option>
            <option value="ean13">EAN-13</option>
            <option value="upca">UPC-A</option>
            <option value="pharmacode">Pharmacode</option>
          </select>
          <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
            <RefreshCw className="w-4 h-4 text-slate-400" />
            <input
              type="number"
              min="1"
              max="5"
              value={scale}
              onChange={(e) => setScale(Number(e.target.value))}
              className="bg-transparent font-bold text-xs w-full outline-none"
            />
          </div>
        </div>

        {error && (
          <div className="p-4 bg-rose-50 text-rose-600 rounded-2xl text-[10px] font-black uppercase flex items-center gap-2">
            <AlertCircle className="w-4 h-4" /> {error}
          </div>
        )}
      </div>

      <div className="flex flex-col items-center">
        <div className="p-10 bg-white rounded-[3rem] shadow-2xl mb-8 border border-slate-50">
          <canvas ref={canvasRef} className="max-w-full" />
        </div>

        <div className="flex gap-4">
          <button
            onClick={copyToClipboard}
            className="px-8 py-4 bg-slate-100 dark:bg-slate-800 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-slate-200 transition-all"
          >
            {copied ? <Check className="text-emerald-500" /> : <Copy />}
            {copied ? "Copied!" : "Copy Image"}
          </button>
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.download = `barcode-${text}.png`;
              link.href = canvasRef.current!.toDataURL();
              link.click();
            }}
            className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-indigo-500/20 hover:scale-105 transition-all"
          >
            <Download /> Save PNG
          </button>
        </div>
      </div>
    </div>
  );
}
