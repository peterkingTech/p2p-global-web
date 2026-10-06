import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";

const journeyKeys = ["field", "story", "scripture", "prayer", "learning", "response"] as const;
const journeyMediaKeys: Record<(typeof journeyKeys)[number], string> = {
  field: "missions",
  story: "kingdomStories",
  scripture: "study",
  prayer: "prayer",
  learning: "discipleGrow",
  response: "discipleHelp",
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("MissionsPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function MissionsPage() {
  const t = await getTranslations("MissionsPage");

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} mediaKey="missions" />

      <Prose eyebrow={t("prose1Eyebrow")} heading={t("prose1Heading")}>
        <p>{t("prose1Body")}</p>
      </Prose>

      <section className="bg-ink py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {journeyKeys.map((key, i) => (
            <Reveal key={key} delay={i * 0.05} className="relative min-h-[260px] overflow-hidden rounded-lg">
              <CinematicMedia mediaKey={journeyMediaKeys[key]} />
              <div className="relative z-10 flex h-full flex-col justify-end p-6 text-paper">
                <span className="text-xs tracking-[0.3em] text-gold-soft/80 uppercase">0{i + 1}</span>
                <h3 className="font-display mt-2 text-xl tracking-tight">{t(`journey.${key}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">{t(`journey.${key}.body`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Prose eyebrow={t("prose2Eyebrow")} heading={t("prose2Heading")}>
        <p>{t("prose2Body")}</p>
      </Prose>

      <div className="bg-paper px-6 py-20 text-center">
        <p className="mx-auto max-w-md text-left text-lg text-ink/70">{t("closingBody")}</p>
        <Link
          href="/join"
          className="mt-8 inline-block rounded-full bg-ink px-8 py-3.5 text-sm tracking-wide text-paper transition-transform hover:scale-[1.03]"
        >
          {t("closingCta")}
        </Link>
      </div>
    </>
  );
}
