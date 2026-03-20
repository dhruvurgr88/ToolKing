"use client";
import dynamic from "next/dynamic";

// We move the ssr:false logic here
const ImageToPdfClient = dynamic(() => import("./ImageToPdfClient"), {
  ssr: false,
  loading: () => (
    <div className="h-96 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900/20 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-800 animate-pulse">
      <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-slate-400 font-bold text-sm tracking-widest">
        INITIALIZING ENGINE...
      </p>
    </div>
  ),
});

export default function ToolWrapper() {
  return <ImageToPdfClient />;
}
