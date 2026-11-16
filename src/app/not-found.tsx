import Link from "next/link";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("NotFound");
  return { title: t("metaTitle"), robots: { index: false } };
}

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-ink px-6 pt-24 pb-16 text-center text-paper">
      <div className="mx-auto max-w-xl">
        <p className="type-eyebrow text-sage">{t("eyebrow")}</p>
        <h1 className="type-title mt-6">{t("heading")}</h1>
        <p className="mt-6 text-lg leading-relaxed text-paper/70">{t("body")}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/" className="rounded-full px-8 py-3.5 text-sm font-medium tracking-wide bg-emerald-bright text-white hover:bg-emerald transition-colors">
            {t("home")}
          </Link>
          <Link
            href="/how-it-works"
            className="rounded-full border border-paper/40 px-8 py-3.5 text-sm tracking-wide text-paper hover:border-paper"
          >
            {t("howItWorks")}
          </Link>
        </div>
      </div>
    </section>
  );
}
