import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { kingdomStoryCategories } from "@/content/copy";

const routes = [
  "",
  "/vision",
  "/discipleship",
  "/gifts",
  "/missions",
  "/kingdom-stories",
  "/kingdom-wins",
  "/families",
  "/churches",
  "/about",
  "/faq",
  "/join",
  ...kingdomStoryCategories.map((c) => `/kingdom-stories/${c.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
