import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

function getFileDate(relativeFilePath: string) {
  try {
    const filePath = path.join(
      /* turbopackIgnore: true */ process.cwd(),
      "app",
      relativeFilePath,
    );
    const stats = fs.statSync(filePath);
    return stats.mtime;
  } catch (e) {
    return new Date();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://toolking.online";

  // --- 1. PDF CATEGORY (6 Tools) ---
  const pdfTools = [
    { slug: "pdf-to-word", priority: 0.9 },
    { slug: "protect-pdf", priority: 0.9 },
    { slug: "unlock-pdf", priority: 0.9 },
    { slug: "pdf-merger", priority: 0.8 },
    { slug: "pdf-splitter", priority: 0.8 },
    { slug: "pdf-to-image", priority: 0.7 }, // ✅ Added from Image
  ];

  // --- 2. IMAGE CATEGORY (2 Tools) ---
  const imageTools = [
    { slug: "image-compressor", priority: 0.9 },
    { slug: "image-to-pdf", priority: 0.8 }, // ✅ Added from Image
  ];

  // --- 3. UTILITY & BUSINESS (5 Tools) ---
  const utilityTools = [
    { slug: "age-calculator", priority: 0.7 },
    { slug: "qr-code-generator", priority: 0.7 }, // ✅ Added from Image
    { slug: "password-generator", priority: 0.7 }, // ✅ Added from Image
    { slug: "url-shortener", priority: 0.6 }, // ✅ Added from Image
    { slug: "barcode-generator", priority: 0.6 },
  ];

  // --- 4. TEXT & DEVELOPER (4 Tools) ---
  const devTools = [
    { slug: "word-counter", priority: 0.7 },
    { slug: "json-formatter", priority: 0.7 },
    { slug: "ai-summarizer", priority: 0.8 },
    { slug: "case-converter", priority: 0.6 }, // ✅ Added from Image
  ];

  const allTools = [...pdfTools, ...imageTools, ...utilityTools, ...devTools];

  const toolEntries = allTools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: getFileDate(`tools/${tool.slug}/page.tsx`),
    changeFrequency: "monthly" as const,
    priority: tool.priority,
  }));

  return [
    // Core Pages (3)
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

    // Dynamic Tool Pages (15+)
    ...toolEntries,

    // Legal Pages (2)
    {
      url: `${baseUrl}/privacy`,
      lastModified: getFileDate("privacy/page.tsx"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
