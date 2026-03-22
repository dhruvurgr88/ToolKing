import { Metadata } from "next";
import Link from "next/link";
import ToolBridge from "./ToolBridge";

// 1. SEO METADATA (Server-Side)
export const metadata: Metadata = {
  title:
    "Free PDF to Word Converter Online | Convert PDF to Editable DOCX | ToolKing",
  description:
    "Convert PDF to Word (DOCX) online for free without losing formatting. 100% secure, browser-based conversion. No email or registration required on ToolKing.",
  alternates: { canonical: "https://toolking.online/tools/pdf-to-word" },
  keywords: [
    "pdf to word converter free",
    "convert pdf to editable word",
    "pdf to docx without losing formatting",
    "online pdf to word converter",
    "free docx converter",
  ],
};

export default function PdfToWordPage() {
  // 2. STRUCTURED DATA (Schemas)
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ToolKing PDF to Word Converter",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this PDF to Word converter free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, ToolKing provides a 100% free PDF to Word converter online with no hidden costs, no registration, and no limits.",
        },
      },
      {
        "@type": "Question",
        name: "Will the formatting be preserved during conversion?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our tool is designed to convert PDF to editable Word while maintaining text, layout, and tables as accurately as possible.",
        },
      },
      {
        "@type": "Question",
        name: "Is my document secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Unlike other converters, ToolKing processes your files locally in your browser. Your data never leaves your device.",
        },
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

      {/* --- HERO SECTION --- */}
      <div className="pt-24 pb-12 text-center px-4">
        <nav className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          <Link href="/" className="hover:text-indigo-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/tools" className="hover:text-indigo-600">
            Tools
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-600 dark:text-slate-200">
            PDF to Word
          </span>
        </nav>

        <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white italic mb-6">
          PDF to{" "}
          <span className="text-indigo-600 underline decoration-indigo-100 underline-offset-8">
            Word
          </span>
        </h1>

        <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Convert PDF to{" "}
          <span className="text-slate-900 dark:text-white font-bold">
            editable Word documents
          </span>{" "}
          instantly. The most secure way to change PDF to DOCX without uploading
          files to a server.
        </p>
      </div>

      {/* --- THE BUILD-SAFE BRIDGE --- */}
      {/* This component handles the 'ssr: false' dynamic import of the heavy engine */}
      <ToolBridge />

      {/* --- SEO CONTENT HUB --- */}
      <div className="max-w-5xl mx-auto mt-32 space-y-24 px-6">
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-black italic text-slate-900 dark:text-white">
              Convert PDF to Editable Word{" "}
              <span className="text-indigo-600">Online</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Use this free **PDF to Word converter** to transform static PDF
              files into fully editable DOCX documents. Our tool is optimized to
              preserve formatting, tables, and layouts, making it easy to update
              your reports, assignments, or resumes in Microsoft Word.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-sm font-black uppercase tracking-widest text-indigo-600 mb-4">
              How to convert?
            </h3>
            <ul className="space-y-4 text-sm font-bold text-slate-700 dark:text-slate-300">
              <li className="flex gap-3">
                <span className="text-indigo-600">01.</span> Upload your PDF
                file.
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600">02.</span> Click 'Convert to
                Word'.
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600">03.</span> Download your
                editable DOCX.
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-black italic text-center">
            Who needs this tool?
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              {
                t: "Students",
                d: "Easily edit lecture notes or assignments shared as PDFs.",
              },
              {
                t: "Professionals",
                d: "Modify business reports and contracts without retyping.",
              },
              {
                t: "Job Seekers",
                d: "Update your old resume PDF into a modern Word layout.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-[2.5rem] bg-indigo-600/5 border border-indigo-100 dark:border-indigo-900/20"
              >
                <h4 className="font-black uppercase text-[10px] text-indigo-600 mb-3 tracking-widest">
                  {item.t}
                </h4>
                <p className="text-sm font-medium text-slate-500">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- CROSS-TOOL NAVIGATION --- */}
        <section className="bg-slate-900 text-white p-12 rounded-[4rem] text-center space-y-8">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
            More PDF Solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tools/pdf-merger"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-bold transition-all text-sm"
            >
              Merge PDFs
            </Link>
            <Link
              href="/tools/pdf-splitter"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-bold transition-all text-sm"
            >
              Split PDFs
            </Link>
            <Link
              href="/tools/word-counter"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-bold transition-all text-sm"
            >
              Word Counter
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
