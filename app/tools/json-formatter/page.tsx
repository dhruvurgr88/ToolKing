import { Metadata } from "next";
import ToolWrapper from "../json-formatter/ToolWrapper";
import FAQItem from "../../components/FAQItem";
import Link from "next/link"; // Added for SEO linking
import {
  Code2,
  Braces,
  ShieldCheck,
  Zap,
  Terminal,
  ArrowRight,
  Scaling,
  Image as ImageIcon,
} from "lucide-react";

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

      {/* --- 🔥 NEW: INTERNAL LINKS FOR IMAGE TOOLS INDEXING --- */}
      <section className="mt-20 py-12 border-y border-slate-100 dark:border-slate-900">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 text-center italic">
          Optimize Your Assets for Production
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/tools/image-compressor"
            className="group p-6 bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/10 rounded-[2rem] transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-blue-600">
                <Zap size={20} />
              </div>
              <div>
                <p className="font-black text-sm uppercase tracking-tight text-slate-900 dark:text-white">
                  Image Compressor
                </p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  Shrink Web Assets
                </p>
              </div>
            </div>
            <ArrowRight
              className="text-blue-500 group-hover:translate-x-1 transition-transform"
              size={18}
            />
          </Link>

          <Link
            href="/tools/bulk-image-resizer"
            className="group p-6 bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/10 rounded-[2rem] transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-emerald-600">
                <Scaling size={20} />
              </div>
              <div>
                <p className="font-black text-sm uppercase tracking-tight text-slate-900 dark:text-white">
                  Bulk Resizer
                </p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  Resize Icons & Thumbnails
                </p>
              </div>
            </div>
            <ArrowRight
              className="text-emerald-500 group-hover:translate-x-1 transition-transform"
              size={18}
            />
          </Link>
        </div>
      </section>

      <section className="mt-24 grid lg:grid-cols-2 gap-16 pt-10">
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
