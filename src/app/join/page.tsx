import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Reveal from "@/components/motion/Reveal";
import { gettingStartedStepKeys, gettingStartedStepNumbers } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("JoinPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function JoinPage() {
  const t = await getTranslations("JoinPage");
  const tBrand = await getTranslations("Brand");
  const tSteps = await getTranslations("GettingStartedSteps");
  const tTopics = await getTranslations("HowItWorksTopics");
  const tNav = await getTranslations("Nav");
  const tFooter = await getTranslations("Footer");

  const links = [
    { label: tNav("howItWorks"), href: "/how-it-works" },
    { label: tTopics("livingTree.title"), href: "/how-it-works/living-tree" },
    { label: tTopics("kingdomSchool.title"), href: "/how-it-works/kingdom-school" },
    { label: tTopics("peerGuide.title"), href: "/how-it-works/peer-guide" },
    { label: tFooter("churches"), href: "/churches" },
  ];

  return (
    <>
      <section className="flex min-h-[70vh] items-center justify-center bg-ink px-6 py-32 text-center">
        <Reveal className="mx-auto max-w-xl text-paper">
          <p className="text-xs tracking-[0.4em] text-gold-soft/90 uppercase">{t("eyebrow", { name: tBrand("name") })}</p>
          <h1 className="font-display mt-6 text-4xl tracking-tight sm:text-6xl">{t("heading")}</h1>
          <p className="mt-8 text-lg leading-relaxed text-paper/80">{tBrand("tagline")}</p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <span className="inline-flex cursor-not-allowed items-center gap-3 rounded-full bg-gold-soft/40 px-8 py-4 text-sm font-medium tracking-wide text-ink/60">
              <span aria-hidden="true">📱</span>
              {t("androidComingSoon")}
            </span>
            <span className="text-sm text-paper/40">{t("iosComingSoon")}</span>
          </div>
          <p className="mt-4 text-xs text-paper/40">{t("storeNote")}</p>

          <div className="mt-16 space-y-1 text-sm tracking-wide text-paper/50">
            <p>{tBrand("centerLine1")}</p>
            <p>{tBrand("centerLine2")}</p>
            <p className="mt-3 text-gold-soft/90">{tBrand("centerLine3")}</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-paper px-6 py-24 text-ink">
        <div className="mx-auto max-w-2xl">
          <Reveal className="mb-16 text-center">
            <p className="text-xs tracking-[0.35em] text-water uppercase">{t("beforeEyebrow")}</p>
            <h2 className="font-display mt-4 text-3xl tracking-tight">{t("beforeHeading")}</h2>
          </Reveal>

          <div className="flex flex-col gap-10">
            {gettingStartedStepKeys.map((key) => (
              <Reveal key={key} className="flex gap-6">
                <span className="w-10 shrink-0 font-display text-3xl text-water/40">{gettingStartedStepNumbers[key]}</span>
                <div className="border-l border-ink/10 pl-6">
                  <h3 className="text-lg font-medium">{tSteps(`${key}.title`)}</h3>
                  <p className="mt-2 leading-relaxed text-ink/70">{tSteps(`${key}.body`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-20 text-center text-paper">
        <Reveal>
          <p className="mb-8 text-xs tracking-[0.35em] text-gold-soft/90 uppercase">{t("understandMore")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-paper/20 px-5 py-2 text-sm text-paper/70 transition hover:border-paper/50 hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
