import React from "react";
import Link from "next/link";
import {
  FileText,
  Image as ImageIcon,
  Zap,
  Shield,
  Rocket,
  Globe,
  Braces,
  QrCode,
  Type,
  LayoutGrid,
} from "lucide-react";
import { Metadata } from "next";

// 1. 🚀 10/10 SEO METADATA
export const metadata: Metadata = {
  title: "ToolKing | Free Pro Online PDF, Developer & Business Tools",
  description:
    "The ultimate all-in-one utility hub. Convert Image to PDF, Prettify JSON, Generate QR Codes, and Analyze Text instantly. 100% Private & No Sign-up Required.",
  keywords: [
    "ToolKing",
    "image to pdf converter",
    "json formatter online",
    "free qr code generator",
    "case converter",
    "word counter online",
    "developer utility tools",
  ],
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-50 transition-colors duration-500 selection:bg-indigo-500/30">
      {/* 2. 🔥 DYNAMIC HERO SECTION */}
      <section className="relative pt-24 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/20 blur-[130px] rounded-full -z-10" />

        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase border border-slate-200 dark:border-slate-800 rounded-full bg-white dark:bg-slate-950 text-indigo-600 dark:text-indigo-400 shadow-sm">
            <Zap className="w-3 h-3 fill-current" /> Studio-Quality Utilities •
            100% Free
          </span>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-b from-slate-950 via-slate-700 to-slate-400 dark:from-white dark:via-slate-200 dark:to-slate-500 bg-clip-text text-transparent leading-[0.95]">
            Free Professional Tools. <br /> Zero Subscription.
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Fast, private, and browser-native. ToolKing brings high-end document
            processing, developer utilities, and business tools directly to your
            workflow.{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-bold underline decoration-2 underline-offset-4">
              No tracking. Ever.
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="/tools"
              className="px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-black font-black text-xs uppercase tracking-widest rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
            >
              <LayoutGrid className="w-4 h-4" /> Browse All 11+ Tools
            </Link>
          </div>
        </div>
      </section>

      {/* 3. 🛠️ FEATURED TOOLS GRID (Updated with Pro Tools) */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter italic">
            Essential Utilities
          </h2>
          <Link
            href="/tools"
            className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest hover:underline"
          >
            View Catalog →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Developer Tool: JSON */}
          <ToolCard
            href="/tools/json-formatter"
            icon={<Braces className="w-8 h-8 text-amber-500" />}
            title="JSON Formatter"
            desc="Validate, prettify, and generate TypeScript types instantly."
            tag="Pro"
          />

          {/* Business Tool: QR Generator */}
          <ToolCard
            href="/tools/qr-code-generator"
            icon={<QrCode className="w-8 h-8 text-blue-500" />}
            title="QR Generator"
            desc="Create branded, high-res QR codes for business & Wi-Fi."
            tag="Popular"
          />

          {/* Productivity: Image to PDF */}
          <ToolCard
            href="/tools/image-to-pdf"
            icon={<ImageIcon className="w-8 h-8 text-emerald-500" />}
            title="Image to PDF"
            desc="Merge JPG/PNG into high-quality PDFs locally."
          />

          {/* Text Tool: Case Converter */}
          <ToolCard
            href="/tools/case-converter"
            icon={<Type className="w-8 h-8 text-rose-500" />}
            title="Case Converter"
            desc="Transform text to camelCase, snake_case, and more."
            tag="New"
          />
        </div>
      </section>

      {/* 4. 🛡️ TRUST SECTION */}
      <section className="bg-slate-50 dark:bg-slate-900/20 py-24 border-y border-slate-100 dark:border-slate-900">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          <FeatureBlock
            icon={<Shield className="w-8 h-8" />}
            title="Privacy by Design"
            text="Files never leave your device. All processing happens in-browser for 100% data security."
          />
          <FeatureBlock
            icon={<Rocket className="w-8 h-8" />}
            title="Zero Latency"
            text="No server uploads. Experience the speed of client-side computing on any device."
          />
          <FeatureBlock
            icon={<Globe className="w-8 h-8" />}
            title="Always Free"
            text="Built for the community. No subscriptions, watermarks, or hidden usage limits."
          />
        </div>
      </section>

      {/* 5. 🏷️ FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 py-20 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="font-black text-2xl tracking-[0.2em] mb-2">
              TOOLKING
            </div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
              Premium Web Utilities • Indore, IN
            </p>
          </div>
          <div className="flex gap-8 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
            <Link
              href="/tools"
              className="hover:text-indigo-600 transition-colors"
            >
              TOOLS
            </Link>
            <Link
              href="/privacy"
              className="hover:text-indigo-600 transition-colors"
            >
              PRIVACY
            </Link>
            <a
              href="https://vidyaos.online"
              className="hover:text-emerald-500 transition-colors"
            >
              VIDYAOS
            </a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} ToolKing Online Engine v2.0
          </p>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            Processing locally for your security
          </p>
        </div>
      </footer>
    </div>
  );
}

// 📦 SUB-COMPONENTS
function ToolCard({ href, icon, title, desc, tag }: any) {
  return (
    <Link
      href={href}
      className="group relative p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-indigo-500/50 transition-all duration-500 flex flex-col shadow-sm"
    >
      {tag && (
        <span className="absolute top-6 right-6 px-2 py-0.5 bg-indigo-500 text-white text-[8px] font-black uppercase tracking-widest rounded-full">
          {tag}
        </span>
      )}
      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl w-fit mb-16 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-xl font-black mb-2 tracking-tight">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
        {desc}
      </p>
    </Link>
  );
}

function FeatureBlock({ icon, title, text }: any) {
  return (
    <div className="text-center md:text-left">
      <div className="mb-6 p-4 bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 rounded-2xl w-fit mx-auto md:mx-0 shadow-lg shadow-indigo-500/5">
        {icon}
      </div>
      <h4 className="text-lg font-black mb-3 uppercase tracking-widest">
        {title}
      </h4>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}
