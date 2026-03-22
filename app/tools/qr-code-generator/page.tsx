import { Metadata } from "next";
import ToolWrapper from "../qr-code-generator/ToolWrapper";
import Link from "next/link";
import {
  QrCode,
  Download,
  ShieldCheck,
  Zap,
  ArrowRight,
  FileStack,
  Scissors,
  Calendar,
  ListOrdered,
  HelpCircle,
  Users,
  CheckCircle2,
  FileType,
  Info,
  Link as LinkIcon,
  Wifi,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Custom QR Code Generator | URL, Wi-Fi & Text | ToolKing",
  description:
    "Create custom QR codes for URLs, Wi-Fi, and text instantly. High-quality, secure, and 100% free. Download as PNG or SVG with no expiration or tracking.",
  keywords: [
    "qr code generator",
    "create qr code free",
    "custom qr code",
    "wifi qr code",
    "ToolKing",
    "static qr code generator",
    "qr code for restaurant menu",
  ],
  alternates: {
    canonical: "https://toolking.online/tools/qr-code-generator",
  },
};

export default function QrGeneratorPage() {
  const baseUrl = "https://toolking.online";
  const toolName = "QR Code Generator";

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
    name: "ToolKing QR Code Generator",
    operatingSystem: "Web",
    applicationCategory: "UtilitiesApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Customizable QR code generator for URLs, Wi-Fi credentials, and plain text. Download high-resolution PNG and SVG files for free.",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to create a free QR code online",
    step: [
      {
        "@type": "HowToStep",
        name: "Select Type",
        text: "Choose your QR code type (URL, Wi-Fi, or Text).",
      },
      {
        "@type": "HowToStep",
        name: "Enter Details",
        text: "Input the link or information you want to encode.",
      },
      {
        "@type": "HowToStep",
        name: "Download QR",
        text: "Instantly download your custom QR code as a PNG or SVG image.",
      },
    ],
  };

  const faqData = [
    {
      q: "Do these QR codes expire?",
      a: "No. These are static QR codes, meaning the data is encoded directly into the pattern. They will work forever and never expire.",
    },
    {
      q: "Can I use these QR codes for commercial purposes?",
      a: "Yes! You can use them for restaurant menus, business cards, marketing flyers, or storefronts at no cost with no scan limits.",
    },
    {
      q: "Is it safe to generate QR codes on ToolKing?",
      a: "Yes. Our generator processes your data locally in your browser. We don't track your scans or store the data you encode, ensuring 100% privacy.",
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
      {/* RENDER SCHEMAS ONCE */}
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <Zap className="w-3 h-3" /> Instant Generation
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent leading-[1.1]">
          Free Professional <br /> QR Generator
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
          <span className="flex items-center gap-1">
            <Calendar size={12} /> Updated: March 2026
          </span>
          <span className="w-1 h-1 bg-slate-300 rounded-full" />
          <a
            href="#how-to"
            className="hover:text-blue-600 transition-colors underline underline-offset-4 tracking-widest"
          >
            How it works
          </a>
          <span className="w-1 h-1 bg-slate-300 rounded-full" />
          <a
            href="#use-cases"
            className="hover:text-blue-600 transition-colors underline underline-offset-4 tracking-widest"
          >
            Who is it for?
          </a>
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          Use this <strong>free custom QR code generator</strong> to instantly
          create high-resolution QR codes for URLs, Wi-Fi, and text without
          expiration or scan limits.
        </p>
      </header>

      <ToolWrapper />

      {/* --- MID-CONTENT INTERNAL LINKS --- */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-6 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 text-center">
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
          Boost Your Business Toolkit:
        </p>
        <Link
          href="/tools/url-shortener"
          className="flex items-center gap-2 text-indigo-600 font-black text-sm hover:underline"
        >
          <LinkIcon size={14} /> URL Shortener
        </Link>
        <Link
          href="/tools/pdf-merger"
          className="flex items-center gap-2 text-blue-600 font-black text-sm hover:underline"
        >
          <FileStack size={14} /> PDF Merger
        </Link>
        <Link
          href="/tools/barcode-generator"
          className="flex items-center gap-2 text-emerald-600 font-black text-sm hover:underline"
        >
          <QrCode size={14} /> Barcode Generator
        </Link>
      </div>

      {/* --- DEEP DIVE CONTENT --- */}
      <section id="how-to" className="mt-24 grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-tight italic">
            Create Custom Static QR Codes Instantly
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium">
            QR codes have become essential for contactless interactions. Our
            <strong> custom QR code generator</strong> allows you to create
            permanent, high-fidelity codes for business or personal use. Unlike
            many subscription-based sites, ToolKing provides
            <strong> static QR codes</strong> that never expire and do not
            require an account.
          </p>

          <h2
            id="use-cases"
            className="text-2xl font-black mb-4 flex items-center gap-2 text-slate-900 dark:text-white uppercase tracking-tighter"
          >
            <Users size={20} className="text-blue-500" /> Who should use this QR
            tool?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-blue-500" /> Restaurant
              digital menus
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-blue-500" /> Marketers for
              flyers
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-blue-500" /> IT Admins for
              Wi-Fi
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-blue-500" /> Event
              organizers
            </li>
          </ul>

          <div className="p-6 bg-blue-500/5 rounded-2xl border border-blue-500/10">
            <h2 className="text-xl font-black mb-3 flex items-center gap-2 text-blue-600">
              <Wifi size={20} /> Supported QR Types
            </h2>
            <p className="text-xs text-slate-500 font-bold italic tracking-tight">
              ToolKing supports high-resolution export for Website URLs, Wi-Fi
              Network credentials, and Plain Text encoding.
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
                className="p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 transition-all hover:border-blue-500/50"
              >
                <h3 className="font-bold text-md mb-2 flex items-center gap-2 text-blue-600 italic">
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
            Pro Tip: Download your QR code in SVG format for high-quality
            printing on large banners.
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="mt-32 p-12 bg-blue-600 rounded-[3.5rem] text-white text-center shadow-2xl shadow-blue-500/20">
        <h3 className="text-2xl font-black mb-6 italic underline decoration-blue-400">
          Complete Your Workflow
        </h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <RelatedTool href="/tools/pdf-merger" title="PDF Merger" />
          <RelatedTool href="/tools/url-shortener" title="URL Shortener" />
          <RelatedTool href="/tools/barcode-generator" title="Barcode Gen" />
          <RelatedTool href="/tools/image-compressor" title="Img Comp" />
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
      className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-blue-200 transition-all text-nowrap"
    >
      {title}{" "}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}
