import { Metadata } from "next";
import ToolWrapper from "../case-converter/ToolWrapper";
import FAQItem from "../../components/FAQItem";
import { Type, ArrowLeftRight, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Online Case Converter - Change Text Case Instantly | ToolKing",
  description:
    "Convert text to UPPERCASE, lowercase, Title Case, Sentence case, and more. Fast, free, and private online text transformer.",
  keywords: [
    "case converter",
    "convert text to uppercase",
    "title case converter",
    "sentence case tool",
    "ToolKing",
  ],
};

export default function CaseConverterPage() {
  return (
    <article className="max-w-6xl mx-auto px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent leading-[1.1]">
          Online free Smart Case Converter <br /> Converter
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          The ultimate text transformation tool. Clean up your titles, format
          your code, or fix your "Caps Lock" accidents in one click.
        </p>
      </header>

      <ToolWrapper />

      <section className="mt-24 grid lg:grid-cols-2 gap-16 border-t border-slate-100 dark:border-slate-900 pt-20">
        <div>
          <h2 className="text-3xl font-black mb-6 tracking-tight">
            Supported Formats
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <FormatBadge label="Sentence case" />
            <FormatBadge label="UPPER CASE" />
            <FormatBadge label="lower case" />
            <FormatBadge label="Title Case" />
            <FormatBadge label="camelCase" />
            <FormatBadge label="snake_case" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-black mb-8 tracking-tight">FAQs</h2>
          <FAQItem
            question="Is this safe for sensitive text?"
            answer="Yes. Like all ToolKing utilities, this runs 100% in your browser. Your text is never sent to a server."
          />
          <FAQItem
            question="Does it support large documents?"
            answer="Absolutely. You can paste thousands of lines, and the conversion will be nearly instant."
          />
        </div>
      </section>
    </article>
  );
}

function FormatBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-500 uppercase tracking-widest">
      <Zap className="w-3 h-3 text-amber-500" /> {label}
    </div>
  );
}
