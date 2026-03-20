import { Metadata } from "next";
import ToolWrapper from "../qr-code-generator/ToolWrapper";
import FAQItem from "../../components/FAQItem";
import { QrCode, Share2, Download, ShieldCheck, Zap } from "lucide-react";

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
          Professional <br /> QR Generator
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Create beautiful, high-resolution QR codes for your business or
          personal use. No tracking, no expiration, just pure utility.
        </p>
      </header>

      <ToolWrapper />

      <section className="mt-24 grid lg:grid-cols-2 gap-16 border-t border-slate-100 dark:border-slate-900 pt-20">
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
          <h2 className="text-3xl font-black mb-8 tracking-tight">FAQs</h2>
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
