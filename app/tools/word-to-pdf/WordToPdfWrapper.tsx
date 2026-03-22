"use client"; // 🔥 This is the secret sauce

import dynamic from "next/dynamic";

// Now we can safely use ssr: false because this wrapper is a Client Component
const WordToPdfClient = dynamic(() => import("./WordToPdfClient"), {
  ssr: false,
  loading: () => (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-12 h-12 bg-slate-200 rounded-full" />
        <div className="text-slate-400 font-black uppercase tracking-widest text-[10px]">
          Initializing Engine...
        </div>
      </div>
    </div>
  ),
});

export default function WordToPdfWrapper() {
  return <WordToPdfClient />;
}
