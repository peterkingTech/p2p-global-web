import Link from "next/link";
import { getTranslations } from "next-intl/server";
import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";

export default async function FinalCTA() {
  const t = await getTranslations("FinalCTA");
  const tBrand = await getTranslations("Brand");

  return (
    <section className="bg-ink">
      <div className="relative h-[70svh] min-h-[380px] overflow-hidden">
        <CinematicMedia mediaKey="finalCta" grain={false} />
      </div>

      <div className="px-6 py-24 text-center">
        <Reveal className="mx-auto max-w-2xl text-paper">
          <h2 className="type-hero text-[clamp(2.2rem,4vw+1rem,4rem)]">
            {t("headingLine1")}
            <br />
            {t("headingLine2")}
          </h2>
          <p className="type-scripture mt-8 text-2xl text-gold sm:text-3xl">{t("question")}</p>
          <p className="mt-6 text-sm text-paper/55">{t("freeNote")}</p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/join"
              className="rounded-full px-8 py-3.5 text-sm font-medium tracking-wide transition-colors bg-emerald-bright text-white hover:bg-emerald"
            >
              {t("ctaExperience")}
            </Link>
            <Link
              href="/vision"
              className="rounded-full border border-paper/40 px-8 py-3.5 text-sm tracking-wide text-paper/90 transition-colors hover:border-paper hover:text-paper"
            >
              {t("ctaExplore")}
            </Link>
          </div>

          <div className="mt-20 space-y-1 text-sm tracking-wide text-paper/60">
            <p>{tBrand("centerLine1")}</p>
            <p>{tBrand("centerLine2")}</p>
            <p className="mt-3 text-paper">{tBrand("centerLine3")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
