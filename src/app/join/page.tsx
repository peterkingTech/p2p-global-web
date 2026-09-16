import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { brand, gettingStartedSteps } from "@/content/copy";

export const metadata: Metadata = {
  title: "Join P2P Global",
  description: "Download P2P Global and begin your Kingdom School journey.",
};

export default function JoinPage() {
  return (
    <>
      <section className="flex min-h-[70vh] items-center justify-center bg-ink px-6 py-32 text-center">
        <Reveal className="mx-auto max-w-xl text-paper">
          <p className="text-xs tracking-[0.4em] text-gold-soft/90 uppercase">Join {brand.name}</p>
          <h1 className="font-display mt-6 text-4xl tracking-tight sm:text-6xl">Who Will You Help Grow?</h1>
          <p className="mt-8 text-lg leading-relaxed text-paper/80">{brand.tagline}</p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <span className="inline-flex cursor-not-allowed items-center gap-3 rounded-full bg-gold-soft/40 px-8 py-4 text-sm font-medium tracking-wide text-ink/60">
              <span aria-hidden="true">📱</span>
              Android — Coming Soon
            </span>
            <span className="text-sm text-paper/40">iOS coming soon too</span>
          </div>
          <p className="mt-4 text-xs text-paper/40">
            The Play Store listing isn&rsquo;t live yet — we&rsquo;d rather leave this honest than link somewhere
            that doesn&rsquo;t exist.
          </p>

          <div className="mt-16 space-y-1 text-sm tracking-wide text-paper/50">
            <p>{brand.centerLine1}</p>
            <p>{brand.centerLine2}</p>
            <p className="mt-3 text-gold-soft/90">{brand.centerLine3}</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-paper px-6 py-24 text-ink">
        <div className="mx-auto max-w-2xl">
          <Reveal className="mb-16 text-center">
            <p className="text-xs tracking-[0.35em] text-water uppercase">Before You Begin</p>
            <h2 className="font-display mt-4 text-3xl tracking-tight">What to expect in your first week</h2>
          </Reveal>

          <div className="flex flex-col gap-10">
            {gettingStartedSteps.map((step) => (
              <Reveal key={step.title} className="flex gap-6">
                <div className="w-20 shrink-0 text-right">
                  <span className="text-xs tracking-widest text-ink/40 uppercase">{step.day}</span>
                </div>
                <div className="border-l border-ink/10 pl-6">
                  <h3 className="text-lg font-medium">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink/70">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-20 text-center text-paper">
        <Reveal>
          <p className="mb-8 text-xs tracking-[0.35em] text-gold-soft/90 uppercase">
            Want to understand more first?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "How It Works", href: "/how-it-works" },
              { label: "Your Living Tree", href: "/how-it-works/living-tree" },
              { label: "Kingdom School", href: "/how-it-works/kingdom-school" },
              { label: "Your Peer Guide", href: "/how-it-works/peer-guide" },
              { label: "For Churches", href: "/churches" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-paper/20 px-5 py-2 text-sm text-paper/70 transition hover:border-paper/50 hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
