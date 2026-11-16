import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import CinematicMedia from "@/components/media/CinematicMedia";
import { NextArrow } from "@/components/ui/DirArrow";
import { pageMetadata } from "@/lib/seo";
import { growthStageKeys, growthStageMeta, growthDimensionKeys, treeBiologyKeys } from "@/content/copy";

const stagePhotos: Record<(typeof growthStageKeys)[number], string> = {
  seed: "treeSeed",
  sprout: "treeSprout",
  youngTree: "treeYoung",
  fruitfulTree: "treeFruitful",
  forestBuilder: "treeForestBuilder",
  forestOfNations: "treeForestNations",
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("LivingTreePage");
  return pageMetadata({ title: t("metaTitle"), description: t("metaDescription"), path: "/how-it-works/living-tree" });
}

export default async function LivingTreePage() {
  const t = await getTranslations("LivingTreePage");
  const tStages = await getTranslations("GrowthStages");
  const tBiology = await getTranslations("TreeBiology");
  const milestones = t.raw("milestones") as string[];

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <Prose eyebrow={t("prose1Eyebrow")} heading={t("prose1Heading")}>
        <p>{t("prose1Body1")}</p>
        <p>{t("prose1Body2")}</p>
      </Prose>

      {/* The growth matrix — four dimensions of evidence */}
      <section className="bg-white py-24 text-ink">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mb-14 max-w-2xl">
            <p className="type-eyebrow text-emerald">{t("dimensionsEyebrow")}</p>
            <h2 className="type-section mt-4">{t("dimensionsHeading")}</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">{t("dimensionsBody")}</p>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {growthDimensionKeys.map((key, i) => (
              <Reveal key={key} delay={i * 0.05} className="bg-white p-8 sm:p-10">
                <span className="font-display text-sm text-ink/35">{`0${i + 1}`}</span>
                <h3 className="type-card mt-3">{t(`dimensions.${key}.title`)}</h3>
                <p className="mt-4 leading-relaxed text-ink/70">{t(`dimensions.${key}.body`)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Participant growth stages */}
      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="mb-16 text-center">
            <p className="type-eyebrow text-sage">{t("stagesEyebrow")}</p>
            <h2 className="type-section mt-4">{t("stagesHeading")}</h2>
          </Reveal>

          <ol className="flex flex-col gap-14">
            {growthStageKeys.map((key) => (
              <li key={key}>
                <Reveal className="flex gap-6">
                  <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-28">
                    <CinematicMedia mediaKey={stagePhotos[key]} grain={false} vignette={false} />
                  </div>
                  <div>
                    <p className="mb-2 type-eyebrow text-sage">
                      {t("stageOf", { n: growthStageMeta[key].subtitleIndex })}
                    </p>
                    <h3 className="type-card">{tStages(`${key}.title`)}</h3>
                    <p className="mt-1 text-lg text-paper/60 italic">{tStages(`${key}.headline`)}</p>
                    <p className="mt-4 leading-relaxed text-paper/75">{tStages(`${key}.body`)}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-paper py-24 text-ink">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <p className="type-eyebrow text-emerald">{t("milestonesEyebrow")}</p>
            <h2 className="type-section mt-4">{t("milestonesHeading")}</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">{t("milestonesBody")}</p>
          </Reveal>
          <ul className="mt-8 space-y-4">
            {milestones.map((m, i) => (
              <Reveal key={m} delay={i * 0.04} className="flex items-start gap-4">
                <span className="mt-1 shrink-0 text-sage-dark" aria-hidden="true">
                  <NextArrow />
                </span>
                <p className="text-lg leading-relaxed text-ink/80">{m}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.2}>
            <p className="mt-10 border-s-2 border-ink/20 ps-5 text-sm leading-relaxed text-ink/60">{t("milestonesNote")}</p>
          </Reveal>
        </div>
      </section>

      {/* Biological development of the apple tree */}
      <section className="bg-forest py-24 text-paper">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mb-14 max-w-2xl">
            <p className="type-eyebrow text-sage">{t("treeEyebrow")}</p>
            <h2 className="type-section mt-4">{t("treeHeading")}</h2>
            <p className="mt-4 text-lg leading-relaxed text-paper/70">{t("treeBody")}</p>
          </Reveal>
          <ol className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-5">
            {treeBiologyKeys.map((key, i) => (
              <li key={key}>
                <Reveal delay={i * 0.03} className="h-full border-t border-paper/15 py-5">
                  <span className="font-display text-sm text-paper/40">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-medium text-paper">{tBiology(`${key}.title`)}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-paper/60">{tBiology(`${key}.body`)}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Prose eyebrow={t("relationEyebrow")} heading={t("relationHeading")}>
        <p>{t("relationBody1")}</p>
        <p>{t("relationBody2")}</p>
      </Prose>
    </>
  );
}
