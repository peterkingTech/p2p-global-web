import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import FeatureRow from "@/components/sections/FeatureRow";
import { familyRows } from "@/content/copy";

export const metadata: Metadata = {
  title: "Families",
  description: "Discipleship starts where we live — family gathering, Scripture, prayer, and shared growth.",
};

export default function FamiliesPage() {
  return (
    <>
      <PageHero
        eyebrow="Families"
        title="Discipleship Starts Where We Live"
        subtitle="Before it happens in a group or a curriculum, discipleship happens at the kitchen table."
        mediaKey="family"
      />

      <Prose eyebrow="The First Classroom" heading="Family as the first discipleship context">
        <p>
          Deuteronomy 6 puts the responsibility for passing on faith squarely in the home &mdash; talking about
          God&rsquo;s Word &ldquo;when you sit in your house, when you walk by the way, when you lie down, and when
          you rise.&rdquo; P2P doesn&rsquo;t try to replace that. It tries to support it: simple Scripture, prayer,
          and study rhythms families can actually build into ordinary life together.
        </p>
      </Prose>

      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto flex max-w-3xl flex-col gap-20 px-6">
          {familyRows.map((row, i) => (
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

      <Prose eyebrow="Not Another App to Manage" heading="Rhythms, not requirements">
        <p>
          None of this is meant to add pressure to already-full households. The aim is small, repeatable rhythms
          &mdash; a few minutes, a few times a week &mdash; not one more obligation competing for a family&rsquo;s
          time.
        </p>
      </Prose>
    </>
  );
}
