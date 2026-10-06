import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Quote from "@/components/sections/Quote";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("AboutPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");
  const tScripture = await getTranslations("Scripture.mission");

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} mediaKey="about" />

      <Prose eyebrow={t("prose1Eyebrow")} heading={t("prose1Heading")}>
        <p>{t("prose1Body")}</p>
        <Quote reference={tScripture("reference")} text={tScripture("text")} />
      </Prose>

      <Prose eyebrow={t("prose2Eyebrow")} heading={t("prose2Heading")} tone="dark">
        <p>{t("prose2Body")}</p>
      </Prose>

      <Prose eyebrow={t("prose3Eyebrow")} heading={t("prose3Heading")}>
        <p>{t("prose3Body")}</p>
      </Prose>

      <Prose eyebrow={t("prose4Eyebrow")} heading={t("prose4Heading")} tone="dark">
        <p>
          {t.rich("prose4Body", {
            churches: (chunks) => (
              <Link href="/churches" className="underline decoration-gold-soft/50 underline-offset-4 hover:text-gold-soft">
                {chunks}
              </Link>
            ),
            families: (chunks) => (
              <Link href="/families" className="underline decoration-gold-soft/50 underline-offset-4 hover:text-gold-soft">
                {chunks}
              </Link>
            ),
          })}
        </p>
      </Prose>

      <Prose eyebrow={t("prose5Eyebrow")} heading={t("prose5Heading")}>
        <p>{t("prose5Body")}</p>
      </Prose>
    </>
  );
}
