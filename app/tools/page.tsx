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
  ArrowRight,
  ShieldCheck,
  Frown,
  FileType,
  Unlock,
} from "lucide-react";

// 1. DATA DEFINITIONS
const tools = [
  {
    title: "PDF to Word",
    desc: "Convert PDF documents to editable DOCX files safely in your browser.",
    icon: <FileText className="w-6 h-6" />,
    href: "/tools/pdf-to-word",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    category: "PDF",
    status: "Popular",
  },
  {
    title: "Protect PDF",
    desc: "Lock your PDF with a secure password using private browser-side encryption.",
    icon: <Lock className="w-6 h-6" />,
    href: "/tools/protect-pdf",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    category: "PDF",
    status: "New",
  },
  {
    title: "Image Compressor",
    desc: "Reduce file size for SSC & Govt exam portals without losing quality.",
    icon: <Zap className="w-6 h-6" />,
    href: "/tools/image-compressor",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    category: "Image",
    status: "Hot",
  },
  {
    title: "Age Calculator",
    desc: "Calculate exact age for exam forms & birth dates instantly.",
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
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
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
    icon: <ShieldCheck className="w-6 h-6" />,
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
    title: "AI Summarizer",
    desc: "Summarize long articles and reports using AI context.",
    icon: <Sparkles className="w-6 h-6" />,
    href: "/tools/ai-summarizer",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    category: "AI",
    status: "New",
  },
  {
    title: "Barcode Generator",
    desc: "Create professional Code 128 & EAN barcodes.",
    icon: <Barcode className="w-6 h-6" />,
    href: "/tools/barcode-generator",
    color: "bg-slate-500/10 text-slate-600 dark:text-slate-400",
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
    title: "Word to PDF",
    desc: "Transform Word documents into high-quality PDFs.",
    icon: <FileType className="w-6 h-6" />,
    href: "/tools/word-to-pdf",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    category: "PDF",
    status: "New",
  },
  {
    title: "Unlock PDF",
    desc: "Remove password protection from PDF files.",
    icon: <Unlock className="w-6 h-6" />,
    href: "/tools/unlock-pdf",
    color: "bg-slate-500/10 text-slate-600 dark:text-slate-400",
    category: "PDF",
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
  "AI",
];

export default function ToolsGallery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const baseUrl = "https://toolking.online";

  // FILTER LOGIC
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

  // JSON-LD SCHEMA
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "ToolKing Online Tools Gallery",
    description:
      "Secure, private online tools for PDF, Image, and Text transformation.",
    url: `${baseUrl}/tools`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: tools.map((tool, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareApplication",
          name: tool.title,
          url: `${baseUrl}${tool.href}`,
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Web",
        },
      })),
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-50 transition-colors duration-500">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* --- HEADER & SEARCH --- */}
      <section className="pt-20 pb-12 px-6 border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4">
                <Sparkles className="w-3 h-3" /> Professional Utility Suite
              </div>
              <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-4 uppercase italic leading-[0.9]">
                The Tool <span className="text-indigo-600">Box</span>
              </h1>
              <p className="text-slate-500 dark:text-slate-400 font-bold text-lg md:text-xl">
                Privacy-first utilities engineered for{" "}
                <span className="text-indigo-600 underline decoration-indigo-200">
                  Students
                </span>
                ,{" "}
                <span className="text-emerald-600 underline decoration-emerald-200">
                  Devs
                </span>{" "}
                &{" "}
                <span className="text-rose-600 underline decoration-rose-200">
                  Creators
                </span>
                .
              </p>
            </div>

            <div className="relative w-full lg:w-96 group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tools (e.g. PDF, SSC, Word...)"
                className="w-full pl-14 pr-6 py-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold text-sm shadow-inner"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-10">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredTools.map((tool, index) => (
              <Link
                key={index}
                href={tool.href}
                className={`group relative flex flex-col justify-between p-8 rounded-[3rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-900/60 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl shadow-indigo-500/5 ${
                  tool.status === "Soon"
                    ? "pointer-events-none grayscale opacity-60"
                    : ""
                }`}
              >
                <div className="absolute top-8 right-8 text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700">
                  {tool.status}
                </div>

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm ${tool.color}`}
                >
                  {tool.icon}
                </div>

                <div>
                  <h3 className="text-lg font-black mb-2 flex items-center gap-1 leading-tight tracking-tight">
                    {tool.title}
                    {tool.status !== "Soon" && (
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-indigo-500" />
                    )}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed font-bold uppercase tracking-tighter opacity-80">
                    {tool.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center flex flex-col items-center gap-6">
            <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-full text-slate-400 border border-slate-100 dark:border-slate-800">
              <Frown size={64} strokeWidth={1} />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-black text-slate-800 dark:text-slate-200 italic">
                No Tools Found
              </h3>
              <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.3em]">
                "{searchQuery}" doesn't match our current library
              </p>
            </div>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20"
            >
              Show All Tools
            </button>
          </div>
        )}
      </section>

      {/* --- MISSION SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-t border-slate-100 dark:border-slate-900">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-[0.85] uppercase">
              Built for <br />
              <span className="text-indigo-600">Transparency.</span>
            </h2>
            <div className="space-y-8">
              <BenefitItem
                icon={<Lock className="text-emerald-500" />}
                title="Browser-Only Processing"
                desc="Files are processed locally using WebAssembly. Your data never touches our cloud."
              />
              <BenefitItem
                icon={<Zap className="text-blue-500" />}
                title="Lightning Fast"
                desc="No upload/download waiting times. Real-time processing on your hardware."
              />
              <BenefitItem
                icon={<ShieldCheck className="text-indigo-500" />}
                title="No Account Needed"
                desc="Completely free with no login, no paywalls, and zero tracking."
              />
            </div>
          </div>

          <div className="bg-slate-900 p-12 md:p-16 rounded-[4rem] text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 blur-[120px] rounded-full" />
            <h3 className="text-2xl font-black mb-8 uppercase tracking-[0.2em] italic flex items-center gap-3">
              <Users size={32} className="text-indigo-400" /> Platform Stats
            </h3>
            <div className="space-y-6 mb-12">
              <CheckLabel text="Approved for Govt Exam Portals" />
              <CheckLabel text="Optimized for SEO Professionals" />
              <CheckLabel text="Dev-Friendly Formatting Tools" />
              <CheckLabel text="Secure Document Encryption" />
            </div>
            <div className="flex items-center gap-12">
              <div className="flex flex-col">
                <span className="text-5xl font-black italic tracking-tighter">
                  0KB
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Data Logs
                </span>
              </div>
              <div className="w-[1px] h-12 bg-slate-800" />
              <div className="flex flex-col">
                <span className="text-5xl font-black italic tracking-tighter text-indigo-400">
                  100%
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Browser Based
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-100 dark:border-slate-900 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="font-black text-3xl tracking-tighter italic uppercase text-slate-900 dark:text-white">
            ToolKing<span className="text-indigo-600">.online</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {["Privacy", "Terms", "Sitemap", "Contact"].map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase()}`}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-indigo-600 transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
          <p className="text-[9px] text-slate-400 uppercase tracking-[0.5em] mt-4">
            © 2026 • Build with Security first
          </p>
        </div>
      </footer>
    </div>
  );
}

// COMPONENTS
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
    <div className="flex gap-5 group">
      <div className="mt-1 p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 transition-all group-hover:bg-white dark:group-hover:bg-slate-800 group-hover:shadow-xl group-hover:border-indigo-500/20">
        {icon}
      </div>
      <div>
        <p className="font-black text-sm uppercase tracking-tight text-slate-900 dark:text-white mb-1.5">
          {title}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-bold leading-relaxed max-w-sm">
          {desc}
        </p>
      </div>
    </div>
  );
}

function CheckLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-300">
      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
        <CheckCircle2 size={12} className="text-emerald-500" />
      </div>
      {text}
    </div>
  );
}
