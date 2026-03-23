import { Metadata } from "next";
import ToolsGalleryClient from "./ToolsGalleryClient";
import { Sparkles } from "lucide-react";

// ✅ FIX: Keyword-rich Metadata & Canonical
export const metadata: Metadata = {
  title:
    "Free Online Tools - PDF, Image, Text & Developer Utilities | ToolKing",
  description:
    "Access 20+ free, secure online tools. Convert PDF to Word, protect PDFs, compress images, and format JSON instantly in your browser. No sign-up required.",
  alternates: { canonical: "https://toolking.online/tools" },
  keywords: [
    "free online tools",
    "pdf tools online",
    "image compressor",
    "word counter",
    "secure web utilities",
  ],
};

export default function ToolsPage() {
  const baseUrl = "https://toolking.online";

  // ✅ FIX: Breadcrumb & FAQ Schema for Google Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${baseUrl}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Tools",
            item: `${baseUrl}/tools`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is ToolKing free to use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, ToolKing is 100% free. We offer professional-grade PDF, Image, and Text tools with no subscriptions, no hidden costs, and no registration required.",
            },
          },
          {
            "@type": "Question",
            name: "Are my files secure on ToolKing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. ToolKing uses client-side processing. Your files never leave your browser, ensuring total privacy and security for your documents.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-50 transition-colors duration-500">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ✅ FIX: Keyword Optimized H1 Header */}
      <section className="pt-20 pb-12 px-6 border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4">
              <Sparkles className="w-3 h-3" /> Professional Utility Suite
            </div>
            <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-4 uppercase italic leading-[0.9]">
              Free Online <span className="text-indigo-600">Tools</span> for
              PDF, Image & Text
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-bold text-lg md:text-xl">
              Privacy-first web utilities engineered for Students, Developers,
              and Creators. No tracking, no server uploads.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ CLIENT INTERACTION: Search & Filter Grid */}
      <ToolsGalleryClient />

      {/* ✅ FIX: SEO Content Depth (Anti-Thin Content) */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-100 dark:border-slate-900">
        <div className="grid md:grid-cols-2 gap-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter">
              Why use ToolKing for{" "}
              <span className="text-indigo-600">Online Utilities?</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              ToolKing provides a comprehensive suite of{" "}
              <strong>free online tools</strong> designed for speed and
              security. Unlike other platforms, we prioritize your privacy by
              using <strong>client-side processing</strong>. This means your
              sensitive documents—like PDFs for Govt exams or private
              resumes—never touch our servers.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter">
              Secure <span className="text-indigo-600">PDF & Image</span>{" "}
              Processing
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Our <strong>PDF to Word converter</strong> and{" "}
              <strong>Image Compressor</strong> are optimized to maintain high
              quality while reducing file sizes. Whether you are a student
              preparing exam forms or a developer formatting JSON, ToolKing
              offers professional-grade performance directly in your browser.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
