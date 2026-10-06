import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Filmstrip from "@/components/sections/Filmstrip";
import { kingdomStoryCategories } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("KingdomStoriesPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function KingdomStoriesPage() {
  const t = await getTranslations("KingdomStoriesPage");
  const tCategories = await getTranslations("KingdomStoryCategories");

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} mediaKey="stories" />

      <section className="bg-ink py-24">
        <div className="mx-auto max-w-2xl px-6 text-center text-paper">
          <p className="text-xs tracking-[0.35em] text-gold-soft/90 uppercase">{t("discoveryEyebrow")}</p>
          <h2 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl">{t("discoveryHeading")}</h2>
          <p className="mt-6 text-left text-lg leading-relaxed text-paper/75">{t("discoveryBody")}</p>
        </div>
        <div className="mt-14">
          <Filmstrip
            items={kingdomStoryCategories.map((c) => ({
              mediaKey: c.mediaKey,
              icon: c.icon,
              title: tCategories(`${c.slug}.title`),
              body: tCategories(`${c.slug}.body`),
              href: `/kingdom-stories/${c.slug}`,
              readMore: t("readStory"),
            }))}
            ariaLabel={t("heroTitle")}
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
