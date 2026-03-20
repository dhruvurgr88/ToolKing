"use client";
import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import {
  Download,
  Globe,
  Palette,
  Type,
  ShieldCheck,
  Image as ImageIcon,
} from "lucide-react";

export default function QRCodeClient() {
  const [text, setText] = useState("https://toolking.online");
  const [businessName, setBusinessName] = useState("TOOLKING PRO");
  const [fgColor, setFgColor] = useState("#15803d");
  const [includeLogo, setIncludeLogo] = useState(false);

  const downloadQR = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;

    // Create a NEW high-res canvas for the final export
    const finalCanvas = document.createElement("canvas");
    const ctx = finalCanvas.getContext("2d");
    if (!ctx) return;

    // 1. Set Dimensions (Original QR + Padding + Space for Text)
    const padding = 60;
    const textSpace = 100;
    finalCanvas.width = canvas.width + padding * 2;
    finalCanvas.height = canvas.height + padding + textSpace;

    // 2. Draw White Background (The "Good" Padding)
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, finalCanvas.width, finalCanvas.height);

    // 3. Draw the QR Code onto the new canvas
    ctx.drawImage(canvas, padding, padding);

    // 4. Draw the Business Name (Modern Typography)
    ctx.fillStyle = "#0f172a"; // Slate-900
    ctx.font = "bold 32px Inter, system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(
      businessName.toUpperCase(),
      finalCanvas.width / 2,
      canvas.height + padding + 40,
    );

    // 5. Draw "Scan to Visit" Subtext
    ctx.fillStyle = "#94a3b8"; // Slate-400
    ctx.font = "bold 12px Inter, system-ui, sans-serif";
    ctx.letterSpacing = "4px";
    ctx.fillText(
      "SCAN TO VISIT",
      finalCanvas.width / 2,
      canvas.height + padding + 70,
    );

    // 6. Download the final result
    const url = finalCanvas.toDataURL("image/png", 1.0);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${businessName.toLowerCase().replace(/\s+/g, "-")}-pro-qr.png`;
    link.click();
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start animate-in fade-in duration-700">
      {/* --- CONTROLS --- */}
      <div className="space-y-8 bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-2xl">
        <div className="space-y-6">
          <div>
            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
              <Type className="w-3 h-3" /> Business / Display Name
            </label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="e.g. My Coffee Shop"
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-emerald-500 outline-none transition-all font-bold"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
              <Globe className="w-3 h-3" /> Redirect URL
            </label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-emerald-500 outline-none transition-all font-bold"
            />
          </div>
        </div>

        <div className="flex gap-6 items-center pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex-1">
            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
              <Palette className="w-3 h-3" /> Brand Color
            </label>
            <input
              type="color"
              value={fgColor}
              onChange={(e) => setFgColor(e.target.value)}
              className="w-full h-12 rounded-xl cursor-pointer bg-transparent border-none"
            />
          </div>
          <button
            onClick={() => setIncludeLogo(!includeLogo)}
            className={`flex-1 h-12 rounded-xl border-2 border-dashed transition-all flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-widest ${
              includeLogo
                ? "border-emerald-500 bg-emerald-50 text-emerald-600"
                : "border-slate-200 text-slate-400"
            }`}
          >
            {includeLogo ? "Logo On" : "Add Logo"}
          </button>
        </div>
      </div>

      {/* --- PREVIEW CARD --- */}
      <div className="flex flex-col items-center">
        {/* THE BRANDED CONTAINER */}
        <div className="group relative p-10 bg-white rounded-[4rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] mb-10 transition-all hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]">
          {/* THE QR CODE */}
          <div className="p-4 bg-slate-50 rounded-[2.5rem] mb-8">
            <QRCodeCanvas
              value={text || " "}
              size={260}
              level={"H"}
              fgColor={fgColor}
              marginSize={1}
              imageSettings={
                includeLogo
                  ? {
                      src: "/logo.png",
                      height: 50,
                      width: 50,
                      excavate: true,
                    }
                  : undefined
              }
            />
          </div>

          {/* MODERN TYPOGRAPHY SECTION */}
          <div className="text-center space-y-1">
            <h3 className="text-2xl font-black tracking-tight text-slate-900 leading-none">
              {businessName || "Your Name Here"}
            </h3>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              Scan to Visit
            </p>
          </div>

          {/* DECORATIVE DOTS */}
          <div className="absolute top-8 right-8 flex gap-1">
            <div className="w-2 h-2 rounded-full bg-slate-100" />
            <div className="w-2 h-2 rounded-full bg-slate-100" />
          </div>
        </div>

        <button
          onClick={downloadQR}
          className="group flex items-center gap-3 px-12 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black transition-all shadow-2xl active:scale-95"
        >
          <Download className="w-5 h-5 group-hover:animate-bounce" /> Export
          Branded QR
        </button>

        <div className="mt-6 flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full">
          <ShieldCheck className="w-3 h-3 text-emerald-600" />
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700">
            Verified & Secure
          </span>
        </div>
      </div>
    </div>
  );
}
