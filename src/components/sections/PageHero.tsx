import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  mediaKey: string;
};

export default function PageHero({ eyebrow, title, subtitle, mediaKey }: Props) {
  return (
    <section className="relative flex min-h-[64vh] items-center justify-center overflow-hidden px-6 pt-24 pb-16 text-center">
      <CinematicMedia mediaKey={mediaKey} kenBurns />
      <Reveal className="relative z-10 mx-auto max-w-2xl text-paper">
        <p className="text-xs tracking-[0.4em] text-gold-soft/90 uppercase">{eyebrow}</p>
        <h1 className="font-display mt-6 text-4xl leading-tight tracking-tight sm:text-6xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-6 max-w-xl text-left text-lg leading-relaxed text-paper/80">{subtitle}</p>}
      </Reveal>
    </section>
  );
}
