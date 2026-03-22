"use client";

import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

// Now ssr: false is allowed because this is a "use client" file
const PdfToWordClient = dynamic(() => import("./PdfToWordClient"), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center p-20 space-y-4">
      <Loader2 className="animate-spin text-indigo-600" size={40} />
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
        Loading Converter Engine...
      </p>
    </div>
  ),
});

export default function ToolBridge() {
  return <PdfToWordClient />;
}
