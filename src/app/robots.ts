import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The investor brief is unlisted — keep it out of search results.
      disallow: ["/investors", "/admin"],
    },
    sitemap: "https://shifamedical.in/sitemap.xml",
  };
}
