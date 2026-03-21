import { Metadata } from "next";
import ToolWrapper from "./ToolWrapper";
import Link from "next/link";
import {
  Link2,
  ShieldCheck,
  Zap,
  Globe,
  ArrowRight,
  HelpCircle,
  ExternalLink,
  MousePointer2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free URL Shortener | Custom Branded Links | ToolKing",
  description:
    "Shorten long URLs instantly. Create custom aliases and branded links for social media. 100% free, fast, and secure link management tool.",
  keywords: [
    "url shortener",
    "custom link alias",
    "link shortener free",
    "branded urls",
    "ToolKing",
    "shorten link for instagram",
  ],
};

export default function UrlShortenerPage() {
  return (
    <article className="max-w-6xl mx-auto px-6 py-12">
      {/* --- 🔥 FIX 1: SEO Optimized H1 --- */}
      <header className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <Link2 className="w-3 h-3" /> Marketing & Social Growth
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent leading-[1.1]">
          Free URL Shortener <br />
          <span className="text-blue-600 text-3xl md:text-5xl opacity-80">
            (Custom Branded Links)
          </span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          The professional way to manage your links. Create short, clean, and
          <span className="text-blue-600 font-bold underline decoration-blue-200 ml-1">
            customizable aliases
          </span>{" "}
          for your brand in seconds.
        </p>
      </header>

      <ToolWrapper />

      {/* --- 🔥 FIX 5: SEO Content (Ranking Booster) --- */}
      <section className="mt-32 border-t border-slate-100 dark:border-slate-900 pt-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 dark:bg-blue-900/20">
              <MousePointer2 className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black tracking-tight">
              Why Use a URL Shortener?
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Long URLs look messy and unprofessional on social media. A
              shortener makes your links cleaner, easier to remember, and more
              clickable. It’s essential for platforms like X (Twitter) and
              Instagram bios.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 dark:bg-indigo-900/20">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black tracking-tight">
              Custom Branded Aliases
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Stand out by creating custom endings for your links (e.g.,
              toolking.online/my-brand). Custom aliases build trust with your
              audience and increase your click-through rates (CTR).
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 dark:bg-emerald-900/20">
              <Globe className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black tracking-tight">
              Global Connectivity
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Our links are optimized for every device and browser worldwide.
              Whether your audience is on a desktop or a smartphone in India or
              the USA, they’ll get to your destination instantly.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-32 max-w-5xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-blue-600">
                <HelpCircle className="w-5 h-5" /> Are these links permanent?
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Yes! Once shortened, your links remain active indefinitely. We
                do not delete links as long as they comply with our safety and
                spam policies.
              </p>
            </div>
            <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-blue-600">
                <HelpCircle className="w-5 h-5" /> Does it support HTTPS?
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Absolutely. All redirects are handled through secure HTTPS
                protocols to ensure the safety of your users and your data.
              </p>
            </div>
          </div>
        </div>

        {/* Internal Linking */}
        <div className="mt-32 p-12 bg-blue-600 rounded-[3.5rem] text-white text-center shadow-2xl shadow-blue-500/20">
          <h3 className="text-2xl font-black mb-6 italic underline decoration-blue-400">
            Grow Your Audience Faster
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <RelatedTool
              href="/tools/qr-code-generator"
              title="QR Code Generator"
            />
            <RelatedTool
              href="/tools/barcode-generator"
              title="Barcode Generator"
            />
            <RelatedTool href="/tools/pdf-merger" title="PDF Merger" />
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
      className="group flex items-center gap-2 text-sm font-black uppercase tracking-widest text-white hover:text-blue-200 transition-all"
    >
      {title}{" "}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}
