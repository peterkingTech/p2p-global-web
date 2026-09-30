import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { howItWorksTopics } from "@/content/copy";

/** Quick-link grid into the full app manual — the website explains, the app delivers the experience. */
export default function ExploreFurther() {
  return (
    <section className="bg-paper px-6 py-24 text-ink">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="text-xs tracking-[0.35em] text-water uppercase">Go Deeper</p>
          <h2 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl">
            The website is the manual. The app is the experience.
          </h2>
          <p className="mt-6 text-left text-lg leading-relaxed text-ink/70">
            Every feature below is explained in full on its own page — read what&rsquo;s relevant to you now, or
            come back later. When you&rsquo;re ready, the app is where you actually live it.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
        {howItWorksTopics.map((topic, i) => (
          <Reveal key={topic.href} delay={i * 0.03}>
            <Link
              href={topic.href}
              className="flex h-full gap-4 rounded-xl border border-ink/10 p-5 transition hover:border-ink/30 hover:shadow-sm"
            >
              <span className="shrink-0 text-2xl" aria-hidden="true">
                {topic.icon}
              </span>
              <div>
                <h3 className="text-base font-medium">{topic.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/60">{topic.description}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
