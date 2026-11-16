import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Reveal from "@/components/motion/Reveal";
import { NextArrow } from "@/components/ui/DirArrow";
import { discipleStepKeys } from "@/content/copy";

/**
 * The 2 Timothy 2:2 chain, told with typography alone: each generation
 * steps inward so the list reads as a lineage. No photography — the idea
 * is relational, and stock images of "people" added nothing to it.
 */
export default async function DiscipleMultiplication() {
  const t = await getTranslations("DiscipleMultiplication");
  const tScripture = await getTranslations("Scripture.mission");

  return (
    <section className="bg-white py-28 text-ink">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <p className="type-eyebrow text-emerald">{t("eyebrow")}</p>
          <h2 className="type-section mt-4">{t("heading")}</h2>
          <p className="type-lead mt-6 text-ink/70">{t("body")}</p>
          <figure className="mt-10 border-s-2 border-gold-deep/60 ps-5">
            <blockquote className="type-scripture text-xl text-ink/85">&ldquo;{tScripture("text")}&rdquo;</blockquote>
            <figcaption className="type-eyebrow mt-3 text-gold-deep">{tScripture("reference")}</figcaption>
          </figure>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/how-it-works/peer-guide"
              className="rounded-full bg-emerald-bright px-7 py-3.5 text-center text-sm font-medium tracking-wide text-white transition-colors hover:bg-emerald"
            >
              {t("ctaPeerGuide")} <NextArrow />
            </Link>
            <Link
              href="/how-it-works/generational-forest"
              className="rounded-full border border-ink/25 px-7 py-3.5 text-center text-sm tracking-wide text-ink transition hover:border-ink"
            >
              {t("ctaForest")}
            </Link>
          </div>
        </Reveal>

        <ol className="flex flex-col">
          {discipleStepKeys.map((key, i) => (
            <li key={key} style={{ paddingInlineStart: `${Math.min(i, 4) * 0.9}rem` }}>
              <Reveal delay={i * 0.04} className="border-s border-emerald/30 py-6 ps-6">
                <span className="font-display text-sm text-emerald">{`0${i + 1}`}</span>
                <h3 className="type-card mt-1">{t(`steps.${key}.title`)}</h3>
                <p className="mt-2 leading-relaxed text-ink/70">{t(`steps.${key}.body`)}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
