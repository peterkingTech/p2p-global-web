import Reveal from "@/components/motion/Reveal";
import { brand } from "@/content/copy";

/** Pure typography interstitial — the site's central theological claim, stated plainly. */
export default function JesusCenter() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-paper px-6 py-32 text-center">
      <Reveal>
        <p className="text-xs tracking-[0.4em] text-water uppercase">{brand.centerLine1}</p>
        <p className="text-xs tracking-[0.4em] text-water uppercase">{brand.centerLine2}</p>
        <h2 className="font-display mt-8 text-4xl tracking-tight text-ink sm:text-6xl">{brand.centerLine3}</h2>
        <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-ink/60">
          P2P is not the hero of this story. It is an instrument that helps believers learn, grow, walk with
          others, serve, disciple, and multiply &mdash; never a replacement for Jesus, Scripture, the Holy Spirit,
          or the local church.
        </p>
      </Reveal>
    </section>
  );
}
