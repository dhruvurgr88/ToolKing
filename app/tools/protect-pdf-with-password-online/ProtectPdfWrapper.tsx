"use client"; // 🔥 This marks the boundary

import dynamic from "next/dynamic";

// We move the dynamic loading HERE because this file is a Client Component
const ProtectPdfClient = dynamic(() => import("./ProtectPdfClient"), {
  ssr: false,
  loading: () => (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center animate-pulse">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 bg-slate-200 rounded-full" />
        <div className="text-slate-400 font-black uppercase tracking-widest text-[10px]">
          Initializing Security Engine...
        </div>
      </div>
    </div>
  ),
});

export default function ProtectPdfWrapper() {
  return <ProtectPdfClient />;
}
