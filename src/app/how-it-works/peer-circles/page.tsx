import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("PeerCirclesPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function PeerCirclesPage() {
  const t = await getTranslations("PeerCirclesPage");
  const tExplainer = await getTranslations("PeerCircleExplainer");
  const howItWorks = tExplainer.raw("howItWorks") as string[];
  const fruits = tExplainer.raw("fruits") as string[];

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <Prose eyebrow={t("prose1Eyebrow")} heading={tExplainer("definition")}>
        <p>{t("prose1Body")}</p>
      </Prose>

      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-gold-soft/90 uppercase">{t("howEyebrow")}</p>
            <h2 className="font-display text-3xl tracking-tight">{t("howHeading")}</h2>
          </Reveal>
          <div className="flex flex-col gap-6">
            {howItWorks.map((step, i) => (
              <Reveal key={i} className="flex gap-4">
                <span className="w-8 shrink-0 font-display text-3xl text-gold-soft/30">{i + 1}</span>
                <p className="pt-1 leading-relaxed text-paper/80">{step}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-water uppercase">{t("fruitsEyebrow")}</p>
            <h2 className="font-display text-3xl tracking-tight">{t("fruitsHeading")}</h2>
          </Reveal>
          <div className="flex flex-col gap-4">
            {fruits.map((fruit, i) => (
              <Reveal key={i} className="flex gap-4 rounded-lg border border-ink/10 px-5 py-4">
                <span className="text-xl" aria-hidden="true">
                  🍎
                </span>
                <p className="leading-relaxed text-ink/70">{fruit}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
