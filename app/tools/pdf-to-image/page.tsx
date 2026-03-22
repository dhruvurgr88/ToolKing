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
  Calendar,
  ListOrdered,
  Users,
  CheckCircle2,
  Info,
  MousePointer2,
  Scissors,
  FileStack,
  ImageIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free PDF to Image Converter - High Quality JPG/PNG | ToolKing",
  description:
    "Convert PDF pages to high-resolution JPG or PNG images instantly in your browser. 100% private, client-side processing. Select specific pages and download easily.",
  keywords: [
    "pdf to image",
    "pdf to jpg converter",
    "convert pdf to png",
    "extract images from pdf",
    "ToolKing",
    "free pdf tools",
    "high resolution pdf to jpg",
  ],
  alternates: {
    canonical: "https://toolking.online/tools/pdf-to-image",
  },
};

export default function PdfToImagePage() {
  const baseUrl = "https://toolking.online";
  const toolName = "PDF to Image";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: `${baseUrl}/tools`,
      },
      { "@type": "ListItem", position: 3, name: toolName },
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ToolKing PDF to Image Converter",
    operatingSystem: "Web",
    applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Professional browser-based tool to convert PDF pages into high-definition JPG or PNG images without server-side processing.",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to convert PDF to JPG or PNG online",
    step: [
      {
        "@type": "HowToStep",
        name: "Upload PDF",
        text: "Select the PDF file you wish to convert into images.",
      },
      {
        "@type": "HowToStep",
        name: "Choose Format",
        text: "Select your preferred output format (JPG for smaller size or PNG for quality).",
      },
      {
        "@type": "HowToStep",
        name: "Download Images",
        text: "Click 'Convert' and save your high-resolution images instantly.",
      },
    ],
  };

  const faqData = [
    {
      q: "Is this PDF to Image converter free?",
      a: "Yes, ToolKing is 100% free with no watermarks or hidden costs. You can convert any number of PDF pages to high-quality images.",
    },
    {
      q: "Which is better for PDF conversion: JPG or PNG?",
      a: "Choose JPG for smaller file sizes suitable for web sharing. Choose PNG if your PDF has small text or technical drawings, as it provides lossless quality.",
    },
    {
      q: "Are my PDF documents safe?",
      a: "Absolutely. ToolKing uses local browser processing. Your PDF never leaves your computer, ensuring total privacy for sensitive documents.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <article className="max-w-6xl mx-auto px-6 py-12">
      {/* --- SCHEMAS --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* --- HEADER --- */}
      <header className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <FileImage className="w-3 h-3" /> High Definition Export
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-rose-600 to-slate-900 dark:from-white dark:via-rose-400 dark:to-white bg-clip-text text-transparent leading-[1.1]">
          Free PDF to Image Converter
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
          <span className="flex items-center gap-1">
            <Calendar size={12} /> Updated: March 2026
          </span>
          <span className="w-1 h-1 bg-slate-300 rounded-full" />
          <a
            href="#how-to"
            className="hover:text-rose-600 transition-colors underline underline-offset-4 tracking-widest"
          >
            How to use
          </a>
          <span className="w-1 h-1 bg-slate-300 rounded-full" />
          <a
            href="#use-cases"
            className="hover:text-rose-600 transition-colors underline underline-offset-4 tracking-widest"
          >
            Who is it for?
          </a>
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          Use this <strong>free online PDF to image converter</strong> to
          instantly transform PDF pages into high-resolution JPG or PNG images
          without losing quality or compromising your data privacy.
        </p>
      </header>

      <ToolWrapper />

      {/* --- MID-CONTENT INTERNAL LINKS --- */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-6 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 text-center">
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
          Boost Your PDF Workflow:
        </p>
        <Link
          href="/tools/image-to-pdf"
          className="flex items-center gap-2 text-indigo-600 font-black text-sm hover:underline"
        >
          <ImageIcon size={14} /> Image to PDF
        </Link>
        <Link
          href="/tools/pdf-splitter"
          className="flex items-center gap-2 text-rose-600 font-black text-sm hover:underline"
        >
          <Scissors size={14} /> Split PDF Files
        </Link>
        <Link
          href="/tools/pdf-merger"
          className="flex items-center gap-2 text-emerald-600 font-black text-sm hover:underline"
        >
          <FileStack size={14} /> Merge PDF Files
        </Link>
      </div>

      {/* --- DEEP DIVE CONTENT --- */}
      <section id="how-to" className="mt-24 grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-tight italic">
            Extract High-Resolution Images from PDF
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium">
            This <strong>free online PDF to image converter</strong> helps you
            transform PDF pages into JPG, PNG, and high-fidelity formats
            instantly without losing resolution. Whether you are extracting
            graphics for a presentation or sharing document pages on{" "}
            <strong>Instagram or LinkedIn</strong>, ToolKing provides precision
            rendering locally in your browser.
          </p>

          <h2
            id="use-cases"
            className="text-2xl font-black mb-4 flex items-center gap-2 text-slate-900 dark:text-white uppercase tracking-tighter"
          >
            <Users size={20} className="text-rose-500" /> Who should use this
            converter tool?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-rose-500" /> Social Media
              managers for sharing docs
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-rose-500" /> Students
              extracting figures for reports
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-rose-500" /> Designers
              converting vector to raster
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-rose-500" /> Professionals
              creating slide decks
            </li>
          </ul>

          <div className="p-6 bg-rose-500/5 rounded-2xl border border-rose-500/10">
            <h2 className="text-xl font-black mb-3 flex items-center gap-2 text-rose-600">
              <FileType size={20} /> Supported Case Formats
            </h2>
            <p className="text-xs text-slate-500 font-bold italic tracking-tight">
              ToolKing supports uncompressed conversion to JPG and PNG with
              support for multi-page extraction and batch downloads.
            </p>
          </div>
        </div>

        <div id="faqs">
          <h2 className="text-3xl font-black mb-8 tracking-tight text-slate-900 dark:text-white">
            Common Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 transition-all hover:border-rose-500/50"
              >
                <h3 className="font-bold text-md mb-2 flex items-center gap-2 text-rose-600 italic">
                  <HelpCircle className="w-4 h-4" /> {item.q}
                </h3>
                <p className="text-slate-500 leading-relaxed text-xs font-bold">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-amber-500/5 rounded-2xl border border-amber-500/10 flex gap-3 italic text-[10px] text-amber-600 font-black uppercase tracking-widest">
            <Info className="shrink-0 w-4 h-4" />
            Pro Tip: Use PNG format if you plan on printing the converted images
            or if they contain complex infographics to maintain maximum clarity.
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="mt-32 p-12 bg-rose-600 rounded-[3.5rem] text-white text-center shadow-2xl shadow-rose-500/20">
        <h3 className="text-2xl font-black mb-6 italic underline decoration-rose-400">
          Maximize Productivity
        </h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <RelatedTool href="/tools/pdf-merger" title="PDF Merger" />
          <RelatedTool href="/tools/image-compressor" title="Compressor" />
          <RelatedTool href="/tools/age-calculator" title="Age Calc" />
          <RelatedTool href="/tools/qr-code-generator" title="QR Gen" />
        </div>
        <div className="mt-12 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] opacity-50">
          <Info className="w-3 h-3" /> ToolKing Utility Engine v2.0
        </div>
      </footer>
    </article>
  );
}

function RelatedTool({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-rose-200 transition-all text-nowrap"
    >
      {title}{" "}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}
