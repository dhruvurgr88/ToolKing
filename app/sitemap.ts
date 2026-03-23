import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

/**
 * Helper to get the actual file modification date from the system.
 * This ensures Google only sees a 'refresh' when you actually change code.
 */
function getFileDate(relativeFilePath: string) {
  try {
    const filePath = path.join(process.cwd(), relativeFilePath);
    const stats = fs.statSync(filePath);
    return stats.mtime;
  } catch (e) {
    // Fallback to current date if file path is renamed or missing
    return new Date();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://toolking.online";

  // --- 1. DEFINE ALL TOOLS BY CATEGORY ---

  const pdfTools = [
    { slug: "pdf-to-word", priority: 0.9 },
    { slug: "protect-pdf", priority: 0.9 },
    { slug: "unlock-pdf", priority: 0.8 },
    { slug: "pdf-merger", priority: 0.8 },
    { slug: "pdf-splitter", priority: 0.8 },
    { slug: "jpg-to-pdf", priority: 0.7 },
    { slug: "png-to-pdf", priority: 0.7 },
  ];

  const imageTools = [
    { slug: "image-compressor", priority: 0.9 },
    { slug: "image-resizer", priority: 0.7 },
    { slug: "webp-to-jpg", priority: 0.7 },
  ];

  const textTools = [
    { slug: "word-counter", priority: 0.7 },
    { slug: "case-converter", priority: 0.6 },
    { slug: "lorem-ipsum-generator", priority: 0.6 },
  ];

  // Combine all tools into a single flat list for mapping
  const allTools = [...pdfTools, ...imageTools, ...textTools];

  // --- 2. GENERATE DYNAMIC ENTRIES ---

  const toolEntries = allTools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: getFileDate(`app/tools/${tool.slug}/page.tsx`),
    changeFrequency: "monthly" as const,
    priority: tool.priority,
  }));

  // --- 3. RETURN FINAL SITEMAP ---

  return [
    // Core Platform Pages
    {
      url: baseUrl,
      lastModified: getFileDate("app/page.tsx"),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: getFileDate("app/tools/page.tsx"),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Spread the dynamically generated tool entries
    ...toolEntries,

    // Legal & Footer
    {
      url: `${baseUrl}/privacy`,
      lastModified: getFileDate("app/privacy/page.tsx"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
