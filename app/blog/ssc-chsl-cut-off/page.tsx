import BlogPost from "../../components/BlogPost";
import Link from "next/link";
import {
  Trophy,
  TrendingUp,
  Calendar,
  AlertCircle,
  Zap,
  Info,
  CheckCircle2,
  FileText,
} from "lucide-react";

export const metadata = {
  title: "SSC CHSL Cut Off 2026 (Tier 1): Official Post-wise Marks",
  description:
    "Check official SSC CHSL 2026 Cut Off marks for LDC, JSA, and DEO. Compare previous year trends (2015-2025) to understand qualifying thresholds.",
  alternates: {
    canonical: "https://toolking.online/blog/ssc-chsl-cut-off",
  },
};

export default function SSCCutOffBlog() {
  const baseUrl = "https://toolking.online";

  // --- 🍞 BREADCRUMB SCHEMA ---
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resources",
        item: `${baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "SSC CHSL Cut Off",
        item: `${baseUrl}/blog/ssc-chsl-cut-off`,
      },
    ],
  };

  // --- ❓ FAQ SCHEMA ---
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the SSC CHSL Tier 1 Cut Off for UR in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For the LDC/JSA post, the UR cut-off is 144.25858. For DEO (Science Stream), it is 169.54438.",
        },
      },
      {
        "@type": "Question",
        name: "How is the SSC CHSL Cut Off determined?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cut-off depends on factors such as the total number of applicants, exam difficulty level, and available vacancies across different categories.",
        },
      },
    ],
  };

  return (
    <BlogPost
      title="SSC CHSL Cut Off 2026: Official Analysis"
      date="March 2026"
      category="Exam Resources"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <p className="lead">
        The Staff Selection Commission has officially released the{" "}
        <strong>SSC CHSL Tier 1 Cut Off 2026</strong>. Qualified candidates will
        now proceed to the Tier 2 examination. Below is the detailed breakdown
        for all posts including LDC, JSA, and DEO.
      </p>

      {/* --- QUICK ACTION BOX --- */}
      <div className="my-8 p-6 bg-indigo-50 dark:bg-indigo-900/10 rounded-[2rem] border border-indigo-100 dark:border-indigo-900/20 flex items-center justify-between gap-6">
        <div className="flex gap-4 items-center">
          <Zap className="text-indigo-600 shrink-0" size={24} />
          <p className="text-xs font-black uppercase tracking-tight text-indigo-900 dark:text-indigo-100 !mb-0">
            Need to resize your exam documents? Use our 20KB Squeezer.
          </p>
        </div>
        <Link
          href="/tools/pdf-compressor"
          className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shrink-0"
        >
          Open Tool
        </Link>
      </div>

      <h2>Official 2026 Cut-Off Marks</h2>

      {/* --- LDC TABLE --- */}
      <h3 className="flex items-center gap-2 mt-12 mb-4 text-indigo-600 dark:text-indigo-400">
        <FileText size={20} /> LDC / JSA / Clerk-Cum-Typist
      </h3>
      <div className="overflow-x-auto rounded-[1.5rem] border border-slate-100 dark:border-slate-800 mb-12">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50 uppercase text-[9px] font-black tracking-widest text-slate-400">
              <th className="py-4 px-6">Category</th>
              <th className="py-4 px-6">Cut-off Marks</th>
            </tr>
          </thead>
          <tbody className="text-xs font-bold text-slate-500">
            <TableRow label="UR" val="144.25858" />
            <TableRow label="OBC" val="143.83055" />
            <TableRow label="EWS" val="141.42492" />
            <TableRow label="SC" val="125.4025" />
            <TableRow label="ST" val="115.25399" />
          </tbody>
        </table>
      </div>

      {/* --- DEO TABLE --- */}
      <h3 className="flex items-center gap-2 mt-8 mb-4 text-emerald-600 dark:text-emerald-400">
        <Trophy size={20} /> Data Entry Operator (DEO)
      </h3>
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] border border-slate-100 dark:border-slate-800">
          <p className="text-[10px] font-black uppercase text-slate-400 mb-4">
            Science Stream
          </p>
          <ul className="space-y-3 !list-none !pl-0">
            <li className="flex justify-between text-xs font-black">
              <span>UR</span> <span className="text-indigo-600">169.54438</span>
            </li>
            <li className="flex justify-between text-xs font-black">
              <span>OBC</span>{" "}
              <span className="text-indigo-600">169.49507</span>
            </li>
            <li className="flex justify-between text-xs font-black">
              <span>SC</span> <span className="text-indigo-600">157.72055</span>
            </li>
          </ul>
        </div>
        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] border border-slate-100 dark:border-slate-800">
          <p className="text-[10px] font-black uppercase text-slate-400 mb-4">
            Non-Science Stream
          </p>
          <ul className="space-y-3 !list-none !pl-0">
            <li className="flex justify-between text-xs font-black">
              <span>UR</span> <span className="text-indigo-600">165.26551</span>
            </li>
            <li className="flex justify-between text-xs font-black">
              <span>OBC</span>{" "}
              <span className="text-indigo-600">165.26551</span>
            </li>
            <li className="flex justify-between text-xs font-black">
              <span>EWS</span>{" "}
              <span className="text-indigo-600">163.76792</span>
            </li>
          </ul>
        </div>
      </div>

      {/* --- HISTORICAL TRENDS --- */}
      <h2 className="flex items-center gap-2">
        <TrendingUp className="text-indigo-600" /> Historical Trend (2015 -
        2023)
      </h2>
      <p>
        Comparing the UR (Unreserved) category trends over the last decade shows
        a steady increase in competition.
      </p>

      <div className="overflow-x-auto rounded-[1.5rem] border border-slate-100 dark:border-slate-800 my-10">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-slate-900 text-white uppercase text-[8px] font-black tracking-widest">
              <th className="py-4 px-6">Category</th>
              <th>2023</th>
              <th>2022</th>
              <th>2021</th>
              <th>2020</th>
              <th>2019</th>
            </tr>
          </thead>
          <tbody className="text-xs font-bold text-slate-500">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-4 px-6 font-black italic uppercase text-slate-900 dark:text-white">
                UR
              </td>
              <td>153.91</td>
              <td>157.72</td>
              <td>140.18</td>
              <td>141.88</td>
              <td>159.52</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-4 px-6 font-black italic uppercase text-slate-900 dark:text-white">
                OBC
              </td>
              <td>152.26</td>
              <td>153.25</td>
              <td>140.12</td>
              <td>139.42</td>
              <td>156.10</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* --- EXPERT ADVICE --- */}
      <section className="bg-slate-950 p-10 rounded-[3rem] text-white my-16">
        <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4 !mt-0 flex items-center gap-2">
          <Info className="text-indigo-400" /> Preparation Strategy
        </h3>
        <p className="text-slate-400 text-sm font-bold mb-8">
          With cut-offs crossing the 140+ mark for LDC and 165+ for DEO,
          accuracy is paramount. Ensure your <strong>mock test scores</strong>{" "}
          are consistently 10-15 marks above these previous year trends to
          account for normalization variations.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase text-indigo-400">
            <CheckCircle2 size={14} /> Analyze Post-wise Vacancy
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase text-indigo-400">
            <CheckCircle2 size={14} /> Focus on Normalization Trends
          </div>
        </div>
      </section>

      {/* --- FOOTER FAQ --- */}
      <section className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
        <h3 className="!mt-0 mb-6 flex items-center gap-2 font-black uppercase tracking-tighter italic">
          Common Questions
        </h3>
        <div className="space-y-6">
          <FAQItem
            q="Is the SSC CHSL Cut Off same for all posts?"
            a="No. Cut-offs for Data Entry Operator (DEO) are typically higher than for Lower Division Clerk (LDC) due to fewer vacancies and different skill requirements."
          />
          <FAQItem
            q="Does normalization affect the cut-off?"
            a="Yes. SSC uses a normalization formula to balance the difficulty levels of exams conducted across multiple shifts, which influences the final cut-off score."
          />
        </div>
      </section>
    </BlogPost>
  );
}

// --- HELPER COMPONENTS ---

function TableRow({ label, val }: { label: string; val: string }) {
  return (
    <tr className="border-b border-slate-50 dark:border-slate-800/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
      <td className="py-4 px-6 text-slate-900 dark:text-white font-black italic uppercase tracking-tighter">
        {label}
      </td>
      <td className="py-4 px-6">{val}</td>
    </tr>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div>
      <h4 className="text-xs font-black uppercase text-slate-900 dark:text-white mb-2">
        {q}
      </h4>
      <p className="text-[11px] text-slate-500 font-bold leading-relaxed">
        {a}
      </p>
    </div>
  );
}
