import Link from "next/link";
import { Clock, ArrowRight, Zap } from "lucide-react";
import { blogPosts } from "../lib/blog-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ToolKing Blog - Pro Guides for PDF, Image & Utility Tools",
  description:
    "Master your digital workflow. Expert guides on compressing images to 20KB, unlocking PDFs, and SEO-optimizing your files safely.",
  alternates: { canonical: "https://toolking.online/blog" },
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="max-w-3xl mb-16">
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.85] mb-6">
            Expert <span className="text-indigo-600">Guides</span>
          </h1>
          <p className="text-slate-500 font-bold text-lg">
            Utility hacks to dominate your digital workflow.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.slug}
              className="group relative flex flex-col p-1 rounded-[3rem] bg-slate-100 dark:bg-slate-900 overflow-hidden hover:scale-[1.02] transition-all duration-500"
            >
              <div
                className={`flex-1 bg-white dark:bg-[#020617] rounded-[2.9rem] p-10 space-y-6 relative overflow-hidden bg-gradient-to-br ${post.color}`}
              >
                <div className="flex justify-between items-start">
                  <Link
                    href={`/blog/category/${post.categorySlug}`}
                    className="text-[9px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1 rounded-full"
                  >
                    {post.category}
                  </Link>
                </div>

                <Link href={`/blog/${post.slug}`} className="block space-y-4">
                  <h2 className="text-2xl font-black italic uppercase leading-tight tracking-tighter group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-500 font-medium line-clamp-2">
                    {post.excerpt}
                  </p>
                </Link>

                <div className="pt-6 border-t border-slate-100 dark:border-slate-900 flex flex-col gap-4">
                  <Link
                    href={post.relatedToolHref}
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:opacity-70"
                  >
                    <Zap size={12} fill="currentColor" /> Use{" "}
                    {post.relatedToolName} →
                  </Link>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-400"
                  >
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime} Read
                    </span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
