import Link from "next/link";
import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";
import { ecosystem } from "@/content/copy";

export default function EcosystemStrip() {
  return (
    <section className="bg-ink py-28">
      <div className="px-6 text-center text-paper">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold-soft/90 uppercase">The P2P Ecosystem</p>
          <h2 className="font-display mt-4 text-4xl tracking-tight sm:text-6xl">Everything Points Back to Him</h2>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-px overflow-hidden rounded-lg bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
        {ecosystem.map((item, i) => (
          <Reveal key={item.key} delay={i * 0.04} className="relative min-h-[300px] overflow-hidden bg-ink">
            <CinematicMedia mediaKey={item.key} vignette={false} />
            <Link href={item.href} className="relative z-10 flex h-full flex-col justify-end p-7 text-paper">
              <h3 className="font-display text-xl tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/70">{item.body}</p>
              <span className="mt-4 text-xs tracking-[0.2em] text-gold-soft/90 uppercase">Explore →</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
