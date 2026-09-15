import type { MetadataRoute } from "next";

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
  "/join",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://p2p-global-web.vercel.app";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
