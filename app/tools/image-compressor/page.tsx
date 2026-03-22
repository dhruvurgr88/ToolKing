import { Metadata } from "next";
import ToolWrapper from "./ToolWrapper";
import Link from "next/link";
import {
  GraduationCap,
  ShieldCheck,
  Zap,
  ArrowRight,
  Info,
  CheckCircle2,
  Calendar,
  ListOrdered,
  HelpCircle,
  Users,
  MousePointer2,
  FileType,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Image Compressor for Govt Exams | 20KB, 50KB, 100KB | ToolKing",
  description:
    "Compress images specifically for SSC, JEE, and Vyapam. Accurate KB matching, photo resizing, and signature compression. 100% private and free.",
  keywords: [
    "compress image to 20kb",
    "photo resize for ssc form",
    "reduce image size for jee",
    "vyapam photo upload size",
    "image compressor for govt exams",
    "signature resizer 140x60",
    "compress photo to 50kb online",
  ],
  alternates: {
    canonical: "https://toolking.online/tools/image-compressor",
  },
};

export default function ImageCompressorPage() {
  const baseUrl = "https://toolking.online";
  const toolName = "Image Compressor";

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
      { "@type": "ListItem", position: 3, name: "Image Compressor for Exams" },
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ToolKing Exam Image Compressor",
    operatingSystem: "Web",
    applicationCategory: "UtilitiesApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Precise KB-based image compressor for SSC, JEE, and Vyapam exam forms. Adjust quality to meet 20KB, 50KB, or 100KB limits.",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to compress photo for SSC & JEE forms",
    step: [
      {
        "@type": "HowToStep",
        name: "Upload Document",
        text: "Select your passport size photo, signature, or handwritten note.",
      },
      {
        "@type": "HowToStep",
        name: "Select Target Size",
        text: "Adjust the quality slider or input the exact target size (e.g., 20KB, 50KB, or 100KB).",
      },
      {
        "@type": "HowToStep",
        name: "Download Validated JPG",
        text: "Download your compressed image instantly, ready for the government exam portal.",
      },
    ],
  };

  const faqData = [
    {
      q: "How to compress image to 20kb for SSC form?",
      a: "Upload your photo to ToolKing, set the target size to 20KB, and our smart algorithm will adjust the quality locally to ensure the file size is below the limit while keeping your face clear.",
    },
    {
      q: "Is it safe to upload my personal photos to ToolKing?",
      a: "Yes. All compression happens locally in your browser. Your photos are NEVER uploaded to any server, making it 100% safe for government identity documents.",
    },
    {
      q: "Does this work for Vyapam handwritten templates?",
      a: "Yes, our high-precision compression ensures that handwritten declarations for Vyapam (PEB) remain legible even when reduced below 100KB.",
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
          <GraduationCap className="w-3 h-3" /> Exam Portal Optimized
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent leading-[1.1]">
          Govt Exam Image Hub
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
          <span className="flex items-center gap-1">
            <Calendar size={12} /> Last Updated: March 2026
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
            href="#faqs"
            className="hover:text-blue-600 transition-colors underline underline-offset-4 tracking-widest"
          >
            FAQs
          </a>
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Use this <strong>online image compressor</strong> to instantly reduce
          image size to 20KB, 50KB, or 100KB for{" "}
          <strong>SSC, JEE, Vyapam, and NTA forms</strong> without losing facial
          clarity or formatting.
        </p>
      </header>

      <ToolWrapper />

      {/* --- MID-CONTENT INTERNAL LINKS --- */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-6 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 text-center">
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
          Boost Your Exam Application:
        </p>
        <Link
          href="/tools/pdf-merger"
          className="flex items-center gap-2 text-blue-600 font-black text-sm hover:underline"
        >
          PDF Merger <ArrowRight size={14} />
        </Link>
        <Link
          href="/tools/image-to-pdf"
          className="flex items-center gap-2 text-indigo-600 font-black text-sm hover:underline"
        >
          Image to PDF <ArrowRight size={14} />
        </Link>
        <Link
          href="/tools/age-calculator"
          className="flex items-center gap-2 text-emerald-600 font-black text-sm hover:underline"
        >
          Age Calculator <ArrowRight size={14} />
        </Link>
      </div>

      {/* --- DEEP DIVE CONTENT --- */}
      <section id="how-to" className="mt-24 grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-tight italic">
            How to compress photo for JEE & SSC?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium">
            Most government portals like <strong>NTA (JEE)</strong> and{" "}
            <strong>SSC</strong> require a photo between{" "}
            <strong>20KB to 50KB</strong>. To{" "}
            <strong>compress image to 20kb</strong> without losing face clarity,
            ToolKing uses a recursive algorithm that adjusts quality locally in
            your browser until the exact KB target is met.
          </p>

          <h2 className="text-2xl font-black mb-4 flex items-center gap-2 text-slate-900 dark:text-white uppercase tracking-tighter">
            <Users size={20} className="text-blue-500" /> Who should use this
            case converter tool?
          </h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={16} className="text-blue-500" /> SSC CGL/CHSL
              candidates (20KB - 50KB photo)
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={16} className="text-blue-500" /> JEE & NEET
              applicants (NTA requirements)
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={16} className="text-blue-500" /> MP Vyapam
              (PEB) & State Board students
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-500 font-bold">
              <CheckCircle2 size={16} className="text-blue-500" /> Signature
              resizing (140x60 pixels under 20KB)
            </li>
          </ul>

          <div className="p-6 bg-blue-500/5 rounded-2xl border border-blue-500/10">
            <h2 className="text-xl font-black mb-3 flex items-center gap-2 text-blue-600">
              <FileType size={20} /> Supported Formats
            </h2>
            <p className="text-xs text-slate-500 font-bold italic">
              ToolKing supports exact JPG compression for Vyapam combined
              templates and high-resolution signatures without server uploads.
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
            Pro Tip: Always use JPG format for Indian Govt sites as they rarely
            accept WebP or PNG.
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="mt-32 p-12 bg-blue-600 rounded-[3.5rem] text-white text-center shadow-2xl shadow-blue-500/20">
        <h3 className="text-2xl font-black mb-6 italic underline decoration-blue-400">
          Essential Exam Utilities
        </h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <RelatedTool href="/tools/pdf-merger" title="PDF Merger" />
          <RelatedTool href="/tools/image-to-pdf" title="Img to PDF" />
          <RelatedTool href="/tools/age-calculator" title="Age Calc" />
          <RelatedTool href="/tools/qr-code-generator" title="QR Gen" />
        </div>
        <div className="mt-12 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] opacity-50">
          <Info className="w-3 h-3" /> ToolKing Utility Engine v2.0
        </div>
      </footer>
    </article>
  );
}

function RelatedTool({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-blue-200 transition-all"
    >
      {title}{" "}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}
