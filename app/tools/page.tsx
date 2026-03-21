import React from "react";
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
} from "lucide-react";

export const metadata = {
  title: "All Online PDF & AI Tools - ToolKing Gallery",
  description:
    "Browse our complete library of free, private online tools. From Image to PDF conversion to advanced Word Counters and PDF Merging.",
};

// 1. UPDATED TOOLS ARRAY (With PDF Merger linked and Roadmap tools)
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
    title: "PDF Merger",
    desc: "Combine multiple PDFs into one file.",
    icon: <FileStack className="w-6 h-6" />,
    href: "/tools/pdf-merger", // LINKED NOW
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    category: "PDF",
    status: "New",
  },
  {
    title: "Word Counter",
    desc: "Analyze text length, words & stats.",
    icon: <FileText className="w-6 h-6" />,
    href: "/tools/word-counter",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    category: "Text",
    status: "Free",
  },
  {
    title: "JSON Formatter",
    desc: "Prettify, validate, and minify your JSON data instantly.",
    icon: <Braces className="w-6 h-6" />,
    href: "/tools/json-formatter",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    category: "Developer",
    status: "Hot",
  },
  {
    title: "QR Generator",
    desc: "Create high-quality, custom QR codes for URLs and Wi-Fi.",
    icon: <QrCode className="w-6 h-6" />,
    href: "/tools/qr-code-generator",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    category: "Business",
    status: "Popular",
  },
  {
    title: "Password Generator",
    desc: "Create ultra-secure, random passwords with zero-knowledge privacy.",
    icon: <Lock className="w-6 h-6" />,
    href: "/tools/password-generator",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    category: "Security",
    status: "New",
  },
  {
    title: "PDF to Image",
    desc: "Convert PDF pages into high-quality JPG or PNG images instantly.",
    icon: <FileImage className="w-6 h-6" />,
    href: "/tools/pdf-to-image",
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    category: "PDF",
    status: "New",
  },
  {
    title: "Image Compressor",
    desc: "Reduce image file size by up to 90% without losing quality.",
    icon: <Zap className="w-6 h-6" />,
    href: "/tools/image-compressor",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    category: "Image",
    status: "Hot",
  },
  {
    title: "Barcode Generator",
    desc: "Generate professional Code 128, EAN-13, and UPC barcodes for retail.",
    icon: <Barcode className="w-6 h-6" />, // Ensure Barcode is imported from lucide-react
    href: "/tools/barcode-generator",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    category: "Business", // Changed from Text to Business for better organization
    status: "New",
  },
  {
    title: "URL Shortener",
    desc: "Create short, clean, and trackable links for social media instantly.",
    icon: <Link2 className="w-6 h-6" />, // Ensure Link2 is imported from lucide-react
    href: "/tools/url-shortener",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    category: "Marketing",
    status: "New",
  },
  {
    title: "Case Converter",
    desc: "Transform text to UPPERCASE, lowercase, Title Case, camelCase, and more.",
    icon: <Type className="w-6 h-6" />,
    href: "/tools/case-converter",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    category: "Text",
    status: "New",
  },
  {
    title: "PDF Splitter",
    desc: "Extract specific pages or split large PDFs instantly.",
    icon: <Scissors className="w-6 h-6" />, // Ensure Scissor is imported from lucide-react
    href: "/tools/pdf-splitter",
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    category: "PDF",
    status: "New", // Changed from 'Soon' to 'New'
  },
  {
    title: "Unlock PDF",
    desc: "Remove passwords from PDF files.",
    icon: <EyeOff className="w-6 h-6" />,
    href: "#",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    category: "PDF",
    status: "Soon",
  },
  {
    title: "AI Translator",
    desc: "Translate documents with AI.",
    icon: <Languages className="w-6 h-6" />,
    href: "#",
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    category: "AI",
    status: "Soon",
  },
];

export default function ToolsGallery() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-50 transition-colors duration-500">
      {/* 1. HEADER & SEARCH SECTION */}
      <section className="pt-12 pb-8 px-6 border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2 uppercase italic">
                Free Online Tools
              </h1>
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                Professional utilities engineered for privacy and speed.
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search 10+ tools..."
                className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {["All", "PDF", "Text", "AI", "Images"].map((cat) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  cat === "All"
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
                    : "bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 hover:border-indigo-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. THE UNIFORM GRID (2 columns mobile, 4 columns desktop) */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {tools.map((tool, index) => (
            <Link
              key={index}
              href={tool.href}
              className={`group relative flex flex-col justify-between p-6 md:p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-900/60 hover:border-indigo-500/50 transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-none ${tool.status === "Soon" ? "pointer-events-none grayscale-[0.5]" : ""}`}
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4 text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700">
                {tool.status}
              </div>

              {/* Icon Container */}
              <div
                className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-10 transition-transform group-hover:scale-110 ${tool.color}`}
              >
                {tool.icon}
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-base md:text-xl font-bold mb-1 flex items-center gap-1 leading-tight">
                  {tool.title}
                  {tool.status !== "Soon" && (
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                  )}
                </h3>
                <p className="text-[10px] md:text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. TRUST BANNER */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="p-8 md:p-12 rounded-[3rem] bg-indigo-600 text-white overflow-hidden relative shadow-2xl shadow-indigo-500/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-black mb-2 flex items-center justify-center md:justify-start gap-2 italic">
                <Lock className="w-6 h-6" /> PRIVATE BY DESIGN
              </h2>
              <p className="text-indigo-100 max-w-sm text-sm">
                No uploads. No tracking. ToolKing processes your data strictly
                within your browser.
              </p>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black italic">0</span>
                <span className="text-[10px] uppercase font-black tracking-widest opacity-70">
                  Server Storage
                </span>
              </div>
              <div className="w-[1px] h-12 bg-white/20" />
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black italic">100%</span>
                <span className="text-[10px] uppercase font-black tracking-widest opacity-70">
                  Local Process
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-100 dark:border-slate-900 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="font-black text-xl tracking-tighter italic">
            TOOLKING
          </div>
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold">
            © 2026 • Engineered for Students
          </p>
        </div>
      </footer>
    </div>
  );
}
