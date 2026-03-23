import { Metadata } from "next";
import ToolBridge from "./ToolBridge";
import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
  Zap,
  ArrowRight,
  FileImage,
  Layers,
  Search,
  Maximize,
} from "lucide-react";

// ✅ SEO METADATA
export const metadata: Metadata = {
  title: "JPG to PNG Converter Online Free - High Quality | ToolKing",
  description:
    "Convert JPG images to PNG format instantly. Maintain high quality and add transparency support. 100% private, browser-side conversion with no uploads.",
  alternates: { canonical: "https://toolking.online/tools/jpg-to-png" },
  keywords: [
    "jpg to png converter",
    "convert jpg to png online free",
    "high quality image converter",
    "browser based image conversion",
  ],
};

export default function JpgToPngPage() {
  const baseUrl = "https://toolking.online";

  // ✅ BREADCRUMB & FAQ SCHEMA
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
            name: "JPG to PNG",
            item: `${baseUrl}/tools/jpg-to-png`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Will I lose image quality during conversion?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Our tool uses a lossless conversion process via the Canvas API. Since PNG is a lossless format, your original image quality is preserved.",
            },
          },
          {
            "@type": "Question",
            name: "Is my image data stored on your server?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Never. ToolKing processes your images locally in your browser. No data is ever uploaded to our servers, ensuring 100% privacy.",
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

      {/* --- BREADCRUMB --- */}
      <nav className="pt-24 pb-6 px-6 max-w-7xl mx-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
        <Link href="/" className="hover:text-indigo-600">
          Home
        </Link>
        <ChevronRight size={10} />
        <Link href="/tools" className="hover:text-indigo-600">
          Tools
        </Link>
        <ChevronRight size={10} />
        <span className="text-slate-600 dark:text-slate-200">JPG to PNG</span>
      </nav>

      {/* --- HERO --- */}
      <div className="text-center px-4 mb-12">
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter italic mb-6 uppercase">
          JPG <ArrowRight className="inline mx-2 text-indigo-600" size={40} />{" "}
          PNG
        </h1>
        <p className="text-slate-500 font-bold max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Convert compressed JPGs into high-quality PNG files with{" "}
          <span className="text-slate-900 dark:text-white underline decoration-indigo-500/30">
            100% Data Privacy
          </span>
          .
        </p>
      </div>

      <ToolBridge />

      {/* --- SEO CONTENT & INTERNAL LINKS --- */}
      <div className="max-w-5xl mx-auto mt-32 px-6 space-y-24">
        <section className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-slate-900 dark:text-white">
              Why convert <span className="text-indigo-600">JPG to PNG?</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              JPG is a "lossy" format, meaning it discards data to save space.{" "}
              <strong>PNG is lossless</strong>, making it the industry standard
              for logos, web graphics, and editing. Our{" "}
              <strong>JPG to PNG converter online free</strong> ensures that
              your pixels remain sharp without any server-side compression
              artifacts.
            </p>

            {/* ✅ INTERNAL LINKING ECOSYSTEM */}
            <div className="pt-4 flex flex-wrap gap-3">
              <InternalLink
                href="/tools/image-compressor"
                label="Compress Image"
              />
              <InternalLink
                href="/tools/bulk-image-resizer"
                label="Bulk Resize"
              />
              <InternalLink href="/tools/image-to-pdf" label="Image to PDF" />
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
            <Feature
              icon={<ShieldCheck className="text-emerald-500" />}
              title="Browser-Side"
              desc="Zero server uploads. Total privacy."
            />
            <Feature
              icon={<Zap className="text-indigo-500" />}
              title="Instant Action"
              desc="No wait times or processing queues."
            />
            <Feature
              icon={<Maximize className="text-blue-500" />}
              title="High Fidelity"
              desc="Retains maximum color depth."
            />
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="space-y-12">
          <h2 className="text-4xl font-black italic text-center uppercase tracking-tighter">
            Image <span className="text-indigo-600">Insights</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
              <h3 className="font-black text-sm uppercase tracking-tight text-slate-900 dark:text-white mb-3">
                Does this support transparency?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-bold leading-relaxed">
                Yes. While JPGs don't have transparency, converting to PNG
                allows you to add transparent layers in editing software later.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
              <h3 className="font-black text-sm uppercase tracking-tight text-slate-900 dark:text-white mb-3">
                Is there a file size limit?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-bold leading-relaxed">
                Since the conversion happens on your device, the limit depends
                on your browser's RAM. Most modern devices handle up to 50MB
                images easily.
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}

// HELPER COMPONENTS
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

function InternalLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-500 hover:bg-indigo-600 hover:text-white transition-all"
    >
      {label}
    </Link>
  );
}
