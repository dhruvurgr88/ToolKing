import { Metadata } from "next";
import ToolWrapper from "./ToolWrapper";
import Link from "next/link";
import {
  GraduationCap,
  ShieldCheck,
  Zap,
  ArrowRight,
  MousePointer2,
  Info,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Image Compressor for Govt Exams | 20KB, 50KB, 100KB | ToolKing",
  description:
    "Compress images specifically for SSC, JEE, and Vyapam. Accurate KB matching, photo resizing, and signature compression. 100% private and free.",
  keywords: [
    "compress image to 20kb",
    "photo resize for ssc form",
    "reduce image size for jee",
    "vyapam photo upload size",
    "image compressor for govt exams",
    "signature resizer 140x60",
  ],
};

export default function ImageCompressorPage() {
  return (
    <article className="max-w-6xl mx-auto px-6 py-12">
      <header className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <GraduationCap className="w-3 h-3" /> Exam Portal Optimized
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent leading-[1.1]">
          Govt Exam Image Hub <br />
          <span className="text-blue-600 text-3xl md:text-5xl opacity-80">
            (SSC, JEE, VYAPAM & SSC)
          </span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Don't let your application get rejected. Use our{" "}
          <span className="text-blue-600 font-bold underline decoration-blue-200">
            Precise KB Matcher
          </span>{" "}
          to meet exact portal requirements.
        </p>
      </header>

      <ToolWrapper />

      {/* 🔥 FIX 8: SEO Content Section */}
      <section className="mt-32 border-t border-slate-100 dark:border-slate-800 pt-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-black tracking-tight text-slate-800 dark:text-white">
              How to compress photo for JEE & SSC?
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Most government portals like **NTA (JEE)** and **SSC** require a
              photo between **20KB to 50KB**. To compress image to 20kb without
              losing face clarity, our tool uses a recursive algorithm that
              adjusts quality until the target is met.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> SSC Photo:
                20KB - 50KB (3.5 x 4.5 cm)
              </li>
              <li className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Signature:
                10KB - 20KB (140 x 60 px)
              </li>
              <li className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Vyapam:
                Under 100KB with Signature
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800">
            <h3 className="text-xl font-black mb-4">
              Vyapam Photo Requirements
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              For **MP Vyapam (PEB)**, you often need a combined template of
              Photo, Signature, and Handwriting. Our "High Quality" mode ensures
              that even when you <strong>reduce image size for Vyapam</strong>,
              the handwritten text remains readable for the examiners.
            </p>
            <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20 flex gap-3 italic text-[10px] text-blue-600 font-bold">
              <Info className="shrink-0 w-4 h-4" />
              Pro Tip: Always use JPG format for Indian Govt sites as they
              rarely accept WebP or PNG.
            </div>
          </div>
        </div>

        {/* SEO Internal Linking */}
        <div className="mt-24 p-12 bg-blue-600 rounded-[3.5rem] text-white text-center shadow-2xl">
          <h3 className="text-2xl font-black mb-6 italic underline decoration-blue-400">
            Essential Exam Utilities
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            <Link
              href="/tools/pdf-merger"
              className="text-[10px] font-black uppercase tracking-widest hover:text-blue-200 flex items-center gap-2"
            >
              PDF Merger <ArrowRight size={14} />
            </Link>
            <Link
              href="/tools/image-to-pdf"
              className="text-[10px] font-black uppercase tracking-widest hover:text-blue-200 flex items-center gap-2"
            >
              Image to PDF <ArrowRight size={14} />
            </Link>
            <Link
              href="/tools/pdf-to-image"
              className="text-[10px] font-black uppercase tracking-widest hover:text-blue-200 flex items-center gap-2"
            >
              PDF to JPG <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
