import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://toolking.online";
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    // --- PDF SUITE ---
    {
      url: `${baseUrl}/tools/image-to-pdf`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/pdf-merger`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/pdf-splitter`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // --- TEXT & DEVELOPER TOOLS ---
    {
      url: `${baseUrl}/tools/word-counter`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tools/case-converter`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tools/json-formatter`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // --- NEW HIGH-TRAFFIC TOOLS (ADDED) ---
    {
      url: `${baseUrl}/tools/qr-code-generator`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/barcode-generator`, // 🔥 NEW
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/url-shortener`, // 🔥 NEW
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/password-generator`, // 🔥 NEW
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // --- LEGAL ---
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
