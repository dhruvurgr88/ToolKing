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
  ArrowRight,
  ShieldCheck,
  Lock,
  ZapIcon,
  Search,
  CheckCircle2,
  MousePointer2,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ToolKing | Free Online PDF, Developer & Business Tools",
  description:
    "The ultimate all-in-one utility hub. Convert Image to PDF, Prettify JSON, Generate QR Codes, and reduce image size to 20KB instantly. 100% Private & No Sign-up Required.",
  keywords: [
    "ToolKing",
    "image to pdf converter",
    "json formatter online",
    "free qr code generator",
    "case converter",
    "word counter online",
    "image compressor 20kb",
    "developer utility tools",
  ],
  alternates: {
    canonical: "https://toolking.online",
  },
};

export default function HomePage() {
  const baseUrl = "https://toolking.online";

  // --- 🔥 10/10 WEBSITE SCHEMA (Sitelinks Searchbox Enabled) ---
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ToolKing",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/tools?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    description:
      "Professional browser-based utility tools for documents, images, and code.",
  };

  // --- 🍞 BREADCRUMB SCHEMA (For Google Navigation) ---
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-50 transition-colors duration-500 selection:bg-indigo-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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
              <LayoutGrid className="w-4 h-4" /> Browse All 15+ Tools
            </Link>
          </div>
        </div>
      </section>

      {/* 3. 🛠️ FEATURED TOOLS GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-indigo-600 rounded-full" />
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter italic">
              Essential Utilities
            </h2>
          </div>
          <Link
            href="/tools"
            className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest hover:underline flex items-center gap-2"
          >
            View Catalog <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ToolCard
            href="/tools/image-compressor"
            icon={<ZapIcon className="w-8 h-8 text-blue-500" />}
            title="Image Compressor"
            desc="Reduce image size to 20KB or 50KB for govt exam portals like SSC & Vyapam."
            tag="Hot"
          />

          <ToolCard
            href="/tools/json-formatter"
            icon={<Braces className="w-8 h-8 text-amber-500" />}
            title="JSON Formatter"
            desc="Validate, prettify, and generate TypeScript types instantly in-browser."
            tag="Dev Pro"
          />

          <ToolCard
            href="/tools/qr-code-generator"
            icon={<QrCode className="w-8 h-8 text-indigo-500" />}
            title="QR Generator"
            desc="Create branded, high-res QR codes for WhatsApp, Wi-Fi, and Websites."
            tag="Popular"
          />

          <ToolCard
            href="/tools/word-counter"
            icon={<FileText className="w-8 h-8 text-emerald-500" />}
            title="Word Counter"
            desc="Real-time text analytics, character count, and estimated reading time."
          />
        </div>
      </section>

      {/* 4. 🛡️ TRUST SECTION */}
      <section className="bg-slate-50 dark:bg-slate-900/20 py-24 border-y border-slate-100 dark:border-slate-900">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          <FeatureBlock
            icon={<ShieldCheck className="w-8 h-8" />}
            title="Privacy by Design"
            text="Files never leave your device. All processing happens locally in-browser for 100% data security."
          />
          <FeatureBlock
            icon={<Rocket className="w-8 h-8" />}
            title="Zero Latency"
            text="No server uploads. Experience the speed of client-side computing on any modern hardware."
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
            <div className="font-black text-2xl tracking-[0.2em] mb-2 uppercase italic text-indigo-600">
              TOOLKING
            </div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
              Premium Web Utilities • Engineered for Privacy
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
            <Link
              href="/terms"
              className="hover:text-indigo-600 transition-colors"
            >
              TERMS
            </Link>
            <a
              href="https://vidyaos.online"
              target="_blank"
              className="hover:text-emerald-500 transition-colors"
            >
              VIDYAOS
            </a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">
            © {new Date().getFullYear()} ToolKing Online Engine v2.5
          </p>
          <div className="flex items-center gap-2 text-[10px] text-slate-400 font-black uppercase tracking-widest">
            <Lock size={12} className="text-emerald-500" /> Secure Browser-Side
            Processing
          </div>
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
      className="group relative p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-indigo-500/50 transition-all duration-500 flex flex-col shadow-sm hover:shadow-2xl dark:hover:bg-slate-900/60"
    >
      {tag && (
        <span className="absolute top-6 right-6 px-2.5 py-1 bg-indigo-600 text-white text-[8px] font-black uppercase tracking-widest rounded-full shadow-lg animate-pulse">
          {tag}
        </span>
      )}
      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl w-fit mb-16 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
        {icon}
      </div>
      <h3 className="text-xl font-black mb-2 tracking-tight flex items-center gap-2">
        {title}{" "}
        <ArrowRight
          size={16}
          className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
        />
      </h3>
      <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed">
        {desc}
      </p>
    </Link>
  );
}

function FeatureBlock({ icon, title, text }: any) {
  return (
    <div className="text-center md:text-left group">
      <div className="mb-6 p-4 bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 rounded-2xl w-fit mx-auto md:mx-0 shadow-lg shadow-indigo-500/5 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <h4 className="text-lg font-black mb-3 uppercase tracking-widest">
        {title}
      </h4>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
        {text}
      </p>
    </div>
  );
}
