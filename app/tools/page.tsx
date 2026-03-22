"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  ImageIcon,
  FileText,
  Search,
  ArrowUpRight,
  Sparkles,
  Zap,
  Lock,
  FileStack,
  Scissors,
  EyeOff,
  Languages,
  Type,
  Braces,
  QrCode,
  Barcode,
  Link2,
  FileImage,
  Layers,
  CalendarDays,
  CheckCircle2,
  Users,
  Info,
  ArrowRight,
  MonitorSmartphone,
  ShieldCheck,
  Frown,
  Timer,
} from "lucide-react";

// 1. DATA DEFINITIONS (The complete Tool King library)
const tools = [
  {
    title: "Image to PDF",
    desc: "Convert JPG, PNG, WebP to PDF instantly.",
    icon: <ImageIcon className="w-6 h-6" />,
    href: "/tools/image-to-pdf",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    category: "PDF",
    status: "Popular",
  },
  {
    title: "Age Calculator",
    desc: "Calculate exact age for exam forms & birth dates.",
    icon: <CalendarDays className="w-6 h-6" />,
    href: "/tools/age-calculator",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    category: "Utility",
    status: "New",
  },
  {
    title: "PDF Merger",
    desc: "Combine multiple PDFs into one file securely.",
    icon: <FileStack className="w-6 h-6" />,
    href: "/tools/pdf-merger",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    category: "PDF",
    status: "Hot",
  },
  {
    title: "Word Counter",
    desc: "Analyze text length, words & reading time.",
    icon: <FileText className="w-6 h-6" />,
    href: "/tools/word-counter",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    category: "Text",
    status: "Free",
  },
  {
    title: "JSON Formatter",
    desc: "Prettify, validate, and minify JSON code instantly.",
    icon: <Braces className="w-6 h-6" />,
    href: "/tools/json-formatter",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    category: "Developer",
    status: "Hot",
  },
  {
    title: "QR Generator",
    desc: "Create branded QR codes for WhatsApp, Wi-Fi & URLs.",
    icon: <QrCode className="w-6 h-6" />,
    href: "/tools/qr-code-generator",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    category: "Business",
    status: "Popular",
  },
  {
    title: "Password Generator",
    desc: "Generate ultra-secure, random entropy passwords.",
    icon: <Lock className="w-6 h-6" />,
    href: "/tools/password-generator",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    category: "Security",
    status: "New",
  },
  {
    title: "PDF to Image",
    desc: "Extract PDF pages into high-quality JPG/PNG images.",
    icon: <FileImage className="w-6 h-6" />,
    href: "/tools/pdf-to-image",
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    category: "PDF",
    status: "New",
  },
  {
    title: "Image Compressor",
    desc: "Reduce file size for SSC & Govt exam portals.",
    icon: <Zap className="w-6 h-6" />,
    href: "/tools/image-compressor",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    category: "Image",
    status: "Hot",
  },
  {
    title: "AI Summarizer",
    desc: "Summarize long articles, essays, and reports instantly using AI.",
    icon: <Sparkles className="w-6 h-6" />, // Or <BrainCircuit />
    href: "/tools/ai-summarizer",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    category: "AI", // 🔥 This matches your new AI filter category
    status: "New",
  },
  {
    title: "Barcode Generator",
    desc: "Create professional Code 128 & EAN barcodes.",
    icon: <Barcode className="w-6 h-6" />,
    href: "/tools/barcode-generator",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    category: "Business",
    status: "New",
  },
  {
    title: "URL Shortener",
    desc: "Shorten links with custom branded aliases.",
    icon: <Link2 className="w-6 h-6" />,
    href: "/tools/url-shortener",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    category: "Marketing",
    status: "New",
  },
  {
    title: "Case Converter",
    desc: "Change text to UPPER, lower, camelCase & Title.",
    icon: <Type className="w-6 h-6" />,
    href: "/tools/case-converter",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    category: "Text",
    status: "New",
  },
  {
    title: "PDF Splitter",
    desc: "Separate PDF pages or extract custom ranges.",
    icon: <Scissors className="w-6 h-6" />,
    href: "/tools/pdf-splitter",
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    category: "PDF",
    status: "New",
  },
  {
    title: "Bulk Image Resizer",
    desc: "Batch resize 100+ images for web & social.",
    icon: <Layers className="w-6 h-6" />,
    href: "/tools/bulk-image-resizer",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    category: "Image",
    status: "Hot",
  },
  {
    title: "PDF to Word",
    desc: "Convert PDF documents to editable DOCX files safely in your browser.",
    icon: <FileText className="w-6 h-6" />,
    href: "/tools/pdf-to-word",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    category: "PDF",
    status: "New", // Set to "New" to attract clicks for SEO ranking
  },
  {
    title: "Unlock PDF",
    desc: "Remove password protection from PDF files.",
    icon: <EyeOff className="w-6 h-6" />,
    href: "#",
    color: "bg-slate-500/10 text-slate-600 dark:text-slate-400",
    category: "PDF",
    status: "Soon",
  },
  {
    title: "AI Translator",
    desc: "Context-aware document translation via AI.",
    icon: <Languages className="w-6 h-6" />,
    href: "#",
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    category: "AI",
    status: "Soon",
  },
];

const categories = [
  "All",
  "PDF",
  "Text",
  "Utility",
  "Image",
  "Developer",
  "Security",
  "Business",
  "Marketing",
  "AI",
];

export default function ToolsGallery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const baseUrl = "https://toolking.online";

  // 2. SEARCH & FILTER LOGIC
  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch =
        tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || tool.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "ToolKing Online Tools Gallery",
    description:
      "A comprehensive collection of secure, private online tools for PDF, Image, and Text transformation.",
    url: `${baseUrl}/tools`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: tools.map((tool, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: tool.title,
        url: `${baseUrl}${tool.href}`,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-50 transition-colors duration-500">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* --- HEADER & SEARCH SECTION --- */}
      <section className="pt-16 pb-12 px-6 border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4">
                <Sparkles className="w-3 h-3" /> Professional Utility Suite
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 uppercase italic leading-[1.1]">
                Free Online Tools
              </h1>
              <p className="text-slate-500 dark:text-slate-400 font-bold text-lg">
                Privacy-first utilities engineered for{" "}
                <span className="text-indigo-600">Students</span>,{" "}
                <span className="text-emerald-600">Devs</span> &{" "}
                <span className="text-rose-600">Creators</span>.
              </p>
            </div>

            {/* SEARCH BAR */}
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tools (e.g. PDF, SSC, Minify...)"
                className="w-full pl-14 pr-6 py-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold text-sm shadow-inner"
              />
            </div>
          </div>

          {/* CATEGORY FILTER */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  cat === activeCategory
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl scale-105"
                    : "bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 hover:border-indigo-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- TOOLS GRID --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {filteredTools.map((tool, index) => (
              <Link
                key={index}
                href={tool.href}
                className={`group relative flex flex-col justify-between p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-900/60 hover:border-indigo-500/50 transition-all duration-500 shadow-sm hover:shadow-2xl dark:shadow-none ${
                  tool.status === "Soon"
                    ? "pointer-events-none grayscale opacity-60"
                    : ""
                }`}
              >
                <div className="absolute top-6 right-6 text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700">
                  {tool.status}
                </div>
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-12 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg ${tool.color}`}
                >
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-black mb-2 flex items-center gap-1 leading-tight tracking-tight">
                    {tool.title}
                    {tool.status !== "Soon" && (
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    )}
                  </h3>
                  <p className="text-[11px] md:text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed font-bold uppercase tracking-tighter opacity-80">
                    {tool.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center flex flex-col items-center gap-4">
            <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-400">
              <Frown size={48} />
            </div>
            <h3 className="text-2xl font-black text-slate-800 dark:text-slate-200">
              No results for "{searchQuery}"
            </h3>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">
              Check spelling or try another category
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-700 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* --- TRUST & MISSION SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-100 dark:border-slate-900">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black italic tracking-tight leading-[1.1]">
              Engineered for <br />
              <span className="text-indigo-600">Privacy & Performance.</span>
            </h2>
            <div className="space-y-6">
              <BenefitItem
                icon={<Lock className="text-emerald-500" />}
                title="100% Client-Side"
                desc="We process your files in your browser. Your data is never uploaded to any server, ever."
              />
              <BenefitItem
                icon={<Zap className="text-blue-500" />}
                title="Extreme Speed"
                desc="No server latency. Calculations and conversions happen instantly using your device's power."
              />
              <BenefitItem
                icon={<ShieldCheck className="text-indigo-500" />}
                title="Zero Tracking"
                desc="No accounts, no subscriptions, and no invasive tracking. Just the tools you need."
              />
            </div>
          </div>

          <div className="bg-slate-900 p-12 rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full" />
            <h3 className="text-2xl font-black mb-6 uppercase tracking-widest italic flex items-center gap-2">
              <Users size={28} className="text-indigo-400" /> Community Choice
            </h3>
            <div className="space-y-4">
              <CheckLabel text="SSC, JEE & Govt Exam Candidates" />
              <CheckLabel text="SEO Experts & Content Writers" />
              <CheckLabel text="Full-Stack Developers & Engineers" />
              <CheckLabel text="Office Admins & Freelancers" />
            </div>
            <div className="mt-12 flex items-center gap-8">
              <div className="flex flex-col">
                <span className="text-4xl font-black italic tracking-tighter">
                  0KB
                </span>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                  Data Retained
                </span>
              </div>
              <div className="w-[1px] h-10 bg-slate-800" />
              <div className="flex flex-col">
                <span className="text-4xl font-black italic tracking-tighter text-indigo-400">
                  100%
                </span>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                  Uptime Score
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-100 dark:border-slate-900 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="font-black text-2xl tracking-tighter italic uppercase text-slate-900 dark:text-white">
            ToolKing.online
          </div>
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.4em] font-black">
            © 2026 • Secure Browser Utilities
          </p>
          <div className="mt-4 flex gap-6">
            <Link
              href="/privacy"
              className="text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

// HELPER COMPONENTS
function BenefitItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4 group">
      <div className="mt-1 p-3 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 transition-all group-hover:bg-white dark:group-hover:bg-slate-800 group-hover:shadow-lg">
        {icon}
      </div>
      <div>
        <p className="font-black text-sm uppercase tracking-tight text-slate-900 dark:text-white mb-1">
          {title}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-bold leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

function CheckLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-300">
      <CheckCircle2 className="text-emerald-500" size={16} /> {text}
    </div>
  );
}
