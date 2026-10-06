import { getTranslations } from "next-intl/server";
import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";
import { NextArrow } from "@/components/ui/DirArrow";
import { journeyStepKeys } from "@/content/copy";

export default async function GlobalCommunity() {
  const t = await getTranslations("GlobalCommunity");

  return (
    <section className="bg-ink py-28">
      <Reveal className="mx-auto max-w-6xl px-6">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80">
          <CinematicMedia mediaKey="globalCommunity" kenBurns grain={false} vignette={false} />
        </div>
      </Reveal>

      <div className="mx-auto mt-16 max-w-3xl px-6 text-center text-paper">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold-soft/90 uppercase">{t("eyebrow")}</p>
          <h2 className="font-display mt-4 text-4xl leading-tight tracking-tight sm:text-6xl">
            {t("headingLine1")}
            <br />
            {t("headingLine2")}
            <br />
            {t("headingLine3")}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-20">
          <p className="text-xs tracking-[0.3em] text-paper/50 uppercase">{t("journeyEyebrow")}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-4">
            {journeyStepKeys.map((key, i) => (
              <span key={key} className="flex items-center gap-3">
                <span className="text-sm tracking-wide text-paper/80">{t(`journeySteps.${key}`)}</span>
                {i < journeyStepKeys.length - 1 && <span className="text-gold-soft/50"><NextArrow /></span>}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
