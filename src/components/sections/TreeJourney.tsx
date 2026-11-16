import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Reveal from "@/components/motion/Reveal";
import MediaCard from "@/components/sections/MediaCard";
import { NextArrow } from "@/components/ui/DirArrow";
import { treeJourneyKeys, treeJourneyIcons, growthDimensionKeys } from "@/content/copy";

const mediaKeys: Record<(typeof treeJourneyKeys)[number], string> = {
  seed: "treeSeed",
  sprout: "treeSprout",
  young: "treeYoung",
  fruitful: "treeFruitful",
  forestBuilder: "treeForestBuilder",
  forestNations: "treeForestNations",
};

/** The Living Tree: four dimensions of evidence, then the six stages as a snap-scrolling filmstrip. */
export default async function TreeJourney() {
  const t = await getTranslations("TreeJourney");

  return (
    <section className="bg-paper py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="type-eyebrow text-emerald">{t("eyebrow")}</p>
          <h2 className="type-section mt-4 text-ink">{t("heading")}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/70">{t("body")}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <p className="type-eyebrow text-ink/50">{t("dimensionsEyebrow")}</p>
          <ul className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-ink/10 bg-ink/10 sm:grid-cols-4">
            {growthDimensionKeys.map((key) => (
              <li key={key} className="bg-paper px-4 py-5 font-display text-lg text-ink">
                {t(`dimensions.${key}`)}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div
          role="group"
          aria-label={t("ariaLabel")}
          tabIndex={0}
          className="mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 [scrollbar-width:thin] sm:px-[max(1.5rem,calc((100vw-72rem)/2))]"
        >
          {treeJourneyKeys.map((key) => (
            <div key={key} className="w-[78vw] shrink-0 snap-start sm:w-[300px]">
              <MediaCard mediaKey={mediaKeys[key]} imgHeight="h-56">
                <span className="text-3xl" aria-hidden="true">
                  {treeJourneyIcons[key]}
                </span>
                <h3 className="type-card mt-3">{t(`stages.${key}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/75">{t(`stages.${key}.body`)}</p>
              </MediaCard>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-12 text-center">
        <Link
          href="/how-it-works/living-tree"
          className="inline-block rounded-full border border-ink/25 px-8 py-3 text-sm tracking-wide text-ink transition hover:bg-ink hover:text-paper"
        >
          {t("learnMore")} <NextArrow />
        </Link>
      </Reveal>
    </section>
  );
}
