import { Metadata } from "next";
import ToolWrapper from "./ToolWrapper";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  Lock,
  Star,
  FileCheck,
  MousePointerClick,
  ArrowRight,
  Image as ImageIcon,
  Scaling,
  Calendar,
  ListOrdered,
  HelpCircle,
  Users,
  CheckCircle2,
  FileType,
  Info,
  Link as LinkIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Image to PDF Converter Online - No Limits | ToolKing",
  description:
    "Convert JPG, PNG, and WebP images to PDF instantly in your browser. 100% private, no file limits, and no registration required. Professional high-quality PDF export.",
  keywords: [
    "image to pdf converter",
    "jpg to pdf online",
    "png to pdf",
    "convert webp to pdf free",
    "ToolKing",
    "merge images to pdf",
    "convert photos to pdf online",
  ],
  alternates: {
    canonical: "https://toolking.online/tools/image-to-pdf",
  },
};

export default function ImageToPdfPage() {
  const baseUrl = "https://toolking.online";
  const toolName = "Image to PDF";

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
    name: "ToolKing Image to PDF Converter",
    operatingSystem: "Web",
    applicationCategory: "UtilitiesApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "High-quality online converter to merge JPG, PNG, and WebP images into a single professional PDF document instantly without server uploads.",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to convert images to PDF online",
    step: [
      {
        "@type": "HowToStep",
        name: "Upload Images",
        text: "Select or drag your JPG, PNG, or WebP images into the tool area.",
      },
      {
        "@type": "HowToStep",
        name: "Reorder Files",
        text: "Arrange your images in the exact order you want them to appear in the PDF pages.",
      },
      {
        "@type": "HowToStep",
        name: "Generate PDF",
        text: "Click 'Convert to PDF' and download your merged document instantly.",
      },
    ],
  };

  const faqData = [
    {
      q: "Is this Image to PDF converter free?",
      a: "Yes, ToolKing is 100% free with no hidden charges, subscriptions, or watermarks. You can use it as much as you want without any restrictions.",
    },
    {
      q: "Is my data safe with ToolKing?",
      a: "Absolutely. Unlike other online converters, ToolKing processes your files directly in your browser. Your images are never uploaded to any server, ensuring 100% privacy.",
    },
    {
      q: "Can I convert multiple images into a single PDF?",
      a: "Yes, you can upload and merge 50+ images at once into a single high-quality PDF document using our batch processing engine.",
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <Lock className="w-3 h-3" /> 100% Private Browser Processing
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-indigo-600 to-slate-900 dark:from-white dark:via-indigo-400 dark:to-white bg-clip-text text-transparent leading-[1.1]">
          Free Image to PDF <br /> Converter Online
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
            How it works
          </a>
          <span className="w-1 h-1 bg-slate-300 rounded-full" />
          <a
            href="#use-cases"
            className="hover:text-indigo-600 transition-colors underline underline-offset-4 tracking-widest"
          >
            Who is it for?
          </a>
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          Use this <strong>free online image to PDF converter</strong> to
          instantly convert text and images to PDF format without losing
          formatting. Merge JPG, PNG, or WebP images into a single professional
          document securely.
        </p>
      </header>

      <ToolWrapper />

      {/* --- MID-CONTENT INTERNAL LINKS --- */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-6 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 text-center">
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
          Complete Your Document:
        </p>
        <Link
          href="/tools/image-compressor"
          className="flex items-center gap-2 text-blue-600 font-black text-sm hover:underline"
        >
          <Zap size={14} /> Image Compressor
        </Link>
        <Link
          href="/tools/pdf-merger"
          className="flex items-center gap-2 text-indigo-600 font-black text-sm hover:underline"
        >
          <Scaling size={14} /> PDF Merger
        </Link>
        <Link
          href="/tools/url-shortener"
          className="flex items-center gap-2 text-emerald-600 font-black text-sm hover:underline"
        >
          <LinkIcon size={14} /> Shorten URLs
        </Link>
      </div>

      {/* --- DEEP DIVE CONTENT --- */}
      <section id="how-to" className="mt-24 grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-tight italic">
            Convert JPG, PNG & WebP to PDF Instantly
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium">
            Converting multiple photos into a single PDF document is essential
            for students submitting assignments and professionals creating
            portfolios. Our <strong>image to PDF converter online</strong> is
            ideal for merging scanned documents or social media graphics into a
            clean, unwatermarked file without losing resolution.
          </p>

          <h2
            id="use-cases"
            className="text-2xl font-black mb-4 flex items-center gap-2 text-slate-900 dark:text-white uppercase tracking-tighter"
          >
            <Users size={20} className="text-indigo-500" /> Who should use this
            converter tool?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-indigo-500" /> Students
              merging scanned assignments
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-indigo-500" />{" "}
              Professionals creating portfolios
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-indigo-500" /> Business
              owners digitizing receipts
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-indigo-500" /> Workers
              converting photos for email
            </li>
          </ul>

          <div className="p-6 bg-indigo-500/5 rounded-2xl border border-indigo-500/10">
            <h2 className="text-xl font-black mb-3 flex items-center gap-2 text-indigo-600">
              <FileType size={20} /> Supported Formats
            </h2>
            <p className="text-xs text-slate-500 font-bold italic tracking-tight">
              ToolKing supports high-resolution conversion of JPG, JPEG, PNG,
              and WebP images with zero quality loss or watermarks.
            </p>
          </div>
        </div>

        <div id="faqs">
          <h2 className="text-3xl font-black mb-8 tracking-tight text-slate-900 dark:text-white">
            Frequently Asked Questions
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
            Pro Tip: You can drag and drop to reorder images after uploading to
            ensure your PDF pages are in the exact sequence you need.
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="mt-32 p-12 bg-indigo-600 rounded-[3.5rem] text-white text-center shadow-2xl shadow-indigo-500/20">
        <h3 className="text-2xl font-black mb-6 italic underline decoration-indigo-400">
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
      className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-indigo-200 transition-all"
    >
      {title}{" "}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}
