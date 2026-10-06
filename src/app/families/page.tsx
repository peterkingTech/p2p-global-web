import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import FeatureRow from "@/components/sections/FeatureRow";
import { familyRowKeys, familyRowMeta } from "@/content/copy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("FamiliesPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function FamiliesPage() {
  const t = await getTranslations("FamiliesPage");

  return (
    <>
      <PageHero eyebrow={t("heroEyebrow")} title={t("heroTitle")} subtitle={t("heroSubtitle")} mediaKey="family" />

      <Prose eyebrow={t("prose1Eyebrow")} heading={t("prose1Heading")}>
        <p>{t("prose1Body")}</p>
      </Prose>

      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto flex max-w-3xl flex-col gap-20 px-6">
          {familyRowKeys.map((key, i) => (
            <FeatureRow
              key={key}
              icon={familyRowMeta[key].icon}
              title={t(`rows.${key}.title`)}
              body={t(`rows.${key}.body`)}
              mediaKey={familyRowMeta[key].mediaKey}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </section>

      <Prose eyebrow={t("prose2Eyebrow")} heading={t("prose2Heading")}>
        <p>{t("prose2Body")}</p>
      </Prose>
    </>
  );
}
