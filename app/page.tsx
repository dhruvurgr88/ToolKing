import React from "react";
import Link from "next/link";
import {
  FileText,
  Image as ImageIcon,
  ArrowRight,
  Zap,
  Shield,
  Rocket,
  Globe,
  Plus,
  CheckCircle,
} from "lucide-react";
import { Metadata } from "next";

// 1. DYNAMIC METADATA FOR GOOGLE RANKING
export const metadata: Metadata = {
  title: "ToolKing - Free Online PDF & AI Tools for Students",
  description:
    "Convert images to PDF, count words, and analyze documents instantly. Fast, private, and 100% free online tools for students and creators. No sign-up required.",
  keywords: [
    "free online tools",
    "image to pdf converter",
    "word counter online",
    "student utility tools",
    "ToolKing",
  ],
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-50 transition-colors duration-500 selection:bg-indigo-500/30">
      {/* 2. HERO SECTION (Server-Side Rendered) */}
      <section className="relative pt-20 pb-16 px-6 text-center overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-indigo-500/10 dark:bg-indigo-600/20 blur-[120px] rounded-full -z-10" />

        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold tracking-wider uppercase border border-slate-200 dark:border-slate-800 rounded-full bg-slate-50/50 dark:bg-slate-900/50 text-indigo-600 dark:text-indigo-400">
            ✨ Studio-Quality Web Utilities • 100% Free
          </span>

          {/* Optimized H1 for SEO */}
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 bg-gradient-to-b from-slate-950 to-slate-500 dark:from-white dark:to-slate-500 bg-clip-text text-transparent leading-[1.1]">
            Free Online PDF & <br /> AI Tools for Students.
          </h1>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Fast, private, and 100% free. ToolKing brings professional-grade
            document processing directly to your browser. No registration, no
            tracking.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tools"
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl shadow-xl shadow-indigo-500/20 transition-all hover:-translate-y-1 active:scale-95"
            >
              Explore All Tools
            </Link>
          </div>
        </div>
      </section>

      {/* 3. FEATURED TOOLS GRID (2 columns mobile, 3 columns desktop) */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-24">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl md:text-2xl font-black tracking-tight">
            Featured Tools
          </h2>
          <div className="h-[1px] flex-grow bg-slate-100 dark:bg-slate-900"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {/* Tool Card: Image to PDF */}
          <Link
            href="/tools/image-to-pdf"
            className="group relative p-5 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all duration-300 flex flex-col items-center text-center shadow-sm dark:shadow-none"
          >
            <div className="p-3 bg-indigo-500/10 rounded-xl md:rounded-2xl mb-4 md:mb-12 group-hover:rotate-6 transition-transform">
              <ImageIcon className="w-6 h-6 md:w-8 md:h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-sm md:text-2xl font-bold mb-1 md:mb-2">
              Image to PDF
            </h3>
            <p className="hidden md:block text-slate-500 dark:text-slate-400 text-sm">
              Convert JPG, PNG, and WebP into high-quality PDFs instantly.
            </p>
          </Link>

          {/* Tool Card: Word Counter */}
          <Link
            href="/tools/word-counter"
            className="group p-5 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all flex flex-col items-center text-center shadow-sm dark:shadow-none"
          >
            <div className="p-3 bg-emerald-500/10 rounded-xl md:rounded-2xl mb-4 md:mb-12 group-hover:-rotate-6 transition-transform">
              <FileText className="w-6 h-6 md:w-8 md:h-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-sm md:text-2xl font-bold mb-1 md:mb-2">
              Word Counter
            </h3>
            <p className="hidden md:block text-slate-500 dark:text-slate-400 text-sm">
              Professional analytics for your documents and essays.
            </p>
          </Link>

          {/* Banner Card */}
          <div className="col-span-2 md:col-span-1 p-5 md:p-8 rounded-2xl md:rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-center bg-indigo-50/30 dark:bg-transparent">
            <Zap className="w-6 h-6 text-yellow-500 mb-4" />
            <h3 className="text-sm md:text-xl font-bold">New Tools Weekly</h3>
            <p className="hidden md:block text-slate-500 text-xs mt-2">
              We build tools based on your requests.
            </p>
            <button className="mt-4 px-4 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-black text-[10px] font-bold rounded-full uppercase tracking-tighter">
              Request a Tool
            </button>
          </div>
        </div>
      </section>

      {/* 4. WHY TOOLKING? (Trust & Value Section) */}
      <section className="max-w-6xl mx-auto px-6 pb-24 border-t border-slate-100 dark:border-slate-900 pt-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 italic">
            Why choose ToolKing?
          </h2>
          <p className="text-slate-500">
            Professional utilities, minus the subscription.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureBlock
            icon={<Shield className="w-8 h-8" />}
            title="Privacy by Default"
            text="Your files never touch our servers. All processing happens locally in your browser."
          />
          <FeatureBlock
            icon={<Rocket className="w-8 h-8" />}
            title="Blazing Performance"
            text="Experience the speed of zero-server latency. Convert large files in milliseconds."
          />
          <FeatureBlock
            icon={<Globe className="w-8 h-8" />}
            title="Free Forever"
            text="No subscriptions, no hidden limits, and no watermarks. Built for students and creators."
          />
        </div>
      </section>

      {/* 5. FOOTER (Trust & Navigation) */}
      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-100 dark:border-slate-900 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="font-black text-xl tracking-tighter">TOOLKING</div>
          <div className="flex gap-6 text-xs font-bold text-slate-500">
            <Link href="/tools" className="hover:text-indigo-600">
              ALL TOOLS
            </Link>
            <Link href="/privacy" className="hover:text-indigo-600">
              PRIVACY
            </Link>
            <Link href="/terms" className="hover:text-indigo-600">
              TERMS
            </Link>
          </div>
          <p className="mt-8 text-[10px] text-slate-400 font-medium uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} ToolKing • Free Online Tools
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureBlock({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <div className="mb-6 p-4 bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 rounded-3xl">
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-4 tracking-tight">{title}</h4>
      <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm md:text-base">
        {text}
      </p>
    </div>
  );
}
