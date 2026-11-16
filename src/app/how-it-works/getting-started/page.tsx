import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import { pageMetadata } from "@/lib/seo";
import { gettingStartedStepKeys, gettingStartedStepNumbers } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("GettingStartedPage");
  return pageMetadata({ title: t("metaTitle"), description: t("metaDescription"), path: "/how-it-works/getting-started" });
}

export default async function GettingStartedPage() {
  const t = await getTranslations("GettingStartedPage");
  const tSteps = await getTranslations("GettingStartedSteps");

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <section className="bg-paper py-24 text-ink">
        <div className="mx-auto max-w-2xl px-6">
          <ol className="flex flex-col gap-10">
            {gettingStartedStepKeys.map((key) => (
              <li key={key}>
                <Reveal className="flex gap-6">
                  <span className="w-10 shrink-0 font-display text-3xl text-ink/30">{gettingStartedStepNumbers[key]}</span>
                  <div className="border-s border-ink/10 ps-6">
                    <h2 className="text-lg font-medium">{tSteps(`${key}.title`)}</h2>
                    <p className="mt-2 leading-relaxed text-ink/70">{tSteps(`${key}.body`)}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Prose eyebrow={t("proseEyebrow")} heading={t("proseHeading")} tone="dark">
        <p>{t("proseBody")}</p>
      </Prose>
    </>
  );
}
