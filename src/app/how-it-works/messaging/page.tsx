import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import { messagingFeatureKeys, messagingFeatureIcons, inboxTabKeys, callDetailKeys } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("MessagingPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function MessagingPage() {
  const t = await getTranslations("MessagingPage");
  const tFeatures = await getTranslations("MessagingFeatures");
  const tTabs = await getTranslations("InboxTabs");
  const tCalls = await getTranslations("CallDetails");

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      {/* Inbox tabs */}
      <section className="bg-paper py-24 text-ink">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-water uppercase">{t("inboxEyebrow")}</p>
            <h2 className="font-display text-3xl tracking-tight">{t("inboxHeading")}</h2>
            <p className="mt-4 leading-relaxed text-ink/70">{t("inboxBody")}</p>
          </Reveal>
          <div className="flex flex-col gap-6">
            {inboxTabKeys.map((key) => (
              <Reveal key={key} className="flex gap-6 border-b border-ink/10 pb-6 last:border-0">
                <div className="w-32 shrink-0 font-medium text-water">{tTabs(`${key}.tab`)}</div>
                <p className="leading-relaxed text-ink/70">{tTabs(`${key}.description`)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* All features grid */}
      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-gold-soft/90 uppercase">{t("featuresEyebrow")}</p>
            <h2 className="font-display text-3xl tracking-tight">{t("featuresHeading")}</h2>
          </Reveal>
          <div className="flex flex-col gap-8">
            {messagingFeatureKeys.map((key) => (
              <Reveal key={key} className="flex gap-5 border-b border-paper/10 pb-8 last:border-0">
                <span className="shrink-0 text-2xl" aria-hidden="true">
                  {messagingFeatureIcons[key]}
                </span>
                <div>
                  <h3 className="text-lg font-medium">{tFeatures(`${key}.title`)}</h3>
                  <p className="mt-1 leading-relaxed text-paper/70">{tFeatures(`${key}.body`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Crisis response / official account messages */}
      <Prose eyebrow={t("officialEyebrow")} heading={t("officialHeading")}>
        <p>{t("officialBody1")}</p>
        <p>{t("officialBody2")}</p>
      </Prose>

      {/* Calls detail */}
      <section className="bg-paper px-6 py-24 text-ink">
        <div className="mx-auto max-w-2xl">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-water uppercase">{t("callsEyebrow")}</p>
            <h2 className="font-display text-3xl tracking-tight">{t("callsHeading")}</h2>
            <p className="mt-4 leading-relaxed text-ink/70">{t("callsBody")}</p>
          </Reveal>

          <div className="flex flex-col gap-10">
            {callDetailKeys.map((key) => (
              <Reveal key={key} className="border-b border-ink/10 pb-10 last:border-0">
                <h3 className="mb-3 text-xl font-medium">{tCalls(`${key}.title`)}</h3>
                <p className="leading-relaxed text-ink/70">{tCalls(`${key}.body`)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
