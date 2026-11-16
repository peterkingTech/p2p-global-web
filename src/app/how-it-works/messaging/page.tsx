import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/motion/Reveal";
import { pageMetadata } from "@/lib/seo";
import { messagingFeatureKeys, messagingFeatureIcons } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("MessagingPage");
  return pageMetadata({ title: t("metaTitle"), description: t("metaDescription"), path: "/how-it-works/messaging" });
}

export default async function MessagingPage() {
  const t = await getTranslations("MessagingPage");
  const tFeatures = await getTranslations("MessagingFeatures");

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <section className="bg-paper py-24 text-ink">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mb-12 max-w-2xl">
            <p className="mb-4 type-eyebrow text-emerald">{t("featuresEyebrow")}</p>
            <h2 className="type-section">{t("featuresHeading")}</h2>
          </Reveal>
          <div className="grid gap-x-10 sm:grid-cols-2">
            {messagingFeatureKeys.map((key, i) => (
              <Reveal key={key} delay={i * 0.03} className="flex gap-5 border-t border-ink/10 py-7">
                <span className="shrink-0 text-2xl" aria-hidden="true">
                  {messagingFeatureIcons[key]}
                </span>
                <div>
                  <h3 className="text-lg font-medium">{tFeatures(`${key}.title`)}</h3>
                  <p className="mt-1 leading-relaxed text-ink/70">{tFeatures(`${key}.body`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* P2P Mail — the official inbox, distinct from personal conversations */}
      <section className="bg-ink py-28 text-paper">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="rounded-2xl border border-paper/15 bg-surface p-8 sm:p-12">
            <p className="type-eyebrow text-sage">{t("mailEyebrow")}</p>
            <h2 className="type-section mt-4">{t("mailHeading")}</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-paper/80">
              <p>{t("mailBody1")}</p>
              <p>{t("mailBody2")}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 border-s-2 border-paper/20 ps-5 text-sm leading-relaxed text-paper/60">{t("crisisBody")}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
