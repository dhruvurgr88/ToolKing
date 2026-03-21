import { Metadata } from "next";
import ToolWrapper from "./ToolWrapper";
import Link from "next/link";
import {
  Scissors,
  ShieldCheck,
  Zap,
  FileStack,
  ArrowRight,
  HelpCircle,
  Lock,
  FileSearch,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Online PDF Splitter - Extract Pages Instantly | ToolKing",
  description:
    "Split PDF files into individual pages or extract specific ranges. 100% private, client-side processing. No file limits, no registration required.",
  keywords: [
    "free pdf splitter",
    "extract pdf pages",
    "split pdf online",
    "separate pdf pages",
    "pdf tools",
    "ToolKing",
  ],
};

export default function PdfSplitterPage() {
  return (
    <article className="max-w-6xl mx-auto px-6 py-12">
      {/* --- 🔥 FIX 1: SEO Optimized H1 --- */}
      <header className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <Scissors className="w-3 h-3" /> Professional Grade
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-rose-600 to-slate-900 dark:from-white dark:via-rose-400 dark:to-white bg-clip-text text-transparent leading-[1.1]">
          Free Online PDF Splitter <br />
          <span className="text-rose-600 text-3xl md:text-5xl opacity-80">
            - Extract Pages Instantly -
          </span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          The fastest way to separate PDF pages. Extract custom ranges, split by
          fixed intervals, or split by file size{" "}
          <span className="text-rose-600 font-bold underline decoration-rose-200">
            without ever uploading your data.
          </span>
        </p>
      </header>

      <ToolWrapper />

      {/* --- 🔥 FIX 3: SEO Content (Rank Booster) --- */}
      <section className="mt-32 border-t border-slate-100 dark:border-slate-900 pt-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 dark:bg-rose-900/20">
              <FileSearch className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black tracking-tight">
              What is PDF Splitting?
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              PDF splitting allows you to take a multi-page document and break
              it into smaller, manageable files. Whether you need to extract a
              single invoice from a 100-page report or split a textbook by
              chapters, our tool handles it with precision.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 dark:bg-indigo-900/20">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black tracking-tight">
              Why use ToolKing Splitter?
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Most online splitters upload your sensitive documents to their
              servers. ToolKing is built differently. All processing happens{" "}
              <strong>locally in your browser</strong>, meaning your privacy is
              100% protected and the speed is limited only by your computer.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 dark:bg-emerald-900/20">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black tracking-tight">
              Advanced Split Modes
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              We offer three distinct modes: <strong>Custom Ranges</strong> for
              specific pages, <strong>Fixed Intervals</strong> for bulk
              splitting, and <strong>Split by Size</strong> to meet email
              attachment limits.
            </p>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <div className="mt-32 max-w-5xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <FAQBlock
              q="Is there a file size limit?"
              a="Since we process files on your device, there are no artificial limits. You can split PDFs as large as your browser memory can handle (usually up to 500MB+)."
            />
            <FAQBlock
              q="Does splitting reduce quality?"
              a="No. Our engine extracts the original data streams without re-compressing images, ensuring your text and graphics remain pixel-perfect."
            />
          </div>
        </div>

        {/* --- 🔥 FIX 2: Internal Links (Indexing Web) --- */}
        <div className="mt-32 p-12 bg-rose-600 rounded-[3.5rem] text-white text-center shadow-2xl shadow-rose-500/20">
          <h3 className="text-2xl font-black mb-6 italic underline decoration-rose-400 text-white">
            Need More PDF Magic?
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <RelatedTool href="/tools/pdf-merger" title="PDF Merger" />
            <RelatedTool href="/tools/image-to-pdf" title="Image to PDF" />
            <RelatedTool
              href="/tools/barcode-generator"
              title="Barcode Generator"
            />
            <RelatedTool
              href="/tools/qr-code-generator"
              title="QR Code Generator"
            />
          </div>
        </div>
      </section>
    </article>
  );
}

// 🔥 FIX 8: Proper Typing
function FAQBlock({ q, a }: { q: string; a: string }) {
  return (
    <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
      <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-rose-600">
        <HelpCircle className="w-5 h-5" /> {q}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed">{a}</p>
    </div>
  );
}

function RelatedTool({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 text-sm font-black uppercase tracking-widest text-white hover:text-rose-200 transition-all"
    >
      {title}{" "}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}
