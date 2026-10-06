import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Quote from "@/components/sections/Quote";
import BodyOfChristEngine from "@/components/sections/BodyOfChristEngine";
import KingdomServiceNetwork from "@/components/sections/KingdomServiceNetwork";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("GiftsPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function GiftsPage() {
  const t = await getTranslations("GiftsPage");
  const tScripture = await getTranslations("Scripture.gifts");

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} mediaKey="gifts" />

      <Prose eyebrow={t("prose1Eyebrow")} heading={t("prose1Heading")}>
        <Quote reference={tScripture("reference")} text={tScripture("text")} />
        <p>{t("prose1Body1")}</p>
        <p>{t("prose1Body2")}</p>
      </Prose>

      <BodyOfChristEngine />
      <KingdomServiceNetwork />

      <Prose eyebrow={t("prose2Eyebrow")} heading={t("prose2Heading")} tone="dark">
        <p>{t.rich("prose2Body", { strong: (chunks) => <strong>{chunks}</strong> })}</p>
      </Prose>
    </>
  );
}
