import { useTransform, type MotionValue } from "framer-motion";

// Short, decisive transitions: most of each stage's scroll window is spent
// fully readable, not mid-fade. Outgoing content also sinks away instead of
// just dimming in place, so it reads as "leaving" rather than lingering.
const TRANSITION_FRACTION = 0.15;
const RISE_PX = 24;

export function stageStops(index: number, total: number, frac = TRANSITION_FRACTION) {
  const step = 1 / total;
  const start = index * step;
  const end = start + step;
  const inEnd = start + step * frac;
  const outStart = end - step * frac;
  const isFirst = index === 0;
  const isLast = index === total - 1;
  const stops = isLast ? [start, inEnd, 1, 1] : [start, inEnd, outStart, end];
  return { stops, isFirst, isLast, start, end, inEnd, outStart };
}

/** Opacity + vertical motion for a pinned-sequence stage: rises in, holds, sinks out. */
export function useStageMotion(scrollYProgress: MotionValue<number>, index: number, total: number) {
  const { stops, isFirst, isLast } = stageStops(index, total);
  const opacityValues = isFirst ? [1, 1, 1, 0] : isLast ? [0, 1, 1, 1] : [0, 1, 1, 0];
  const yValues = isFirst ? [0, 0, 0, -RISE_PX] : isLast ? [RISE_PX, 0, 0, 0] : [RISE_PX, 0, 0, -RISE_PX];

  const opacity = useTransform(scrollYProgress, stops, opacityValues);
  const y = useTransform(scrollYProgress, stops, yValues);

  return { opacity, y };
}
