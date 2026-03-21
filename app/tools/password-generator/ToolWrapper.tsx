"use client";

import dynamic from "next/dynamic";
import { ShieldCheck } from "lucide-react";

// Disable SSR for the Password Engine
// Cryptographic random values are only available in the browser environment
const PasswordClient = dynamic(() => import("./PasswordClient"), {
  ssr: false,
  loading: () => (
    <div className="h-96 flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-900/20 rounded-[3.5rem] border-2 border-dashed border-slate-200 dark:border-slate-800 animate-pulse">
      <div className="relative mb-6">
        <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin" />
        <ShieldCheck className="w-6 h-6 text-emerald-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <p className="text-slate-400 font-black text-[10px] tracking-[0.4em] uppercase text-center px-6">
        Securing Environment... <br />
        <span className="text-[8px] opacity-60">
          Initializing Web Crypto API
        </span>
      </p>
    </div>
  ),
});

export default function ToolWrapper() {
  return <PasswordClient />;
}
