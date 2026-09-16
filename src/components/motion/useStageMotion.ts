import { useTransform, type MotionValue } from "framer-motion";

// Incoming content gets a smooth, readable rise. Outgoing content gets cut
// almost instantly instead of gradually dissolving, so the previous stage
// never lingers translucent in the background while the next one appears.
const ENTER_FRACTION = 0.15;
const EXIT_FRACTION = 0.02;
const RISE_PX = 24;

export function stageStops(index: number, total: number, enterFrac = ENTER_FRACTION, exitFrac = EXIT_FRACTION) {
  const step = 1 / total;
  const start = index * step;
  const end = start + step;
  const inEnd = start + step * enterFrac;
  const outStart = end - step * exitFrac;
  const isFirst = index === 0;
  const isLast = index === total - 1;
  const stops = isLast ? [start, inEnd, 1, 1] : [start, inEnd, outStart, end];
  return { stops, isFirst, isLast, start, end, inEnd, outStart };
}

/** Opacity + vertical motion for a pinned-sequence stage: rises in smoothly, holds, then cuts out sharply. */
export function useStageMotion(scrollYProgress: MotionValue<number>, index: number, total: number) {
  const { stops, isFirst, isLast } = stageStops(index, total);
  const opacityValues = isFirst ? [1, 1, 1, 0] : isLast ? [0, 1, 1, 1] : [0, 1, 1, 0];
  const yValues = isFirst ? [0, 0, 0, -RISE_PX] : isLast ? [RISE_PX, 0, 0, 0] : [RISE_PX, 0, 0, -RISE_PX];

  const opacity = useTransform(scrollYProgress, stops, opacityValues);
  const y = useTransform(scrollYProgress, stops, yValues);

  return { opacity, y };
}
