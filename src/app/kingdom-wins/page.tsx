import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import { kingdomWinCategoryKeys, kingdomWinCategoryMeta } from "@/content/copy";

const stepKeys = ["share", "reviewed", "pointsToHim"] as const;
const stepNumbers: Record<(typeof stepKeys)[number], string> = { share: "01", reviewed: "02", pointsToHim: "03" };

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("KingdomWinsPage");
  return pageMetadata({ title: t("metaTitle"), description: t("metaDescription"), path: "/kingdom-wins" });
}

export default async function KingdomWinsPage() {
  const t = await getTranslations("KingdomWinsPage");

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <Prose eyebrow={t("prose1Eyebrow")} heading={t("prose1Heading")}>
        <p>{t("prose1Body")}</p>
      </Prose>

      <section className="bg-ink py-24">
        <div className="mx-auto max-w-2xl px-6 text-center text-paper">
          <p className="type-eyebrow text-sage">{t("shapeEyebrow")}</p>
          <h2 className="type-section mt-4">{t("shapeHeading")}</h2>
          <p className="type-lead mt-6 text-paper/75">{t("shapeBody")}</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {kingdomWinCategoryKeys.map((key, i) => (
            <Reveal key={key} delay={i * 0.05} className="rounded-2xl border border-paper/10 bg-surface">
              <div className="flex h-full flex-col p-7 text-paper">
                <span className="text-3xl" aria-hidden="true">
                  {kingdomWinCategoryMeta[key].icon}
                </span>
                <h3 className="type-card mt-2">{t(`categories.${key}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">{t(`categories.${key}.outcome`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="text-center">
            <p className="type-eyebrow text-emerald">{t("howEyebrow")}</p>
            <h2 className="type-section mt-4 text-ink">{t("howHeading")}</h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {stepKeys.map((key, i) => (
              <Reveal key={key} delay={i * 0.06} className="text-center">
                <span className="font-display text-4xl text-sage-dark">{stepNumbers[key]}</span>
                <h3 className="mt-3 text-lg tracking-tight text-ink">{t(`steps.${key}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{t(`steps.${key}.body`)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Prose eyebrow={t("prose2Eyebrow")} heading={t("prose2Heading")}>
        <p>{t("prose2Body")}</p>
      </Prose>
    </>
  );
}
