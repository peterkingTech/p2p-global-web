import Link from "next/link";
import { getTranslations } from "next-intl/server";
import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";

export default async function FinalCTA() {
  const t = await getTranslations("FinalCTA");
  const tBrand = await getTranslations("Brand");

  return (
    <section className="bg-ink">
      <div className="relative h-[60vh] min-h-[360px] overflow-hidden">
        <CinematicMedia mediaKey="finalCta" grain={false} />
      </div>

      <div className="px-6 py-24 text-center">
        <Reveal className="mx-auto max-w-2xl text-paper">
          <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-5xl">
            {t("headingLine1")}
            <br />
            {t("headingLine2")}
          </h2>
          <p className="font-display mt-8 text-xl text-gold-soft sm:text-2xl">{t("question")}</p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/join"
              className="rounded-full bg-gold-soft px-8 py-3.5 text-sm font-medium tracking-wide text-ink transition-transform hover:scale-[1.03]"
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
            <p className="mt-3 text-gold-soft/90">{tBrand("centerLine3")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
