import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Quote from "@/components/sections/Quote";
import DiscipleMultiplication from "@/components/sections/DiscipleMultiplication";
import TreeJourney from "@/components/sections/TreeJourney";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("DiscipleshipPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function DiscipleshipPage() {
  const t = await getTranslations("DiscipleshipPage");
  const tScripture = await getTranslations("Scripture.mission");

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} mediaKey="discipleLearn" />

      <Prose eyebrow={t("prose1Eyebrow")} heading={t("prose1Heading")}>
        <Quote reference={tScripture("reference")} text={tScripture("text")} />
        <p>{t("prose1Body1")}</p>
        <p>{t("prose1Body2")}</p>
      </Prose>

      <DiscipleMultiplication />

      <Prose eyebrow={t("prose2Eyebrow")} heading={t("prose2Heading")}>
        <p>{t.rich("prose2Body", { strong: (chunks) => <strong>{chunks}</strong> })}</p>
      </Prose>

      <TreeJourney />

      <div className="bg-paper px-6 py-20 text-center">
        <Link
          href="/join"
          className="inline-block rounded-full bg-ink px-8 py-3.5 text-sm tracking-wide text-paper transition-transform hover:scale-[1.03]"
        >
          {t("beginJourney")}
        </Link>
      </div>
    </>
  );
}
