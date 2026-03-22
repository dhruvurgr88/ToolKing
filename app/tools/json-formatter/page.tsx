import { Metadata } from "next";
import ToolWrapper from "../json-formatter/ToolWrapper";
import FAQItem from "../../components/FAQItem";
import Link from "next/link";
import {
  Code2,
  Braces,
  ShieldCheck,
  Zap,
  Terminal,
  ArrowRight,
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
  title:
    "Free Online JSON Formatter & Validator | Prettify & Minify | ToolKing",
  description:
    "Prettify, minify, and validate JSON code instantly. Fix syntax errors and convert JSON to TypeScript interfaces. 100% private, secure, and browser-based.",
  keywords: [
    "json formatter",
    "json validator",
    "prettify json",
    "json to typescript",
    "minify json online",
    "fix json syntax error",
    "ToolKing",
  ],
  alternates: {
    canonical: "https://toolking.online/tools/json-formatter",
  },
};

export default function JsonFormatterPage() {
  const baseUrl = "https://toolking.online";
  const toolName = "JSON Formatter";

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
    name: "ToolKing JSON Formatter Pro",
    operatingSystem: "Web",
    applicationCategory: "DeveloperApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Professional JSON formatter and validator. Supports prettifying, minifying, and TypeScript interface generation locally.",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to format and validate JSON online",
    step: [
      {
        "@type": "HowToStep",
        name: "Paste JSON",
        text: "Paste your messy or minified JSON code into the editor area.",
      },
      {
        "@type": "HowToStep",
        name: "Format or Validate",
        text: "Click 'Prettify' to clean the code or 'Validate' to check for syntax errors.",
      },
      {
        "@type": "HowToStep",
        name: "Export Code",
        text: "Copy the formatted JSON or generate TypeScript types with one click.",
      },
    ],
  };

  const faqData = [
    {
      q: "Is my JSON data sent to a server?",
      a: "Never. All parsing and formatting happen locally using your browser's engine. Your sensitive API data, keys, and configurations remain 100% private.",
    },
    {
      q: "Can this tool fix invalid JSON?",
      a: "Yes, our smart validator highlights syntax errors like missing quotes or trailing commas and helps you fix them instantly.",
    },
    {
      q: "Does it support JSON to TypeScript conversion?",
      a: "Absolutely. ToolKing can automatically generate TypeScript interfaces from your JSON structure to speed up your frontend development.",
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
          <Terminal className="w-3 h-3" /> Developer Utility
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-indigo-600 to-slate-900 dark:from-white dark:via-indigo-400 dark:to-white bg-clip-text text-transparent leading-[1.1]">
          JSON Formatter Pro
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
          Use this <strong>free online JSON formatter</strong> to prettify,
          minify, and validate JSON code instantly. This professional{" "}
          <strong>JSON validator</strong> helps you fix syntax errors without
          losing data formatting or security.
        </p>
      </header>

      <ToolWrapper />

      {/* --- MID-CONTENT INTERNAL LINKS --- */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-6 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 text-center">
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
          Optimize Your Assets:
        </p>
        <Link
          href="/tools/image-compressor"
          className="flex items-center gap-2 text-blue-600 font-black text-sm hover:underline"
        >
          <Zap size={14} /> Image Compressor
        </Link>
        <Link
          href="/tools/url-shortener"
          className="flex items-center gap-2 text-emerald-600 font-black text-sm hover:underline"
        >
          <LinkIcon size={14} /> URL Shortener
        </Link>
        <Link
          href="/tools/bulk-image-resizer"
          className="flex items-center gap-2 text-indigo-600 font-black text-sm hover:underline"
        >
          <Scaling size={14} /> Bulk Resizer
        </Link>
      </div>

      {/* --- DEEP DIVE CONTENT --- */}
      <section id="how-to" className="mt-24 grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-tight italic">
            Prettify & Validate JSON Instantly
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium">
            Debugging minified API responses or messy configuration files is a
            challenge. Our <strong>JSON prettifier</strong> provides a clean,
            readable structure to your data. Unlike other web tools, ToolKing
            processes your <strong>JSON validation</strong> locally, ensuring
            that sensitive API keys or user data are never leaked to a server.
          </p>

          <h2
            id="use-cases"
            className="text-2xl font-black mb-4 flex items-center gap-2 text-slate-900 dark:text-white uppercase tracking-tighter"
          >
            <Users size={20} className="text-indigo-500" /> Who should use this
            JSON tool?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-indigo-500" /> Frontend
              Devs generating TS types
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-indigo-500" /> Backend
              Engineers debugging APIs
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-indigo-500" /> Data
              Analysts cleaning JSON exports
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-indigo-500" /> DevOps
              managing config files
            </li>
          </ul>

          <div className="p-6 bg-indigo-500/5 rounded-2xl border border-indigo-500/10">
            <h2 className="text-xl font-black mb-3 flex items-center gap-2 text-indigo-600">
              <FileType size={20} /> Powerful Features
            </h2>
            <p className="text-xs text-slate-500 font-bold italic tracking-tight">
              ToolKing supports auto-fix for missing quotes, minification for
              production, and one-click TypeScript interface generation.
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
            Pro Tip: Use the 'Minify' button to reduce your JSON payload size
            before deploying your application to production.
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="mt-32 p-12 bg-indigo-600 rounded-[3.5rem] text-white text-center shadow-2xl shadow-indigo-500/20">
        <h3 className="text-2xl font-black mb-6 italic underline decoration-indigo-400">
          Professional Developer Suite
        </h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <RelatedTool href="/tools/url-shortener" title="URL Shortener" />
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
