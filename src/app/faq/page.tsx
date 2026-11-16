import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import Faq from "@/components/sections/Faq";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("FaqPage");
  return pageMetadata({ title: t("metaTitle"), description: t("metaDescription"), path: "/faq" });
}

export default async function FaqPage() {
  const t = await getTranslations("FaqPage");
  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} />
      <Faq scope="all" />
    </>
  );
}
