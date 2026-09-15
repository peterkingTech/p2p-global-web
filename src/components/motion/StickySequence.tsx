"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";

export type SequenceStage = {
  mediaKey: string;
  icon: string;
  title: string;
  body: string;
};

type Props = {
  stages: readonly SequenceStage[];
  eyebrow: string;
};

function StageLayer({
  stage,
  index,
  total,
  scrollYProgress,
}: {
  stage: SequenceStage;
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
  const y = useTransform(scrollYProgress, [start, inEnd], [28, 0]);

  return (
    <motion.div className="absolute inset-0" style={{ opacity }}>
      <CinematicMedia mediaKey={stage.mediaKey} />
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.div style={{ y }} className="max-w-2xl text-center text-paper">
          <span className="text-6xl" aria-hidden="true">
            {stage.icon}
          </span>
          <h3 className="font-display mt-6 text-3xl tracking-tight md:text-5xl">{stage.title}</h3>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-paper/80">{stage.body}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function StickySequence({ stages, eyebrow }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  if (prefersReducedMotion) {
    return (
      <div className="flex flex-col">
        {stages.map((stage, i) => (
          <div key={i} className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 py-24">
            <CinematicMedia mediaKey={stage.mediaKey} />
            <Reveal className="relative z-10 max-w-2xl text-center text-paper">
              <span className="text-6xl" aria-hidden="true">{stage.icon}</span>
              <h3 className="font-display mt-6 text-3xl tracking-tight md:text-5xl">{stage.title}</h3>
              <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-paper/80">{stage.body}</p>
            </Reveal>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ height: `${stages.length * 100}vh` }} className="relative">
      <p className="pointer-events-none absolute top-8 left-1/2 z-20 -translate-x-1/2 text-xs tracking-[0.35em] text-paper/60 uppercase">
        {eyebrow}
      </p>
      <div className="sticky top-0 h-screen overflow-hidden">
        {stages.map((stage, i) => (
          <StageLayer key={i} stage={stage} index={i} total={stages.length} scrollYProgress={scrollYProgress} />
        ))}
      </div>
    </div>
  );
}
