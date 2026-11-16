"use client";

import { useSyncExternalStore } from "react";
import { useReducedMotion } from "framer-motion";

const noopSubscribe = () => () => {};

/**
 * The visitor's reduced-motion preference, but only after hydration.
 *
 * framer-motion's useReducedMotion() reads matchMedia synchronously on the
 * client while the server has no preference, so branching render output on
 * it directly causes a hydration mismatch for reduced-motion visitors. This
 * returns `false` for the server render and the hydration pass, then the
 * real preference.
 */
export function useHydratedReducedMotion(): boolean {
  const prefers = useReducedMotion();
  const hydrated = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );
  return hydrated && !!prefers;
}
