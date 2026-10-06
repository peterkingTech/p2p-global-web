import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Faq from "@/components/sections/Faq";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("FaqPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function FaqPage() {
  const t = await getTranslations("FaqPage");
  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} mediaKey="about" />
      <Faq />
    </>
  );
}
