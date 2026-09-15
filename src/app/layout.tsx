import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
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

const siteUrl = "https://p2p-global-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Peer to Peer Global Discipleship Network | P2P",
    template: "%s | P2P",
  },
  description:
    "A global peer-to-peer discipleship network centered on Jesus Christ, Scripture, prayer, community, and mission. Everyone is learning from someone. Everyone can help someone grow.",
  keywords: [
    "Christian discipleship",
    "peer-to-peer discipleship",
    "Scripture study",
    "prayer",
    "Christian community",
    "missions",
  ],
  openGraph: {
    title: "Peer to Peer Global Discipleship Network | P2P",
    description: "Everyone is learning from someone. Everyone can help someone grow.",
    url: siteUrl,
    siteName: "P2P",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peer to Peer Global Discipleship Network | P2P",
    description: "Everyone is learning from someone. Everyone can help someone grow.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper text-ink antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
