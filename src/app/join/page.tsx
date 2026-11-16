import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import Reveal from "@/components/motion/Reveal";
import { gettingStartedStepKeys, gettingStartedStepNumbers } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("JoinPage");
  return pageMetadata({ title: t("metaTitle"), description: t("metaDescription"), path: "/join" });
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
    { label: tTopics("kingdomSchool.title"), href: "/how-it-works/kingdom-school" },
    { label: tTopics("bible.title"), href: "/how-it-works/bible" },
    { label: tTopics("livingTree.title"), href: "/how-it-works/living-tree" },
    { label: tTopics("peerGuide.title"), href: "/how-it-works/peer-guide" },
    { label: tFooter("families"), href: "/families" },
    { label: tFooter("churches"), href: "/churches" },
  ];

  return (
    <>
      <section className="flex min-h-[70vh] items-center justify-center bg-ink px-6 py-32 text-center">
        <Reveal className="mx-auto max-w-xl text-paper">
          <p className="type-eyebrow text-sage/90">{t("eyebrow", { name: tBrand("name") })}</p>
          <h1 className="font-display mt-6 text-4xl tracking-tight sm:text-6xl">{t("heading")}</h1>
          <p className="mt-8 text-lg leading-relaxed text-paper/80">{tBrand("tagline")}</p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <span
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center gap-3 rounded-full border border-paper/25 bg-paper/10 px-8 py-4 text-sm font-medium tracking-wide text-paper/70"
            >
              <span aria-hidden="true">📱</span>
              {t("androidComingSoon")}
            </span>
            <span className="text-sm text-paper/40">{t("iosComingSoon")}</span>
          </div>
          <p className="mt-4 text-xs text-paper/50">{t("storeNote")}</p>
          <p className="mt-3 text-sm text-paper/70">{t("freeNote")}</p>

          <div className="mt-16 space-y-1 text-sm tracking-wide text-paper/50">
            <p>{tBrand("centerLine1")}</p>
            <p>{tBrand("centerLine2")}</p>
            <p className="mt-3 text-paper">{tBrand("centerLine3")}</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-paper px-6 py-24 text-ink">
        <div className="mx-auto max-w-2xl">
          <Reveal className="mb-16 text-center">
            <p className="type-eyebrow text-emerald">{t("beforeEyebrow")}</p>
            <h2 className="type-section mt-4">{t("beforeHeading")}</h2>
          </Reveal>

          <div className="flex flex-col gap-10">
            {gettingStartedStepKeys.map((key) => (
              <Reveal key={key} className="flex gap-6">
                <span className="w-10 shrink-0 font-display text-3xl text-ink/30">{gettingStartedStepNumbers[key]}</span>
                <div className="border-s border-ink/10 ps-6">
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
          <p className="mb-8 type-eyebrow text-sage/90">{t("understandMore")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-paper/20 px-5 py-2.5 text-sm text-paper/75 transition hover:border-paper/60 hover:text-paper"
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
