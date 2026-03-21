import { Metadata } from "next";
import ToolWrapper from "./ToolWrapper";
import Link from "next/link";
import {
  FileImage,
  ShieldCheck,
  Zap,
  Download,
  ArrowRight,
  HelpCircle,
  Eye,
  FileType,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free PDF to Image Converter - High Quality JPG/PNG | ToolKing",
  description:
    "Convert PDF pages to high-resolution JPG or PNG images instantly. 100% private, client-side processing. Select specific pages and download in one click.",
  keywords: [
    "pdf to image",
    "pdf to jpg converter",
    "convert pdf to png",
    "extract images from pdf",
    "ToolKing",
    "free pdf tools",
  ],
};

export default function PdfToImagePage() {
  return (
    <article className="max-w-6xl mx-auto px-6 py-12">
      {/* --- 🔥 FIX 1: SEO Optimized H1 --- */}
      <header className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <FileImage className="w-3 h-3" /> High Definition Export
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-rose-600 to-slate-900 dark:from-white dark:via-rose-400 dark:to-white bg-clip-text text-transparent leading-[1.1]">
          Free PDF to Image Converter <br />
          <span className="text-rose-600 text-3xl md:text-5xl opacity-80">
            (Convert to JPG & PNG)
          </span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          The professional way to transform PDF documents into crisp images.
          Perfect for{" "}
          <span className="text-rose-600 font-bold underline decoration-rose-200">
            Social Media, Presentations, and Digital Portfolios.
          </span>
        </p>
      </header>

      <ToolWrapper />

      {/* --- 🔥 FIX 6: SEO Content (Ranking Booster) --- */}
      <section className="mt-32 border-t border-slate-100 dark:border-slate-900 pt-20">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-4">
            <h2 className="text-2xl font-black tracking-tight">
              What is a PDF to Image Converter?
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              A PDF to Image converter takes the vector data inside a PDF and
              "rasterizes" it into pixels. This allows you to use your document
              pages as standard photos. At <strong>ToolKing</strong>, we use
              high-precision rendering to ensure that even small text remains
              readable after conversion.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Need to go the other way? You can easily turn your photos back
              into a document using our{" "}
              <Link
                href="/tools/image-to-pdf"
                className="text-rose-600 font-bold hover:underline"
              >
                Image to PDF tool
              </Link>
              .
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-black tracking-tight">
              JPG vs PNG: Which should you choose?
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Choose <strong>JPG</strong> if you want smaller file sizes for
              sharing on WhatsApp or Instagram. Choose <strong>PNG</strong> if
              your PDF contains lots of text or fine details, as PNG uses
              "lossless" compression which keeps every pixel perfect.
            </p>
          </div>
        </div>

        {/* Internal Linking for SEO Indexing */}
        <div className="mt-32 p-12 bg-rose-600 rounded-[3.5rem] text-white text-center shadow-2xl shadow-rose-500/20">
          <h3 className="text-2xl font-black mb-6 italic underline decoration-rose-400">
            Complete Your PDF Workflow
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <RelatedTool href="/tools/pdf-merger" title="PDF Merger" />
            <RelatedTool href="/tools/pdf-splitter" title="PDF Splitter" />
            <RelatedTool href="/tools/image-to-pdf" title="Image to PDF" />
            <RelatedTool href="/tools/word-counter" title="Word Counter" />
          </div>
        </div>
      </section>
    </article>
  );
}

function RelatedTool({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-rose-200 transition-all"
    >
      {title}{" "}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}
