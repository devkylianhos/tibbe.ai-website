import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tibbe.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://tibbe.app/webshops",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: "https://tibbe.app/privacy", changeFrequency: "yearly", priority: 0.3 },
    { url: "https://tibbe.app/voorwaarden", changeFrequency: "yearly", priority: 0.3 },
    { url: "https://tibbe.app/cookies", changeFrequency: "yearly", priority: 0.3 },
  ];
}
