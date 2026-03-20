import React from "react";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  ServerOff,
  Database,
  Mail,
  MapPin,
  Scale,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ToolKing - Secure & Private Online Tools",
  description:
    "Read the ToolKing Privacy Policy. We prioritize your data safety using local browser processing. No file uploads, no storage, 100% private.",
};

export default function PrivacyPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      {/* --- HEADER --- */}
      <header className="mb-16 border-b border-slate-100 dark:border-slate-900 pb-12 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <ShieldCheck className="w-3 h-3" /> Secure Browser Processing
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-slate-900 dark:text-white leading-tight">
          Privacy Policy
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
          Last updated: March 20, 2026. <br />
          This policy describes how ToolKing (&quot;We&quot;, &quot;Us&quot;, or
          &quot;Our&quot;) collects and handles your information when you use
          our services at{" "}
          <span className="text-indigo-600 font-bold">toolking.online</span>.
        </p>
      </header>

      {/* --- CORE PRIVACY PILLARS --- */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
          <ServerOff className="w-8 h-8 text-rose-500 mb-4" />
          <h3 className="font-bold text-sm uppercase tracking-tight mb-2">
            Local Processing
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Your files (PDFs, Images) stay on your device. We do not upload them
            to any server.
          </p>
        </div>
        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
          <Lock className="w-8 h-8 text-indigo-500 mb-4" />
          <h3 className="font-bold text-sm uppercase tracking-tight mb-2">
            No Accounts
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Use all tools without registration. We don&apos;t store personal
            profiles or document history.
          </p>
        </div>
        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
          <Scale className="w-8 h-8 text-emerald-500 mb-4" />
          <h3 className="font-bold text-sm uppercase tracking-tight mb-2">
            Legal Compliance
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Designed to meet modern privacy standards including GDPR and CCPA
            guidelines.
          </p>
        </div>
      </section>

      {/* --- DETAILED LEGAL CONTENT --- */}
      <div className="space-y-16 text-slate-600 dark:text-slate-400 leading-relaxed">
        {/* Definitions */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6 italic flex items-center gap-2">
            1. Interpretation & Definitions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
              <p className="font-bold text-slate-900 dark:text-white mb-2">
                Company
              </p>
              <p>Refers to ToolKing, located in Madhya Pradesh, India.</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
              <p className="font-bold text-slate-900 dark:text-white mb-2">
                Personal Data
              </p>
              <p>
                Information relating to an identified or identifiable
                individual.
              </p>
            </div>
          </div>
        </section>

        {/* Data Collection */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6 italic">
            2. Collecting Your Data
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                Usage Data
              </h3>
              <p>
                Usage Data is collected automatically. This includes your
                Device&apos;s IP address, browser type, and time spent on pages.
                For mobile users, we may collect device ID and operating system
                info to optimize performance.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                Cookies & Tracking
              </h3>
              <p>
                We use necessary cookies to remember your preferences (like
                Light/Dark mode). We use &quot;Session Cookies&quot; to keep the
                app running and &quot;Persistent Cookies&quot; to remember your
                choice regarding our cookie notice.
              </p>
            </div>
          </div>
        </section>

        {/* Use of Data */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6 italic">
            3. Use of Your Personal Data
          </h2>
          <p className="mb-4">
            ToolKing may use Personal Data for the following purposes:
          </p>
          <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
            {[
              "To maintain and monitor our Service.",
              "To manage your requests and feedback.",
              "For business transfers or acquisitions.",
              "For internal data analysis to improve tools.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800"
              >
                <CheckCircle className="w-4 h-4 text-indigo-500" /> {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Retention */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6 italic">
            4. Data Retention & Security
          </h2>
          <p>
            We retain Usage Data for up to 24 months for analytics and security
            troubleshooting.
            <strong> IMPORTANT:</strong> Your document data (the actual files
            you process) is NEVER retained as it is never uploaded.
          </p>
          <div className="mt-6 p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-sm">
            <p className="font-bold mb-2 flex items-center gap-2">
              <Lock className="w-4 h-4" /> Security Note
            </p>
            While we use commercially reasonable means to protect your technical
            data, no method of transmission over the internet is 100% secure.
          </div>
        </section>

        {/* Contact */}
        <section className="pt-12 border-t border-slate-100 dark:border-slate-900">
          <div className="bg-indigo-600 rounded-[2.5rem] p-10 text-white text-center">
            <h2 className="text-3xl font-black mb-4 tracking-tight">
              Contact Our Privacy Team
            </h2>
            <p className="text-indigo-100 mb-8 max-w-md mx-auto">
              If you have questions about this policy or how we handle your
              information, reach out directly.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a
                href="mailto:dhruvpatelgurjar@gmail.com"
                className="flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all"
              >
                <Mail className="w-5 h-5" /> dhruvpatelgurjar@gmail.com
              </a>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <MapPin className="w-4 h-4" /> Madhya Pradesh, India
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}
