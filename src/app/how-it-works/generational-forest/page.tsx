import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import Quote from "@/components/sections/Quote";
import { forestLayerKeys } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("GenerationalForestPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function GenerationalForestPage() {
  const t = await getTranslations("GenerationalForestPage");
  const tLayers = await getTranslations("ForestLayers");
  const tScripture = await getTranslations("Scripture.vision");

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
            <p className="mb-4 text-xs tracking-[0.35em] text-gold-soft/90 uppercase">{t("layersEyebrow")}</p>
            <h2 className="font-display text-3xl tracking-tight">{t("layersHeading")}</h2>
          </Reveal>
          <div className="flex flex-col gap-8">
            {forestLayerKeys.map((key) => (
              <Reveal key={key} className="flex gap-6 border-b border-paper/10 pb-8 last:border-0">
                <div className="w-32 shrink-0">
                  <p className="font-medium text-gold-soft/80">{tLayers(`${key}.label`)}</p>
                </div>
                <p className="leading-relaxed text-paper/70">{tLayers(`${key}.detail`)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Prose eyebrow={t("prose2Eyebrow")} heading={t("prose2Heading")} tone="dark">
        <p>{t("prose2Body")}</p>
      </Prose>

      <Prose eyebrow={t("prose3Eyebrow")} heading={t("prose3Heading")}>
        <p>{t.rich("prose3Body", { em: (chunks) => <em>{chunks}</em> })}</p>
      </Prose>
    </>
  );
}
