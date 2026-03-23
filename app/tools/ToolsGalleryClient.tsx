"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  ArrowUpRight,
  Frown,
  ImageIcon,
  FileText,
  Lock,
  FileStack,
  Braces,
  QrCode,
  ShieldCheck,
  FileImage,
  Zap,
  Sparkles,
  Barcode,
  Link2,
  Type,
  Scissors,
  Layers,
  FileType,
  Languages,
  EyeOff,
  CalendarDays,
  Unlock,
} from "lucide-react";

const tools = [
  // --- ROW 1: PDF CORE ---
  {
    title: "PDF to Word",
    desc: "Convert PDF to editable DOCX safely.",
    icon: <FileText className="w-6 h-6" />,
    href: "/tools/pdf-to-word",
    color: "bg-blue-500/10 text-blue-600",
    category: "PDF",
    status: "Popular",
  },
  {
    title: "Word to PDF",
    desc: "Transform Word documents into professional PDF files instantly.",
    icon: <FileType className="w-6 h-6" />,
    href: "/tools/word-to-pdf",
    color: "bg-indigo-500/10 text-indigo-600",
    category: "PDF",
    status: "New",
  },
  {
    title: "Protect PDF",
    desc: "Lock PDF with secure browser-side encryption.",
    icon: <Lock className="w-6 h-6" />,
    href: "/tools/protect-pdf",
    color: "bg-amber-500/10 text-amber-600",
    category: "PDF",
    status: "Secure",
  },
  {
    title: "Unlock PDF",
    desc: "Remove password protection and restrictions from encrypted PDF files.",
    icon: <Unlock className="w-6 h-6" />,
    href: "/tools/unlock-pdf",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    category: "PDF",
    status: "New",
  },

  // --- ROW 2: PDF UTILITIES ---
  {
    title: "PDF Merger",
    desc: "Combine multiple PDFs into one file securely.",
    icon: <FileStack className="w-6 h-6" />,
    href: "/tools/pdf-merger",
    color: "bg-orange-500/10 text-orange-600",
    category: "PDF",
    status: "Hot",
  },
  {
    title: "PDF Splitter",
    desc: "Separate PDF pages or extract custom ranges.",
    icon: <Scissors className="w-6 h-6" />,
    href: "/tools/pdf-splitter",
    color: "bg-rose-500/10 text-rose-600",
    category: "PDF",
    status: "New",
  },
  {
    title: "PDF to Image",
    desc: "Extract PDF pages into high-quality JPG/PNG.",
    icon: <FileImage className="w-6 h-6" />,
    href: "/tools/pdf-to-image",
    color: "bg-rose-500/10 text-rose-600",
    category: "PDF",
    status: "New",
  },

  // --- ROW 3: IMAGE TOOLS ---
  {
    title: "Image Compressor",
    desc: "Reduce file size for SSC & Govt exam portals.",
    icon: <Zap className="w-6 h-6" />,
    href: "/tools/image-compressor",
    color: "bg-indigo-500/10 text-indigo-600",
    category: "Image",
    status: "Hot",
  },
  {
    title: "Bulk Image Resizer",
    desc: "Resize multiple images at once for web and social media.",
    icon: <Layers className="w-6 h-6" />,
    href: "/tools/bulk-image-resizer",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    category: "Image",
    status: "New",
  },
  {
    title: "Image to PDF",
    desc: "Convert JPG, PNG, WebP to PDF instantly.",
    icon: <ImageIcon className="w-6 h-6" />,
    href: "/tools/image-to-pdf",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    category: "Image",
    status: "Popular",
  },

  // --- ROW 4: TEXT & CONTENT ---
  {
    title: "Word Counter",
    desc: "Analyze text length, words & reading time.",
    icon: <FileText className="w-6 h-6" />,
    href: "/tools/word-counter",
    color: "bg-emerald-500/10 text-emerald-600",
    category: "Text",
    status: "Free",
  },
  {
    title: "Case Converter",
    desc: "Change text to UPPER, lower, & Title case.",
    icon: <Type className="w-6 h-6" />,
    href: "/tools/case-converter",
    color: "bg-blue-500/10 text-blue-600",
    category: "Text",
    status: "New",
  },
  {
    title: "AI Summarizer",
    desc: "Summarize long articles and reports using AI.",
    icon: <Sparkles className="w-6 h-6" />,
    href: "/tools/ai-summarizer",
    color: "bg-indigo-500/10 text-indigo-600",
    category: "AI",
    status: "New",
  },

  // --- ROW 5: BUSINESS & DEV ---
  {
    title: "QR Generator",
    desc: "Create branded QR codes for WhatsApp & URLs.",
    icon: <QrCode className="w-6 h-6" />,
    href: "/tools/qr-code-generator",
    color: "bg-blue-500/10 text-blue-600",
    category: "Business",
    status: "Popular",
  },
  {
    title: "Barcode Generator",
    desc: "Create professional Code 128 & EAN barcodes for products.",
    icon: <Barcode className="w-6 h-6" />,
    href: "/tools/barcode-generator",
    color: "bg-slate-500/10 text-slate-600 dark:text-slate-400",
    category: "Business",
    status: "New",
  },
  {
    title: "Password Generator",
    desc: "Generate ultra-secure entropy passwords.",
    icon: <ShieldCheck className="w-6 h-6" />,
    href: "/tools/password-generator",
    color: "bg-emerald-500/10 text-emerald-600",
    category: "Security",
    status: "New",
  },
  {
    title: "URL Shortener",
    desc: "Shorten links with custom branded aliases.",
    icon: <Link2 className="w-6 h-6" />,
    href: "/tools/url-shortener",
    color: "bg-blue-500/10 text-blue-600",
    category: "Marketing",
    status: "New",
  },
  {
    title: "JSON Formatter",
    desc: "Prettify, validate, and minify JSON code.",
    icon: <Braces className="w-6 h-6" />,
    href: "/tools/json-formatter",
    color: "bg-indigo-500/10 text-indigo-600",
    category: "Developer",
    status: "Hot",
  },
  {
    title: "Age Calculator",
    desc: "Calculate exact age for exam forms & dates.",
    icon: <CalendarDays className="w-6 h-6" />,
    href: "/tools/age-calculator",
    color: "bg-emerald-500/10 text-emerald-600",
    category: "Utility",
    status: "New",
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
  "AI",
];

export default function ToolsGalleryClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

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

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* SEARCH & FILTER UI */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 20+ tools..."
            className="w-full pl-14 pr-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold text-sm"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                cat === activeCategory
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-lg"
                  : "bg-slate-50 dark:bg-slate-900 text-slate-500 border border-slate-200 dark:border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTools.map((tool, index) => (
            <Link
              key={index}
              href={tool.href}
              className="group relative p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-indigo-500/50 transition-all hover:shadow-2xl"
            >
              <div className="absolute top-6 right-6 text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
                {tool.status}
              </div>
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-8 shadow-sm ${tool.color}`}
              >
                {tool.icon}
              </div>
              <h3 className="text-lg font-black mb-2 flex items-center gap-1">
                {tool.title}{" "}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-tighter opacity-80">
                {tool.desc}
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center flex flex-col items-center gap-4">
          <Frown size={48} className="text-slate-300" />
          <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">
            No tools found for "{searchQuery}"
          </p>
        </div>
      )}
    </div>
  );
}
