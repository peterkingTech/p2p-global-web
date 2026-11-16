import { getTranslations } from "next-intl/server";
import Reveal from "@/components/motion/Reveal";
import { NextArrow } from "@/components/ui/DirArrow";
import { journeyStepKeys } from "@/content/copy";

export default async function GlobalCommunity() {
  const t = await getTranslations("GlobalCommunity");

  return (
    <section className="bg-ink py-32">
      <div className="mx-auto max-w-4xl px-6 text-center text-paper">
        <Reveal>
          <p className="type-eyebrow text-sage">{t("eyebrow")}</p>
          <h2 className="type-hero mt-6">
            {t("headingLine1")}
            <br />
            {t("headingLine2")}
            <br />
            {t("headingLine3")}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-20">
          <p className="type-eyebrow text-paper/50">{t("journeyEyebrow")}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-4">
            {journeyStepKeys.map((key, i) => (
              <span key={key} className="flex items-center gap-3">
                <span className="text-sm tracking-wide text-paper/80">{t(`journeySteps.${key}`)}</span>
                {i < journeyStepKeys.length - 1 && <span className="text-gold/70"><NextArrow /></span>}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
