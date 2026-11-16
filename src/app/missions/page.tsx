import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";

const journeyKeys = ["field", "story", "scripture", "prayer", "learning", "response"] as const;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("MissionsPage");
  return pageMetadata({ title: t("metaTitle"), description: t("metaDescription"), path: "/missions" });
}

export default async function MissionsPage() {
  const t = await getTranslations("MissionsPage");

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <Prose eyebrow={t("prose1Eyebrow")} heading={t("prose1Heading")}>
        <p>{t("prose1Body")}</p>
      </Prose>

      <section className="bg-ink px-6 py-24 text-paper">
        <ol className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 px-0 sm:grid-cols-2 lg:grid-cols-3">
          {journeyKeys.map((key, i) => (
            <li key={key} className="bg-ink">
              <Reveal delay={i * 0.05} className="h-full p-8">
                <span className="font-display text-sm text-gold">{`0${i + 1}`}</span>
                <h3 className="type-card mt-2">{t(`journey.${key}.title`)}</h3>
                <p className="mt-3 leading-relaxed text-paper/70">{t(`journey.${key}.body`)}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <Prose eyebrow={t("prose2Eyebrow")} heading={t("prose2Heading")}>
        <p>{t("prose2Body")}</p>
      </Prose>

      <div className="bg-paper px-6 py-20 text-center">
        <p className="mx-auto max-w-md text-left text-lg text-ink/70">{t("closingBody")}</p>
        <Link
          href="/join"
          className="mt-8 inline-block rounded-full px-8 py-3.5 text-sm tracking-wide bg-emerald-bright text-white hover:bg-emerald transition-colors"
        >
          {t("closingCta")}
        </Link>
      </div>
    </>
  );
}
