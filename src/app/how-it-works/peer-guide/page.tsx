import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import Quote from "@/components/sections/Quote";
import { NextArrow } from "@/components/ui/DirArrow";
import { pageMetadata } from "@/lib/seo";
import { peerGuideRelationshipKeys } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("PeerGuidePage");
  return pageMetadata({ title: t("metaTitle"), description: t("metaDescription"), path: "/how-it-works/peer-guide" });
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
            <p className="mb-4 type-eyebrow text-sage">{t("whatTheyDoEyebrow")}</p>
            <h2 className="type-section">{t("whatTheyDoHeading")}</h2>
          </Reveal>
          <ul className="flex flex-col gap-4">
            {whatTheyDo.map((item, i) => (
              <Reveal key={i} className="flex items-start gap-4 border-b border-paper/10 pb-4 last:border-0">
                <span className="mt-1 shrink-0 text-sage" aria-hidden="true">
                  <NextArrow />
                </span>
                <p className="text-lg leading-relaxed text-paper/85">{item}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-24 text-ink">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mb-12 max-w-2xl">
            <p className="mb-4 type-eyebrow text-emerald">{t("relationshipEyebrow")}</p>
            <h2 className="type-section">{t("relationshipHeading")}</h2>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {peerGuideRelationshipKeys.map((key, i) => (
              <Reveal key={key} delay={i * 0.05} className="bg-white p-8">
                <h3 className="type-card">{tExplainer(`relationship.${key}.title`)}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{tExplainer(`relationship.${key}.body`)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Prose eyebrow={t("churchEyebrow")} heading={t("churchHeading")}>
        <p>{t("churchBody")}</p>
      </Prose>

      <Prose eyebrow={t("becomingEyebrow")} heading={t("becomingHeading")} tone="dark">
        <p>{tExplainer("becomingAGuide")}</p>
      </Prose>
    </>
  );
}
