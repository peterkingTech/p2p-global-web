import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";

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
          local congregation carries out. Where it can help — study plans, small-group cohorts, prayer rhythms
          between meetings — it exists to strengthen what the church is already doing, not to become a parallel
          congregation of its own.
        </p>
      </Prose>
    </>
  );
}
