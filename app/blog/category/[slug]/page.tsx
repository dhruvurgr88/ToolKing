import { blogPosts } from "../../../lib/blog-data";
import Link from "next/link";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const filteredPosts = blogPosts.filter(
    (post) => post.categorySlug === params.slug,
  );

  if (filteredPosts.length === 0) notFound();

  const categoryName = filteredPosts[0].category;

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 mb-12"
        >
          <ChevronLeft size={14} /> All Articles
        </Link>
        <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase mb-12">
          Category: <span className="text-indigo-600">{categoryName}</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="p-1 rounded-[3rem] bg-slate-100 dark:bg-slate-900 overflow-hidden"
            >
              <div
                className={`bg-white dark:bg-[#020617] rounded-[2.9rem] p-10 bg-gradient-to-br ${post.color}`}
              >
                <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-4">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-500 mb-6">{post.excerpt}</p>
                <ArrowRight className="text-indigo-600" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
