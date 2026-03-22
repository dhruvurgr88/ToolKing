import { Metadata } from "next";
import ToolWrapper from "./ToolWrapper";
import Link from "next/link";
import {
  Lock,
  ShieldCheck,
  Zap,
  Fingerprint,
  ArrowRight,
  Scaling,
  Calendar,
  ListOrdered,
  HelpCircle,
  Users,
  CheckCircle2,
  Info,
  ShieldAlert,
  KeyRound,
  ShieldQuestion,
  Binary,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Strong Password Generator | Secure & Random | ToolKing",
  description:
    "Create ultra-secure, random passwords instantly. Customize length, symbols, and numbers. 100% private, client-side generation for maximum security.",
  keywords: [
    "password generator",
    "secure password creator",
    "random string generator",
    "strong password maker",
    "ToolKing",
    "security tools",
    "generate random password offline",
    "brute force resistant password",
  ],
  alternates: {
    canonical: "https://toolking.online/tools/password-generator",
  },
};

export default function PasswordGeneratorPage() {
  const baseUrl = "https://toolking.online";
  const toolName = "Strong Password Generator";

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
    name: "ToolKing Secure Password Generator",
    operatingSystem: "Web",
    applicationCategory: "SecurityApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Professional random password generator using Web Crypto API for secure, locally-processed password creation without server-side storage.",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to generate a strong password online",
    step: [
      {
        "@type": "HowToStep",
        name: "Configure Entropy",
        text: "Select your desired length (16+ recommended) and toggle symbols, numbers, and case-sensitivity.",
      },
      {
        "@type": "HowToStep",
        name: "Client-Side Generation",
        text: "Click the generate button to trigger the Web Crypto API on your local machine.",
      },
      {
        "@type": "HowToStep",
        name: "Secure Copy",
        text: "Copy your unhackable password and store it in a trusted password manager immediately.",
      },
    ],
  };

  const faqData = [
    {
      q: "Is it safe to use an online password generator?",
      a: "Yes, if it processes data locally. ToolKing uses the browser's Web Crypto API to generate passwords on your own hardware. Your passwords never touch our servers.",
    },
    {
      q: "How can I make a password brute-force resistant?",
      a: "Use a minimum of 16 characters and include a combination of symbols (!@#), numbers (0-9), and mixed-case letters to maximize cryptographic entropy.",
    },
    {
      q: "Does ToolKing store my generated passwords?",
      a: "No. ToolKing is a zero-knowledge utility. Once you refresh the page or close the tab, the generated string is wiped from your browser's temporary memory.",
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <ShieldCheck className="w-3 h-3" /> Military Grade Encryption
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-emerald-600 to-slate-900 dark:from-white dark:via-emerald-400 dark:to-white bg-clip-text text-transparent leading-[1.1]">
          Strong Password Generator
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
          <span className="flex items-center gap-1">
            <Calendar size={12} /> Updated: March 2026
          </span>
          <span className="w-1 h-1 bg-slate-300 rounded-full" />
          <a
            href="#how-it-works"
            className="hover:text-emerald-600 transition-colors underline underline-offset-4 tracking-widest"
          >
            Security Protocol
          </a>
          <span className="w-1 h-1 bg-slate-300 rounded-full" />
          <a
            href="#faqs"
            className="hover:text-emerald-600 transition-colors underline underline-offset-4 tracking-widest"
          >
            FAQs
          </a>
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Use this <strong>free online strong password generator</strong> to
          create ultra-secure, random passwords for websites and apps instantly
          without losing quality or compromising privacy.
        </p>
      </header>

      <ToolWrapper />

      {/* --- MID-CONTENT INTERNAL LINKS --- */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-6 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 text-center">
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
          Complete Your Security Kit:
        </p>
        <Link
          href="/tools/url-shortener"
          className="flex items-center gap-2 text-blue-600 font-black text-sm hover:underline"
        >
          <Zap size={14} /> URL Shortener
        </Link>
        <Link
          href="/tools/qr-code-generator"
          className="flex items-center gap-2 text-indigo-600 font-black text-sm hover:underline"
        >
          <KeyRound size={14} /> QR Generator
        </Link>
        <Link
          href="/tools/json-formatter"
          className="flex items-center gap-2 text-emerald-600 font-black text-sm hover:underline"
        >
          <ShieldAlert size={14} /> JSON Formatter
        </Link>
      </div>

      {/* --- DEEP DIVE CONTENT --- */}
      <section id="how-it-works" className="mt-24 grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-tight italic text-balance">
            Generate Cryptographically Secure Passwords
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium">
            Protecting your digital life starts with high-entropy strings. Our{" "}
            <strong>secure password creator</strong> uses advanced{" "}
            <strong>Web Crypto API</strong> technology to generate strings
            directly in your browser's local memory. This ensures that even if
            our site were attacked, your passwords never existed on our server
            in the first place.
          </p>

          <h2
            id="use-cases"
            className="text-2xl font-black mb-4 flex items-center gap-2 text-slate-900 dark:text-white uppercase tracking-tighter"
          >
            <Users size={20} className="text-emerald-500" /> Who should use this
            secure generator?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-emerald-500" /> Crypto &
              Web3 Users
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-emerald-500" /> System
              Administrators
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-emerald-500" /> Online
              Banking Users
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-emerald-500" />{" "}
              Privacy-Conscious Devs
            </li>
          </ul>

          <div className="p-6 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
            <h2 className="text-xl font-black mb-3 flex items-center gap-2 text-emerald-600">
              <Binary size={20} /> Brute-Force Protection
            </h2>
            <p className="text-xs text-slate-500 font-bold italic tracking-tight">
              ToolKing supports customizable length and exclusion of ambiguous
              characters to create truly random, brute-force resistant passwords
              for enterprise use.
            </p>
          </div>
        </div>

        <div id="faqs">
          <h2 className="text-3xl font-black mb-8 tracking-tight text-slate-900 dark:text-white">
            Security Deep Dive
          </h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 transition-all hover:border-emerald-500/50"
              >
                <h3 className="font-bold text-md mb-2 flex items-center gap-2 text-emerald-600 italic">
                  <ShieldQuestion className="w-4 h-4" /> {item.q}
                </h3>
                <p className="text-slate-500 leading-relaxed text-xs font-bold">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-amber-500/5 rounded-2xl border border-amber-500/10 flex gap-3 italic text-[10px] text-amber-600 font-black uppercase tracking-widest">
            <Info className="shrink-0 w-4 h-4" />
            Security Tip: Never share your master password or reuse passwords
            across different platforms to maintain your digital safety.
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="mt-32 p-12 bg-emerald-600 rounded-[3.5rem] text-white text-center shadow-2xl shadow-emerald-500/20">
        <h3 className="text-2xl font-black mb-6 italic underline decoration-emerald-400">
          Professional Security Suite
        </h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <RelatedTool href="/tools/url-shortener" title="URL Shortener" />
          <RelatedTool href="/tools/image-compressor" title="Compressor" />
          <RelatedTool href="/tools/age-calculator" title="Age Calc" />
          <RelatedTool href="/tools/qr-code-generator" title="QR Gen" />
        </div>
        <div className="mt-12 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] opacity-50">
          <Info className="w-3 h-3" /> ToolKing Security v2.1
        </div>
      </footer>
    </article>
  );
}

function RelatedTool({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-emerald-200 transition-all text-nowrap"
    >
      {title}{" "}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}
