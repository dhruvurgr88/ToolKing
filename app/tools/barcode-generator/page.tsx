import { Metadata } from "next";
import ToolWrapper from "./ToolWrapper";
import Link from "next/link";
import {
  Barcode,
  ShieldCheck,
  Zap,
  Package,
  ArrowRight,
  HelpCircle,
  CheckCircle2,
  Info,
  Calendar,
  ListOrdered,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Free Online Barcode Generator | Create Code 128, EAN-13, UPC-A | ToolKing",
  description:
    "Generate high-resolution barcodes for retail and inventory. Supports Code 128, EAN-13, and UPC. 100% free, private, and high-quality PNG downloads.",
  keywords: [
    "free barcode generator",
    "online barcode creator",
    "code 128 generator",
    "EAN-13 generator",
    "UPC-A barcode",
    "inventory tools",
    "ToolKing",
  ],
};

export default function BarcodePage() {
  const baseUrl = "https://toolking.online";
  const toolUrl = `${baseUrl}/tools/barcode-generator`;

  // --- 🔥 SCHEMA ENHANCEMENTS ---
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
      { "@type": "ListItem", position: 3, name: "Barcode Generator" },
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ToolKing Barcode Generator",
    operatingSystem: "Web",
    applicationCategory: "UtilitiesApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "High-precision barcode generator for Code 128, EAN-13, and UPC-A formats. Retail and inventory ready.",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Generate a Barcode Online",
    step: [
      {
        "@type": "HowToStep",
        text: "Select your barcode format (Code 128, EAN, or UPC).",
      },
      {
        "@type": "HowToStep",
        text: "Enter the alphanumeric text or digits for your product.",
      },
      {
        "@type": "HowToStep",
        text: "Instantly download your high-resolution barcode as a PNG image.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this barcode generator free for commercial use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! ToolKing provides industry-standard barcodes for free. Use them for retail on Amazon, eBay, or local stores without licensing fees.",
        },
      },
      {
        "@type": "Question",
        name: "Which barcode format is best for shipping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Code 128 is best for shipping labels as it supports both letters and numbers and is highly compact for scanning.",
        },
      },
    ],
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

      {/* --- HEADER SECTION --- */}
      <header className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <Package className="w-3 h-3" /> Retail & Inventory Ready
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-indigo-600 to-slate-900 dark:from-white dark:via-indigo-400 dark:to-white bg-clip-text text-transparent leading-[1.1]">
          Free Online Barcode Generator
        </h1>

        {/* Quick Navigation & Trust Signals */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
          <span className="flex items-center gap-1">
            <Calendar size={12} /> Updated: March 2026
          </span>
          <span className="hidden md:block w-1 h-1 bg-slate-300 rounded-full" />
          <a
            href="#how-it-works"
            className="hover:text-indigo-600 transition-colors flex items-center gap-1"
          >
            <ListOrdered size={12} /> How to use
          </a>
          <span className="hidden md:block w-1 h-1 bg-slate-300 rounded-full" />
          <a
            href="#faqs"
            className="hover:text-indigo-600 transition-colors flex items-center gap-1"
          >
            <HelpCircle size={12} /> FAQs
          </a>
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Create professional, high-precision barcodes for products, shipping,
          and tracking. Fast, high-resolution, and{" "}
          <span className="text-indigo-600 font-bold underline decoration-indigo-200">
            processed 100% in your browser.
          </span>
        </p>
      </header>

      {/* --- THE TOOL ENGINE --- */}
      <ToolWrapper />

      <section
        id="how-it-works"
        className="mt-24 max-w-4xl mx-auto border-t border-slate-100 dark:border-slate-800 pt-20"
      >
        <h2 className="text-3xl font-black mb-6 tracking-tighter italic">
          Professional Barcoding Made Simple
        </h2>
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
          <p>
            In the world of retail and logistics, precision is everything. A
            poorly generated barcode can lead to shipping delays, inventory
            errors, and rejected retail shipments. At <strong>ToolKing</strong>,
            we’ve built a browser-based generator that ensures your barcodes
            meet strict international standards, including ISO/IEC 15417 for
            Code 128.
          </p>

          <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Support for Global Standards
          </h3>
          <p>
            Whether you are selling products on Amazon or managing a warehouse
            in Indore, you need specific formats. Our tool supports{" "}
            <strong>EAN-13</strong> (the International Article Number),{" "}
            <strong>UPC-A</strong>
            (Universal Product Code), and <strong>Code 128</strong>. Code 128 is
            particularly powerful because it can encode all 128 characters of
            ASCII, making it the go-to choice for complex shipping data.
          </p>

          <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Privacy & Local Processing
          </h3>
          <p>
            Most barcode websites upload your data to a server to generate an
            image. ToolKing is different. We utilize client-side rendering,
            meaning your data stays in your browser's RAM. Your SKU numbers,
            private inventory codes, and shipping data never touch our servers.
            This is professional-grade security for your business operations.
          </p>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="mt-32 grid md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 dark:bg-indigo-900/20">
            <Zap className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-black tracking-tight">
            Instant Rendering
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Experience zero-latency generation. As you type, your barcode
            updates in real-time using our high-precision vector engine.
          </p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 dark:bg-emerald-900/20">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-black tracking-tight">
            Retail Validated
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Every EAN and UPC generated is checked against standard checksum
            algorithms to ensure it is scan-ready for retail point-of-sale
            systems.
          </p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 dark:bg-rose-900/20">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-black tracking-tight">
            100% Offline Safe
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            No server calls. No data logging. We provide the privacy that
            enterprises require for sensitive inventory management.
          </p>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section id="faqs" className="mt-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">
            Expert advice on barcode standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 transition-all hover:border-indigo-500/50">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-indigo-500" />
              Can I use these for Amazon FBA?
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Yes. Amazon typically requires EAN-13 or UPC barcodes. Our
              generator creates these with the necessary high-resolution padding
              to be accepted by Amazon's scanning systems.
            </p>
          </div>
          <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 transition-all hover:border-indigo-500/50">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-indigo-500" />
              Why is Code 128 better for internal use?
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Unlike EAN which only uses numbers, Code 128 allows for letters
              and special characters, giving you more flexibility for warehouse
              and asset tracking.
            </p>
          </div>
        </div>
      </section>

      {/* --- INTERNAL LINKING (INDEXING FIX) --- */}
      <section className="mt-32 p-12 bg-indigo-600 rounded-[3.5rem] text-white text-center shadow-2xl shadow-indigo-500/20">
        <h3 className="text-2xl font-black mb-6 italic">
          Boost Your Productivity
        </h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <RelatedLink href="/tools/qr-code-generator" title="QR Code Gen" />
          <RelatedLink href="/tools/pdf-merger" title="PDF Merger" />
          <RelatedLink href="/tools/image-to-pdf" title="Image to PDF" />
          <RelatedLink href="/tools/age-calculator" title="Age Calculator" />
        </div>
      </section>

      <footer className="mt-20 text-center">
        <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
          <Info className="w-3 h-3" /> ToolKing Utility Engine v2.0
        </div>
      </footer>
    </article>
  );
}

function RelatedLink({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 text-sm font-black uppercase tracking-widest hover:text-indigo-200 transition-all"
    >
      {title}{" "}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}
