import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Scale, Lock, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service - ToolKing.online",
  description:
    "Read the terms and conditions for using ToolKing's free online PDF and image tools.",
};

export default function TermsPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-[#020617] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* --- HEADER --- */}
        <header className="mb-16 border-b border-slate-100 dark:border-slate-900 pb-12">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-6">
            Terms of <span className="text-indigo-600">Service</span>
          </h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
            Last Updated: March 23, 2026
          </p>
        </header>

        {/* --- CONTENT --- */}
        <div
          className="prose prose-slate dark:prose-invert max-w-none 
          prose-h2:text-2xl prose-h2:font-black prose-h2:italic prose-h2:uppercase prose-h2:tracking-tighter
          prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed"
        >
          <section className="grid md:grid-cols-2 gap-8 not-prose mb-12">
            <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <ShieldCheck className="text-indigo-600 mb-4" />
              <h3 className="font-black uppercase text-sm mb-2">
                Privacy First
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                We do not store your files. All processing happens locally in
                your browser.
              </p>
            </div>
            <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <Scale className="text-emerald-500 mb-4" />
              <h3 className="font-black uppercase text-sm mb-2">Fair Usage</h3>
              <p className="text-xs text-slate-500 font-medium">
                ToolKing is free for personal and professional use. No hidden
                fees.
              </p>
            </div>
          </section>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using <strong>ToolKing.online</strong>, you agree
            to be bound by these Terms of Service. If you do not agree to these
            terms, please refrain from using our tools.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            ToolKing provides a suite of browser-based utilities including PDF
            conversion, image compression (e.g., 20KB target sizing), and
            developer tools. Most tools are powered by client-side technologies
            like the Canvas API and WebAssembly, meaning your data stays on your
            device.
          </p>

          <h2>3. No Data Storage Policy</h2>
          <p>
            We take your privacy seriously. Unlike many online converters,
            ToolKing does not upload your files to any remote server for
            processing. Consequently, we do not store, view, or share your
            documents or images.
          </p>

          <h2>4. User Responsibilities</h2>
          <p>
            You are solely responsible for the content of the files you process.
            You must not use ToolKing to process any material that violates
            copyright laws or contains malicious software.
          </p>

          <h2>5. Disclaimer of Warranties</h2>
          <p>
            ToolKing is provided "as is" without any warranties. While we strive
            for 100% accuracy (especially for sensitive tasks like{" "}
            <strong>SSC form compression</strong>), we are not liable for any
            form rejections or data loss occurring from the use of our services.
          </p>

          <h2>6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued
            use of the website following any changes constitutes your acceptance
            of the new terms.
          </p>

          <div className="mt-20 p-10 bg-indigo-600 rounded-[3rem] text-white text-center">
            <h3 className="text-2xl font-black italic uppercase mb-4 !mt-0">
              Have Questions?
            </h3>
            <p className="text-indigo-100 mb-8 text-sm font-bold uppercase tracking-tight">
              We are here to help you optimize your workflow.
            </p>
            <Link
              href="mailto:support@toolking.online"
              className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-slate-100 transition-all"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
