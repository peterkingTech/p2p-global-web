"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { locales, getLocaleDef, LOCALE_COOKIE } from "@/i18n/locales";

type Props = {
  variant?: "light" | "dark";
  className?: string;
};

/**
 * Compact, always-visible flag indicator with a native <select> for the
 * actual switching — the current flag is the only thing shown in the
 * closed control (on every screen size, not hidden inside a menu), while
 * opening it lists every language as "flag + native name".
 */
export default function LanguageSwitcher({ variant = "light", className = "" }: Props) {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("LanguageSwitcher");
  const current = getLocaleDef(locale);

  function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const next = event.target.value;
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; SameSite=Lax`;
    startTransition(() => {
      router.refresh();
    });
  }

  const isDark = variant === "dark";

  return (
    <span
      className={`relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-base transition-colors ${
        isDark ? "border-paper/30 hover:border-paper/50" : "border-ink/20 hover:border-ink/40"
      } ${isPending ? "opacity-60" : ""} ${className}`}
      title={current.label}
    >
      <span aria-hidden="true">{current.flag}</span>
      <select
        value={locale}
        onChange={onChange}
        disabled={isPending}
        aria-label={t("label")}
        className="absolute inset-0 h-full w-full cursor-pointer appearance-none opacity-0"
      >
        {locales.map((l) => (
          <option key={l.code} value={l.code}>
            {l.flag} {l.label}
          </option>
        ))}
      </select>
    </span>
  );
}
