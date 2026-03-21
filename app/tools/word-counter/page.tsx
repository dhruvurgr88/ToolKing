import { Metadata } from "next";
import ToolWrapper from "../word-counter/ToolWrapper";
import FAQItem from "../../components/FAQItem";
import Link from "next/link"; // Added for SEO
import {
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  FileStack,
  Scissors,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Online Word Counter - Real-Time Text Analytics | ToolKing",
  description:
    "Count words, characters, and sentences instantly. Analyze reading and speaking time for your essays. 100% private browser-based word counter.",
  keywords: [
    "word counter",
    "online character count",
    "reading time calculator",
    "ToolKing",
    "free writing tools",
  ],
};

export default function WordCounterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ToolKing Word Counter",
    operatingSystem: "Web",
    applicationCategory: "UtilitiesApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Professional real-time word counter tool for tracking word count, characters, and reading time.",
  };

  return (
    <article className="max-w-6xl mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADER - Rendered on Server for SEO */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-indigo-600 to-emerald-600 dark:from-indigo-400 dark:to-emerald-400 bg-clip-text text-transparent leading-[1.1]">
          Online Free <br /> Word Counter
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Analyze your content's length and estimated reading time instantly
          with our premium analytics dashboard.
        </p>
      </header>

      {/* THE TOOL WRAPPER */}
      <ToolWrapper />

      {/* --- 🔥 NEW: INTERNAL LINKS FOR PDF TOOLS INDEXING --- */}
      <section className="mt-20 py-12 border-y border-slate-100 dark:border-slate-900">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 text-center italic">
          Manage Your Documents with ToolKing
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/tools/pdf-merger"
            className="group p-6 bg-indigo-500/5 hover:bg-indigo-500/10 border border-indigo-500/10 rounded-[2rem] transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-indigo-600">
                <FileStack size={20} />
              </div>
              <div>
                <p className="font-black text-sm uppercase tracking-tight text-slate-900 dark:text-white">
                  PDF Merger
                </p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  Combine Multiple Files
                </p>
              </div>
            </div>
            <ArrowRight
              className="text-indigo-500 group-hover:translate-x-1 transition-transform"
              size={18}
            />
          </Link>

          <Link
            href="/tools/pdf-splitter"
            className="group p-6 bg-rose-500/5 hover:bg-rose-500/10 border border-rose-500/10 rounded-[2rem] transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-rose-600">
                <Scissors size={20} />
              </div>
              <div>
                <p className="font-black text-sm uppercase tracking-tight text-slate-900 dark:text-white">
                  PDF Splitter
                </p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  Extract Specific Pages
                </p>
              </div>
            </div>
            <ArrowRight
              className="text-rose-500 group-hover:translate-x-1 transition-transform"
              size={18}
            />
          </Link>
        </div>
      </section>

      {/* SEO & FAQ SECTION - Google can read this instantly */}
      <div className="grid lg:grid-cols-3 gap-16 pt-16 mt-10">
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-2 dark:text-white italic">
            <ShieldCheck className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Privacy First
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            Everything you type remains local to your device. ToolKing uses
            browser-based processing, meaning your text is never stored or
            shared.
          </p>
          <div className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm font-bold">
            <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
            Real-time local processing.
          </div>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-3xl font-black mb-8 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-1">
            <FAQItem
              question="Is ToolKing Word Counter free?"
              answer="Yes, our word counter is 100% free with no hidden costs or subscription requirements."
            />
            <FAQItem
              question="Does it work with non-English languages?"
              answer="Absolutely. It calculates word and character counts based on universal spacing, supporting Hindi, Spanish, French, and more."
            />
            <FAQItem
              question="Is there a character limit?"
              answer="There is no hard limit. You can paste content as long as your browser's memory allows, making it perfect for long-form manuscripts."
            />
            <FAQItem
              question="Is my data secure?"
              answer="Yes. Your text never leaves your computer; it is processed locally in your browser engine."
            />
          </div>
        </div>
      </div>
    </article>
  );
}
