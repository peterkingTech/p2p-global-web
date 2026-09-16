"use client";

import { useRef } from "react";
import { motion, useScroll, useReducedMotion, type MotionValue } from "framer-motion";
import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";
import { useStageMotion } from "@/components/motion/useStageMotion";

export type MediaStage = {
  mediaKey: string;
  icon: string;
  title: string;
  body: string;
};

type Props = {
  stages: readonly MediaStage[];
};

function Layer({
  stage,
  index,
  total,
  scrollYProgress,
}: {
  stage: MediaStage;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const { opacity, y } = useStageMotion(scrollYProgress, index, total);

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex items-center justify-center px-6">
      <div className="flex w-full max-w-4xl flex-col items-center gap-8 sm:flex-row">
        <div className="relative h-56 w-full shrink-0 overflow-hidden rounded-lg sm:h-72 sm:w-80">
          <CinematicMedia mediaKey={stage.mediaKey} />
        </div>
        <div className="text-center text-paper sm:text-left">
          <span className="text-3xl" aria-hidden="true">
            {stage.icon}
          </span>
          <h3 className="font-display mt-3 text-2xl tracking-tight sm:text-3xl">{stage.title}</h3>
          <p className="mt-3 max-w-md text-base leading-relaxed text-paper/75">{stage.body}</p>
        </div>
      </div>
    </motion.div>
  );
}

/** Sticky pinned sequence where each stage rises in, holds, sinks out — image beside (never under) the text. */
export default function MediaStageSequence({ stages }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  if (prefersReducedMotion) {
    return (
      <div className="mx-auto flex max-w-3xl flex-col gap-16 px-6">
        {stages.map((stage, i) => (
          <Reveal key={i}>
            <div className="flex flex-col items-center gap-8 sm:flex-row">
              <div className="relative h-56 w-full shrink-0 overflow-hidden rounded-lg sm:h-72 sm:w-80">
                <CinematicMedia mediaKey={stage.mediaKey} />
              </div>
              <div className="text-center text-paper sm:text-left">
                <span className="text-3xl" aria-hidden="true">
                  {stage.icon}
                </span>
                <h3 className="font-display mt-3 text-2xl tracking-tight sm:text-3xl">{stage.title}</h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-paper/75">{stage.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ height: `${stages.length * 100}vh` }} className="relative">
      <div className="sticky top-0 h-[100svh] min-h-[520px] overflow-hidden">
        {stages.map((stage, i) => (
          <Layer key={i} stage={stage} index={i} total={stages.length} scrollYProgress={scrollYProgress} />
        ))}
      </div>
    </div>
  );
}
