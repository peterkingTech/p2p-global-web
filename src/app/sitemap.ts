import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

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
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
