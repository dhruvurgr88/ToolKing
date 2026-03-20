import { Metadata } from "next";
import ToolWrapper from "../pdf-merger/ToolWrapper";
import FAQItem from "../../components/FAQItem";
import { ShieldCheck, Zap, Lock, FileStack, Combine } from "lucide-react";

export const metadata: Metadata = {
  title: "Merge PDF Online - Combine PDF Files for Free | ToolKing",
  description:
    "Combine multiple PDF files into one document instantly in your browser. No registration, no watermarks, and 100% private. Best free PDF joiner.",
  keywords: [
    "merge pdf online",
    "combine pdf files",
    "pdf joiner free",
    "ToolKing",
    "merge multiple pdfs",
  ],
};

export default function PdfMergerPage() {
  return (
    <article className="max-w-6xl mx-auto px-6 py-12">
      <header className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <Lock className="w-3 h-3" /> Secure Local Merging
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-indigo-600 to-slate-900 dark:from-white dark:via-indigo-400 dark:to-white bg-clip-text text-transparent leading-[1.1]">
          Combine PDF Files <br /> Instantly
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          Select multiple PDF documents and join them into a single file in
          seconds. Your files <strong>never</strong> leave your computer.
        </p>
      </header>

      <ToolWrapper />

      <section className="mt-24 grid lg:grid-cols-2 gap-16 border-t border-slate-100 dark:border-slate-900 pt-20">
        <div>
          <h2 className="text-3xl font-black mb-6 tracking-tight text-slate-900 dark:text-white">
            Why Use ToolKing PDF Merger?
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 p-2 bg-indigo-500/10 rounded-lg text-indigo-600">
                <FileStack className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold">Maintain Original Quality</p>
                <p className="text-sm text-slate-500">
                  We merge the actual data streams of your PDFs, ensuring no
                  quality loss or compression artifacts.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 p-2 bg-emerald-500/10 rounded-lg text-emerald-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold">Privacy Guaranteed</p>
                <p className="text-sm text-slate-500">
                  Unlike other tools, your sensitive documents stay on your
                  device. We don't have a database of your files.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-black mb-8 tracking-tight text-slate-900 dark:text-white">
            FAQs
          </h2>
          <FAQItem
            question="How many PDFs can I merge?"
            answer="There is no software limit. You can merge 2 or 50+ PDFs at once, depending on your device's RAM."
          />
          <FAQItem
            question="Does it work with password-protected PDFs?"
            answer="Currently, you must remove the password before merging. We are working on an 'Unlock PDF' tool for the future!"
          />
          <FAQItem
            question="Can I change the order of files?"
            answer="Yes! Upload them in the order you want them to appear, or remove and re-add them to adjust the sequence."
          />
        </div>
      </section>
    </article>
  );
}
