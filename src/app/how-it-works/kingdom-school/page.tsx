import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import { gospelSalvationModuleKeys, foundationModules, electiveCategories } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("KingdomSchoolPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function KingdomSchoolPage() {
  const t = await getTranslations("KingdomSchoolPage");
  const tOrientation = await getTranslations("OrientationModule");
  const tGospel = await getTranslations("GospelSalvationModules");
  const tFoundation = await getTranslations("FoundationModules");
  const tElectives = await getTranslations("ElectiveCategories");

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <Prose eyebrow={t("prose1Eyebrow")} heading={t("prose1Heading")}>
        <p>{t("prose1Body1")}</p>
        <p>{t("prose1Body2")}</p>
      </Prose>

      {/* Orientation */}
      <section className="bg-ink py-16 text-paper">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="flex gap-5 rounded-lg border border-paper/10 bg-paper/5 px-5 py-5">
            <span className="w-8 shrink-0 font-display text-2xl text-gold-soft/50">0</span>
            <div>
              <p className="mb-1 text-xs tracking-[0.3em] text-gold-soft/70 uppercase">{t("beforeModule1")}</p>
              <h3 className="font-medium text-paper">{tOrientation("title")}</h3>
              <p className="mt-1 text-sm leading-relaxed text-paper/50">{tOrientation("description")}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Gospel & Salvation */}
      <section className="bg-paper py-24 text-ink">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12 text-center">
            <p className="text-xs tracking-[0.35em] text-water uppercase">{t("gospelEyebrow")}</p>
            <h2 className="font-display mt-4 text-3xl tracking-tight">{t("gospelHeading")}</h2>
          </Reveal>

          <div className="flex flex-col gap-4">
            {gospelSalvationModuleKeys.map((key) => (
              <Reveal key={key} className="rounded-lg border border-ink/10 px-5 py-4">
                <h3 className="font-medium text-ink">{tGospel(`${key}.title`)}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/60">{tGospel(`${key}.description`)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Christian Foundation */}
      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12 text-center">
            <p className="text-xs tracking-[0.35em] text-gold-soft/90 uppercase">{t("foundationEyebrow")}</p>
            <h2 className="font-display mt-4 text-3xl tracking-tight">{t("foundationHeading")}</h2>
          </Reveal>

          <div className="flex flex-col gap-4">
            {foundationModules.map((mod) => (
              <Reveal key={mod.number} className="flex gap-5 rounded-lg border border-paper/10 bg-paper/5 px-5 py-4">
                <span className="w-8 shrink-0 font-display text-2xl text-gold-soft/50">{mod.number}</span>
                <div>
                  <h3 className="font-medium text-paper">{tFoundation(`${mod.key}.title`)}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-paper/50">{tFoundation(`${mod.key}.description`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Prose eyebrow={t("prose2Eyebrow")} heading={t("prose2Heading")}>
        <p>{t("prose2Body")}</p>
      </Prose>

      <section className="bg-paper px-6 py-16 text-ink">
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {electiveCategories.map((cat) => (
            <Reveal key={cat.key}>
              <div className="flex items-center gap-4 rounded-xl p-4 text-paper" style={{ backgroundColor: cat.color }}>
                <span className="text-2xl" aria-hidden="true">
                  {cat.emoji}
                </span>
                <div>
                  <p className="font-medium">{tElectives(cat.key)}</p>
                  <p className="text-sm text-paper/70">{t("plansCount", { count: cat.count })}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
