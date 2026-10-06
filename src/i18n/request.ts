import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { defaultLocale, isValidLocale, LOCALE_COOKIE } from "./locales";

/** Deep-merges `messages` onto a copy of `fallback`, so any key missing from
 * a non-English dictionary (a language mid-translation) silently falls back
 * to the English string instead of showing a raw key or throwing. */
function withFallback(messages: Record<string, unknown>, fallback: Record<string, unknown>): Record<string, unknown> {
  const merged: Record<string, unknown> = { ...fallback };
  for (const key of Object.keys(messages)) {
    const value = messages[key];
    const fallbackValue = fallback[key];
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      fallbackValue &&
      typeof fallbackValue === "object" &&
      !Array.isArray(fallbackValue)
    ) {
      merged[key] = withFallback(value as Record<string, unknown>, fallbackValue as Record<string, unknown>);
    } else {
      merged[key] = value;
    }
  }
  return merged;
}

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(LOCALE_COOKIE)?.value;
  const locale = isValidLocale(cookieLocale) ? cookieLocale : defaultLocale;

  const english = (await import(`../messages/en.json`)).default;
  let messages: Record<string, unknown> = english;
  if (locale !== "en") {
    try {
      const localeMessages = (await import(`../messages/${locale}.json`)).default;
      messages = withFallback(localeMessages, english);
    } catch {
      // Locale file doesn't exist yet (translation in progress) — fall back
      // to English entirely rather than crashing the page.
      messages = english;
    }
  }

  return {
    locale,
    messages,
    // Surface missing-key problems during development instead of silently
    // rendering nothing; withFallback() above means this should only ever
    // fire for a genuinely absent English key (a real bug), not a
    // not-yet-translated language.
    onError(error) {
      if (process.env.NODE_ENV !== "production") {
        console.error(error);
      }
    },
    getMessageFallback({ key }) {
      return key;
    },
  };
});
