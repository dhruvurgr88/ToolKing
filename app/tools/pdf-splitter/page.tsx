import { Metadata } from "next";
import ToolWrapper from "./ToolWrapper";
import Link from "next/link";
import {
  Scissors,
  ShieldCheck,
  Zap,
  FileStack,
  ArrowRight,
  HelpCircle,
  Lock,
  FileSearch,
  Calendar,
  ListOrdered,
  Users,
  CheckCircle2,
  Info,
  FileType,
  MousePointer2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Online PDF Splitter - Extract Pages Instantly | ToolKing",
  description:
    "Split PDF files into individual pages or extract specific ranges online for free. 100% private, client-side processing. No file limits, no registration required.",
  keywords: [
    "free pdf splitter",
    "extract pdf pages",
    "split pdf online",
    "separate pdf pages",
    "pdf tools",
    "ToolKing",
    "split pdf by range",
  ],
  alternates: {
    canonical: "https://toolking.online/tools/pdf-splitter",
  },
};

export default function PdfSplitterPage() {
  const baseUrl = "https://toolking.online";
  const toolName = "PDF Splitter";

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
    name: "ToolKing PDF Splitter",
    operatingSystem: "Web",
    applicationCategory: "UtilitiesApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Professional online PDF splitter to extract pages or split documents into smaller files instantly without server uploads.",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to split PDF files online for free",
    step: [
      {
        "@type": "HowToStep",
        name: "Upload PDF",
        text: "Select or drag your PDF document into the splitter tool.",
      },
      {
        "@type": "HowToStep",
        name: "Select Range",
        text: "Choose specific pages to extract or select a range for splitting.",
      },
      {
        "@type": "HowToStep",
        name: "Extract & Download",
        text: "Click 'Split' and download your new PDF files instantly.",
      },
    ],
  };

  const faqData = [
    {
      q: "Is there a file size limit for splitting PDFs?",
      a: "No. Since ToolKing processes files locally on your own device, you can split PDFs as large as your browser's memory allows, typically up to 500MB+.",
    },
    {
      q: "Does splitting a PDF reduce its quality?",
      a: "Never. ToolKing extracts the original data streams without re-compressing images, ensuring your text and graphics remain pixel-perfect.",
    },
    {
      q: "Can I extract specific pages from a PDF?",
      a: "Yes, you can enter custom ranges (e.g., 1, 5, 10-15) to extract exactly the pages you need into a new document.",
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
          <Scissors className="w-3 h-3" /> Professional Grade
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-rose-600 to-slate-900 dark:from-white dark:via-rose-400 dark:to-white bg-clip-text text-transparent leading-[1.1]">
          Free Online PDF Splitter
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
            How it works
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
          Use this <strong>free online PDF splitter</strong> to instantly
          extract pages or separate PDF files into smaller documents without
          losing quality or performance.
        </p>
      </header>

      <ToolWrapper />

      {/* --- MID-CONTENT INTERNAL LINKS --- */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-6 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 text-center">
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest text-nowrap">
          Boost Your PDF Toolkit:
        </p>
        <Link
          href="/tools/pdf-merger"
          className="flex items-center gap-2 text-indigo-600 font-black text-sm hover:underline"
        >
          <FileStack size={14} /> PDF Merger
        </Link>
        <Link
          href="/tools/image-to-pdf"
          className="flex items-center gap-2 text-rose-600 font-black text-sm hover:underline"
        >
          <FileType size={14} /> Image to PDF
        </Link>
        <Link
          href="/tools/pdf-to-image"
          className="flex items-center gap-2 text-blue-600 font-black text-sm hover:underline"
        >
          <Zap size={14} /> PDF to Image
        </Link>
      </div>

      {/* --- DEEP DIVE CONTENT --- */}
      <section id="how-to" className="mt-24 grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-tight italic">
            Extract Specific PDF Pages Online
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium">
            Managing massive PDF documents can be difficult. Whether you need to{" "}
            <strong>separate PDF pages</strong> for a bank statement or extract
            specific chapters from an ebook, our tool provides a 100% private
            solution. Unlike other tools that upload your data, ToolKing's{" "}
            <strong>PDF page extractor</strong> works entirely in your browser,
            keeping your sensitive documents secure.
          </p>

          <h2
            id="use-cases"
            className="text-2xl font-black mb-4 flex items-center gap-2 text-slate-900 dark:text-white uppercase tracking-tighter"
          >
            <Users size={20} className="text-rose-500" /> Who should use this
            PDF splitter?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-rose-500" /> Office admins
              extracting invoices
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-rose-500" /> Students
              splitting study material
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-rose-500" /> Lawyers
              separating legal filings
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-rose-500" /> Users
              splitting bank statements
            </li>
          </ul>

          <div className="p-6 bg-rose-500/5 rounded-2xl border border-rose-500/10">
            <h2 className="text-xl font-black mb-3 flex items-center gap-2 text-rose-600">
              <FileSearch size={20} /> Quality Preservation
            </h2>
            <p className="text-xs text-slate-500 font-bold italic tracking-tight">
              ToolKing supports high-resolution extraction without
              re-compressing your document, maintaining the original quality of
              text and images.
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
            Pro Tip: You can enter page ranges like '1-3, 7, 10' to extract
            non-consecutive pages into a single new document.
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="mt-32 p-12 bg-rose-600 rounded-[3.5rem] text-white text-center shadow-2xl shadow-rose-500/20">
        <h3 className="text-2xl font-black mb-6 italic underline decoration-rose-400">
          Maximize PDF Productivity
        </h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <RelatedTool href="/tools/pdf-merger" title="PDF Merger" />
          <RelatedTool href="/tools/image-compressor" title="Compressor" />
          <RelatedTool href="/tools/age-calculator" title="Age Calc" />
          <RelatedTool href="/tools/barcode-generator" title="Barcode Gen" />
        </div>
        <div className="mt-12 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] opacity-50">
          <Info className="w-3 h-3" /> ToolKing PDF Engine v2.0
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
