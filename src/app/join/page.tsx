import type { Metadata } from "next";
import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";
import { brand } from "@/content/copy";

export const metadata: Metadata = {
  title: "Join P2P",
  description: "Join the P2P global discipleship network.",
};

export default function JoinPage() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-32 text-center">
      <CinematicMedia mediaKey="join" kenBurns />
      <Reveal className="relative z-10 mx-auto max-w-xl text-paper">
        <p className="text-xs tracking-[0.4em] text-gold-soft/90 uppercase">Join {brand.name}</p>
        <h1 className="font-display mt-6 text-4xl tracking-tight sm:text-6xl">Who Will You Help Grow?</h1>
        <p className="mt-8 text-lg leading-relaxed text-paper/80">{brand.tagline}</p>

        <div className="mt-12 rounded-lg border border-paper/20 bg-ink/40 p-6 text-sm leading-relaxed text-paper/70">
          Web onboarding and app sign-up will appear here as soon as they&rsquo;re live. We&rsquo;d rather leave this
          honest than link somewhere that doesn&rsquo;t exist yet.
        </div>

        <div className="mt-16 space-y-1 text-sm tracking-wide text-paper/50">
          <p>{brand.centerLine1}</p>
          <p>{brand.centerLine2}</p>
          <p className="mt-3 text-gold-soft/90">{brand.centerLine3}</p>
        </div>
      </Reveal>
    </section>
  );
}
