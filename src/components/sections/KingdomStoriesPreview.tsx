import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Reveal from "@/components/motion/Reveal";
import Filmstrip from "@/components/sections/Filmstrip";
import { kingdomStoryCategories } from "@/content/copy";

/** Editorial preview of Kingdom Stories — real church history and revival accounts, not a generic blog feed. */
export default async function KingdomStoriesPreview() {
  const t = await getTranslations("KingdomStoriesPreview");
  const tCategories = await getTranslations("KingdomStoryCategories");

  return (
    <section className="bg-forest py-24">
      <div className="mx-auto max-w-2xl px-6 text-center text-paper">
        <Reveal>
          <p className="type-eyebrow text-sage">{t("eyebrow")}</p>
          <h2 className="type-section mt-4">{t("heading")}</h2>
          <p className="type-lead mt-6 text-paper/75">{t("body")}</p>
        </Reveal>
      </div>

      <div className="mt-14">
        <Filmstrip
          items={kingdomStoryCategories.slice(0, 7).map((c) => ({
            mediaKey: c.mediaKey,
            icon: c.icon,
            title: tCategories(`${c.slug}.title`),
            body: tCategories(`${c.slug}.body`),
            href: `/kingdom-stories/${c.slug}`,
            readMore: t("readStory"),
          }))}
          ariaLabel={t("heading")}
        />
      </div>

      <Reveal className="mt-12 text-center">
        <Link
          href="/kingdom-stories"
          className="inline-block rounded-full border border-paper/40 px-8 py-3.5 text-sm tracking-wide text-paper transition-colors hover:bg-paper hover:text-ink"
        >
          {t("exploreAll")}
        </Link>
      </Reveal>
    </section>
  );
}
