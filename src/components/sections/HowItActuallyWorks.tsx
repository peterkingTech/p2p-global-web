import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Reveal from "@/components/motion/Reveal";
import { NextArrow } from "@/components/ui/DirArrow";

const stepKeys = ["download", "kingdomSchool", "guide"] as const;
const stepNumbers: Record<(typeof stepKeys)[number], string> = {
  download: "01",
  kingdomSchool: "02",
  guide: "03",
};

export default async function HowItActuallyWorks() {
  const t = await getTranslations("HowItActuallyWorks");

  return (
    <section className="bg-paper py-24 text-ink">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="mb-16 text-center">
          <p className="text-xs tracking-[0.35em] text-water uppercase">{t("eyebrow")}</p>
          <h2 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl">{t("heading")}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">{t("subheading")}</p>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-3">
          {stepKeys.map((key, i) => (
            <Reveal key={key} delay={i * 0.06} className="flex flex-col gap-4">
              <span className="font-display text-5xl text-ink/10">{stepNumbers[key]}</span>
              <h3 className="font-display text-xl">{t(`steps.${key}.title`)}</h3>
              <p className="leading-relaxed text-ink/70">{t(`steps.${key}.body`)}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16 text-center">
          <Link
            href="/how-it-works"
            className="inline-block rounded-full border border-ink/20 px-8 py-3 text-sm tracking-wide transition hover:bg-ink hover:text-paper"
          >
            {t("learnMore")} <NextArrow />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
