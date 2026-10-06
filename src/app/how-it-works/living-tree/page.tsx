import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import { growthStageKeys, growthStageMeta, treeAnatomyKeys, treeAnatomyIcons } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("LivingTreePage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function LivingTreePage() {
  const t = await getTranslations("LivingTreePage");
  const tStages = await getTranslations("GrowthStages");
  const tAnatomy = await getTranslations("TreeAnatomy");

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <Prose eyebrow={t("prose1Eyebrow")} heading={t("prose1Heading")}>
        <p>{t("prose1Body")}</p>
      </Prose>

      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="mb-16 text-center">
            <p className="text-xs tracking-[0.35em] text-gold-soft/90 uppercase">{t("stagesEyebrow")}</p>
            <h2 className="font-display mt-4 text-3xl tracking-tight">{t("stagesHeading")}</h2>
          </Reveal>

          <div className="flex flex-col gap-16">
            {growthStageKeys.map((key, i) => (
              <Reveal key={key} className="flex gap-6">
                <div className="w-16 shrink-0 text-center">
                  <span className="text-4xl" aria-hidden="true">
                    {growthStageMeta[key].emoji}
                  </span>
                  <p className="mt-2 text-xs text-paper/40">{`0${i + 1}`}</p>
                </div>
                <div>
                  <p className="mb-2 text-xs tracking-[0.3em] text-gold-soft/80 uppercase">
                    {t("stageOf", { n: growthStageMeta[key].subtitleIndex })}
                  </p>
                  <h3 className="font-display text-2xl">{tStages(`${key}.title`)}</h3>
                  <p className="mt-1 text-lg text-gold-soft/70 italic">{tStages(`${key}.headline`)}</p>
                  <p className="mt-4 leading-relaxed text-paper/70">{tStages(`${key}.body`)}</p>
                  <div className="mt-4 rounded-lg border border-paper/10 bg-paper/5 px-4 py-3">
                    <p className="text-xs text-paper/50">
                      <span className="font-medium text-paper/70">{t("inTheApp")}</span>
                      {tStages(`${key}.whatItMeans`)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-16 text-center">
            <p className="text-xs tracking-[0.35em] text-water uppercase">{t("anatomyEyebrow")}</p>
            <h2 className="font-display mt-4 text-3xl tracking-tight">{t("anatomyHeading")}</h2>
          </Reveal>

          <div className="flex flex-col gap-10">
            {treeAnatomyKeys.map((key) => (
              <Reveal key={key} className="flex gap-6 border-b border-ink/10 pb-10 last:border-0">
                <span className="shrink-0 text-3xl" aria-hidden="true">
                  {treeAnatomyIcons[key]}
                </span>
                <div>
                  <h3 className="text-xl font-medium">{tAnatomy(`${key}.part`)}</h3>
                  <p className="mt-2 leading-relaxed text-ink/70">{tAnatomy(`${key}.explanation`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
