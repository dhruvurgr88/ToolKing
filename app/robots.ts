import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"], // Keep private folders hidden
    },
    sitemap: "https://toolking.online/sitemap.xml",
  };
}
