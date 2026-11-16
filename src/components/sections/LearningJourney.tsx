import Link from "next/link";
import { getTranslations } from "next-intl/server";
import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";
import { NextArrow } from "@/components/ui/DirArrow";
import { learningJourneyItems } from "@/content/copy";

/**
 * Scripture & learning. One image only — the open Bible, because Scripture
 * leads — and the learning experiences set as an editorial list beside it.
 */
export default async function LearningJourney() {
  const t = await getTranslations("LearningJourney");
  const [lead, ...rest] = learningJourneyItems;

  return (
    <section className="bg-ink py-28 text-paper">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="type-eyebrow text-sage">{t("eyebrow")}</p>
          <h2 className="type-section mt-4">{t("heading")}</h2>
          <p className="type-lead mt-6 text-paper/75">{t("body")}</p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Link href={lead.href} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[4/3] lg:aspect-[4/5]">
                <CinematicMedia mediaKey={lead.mediaKey} grain={false} />
              </div>
              <h3 className="type-card mt-8">{t(`items.${lead.key}.title`)}</h3>
              <p className="mt-3 max-w-lg leading-relaxed text-paper/75">{t(`items.${lead.key}.body`)}</p>
              <span className="type-eyebrow mt-6 inline-block text-sage transition-colors group-hover:text-paper">
                {t("ctaBible")} <NextArrow />
              </span>
            </Link>
          </Reveal>

          <ul className="flex flex-col justify-center divide-y divide-paper/10 border-y border-paper/10">
            {rest.map((item, i) => (
              <li key={item.key}>
                <Reveal delay={i * 0.06}>
                  <Link href={item.href} className="group flex items-start justify-between gap-6 py-8">
                    <div>
                      <h3 className="type-card">{t(`items.${item.key}.title`)}</h3>
                      <p className="mt-3 leading-relaxed text-paper/70">{t(`items.${item.key}.body`)}</p>
                    </div>
                    <span className="mt-2 shrink-0 text-sage transition-colors group-hover:text-paper">
                      <NextArrow />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <Reveal className="mt-16">
          <Link
            href="/how-it-works/kingdom-school"
            className="inline-block rounded-full bg-emerald-bright px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-emerald"
          >
            {t("ctaLearning")} <NextArrow />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
