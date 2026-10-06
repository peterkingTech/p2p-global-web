import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { siteUrl } from "@/lib/site";
import { getLocaleDir } from "@/i18n/locales";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
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
    keywords: [
      "Christian discipleship",
      "peer-to-peer discipleship",
      "Scripture study",
      "prayer",
      "Christian community",
      "missions",
    ],
    openGraph: {
      title,
      description: t("shortDescription"),
      url: siteUrl,
      siteName: t("brandShort"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: t("shortDescription"),
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();
  const messages = await getMessages();
  const dir = getLocaleDir(locale);

  return (
    <html lang={locale} dir={dir} className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper text-ink antialiased">
        <NextIntlClientProvider messages={messages}>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
