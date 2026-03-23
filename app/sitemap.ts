import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { blogPosts } from "../app/lib/blog-data"; // ✅ Import your centralized data

/**
 * Helper to get the actual file modification date.
 */
function getFileDate(relativeFilePath: string) {
  try {
    const filePath = path.join(process.cwd(), "app", relativeFilePath);
    const stats = fs.statSync(filePath);
    return stats.mtime;
  } catch (e) {
    return new Date();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://toolking.online";

  // --- 1. PDF TOOLS (7 Tools) ---
  const pdfTools = [
    { slug: "pdf-to-word", priority: 0.9 },
    { slug: "word-to-pdf", priority: 0.9 },
    { slug: "protect-pdf", priority: 0.9 },
    { slug: "unlock-pdf", priority: 0.9 },
    { slug: "pdf-merger", priority: 0.8 },
    { slug: "pdf-splitter", priority: 0.8 },
    { slug: "pdf-to-image", priority: 0.7 },
  ];

  // --- 2. IMAGE TOOLS (4 Tools) ---
  const imageTools = [
    { slug: "image-compressor", priority: 0.9 },
    { slug: "image-to-pdf", priority: 0.8 },
    { slug: "bulk-image-resizer", priority: 0.7 },
    { slug: "jpg-to-png", priority: 0.8 }, // ✅ Added missing tool
  ];

  // --- 3. UTILITY & BUSINESS (5 Tools) ---
  const utilityTools = [
    { slug: "age-calculator", priority: 0.7 },
    { slug: "qr-code-generator", priority: 0.7 },
    { slug: "password-generator", priority: 0.7 },
    { slug: "url-shortener", priority: 0.6 },
    { slug: "barcode-generator", priority: 0.6 },
  ];

  // --- 4. TEXT & DEVELOPER (4 Tools) ---
  const devTools = [
    { slug: "word-counter", priority: 0.7 },
    { slug: "json-formatter", priority: 0.7 },
    { slug: "ai-summarizer", priority: 0.8 },
    { slug: "case-converter", priority: 0.6 },
  ];

  // --- 5. CATEGORY SILOS ---
  const categories = [
    { slug: "exam-prep", priority: 0.6 },
    { slug: "resources", priority: 0.6 },
    { slug: "pro-tips", priority: 0.6 },
  ];

  const allTools = [...pdfTools, ...imageTools, ...utilityTools, ...devTools];

  // --- ENTRIES GENERATION ---

  const toolEntries = allTools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: getFileDate(`tools/${tool.slug}/page.tsx`),
    changeFrequency: "monthly" as const,
    priority: tool.priority,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: getFileDate(`blog/${post.slug}/page.tsx`),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const categoryEntries = categories.map((cat) => ({
    url: `${baseUrl}/blog/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: cat.priority,
  }));

  return [
    // --- CORE PAGES ---
    {
      url: baseUrl,
      lastModified: getFileDate("page.tsx"),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: getFileDate("tools/page.tsx"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: getFileDate("blog/page.tsx"),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // --- DYNAMIC SECTIONS ---
    ...toolEntries,
    ...blogEntries,
    ...categoryEntries,

    // --- LEGAL PAGES ---
    {
      url: `${baseUrl}/privacy`,
      lastModified: getFileDate("privacy/page.tsx"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: getFileDate("terms/page.tsx"), // ✅ Added terms
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
