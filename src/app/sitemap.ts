import { MetadataRoute } from "next";
import { getProductCatalog } from "@/data/productCatalog";

/**
 * Sitemap Generator for AlphaCap
 * 
 * This file automatically generates sitemap.xml at https://www.alphacaps.in/sitemap.xml
 * Google uses this to discover and index all pages on your website.
 * 
 * After deploying, submit this URL to Google Search Console:
 * https://www.alphacaps.in/sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.alphacaps.in";
  const currentDate = new Date();

  // Get all product categories for dynamic URLs
  const productCategories = getProductCatalog();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0, // Homepage is highest priority
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Dynamic product category pages
  const categoryPages: MetadataRoute.Sitemap = productCategories.map((category) => ({
    url: `${baseUrl}/products/categories/${category.id}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Dynamic individual product pages
  const productPages: MetadataRoute.Sitemap = productCategories.flatMap((category) =>
    category.products.map((product) => ({
      url: `${baseUrl}/products/${product.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }))
  );

  // Section anchors (optional but helpful for Google to understand page structure)
  const sectionPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/#services`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/#our-clients`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/#enquiry`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  return [...staticPages, ...categoryPages, ...productPages, ...sectionPages];
}
