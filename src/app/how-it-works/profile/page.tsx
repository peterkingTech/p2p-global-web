import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import { NextArrow } from "@/components/ui/DirArrow";
import { pageMetadata } from "@/lib/seo";
import { profileFeatureKeys, profileFeatureIcons } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ProfilePage");
  return pageMetadata({ title: t("metaTitle"), description: t("metaDescription"), path: "/how-it-works/profile" });
}

export default async function ProfilePage() {
  const t = await getTranslations("ProfilePage");
  const tFeatures = await getTranslations("ProfileFeatures");
  const tTopics = await getTranslations("HowItWorksTopics");

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <Prose eyebrow={t("prose1Eyebrow")} heading={t("prose1Heading")}>
        <p>{t("prose1Body")}</p>
      </Prose>

      <section className="bg-white py-24 text-ink">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12">
            <p className="mb-4 type-eyebrow text-emerald">{t("featuresEyebrow")}</p>
            <h2 className="type-section">{t("featuresHeading")}</h2>
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
          <Reveal className="mt-12">
            <Link
              href="/how-it-works/living-tree"
              className="inline-block rounded-full border border-ink/25 px-6 py-3 text-sm tracking-wide transition hover:bg-ink hover:text-paper"
            >
              {tTopics("livingTree.title")} <NextArrow />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
