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
  "/how-it-works",
  "/how-it-works/getting-started",
  "/how-it-works/living-tree",
  "/how-it-works/kingdom-school",
  "/how-it-works/peer-guide",
  "/how-it-works/peer-circles",
  "/how-it-works/generational-forest",
  "/how-it-works/messaging",
  "/how-it-works/prayer",
  "/how-it-works/profile",
  "/how-it-works/grain",
  ...kingdomStoryCategories.map((c) => `/kingdom-stories/${c.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
