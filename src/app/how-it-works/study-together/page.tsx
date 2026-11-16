import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import { pageMetadata } from "@/lib/seo";
import { studyTogetherSupportKeys } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("StudyTogetherPage");
  return pageMetadata({ title: t("metaTitle"), description: t("metaDescription"), path: "/how-it-works/study-together" });
}

export default async function StudyTogetherPage() {
  const t = await getTranslations("StudyTogetherPage");

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <Prose eyebrow={t("prose1Eyebrow")} heading={t("prose1Heading")}>
        <p>{t("prose1Body1")}</p>
        <p>{t("prose1Body2")}</p>
      </Prose>

      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mb-12 max-w-2xl">
            <p className="type-eyebrow text-sage">{t("supportsEyebrow")}</p>
            <h2 className="type-section mt-4">{t("supportsHeading")}</h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {studyTogetherSupportKeys.map((key, i) => (
              <Reveal key={key} delay={i * 0.05} className="rounded-2xl border border-paper/10 bg-surface p-7">
                <h3 className="type-card">{t(`supports.${key}.title`)}</h3>
                <p className="mt-3 leading-relaxed text-paper/70">{t(`supports.${key}.body`)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Prose eyebrow={t("privateEyebrow")} heading={t("privateHeading")}>
        <p>{t("privateBody")}</p>
      </Prose>
    </>
  );
}
