import { Metadata } from "next";
import ToolWrapper from "../qr-code-generator/ToolWrapper";
import FAQItem from "../../components/FAQItem";
import Link from "next/link"; // Added for SEO
import {
  QrCode,
  Share2,
  Download,
  ShieldCheck,
  Zap,
  ArrowRight,
  FileStack,
  Scissors,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Custom QR Code Generator | ToolKing",
  description:
    "Create custom QR codes for URLs, Wi-Fi, and text instantly. High-quality, secure, and 100% free. Download as PNG or SVG.",
  keywords: [
    "qr code generator",
    "create qr code free",
    "custom qr code",
    "wifi qr code",
    "ToolKing",
  ],
};

export default function QrGeneratorPage() {
  return (
    <article className="max-w-6xl mx-auto px-6 py-12">
      <header className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <Zap className="w-3 h-3" /> Instant Generation
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent leading-[1.1]">
          Free Professional <br /> QR Generator
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Create beautiful, high-resolution QR codes for your business or
          personal use. No tracking, no expiration, just pure utility.
        </p>
      </header>

      <ToolWrapper />

      {/* --- 🔥 NEW: INTERNAL LINKS FOR PDF TOOLS INDEXING --- */}
      <section className="mt-20 py-12 border-y border-slate-100 dark:border-slate-900">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 text-center italic">
          Complete Your Business Documents
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
                  Merge Reports & Menus
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
                  Extract PDF Pages
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

      <section className="mt-24 grid lg:grid-cols-2 gap-16 pt-10">
        <div>
          <h2 className="text-3xl font-black mb-6 tracking-tight">
            Why use ToolKing?
          </h2>
          <div className="space-y-4">
            <Feature
              icon={<ShieldCheck className="text-emerald-500" />}
              title="Privacy First"
              desc="We don't track your scans. Your data is yours."
            />
            <Feature
              icon={<Download className="text-blue-500" />}
              title="High Quality"
              desc="Download sharp images ready for print or web."
            />
            <Feature
              icon={<Share2 className="text-purple-500" />}
              title="Unlimited Use"
              desc="Your QR codes never expire and have no scan limits."
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-black mb-8 tracking-tight text-slate-900 dark:text-white">
            FAQs
          </h2>
          <FAQItem
            question="Do these QR codes expire?"
            answer="No. These are static QR codes, meaning the data is encoded directly into the pattern. They will work forever."
          />
          <FAQItem
            question="Can I use these for my business?"
            answer="Yes! You can use them for restaurant menus, business cards, or storefronts at no cost."
          />
        </div>
      </section>
    </article>
  );
}

function Feature({ icon, title, desc }: any) {
  return (
    <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
      <div className="mt-1">{icon}</div>
      <div>
        <p className="font-bold text-slate-900 dark:text-white">{title}</p>
        <p className="text-sm text-slate-500">{desc}</p>
      </div>
    </div>
  );
}
