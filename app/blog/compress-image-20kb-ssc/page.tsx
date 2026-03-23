import BlogPost from "../../components/BlogPost";
import Link from "next/link";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  ShieldCheck,
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
  // ✅ JSON-LD for How-To Schema (Huge for SEO)
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Compress Image to 20KB for SSC",
    step: [
      {
        "@type": "HowToStep",
        text: "Upload your photo to ToolKing Image Compressor.",
      },
      { "@type": "HowToStep", text: "Set the target file size to 20KB." },
      { "@type": "HowToStep", text: "Download the optimized JPG file." },
    ],
  };

  return (
    <BlogPost
      title="How to Compress Image to 20KB for SSC"
      date="March 2026"
      category="Exam Prep"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
      <h2>The Exact-Size Hack (Step-by-Step)</h2>
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
          <strong>Format:</strong> Always use <code>.jpg</code> or{" "}
          <code>.jpeg</code>. Most government portals (SSC, UPSC, IBPS) do not
          accept <code>.png</code> or <code>.webp</code>.
        </li>
        <li>
          <strong>Background:</strong> Use a plain white background. It
          compresses more efficiently, allowing for higher facial detail at
          lower KB sizes.
        </li>
        <li>
          <strong>Signature Ink:</strong> Use a black gel pen on white paper.
          Blue ink sometimes loses contrast during heavy compression.
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
              While all compression involves some data loss, our "Smart
              Quantization" algorithm prioritizes facial features and text
              clarity over background data.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-black uppercase text-slate-900 dark:text-white">
              Is it safe to upload my photo?
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              ToolKing uses <strong>Client-Side Processing</strong>. Your images
              never leave your computer or reach our servers. 100% Privacy.
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
