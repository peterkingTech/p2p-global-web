"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import TypewriterBrand from "@/components/layout/TypewriterBrand";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { navItems } from "@/content/copy";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("Nav");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "bg-ink/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-5">
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-2 xl:flex-initial xl:shrink-0"
          onClick={() => setOpen(false)}
        >
          <Image src="/brand/logo.png" alt="" width={140} height={93} priority className="h-8 w-auto shrink-0" />
          <TypewriterBrand className="block min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[9px] text-paper sm:text-[10px] xl:flex-initial xl:shrink-0 xl:text-xs" />
        </Link>

        {/* Right-hand group: nav links are desktop-only, the flag and the
            hamburger stay visible at every width via the shared gap. */}
        <div className="flex shrink-0 items-center gap-3 xl:ml-auto xl:gap-5">
          <nav className="hidden items-center gap-5 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2 text-sm tracking-wide text-paper/80 transition-colors hover:text-gold-soft"
              >
                {t(item.key)}
              </a>
            ))}
            <Link
              href="/join"
              className="rounded-full border border-gold-soft/60 px-5 py-2 text-sm tracking-wide text-gold-soft transition-colors hover:bg-gold-soft hover:text-ink"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-paper/10 bg-ink xl:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-lg text-paper/85"
                >
                  {t(item.key)}
                </a>
              ))}
              <Link
                href="/join"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-full border border-gold-soft/60 px-5 py-3 text-center text-sm tracking-wide text-gold-soft"
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
