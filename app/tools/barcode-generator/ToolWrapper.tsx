"use client";

import dynamic from "next/dynamic";

// Disable Server-Side Rendering (SSR) for the Barcode engine
// Canvas rendering requires the 'window' and 'document' objects
const BarcodeClient = dynamic(() => import("./BarcodeClient"), {
  ssr: false,
  loading: () => (
    <div className="h-96 flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-900/20 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-800 animate-pulse">
      <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-slate-400 font-black text-[10px] tracking-[0.3em] uppercase">
        Initializing Barcode Engine
      </p>
    </div>
  ),
});

export default function ToolWrapper() {
  return <BarcodeClient />;
}
