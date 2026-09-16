import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

const steps = [
  {
    number: "01",
    title: "Download and join",
    body: "Create your account. Choose your @username. Set your faith stage and goals. Meet your peer guide through our smart matching system.",
  },
  {
    number: "02",
    title: "Begin Kingdom School",
    body: "12 modules. 84 lessons. Go through each one with your peer guide — at your pace, in your language, from anywhere on earth.",
  },
  {
    number: "03",
    title: "Guide someone else",
    body: "When you complete the Foundation you are commissioned as a peer guide. The pattern of 2 Timothy 2:2 continues through you.",
  },
];

export default function HowItActuallyWorks() {
  return (
    <section className="bg-paper py-24 text-ink">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="mb-16 text-center">
          <p className="text-xs tracking-[0.35em] text-water uppercase">How It Works</p>
          <h2 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl">Here is what actually happens</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">Three steps. One journey.</p>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.06} className="flex flex-col gap-4">
              <span className="font-display text-5xl text-ink/10">{step.number}</span>
              <h3 className="font-display text-xl">{step.title}</h3>
              <p className="leading-relaxed text-ink/70">{step.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16 text-center">
          <Link
            href="/how-it-works"
            className="inline-block rounded-full border border-ink/20 px-8 py-3 text-sm tracking-wide transition hover:bg-ink hover:text-paper"
          >
            Learn more about how it works →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
