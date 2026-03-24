import { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Cpu,
  Lock,
  Zap,
  Globe,
  UserCheck,
  Code2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About ToolKing - Privacy-First Utility Engine",
  description:
    "Learn how ToolKing is revolutionizing online utilities with 100% browser-side processing and zero data storage.",
  alternates: { canonical: "https://toolking.online/about" },
};

export default function AboutPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-[#020617] pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* --- HERO SECTION --- */}
        <header className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-8">
            <Code2 size={12} /> Our Mission
          </div>
          <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.85] mb-8">
            Privacy shouldn't be a{" "}
            <span className="text-indigo-600">Premium</span> Feature.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-bold leading-relaxed max-w-3xl">
            ToolKing was founded on a simple realization: the web is full of
            "free" tools that secretly harvest your data. We built a
            high-performance engine where your files never leave your device.
          </p>
        </header>

        {/* --- THE TECH STACK (TRUST SIGNAL) --- */}
        <section className="grid md:grid-cols-3 gap-8 mb-32">
          <div className="p-10 rounded-[3rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 space-y-4">
            <Cpu className="text-indigo-600" size={32} />
            <h3 className="text-lg font-black uppercase italic tracking-tighter">
              WASM Powered
            </h3>
            <p className="text-xs text-slate-500 font-bold leading-relaxed">
              We leverage WebAssembly to run complex C# and C++ logic directly
              in your browser's RAM at near-native speeds.
            </p>
          </div>
          <div className="p-10 rounded-[3rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 space-y-4">
            <Lock className="text-emerald-500" size={32} />
            <h3 className="text-lg font-black uppercase italic tracking-tighter">
              Zero Uploads
            </h3>
            <p className="text-xs text-slate-500 font-bold leading-relaxed">
              Your "Unlock PDF" or "Compress Image" tasks happen locally. We
              physically cannot see your documents.
            </p>
          </div>
          <div className="p-10 rounded-[3rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 space-y-4">
            <Globe className="text-amber-500" size={32} />
            <h3 className="text-lg font-black uppercase italic tracking-tighter">
              Edge Native
            </h3>
            <p className="text-xs text-slate-500 font-bold leading-relaxed">
              By removing the server-trip, we eliminate latency. ToolKing works
              as fast as your computer can process.
            </p>
          </div>
        </section>

        {/* --- THE PROBLEM WE SOLVE --- */}
        <section className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-tight">
              Built for the <br />
              <span className="text-indigo-600">Digital Student</span>
            </h2>
            <div className="prose prose-slate dark:prose-invert">
              <p className="text-lg font-medium text-slate-600 dark:text-slate-400">
                In India, students applying for{" "}
                <strong>SSC, UPSC, or JEE</strong> often struggle with strict
                document upload limits. Many resort to shady websites that
                scrape their Aadhar cards and personal IDs just to resize a
                photo.
              </p>
              <p className="text-lg font-medium text-slate-600 dark:text-slate-400">
                ToolKing provides a <strong>safe haven</strong>. Our "Target
                Size" technology was specifically engineered to help students
                hit the 20KB/50KB limits perfectly without losing facial clarity
                or risking their data privacy.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-black italic tracking-tighter">
                  100%
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Browser Processing
                </span>
              </div>
              <div className="w-px h-10 bg-slate-200 dark:bg-slate-800" />
              <div className="flex flex-col">
                <span className="text-3xl font-black italic tracking-tighter">
                  FREE
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  No Hidden Costs
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-600/20 blur-[120px] rounded-full" />
            <div className="relative p-12 bg-slate-900 rounded-[4rem] border border-white/10 shadow-2xl">
              <UserCheck className="text-indigo-400 mb-6" size={40} />
              <h4 className="text-white text-2xl font-black italic uppercase tracking-tighter mb-4">
                Our Commitment
              </h4>
              <p className="text-slate-400 text-sm font-bold leading-relaxed mb-8 uppercase tracking-tight">
                "We believe that powerful tools shouldn't come at the cost of
                your digital soul. ToolKing will remain free, ad-light, and
                server-less as long as we exist."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-black text-white italic">
                  TK
                </div>
                <div>
                  <p className="text-[10px] font-black text-white uppercase tracking-widest">
                    ToolKing Dev Team
                  </p>
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                    Privacy Engineering Dept.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FOOTER CTA --- */}
        <section className="text-center p-20 bg-slate-100 dark:bg-slate-900 rounded-[4rem]">
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-8">
            Ready to experience{" "}
            <span className="text-indigo-600">The Future</span> of tools?
          </h2>
          <Link
            href="/tools"
            className="inline-flex items-center gap-4 bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-indigo-500/20"
          >
            Go to Workshop <ArrowRight size={18} />
          </Link>
        </section>
      </div>
    </article>
  );
}
