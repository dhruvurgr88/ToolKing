import { Metadata } from "next";
import SummarizerClient from "./SummarizerClient";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Free AI Text Summarizer Online | Summarize Articles & Essays | ToolKing",
  description:
    "Instantly condense long articles, essays, and documents into concise summaries with our free AI summarizer. fast, secure, and accurate tool by ToolKing.",
  alternates: { canonical: "https://toolking.online/tools/ai-summarizer" },
  keywords: [
    "summarize text online",
    "AI article summarizer",
    "summarize essay free",
    "long text summarizer",
    "AI tool for students",
  ],
};

export default function AiSummarizerPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ToolKing AI Summarizer",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this AI text summarizer free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, ToolKing offers a completely free AI text summarizer online. You can summarize articles, essays, and long documents without any subscription or hidden fees.",
        },
      },
      {
        "@type": "Question",
        name: "How does the AI summarizer work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our tool uses advanced AI models to analyze your text, identify key points, and rewrite them into a shorter version while maintaining the original meaning.",
        },
      },
      {
        "@type": "Question",
        name: "Is my data secure when using ToolKing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We prioritize privacy. Your text is processed in real-time and is never stored on our servers.",
        },
      },
    ],
  };

  return (
    <article className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
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
        <nav className="mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-600 dark:text-slate-300">
            AI Summarizer
          </span>
        </nav>
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white italic mb-6">
          AI Text{" "}
          <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">
            Summarizer
          </span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          The fastest way to{" "}
          <span className="text-slate-900 dark:text-white font-bold">
            summarize text online
          </span>
          . Transform long-form articles, essays, and reports into concise,
          readable summaries instantly.
        </p>
      </div>

      <SummarizerClient />

      {/* --- INTERNAL TOOLS LINKING (STICKY FOOTER STYLE) --- */}
      <div className="max-w-4xl mx-auto mt-20 px-6 py-8 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">
          Related Free Tools
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/tools/word-counter"
            className="px-6 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 text-xs font-bold hover:bg-indigo-600 hover:text-white transition-all"
          >
            Word Counter
          </Link>
          <Link
            href="/tools/case-converter"
            className="px-6 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 text-xs font-bold hover:bg-indigo-600 hover:text-white transition-all"
          >
            Case Converter
          </Link>
          <Link
            href="/tools/pdf-to-word"
            className="px-6 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 text-xs font-bold hover:bg-indigo-600 hover:text-white transition-all"
          >
            PDF to Word
          </Link>
        </div>
      </div>
    </article>
  );
}
