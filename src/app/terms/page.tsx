import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Prose from "@/components/sections/Prose";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("TermsPage");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function TermsPage() {
  const t = await getTranslations("TermsPage");
  return (
    <div className="pt-24">
      <Prose eyebrow={t("eyebrow")} heading={t("heading")}>
        <p>{t("body")}</p>
      </Prose>
    </div>
  );
}
