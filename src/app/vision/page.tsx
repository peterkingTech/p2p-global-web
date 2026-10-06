import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Quote from "@/components/sections/Quote";
import SeedToNations from "@/components/sections/SeedToNations";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("VisionPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function VisionPage() {
  const t = await getTranslations("VisionPage");
  const tScripture = await getTranslations("Scripture.vision");

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} mediaKey="vision" />

      <Prose eyebrow={t("prose1Eyebrow")} heading={t("prose1Heading")}>
        <Quote reference={tScripture("reference")} text={tScripture("text")} />
        <p>{t("prose1Body1")}</p>
        <p>{t("prose1Body2")}</p>
      </Prose>

      <SeedToNations />

      <Prose eyebrow={t("prose2Eyebrow")} heading={t("prose2Heading")} tone="dark">
        <p>{t("prose2Body")}</p>
      </Prose>
    </>
  );
}
