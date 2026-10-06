import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import Quote from "@/components/sections/Quote";
import { NextArrow } from "@/components/ui/DirArrow";
import { peerGuideMatchingFactorKeys } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("PeerGuidePage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function PeerGuidePage() {
  const t = await getTranslations("PeerGuidePage");
  const tExplainer = await getTranslations("PeerGuideExplainer");
  const tScripture = await getTranslations("Scripture.mission");
  const whatTheyDo = tExplainer.raw("whatTheyDo") as string[];

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <Prose eyebrow={t("prose1Eyebrow")} heading={t("prose1Heading")}>
        <p>{tExplainer("definition")}</p>
        <Quote reference={tScripture("reference")} text={tScripture("text")} />
        <p>{t("prose1Body")}</p>
      </Prose>

      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-gold-soft/90 uppercase">{t("whatTheyDoEyebrow")}</p>
            <h2 className="font-display text-3xl tracking-tight">{t("whatTheyDoHeading")}</h2>
          </Reveal>
          <div className="flex flex-col gap-4">
            {whatTheyDo.map((item, i) => (
              <Reveal key={i} className="flex items-start gap-4">
                <span className="mt-1 shrink-0 text-gold-soft/70" aria-hidden="true">
                  <NextArrow />
                </span>
                <p className="leading-relaxed text-paper/80">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-water uppercase">{t("matchingEyebrow")}</p>
            <h2 className="font-display text-3xl tracking-tight">{t("matchingHeading")}</h2>
            <p className="mt-4 leading-relaxed text-ink/70">{t("matchingBody")}</p>
          </Reveal>
          <div className="flex flex-col gap-6">
            {peerGuideMatchingFactorKeys.map((key) => (
              <Reveal key={key} className="flex gap-4 border-b border-ink/10 pb-6 last:border-0">
                <div className="w-36 shrink-0 font-medium">{tExplainer(`matchingFactors.${key}.label`)}</div>
                <p className="text-ink/60">{tExplainer(`matchingFactors.${key}.detail`)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Prose eyebrow={t("becomingEyebrow")} heading={t("becomingHeading")} tone="dark">
        <p>{tExplainer("becomingAGuide")}</p>
      </Prose>
    </>
  );
}
