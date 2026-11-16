"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useHydratedReducedMotion } from "@/components/motion/useHydratedReducedMotion";
import { useTranslations } from "next-intl";
import { getMedia } from "@/content/media";

/**
 * Full-bleed opening hero: people learning from one another, with the core
 * statement anchored to the lower start corner where the photo is calm.
 * The image is the LCP element, so it is loaded with priority.
 */
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useHydratedReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const t = useTranslations("Hero");
  const tBrand = useTranslations("Brand");
  const photo = getMedia("heroHome");

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -60]);

  return (
    <div ref={ref} className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      {photo.photo && (
        <Image
          src={photo.photo}
          alt={t("imageAlt")}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: photo.position ?? "50% 45%" }}
        />
      )}
      {/* Readability: darken only the lower and start edges, leave the faces clear. */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent rtl:bg-gradient-to-l" aria-hidden="true" />

      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-[max(4rem,env(safe-area-inset-bottom))] text-paper sm:pb-24"
      >
        <h1 className="type-eyebrow text-sage">
          {tBrand("globalName")} <span aria-hidden="true">&middot;</span> {t("eyebrowSuffix")}
        </h1>
        <p className="type-hero mt-6 max-w-5xl">
          <span className="block text-balance">{t("titleLine1")}</span>
          <span className="block text-balance text-paper/75">{t("titleLine2")}</span>
        </p>
        <p className="type-lead mt-8 max-w-xl text-paper/85">
          {t("tagline1")} {t("tagline2")}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#vision"
            className="rounded-full bg-emerald-bright px-8 py-3.5 text-center text-sm font-medium tracking-wide text-white transition-colors hover:bg-emerald"
          >
            {t("ctaVision")}
          </a>
          <Link
            href="/join"
            className="rounded-full border border-paper/45 px-8 py-3.5 text-center text-sm tracking-wide text-paper transition-colors hover:border-paper hover:bg-paper/10"
          >
            {t("ctaExperience")}
          </Link>
        </div>

        <p className="mt-8 max-w-md text-sm leading-relaxed text-paper/60">{t("understandVsExperience")}</p>
      </motion.div>
    </div>
  );
}
