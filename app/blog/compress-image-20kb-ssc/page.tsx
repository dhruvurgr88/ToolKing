import BlogPost from "../../components/BlogPost";
import Link from "next/link";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  Zap,
  Info,
} from "lucide-react";

export const metadata = {
  title: "How to Compress Image to 20KB for SSC Form (2026 Guide)",
  description:
    "Learn how to compress your photo and signature to exactly 20KB for SSC, JEE, and Govt exams. Step-by-step guide to avoid form rejection with ToolKing.",
  alternates: {
    canonical: "https://toolking.online/blog/compress-image-20kb-ssc",
  },
};

export default function BlogSSC() {
  const baseUrl = "https://toolking.online";

  // --- 🛠️ 1. HOW-TO SCHEMA ---
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Compress Image to 20KB for SSC",
    description:
      "Follow these steps to compress your govt exam photos to exactly 20KB without losing quality.",
    step: [
      {
        "@type": "HowToStep",
        url: `${baseUrl}/blog/compress-image-20kb-ssc#step1`,
        text: "Go to ToolKing Image Compressor and upload your photo.",
      },
      {
        "@type": "HowToStep",
        url: `${baseUrl}/blog/compress-image-20kb-ssc#step2`,
        text: "Set the target file size to 20KB in the compression settings.",
      },
      {
        "@type": "HowToStep",
        url: `${baseUrl}/blog/compress-image-20kb-ssc#step3`,
        text: "Click compress and download the optimized JPG file.",
      },
    ],
  };

  // --- 🍞 2. BREADCRUMB SCHEMA (Google Nav) ---
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Compress Image to 20KB",
        item: `${baseUrl}/blog/compress-image-20kb-ssc`,
      },
    ],
  };

  // --- ❓ 3. FAQ SCHEMA (Google Dropdowns) ---
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I compress images without losing quality?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, ToolKing uses Smart Quantization to prioritize facial features and text clarity while reducing file size.",
        },
      },
      {
        "@type": "Question",
        name: "Is ToolKing safe for my ID photos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. ToolKing uses browser-side processing, meaning your images never leave your computer or reach any server.",
        },
      },
    ],
  };

  return (
    <BlogPost
      title="How to Compress Image to 20KB for SSC"
      date="March 2026"
      category="Exam Prep"
    >
      {/* --- INJECT ALL SCHEMAS --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* --- URGENCY SECTION --- */}
      <section className="bg-rose-50 dark:bg-rose-900/10 p-8 rounded-[2.5rem] border border-rose-100 dark:border-rose-900/20 mb-12">
        <h2 className="flex items-center gap-2 text-rose-600 !mt-0 !mb-4">
          <AlertTriangle /> The 11th Hour Nightmare
        </h2>
        <p className="!mb-0">
          You’ve spent hours filling out the SSC CGL or CHSL form, but the
          "Submit" button keeps failing. The error?{" "}
          <strong>"Image must be between 10KB and 20KB."</strong>
          Standard compressors often leave you at 21KB or turn your face into a
          blurry mess, leading to <strong>manual rejection</strong> during
          verification.
        </p>
      </section>

      {/* --- MAIN GUIDE --- */}
      <h2 id="step-by-step">The Exact-Size Hack (Step-by-Step)</h2>
      <p>
        To avoid rejection, you need a compressor that understands{" "}
        <strong>KB Targeting</strong>. Follow these steps to get a perfect
        result every time:
      </p>

      <div className="space-y-6 my-8">
        <Step number="1" title="Access the Engine">
          Go to the{" "}
          <strong>
            <Link
              href="/tools/image-compressor"
              className="text-indigo-600 underline"
            >
              ToolKing Image Compressor
            </Link>
          </strong>
          . Our tool runs locally in your browser, ensuring your personal ID
          photos stay private.
        </Step>
        <Step number="2" title="Upload & Target">
          Select your photo or signature. In the <strong>Target Size</strong>{" "}
          field, enter <code>20</code> and select <code>KB</code>.
        </Step>
        <Step number="3" title="Fine-Tune (Optional)">
          If the preview looks too soft, try 19KB. This ensures that even if the
          govt server calculates size differently, you stay under the limit.
        </Step>
        <Step number="4" title="Verify & Download">
          Check the dimensions. Most govt forms require{" "}
          <strong>3.5cm x 4.5cm</strong>. Our tool preserves aspect ratios to
          prevent stretching.
        </Step>
      </div>

      {/* --- INTERNAL TOOL LINK CARD --- */}
      <div className="my-12 p-10 bg-slate-950 rounded-[3rem] text-white text-center shadow-2xl shadow-indigo-500/20 border border-indigo-500/30">
        <Zap className="mx-auto mb-4 text-indigo-400" size={32} />
        <h3 className="text-3xl font-black italic uppercase mb-4 tracking-tighter">
          Don't Risk Rejection
        </h3>
        <p className="text-slate-400 font-bold mb-8 text-sm">
          Hit the 20KB limit exactly with our AI-powered target compression.
        </p>
        <Link
          href="/tools/image-compressor"
          className="inline-flex items-center gap-3 bg-indigo-600 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-500 hover:scale-105 transition-all active:scale-95"
        >
          Compress to 20KB Now <ArrowRight size={16} />
        </Link>
      </div>

      {/* --- EXPERT TIPS --- */}
      <h2 className="flex items-center gap-2">
        <CheckCircle className="text-emerald-500" /> Pro Tips for Exam Photos
      </h2>
      <ul>
        <li>
          <strong>Format:</strong> Always use <code>.jpg</code>. Most portals do
          not accept <code>.png</code>.
        </li>
        <li>
          <strong>Background:</strong> Use a plain white background for better
          facial detail at low KB.
        </li>
        <li>
          <strong>Signature:</strong> Use a black gel pen on white paper for the
          best contrast.
        </li>
      </ul>

      {/* --- FAQ SECTION --- */}
      <section className="mt-16 p-8 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
        <h3 className="!mt-0 mb-6 flex items-center gap-2">
          <Info size={20} className="text-indigo-500" /> Frequently Asked
          Questions
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-black uppercase text-slate-900 dark:text-white">
              Can I compress without losing quality?
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              ToolKing uses Smart Quantization to prioritize facial features and
              text clarity while reducing data.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-black uppercase text-slate-900 dark:text-white">
              Is it safe to upload my photo?
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Yes. ToolKing uses 100% Client-Side Processing. Your images never
              leave your computer.
            </p>
          </div>
        </div>
      </section>
    </BlogPost>
  );
}

// Helper Step Component
function Step({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-6 items-start group">
      <div className="w-10 h-10 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white font-black text-sm shadow-lg group-hover:scale-110 transition-transform">
        {number}
      </div>
      <div>
        <h4 className="font-black uppercase text-sm tracking-tight mb-1">
          {title}
        </h4>
        <div className="text-slate-500 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
