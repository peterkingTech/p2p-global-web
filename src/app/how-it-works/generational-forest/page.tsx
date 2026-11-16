import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import Quote from "@/components/sections/Quote";
import { pageMetadata } from "@/lib/seo";
import { forestLayerKeys } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("GenerationalForestPage");
  return pageMetadata({ title: t("metaTitle"), description: t("metaDescription"), path: "/how-it-works/generational-forest" });
}

export default async function GenerationalForestPage() {
  const t = await getTranslations("GenerationalForestPage");
  const tLayers = await getTranslations("ForestLayers");
  const tScripture = await getTranslations("Scripture.mission");

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <Prose eyebrow={t("prose1Eyebrow")} heading={t("prose1Heading")}>
        <p>{t("prose1Body")}</p>
        <Quote reference={tScripture("reference")} text={tScripture("text")} />
      </Prose>

      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12">
            <p className="mb-4 type-eyebrow text-sage">{t("layersEyebrow")}</p>
            <h2 className="type-section">{t("layersHeading")}</h2>
          </Reveal>
          {/* Each generation steps inward, so the chain reads as a lineage rather than a list. */}
          <ol className="flex flex-col gap-6">
            {forestLayerKeys.map((key, i) => (
              <li key={key} style={{ marginInlineStart: `${i * 1.25}rem` }}>
                <Reveal className="border-s border-paper/25 ps-6">
                  <span className="font-display text-sm text-paper/40">{`0${i + 1}`}</span>
                  <p className="font-display mt-1 text-xl text-paper">{tLayers(`${key}.label`)}</p>
                  <p className="mt-2 leading-relaxed text-paper/70">{tLayers(`${key}.detail`)}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Prose eyebrow={t("prose2Eyebrow")} heading={t("prose2Heading")}>
        <p>{t("prose2Body")}</p>
      </Prose>
    </>
  );
}
