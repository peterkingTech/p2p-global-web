"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import Reveal from "@/components/motion/Reveal";

export type Stage = {
  icon: string;
  title: string;
  body: string;
};

type Props = {
  stages: readonly Stage[];
};

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
  const step = 1 / total;
  const start = index * step;
  const end = start + step;
  const inEnd = start + step * 0.35;
  const outStart = end - step * 0.35;

  const stops =
    index === 0
      ? [start, inEnd, outStart, end]
      : index === total - 1
        ? [start, inEnd, 1, 1]
        : [start, inEnd, outStart, end];
  const values = index === 0 ? [1, 1, 1, 0] : index === total - 1 ? [0, 1, 1, 1] : [0, 1, 1, 0];

  const opacity = useTransform(scrollYProgress, stops, values);
  const y = useTransform(scrollYProgress, [start, inEnd], [24, 0]);

  return (
    <motion.div style={{ opacity }} className="absolute inset-0 flex items-center justify-center px-6">
      <motion.div style={{ y }} className="max-w-2xl text-center text-paper">
        <span className="text-6xl" aria-hidden="true">
          {stage.icon}
        </span>
        <h3 className="font-display mt-6 text-3xl tracking-tight md:text-5xl">{stage.title}</h3>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-paper/80">{stage.body}</p>
      </motion.div>
    </motion.div>
  );
}

/** Sticky pinned scroll sequence — each stage crossfades in, text only, no media. */
export default function StageSequence({ stages }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  if (prefersReducedMotion) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col gap-16 px-6">
        {stages.map((stage, i) => (
          <Reveal key={i} className="text-center text-paper">
            <span className="text-6xl" aria-hidden="true">
              {stage.icon}
            </span>
            <h3 className="font-display mt-6 text-3xl tracking-tight md:text-5xl">{stage.title}</h3>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-paper/80">{stage.body}</p>
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
