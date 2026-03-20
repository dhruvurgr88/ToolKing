"use client";

import dynamic from "next/dynamic";

const QRCodeClient = dynamic(() => import("./QRCodeClient"), {
  ssr: false,
  loading: () => (
    <div className="h-96 flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-900/20 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-800 animate-pulse">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-slate-400 font-black text-xs tracking-[0.2em]">
        BOOTING QR ENGINE
      </p>
    </div>
  ),
});

export default function ToolWrapper() {
  return <QRCodeClient />;
}
