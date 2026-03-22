import { Metadata } from "next";
import ProtectPdfWrapper from "./ProtectPdfWrapper";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Protect PDF with Password Online | 100% Private & Secure | ToolKing",
  description:
    "Encrypt and protect your PDF files with a strong password. Local browser-based AES-256 encryption means your files and passwords never leave your device.",
  alternates: { canonical: "https://toolking.online/tools/protect-pdf" },
  keywords: [
    "protect pdf with password",
    "encrypt pdf online free",
    "password protect pdf no upload",
    "secure pdf tool",
    "lock pdf file",
    "aes-256 pdf encryption",
  ],
};

export default function ProtectPdfPage() {
  // 1. Software Application Schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ToolKing PDF Protector",
    applicationCategory: "SecurityApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0" },
  };

  // 2. FAQ Schema (Crucial for ranking in security niches)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is my password stored on ToolKing servers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. ToolKing uses client-side WebAssembly (WASM) to encrypt your PDF. Your password and document stay entirely within your browser's memory and are never uploaded.",
        },
      },
      {
        "@type": "Question",
        name: "What encryption standard does this tool use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use industry-standard AES-256 bit encryption, ensuring your PDF is protected against unauthorized access and brute-force attempts.",
        },
      },
    ],
  };

  // 3. Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://toolking.online",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: "https://toolking.online/tools",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Protect PDF",
        item: "https://toolking.online/tools/protect-pdf",
      },
    ],
  };

  return (
    <article className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      {/* --- INJECT SCHEMAS --- */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* --- HERO SECTION --- */}
      <div className="pt-24 pb-12 text-center px-4">
        <nav className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/tools"
            className="hover:text-indigo-600 transition-colors"
          >
            Tools
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-600 dark:text-slate-200 font-bold uppercase tracking-widest">
            Protect PDF
          </span>
        </nav>
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white italic mb-6">
          Protect <span className="text-indigo-600">PDF</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Add a{" "}
          <span className="text-slate-900 dark:text-white font-bold italic underline decoration-indigo-500/30">
            military-grade password
          </span>{" "}
          to your PDF. 100% private encryption that happens entirely in your
          browser.
        </p>
      </div>

      {/* --- THE TOOL (WRAPPER HANDLES DYNAMIC LOADING) --- */}
      <ProtectPdfWrapper />

      {/* --- SEO CONTENT HUB --- */}
      <div className="max-w-5xl mx-auto mt-32 space-y-24 px-6">
        {/* SECTION 1: SECURITY DEPTH */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-black italic text-slate-900 dark:text-white leading-tight">
              Bank-Level PDF <span className="text-indigo-600">Encryption</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              When you share sensitive data like bank statements, medical
              records, or legal contracts, protection isn't optional. ToolKing
              uses **AES-256 bit encryption**—the same standard used by
              governments—to lock your files.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Because we use **WebAssembly**, the encryption engine runs inside
              your browser. We never see your password, and we never see your
              file.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <svg
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.47 4.34-3.1 8.24-7 9.48V12H5V6.3l7-3.11v8.8z" />
              </svg>
            </div>
            <h3 className="text-sm font-black uppercase tracking-widest text-indigo-600 mb-4">
              Why Trust ToolKing?
            </h3>
            <ul className="space-y-4 text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">
              <li className="flex gap-3">
                <span className="text-emerald-500">✓</span> No Server Uploads
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500">✓</span> Open Source WASM
                Engine
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500">✓</span> Industry Standard
                AES-256
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 2: FAQ ACCORDION STYLE */}
        <section className="space-y-12">
          <h2 className="text-3xl font-black italic text-center">
            Security FAQs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqSchema.mainEntity.map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 transition-colors hover:border-indigo-500/30"
              >
                <h4 className="font-bold mb-3 text-slate-900 dark:text-white">
                  {item.name}
                </h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: INTERNAL LINKING NETWORK */}
        <section className="bg-indigo-600 text-white p-12 rounded-[4rem] text-center space-y-8 shadow-2xl">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60">
            Manage Your Documents Safely
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tools/pdf-merger"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-bold transition-all text-sm"
            >
              Merge PDF
            </Link>
            <Link
              href="/tools/pdf-to-word"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-bold transition-all text-sm"
            >
              PDF to Word
            </Link>
            <Link
              href="/tools/word-to-pdf"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-bold transition-all text-sm"
            >
              Word to PDF
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
