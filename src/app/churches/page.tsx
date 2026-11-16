import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import { NextArrow } from "@/components/ui/DirArrow";
import { pageMetadata } from "@/lib/seo";
import { churchFeatureKeys } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ChurchesPage");
  return pageMetadata({ title: t("metaTitle"), description: t("metaDescription"), path: "/churches" });
}

export default async function ChurchesPage() {
  const t = await getTranslations("ChurchesPage");

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} mediaKey="churchHero" imageAlt={t("heroImageAlt")} />

      <Prose eyebrow={t("prose1Eyebrow")} heading={t("prose1Heading")}>
        <p>{t("prose1Body1")}</p>
        <p>{t("prose1Body2")}</p>
      </Prose>

      <Prose eyebrow={t("prose2Eyebrow")} heading={t("prose2Heading")} tone="dark">
        <p>{t("prose2Body1")}</p>
        <p>{t("prose2Body2")}</p>
      </Prose>

      <section className="bg-white px-6 py-24 text-ink">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mb-14 max-w-2xl">
            <p className="mb-4 type-eyebrow text-emerald">{t("experienceEyebrow")}</p>
            <h2 className="type-section">{t("experienceHeading")}</h2>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {churchFeatureKeys.map((key, i) => (
              <Reveal key={key} delay={i * 0.03} className="bg-white p-7">
                <h3 className="type-card">{t(`features.${key}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{t(`features.${key}.body`)}</p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink/55">{t("noteBody")}</p>
          </Reveal>
        </div>
      </section>

      <Prose eyebrow={t("privacyEyebrow")} heading={t("privacyHeading")} tone="dark">
        <p>{t("privacyBody1")}</p>
        <p>{t("privacyBody2")}</p>
      </Prose>

      <section className="bg-paper px-6 py-24 text-center text-ink">
        <Reveal>
          <p className="mb-6 type-eyebrow text-emerald">{t("ctaEyebrow")}</p>
          <h2 className="type-section mb-4">{t("ctaHeading")}</h2>
          <p className="mx-auto mb-10 max-w-md leading-relaxed text-ink/65">{t("ctaBody")}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/join"
              className="inline-block rounded-full px-10 py-4 text-sm font-medium tracking-wide transition-colors bg-emerald-bright text-white hover:bg-emerald"
            >
              {t("ctaButton")} <NextArrow />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-block rounded-full border border-ink/25 px-10 py-4 text-sm tracking-wide transition hover:bg-ink hover:text-paper"
            >
              {t("ctaSecondary")}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
