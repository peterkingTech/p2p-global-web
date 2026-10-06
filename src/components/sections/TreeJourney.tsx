import { getTranslations } from "next-intl/server";
import Reveal from "@/components/motion/Reveal";
import MediaCard from "@/components/sections/MediaCard";
import { treeJourneyKeys, treeJourneyIcons } from "@/content/copy";

const mediaKeys: Record<(typeof treeJourneyKeys)[number], string> = {
  seed: "treeSeed",
  sprout: "treeSprout",
  young: "treeYoung",
  fruitful: "treeFruitful",
  forestBuilder: "treeForestBuilder",
  forestNations: "treeForestNations",
};

/** Horizontal, snap-scrolling filmstrip — deliberately not a card grid. */
export default async function TreeJourney() {
  const t = await getTranslations("TreeJourney");

  return (
    <section className="bg-paper py-28">
      <div className="px-6 pb-16 text-center">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-water uppercase">{t("eyebrow")}</p>
          <h2 className="font-display mt-4 text-4xl tracking-tight text-ink sm:text-6xl">{t("heading")}</h2>
          <p className="mx-auto mt-6 max-w-xl text-left text-lg leading-relaxed text-ink/70">{t("body")}</p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div
          role="group"
          aria-label={t("ariaLabel")}
          className="mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 [scrollbar-width:thin] sm:px-[max(1.5rem,calc((100vw-72rem)/2))]"
        >
          {treeJourneyKeys.map((key) => (
            <div key={key} className="w-[78vw] shrink-0 snap-start sm:w-[300px]">
              <MediaCard mediaKey={mediaKeys[key]} imgHeight="h-56">
                <span className="text-3xl" aria-hidden="true">
                  {treeJourneyIcons[key]}
                </span>
                <h3 className="font-display mt-3 text-xl tracking-tight">{t(`stages.${key}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/75">{t(`stages.${key}.body`)}</p>
              </MediaCard>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
