import Reveal from "@/components/motion/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** No longer used — kept optional so existing call sites don't need updating. */
  mediaKey?: string;
};

/** Plain, no image or video background — per direction to keep these pages simple. */
export default function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="flex min-h-[50vh] items-center justify-center bg-ink px-6 pt-24 pb-16 text-center">
      <Reveal className="mx-auto max-w-2xl text-paper">
        <p className="text-xs tracking-[0.4em] text-gold-soft/90 uppercase">{eyebrow}</p>
        <h1 className="font-display mt-6 text-4xl leading-tight tracking-tight sm:text-6xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-6 max-w-xl text-left text-lg leading-relaxed text-paper/80">{subtitle}</p>}
      </Reveal>
    </section>
  );
}
