import { Metadata } from "next";
import ToolWrapper from "../word-counter/ToolWrapper";
import FAQItem from "../../components/FAQItem";
import { ShieldCheck, CheckCircle } from "lucide-react";

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

      {/* SEO & FAQ SECTION - Google can read this instantly */}
      <div className="grid lg:grid-cols-3 gap-16 border-t border-slate-100 dark:border-slate-900 pt-16 mt-20">
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
