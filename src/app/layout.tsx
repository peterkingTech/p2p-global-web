import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { siteUrl } from "@/lib/site";
import { defaultOgImage } from "@/lib/seo";
import { getLocaleDir } from "@/i18n/locales";
import "./globals.css";

// Fraunces: a contemporary editorial serif for headings and Scripture.
// Inter: a neutral, highly legible sans for body text and UI. Both are
// variable fonts, so all weights load from a single file each.
const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  axes: ["opsz"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin", "latin-ext", "cyrillic", "greek"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");
  const title = t("title");
  const description = t("description");
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: `%s | ${t("brandShort")}`,
    },
    description,
    applicationName: t("brandShort"),
    keywords: ["peer-to-peer discipleship", "Christian discipleship", "Bible study", "Kingdom School", "discipleship network"],
    openGraph: {
      title,
      description: t("shortDescription"),
      url: "/",
      siteName: t("brandShort"),
      type: "website",
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: t("shortDescription"),
      images: [defaultOgImage],
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();
  const messages = await getMessages();
  const dir = getLocaleDir(locale);
  const skipLabel = (await getTranslations("Nav"))("skipToContent");

  return (
    <html lang={locale} dir={dir} data-scroll-behavior="smooth" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper text-ink antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[60] focus:rounded-full focus:bg-paper focus:px-5 focus:py-2.5 focus:text-sm focus:text-ink">
          {skipLabel}
        </a>
        <NextIntlClientProvider messages={messages}>
          <Nav />
          <main id="main" className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
