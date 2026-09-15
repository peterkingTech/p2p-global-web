import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";

type Props = {
  eyebrow: string;
  reference: string;
  text: string;
  mediaKey: string;
  footer?: string;
  reverse?: boolean;
};

/** Image beside text — never text over the image. */
export default function ScriptureFull({ eyebrow, reference, text, mediaKey, footer, reverse = false }: Props) {
  return (
    <section className="bg-ink py-24">
      <div className={`mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 md:gap-16 ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <Reveal className="relative h-64 w-full shrink-0 overflow-hidden rounded-lg md:h-[420px] md:w-1/2">
          <CinematicMedia mediaKey={mediaKey} kenBurns />
        </Reveal>

        <Reveal delay={0.1} className="text-center md:w-1/2 md:text-left">
          <p className="text-xs tracking-[0.4em] text-gold-soft/90 uppercase">{eyebrow}</p>
          <blockquote className="font-display mt-6 text-2xl leading-snug tracking-tight text-paper sm:text-4xl">
            &ldquo;{text}&rdquo;
          </blockquote>
          <p className="mt-6 text-sm tracking-[0.2em] text-paper/60 uppercase">{reference}</p>
          {footer && <p className="mt-8 max-w-xl text-base leading-relaxed text-paper/75">{footer}</p>}
        </Reveal>
      </div>
    </section>
  );
}
