import { Metadata } from "next";
import ToolWrapper from "../password-generator/ToolWrapper";
import Link from "next/link";
import {
  Lock,
  ShieldCheck,
  Zap,
  Fingerprint,
  ArrowRight,
  Scaling,
  Image as ImageIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Strong Password Generator | Secure & Random | ToolKing",
  description:
    "Create ultra-secure, random passwords instantly. Customize length, symbols, and numbers. 100% private, client-side generation for maximum security.",
  keywords: [
    "password generator",
    "secure password creator",
    "random string generator",
    "strong password maker",
    "ToolKing",
    "security tools",
  ],
};

export default function PasswordGeneratorPage() {
  return (
    <article className="max-w-6xl mx-auto px-6 py-12">
      <header className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <ShieldCheck className="w-3 h-3" /> Military Grade Security
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-emerald-600 to-slate-900 dark:from-white dark:via-emerald-400 dark:to-white bg-clip-text text-transparent leading-[1.1]">
          Strong Password Generator <br />
          <span className="text-emerald-600 text-3xl md:text-5xl opacity-80">
            (100% Private & Offline)
          </span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Protect your digital life with unhackable passwords. Generated{" "}
          <span className="text-emerald-600 font-bold underline decoration-emerald-200">
            locally in your browser
          </span>
          —your secrets never leave your device.
        </p>
      </header>

      <ToolWrapper />

      {/* --- 🔥 NEW: INTERNAL LINKS FOR SEO INDEXING --- */}
      <section className="mt-20 py-12 border-y border-slate-100 dark:border-slate-900">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 text-center italic">
          More Essential Tools for Your Digital Workflow
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/tools/image-compressor"
            className="group p-6 bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/10 rounded-[2.5rem] transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-blue-600 border border-blue-100 dark:border-slate-700">
                <Zap size={20} />
              </div>
              <div>
                <p className="font-black text-sm uppercase tracking-tight text-slate-900 dark:text-white">
                  Image Compressor
                </p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest italic">
                  Fast & Private KB Matcher
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
            className="group p-6 bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/10 rounded-[2.5rem] transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-emerald-600 border border-emerald-100 dark:border-slate-700">
                <Scaling size={20} />
              </div>
              <div>
                <p className="font-black text-sm uppercase tracking-tight text-slate-900 dark:text-white">
                  Bulk Resizer
                </p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest italic">
                  Resize Folders of Images
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

      <section className="mt-32 pt-10">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 dark:bg-emerald-900/20">
              <Fingerprint className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black tracking-tight">
              Zero-Knowledge Tech
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Most online generators send your password to their database.
              ToolKing uses the Web Crypto API to generate strings directly on
              your CPU. We literally cannot see what you create.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 dark:bg-blue-900/20">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black tracking-tight">
              Instant Customization
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Need to exclude confusing characters like 'i' and 'l'? Need
              specifically 32 characters? Our tool gives you granular control
              over every byte of your security.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 dark:bg-amber-900/20">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black tracking-tight">
              Entropy Focused
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              We don't just pick random letters; we maximize entropy. This
              ensures your passwords are resistant to brute-force attacks and
              dictionary-based hacking.
            </p>
          </div>
        </div>

        {/* RELATED TOOLS FOOTER */}
        <div className="mt-32 p-12 bg-emerald-600 rounded-[3.5rem] text-white text-center shadow-2xl shadow-emerald-500/20">
          <h3 className="text-2xl font-black mb-6 italic">
            Secure Your Other Assets
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <RelatedTool href="/tools/pdf-merger" title="PDF Merger" />
            <RelatedTool
              href="/tools/qr-code-generator"
              title="QR Code Generator"
            />
          </div>
        </div>
      </section>
    </article>
  );
}

function RelatedTool({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-emerald-200 transition-all"
    >
      {title}{" "}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}
