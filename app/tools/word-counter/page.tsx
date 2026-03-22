import { Metadata } from "next";
import ToolWrapper from "../word-counter/ToolWrapper";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  FileStack,
  Scissors,
  Calendar,
  Clock,
  Type,
  Users,
  CheckCircle2,
  Info,
  HelpCircle,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Online Word Counter - Real-Time Text Analytics | ToolKing",
  description:
    "Count words, characters, and sentences instantly. Analyze reading and speaking time for your essays. 100% private browser-based word counter with advanced analytics.",
  keywords: [
    "word counter",
    "online character count",
    "reading time calculator",
    "ToolKing",
    "free writing tools",
    "sentence counter online",
    "check word count for essay",
  ],
  alternates: {
    canonical: "https://toolking.online/tools/word-counter",
  },
};

export default function WordCounterPage() {
  const baseUrl = "https://toolking.online";
  const toolName = "Word Counter";

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
    name: "ToolKing Word Counter",
    operatingSystem: "Web",
    applicationCategory: "UtilitiesApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Professional real-time word counter tool for tracking word count, character count, and estimated reading time locally.",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to count words and characters online",
    step: [
      {
        "@type": "HowToStep",
        name: "Input Text",
        text: "Type or paste your content into the editor area.",
      },
      {
        "@type": "HowToStep",
        name: "Instant Analysis",
        text: "View real-time updates for word count, character count, and sentences.",
      },
      {
        "@type": "HowToStep",
        name: "Time Estimation",
        text: "Check the dashboard for estimated reading and speaking time metrics.",
      },
    ],
  };

  const faqData = [
    {
      q: "Is ToolKing Word Counter free?",
      a: "Yes, our word counter is 100% free with no hidden costs, character limits, or subscription requirements.",
    },
    {
      q: "Does it count spaces as characters?",
      a: "Our tool provides both counts: total characters including spaces and characters excluding spaces, so you can meet any specific requirement.",
    },
    {
      q: "Is my data secure when using the word counter?",
      a: "Absolutely. ToolKing uses local browser-side processing. Your text is never uploaded to any server or stored in a database, ensuring 100% privacy.",
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
          <Type className="w-3 h-3" /> Real-Time Analytics
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-indigo-600 to-emerald-600 dark:from-indigo-400 dark:to-emerald-400 bg-clip-text text-transparent leading-[1.1]">
          Online Free <br /> Word Counter
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
          <span className="flex items-center gap-1">
            <Calendar size={12} /> Updated: March 2026
          </span>
          <span className="w-1 h-1 bg-slate-300 rounded-full" />
          <a
            href="#analytics"
            className="hover:text-indigo-600 transition-colors underline underline-offset-4 tracking-widest"
          >
            Analytics
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
          Use this <strong>free online word counter</strong> to instantly track
          word count, characters, and sentences. Analyze your reading and
          speaking time instantly without losing quality or compromising
          privacy.
        </p>
      </header>

      <ToolWrapper />

      {/* --- MID-CONTENT INTERNAL LINKS --- */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-6 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 text-center">
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
          Writing & Editing Suite:
        </p>
        <Link
          href="/tools/case-converter"
          className="flex items-center gap-2 text-indigo-600 font-black text-sm hover:underline"
        >
          <Type size={14} /> Case Converter
        </Link>
        <Link
          href="/tools/json-formatter"
          className="flex items-center gap-2 text-emerald-600 font-black text-sm hover:underline"
        >
          <FileText size={14} /> JSON Formatter
        </Link>
        <Link
          href="/tools/qr-code-generator"
          className="flex items-center gap-2 text-blue-600 font-black text-sm hover:underline"
        >
          <CheckCircle2 size={14} /> QR Generator
        </Link>
      </div>

      {/* --- DEEP DIVE CONTENT --- */}
      <section id="analytics" className="mt-24 grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-tight italic">
            Detailed Text & Essay Analytics
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium">
            Writing for SEO, social media, or academic assignments requires
            precision. Our <strong>character count tool</strong> handles
            long-form manuscripts and blog posts locally. Unlike other web
            tools, ToolKing provides <strong>reading time estimates</strong> and{" "}
            <strong>sentence structure tracking</strong> entirely in your
            browser.
          </p>

          <h2
            id="use-cases"
            className="text-2xl font-black mb-4 flex items-center gap-2 text-slate-900 dark:text-white uppercase tracking-tighter"
          >
            <Users size={20} className="text-indigo-500" /> Who should use this
            word tool?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-indigo-500" /> Bloggers &
              SEO Writers
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-indigo-500" /> Students
              for word limits
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-indigo-500" /> Social
              Media Managers
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-indigo-500" /> Podcasters
              (Speaking Time)
            </li>
          </ul>

          <div className="p-6 bg-indigo-500/5 rounded-2xl border border-indigo-500/10">
            <h2 className="text-xl font-black mb-3 flex items-center gap-2 text-indigo-600">
              <Clock size={20} /> Estimated Reading Time
            </h2>
            <p className="text-xs text-slate-500 font-bold italic tracking-tight">
              ToolKing supports high-accuracy time calculation based on average
              reading speeds of 275 words per minute.
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

          <div className="mt-8 p-6 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 flex gap-3 italic text-[10px] text-emerald-600 font-black uppercase tracking-widest">
            <Info className="shrink-0 w-4 h-4" />
            Privacy Note: Your content is processed locally in your browser. No
            text is ever transmitted to our servers or stored in any database.
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="mt-32 p-12 bg-indigo-600 rounded-[3.5rem] text-white text-center shadow-2xl shadow-indigo-500/20">
        <h3 className="text-2xl font-black mb-6 italic underline decoration-indigo-400">
          Maximize Productivity
        </h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <RelatedTool href="/tools/case-converter" title="Case Converter" />
          <RelatedTool href="/tools/json-formatter" title="JSON Formatter" />
          <RelatedTool href="/tools/image-compressor" title="Compressor" />
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
      className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-indigo-200 transition-all text-nowrap"
    >
      {title}{" "}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}
