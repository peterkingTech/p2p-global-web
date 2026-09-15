import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import FeatureRow from "@/components/sections/FeatureRow";
import { churchRows } from "@/content/copy";

export const metadata: Metadata = {
  title: "Churches",
  description: "P2P serves the local church. It does not replace it.",
};

export default function ChurchesPage() {
  return (
    <>
      <PageHero
        eyebrow="Churches"
        title="Strengthen the Local Church"
        subtitle="P2P serves churches. It does not replace them."
        mediaKey="church"
      />

      <Prose eyebrow="Supporting, Not Substituting" heading="The local church stays central">
        <p>
          Nothing in P2P is meant to compete with Sunday gatherings, membership, pastoral care, or the sacraments a
          local congregation carries out. Where it can help, it exists to strengthen what the church is already
          doing &mdash; not to become a parallel congregation of its own.
        </p>
      </Prose>

      <section className="bg-paper py-24 text-ink">
        <div className="mx-auto flex max-w-3xl flex-col gap-20 px-6">
          {churchRows.map((row, i) => (
            <FeatureRow
              key={row.title}
              icon={row.icon}
              title={row.title}
              body={row.body}
              mediaKey={row.mediaKey}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </section>

      <Prose eyebrow="For Church Leaders" heading="Built to be led by you, not by us" tone="dark">
        <p>
          Where P2P offers structure &mdash; cohorts, plans, prayer rhythms &mdash; it&rsquo;s meant to run under a
          church&rsquo;s own leadership and oversight, in step with what&rsquo;s already being taught from the
          pulpit, not around it.
        </p>
      </Prose>
    </>
  );
}
