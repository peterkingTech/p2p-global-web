import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";
import { serviceQueries, serviceOffers } from "@/content/copy";

export default function KingdomServiceNetwork() {
  return (
    <section className="relative overflow-hidden bg-paper py-28">
      <div className="px-6 text-center">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-water uppercase">A Vision for How Believers Serve</p>
          <h2 className="font-display mt-4 text-4xl tracking-tight text-ink sm:text-6xl">
            Your Gift Can Meet a Need
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            The Body of Christ is strongest when people don&rsquo;t only ask &ldquo;What can I receive?&rdquo; but
            also &ldquo;What can I give?&rdquo;
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-4 px-6 md:grid-cols-2">
        <Reveal className="relative min-h-[420px] overflow-hidden rounded-lg">
          <CinematicMedia mediaKey="serviceNetwork" />
          <div className="relative z-10 flex h-full flex-col p-8 text-paper">
            <span className="text-3xl">🔍</span>
            <h3 className="font-display mt-3 text-2xl tracking-tight">Looking for Help</h3>
            <ul className="mt-6 space-y-4">
              {serviceQueries.map((q) => (
                <li key={q} className="border-l border-gold-soft/40 pl-4 text-sm text-paper/80 italic">
                  &ldquo;{q}&rdquo;
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative min-h-[420px] overflow-hidden rounded-lg">
          <CinematicMedia mediaKey="gifts" />
          <div className="relative z-10 flex h-full flex-col p-8 text-paper">
            <span className="text-3xl">✋</span>
            <h3 className="font-display mt-3 text-2xl tracking-tight">Offering Your Gift</h3>
            <ul className="mt-6 space-y-4">
              {serviceOffers.map((o) => (
                <li key={o} className="border-l border-gold-soft/40 pl-4 text-sm text-paper/80 italic">
                  &ldquo;{o}&rdquo;
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-2xl px-6 text-center">
        <p className="text-sm leading-relaxed text-ink/50">
          These are illustrative examples of the vision, not a live directory. P2P is not a freelancer marketplace,
          a paid services marketplace, or an unverified professional directory — any future gift-discovery feature
          would include identity verification, safeguarding, privacy, and moderation appropriate to what is offered.
        </p>
      </Reveal>
    </section>
  );
}
