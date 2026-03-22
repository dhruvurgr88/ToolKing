import { Metadata } from "next";
import ToolWrapper from "../pdf-merger/ToolWrapper";
import FAQItem from "../../components/FAQItem";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  Lock,
  FileStack,
  Combine,
  ArrowRight,
  Scaling,
} from "lucide-react";

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
  // --- 🔥 SEO ENHANCEMENTS (JSON-LD) ---
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ToolKing PDF Merger",
    operatingSystem: "Web",
    applicationCategory: "UtilitiesApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Professional browser-based tool to combine multiple PDF files into a single document without server uploads.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many PDFs can I merge at once?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no hard software limit on ToolKing. You can merge 2 or 50+ PDFs at once; the only limit is your device's available RAM.",
        },
      },
      {
        "@type": "Question",
        name: "Is my data safe when merging PDFs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. ToolKing processes your files locally in your browser. Your documents never leave your computer and are never uploaded to any server.",
        },
      },
    ],
  };

  return (
    <article className="max-w-6xl mx-auto px-6 py-12">
      {/* Injecting Structured Data for Google Enhancements */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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

      {/* --- INTERNAL LINKS FOR INDEXING --- */}
      <section className="mt-20 py-10 border-y border-slate-100 dark:border-slate-900">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 text-center italic">
          More Image & PDF Utilities
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
                <p className="font-black text-sm uppercase tracking-tight">
                  Image Compressor
                </p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  For Exam Portals
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
                <p className="font-black text-sm uppercase tracking-tight">
                  Bulk Resizer
                </p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  Batch Process Images
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
          <h2 className="text-3xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-tight">
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
            Frequently Asked Questions
          </h2>
          <div className="space-y-1">
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
        </div>
      </section>
    </article>
  );
}
