import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Reveal from "@/components/motion/Reveal";
import CinematicMedia from "@/components/media/CinematicMedia";
import { NextArrow } from "@/components/ui/DirArrow";
import { ecosystem } from "@/content/copy";

const featured = { family: "familyLearning", church: "churchGathered" } as const;

/**
 * Where discipleship happens. Family and Church get photographs — they are
 * real places with real people. The supporting experiences are a text row.
 */
export default async function EcosystemStrip() {
  const t = await getTranslations("Ecosystem");
  const big = ecosystem.filter((i) => i.key in featured);
  const small = ecosystem.filter((i) => !(i.key in featured));

  return (
    <section className="bg-forest py-28 text-paper">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="type-eyebrow text-sage">{t("eyebrow")}</p>
          <h2 className="type-section mt-4">{t("heading")}</h2>
          <p className="type-lead mt-6 text-paper/75">{t("intro")}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {big.map((item, i) => (
            <Reveal key={item.key} delay={i * 0.08}>
              <Link href={item.href} className="group relative block aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[5/4]">
                <CinematicMedia mediaKey={featured[item.key as keyof typeof featured]} grain={false} vignette={false} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                  <h3 className="type-card">{t(`items.${item.key}.title`)}</h3>
                  <p className="mt-2 max-w-sm leading-relaxed text-paper/80">{t(`items.${item.key}.body`)}</p>
                  <span className="type-eyebrow mt-5 inline-block text-sage transition-colors group-hover:text-paper">
                    {t("explore")} <NextArrow />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
          {small.map((item) => (
            <li key={item.key} className="bg-forest">
              <Link href={item.href} className="group flex h-full flex-col p-6 transition-colors hover:bg-surface">
                <h3 className="type-eyebrow text-paper">{t(`items.${item.key}.title`)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/65">{t(`items.${item.key}.body`)}</p>
                <span className="mt-auto pt-4 text-sage group-hover:text-paper">
                  <NextArrow />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
