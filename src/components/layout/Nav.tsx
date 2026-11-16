"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import TypewriterBrand from "@/components/layout/TypewriterBrand";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { navItems, exploreLinks } from "@/content/copy";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("Nav");
  const tFooter = useTranslations("Footer");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "border-b border-paper/10 bg-ink/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-5">
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-2 xl:flex-initial xl:shrink-0"
          onClick={() => setOpen(false)}
        >
          <Image src="/brand/logo.png" alt="P2P Global" width={140} height={93} priority className="h-8 w-auto shrink-0" />
          <TypewriterBrand className="block min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[9px] text-paper sm:text-[10px] xl:flex-initial xl:shrink-0 xl:text-xs" />
        </Link>

        {/* Right-hand group: nav links are desktop-only, the flag and the
            hamburger stay visible at every width via the shared gap. */}
        <div className="flex shrink-0 items-center gap-3 xl:ms-auto xl:gap-6">
          <nav aria-label={t("primary")} className="hidden items-center gap-6 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2 text-sm tracking-wide text-paper/75 transition-colors hover:text-paper"
              >
                {t(item.key)}
              </a>
            ))}
            <Link
              href="/join"
              className="rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-colors bg-emerald-bright text-white hover:bg-emerald"
            >
              {t("experienceP2p")}
            </Link>
          </nav>

          {/* Always visible on every screen size — never hidden behind the mobile menu. */}
          <LanguageSwitcher variant="dark" />

          <button
            type="button"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 xl:hidden"
          >
            <span
              className={`h-px w-6 bg-paper transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-6 bg-paper transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-paper/10 bg-ink xl:hidden"
          >
            <nav aria-label={t("primary")} className="flex flex-col gap-1 px-6 py-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 font-display text-2xl text-paper"
                >
                  {t(item.key)}
                </a>
              ))}

              <p className="mt-6 type-eyebrow text-sage">{t("explore")}</p>
              <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1">
                {exploreLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="py-2 text-sm text-paper/70 hover:text-paper"
                  >
                    {tFooter(item.key)}
                  </Link>
                ))}
              </div>

              <Link
                href="/join"
                onClick={() => setOpen(false)}
                className="mt-8 rounded-full bg-paper px-5 py-3 text-center text-sm font-medium tracking-wide text-ink"
              >
                {t("experienceP2p")}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
