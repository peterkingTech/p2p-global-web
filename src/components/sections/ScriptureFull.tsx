import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";

type Props = {
  eyebrow: string;
  reference: string;
  text: string;
  mediaKey: string;
  footer?: string;
  reverse?: boolean;
  tone?: "ink" | "forest";
};

/** A Scripture moment: image beside the verse — never text over the image. */
export default function ScriptureFull({ eyebrow, reference, text, mediaKey, footer, reverse = false, tone = "ink" }: Props) {
  return (
    <section className={`${tone === "forest" ? "bg-forest" : "bg-ink"} py-24 sm:py-32`}>
      <div className={`mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 md:gap-20 ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <Reveal className="relative aspect-square w-full shrink-0 overflow-hidden rounded-2xl md:w-[46%]">
          <CinematicMedia mediaKey={mediaKey} kenBurns grain={false} />
        </Reveal>

        <Reveal delay={0.1} className="md:flex-1">
          <p className="type-eyebrow text-sage">{eyebrow}</p>
          <blockquote className="type-scripture mt-6 text-3xl text-paper sm:text-4xl lg:text-[2.75rem]">&ldquo;{text}&rdquo;</blockquote>
          <p className="type-eyebrow mt-6 text-gold">{reference}</p>
          {footer && <p className="type-lead mt-10 max-w-xl border-t border-paper/15 pt-8 text-paper/80">{footer}</p>}
        </Reveal>
      </div>
    </section>
  );
}
