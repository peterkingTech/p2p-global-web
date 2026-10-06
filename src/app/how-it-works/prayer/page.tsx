import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import { prayerFeatureKeys, prayerFeatureIcons } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("PrayerPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function PrayerPage() {
  const t = await getTranslations("PrayerPage");
  const tFeatures = await getTranslations("PrayerFeatures");

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <Prose eyebrow={t("prose1Eyebrow")} heading={t("prose1Heading")}>
        <p>{t("prose1Body")}</p>
      </Prose>

      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-gold-soft/90 uppercase">{t("toolsEyebrow")}</p>
            <h2 className="font-display text-3xl tracking-tight">{t("toolsHeading")}</h2>
          </Reveal>
          <div className="flex flex-col gap-8">
            {prayerFeatureKeys.map((key) => (
              <Reveal key={key} className="flex gap-5 border-b border-paper/10 pb-8 last:border-0">
                <span className="shrink-0 text-2xl" aria-hidden="true">
                  {prayerFeatureIcons[key]}
                </span>
                <div>
                  <h3 className="text-lg font-medium">{tFeatures(`${key}.title`)}</h3>
                  <p className="mt-1 leading-relaxed text-paper/70">{tFeatures(`${key}.body`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
