import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import HowItActuallyWorks from "@/components/sections/HowItActuallyWorks";
import AppExperience from "@/components/sections/AppExperience";
import { pageMetadata } from "@/lib/seo";
import { howItWorksTopics } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("HowItWorksPage");
  return pageMetadata({ title: t("metaTitle"), description: t("metaDescription"), path: "/how-it-works" });
}

export default async function HowItWorksPage() {
  const t = await getTranslations("HowItWorksPage");
  const tTopics = await getTranslations("HowItWorksTopics");

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <Prose eyebrow={t("proseEyebrow")} heading={t("proseHeading")}>
        <p>{t("proseBody")}</p>
      </Prose>

      <HowItActuallyWorks showLink={false} />
      <AppExperience tone="dark" />

      <section className="bg-paper px-6 py-24 text-ink">
        <div className="mx-auto max-w-4xl">
          <Reveal className="mb-12 text-center">
            <p className="type-eyebrow text-emerald">{t("topicsEyebrow")}</p>
            <h2 className="type-section mt-4">{t("topicsHeading")}</h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {howItWorksTopics.map((s, i) => (
              <Reveal key={s.href} delay={i * 0.03}>
                <Link
                  href={s.href}
                  className="flex h-full gap-4 rounded-2xl border border-ink/10 bg-white p-6 transition hover:border-ink/40"
                >
                  <span className="shrink-0 text-2xl" aria-hidden="true">
                    {s.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium">{tTopics(`${s.key}.title`)}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">{tTopics(`${s.key}.description`)}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
