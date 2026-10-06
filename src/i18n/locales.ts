// The 36 supported locales. `label` is always the language's own native name,
// shown in the language switcher regardless of the currently selected UI
// language — a Russian speaker should always see "Русский", never "Russian".
export type LocaleDef = {
  code: string;
  englishName: string;
  label: string;
  dir: "ltr" | "rtl";
  /** Representative national flag emoji — a visual shorthand, not a claim that
   * the language belongs to only that country. */
  flag: string;
};

export const locales: LocaleDef[] = [
  { code: "en", englishName: "English", label: "English", dir: "ltr", flag: "🇬🇧" },
  { code: "de", englishName: "German", label: "Deutsch", dir: "ltr", flag: "🇩🇪" },
  { code: "es", englishName: "Spanish", label: "Español", dir: "ltr", flag: "🇪🇸" },
  { code: "fr", englishName: "French", label: "Français", dir: "ltr", flag: "🇫🇷" },
  { code: "pt", englishName: "Portuguese", label: "Português", dir: "ltr", flag: "🇵🇹" },
  { code: "it", englishName: "Italian", label: "Italiano", dir: "ltr", flag: "🇮🇹" },
  { code: "nl", englishName: "Dutch", label: "Nederlands", dir: "ltr", flag: "🇳🇱" },
  { code: "pl", englishName: "Polish", label: "Polski", dir: "ltr", flag: "🇵🇱" },
  { code: "ro", englishName: "Romanian", label: "Română", dir: "ltr", flag: "🇷🇴" },
  { code: "el", englishName: "Greek", label: "Ελληνικά", dir: "ltr", flag: "🇬🇷" },
  { code: "ru", englishName: "Russian", label: "Русский", dir: "ltr", flag: "🇷🇺" },
  { code: "uk", englishName: "Ukrainian", label: "Українська", dir: "ltr", flag: "🇺🇦" },
  { code: "tr", englishName: "Turkish", label: "Türkçe", dir: "ltr", flag: "🇹🇷" },
  { code: "ar", englishName: "Arabic", label: "العربية", dir: "rtl", flag: "🇸🇦" },
  { code: "he", englishName: "Hebrew", label: "עברית", dir: "rtl", flag: "🇮🇱" },
  { code: "fa", englishName: "Persian", label: "فارسی", dir: "rtl", flag: "🇮🇷" },
  { code: "hi", englishName: "Hindi", label: "हिन्दी", dir: "ltr", flag: "🇮🇳" },
  { code: "bn", englishName: "Bengali", label: "বাংলা", dir: "ltr", flag: "🇧🇩" },
  { code: "ur", englishName: "Urdu", label: "اردو", dir: "rtl", flag: "🇵🇰" },
  { code: "ta", englishName: "Tamil", label: "தமிழ்", dir: "ltr", flag: "🇱🇰" },
  { code: "te", englishName: "Telugu", label: "తెలుగు", dir: "ltr", flag: "🇮🇳" },
  { code: "zh", englishName: "Chinese (Simplified)", label: "中文(简体)", dir: "ltr", flag: "🇨🇳" },
  { code: "zh-TW", englishName: "Chinese (Traditional)", label: "中文(繁體)", dir: "ltr", flag: "🇹🇼" },
  { code: "ja", englishName: "Japanese", label: "日本語", dir: "ltr", flag: "🇯🇵" },
  { code: "ko", englishName: "Korean", label: "한국어", dir: "ltr", flag: "🇰🇷" },
  { code: "th", englishName: "Thai", label: "ภาษาไทย", dir: "ltr", flag: "🇹🇭" },
  { code: "vi", englishName: "Vietnamese", label: "Tiếng Việt", dir: "ltr", flag: "🇻🇳" },
  { code: "id", englishName: "Indonesian", label: "Bahasa Indonesia", dir: "ltr", flag: "🇮🇩" },
  { code: "ms", englishName: "Malay", label: "Bahasa Melayu", dir: "ltr", flag: "🇲🇾" },
  { code: "sw", englishName: "Swahili", label: "Kiswahili", dir: "ltr", flag: "🇹🇿" },
  { code: "ha", englishName: "Hausa", label: "Hausa", dir: "ltr", flag: "🇳🇬" },
  { code: "yo", englishName: "Yoruba", label: "Yorùbá", dir: "ltr", flag: "🇳🇬" },
  { code: "ig", englishName: "Igbo", label: "Igbo", dir: "ltr", flag: "🇳🇬" },
  { code: "tl", englishName: "Filipino", label: "Filipino", dir: "ltr", flag: "🇵🇭" },
  { code: "zu", englishName: "Zulu", label: "isiZulu", dir: "ltr", flag: "🇿🇦" },
  { code: "tw", englishName: "Twi", label: "Twi", dir: "ltr", flag: "🇬🇭" },
];

export const localeCodes = locales.map((l) => l.code);
export type Locale = (typeof locales)[number]["code"];

export const defaultLocale = "en";

export const rtlLocales = new Set(locales.filter((l) => l.dir === "rtl").map((l) => l.code));

export function isValidLocale(value: string | undefined | null): value is Locale {
  return !!value && localeCodes.includes(value);
}

export function getLocaleDir(locale: string): "ltr" | "rtl" {
  return rtlLocales.has(locale) ? "rtl" : "ltr";
}

export function getLocaleDef(locale: string): LocaleDef {
  return locales.find((l) => l.code === locale) ?? locales[0];
}

export const LOCALE_COOKIE = "NEXT_LOCALE";
