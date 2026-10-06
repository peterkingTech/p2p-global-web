import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("GrainPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function GrainPage() {
  const t = await getTranslations("GrainPage");
  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <Prose eyebrow={t("prose1Eyebrow")} heading={t("prose1Heading")}>
        <p>{t("prose1Body1")}</p>
        <p>{t("prose1Body2")}</p>
      </Prose>
    </>
  );
}
