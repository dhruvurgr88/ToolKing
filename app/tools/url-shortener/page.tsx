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
  Calendar,
  ListOrdered,
  Users,
  CheckCircle2,
  Info,
  Link as LinkIcon,
  QrCode,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free URL Shortener | Custom Branded Links & Aliases | ToolKing",
  description:
    "Shorten long URLs instantly. Create custom aliases and branded links for social media. 100% free, fast, and secure link management tool with permanent redirects.",
  keywords: [
    "url shortener",
    "custom link alias",
    "link shortener free",
    "branded urls",
    "ToolKing",
    "shorten link for instagram",
    "permanent url shortener",
  ],
  alternates: {
    canonical: "https://toolking.online/tools/url-shortener",
  },
};

export default function UrlShortenerPage() {
  const baseUrl = "https://toolking.online";
  const toolName = "URL Shortener";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: `${baseUrl}/tools`,
      },
      { "@type": "ListItem", position: 3, name: toolName },
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ToolKing URL Shortener",
    operatingSystem: "Web",
    applicationCategory: "CommunicationsApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Professional link management tool to shorten URLs and create custom branded aliases for social media marketing.",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to shorten a URL for free",
    step: [
      {
        "@type": "HowToStep",
        name: "Paste URL",
        text: "Copy and paste your long destination link into the input field.",
      },
      {
        "@type": "HowToStep",
        name: "Custom Alias",
        text: "Optional: Enter a custom name to create a branded link (e.g., toolking.online/my-brand).",
      },
      {
        "@type": "HowToStep",
        name: "Shorten & Share",
        text: "Click 'Shorten' and copy your new clean link for your bio or social posts.",
      },
    ],
  };

  const faqData = [
    {
      q: "Are these shortened links permanent?",
      a: "Yes! Once shortened, your links remain active indefinitely. We do not delete links as long as they comply with our safety and spam policies.",
    },
    {
      q: "Can I create a custom alias for my link?",
      a: "Absolutely. ToolKing allows you to choose a custom string at the end of your link to build trust and improve your click-through rate (CTR).",
    },
    {
      q: "Is this URL shortener safe for Instagram and X?",
      a: "Yes, our links are optimized for social media platforms. They are clean, secure (HTTPS), and perfectly suited for bios and post descriptions.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <article className="max-w-6xl mx-auto px-6 py-12">
      {/* --- SCHEMAS --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* --- HEADER --- */}
      <header className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <Link2 className="w-3 h-3" /> Marketing & Social Growth
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent leading-[1.1]">
          Free URL Shortener
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
          <span className="flex items-center gap-1">
            <Calendar size={12} /> Updated: March 2026
          </span>
          <span className="w-1 h-1 bg-slate-300 rounded-full" />
          <a
            href="#how-to"
            className="hover:text-blue-600 transition-colors underline underline-offset-4 tracking-widest"
          >
            How it works
          </a>
          <span className="w-1 h-1 bg-slate-300 rounded-full" />
          <a
            href="#use-cases"
            className="hover:text-blue-600 transition-colors underline underline-offset-4 tracking-widest"
          >
            Who is it for?
          </a>
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          Use this <strong>free online URL shortener</strong> to instantly
          create custom aliases and branded links for social media without
          losing quality or performance.
        </p>
      </header>

      <ToolWrapper />

      {/* --- MID-CONTENT INTERNAL LINKS --- */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-6 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 text-center">
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
          Growth Toolkit:
        </p>
        <Link
          href="/tools/qr-code-generator"
          className="flex items-center gap-2 text-indigo-600 font-black text-sm hover:underline"
        >
          <QrCode size={14} /> QR Generator
        </Link>
        <Link
          href="/tools/image-compressor"
          className="flex items-center gap-2 text-blue-600 font-black text-sm hover:underline"
        >
          <Zap size={14} /> Image Compressor
        </Link>
        <Link
          href="/tools/password-generator"
          className="flex items-center gap-2 text-emerald-600 font-black text-sm hover:underline"
        >
          <ShieldCheck size={14} /> Password Gen
        </Link>
      </div>

      {/* --- DEEP DIVE CONTENT --- */}
      <section id="how-to" className="mt-24 grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-tight italic">
            Shorten URLs & Build Brand Trust
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium">
            Messy, long links can hurt your brand's credibility. Our{" "}
            <strong>link shortener tool</strong> allows you to replace complex
            destination URLs with clean, <strong>custom branded aliases</strong>
            . Whether you're sharing a product link in your{" "}
            <strong>Instagram Bio</strong> or an affiliate link on{" "}
            <strong>Twitter (X)</strong>, ToolKing ensures your redirects are
            fast and secure.
          </p>

          <h2
            id="use-cases"
            className="text-2xl font-black mb-4 flex items-center gap-2 text-slate-900 dark:text-white uppercase tracking-tighter"
          >
            <Users size={20} className="text-blue-500" /> Who should use this
            link tool?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-blue-500" /> Content
              Creators for bios
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-blue-500" /> Affiliate
              Marketers
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-blue-500" /> Small
              Business Owners
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={14} className="text-blue-500" /> Digital
              Agencies
            </li>
          </ul>

          <div className="p-6 bg-blue-500/5 rounded-2xl border border-blue-500/10">
            <h2 className="text-xl font-black mb-3 flex items-center gap-2 text-blue-600">
              <Globe size={20} /> Global Reach
            </h2>
            <p className="text-xs text-slate-500 font-bold italic tracking-tight">
              ToolKing supports permanent 301 redirects to ensure your traffic
              reaches the destination with zero latency worldwide.
            </p>
          </div>
        </div>

        <div id="faqs">
          <h2 className="text-3xl font-black mb-8 tracking-tight text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 transition-all hover:border-blue-500/50"
              >
                <h3 className="font-bold text-md mb-2 flex items-center gap-2 text-blue-600 italic">
                  <HelpCircle className="w-4 h-4" /> {item.q}
                </h3>
                <p className="text-slate-500 leading-relaxed text-xs font-bold">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-amber-500/5 rounded-2xl border border-amber-500/10 flex gap-3 italic text-[10px] text-amber-600 font-black uppercase tracking-widest">
            <Info className="shrink-0 w-4 h-4" />
            Pro Tip: Custom aliases (e.g., /best-deal) can increase your link
            clicks by up to 34% compared to random strings.
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="mt-32 p-12 bg-blue-600 rounded-[3.5rem] text-white text-center shadow-2xl shadow-blue-500/20">
        <h3 className="text-2xl font-black mb-6 italic underline decoration-blue-400">
          Scale Your Online Presence
        </h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <RelatedTool href="/tools/qr-code-generator" title="QR Generator" />
          <RelatedTool href="/tools/image-compressor" title="Compressor" />
          <RelatedTool href="/tools/age-calculator" title="Age Calc" />
          <RelatedTool href="/tools/password-generator" title="Pass Gen" />
        </div>
        <div className="mt-12 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] opacity-50">
          <Info className="w-3 h-3" /> ToolKing Growth v2.0
        </div>
      </footer>
    </article>
  );
}

function RelatedTool({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-blue-200 transition-all text-nowrap"
    >
      {title}{" "}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}
