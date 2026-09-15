import Link from "next/link";
import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";
import { brand } from "@/content/copy";

export default function FinalCTA() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-32">
      <CinematicMedia mediaKey="finalCta" kenBurns />
      <Reveal className="relative z-10 mx-auto max-w-2xl text-center text-paper">
        <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-5xl">
          Everyone is learning from someone.
          <br />
          Everyone can help someone grow.
        </h2>
        <p className="font-display mt-8 text-xl text-gold-soft sm:text-2xl">Who will you help grow?</p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/join"
            className="rounded-full bg-gold-soft px-8 py-3.5 text-sm font-medium tracking-wide text-ink transition-transform hover:scale-[1.03]"
          >
            Join P2P
          </Link>
          <Link
            href="/vision"
            className="rounded-full border border-paper/40 px-8 py-3.5 text-sm tracking-wide text-paper/90 transition-colors hover:border-paper hover:text-paper"
          >
            Explore the Network
          </Link>
        </div>

        <div className="mt-20 space-y-1 text-sm tracking-wide text-paper/60">
          <p>{brand.centerLine1}</p>
          <p>{brand.centerLine2}</p>
          <p className="mt-3 text-gold-soft/90">{brand.centerLine3}</p>
        </div>
      </Reveal>
    </section>
  );
}
