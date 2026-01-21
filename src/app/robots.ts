import { MetadataRoute } from "next";

/**
 * Robots.txt Generator for AlphaCap
 * 
 * This file automatically generates robots.txt at https://www.alphacaps.in/robots.txt
 * It tells search engine crawlers (Google, Bing, etc.) what pages they can index.
 * 
 * Current rules:
 * - Allow all crawlers to index all pages
 * - Point to sitemap for efficient crawling
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*", // Applies to all search engine bots
        allow: "/", // Allow crawling of all pages
        disallow: [
          "/api/", // Don't index API routes
          "/_next/", // Don't index Next.js internal files
        ],
      },
    ],
    sitemap: "https://www.alphacaps.in/sitemap.xml",
  };
}
