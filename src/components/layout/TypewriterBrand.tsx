"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

const TYPE_MS = 45;
const DELETE_MS = 25;
const HOLD_MS = 1800;
const RESTART_MS = 500;

/** Continuously typing/deleting cinematic brand line. Static text when reduced motion is preferred. */
export default function TypewriterBrand({ className = "" }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState("");
  const t = useTranslations("Brand");
  const fullText = t("fullName");

  useEffect(() => {
    if (prefersReducedMotion) return;
    let i = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      setDisplay(fullText.slice(0, i));
      if (!deleting) {
        if (i < fullText.length) {
          i++;
          timeout = setTimeout(tick, TYPE_MS);
        } else {
          timeout = setTimeout(() => {
            deleting = true;
            tick();
          }, HOLD_MS);
        }
      } else {
        if (i > 0) {
          i--;
          timeout = setTimeout(tick, DELETE_MS);
        } else {
          deleting = false;
          timeout = setTimeout(tick, RESTART_MS);
        }
      }
    };

    timeout = setTimeout(tick, 400);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion, fullText]);

  return (
    <span className={`font-display tracking-[0.08em] whitespace-nowrap ${className}`}>
      {prefersReducedMotion ? fullText : display}
      {!prefersReducedMotion && (
        <span className="ml-0.5 inline-block h-[0.9em] w-[2px] align-middle bg-gold-soft motion-safe:animate-pulse" />
      )}
    </span>
  );
}
