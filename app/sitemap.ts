import type { MetadataRoute } from "next";
import { photoProjects } from "@/lib/photography";
import { absoluteUrl } from "@/lib/seo";
import { shows } from "@/lib/shows";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = [
    "/",
    "/lighting-design",
    "/lighting-programming",
    "/production-photography",
    "/about",
    "/contact",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: route === "/" ? 1 : 0.8,
    })),
    ...shows.map((show) => ({
      url: absoluteUrl(`/lighting-design/${show.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...photoProjects.map((project) => ({
      url: absoluteUrl(`/production-photography/${project.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
