"use client";

import dynamic from "next/dynamic";
import { Layers, Loader2, Scaling } from "lucide-react";

// Disable SSR (Server Side Rendering)
// The ResizerClient uses HTML5 Canvas and Blob APIs which are browser-only
const ResizerClient = dynamic(() => import("./ResizerClient"), {
  ssr: false,
  loading: () => (
    <div className="h-96 flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-900/20 rounded-[3.5rem] border-2 border-dashed border-slate-200 dark:border-slate-800 animate-pulse">
      <div className="relative mb-6">
        {/* Outer spinning ring */}
        <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin" />
        {/* Inner Scaling Icon */}
        <Scaling className="w-6 h-6 text-emerald-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="text-center space-y-2">
        <p className="text-slate-400 font-black text-[10px] tracking-[0.4em] uppercase">
          Initializing Batch Engine
        </p>
        <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest opacity-60">
          Preparing High-Quality Lanczos Resampling...
        </p>
      </div>
    </div>
  ),
});

export default function ToolWrapper() {
  return <ResizerClient />;
}
