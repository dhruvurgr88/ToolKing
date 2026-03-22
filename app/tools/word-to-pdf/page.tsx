import { Metadata } from "next";
import WordToPdfWrapper from "./WordToPdfWrapper"; // The Client-Side Loader
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Word to PDF Converter Online | Convert DOCX to PDF | ToolKing",
  description:
    "Convert Word (DOCX/DOC) to PDF online for free. Maintain formatting, tables, and layout. 100% secure, browser-based conversion on ToolKing.",
  alternates: { canonical: "https://toolking.online/tools/word-to-pdf" },
  keywords: [
    "word to pdf converter free",
    "convert docx to pdf online",
    "word to pdf without losing formatting",
    "free doc to pdf",
    "safe word converter",
    "edit word to pdf",
  ],
};

export default function WordToPdfPage() {
  // 1. Software Application Schema (For Google Search Results)
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ToolKing Word to PDF Converter",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0" },
  };

  // 2. FAQ Schema (To get Rich Snippets)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is ToolKing Word to PDF converter free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our Word to PDF converter is 100% free with no registration required and no hidden limits.",
        },
      },
      {
        "@type": "Question",
        name: "Is my document safe during conversion?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Your DOCX files are processed locally in your browser. We never upload your sensitive documents to any server.",
        },
      },
    ],
  };

  // 3. Breadcrumb Schema (For Site Hierarchy)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://toolking.online",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: "https://toolking.online/tools",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Word to PDF",
        item: "https://toolking.online/tools/word-to-pdf",
      },
    ],
  };

  return (
    <article className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      {/* --- INJECT SCHEMAS --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* --- HERO SECTION --- */}
      <div className="pt-24 pb-12 text-center px-4">
        <nav className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/tools"
            className="hover:text-indigo-600 transition-colors"
          >
            Tools
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-600 dark:text-slate-200 font-bold">
            Word to PDF
          </span>
        </nav>
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white italic mb-6">
          Word to{" "}
          <span className="text-indigo-600 underline decoration-indigo-100 underline-offset-8">
            PDF Converter
          </span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          The most secure way to{" "}
          <span className="text-slate-900 dark:text-white font-bold">
            convert DOCX to PDF online
          </span>
          . Your files stay private and never leave your browser window.
        </p>
      </div>

      {/* --- THE TOOL (CLIENT SIDE) --- */}
      <WordToPdfWrapper />

      {/* --- SEO CONTENT HUB --- */}
      <div className="max-w-5xl mx-auto mt-32 space-y-24 px-6">
        {/* SECTION 1: KEYWORD RICH CONTENT */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-black italic text-slate-900 dark:text-white">
              Professional Word to PDF{" "}
              <span className="text-indigo-600">Converter Online</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Need to share a document that looks the same on every device? Use
              our **free Word to PDF tool** to transform editable Word files
              into professional PDF documents. We use advanced parsing to ensure
              your fonts, layout, and tables remain intact.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-sm font-black uppercase tracking-widest text-indigo-600 mb-4">
              How to convert Word to PDF?
            </h3>
            <ol className="space-y-4 text-sm font-bold text-slate-700 dark:text-slate-300">
              <li className="flex gap-3">
                <span className="text-indigo-600">01.</span> Upload your .docx
                or .doc file.
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600">02.</span> Click 'Convert to
                PDF Now'.
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600">03.</span> Download your
                high-quality PDF.
              </li>
            </ol>
          </div>
        </section>

        {/* SECTION 2: USE CASES (FOR LONG-TAIL SEO) */}
        <section className="space-y-12">
          <h2 className="text-3xl font-black italic text-center">
            Perfect for Every Document
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                t: "Resumes",
                d: "Ensure your resume layout is never messed up by different Word versions.",
              },
              {
                t: "Contracts",
                d: "Create un-editable versions of your legal contracts for safe sharing.",
              },
              {
                t: "School Work",
                d: "Turn your assignments into universal PDFs for easy grading.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-indigo-600/30 transition-all text-center group"
              >
                <h4 className="font-black uppercase text-[10px] text-indigo-600 mb-3 tracking-widest group-hover:scale-110 transition-transform">
                  {item.t}
                </h4>
                <p className="text-xs font-medium text-slate-500 leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: FAQ GRID (RANKING MAGNET) */}
        <section className="space-y-12">
          <h2 className="text-3xl font-black italic text-center text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {faqSchema.mainEntity.map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800"
              >
                <h4 className="font-bold mb-3 text-slate-900 dark:text-white">
                  {item.name}
                </h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: INTERNAL LINKS (THE LINK NETWORK) */}
        <section className="bg-slate-900 text-white p-12 rounded-[4rem] text-center space-y-10 shadow-2xl">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
            More Tools by ToolKing
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tools/pdf-to-word"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-bold transition-all text-sm"
            >
              PDF to Word
            </Link>
            <Link
              href="/tools/word-counter"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-bold transition-all text-sm"
            >
              Word Counter
            </Link>
            <Link
              href="/tools/ai-summarizer"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-bold transition-all text-sm"
            >
              AI Summarizer
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
