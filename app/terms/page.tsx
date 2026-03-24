import { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Scale,
  Lock,
  Globe,
  Mail,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service - ToolKing.online",
  description:
    "Read the terms and conditions governing the use of ToolKing's browser-side utility tools.",
};

export default function TermsPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-[#020617] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* --- HEADER --- */}
        <header className="mb-16 border-b border-slate-100 dark:border-slate-800 pb-12">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-6">
            Terms & <span className="text-indigo-600">Conditions</span>
          </h1>
          <div className="flex items-center gap-4 text-slate-500 font-bold uppercase tracking-widest text-[10px]">
            <span>Last Updated: March 24, 2026</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full" />
            <span>Region: Madhya Pradesh, India</span>
          </div>
        </header>

        {/* --- CORE PRINCIPLES (VISUAL) --- */}
        <section className="grid md:grid-cols-2 gap-8 not-prose mb-12">
          <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800">
            <ShieldCheck className="text-indigo-600 mb-4" />
            <h3 className="font-black uppercase text-sm mb-2">Privacy First</h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              We do not store your files. All processing happens locally in your
              browser using WASM and Canvas technology.
            </p>
          </div>
          <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800">
            <Scale className="text-emerald-500 mb-4" />
            <h3 className="font-black uppercase text-sm mb-2">
              Legal Compliance
            </h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Governed by the laws of India. Designed to be transparent, fair,
              and safe for students and professionals.
            </p>
          </div>
        </section>

        {/* --- DETAILED TERMS --- */}
        <div
          className="prose prose-slate dark:prose-invert max-w-none 
          prose-h2:text-2xl prose-h2:font-black prose-h2:italic prose-h2:uppercase prose-h2:tracking-tighter prose-h2:mt-12
          prose-h3:text-lg prose-h3:font-bold prose-h3:uppercase prose-h3:text-indigo-600 dark:prose-h3:text-indigo-400
          prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed
          prose-strong:text-slate-900 dark:prose-strong:text-white"
        >
          <h2>1. Interpretation and Definitions</h2>
          <h3>Interpretation</h3>
          <p>
            The following definitions shall have the same meaning regardless of
            whether they appear in singular or in plural.
          </p>
          <h3>Definitions</h3>
          <ul>
            <li>
              <strong>Company:</strong> Refers to ToolKing ("We", "Us", or
              "Our").
            </li>
            <li>
              <strong>Service / Website:</strong> Refers to ToolKing, accessible
              from{" "}
              <Link href="https://toolking.online">
                https://toolking.online
              </Link>
              .
            </li>
            <li>
              <strong>Country:</strong> Refers to Madhya Pradesh, India.
            </li>
            <li>
              <strong>Device:</strong> Any digital device used to access the
              service, such as a computer or smartphone.
            </li>
            <li>
              <strong>You:</strong> The individual or legal entity accessing the
              Service.
            </li>
          </ul>

          <h2>2. Acknowledgment</h2>
          <p>
            These are the Terms and Conditions governing the use of this Service
            and form the agreement between You and the Company. By accessing the
            Service, You represent that you are over the age of 18.
          </p>
          <p>
            Your access to and use of the Service is also conditioned on Your
            acceptance of Our <strong>Privacy Policy</strong>. Please read it
            carefully before using Our browser-side processing utilities.
          </p>

          <h2>3. Description of Service & Privacy</h2>
          <p>
            ToolKing provides browser-based utilities (PDF conversion, 20KB
            image compression, etc.). Unlike traditional converters,{" "}
            <strong>
              Our Service does not upload your files to any remote server
            </strong>
            . All processing happens locally on your Device.
          </p>

          <h2>4. Links to Other Websites</h2>
          <p>
            Our Service may contain links to third-party websites. The Company
            has no control over, and assumes no responsibility for, the content,
            privacy policies, or practices of any third-party websites or
            services.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            Notwithstanding any damages that You might incur, the entire
            liability of the Company under any provision of these Terms shall be
            limited to the amount actually paid by You through the Service or{" "}
            <strong>100 USD</strong> if You haven't purchased anything through
            the Service.
          </p>
          <p>
            In no event shall the Company be liable for any special, incidental,
            or consequential damages (including loss of data or personal injury)
            arising out of the use of or inability to use the Service.
          </p>

          <h2>6. "AS IS" and "AS AVAILABLE" Disclaimer</h2>
          <p>
            The Service is provided to You <strong>"AS IS"</strong> and with all
            faults and defects without warranty of any kind. We make no
            representation that the Service will meet Your specific requirements
            (e.g., exact govt portal acceptance) or operate without error.
          </p>

          <h2>7. Governing Law & Dispute Resolution</h2>
          <p>
            The laws of the <strong>Country (India/Madhya Pradesh)</strong>{" "}
            shall govern these Terms and Your use of the Service. If You have
            any concern or dispute, You agree to first try to resolve the
            dispute informally by contacting the Company.
          </p>

          <h2>8. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. If a
            revision is material, We will make reasonable efforts to provide at
            least 30 days' notice prior to any new terms taking effect.
          </p>

          {/* --- CONTACT CTA --- */}
          <div className="mt-20 p-10 bg-slate-900 rounded-[3rem] text-white text-center border border-indigo-500/20 shadow-2xl">
            <Mail className="mx-auto mb-4 text-indigo-400" size={32} />
            <h3 className="text-2xl font-black italic uppercase mb-4 !mt-0">
              Legal Inquiries?
            </h3>
            <p className="text-slate-400 mb-8 text-sm font-bold uppercase tracking-tight">
              Contact us regarding any technical or legal concerns.
            </p>
            <Link
              href="mailto:dhruvpatelgurjar@gmail.com"
              className="inline-block bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-indigo-500 hover:scale-105 transition-all shadow-xl shadow-indigo-500/20"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
