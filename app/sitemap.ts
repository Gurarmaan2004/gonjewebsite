import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/** Add a route here when its page ships — not before. */
const routes = [
  { path: "/", priority: 1 },
  { path: "/how-it-works", priority: 0.8 },
  { path: "/vendors", priority: 0.8 },
  { path: "/about", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
