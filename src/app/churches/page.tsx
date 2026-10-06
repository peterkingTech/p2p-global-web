import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import { NextArrow } from "@/components/ui/DirArrow";
import { churchPortalFeatureKeys, churchPortalFeatureIcons, churchRoleKeys, groveStageKeys, groveStageEmojis } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ChurchesPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function ChurchesPage() {
  const t = await getTranslations("ChurchesPage");
  const tFeatures = await getTranslations("ChurchPortalFeatures");

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <Prose eyebrow={t("prose1Eyebrow")} heading={t("prose1Heading")}>
        <p>{t("prose1Body1")}</p>
        <p>{t("prose1Body2")}</p>
      </Prose>

      <Prose eyebrow={t("prose2Eyebrow")} heading={t("prose2Heading")} tone="dark">
        <p>{t("prose2Body1")}</p>
        <p>{t("prose2Body2")}</p>
      </Prose>

      <section className="bg-paper px-6 py-24 text-ink">
        <div className="mx-auto max-w-4xl">
          <Reveal className="mb-16 text-center">
            <p className="mb-4 text-xs tracking-[0.35em] text-water uppercase">{t("featuresEyebrow")}</p>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">{t("featuresHeading")}</h2>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2">
            {churchPortalFeatureKeys.map((key) => (
              <Reveal key={key}>
                <div className="flex h-full flex-col gap-3 rounded-xl border border-ink/10 p-6">
                  <span className="text-2xl" aria-hidden="true">
                    {churchPortalFeatureIcons[key]}
                  </span>
                  <h3 className="text-lg font-medium">{tFeatures(`${key}.title`)}</h3>
                  <p className="text-sm leading-relaxed text-ink/60">{tFeatures(`${key}.body`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 text-paper">
        <div className="mx-auto max-w-2xl">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-gold-soft/90 uppercase">{t("groveEyebrow")}</p>
            <h2 className="font-display text-3xl tracking-tight">{t("groveHeading")}</h2>
            <p className="mt-4 leading-relaxed text-paper/60">{t("groveBody")}</p>
          </Reveal>

          <div className="flex flex-col gap-6">
            {groveStageKeys.map((key) => (
              <Reveal key={key} className="flex gap-4 border-b border-paper/10 pb-6 last:border-0">
                <span className="w-36 shrink-0 font-medium text-paper/90">
                  {groveStageEmojis[key]} {t(`groveStageLabels.${key}`)}
                </span>
                <p className="text-sm leading-relaxed text-paper/60">{t(`groveStages.${key}`)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-24 text-ink">
        <div className="mx-auto max-w-2xl">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-water uppercase">{t("rolesEyebrow")}</p>
            <h2 className="font-display text-3xl tracking-tight">{t("rolesHeading")}</h2>
          </Reveal>

          <div className="flex flex-col overflow-hidden rounded-xl border border-ink/10">
            {churchRoleKeys.map((key, i) => (
              <div
                key={key}
                className={`flex gap-6 border-b border-ink/10 px-6 py-5 last:border-0 ${i % 2 === 0 ? "bg-paper" : "bg-ink/5"}`}
              >
                <p className="w-44 shrink-0 text-sm font-medium">{t(`roles.${key}.role`)}</p>
                <p className="text-sm leading-relaxed text-ink/60">{t(`roles.${key}.access`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Prose eyebrow={t("prose3Eyebrow")} heading={t("prose3Heading")} tone="dark">
        <p>{t("prose3Body1")}</p>
        <p>{t("prose3Body2")}</p>
      </Prose>

      <section className="bg-paper px-6 py-20 text-center text-ink">
        <Reveal>
          <p className="mb-6 text-xs tracking-[0.35em] text-water uppercase">{t("ctaEyebrow")}</p>
          <h2 className="font-display mb-4 text-3xl tracking-tight">{t("ctaHeading")}</h2>
          <p className="mx-auto mb-8 max-w-md leading-relaxed text-ink/60">{t("ctaBody")}</p>
          <Link
            href="/join"
            className="inline-block rounded-full bg-ink px-10 py-4 text-sm font-medium tracking-wide text-paper transition hover:opacity-80"
          >
            {t("ctaButton")} <NextArrow />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
