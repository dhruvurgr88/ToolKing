"use client";

import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

/**
 * 🔥 This is the "Bridge" strategy.
 * By using 'ssr: false' inside a "use client" file,
 * Turbopack won't crash during the production build.
 */
const UnlockPdfClient = dynamic(() => import("./UnlockPdfClient"), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center p-20 space-y-4 animate-in fade-in duration-700">
      <div className="relative">
        <Loader2 className="animate-spin text-indigo-600" size={40} />
        <div className="absolute inset-0 blur-xl bg-indigo-500/20 rounded-full" />
      </div>
      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 animate-pulse">
        Initializing Decryption Engine...
      </p>
    </div>
  ),
});

export default function ToolBridge() {
  return <UnlockPdfClient />;
}
