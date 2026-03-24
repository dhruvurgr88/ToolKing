import BlogPost from "../../components/BlogPost";
import Link from "next/link";
import {
  CheckCircle2,
  AlertCircle,
  Zap,
  ExternalLink,
  Info,
} from "lucide-react";

export const metadata = {
  title: "Govt Exam Image Size Guide 2026: SSC, JEE, UPSC, Banking",
  description:
    "Ultimate Cheat Sheet for photo and signature requirements for all major 2026 Indian exams. Dimensions, KB limits, and format guide.",
  alternates: {
    canonical: "https://toolking.online/blog/govt-exam-image-size-guide",
  },
};

export default function BlogGuide() {
  const baseUrl = "https://toolking.online";

  // --- 🍞 1. BREADCRUMB SCHEMA ---
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
        name: "Exam Image Guide",
        item: `${baseUrl}/blog/govt-exam-image-size-guide`,
      },
    ],
  };

  // --- ❓ 2. FAQ SCHEMA ---
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the photo size for SSC CGL 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For SSC CGL, the photo must be between 20KB and 50KB with dimensions of 3.5cm x 4.5cm. The signature must be between 10KB and 20KB.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use a blue background for government exam photos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most exams like SSC and UPSC prefer a plain white background. While some allow light blue, white is the safest option to avoid rejection.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if my image is slightly over 50KB?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most portal servers will automatically reject the file. It is recommended to compress your image to roughly 35-40KB to ensure it stays safely within the 20-50KB limit.",
        },
      },
    ],
  };

  return (
    <BlogPost
      title="The 2026 Govt Exam Image Cheat Sheet"
      date="March 2026"
      category="Resources"
    >
      {/* --- INJECT SCHEMAS --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <p className="lead">
        Understanding the <strong>"Digital Gatekeeper"</strong> is key to a
        successful application. Every year, thousands of forms are rejected
        simply because of incorrect image dimensions or file sizes. Here are the
        definitive requirements for 2026.
      </p>

      {/* --- QUICK ACTION BOX --- */}
      <div className="my-8 p-6 bg-indigo-50 dark:bg-indigo-900/10 rounded-[2rem] border border-indigo-100 dark:border-indigo-900/20 flex items-center justify-between gap-6">
        <div className="flex gap-4 items-center">
          <Zap className="text-indigo-600 shrink-0" size={24} />
          <p className="text-xs font-bold uppercase tracking-tight text-indigo-900 dark:text-indigo-100 !mb-0">
            Ready to fix your photos? Use our one-click target compressor.
          </p>
        </div>
        <Link
          href="/tools/image-compressor"
          className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shrink-0"
        >
          Fix Now
        </Link>
      </div>

      <h2>2026 Master Requirement Table</h2>
      <div className="overflow-x-auto my-8 rounded-[1.5rem] border border-slate-100 dark:border-slate-800">
        <table className="w-full text-left border-collapse bg-white dark:bg-slate-900">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50 uppercase text-[9px] font-black tracking-widest text-slate-400">
              <th className="py-5 px-6">Exam Body</th>
              <th>Photo (KB/Size)</th>
              <th>Signature (KB/Size)</th>
            </tr>
          </thead>
          <tbody className="text-xs font-bold text-slate-500">
            <TableRow
              body="SSC / CGL / CHSL"
              photo="20-50 KB (3.5 x 4.5 cm)"
              sig="10-20 KB (4.0 x 2.0 cm)"
            />
            <TableRow
              body="JEE Main / Advanced"
              photo="10-200 KB (Color/B&W)"
              sig="4-30 KB (White Paper)"
            />
            <TableRow
              body="UPSC (IAS/IPS)"
              photo="20-300 KB (Min 350px)"
              sig="20-300 KB (Min 350px)"
            />
            <TableRow
              body="IBPS / SBI Bank"
              photo="20-50 KB (200 x 230 px)"
              sig="10-20 KB (140 x 60 px)"
            />
            <TableRow
              body="CAT (MBA)"
              photo="Max 80 KB (.jpg/.jpeg)"
              sig="Max 80 KB (.jpg/.jpeg)"
            />
          </tbody>
        </table>
      </div>

      <section className="grid md:grid-cols-2 gap-8 my-16">
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-emerald-500">
            <CheckCircle2 size={18} /> Valid Document Checklist
          </h3>
          <ul className="!mb-0 !list-none !pl-0 space-y-2">
            <li className="text-xs font-bold uppercase tracking-tighter text-slate-500">
              ✓ Recent photo (less than 3 months old)
            </li>
            <li className="text-xs font-bold uppercase tracking-tighter text-slate-500">
              ✓ Eyes at the center of the frame
            </li>
            <li className="text-xs font-bold uppercase tracking-tighter text-slate-500">
              ✓ Plain white or light blue background
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-rose-500">
            <AlertCircle size={18} /> Avoid These Mistakes
          </h3>
          <ul className="!mb-0 !list-none !pl-0 space-y-2">
            <li className="text-xs font-bold uppercase tracking-tighter text-slate-500">
              ✗ Wearing glasses with reflections
            </li>
            <li className="text-xs font-bold uppercase tracking-tighter text-slate-500">
              ✗ Uploading selfies or casual photos
            </li>
            <li className="text-xs font-bold uppercase tracking-tighter text-slate-500">
              ✗ Using blurry or pixilated images
            </li>
          </ul>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="mt-16 p-8 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
        <h3 className="!mt-0 mb-6 flex items-center gap-2">
          <Info size={20} className="text-indigo-500" /> Common Questions
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-black uppercase text-slate-900 dark:text-white">
              Why is my photo being rejected?
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Most rejections occur because the file size is either below 20KB
              or above 50KB. Use our tool to hit exactly 35KB for maximum
              safety.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-black uppercase text-slate-900 dark:text-white">
              Which format is best for Govt Forms?
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Always use .JPG or .JPEG. PNG files are often rejected due to
              larger file sizes and metadata incompatible with older govt
              servers.
            </p>
          </div>
        </div>
      </section>

      <h2>Pro Tips for Flawless Submission</h2>
      <p>
        When you use our{" "}
        <strong>
          <Link href="/tools/image-compressor">Image Compressor</Link>
        </strong>
        , always aim for the <strong>middle of the range</strong>. For example,
        if SSC asks for 20KB-50KB, compressing to <strong>35KB</strong> is the
        safest bet to ensure the portal's internal rounding doesn't kick your
        file out for being "too small" or "too large."
      </p>

      <div className="mt-12 p-8 border-t-2 border-dashed border-slate-100 dark:border-slate-800">
        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
          Related Reading
        </h4>
        <div className="flex flex-col gap-3">
          <Link
            href="/blog/compress-image-20kb-ssc"
            className="flex items-center gap-2 text-sm font-black italic uppercase text-indigo-600 hover:underline"
          >
            <ExternalLink size={14} /> Step-by-Step SSC 20KB Guide
          </Link>
        </div>
      </div>
    </BlogPost>
  );
}

function TableRow({
  body,
  photo,
  sig,
}: {
  body: string;
  photo: string;
  sig: string;
}) {
  return (
    <tr className="border-b border-slate-50 dark:border-slate-800/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
      <td className="py-5 px-6 text-slate-900 dark:text-white font-black italic uppercase tracking-tighter">
        {body}
      </td>
      <td>{photo}</td>
      <td>{sig}</td>
    </tr>
  );
}
