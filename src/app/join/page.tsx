import type { Metadata } from "next";
import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";
import PhoneMock from "@/components/join/PhoneMock";
import StoreBadge from "@/components/join/StoreBadge";
import QRPlaceholder from "@/components/join/QRPlaceholder";
import { brand } from "@/content/copy";

export const metadata: Metadata = {
  title: "Join P2P",
  description: "Join the P2P global discipleship network.",
};

export default function JoinPage() {
  return (
    <>
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-32 text-center">
        <CinematicMedia mediaKey="join" kenBurns />
        <Reveal className="relative z-10 mx-auto max-w-xl text-paper">
          <p className="text-xs tracking-[0.4em] text-gold-soft/90 uppercase">Join {brand.name}</p>
          <h1 className="font-display mt-6 text-4xl tracking-tight sm:text-6xl">Who Will You Help Grow?</h1>
          <p className="mt-8 text-left text-lg leading-relaxed text-paper/80">{brand.tagline}</p>

          <div className="mt-12 rounded-lg border border-paper/20 bg-ink/40 p-6 text-sm leading-relaxed text-paper/70">
            Web onboarding and app sign-up will appear here as soon as they&rsquo;re live. We&rsquo;d rather leave
            this honest than link somewhere that doesn&rsquo;t exist yet.
          </div>

          <div className="mt-16 space-y-1 text-sm tracking-wide text-paper/50">
            <p>{brand.centerLine1}</p>
            <p>{brand.centerLine2}</p>
            <p className="mt-3 text-gold-soft/90">{brand.centerLine3}</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-ink px-6 py-24 text-center text-paper">
        <Reveal>
          <p className="text-xs tracking-[0.35em] text-gold-soft/90 uppercase">A Preview, Not a Product Yet</p>
          <h2 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl">The App Is on Its Way</h2>
          <p className="mx-auto mt-5 max-w-md text-left text-base leading-relaxed text-paper/70">
            These are mockups standing in for the real app screens, store listings, and QR code — none of them are
            live or functional yet.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16 flex flex-wrap items-center justify-center gap-10">
          <PhoneMock platform="ios" />
          <PhoneMock platform="android" />
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-16 flex max-w-md flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-center">
          <div className="flex flex-col gap-3">
            <StoreBadge platform="ios" />
            <StoreBadge platform="android" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="rounded-lg bg-paper p-3">
              <QRPlaceholder />
            </div>
            <p className="text-xs text-paper/50">Scan to join &mdash; coming soon</p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
