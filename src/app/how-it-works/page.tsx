import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import { howItWorksTopics } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("HowItWorksPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function HowItWorksPage() {
  const t = await getTranslations("HowItWorksPage");
  const tTopics = await getTranslations("HowItWorksTopics");

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <Prose eyebrow={t("proseEyebrow")} heading={t("proseHeading")}>
        <p>{t("proseBody")}</p>
      </Prose>

      <section className="bg-paper px-6 py-24 text-ink">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {howItWorksTopics.map((s) => (
            <Reveal key={s.href}>
              <Link
                href={s.href}
                className="flex h-full gap-4 rounded-xl border border-ink/10 p-6 transition hover:border-ink/30 hover:shadow-sm"
              >
                <span className="shrink-0 text-2xl" aria-hidden="true">
                  {s.icon}
                </span>
                <div>
                  <h3 className="text-lg font-medium">{tTopics(`${s.key}.title`)}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60">{tTopics(`${s.key}.description`)}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
