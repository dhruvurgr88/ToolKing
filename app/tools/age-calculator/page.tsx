import { Metadata } from "next";
import AgeClient from "./AgeClient";
import FAQItem from "../../components/FAQItem";
import Link from "next/link";
import {
  History,
  UserCheck,
  CalendarDays,
  Zap,
  ArrowRight,
  Scaling,
  FileText,
  Scissors,
  ImageIcon,
  QrCode,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Age Calculator Online - Calculate Age for SSC & Govt Exam Forms",
  description:
    "Free age calculator for students. Calculate your exact age in years, months, and days for SSC, UPSC, and Vyapam exam forms. Fast, private, and 100% accurate.",
  keywords: [
    "age calculator for ssc",
    "calculate age for exam forms",
    "exact age calculator online",
    "age as of date calculator",
    "ToolKing age calculator",
    "SSC CGL age calculator",
  ],
};

export default function AgeCalculatorPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ToolKing Age Calculator",
    operatingSystem: "Web",
    applicationCategory: "UtilitiesApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Precision age calculator designed for Indian government exam applicants to calculate exact age as of a specific notification date.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How to calculate age for SSC or UPSC exam forms?",
        acceptedAnswer: {
          // Changed from 'answer' to 'acceptedAnswer'
          "@type": "Answer",
          text: "Simply enter your Date of Birth and set the 'Age at the Date of' field to the specific date mentioned in the official exam notification. Our tool will give you the exact years, months, and days.",
        },
      },
      {
        "@type": "Question",
        name: "Is this age calculator accurate for leap years?",
        acceptedAnswer: {
          // Changed from 'answer' to 'acceptedAnswer'
          "@type": "Answer",
          text: "Yes, ToolKing's age calculator accounts for leap years and varying month lengths to ensure 100% accuracy for official documentation.",
        },
      },
    ],
  };

  return (
    <article className="max-w-6xl mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <CalendarDays className="w-3 h-3" /> Precision Date Engine
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-indigo-600 to-slate-900 dark:from-white dark:via-indigo-400 dark:to-white bg-clip-text text-transparent leading-[1.1]">
          Free Age <br /> Calculator Online
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          The most reliable{" "}
          <span className="text-indigo-600 font-black tracking-tighter uppercase underline decoration-indigo-200 italic">
            age calculator for exam forms
          </span>
          . Calculate your exact age for SSC, UPSC, and state-level
          notifications instantly.
        </p>
      </header>

      <AgeClient />

      {/* --- 🔥 EXPANDED BACKLINKS SECTION (The Indexing Booster) --- */}
      <section className="mt-20 py-12 border-y border-slate-100 dark:border-slate-900">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 text-center italic">
          More Useful Tools for Students
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MiniLink
            href="/tools/image-compressor"
            title="Image Compressor"
            icon={<Scaling size={14} />}
          />
          <Link
            href="/tools/pdf-splitter"
            className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-indigo-500 transition-all font-bold text-xs uppercase tracking-tight"
          >
            <div className="flex items-center gap-2">
              <Scissors size={14} className="text-rose-500" /> PDF Splitter
            </div>
            <ArrowRight size={14} />
          </Link>
          <MiniLink
            href="/tools/pdf-to-image"
            title="PDF to Image"
            icon={<ImageIcon size={14} />}
          />
          <MiniLink
            href="/tools/qr-code-generator"
            title="QR Generator"
            icon={<QrCode size={14} />}
          />
        </div>
      </section>

      <section className="mt-24 grid lg:grid-cols-2 gap-20 pt-10">
        <div>
          <h2 className="text-3xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-tight">
            Designed for Students & Government Exam Applicants
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            This free{" "}
            <span className="font-bold text-indigo-600">
              age calculator online
            </span>{" "}
            is specially designed for students preparing for SSC, UPSC, and
            other competitive government exams. It helps you calculate your
            exact age for application forms instantly, ensuring you meet the
            eligibility criteria mentioned in the job notifications.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Whether you need to calculate age as of January 1st or any specific
            date mentioned in a Vyapam or JEE notification, ToolKing provides
            precision down to the single day.
          </p>

          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <UserCheck className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <p className="font-bold text-sm">Exam Date Customization</p>
                <p className="text-xs text-slate-500">
                  Easily calculate age as of the specific cut-off date listed in
                  official PDF notifications.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-8 tracking-tight text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-1">
            <FAQItem
              question="How to calculate age for SSC or UPSC exam forms?"
              answer="Enter your Date of Birth and set the 'Age at the Date of' field to the specific date (cut-off date) mentioned in your exam PDF. Our tool will instantly show your eligibility age."
            />
            <FAQItem
              question="Is this age calculator for exam forms accurate?"
              answer="Yes, ToolKing uses the native JavaScript Date engine which accounts for leap years and varying month lengths, making it 100% reliable for official documents."
            />
          </div>
        </div>
      </section>
    </article>
  );
}

function MiniLink({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon: any;
}) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-indigo-500 transition-all font-bold text-xs uppercase tracking-tight"
    >
      <div className="flex items-center gap-2">
        <span className="text-indigo-500">{icon}</span> {title}
      </div>
      <ArrowRight size={14} />
    </Link>
  );
}
