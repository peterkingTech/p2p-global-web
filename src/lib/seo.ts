import type { Metadata } from "next";

/** Shared social image — two people sharing an open Bible (2000px, Unsplash License). */
export const defaultOgImage = "/media/photos/hero-two-reading-bible.jpg";

const SITE_NAME = "P2P Global";

/**
 * Per-page metadata with a canonical URL and matching Open Graph / Twitter
 * data. Child `openGraph` objects replace the root one rather than merging,
 * so siteName and image are repeated here deliberately.
 */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage],
    },
  };
}
