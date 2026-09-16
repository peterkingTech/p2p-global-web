import Reveal from "@/components/motion/Reveal";
import MediaCard from "@/components/sections/MediaCard";
import { ecosystem } from "@/content/copy";

export default function EcosystemStrip() {
  return (
    <section className="bg-ink py-28">
      <div className="px-6 text-center text-paper">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold-soft/90 uppercase">The P2P Ecosystem</p>
          <h2 className="font-display mt-4 text-4xl tracking-tight sm:text-6xl">Everything Points Back To Jesus Christ</h2>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {ecosystem.map((item, i) => (
          <Reveal key={item.key} delay={i * 0.04}>
            <MediaCard mediaKey={item.key} href={item.href} imgHeight="h-44">
              <h3 className="font-display text-xl tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/70">{item.body}</p>
              <span className="mt-4 block text-xs tracking-[0.2em] text-gold-soft/90 uppercase">Explore →</span>
            </MediaCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
