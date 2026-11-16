"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const t = useTranslations("ErrorPage");

  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-ink px-6 pt-24 pb-16 text-center text-paper">
      <div className="mx-auto max-w-xl">
        <p className="type-eyebrow text-sage">{t("eyebrow")}</p>
        <h1 className="type-title mt-6">{t("heading")}</h1>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-full bg-emerald-bright px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-emerald"
          >
            {t("retry")}
          </button>
          <Link href="/" className="rounded-full border border-paper/40 px-8 py-3.5 text-sm tracking-wide text-paper hover:border-paper">
            {t("home")}
          </Link>
        </div>
      </div>
    </section>
  );
}
