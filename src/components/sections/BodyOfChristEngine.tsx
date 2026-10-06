import Link from "next/link";
import { getTranslations } from "next-intl/server";
import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";
import MediaCard from "@/components/sections/MediaCard";
import { NextArrow } from "@/components/ui/DirArrow";
import { giftCategoryKeys, giftCategoryMeta, giftExampleKeys, giftExampleMeta } from "@/content/copy";

export default async function BodyOfChristEngine() {
  const t = await getTranslations("BodyOfChristEngine");
  const tScripture = await getTranslations("Scripture.gifts");

  return (
    <section className="relative overflow-hidden bg-ink py-28">
      <div className="px-6 text-center text-paper">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold-soft/90 uppercase">{t("eyebrow")}</p>
          <h2 className="font-display mt-4 text-4xl tracking-tight sm:text-6xl">{t("heading")}</h2>
          <blockquote className="font-display mx-auto mt-8 max-w-2xl text-xl italic text-paper/85 sm:text-2xl">
            &ldquo;{tScripture("text")}&rdquo;
          </blockquote>
          <p className="mt-3 text-sm tracking-[0.2em] text-paper/50 uppercase">{tScripture("reference")}</p>
          <p className="mx-auto mt-8 max-w-xl text-left text-base leading-relaxed text-paper/70">{t("intro")}</p>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 md:grid-cols-3">
        {giftCategoryKeys.map((key, i) => (
          <Reveal key={key} delay={i * 0.05}>
            <MediaCard mediaKey={giftCategoryMeta[key].mediaKey} imgHeight="h-40">
              <span className="text-3xl" aria-hidden="true">
                {giftCategoryMeta[key].icon}
              </span>
              <h3 className="font-display mt-3 text-lg tracking-tight">{t(`categories.${key}.title`)}</h3>
              <p className="mt-2 text-xs leading-relaxed text-paper/70">{t(`categories.${key}.examples`)}</p>
              <p className="mt-3 text-[11px] tracking-[0.2em] text-gold-soft/90 uppercase">
                <NextArrow /> {t(`categories.${key}.outcome`)}
              </p>
            </MediaCard>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-28 max-w-4xl px-6">
        <Reveal className="text-center">
          <p className="text-xs tracking-[0.3em] text-paper/50 uppercase">{t("exampleEyebrow")}</p>
          <h3 className="font-display mt-3 text-2xl text-paper sm:text-3xl">{t("exampleHeading")}</h3>
        </Reveal>

        <div className="mt-14 flex flex-col gap-16">
          {giftExampleKeys.map((key, i) => (
            <Reveal key={key} delay={i * 0.05}>
              <div className={`flex flex-col items-center gap-6 sm:flex-row ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}>
                <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-lg sm:w-64">
                  <CinematicMedia mediaKey={giftExampleMeta[key].mediaKey} />
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-3xl" aria-hidden="true">
                    {giftExampleMeta[key].icon}
                  </span>
                  <h4 className="font-display mt-2 text-xl text-paper">{t(`examples.${key}.title`)}</h4>
                  <div className="mt-2 flex flex-wrap justify-center gap-2 sm:justify-start">
                    {t.raw(`examples.${key}.tags`).map((tag: string) => (
                      <span
                        key={tag}
                        className="rounded-full border border-paper/20 px-3 py-1 text-[11px] tracking-wide text-paper/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/70">{t(`examples.${key}.body`)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link
          href="/gifts"
          className="inline-block rounded-full border border-gold-soft/60 px-8 py-3.5 text-sm tracking-wide text-gold-soft transition-colors hover:bg-gold-soft hover:text-ink"
        >
          {t("discoverGifts")}
        </Link>
      </div>
    </section>
  );
}
