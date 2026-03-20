import { Metadata } from "next";
import ToolWrapper from "../json-formatter/ToolWrapper";
import FAQItem from "../../components/FAQItem";
import { Code2, Braces, ShieldCheck, Zap, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Online JSON Formatter & Validator | ToolKing",
  description:
    "Prettify, minify, and validate JSON code instantly. Fix syntax errors and convert JSON to TypeScript interfaces. 100% private and secure.",
  keywords: [
    "json formatter",
    "json validator",
    "prettify json",
    "json to typescript",
    "ToolKing",
  ],
};

export default function JsonFormatterPage() {
  return (
    <article className="max-w-6xl mx-auto px-6 py-12">
      <header className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <Terminal className="w-3 h-3" /> Developer Utility
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-indigo-600 to-slate-900 dark:from-white dark:via-indigo-400 dark:to-white bg-clip-text text-transparent leading-[1.1]">
          JSON <br /> Formatter Pro
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          The ultimate JSON tool for engineers. Prettify messy code, validate
          syntax, and generate TypeScript types instantly.
        </p>
      </header>

      <ToolWrapper />

      <section className="mt-24 grid lg:grid-cols-2 gap-16 border-t border-slate-100 dark:border-slate-900 pt-20">
        <div>
          <h2 className="text-3xl font-black mb-6 tracking-tight">
            Powerful Features
          </h2>
          <ul className="space-y-4">
            <FeatureItem
              icon={<Braces className="w-5 h-5" />}
              text="Auto-fix missing quotes and formatting."
            />
            <FeatureItem
              icon={<Zap className="w-5 h-5" />}
              text="Minify JSON for smaller file sizes."
            />
            <FeatureItem
              icon={<Code2 className="w-5 h-5" />}
              text="One-click conversion to TypeScript interfaces."
            />
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-black mb-8 tracking-tight text-slate-900 dark:text-white text-center md:text-left underline underline-offset-4 decoration-indigo-500/30">
            Developer FAQs
          </h2>
          <FAQItem
            question="Is my JSON sent to a server?"
            answer="Never. All parsing happens locally using the browser's JSON engine. Your sensitive API data is safe."
          />
          <FAQItem
            question="What happens if my JSON is invalid?"
            answer="Our validator will highlight exactly where the syntax error is so you can fix it instantly."
          />
        </div>
      </section>
    </article>
  );
}

function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 font-bold text-sm text-slate-600 dark:text-slate-300 transition-transform hover:scale-105">
      <div className="text-indigo-500">{icon}</div>
      {text}
    </li>
  );
}
