"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { stageStops, useStageMotion } from "@/components/motion/useStageMotion";

export type Step = {
  icon: string;
  title: string;
  body: string;
};

type Props = {
  steps: readonly Step[];
};

function StepListItem({ step, index, total, scrollYProgress }: { step: Step; index: number; total: number; scrollYProgress: MotionValue<number> }) {
  const { stops } = stageStops(index, total);
  const dimValues =
    index === 0 ? [1, 1, 1, 0.35] : index === total - 1 ? [0.35, 1, 1, 1] : [0.35, 1, 1, 0.35];
  const scaleValues = dimValues.map((v) => (v === 1 ? 1 : 0.94));
  const opacity = useTransform(scrollYProgress, stops, dimValues);
  const scale = useTransform(scrollYProgress, stops, scaleValues);

  return (
    <motion.div style={{ opacity, scale }} className="flex origin-left items-center gap-4 py-3">
      <span className="text-2xl" aria-hidden="true">
        {step.icon}
      </span>
      <span className="font-display text-lg tracking-tight text-ink">{step.title}</span>
    </motion.div>
  );
}

function DetailLayer({ step, index, total, scrollYProgress }: { step: Step; index: number; total: number; scrollYProgress: MotionValue<number> }) {
  const { opacity, y } = useStageMotion(scrollYProgress, index, total);

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col justify-center">
      <span className="text-5xl" aria-hidden="true">
        {step.icon}
      </span>
      <h3 className="font-display mt-5 text-3xl tracking-tight text-ink sm:text-4xl">{step.title}</h3>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/70">{step.body}</p>
    </motion.div>
  );
}

/**
 * Pinned scroll sequence with a live step index on the left (all steps stay
 * visible, current one highlighted) and a detail panel on the right —
 * deliberately different from the centered-crossfade style used elsewhere,
 * and light-themed to visually set it apart too.
 */
export default function DiscipleStageSequence({ steps }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  if (prefersReducedMotion) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col gap-14 px-6">
        {steps.map((step, i) => (
          <Reveal key={i}>
            <span className="text-4xl" aria-hidden="true">
              {step.icon}
            </span>
            <h3 className="font-display mt-4 text-2xl tracking-tight text-ink sm:text-3xl">{step.title}</h3>
            <p className="mt-3 max-w-md text-lg leading-relaxed text-ink/70">{step.body}</p>
          </Reveal>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ height: `${steps.length * 100}vh` }} className="relative">
      <div className="sticky top-0 h-[100svh] min-h-[520px] overflow-hidden bg-paper">
        <div className="mx-auto grid h-full max-w-5xl grid-cols-1 items-center gap-4 px-6 md:grid-cols-[260px_1fr] md:gap-12">
          <div className="hidden border-r border-ink/10 pr-8 md:block">
            {steps.map((step, i) => (
              <StepListItem key={i} step={step} index={i} total={steps.length} scrollYProgress={scrollYProgress} />
            ))}
          </div>
          <div className="relative h-56 sm:h-64">
            {steps.map((step, i) => (
              <DetailLayer key={i} step={step} index={i} total={steps.length} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
