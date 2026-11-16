import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { footerGroups } from "@/content/copy";

export default async function Footer() {
  const t = await getTranslations("Footer");
  const tBrand = await getTranslations("Brand");

  return (
    <footer className="border-t border-paper/10 bg-ink px-6 pt-20 pb-12 text-paper">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)]">
        <div className="max-w-sm">
          <Image src="/brand/logo.png" alt="P2P Global" width={140} height={93} className="h-10 w-auto" />
          <p className="mt-5 text-sm leading-relaxed text-paper/60">{tBrand("fullName")}</p>
          <p className="font-display mt-6 text-lg leading-snug text-paper">{tBrand("tagline")}</p>
          <div className="mt-6 space-y-0.5 text-xs tracking-wide text-sage">
            <p>{tBrand("centerLine1")}</p>
            <p>{tBrand("centerLine2")}</p>
            <p>{tBrand("centerLine3")}</p>
          </div>
        </div>

        <nav aria-label={t("navLabel")} className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
          {footerGroups.map((group) => (
            <div key={group.key}>
              <p className="type-eyebrow text-sage">{t(group.key)}</p>
              <ul className="mt-4 space-y-3">
                {group.links.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-paper/60 transition-colors hover:text-paper">
                      {t(item.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-4 border-t border-paper/10 pt-8 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
          <p className="mt-1">{t("poweredBy")}</p>
          <p className="mt-1">{t("freeNote")}</p>
        </div>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-paper/80">
            {t("privacy")}
          </Link>
          <Link href="/terms" className="hover:text-paper/80">
            {t("terms")}
          </Link>
          <Link href="/about" className="hover:text-paper/80">
            {t("contact")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
