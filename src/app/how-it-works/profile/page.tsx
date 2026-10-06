import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import { profileFeatureKeys, profileFeatureIcons } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ProfilePage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function ProfilePage() {
  const t = await getTranslations("ProfilePage");
  const tFeatures = await getTranslations("ProfileFeatures");

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <Prose eyebrow={t("prose1Eyebrow")} heading={t("prose1Heading")}>
        <p>{t("prose1Body")}</p>
      </Prose>

      <section className="bg-paper py-24 text-ink">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-water uppercase">{t("featuresEyebrow")}</p>
            <h2 className="font-display text-3xl tracking-tight">{t("featuresHeading")}</h2>
          </Reveal>
          <div className="flex flex-col gap-8">
            {profileFeatureKeys.map((key) => (
              <Reveal key={key} className="flex gap-5 border-b border-ink/10 pb-8 last:border-0">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink/5 text-lg font-medium"
                  aria-hidden="true"
                >
                  {profileFeatureIcons[key]}
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
    </>
  );
}
