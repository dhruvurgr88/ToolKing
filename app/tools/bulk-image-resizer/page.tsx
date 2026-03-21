import { Metadata } from "next";
import ToolWrapper from "./ToolWrapper";
import Link from "next/link";
import {
  Layers,
  Zap,
  ShieldCheck,
  Download,
  ArrowRight,
  HelpCircle,
  Image as ImageIcon,
  Scaling,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Bulk Image Resizer - Resize Multiple Images Online | ToolKing",
  description:
    "Resize hundreds of JPG, PNG, or WebP images at once. Change width, height, or use percentages. 100% private, client-side bulk image resizing tool.",
  keywords: [
    "bulk image resizer",
    "resize multiple images online",
    "batch image resizer free",
    "change image dimensions in bulk",
    "ToolKing",
    "resize photos for instagram",
  ],
};

export default function BulkImageResizerPage() {
  return (
    <article className="max-w-6xl mx-auto px-6 py-12">
      {/* --- SEO Optimized H1 --- */}
      <header className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <Layers className="w-3 h-3" /> Batch Processing Power
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-emerald-600 to-slate-900 dark:from-white dark:via-emerald-400 dark:to-white bg-clip-text text-transparent leading-[1.1]">
          Free Bulk Image Resizer <br />
          <span className="text-emerald-600 text-3xl md:text-5xl opacity-80">
            (Resize Hundreds at Once)
          </span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Stop resizing images one by one. Drop your photos, set your
          dimensions, and
          <span className="text-emerald-600 font-bold underline decoration-emerald-200 ml-1">
            download them all in a single ZIP
          </span>
          .
        </p>
      </header>

      <ToolWrapper />

      {/* --- SEO Content Grid (Ranking Booster) --- */}
      <section className="mt-32 border-t border-slate-100 dark:border-slate-900 pt-20">
        <div className="grid md:grid-cols-3 gap-12 text-sm">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 dark:bg-emerald-900/20">
              <Scaling className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black tracking-tight">
              Granular Control
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Whether you need to set a specific width (e.g., 1920px for web), a
              specific height, or just shrink everything by 50%, our tool gives
              you the exact scaling options you need for your workflow.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 dark:bg-indigo-900/20">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black tracking-tight">
              Instant Batch Power
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Why wait for a server to process your files? ToolKing uses your
              device's raw GPU power to resize images instantly in your browser.
              Upload 100 images and watch them process in seconds.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 dark:bg-blue-900/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black tracking-tight">
              Privacy by Default
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Your photos never leave your computer. All resizing happens
              locally in your browser memory. We don't upload, store, or see
              your images, guaranteeing 100% data privacy.
            </p>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <div className="mt-32 max-w-5xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-emerald-600">
                <HelpCircle className="w-5 h-5" /> What formats are supported?
              </h3>
              <p className="text-slate-500 leading-relaxed text-xs">
                You can upload and bulk resize{" "}
                <strong>JPG, JPEG, PNG, and WebP</strong> images. The output
                will maintain the original format unless you specify otherwise
                in the settings.
              </p>
            </div>
            <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-emerald-600">
                <HelpCircle className="w-5 h-5" /> Will it ruin image quality?
              </h3>
              <p className="text-slate-500 leading-relaxed text-xs">
                We use high-quality lanczos resampling algorithms in the canvas
                to ensure that when you shrink images, they remain sharp and
                clear, not blurry or pixelated.
              </p>
            </div>
          </div>
        </div>

        {/* Internal Linking for SEO */}
        <div className="mt-32 p-12 bg-emerald-600 rounded-[3.5rem] text-white text-center shadow-2xl shadow-emerald-500/20">
          <h3 className="text-2xl font-black mb-6 italic underline decoration-emerald-400">
            Optimize Your Imagery
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <RelatedTool
              href="/tools/image-compressor"
              title="Image Compressor"
            />
            <RelatedTool href="/tools/image-to-pdf" title="Image to PDF" />
            <RelatedTool href="/tools/pdf-to-image" title="PDF to JPG" />
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
      className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-emerald-200 transition-all"
    >
      {title}{" "}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}
