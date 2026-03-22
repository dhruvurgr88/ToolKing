import { Metadata } from "next";
import ToolWrapper from "../pdf-merger/ToolWrapper";
import FAQItem from "../../components/FAQItem";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  Lock,
  FileStack,
  Combine,
  ArrowRight,
  Scaling,
  Calendar,
  ListOrdered,
  HelpCircle,
  Users,
  CheckCircle2,
  Info,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Merge PDF Online - Combine PDF Files for Free | ToolKing",
  description:
    "Combine multiple PDF files into one document instantly in your browser. No registration, no watermarks, and 100% private. Best free PDF joiner.",
  keywords: [
    "merge pdf online",
    "combine pdf files",
    "pdf joiner free",
    "ToolKing",
    "merge multiple pdfs",
    "secure pdf merger no upload",
  ],
  alternates: {
    canonical: "https://toolking.online/tools/pdf-merger",
  },
};

export default function PdfMergerPage() {
  const baseUrl = "https://toolking.online";
  const toolName = "PDF Merger";

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
    name: "ToolKing PDF Merger",
    operatingSystem: "Web",
    applicationCategory: "UtilitiesApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Professional browser-based tool to combine multiple PDF files into a single document without server uploads.",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to merge PDF files online for free",
    step: [
      {
        "@type": "HowToStep",
        name: "Upload PDFs",
        text: "Select or drag all the PDF documents you want to join together.",
      },
      {
        "@type": "HowToStep",
        name: "Arrange Order",
        text: "Drag the file thumbnails to reorder them exactly how you want the final PDF to look.",
      },
      {
        "@type": "HowToStep",
        name: "Download Merged File",
        text: "Click the 'Merge' button to join the data streams and download your combined PDF instantly.",
      },
    ],
  };

  const faqData = [
    {
      q: "How many PDFs can I merge at once?",
      a: "There is no hard software limit on ToolKing. You can merge 2 or 50+ PDFs at once; the only limit is your device's available RAM.",
    },
    {
      q: "Is it safe to merge sensitive bank statements on ToolKing?",
      a: "Absolutely. ToolKing processes your files locally in your browser. Your documents never leave your computer and are never uploaded to any server, making it 100% safe for private bank statements.",
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <Lock className="w-3 h-3" /> Secure Local Merging
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-indigo-600 to-slate-900 dark:from-white dark:via-indigo-400 dark:to-white bg-clip-text text-transparent leading-[1.1]">
          Combine PDF Files <br /> Instantly
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
          <span className="flex items-center gap-1">
            <Calendar size={12} /> Updated: March 2026
          </span>
          <span className="w-1 h-1 bg-slate-300 rounded-full" />
          <a
            href="#how-to"
            className="hover:text-indigo-600 transition-colors underline underline-offset-4 tracking-widest"
          >
            How to use
          </a>
          <span className="w-1 h-1 bg-slate-300 rounded-full" />
          <a
            href="#faqs"
            className="hover:text-indigo-600 transition-colors underline underline-offset-4 tracking-widest"
          >
            FAQs
          </a>
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          Use this <strong>free online PDF merger</strong> to combine multiple
          PDF files into one document instantly without losing quality or
          compromising privacy.
        </p>
      </header>

      <ToolWrapper />

      {/* --- MID-CONTENT INTERNAL LINKS --- */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-6 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 text-center">
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
          Essential PDF Toolkit:
        </p>
        <Link
          href="/tools/pdf-splitter"
          className="flex items-center gap-2 text-rose-600 font-black text-sm hover:underline"
        >
          <Combine size={14} /> Split PDF Files
        </Link>
        <Link
          href="/tools/image-to-pdf"
          className="flex items-center gap-2 text-indigo-600 font-black text-sm hover:underline"
        >
          <FileText size={14} /> Image to PDF
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
            Merge Multiple PDF Documents Offline
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium">
            Combining documents like bank statements, medical reports, or
            project assignments into a single file should be fast and secure.
            Our <strong>PDF joiner tool</strong> merges actual data streams
            locally, ensuring no compression artifacts. This{" "}
            <strong>free online PDF merger</strong> is the safest way to manage
            sensitive documents because your data never touches our servers.
          </p>

          <h2
            id="use-cases"
            className="text-2xl font-black mb-4 flex items-center gap-2 text-slate-900 dark:text-white uppercase tracking-tighter"
          >
            <Users size={20} className="text-indigo-500" /> Who should use this
            PDF merger?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-indigo-500" />{" "}
              Professionals joining reports
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-indigo-500" /> Students
              merging assignments
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-indigo-500" /> Users
              joining bank statements
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-indigo-500" /> Legal
              clerks merging files
            </li>
          </ul>

          <div className="p-6 bg-indigo-500/5 rounded-2xl border border-indigo-500/10">
            <h2 className="text-xl font-black mb-3 flex items-center gap-2 text-indigo-600">
              <FileStack size={20} /> Privacy-First Architecture
            </h2>
            <p className="text-xs text-slate-500 font-bold italic tracking-tight">
              ToolKing supports high-resolution merging of encrypted data
              streams without server-side storage or watermarks.
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
                className="p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 transition-all hover:border-indigo-500/50"
              >
                <h3 className="font-bold text-md mb-2 flex items-center gap-2 text-indigo-600 italic">
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
            Pro Tip: You can drag and drop file thumbnails to adjust their order
            before merging to ensure your final document is correctly sequenced.
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="mt-32 p-12 bg-indigo-600 rounded-[3.5rem] text-white text-center shadow-2xl shadow-indigo-500/20">
        <h3 className="text-2xl font-black mb-6 italic underline decoration-indigo-400">
          Maximize Productivity
        </h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <RelatedTool href="/tools/pdf-splitter" title="PDF Splitter" />
          <RelatedTool href="/tools/image-compressor" title="Compressor" />
          <RelatedTool href="/tools/age-calculator" title="Age Calc" />
          <RelatedTool href="/tools/qr-code-generator" title="QR Gen" />
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
      className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-indigo-200 transition-all"
    >
      {title}{" "}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}
