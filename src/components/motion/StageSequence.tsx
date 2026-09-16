"use client";

import { useRef } from "react";
import { motion, useScroll, useReducedMotion, type MotionValue } from "framer-motion";
import { useStageMotion } from "@/components/motion/useStageMotion";
import Reveal from "@/components/motion/Reveal";

export type Stage = {
  icon: string;
  title: string;
  body: string;
};

type Props = {
  stages: readonly Stage[];
};

function StageCard({ stage }: { stage: Stage }) {
  return (
    <div className="w-full max-w-md rounded-lg border border-paper/10 bg-charcoal p-8 text-center shadow-2xl shadow-black/40">
      <span className="text-5xl" aria-hidden="true">
        {stage.icon}
      </span>
      <h3 className="font-display mt-5 text-3xl tracking-tight text-paper">{stage.title}</h3>
      <p className="mt-4 text-base leading-relaxed text-paper/75">{stage.body}</p>
    </div>
  );
}

function StageLayer({
  stage,
  index,
  total,
  scrollYProgress,
}: {
  stage: Stage;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const { opacity, y } = useStageMotion(scrollYProgress, index, total);

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex items-center justify-center px-6">
      <StageCard stage={stage} />
    </motion.div>
  );
}

/** Sticky pinned scroll sequence — each stage is a self-contained card that rises in, holds, then cuts out sharply. */
export default function StageSequence({ stages }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  if (prefersReducedMotion) {
    return (
      <div className="mx-auto flex max-w-md flex-col gap-8 px-6">
        {stages.map((stage, i) => (
          <Reveal key={i}>
            <StageCard stage={stage} />
          </Reveal>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ height: `${stages.length * 100}vh` }} className="relative">
      <div className="sticky top-0 h-[100svh] min-h-[480px] overflow-hidden">
        {stages.map((stage, i) => (
          <StageLayer key={i} stage={stage} index={i} total={stages.length} scrollYProgress={scrollYProgress} />
        ))}
      </div>
    </div>
  );
}
