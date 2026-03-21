import { Metadata } from "next";
import ToolWrapper from "./ToolWrapper";
import FAQItem from "../../components/FAQItem";
import Link from "next/link"; // Added for internal linking
import {
  ShieldCheck,
  Zap,
  Lock,
  Star,
  FileCheck,
  MousePointerClick,
  ArrowRight,
  Image as ImageIcon,
  Scaling,
  ZapOff,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Image to PDF Converter Online - No Limits | ToolKing",
  description:
    "Convert JPG, PNG, and WebP images to PDF instantly in your browser. 100% private, no file limits, and no registration required. Professional high-quality PDF export.",
  keywords: [
    "image to pdf converter",
    "jpg to pdf online",
    "png to pdf",
    "convert webp to pdf free",
    "ToolKing",
    "merge images to pdf",
  ],
};

export default function ImageToPdfPage() {
  return (
    <article className="max-w-6xl mx-auto px-6 py-12">
      {/* --- HERO SECTION --- */}
      <header className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <Lock className="w-3 h-3" /> 100% Private Browser Processing
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-indigo-600 to-slate-900 dark:from-white dark:via-indigo-400 dark:to-white bg-clip-text text-transparent leading-[1.1]">
          Free Image to PDF <br /> Converter Online
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          The most secure way to merge your photos into a professional PDF
          document. Supports{" "}
          <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-tighter">
            JPG • PNG • WEBP
          </span>
        </p>
      </header>

      {/* --- THE TOOL WRAPPER --- */}
      <ToolWrapper />

      {/* --- 🔥 NEW: INTERNAL LINKS FOR SEO INDEXING --- */}
      <section className="mt-20 py-12 border-y border-slate-100 dark:border-slate-900">
        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8 text-center">
          You might also need these tools
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
                  Optimized for SSC & Vyapam
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
                  Batch Resize 100+ Images
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

      {/* --- DETAILED SEO CONTENT --- */}
      <section className="mt-24 grid lg:grid-cols-2 gap-20 pt-10">
        <div>
          <h2 className="text-3xl font-black mb-6 tracking-tight text-slate-900 dark:text-white">
            Professional PDF Quality
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            ToolKing uses advanced client-side processing to ensure your images
            maintain their original resolution. Unlike other converters that
            compress your files to save server space, we process everything
            locally on your device, allowing for{" "}
            <strong>uncompressed, high-definition PDF generation</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-amber-500 mt-1" />
              <div>
                <p className="font-bold text-sm">Instant Conversion</p>
                <p className="text-xs text-slate-500">
                  Zero-server latency processing.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-500 mt-1" />
              <div>
                <p className="font-bold text-sm">Strictly Private</p>
                <p className="text-xs text-slate-500">
                  Your photos never leave your disk.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Star className="w-5 h-5 text-indigo-500 mt-1" />
              <div>
                <p className="font-bold text-sm">No Watermarks</p>
                <p className="text-xs text-slate-500">
                  Clean, professional documents.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MousePointerClick className="w-5 h-5 text-rose-500 mt-1" />
              <div>
                <p className="font-bold text-sm">Batch Upload</p>
                <p className="text-xs text-slate-500">
                  Merge 50+ images at once.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- FULL FAQ SECTION --- */}
        <div>
          <h2 className="text-3xl font-black mb-8 tracking-tight text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-1">
            <FAQItem
              question="Is this Image to PDF converter free?"
              answer="Yes, ToolKing is 100% free with no hidden charges, subscriptions, or watermarks. You can use it as much as you want."
            />
            <FAQItem
              question="Which image formats are supported?"
              answer="We support all major formats including JPG, JPEG, PNG, and WebP. You can even mix different formats in a single PDF."
            />
            <FAQItem
              question="Is my data safe with ToolKing?"
              answer="Absolutely. Unlike other online converters, ToolKing processes your files directly in your browser. Your images are never uploaded to any server."
            />
            <FAQItem
              question="Can I use this on my mobile phone?"
              answer="Yes! ToolKing is optimized for all mobile browsers. You can take photos directly from your camera and convert them to PDF instantly."
            />
            <FAQItem
              question="Is there a limit on file size?"
              answer="There is no hard limit on our end. You are only limited by your device's available RAM/Memory."
            />
          </div>
        </div>
      </section>
    </article>
  );
}
