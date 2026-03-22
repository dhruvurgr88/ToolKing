import { Metadata } from "next";
import ToolWrapper from "./ToolWrapper";
import Link from "next/link";
import {
  Layers,
  Zap,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  Scaling,
  Calendar,
  ListOrdered,
  Users,
  CheckCircle2,
  FileType,
  Info,
  Scissors,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Bulk Image Resizer - Resize Multiple Images Online | ToolKing",
  description:
    "Resize multiple images online for free. Batch resize JPG, PNG, or WebP images for websites, blogs, and social media. 100% private and secure.",
  keywords: [
    "bulk image resizer",
    "resize multiple images online",
    "batch image resizer free",
    "resize images for ssc",
    "ToolKing",
    "resize photos for instagram",
    "batch image resizer for web",
  ],
};

export default function BulkImageResizerPage() {
  const baseUrl = "https://toolking.online";
  const toolName = "Bulk Image Resizer";

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
    name: "ToolKing Bulk Image Resizer",
    operatingSystem: "Web",
    applicationCategory: "MultimediaApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Resize multiple images online for free using ToolKing. High-performance batch processing for JPG, PNG, and WebP.",
  };

  const faqData = [
    {
      q: "How to resize multiple images online at once?",
      a: "Simply drag and drop your images into the ToolKing resizer, set your dimensions (pixels or percentage), and click 'Resize All'. You can then download all files in a single ZIP.",
    },
    {
      q: "Is this batch image resizer safe for private photos?",
      a: "Yes. Unlike other tools, ToolKing processes your images locally in your browser. Your photos are never uploaded to our servers, ensuring 100% privacy.",
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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to use the Batch Image Resizer",
    step: [
      {
        "@type": "HowToStep",
        name: "Upload Images",
        text: "Select or drag multiple JPG, PNG, or WebP images into the upload area.",
      },
      {
        "@type": "HowToStep",
        name: "Set Dimensions",
        text: "Choose your required width, height, or use the percentage slider for scaling.",
      },
      {
        "@type": "HowToStep",
        name: "Download ZIP",
        text: "Click the process button and download all your resized images in one ZIP file.",
      },
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* --- HEADER --- */}
      <header className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <Layers className="w-3 h-3" /> Professional Batch Engine
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-emerald-600 to-slate-900 dark:from-white dark:via-emerald-400 dark:to-white bg-clip-text text-transparent leading-[1.1]">
          Free Bulk Image Resizer
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
          <span className="flex items-center gap-1">
            <Calendar size={12} /> Last Updated: March 2026
          </span>
          <span className="w-1 h-1 bg-slate-300 rounded-full" />
          <a
            href="#use-cases"
            className="hover:text-emerald-600 transition-colors underline underline-offset-4"
          >
            Who is it for?
          </a>
          <span className="w-1 h-1 bg-slate-300 rounded-full" />
          <a
            href="#faqs"
            className="hover:text-emerald-600 transition-colors underline underline-offset-4"
          >
            FAQs
          </a>
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          This{" "}
          <span className="text-emerald-600 font-bold italic">
            free batch image resizer
          </span>{" "}
          is ideal for resizing multiple images for websites, blogs, and social
          media platforms like Instagram and Pinterest without losing quality.
        </p>
      </header>

      <ToolWrapper />

      {/* --- MID-CONTENT INTERNAL LINKS --- */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-6 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
          Boost Your Workflow:
        </p>
        <Link
          href="/tools/pdf-to-image"
          className="flex items-center gap-2 text-indigo-600 font-black text-sm hover:underline"
        >
          <FileText size={14} /> PDF to Images
        </Link>
        <Link
          href="/tools/pdf-splitter"
          className="flex items-center gap-2 text-rose-600 font-black text-sm hover:underline"
        >
          <Scissors size={14} /> Split PDF Files
        </Link>
        <Link
          href="/tools/image-compressor"
          className="flex items-center gap-2 text-emerald-600 font-black text-sm hover:underline"
        >
          <Zap size={14} /> Compress Images
        </Link>
      </div>

      {/* --- DEEP DIVE CONTENT --- */}
      <section className="mt-24 grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-tight italic text-balance">
            Resize Multiple Images Online for Free
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium">
            This <strong>bulk image resizer</strong> helps you resize multiple
            images online for websites, blogs, and social media without losing
            quality or performance. Our{" "}
            <strong>batch image resizer for web & social media</strong>{" "}
            processes hundreds of files in seconds.
          </p>

          <div className="p-6 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 mb-8">
            <h2 className="text-xl font-black mb-3 flex items-center gap-2 text-emerald-600">
              <FileType size={20} /> Supported Formats
            </h2>
            <p className="text-sm text-slate-500 font-bold tracking-tight">
              JPG, PNG, and WebP supported for bulk resizing and high-fidelity
              output.
            </p>
          </div>

          <h2
            id="use-cases"
            className="text-2xl font-black mb-4 flex items-center gap-2 text-slate-900 dark:text-white"
          >
            <Users size={20} className="text-emerald-500" /> Who should use this
            tool?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-emerald-500" /> Bloggers &
              Content Creators
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-emerald-500" />{" "}
              Shopify/E-commerce Owners
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-emerald-500" /> SSC & Govt
              Exam Students
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-emerald-500" />{" "}
              Instagram/Pinterest Users
            </li>
          </ul>
        </div>

        <div id="faqs">
          <h2 className="text-3xl font-black mb-8 tracking-tight text-slate-900 dark:text-white">
            Common Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800"
              >
                <h3 className="font-bold text-md mb-2 flex items-center gap-2 text-emerald-600 italic">
                  <HelpCircle className="w-4 h-4" /> {item.q}
                </h3>
                <p className="text-slate-500 leading-relaxed text-xs font-bold">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="mt-32 p-12 bg-emerald-600 rounded-[3.5rem] text-white text-center shadow-2xl shadow-emerald-500/20">
        <h3 className="text-2xl font-black mb-6 italic underline decoration-emerald-400">
          Maximize Productivity
        </h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <RelatedTool href="/tools/image-compressor" title="Compressor" />
          <RelatedTool href="/tools/image-to-pdf" title="Img to PDF" />
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
      className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-emerald-200 transition-all"
    >
      {title}{" "}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}
