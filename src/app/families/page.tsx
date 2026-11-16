import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import { pageMetadata } from "@/lib/seo";
import { familyRowKeys, familyRowMeta } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("FamiliesPage");
  return pageMetadata({ title: t("metaTitle"), description: t("metaDescription"), path: "/families" });
}

export default async function FamiliesPage() {
  const t = await getTranslations("FamiliesPage");
  const circleItems = t.raw("circleItems") as string[];

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} mediaKey="family" imageAlt={t("heroImageAlt")} />

      <Prose eyebrow={t("prose1Eyebrow")} heading={t("prose1Heading")}>
        <p>{t("prose1Body")}</p>
      </Prose>

      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="mb-16 text-center">
            <p className="type-eyebrow text-sage">{t("circleEyebrow")}</p>
            <h2 className="type-section mt-4">{t("circleHeading")}</h2>
            <ul className="mt-8 flex flex-wrap justify-center gap-2">
              {circleItems.map((item) => (
                <li key={item} className="rounded-full border border-paper/20 px-4 py-1.5 text-sm text-paper/75">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <ol className="divide-y divide-paper/10 border-y border-paper/10">
            {familyRowKeys.map((key) => (
              <li key={key}>
                <Reveal className="flex gap-6 py-8">
                  <span className="shrink-0 text-3xl" aria-hidden="true">
                    {familyRowMeta[key].icon}
                  </span>
                  <div>
                    <h3 className="type-eyebrow text-paper">{t(`rows.${key}.title`)}</h3>
                    <p className="mt-3 text-lg leading-relaxed text-paper/75">{t(`rows.${key}.body`)}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Prose eyebrow={t("prose2Eyebrow")} heading={t("prose2Heading")}>
        <p>{t("prose2Body")}</p>
      </Prose>
    </>
  );
}
