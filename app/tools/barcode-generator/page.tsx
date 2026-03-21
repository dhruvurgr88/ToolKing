import { Metadata } from "next";
import ToolWrapper from "./ToolWrapper";
import Link from "next/link";
import {
  Barcode,
  ShieldCheck,
  Zap,
  Package,
  ArrowRight,
  HelpCircle,
  CheckCircle2,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Online Barcode Generator | Create Code 128, EAN-13, UPC-A",
  description:
    "Generate high-resolution barcodes for retail and inventory. Supports Code 128, EAN-13, and UPC. 100% free, private, and high-quality PNG downloads.",
  keywords: [
    "free barcode generator",
    "online barcode creator",
    "code 128 generator",
    "EAN-13 generator",
    "UPC-A barcode",
    "inventory tools",
    "ToolKing",
  ],
};

export default function BarcodePage() {
  return (
    <article className="max-w-6xl mx-auto px-6 py-12">
      {/* --- HEADER SECTION --- */}
      <header className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <Package className="w-3 h-3" /> Retail & Inventory Ready
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-indigo-600 to-slate-900 dark:from-white dark:via-indigo-400 dark:to-white bg-clip-text text-transparent leading-[1.1]">
          Free Online Barcode Generator <br />
          <span className="text-indigo-600 text-3xl md:text-5xl opacity-80">
            (Code 128, EAN, UPC)
          </span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Create professional, high-precision barcodes for products, shipping,
          and tracking. Fast, high-resolution, and{" "}
          <span className="text-indigo-600 font-bold underline decoration-indigo-200">
            processed 100% in your browser.
          </span>
        </p>
      </header>

      {/* --- THE TOOL ENGINE --- */}
      <ToolWrapper />

      {/* --- SEO CONTENT GRID --- */}
      <section className="mt-32 border-t border-slate-100 dark:border-slate-900 pt-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 dark:bg-indigo-900/20">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black tracking-tight">
              What is a Barcode Generator?
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              An online barcode generator is a digital tool that converts text
              or numbers into a machine-readable visual format. ToolKing
              utilizes high-precision rendering to ensure every generated
              barcode meets global scanning standards for retail and logistics.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 dark:bg-emerald-900/20">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black tracking-tight">
              Choosing the Right Format
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              <strong>Code 128</strong> is the standard for shipping and
              internal tracking.
              <strong>EAN-13</strong> and <strong>UPC-A</strong> are the global
              requirements for retail products. Our tool supports these and
              more, ensuring your inventory is scan-ready from day one.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 dark:bg-rose-900/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black tracking-tight">
              Privacy-First Generation
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Your sensitive business data stays with you. Unlike other
              platforms, ToolKing generates barcodes locally in your browser. No
              data is ever sent to our servers, making it the safest choice for
              enterprise use.
            </p>
          </div>
        </div>

        {/* --- FAQ SECTION (SEO BOOSTER) --- */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Common Questions
            </h2>
            <p className="text-slate-500 font-medium">
              Everything you need to know about professional barcoding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-indigo-500" />
                Is this tool free for commercial use?
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Yes! ToolKing provides industry-standard barcodes for free. You
                can use these for retail products on Amazon, eBay, or your own
                local store without any licensing fees from us.
              </p>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-indigo-500" />
                Why does EAN-13 require 13 digits?
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                EAN-13 is a fixed-length international standard. If you provide
                fewer digits, the scanner will fail. Our validator prevents
                errors by checking your input length in real-time.
              </p>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-indigo-500" />
                Which barcode is best for shipping?
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Code 128 is the most versatile format for shipping labels. It
                supports both letters and numbers and is highly compact, making
                it easy to scan on curved surfaces or small packages.
              </p>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-indigo-500" />
                Can I download high-quality images?
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Absolutely. By default, we generate barcodes at a high scale
                (4x) to ensure they remain sharp and crisp when printed on
                thermal label printers or standard laser jets.
              </p>
            </div>
          </div>
        </div>

        {/* --- INTERNAL LINKING (INDEXING FIX) --- */}
        <div className="mt-32 p-12 bg-indigo-600 rounded-[3.5rem] text-white text-center shadow-2xl shadow-indigo-500/20">
          <h3 className="text-2xl font-black mb-6 italic underline decoration-indigo-400">
            Explore More Professional Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link
              href="/tools/qr-code-generator"
              className="group flex items-center gap-2 text-sm font-black uppercase tracking-widest hover:text-indigo-200 transition-all"
            >
              QR Code Generator{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/tools/pdf-merger"
              className="group flex items-center gap-2 text-sm font-black uppercase tracking-widest hover:text-indigo-200 transition-all"
            >
              PDF Merger{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/tools/pdf-splitter"
              className="group flex items-center gap-2 text-sm font-black uppercase tracking-widest hover:text-indigo-200 transition-all"
            >
              PDF Splitter{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/tools/image-to-pdf"
              className="group flex items-center gap-2 text-sm font-black uppercase tracking-widest hover:text-indigo-200 transition-all"
            >
              Image to PDF{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="mt-20 text-center">
        <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
          <Info className="w-3 h-3" /> ToolKing Utility Engine v2.0
        </div>
      </footer>
    </article>
  );
}
