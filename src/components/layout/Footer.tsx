import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { footerLinks } from "@/content/copy";

export default async function Footer() {
  const t = await getTranslations("Footer");
  const tBrand = await getTranslations("Brand");

  return (
    <footer className="border-t border-paper/10 bg-ink px-6 py-16 text-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <Image src="/brand/logo.png" alt="" width={140} height={93} className="h-10 w-auto" />
          <p className="mt-4 text-sm leading-relaxed text-paper/60">{tBrand("fullName")}</p>
          <p className="mt-6 text-sm text-gold-soft/90">{tBrand("tagline")}</p>
        </div>

        <nav className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-paper/60 hover:text-paper">
              {t(item.key)}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-4 border-t border-paper/10 pt-8 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
          <p className="mt-1">{t("poweredBy")}</p>
        </div>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-paper/70">
            {t("privacy")}
          </Link>
          <Link href="/terms" className="hover:text-paper/70">
            {t("terms")}
          </Link>
          <Link href="/about" className="hover:text-paper/70">
            {t("contact")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
