"use client";

import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

// This is the bridge itself
const ToolClient = dynamic(
  () => import("../jpg-to-png/pgToPngClient"), // Points to your actual tool logic
  {
    ssr: false, // 👈 THE MAGIC LINE: Prevents server-side crashes
    loading: () => (
      <div className="flex flex-col items-center py-20">
        <Loader2 className="animate-spin text-indigo-600" size={32} />
        <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
          Loading Security Engine...
        </p>
      </div>
    ),
  },
);

export default function ToolBridge() {
  return <ToolClient />;
}
