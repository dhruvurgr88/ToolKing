import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

/**
 * Helper to get the actual file modification date.
 * Added Turbopack ignore and static scoping to resolve NFT list warnings.
 */
function getFileDate(relativeFilePath: string) {
  try {
    // 🔥 FIX: Added turbopackIgnore to prevent tracing the entire project root
    const filePath = path.join(
      /* turbopackIgnore: true */ process.cwd(),
      "app",
      relativeFilePath,
    );

    const stats = fs.statSync(filePath);
    return stats.mtime;
  } catch (e) {
    // Fallback if file is moved or doesn't exist during build
    return new Date();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://toolking.online";

  // --- 1. DEFINE ALL TOOLS (Including Unlock PDF) ---
  const pdfTools = [
    { slug: "pdf-to-word", priority: 0.9 },
    { slug: "protect-pdf", priority: 0.9 },
    { slug: "unlock-pdf", priority: 0.9 }, // 🔥 Added
    { slug: "pdf-merger", priority: 0.8 },
    { slug: "pdf-splitter", priority: 0.8 },
    { slug: "jpg-to-pdf", priority: 0.7 },
  ];

  const imageTools = [
    { slug: "image-compressor", priority: 0.9 },
    { slug: "image-resizer", priority: 0.7 },
  ];

  const otherTools = [
    { slug: "word-counter", priority: 0.7 },
    { slug: "age-calculator", priority: 0.7 },
    { slug: "json-formatter", priority: 0.6 },
  ];

  const allTools = [...pdfTools, ...imageTools, ...otherTools];

  // --- 2. MAP DYNAMIC ENTRIES ---
  const toolEntries = allTools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    // Note: We removed 'app/' from the path because getFileDate now adds it
    lastModified: getFileDate(`tools/${tool.slug}/page.tsx`),
    changeFrequency: "monthly" as const,
    priority: tool.priority,
  }));

  // --- 3. RETURN FULL SITEMAP ---
  return [
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

    ...toolEntries,

    {
      url: `${baseUrl}/privacy`,
      lastModified: getFileDate("privacy/page.tsx"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: getFileDate("terms/page.tsx"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
