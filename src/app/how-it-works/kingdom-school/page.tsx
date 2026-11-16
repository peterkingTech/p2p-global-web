import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import { NextArrow } from "@/components/ui/DirArrow";
import { pageMetadata } from "@/lib/seo";
import { learningExperienceKeys, learningWorkflowKeys, coreFoundationCourses, coreFoundationTotalLessons } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("KingdomSchoolPage");
  return pageMetadata({ title: t("metaTitle"), description: t("metaDescription"), path: "/how-it-works/kingdom-school" });
}

export default async function KingdomSchoolPage() {
  const t = await getTranslations("KingdomSchoolPage");
  const tTopics = await getTranslations("HowItWorksTopics");
  const tFooter = await getTranslations("Footer");
  const evalPoints = t.raw("evalPoints") as string[];

  const next = [
    { label: tTopics("bible.title"), href: "/how-it-works/bible" },
    { label: tFooter("kingdomStories"), href: "/kingdom-stories" },
    { label: tTopics("studyTogether.title"), href: "/how-it-works/study-together" },
    { label: tTopics("livingTree.title"), href: "/how-it-works/living-tree" },
  ];

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <Prose eyebrow={t("prose1Eyebrow")} heading={t("prose1Heading")}>
        <p>{t("prose1Body")}</p>
      </Prose>

      {/* How the learning experiences relate */}
      <section className="bg-white py-24 text-ink">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mb-14 max-w-2xl">
            <p className="type-eyebrow text-emerald">{t("experiencesEyebrow")}</p>
            <h2 className="type-section mt-4">{t("experiencesHeading")}</h2>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {learningExperienceKeys.map((key, i) => (
              <Reveal key={key} delay={i * 0.04} className="bg-white p-8">
                <span className="font-display text-sm text-ink/35">{`0${i + 1}`}</span>
                <h3 className="type-card mt-3">{t(`experiences.${key}.title`)}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{t(`experiences.${key}.body`)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Foundations */}
      <section className="bg-ink py-28 text-paper">
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <Reveal>
            <p className="type-eyebrow text-sage">{t("foundationsEyebrow")}</p>
            <p className="font-display mt-6 text-[7rem] leading-none tracking-tight sm:text-[9rem]">{coreFoundationTotalLessons}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="type-section">{t("foundationsHeading")}</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-paper/75">
              <p>{t("foundationsBody1")}</p>
              <p>{t("foundationsBody2")}</p>
            </div>
            <p className="type-eyebrow mt-10 text-sage">{t("coursesLabel")}</p>
            <dl className="mt-4 divide-y divide-paper/10 border-y border-paper/10">
              {coreFoundationCourses.map((course) => (
                <div key={course.key} className="flex items-baseline justify-between gap-6 py-4">
                  <dt className="text-paper">{t(`courses.${course.key}`)}</dt>
                  <dd className="shrink-0 text-paper/70">{t("lessonsCount", { count: course.lessons })}</dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-6 py-4">
                <dt className="font-medium text-paper">{t("totalLabel")}</dt>
                <dd className="shrink-0 font-display text-xl text-gold">{coreFoundationTotalLessons}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Learning Centre workflow */}
      <section className="bg-paper py-24 text-ink">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mb-12 max-w-2xl">
            <p className="type-eyebrow text-emerald">{t("workflowEyebrow")}</p>
            <h2 className="type-section mt-4">{t("workflowHeading")}</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">{t("workflowBody")}</p>
          </Reveal>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {learningWorkflowKeys.map((key, i) => (
              <li key={key}>
                <Reveal delay={i * 0.06} className="h-full rounded-2xl border border-ink/10 bg-white p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-xs font-medium text-paper">
                      {i + 1}
                    </span>
                    <span className="h-px flex-1 bg-ink/15" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-medium">{t(`workflow.${key}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{t(`workflow.${key}.body`)}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Evaluation */}
      <section className="bg-forest py-24 text-paper">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <p className="type-eyebrow text-sage">{t("evalEyebrow")}</p>
            <h2 className="type-section mt-4">{t("evalHeading")}</h2>
          </Reveal>
          <ul className="mt-10 space-y-5">
            {evalPoints.map((point, i) => (
              <Reveal key={point} delay={i * 0.04} className="flex gap-4 border-b border-paper/10 pb-5 last:border-0">
                <span className="mt-0.5 shrink-0 text-sage" aria-hidden="true">
                  <NextArrow />
                </span>
                <p className="text-lg leading-relaxed text-paper/85">{point}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper px-6 py-20 text-center text-ink">
        <Reveal>
          <p className="mb-8 type-eyebrow text-emerald">{t("continueEyebrow")}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {next.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-ink/20 px-5 py-2.5 text-sm text-ink/80 transition hover:border-ink hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
