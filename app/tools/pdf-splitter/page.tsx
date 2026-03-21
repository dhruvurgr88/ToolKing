import { Metadata } from "next";
import ToolWrapper from "../pdf-splitter/ToolWrapper";
import FAQItem from "../../components/FAQItem";
import { Scissors, FileText, ShieldCheck, Zap, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Online PDF Splitter - Extract Pages Locally | ToolKing",
  description:
    "Split PDF files into individual pages or extract specific ranges instantly. 100% private, browser-based, and free PDF tool. No server uploads.",
  keywords: [
    "pdf splitter",
    "extract pdf pages",
    "split pdf online free",
    "pdf page remover",
    "ToolKing",
  ],
};

export default function PdfSplitterPage() {
  return (
    <article className="max-w-6xl mx-auto px-6 py-12">
      <header className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <Scissors className="w-3 h-3" /> Precision Extraction
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-rose-600 to-slate-900 dark:from-white dark:via-rose-400 dark:to-white bg-clip-text text-transparent leading-[1.1]">
          PDF Splitter <br /> & Extractor
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Separate your PDF into individual files or extract a specific range.
          Fast, secure, and{" "}
          <span className="text-rose-600 font-bold">
            processed on your device.
          </span>
        </p>
      </header>

      <ToolWrapper />

      <section className="mt-24 grid lg:grid-cols-2 gap-16 border-t border-slate-100 dark:border-slate-900 pt-20">
        <div>
          <h2 className="text-3xl font-black mb-6 tracking-tight">
            How it works
          </h2>
          <div className="space-y-6">
            <Step
              icon={<FileText />}
              title="Upload PDF"
              desc="Select the PDF you want to split from your device."
            />
            <Step
              icon={<Layers />}
              title="Select Range"
              desc="Choose specific pages or split the whole document."
            />
            <Step
              icon={<Zap />}
              title="Download"
              desc="Your browser generates the new PDF files instantly."
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-black mb-8 tracking-tight">FAQs</h2>
          <FAQItem
            question="Are my documents safe?"
            answer="Yes. ToolKing uses client-side processing. Your PDF never touches our servers, ensuring 100% privacy."
          />
          <FAQItem
            question="Is there a file size limit?"
            answer="There is no hard limit on our end, though very large files depend on your device's RAM."
          />
        </div>
      </section>
    </article>
  );
}

function Step({ icon, title, desc }: any) {
  return (
    <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
      <div className="text-rose-500">{icon}</div>
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm text-slate-500">{desc}</p>
      </div>
    </div>
  );
}
