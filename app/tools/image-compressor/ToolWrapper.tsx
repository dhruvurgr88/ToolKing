"use client";

import dynamic from "next/dynamic";
import { Zap, Loader2, Image as ImageIcon } from "lucide-react";

// Disable SSR (Server Side Rendering) for the compression engine
// The browser-image-compression library requires the 'window' and 'File' API
const CompressorClient = dynamic(() => import("./CompressorClient"), {
  ssr: false,
  loading: () => (
    <div className="h-96 flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-900/20 rounded-[3.5rem] border-2 border-dashed border-slate-200 dark:border-slate-800 animate-pulse">
      <div className="relative mb-6">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <ImageIcon className="w-6 h-6 text-blue-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="text-center space-y-2">
        <p className="text-slate-400 font-black text-[10px] tracking-[0.4em] uppercase">
          Initializing Image Engine
        </p>
        <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest opacity-60">
          Preparing High-Efficiency Compression Algorithms...
        </p>
      </div>
    </div>
  ),
});

export default function ToolWrapper() {
  return <CompressorClient />;
}
