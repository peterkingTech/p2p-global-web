import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";

type Props = {
  eyebrow: string;
  reference: string;
  text: string;
  mediaKey: string;
  footer?: string;
};

/** Full-screen Scripture panel used for Vision (Habakkuk 2:14) and Mission (2 Timothy 2:2). */
export default function ScriptureFull({ eyebrow, reference, text, mediaKey, footer }: Props) {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-32">
      <CinematicMedia mediaKey={mediaKey} kenBurns />
      <Reveal className="relative z-10 mx-auto max-w-3xl text-center text-paper">
        <p className="text-xs tracking-[0.4em] text-gold-soft/90 uppercase">{eyebrow}</p>
        <blockquote className="font-display mt-8 text-2xl leading-snug tracking-tight sm:text-4xl md:text-5xl">
          &ldquo;{text}&rdquo;
        </blockquote>
        <p className="mt-8 text-sm tracking-[0.2em] text-paper/60 uppercase">{reference}</p>
        {footer && <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-paper/75">{footer}</p>}
      </Reveal>
    </section>
  );
}
