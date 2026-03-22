import { Metadata } from "next";
import ToolWrapper from "../case-converter/ToolWrapper";
import FAQItem from "../../components/FAQItem";
import Link from "next/link";
import {
  Type,
  ArrowLeftRight,
  ShieldCheck,
  Zap,
  Calendar,
  ListOrdered,
  HelpCircle,
  Info,
  ArrowRight,
  FileText,
  Code,
  Users,
  CheckCircle2,
  Link as LinkIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Online Case Converter - Change Text Case Instantly | ToolKing",
  description:
    "Convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, and snake_case instantly. 100% private and free online text transformer.",
  keywords: [
    "case converter",
    "convert text to uppercase",
    "title case converter",
    "sentence case tool",
    "ToolKing",
    "online text transformer",
    "camelcase converter",
    "snake case generator",
  ],
  alternates: {
    canonical: "https://toolking.online/tools/case-converter",
  },
};

export default function CaseConverterPage() {
  const baseUrl = "https://toolking.online";
  const toolName = "Case Converter";

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
    name: "ToolKing Case Converter",
    operatingSystem: "Web",
    applicationCategory: "UtilitiesApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Smart online case converter to change text between uppercase, lowercase, sentence case, and developer formats like camelCase.",
  };

  const faqData = [
    {
      q: "Is this case converter safe for sensitive text?",
      a: "Yes. Like all ToolKing utilities, this runs 100% in your browser. Your text is processed locally and never sent to our servers, ensuring total privacy.",
    },
    {
      q: "Can I convert code variables like camelCase to snake_case?",
      a: "Yes, ToolKing supports developer-friendly formats like camelCase and snake_case instantly, making it easy to refactor variable names.",
    },
    {
      q: "Does it support large documents?",
      a: "Absolutely. You can paste thousands of lines of text or code, and the conversion will be handled instantly by your browser's engine.",
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
    name: "How to convert text case online",
    step: [
      {
        "@type": "HowToStep",
        name: "Paste Text",
        text: "Copy and paste your text or code into the input area above.",
      },
      {
        "@type": "HowToStep",
        name: "Select Format",
        text: "Choose your desired case (Sentence, Upper, Lower, Title, camelCase, etc.).",
      },
      {
        "@type": "HowToStep",
        name: "Copy Result",
        text: "Click the copy button to get your transformed text instantly.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <header className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <Type className="w-3 h-3" /> Smart Text Transformer
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent leading-[1.1]">
          Online Free Smart <br /> Case Converter
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
          <span className="flex items-center gap-1">
            <Calendar size={12} /> Updated: March 2026
          </span>
          <span className="w-1 h-1 bg-slate-300 rounded-full" />
          <a
            href="#how-it-works"
            className="hover:text-blue-600 transition-colors underline underline-offset-4"
          >
            How it works
          </a>
          <span className="w-1 h-1 bg-slate-300 rounded-full" />
          <a
            href="#faqs"
            className="hover:text-blue-600 transition-colors underline underline-offset-4"
          >
            FAQs
          </a>
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Use this <strong>online text case converter</strong> to instantly
          convert text to uppercase, lowercase, title case, and developer
          formats like <strong>camelCase</strong> and{" "}
          <strong>snake_case</strong> without losing formatting.
        </p>
      </header>

      <ToolWrapper />

      {/* --- MID-CONTENT INTERNAL LINKS --- */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-6 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 text-center">
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
          Boost Your Text Workflow:
        </p>
        <Link
          href="/tools/word-counter"
          className="flex items-center gap-2 text-blue-600 font-black text-sm hover:underline"
        >
          <FileText size={14} /> Word Counter
        </Link>
        <Link
          href="/tools/url-shortener"
          className="flex items-center gap-2 text-emerald-600 font-black text-sm hover:underline"
        >
          <LinkIcon size={14} /> Shorten URLs
        </Link>
        <Link
          href="/tools/json-formatter"
          className="flex items-center gap-2 text-indigo-600 font-black text-sm hover:underline"
        >
          <Code size={14} /> JSON Formatter
        </Link>
      </div>

      <section id="how-it-works" className="mt-24 grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-tight italic">
            Convert Text Cases Instantly
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium">
            Fix accidental capitalization mistakes or format your documents with
            our <strong>free smart case converter</strong>. Whether you're
            working on a university assignment or refactoring code variable
            names, ToolKing provides precision transformation locally.
          </p>

          <h2
            id="use-cases"
            className="text-2xl font-black mb-4 flex items-center gap-2 text-slate-900 dark:text-white"
          >
            <Users size={20} className="text-blue-500" /> Who should use this
            case converter tool?
          </h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={16} className="text-blue-500" /> Students
              formatting academic assignments & bibliographies
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={16} className="text-blue-500" /> Developers
              converting variable names between snake_case & camelCase
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={16} className="text-blue-500" /> Writers &
              Content Creators fixing Caps Lock accidents
            </li>
          </ul>

          <h2 className="text-2xl font-black mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
            <ArrowLeftRight size={20} className="text-blue-500" /> Supported
            Case Formats
          </h2>
          <p className="text-sm text-slate-500 font-bold mb-4 italic text-balance">
            ToolKing supports Uppercase, lowercase, sentence case, title case,
            camelCase, and snake_case conversion.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <FormatBadge label="Sentence case" />
            <FormatBadge label="UPPER CASE" />
            <FormatBadge label="lower case" />
            <FormatBadge label="Title Case" />
            <FormatBadge label="camelCase" />
            <FormatBadge label="snake_case" />
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
                className="p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800"
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
        </div>
      </section>

      <footer className="mt-32 p-12 bg-blue-600 rounded-[3.5rem] text-white text-center shadow-2xl shadow-blue-500/20">
        <h3 className="text-2xl font-black mb-6 italic underline decoration-blue-400">
          Maximize Productivity
        </h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <RelatedTool href="/tools/word-counter" title="Word Counter" />
          <RelatedTool href="/tools/url-shortener" title="Shorten URL" />
          <RelatedTool href="/tools/pdf-splitter" title="PDF Split" />
          <RelatedTool href="/tools/qr-code-generator" title="QR Gen" />
        </div>
        <div className="mt-12 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] opacity-50">
          <Info className="w-3 h-3" /> ToolKing Utility Engine v2.0
        </div>
      </footer>
    </article>
  );
}

function FormatBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-[10px] font-black text-slate-500 uppercase tracking-widest transition-all hover:border-blue-500/50">
      <Zap className="w-3 h-3 text-amber-500" /> {label}
    </div>
  );
}

function RelatedTool({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-blue-200 transition-all"
    >
      {title}{" "}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}
