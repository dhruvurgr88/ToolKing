import { Metadata } from "next";
import ToolBridge from "./ToolBridge";
import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
  Zap,
  Lock,
  FileStack,
  Scissors,
  FileText,
} from "lucide-react";

// ✅ 1. KEYWORD-RICH METADATA & CANONICAL
export const metadata: Metadata = {
  title:
    "Unlock PDF Online Free - Remove PDF Password & Restrictions | ToolKing",
  description:
    "Remove passwords from PDF files instantly. Unlock encrypted PDFs securely in your browser. Free, fast, and no file uploads. 100% private PDF password remover.",
  alternates: { canonical: "https://toolking.online/tools/unlock-pdf" },
  keywords: [
    "unlock pdf online free",
    "remove pdf password without software",
    "pdf password remover",
    "decrypt pdf online",
    "unlock encrypted pdf",
  ],
};

export default function UnlockPdfPage() {
  const baseUrl = "https://toolking.online";

  // ✅ 2. BREADCRUMB & FAQ SCHEMA (Rich Results)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Tools",
            item: `${baseUrl}/tools`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Unlock PDF",
            item: `${baseUrl}/tools/unlock-pdf`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can I unlock a PDF without the password?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. To protect document integrity and security, you must provide the correct password to decrypt the file and create an unlocked version.",
            },
          },
          {
            "@type": "Question",
            name: "Is this PDF unlock tool safe to use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. ToolKing uses browser-side processing. Your files and passwords never leave your computer, ensuring 100% data privacy.",
            },
          },
          {
            "@type": "Question",
            name: "Will the PDF formatting change after unlocking?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Our tool removes the encryption layer only. Your text, images, and layout remain exactly as they were in the original file.",
            },
          },
        ],
      },
    ],
  };

  return (
    <article className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* --- BREADCRUMB UI --- */}
      <nav className="pt-24 pb-6 px-6 max-w-7xl mx-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
        <Link href="/" className="hover:text-indigo-600">
          Home
        </Link>
        <ChevronRight size={10} />
        <Link href="/tools" className="hover:text-indigo-600">
          Tools
        </Link>
        <ChevronRight size={10} />
        <span className="text-slate-600 dark:text-slate-200">Unlock PDF</span>
      </nav>

      {/* --- HERO SECTION --- */}
      <div className="text-center px-4 mb-12">
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white italic mb-6">
          Unlock{" "}
          <span className="text-indigo-600 underline decoration-indigo-100 underline-offset-8">
            PDF
          </span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-bold max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Remove passwords and security restrictions from your PDF files. The
          fastest way to{" "}
          <span className="text-slate-900 dark:text-white font-black">
            Unlock PDF Online Free
          </span>
          .
        </p>
      </div>

      <ToolBridge />

      {/* --- ✅ 4. KEYWORD CONTENT & INTERNAL LINKS --- */}
      <div className="max-w-5xl mx-auto mt-32 px-6 space-y-24">
        <section className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-slate-900 dark:text-white">
              Unlock PDF Online Free{" "}
              <span className="text-indigo-600">& Securely</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              Use this professional utility to{" "}
              <strong>remove PDF password without software</strong>{" "}
              installation. Our tool is designed for users who need to decrypt
              documents for printing, editing, or sharing. Because we use{" "}
              <strong>browser-side decryption</strong>, your sensitive data is
              never exposed to a server.
            </p>

            {/* ✅ 3. INTERNAL LINKS ECOSYSTEM */}
            <div className="pt-4 flex flex-wrap gap-3">
              <InternalLink
                href="/tools/protect-pdf"
                icon={<Lock size={12} />}
                label="Protect PDF"
              />
              <InternalLink
                href="/tools/pdf-merger"
                icon={<FileStack size={12} />}
                label="Merge PDF"
              />
              <InternalLink
                href="/tools/pdf-splitter"
                icon={<Scissors size={12} />}
                label="Split PDF"
              />
              <InternalLink
                href="/tools/pdf-to-word"
                icon={<FileText size={12} />}
                label="PDF to Word"
              />
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
            <Feature
              icon={<ShieldCheck className="text-emerald-500" />}
              title="100% Private"
              desc="Decryption happens in your browser."
            />
            <Feature
              icon={<Zap className="text-indigo-500" />}
              title="Instant Removal"
              desc="Get your unlocked file in seconds."
            />
          </div>
        </section>

        {/* --- ✅ 1. FAQ SECTION UI --- */}
        <section className="space-y-12">
          <h2 className="text-4xl font-black italic text-center uppercase tracking-tighter">
            Common <span className="text-indigo-600">Questions</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FAQItem
              q="Can I unlock PDF without password?"
              a="No. To ensure security, you must provide the correct password to remove the encryption."
            />
            <FAQItem
              q="Is this tool free for large files?"
              a="Yes! ToolKing allows you to unlock PDFs of any size for free, processed entirely on your device."
            />
            <FAQItem
              q="Is it safe for my bank statements?"
              a="Absolutely. Since no files are uploaded to our servers, your financial documents remain 100% private."
            />
            <FAQItem
              q="Will I lose quality?"
              a="Not at all. The content remains identical; only the password requirement is removed."
            />
          </div>
        </section>
      </div>
    </article>
  );
}

// HELPER COMPONENTS
function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
      <h3 className="font-black text-sm uppercase tracking-tight text-slate-900 dark:text-white mb-3">
        {q}
      </h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 font-bold leading-relaxed">
        {a}
      </p>
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="mt-1">{icon}</div>
      <div>
        <p className="font-black text-[10px] uppercase tracking-widest text-slate-900 dark:text-white">
          {title}
        </p>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
          {desc}
        </p>
      </div>
    </div>
  );
}

function InternalLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-500 hover:bg-indigo-600 hover:text-white transition-all"
    >
      {icon} {label}
    </Link>
  );
}
