import Link from "next/link";
import { getTranslations } from "next-intl/server";
import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";
import { NextArrow } from "@/components/ui/DirArrow";
import { giftCategoryKeys, giftCategoryMeta, giftExampleKeys, giftExampleMeta } from "@/content/copy";

/**
 * Gifts and service. The categories are typographic (seven stock photos
 * of "a laptop" or "a lightbulb" said nothing); photography is kept only
 * for the four illustrative people, where a face carries the idea.
 */
export default async function BodyOfChristEngine({ showLink = true }: { showLink?: boolean }) {
  const t = await getTranslations("BodyOfChristEngine");
  const tScripture = await getTranslations("Scripture.gifts");

  return (
    <section className="bg-ink py-28 text-paper">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <p className="type-eyebrow text-sage">{t("eyebrow")}</p>
            <h2 className="type-section mt-4">{t("heading")}</h2>
            <p className="type-lead mt-6 text-paper/75">{t("intro")}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="border-s-2 border-gold/60 ps-6">
              <blockquote className="type-scripture text-2xl text-paper/90 sm:text-3xl">&ldquo;{tScripture("text")}&rdquo;</blockquote>
              <figcaption className="type-eyebrow mt-4 text-gold">{tScripture("reference")}</figcaption>
            </figure>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
          {giftCategoryKeys.map((key, i) => (
            <li key={key} className={`bg-ink ${i === giftCategoryKeys.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
              <Reveal delay={i * 0.03} className="flex h-full flex-col p-7">
                <span className="text-3xl" aria-hidden="true">
                  {giftCategoryMeta[key].icon}
                </span>
                <h3 className="type-eyebrow mt-4 text-paper">{t(`categories.${key}.title`)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/65">{t(`categories.${key}.examples`)}</p>
                <p className="mt-auto pt-5 text-xs tracking-wide text-sage">
                  <NextArrow /> {t(`categories.${key}.outcome`)}
                </p>
              </Reveal>
            </li>
          ))}
          {/* Seven categories in a four-column grid: a quiet filler keeps the grid even. */}
          <li className="hidden bg-surface lg:block" aria-hidden="true" />
        </ul>

        <div className="mt-24">
          <Reveal className="max-w-2xl">
            <p className="type-eyebrow text-sage">{t("exampleEyebrow")}</p>
            <h3 className="type-section mt-3">{t("exampleHeading")}</h3>
          </Reveal>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {giftExampleKeys.map((key, i) => (
              <Reveal key={key} delay={i * 0.05} className="flex gap-5">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-32">
                  <CinematicMedia mediaKey={giftExampleMeta[key].mediaKey} grain={false} vignette={false} />
                </div>
                <div>
                  <h4 className="type-eyebrow text-paper">{t(`examples.${key}.title`)}</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(t.raw(`examples.${key}.tags`) as string[]).map((tag) => (
                      <span key={tag} className="rounded-full border border-paper/20 px-3 py-1 text-xs text-paper/65">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-paper/70">{t(`examples.${key}.body`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {showLink && (
          <Reveal className="mt-16">
            <Link
              href="/gifts"
              className="inline-block rounded-full bg-emerald-bright px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-emerald"
            >
              {t("discoverGifts")} <NextArrow />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
