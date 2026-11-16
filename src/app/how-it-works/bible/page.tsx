import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Quote from "@/components/sections/Quote";
import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";
import { pageMetadata } from "@/lib/seo";
import { bibleFeatureKeys } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("BiblePage");
  return pageMetadata({ title: t("metaTitle"), description: t("metaDescription"), path: "/how-it-works/bible" });
}

export default async function BiblePage() {
  const t = await getTranslations("BiblePage");
  const tScripture = await getTranslations("Scripture.vision");

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <Prose eyebrow={t("prose1Eyebrow")} heading={t("prose1Heading")}>
        <p>{t("prose1Body")}</p>
        <Quote reference={tScripture("reference")} text={tScripture("text")} />
      </Prose>

      <section className="bg-white py-24 text-ink">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mb-14 max-w-2xl">
            <p className="type-eyebrow text-emerald">{t("featuresEyebrow")}</p>
            <h2 className="type-section mt-4">{t("featuresHeading")}</h2>
          </Reveal>
          <dl className="grid gap-x-10 gap-y-2 sm:grid-cols-2">
            {bibleFeatureKeys.map((key, i) => (
              <Reveal key={key} delay={i * 0.03} className="border-t border-ink/10 py-6">
                <dt className="type-card">{t(`features.${key}.title`)}</dt>
                <dd className="mt-2 leading-relaxed text-ink/70">{t(`features.${key}.body`)}</dd>
              </Reveal>
            ))}
          </dl>
          <Reveal>
            <p className="mt-10 max-w-3xl border-s-2 border-emerald/40 ps-5 text-sm leading-relaxed text-ink/65">{t("availabilityNote")}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <Reveal className="relative h-72 overflow-hidden rounded-2xl md:h-[440px]">
            <CinematicMedia mediaKey="bibleDeepStudy" kenBurns grain={false} />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="type-eyebrow text-sage">{t("deepEyebrow")}</p>
            <h2 className="type-section mt-4">{t("deepHeading")}</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-paper/75">
              <p>{t("deepBody1")}</p>
              <p>{t("deepBody2")}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
