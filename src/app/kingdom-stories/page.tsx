import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Filmstrip from "@/components/sections/Filmstrip";
import Reveal from "@/components/motion/Reveal";
import { NextArrow } from "@/components/ui/DirArrow";
import { pageMetadata } from "@/lib/seo";
import { kingdomStoryCategories, kingdomStoryAreas, kingdomStoryFurtherReading } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("KingdomStoriesPage");
  return pageMetadata({ title: t("metaTitle"), description: t("metaDescription"), path: "/kingdom-stories" });
}

export default async function KingdomStoriesPage() {
  const t = await getTranslations("KingdomStoriesPage");
  const tCategories = await getTranslations("KingdomStoryCategories");
  const bySlug = Object.fromEntries(kingdomStoryCategories.map((c) => [c.slug, c]));

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <Prose eyebrow={t("introEyebrow")} heading={t("introHeading")}>
        <p>{t("introBody1")}</p>
        <p>{t("introBody2")}</p>
      </Prose>

      {/* The six agreed content areas */}
      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-14 max-w-2xl">
            <p className="type-eyebrow text-sage">{t("areasEyebrow")}</p>
            <h2 className="type-section mt-4">{t("areasHeading")}</h2>
          </Reveal>

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {kingdomStoryAreas.map((area, i) => {
              const lead = bySlug[area.slugs[0]];
              return (
                <li key={area.key}>
                  <Reveal delay={i * 0.05} className="flex h-full flex-col rounded-2xl border border-paper/10 bg-surface">
                    <div className="flex flex-1 flex-col p-7">
                      <span className="text-3xl" aria-hidden="true">
                        {lead.icon}
                      </span>
                      <span className="mt-4 font-display text-sm text-gold">{`0${i + 1}`}</span>
                      <h3 className="type-card mt-2">{t(`areas.${area.key}`)}</h3>
                      <ul className="mt-5 space-y-2">
                        {area.slugs.map((slug) => (
                          <li key={slug}>
                            <Link
                              href={`/kingdom-stories/${slug}`}
                              className="group block text-sm leading-relaxed text-paper/70 hover:text-paper"
                            >
                              {tCategories(`${slug}.body`)}{" "}
                              <span className="text-sage group-hover:text-paper">
                                <NextArrow />
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="bg-forest py-24">
        <div className="mx-auto max-w-2xl px-6 text-center text-paper">
          <p className="type-eyebrow text-sage">{t("moreEyebrow")}</p>
          <h2 className="type-section mt-4">{t("moreHeading")}</h2>
        </div>
        <div className="mt-14">
          <Filmstrip
            items={kingdomStoryFurtherReading.map((slug) => ({
              mediaKey: bySlug[slug].mediaKey,
              icon: bySlug[slug].icon,
              title: tCategories(`${slug}.title`),
              body: tCategories(`${slug}.body`),
              href: `/kingdom-stories/${slug}`,
              readMore: t("readStory"),
            }))}
            ariaLabel={t("moreHeading")}
          />
        </div>
      </section>

      <Prose eyebrow={t("prose1Eyebrow")} heading={t("prose1Heading")}>
        <p>{t("prose1Body1")}</p>
        <p>{t("prose1Body2")}</p>
      </Prose>
    </>
  );
}
