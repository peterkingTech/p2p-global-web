import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Quote from "@/components/sections/Quote";
import BodyOfChristEngine from "@/components/sections/BodyOfChristEngine";
import KingdomServiceNetwork from "@/components/sections/KingdomServiceNetwork";
import { scripture } from "@/content/copy";

export const metadata: Metadata = {
  title: "Gifts & Service",
  description: "The Body of Christ engine: how professional, creative, and ministry gifts can serve the Kingdom.",
};

export default function GiftsPage() {
  return (
    <>
      <PageHero
        eyebrow="Gifts & Service"
        title="Every Believer Has Gifts"
        subtitle="Discipleship is not only receiving. It is also learning to give what God has placed in you."
        mediaKey="gifts"
      />

      <Prose eyebrow="The Body of Christ" heading="More than Bible lessons">
        <Quote reference={scripture.gifts.reference} text={scripture.gifts.text} />
        <p>
          A believer is not only a student of Scripture. They are a therapist, a developer, an administrator, an
          artist, a teacher, a worship leader — someone with real skills and real gifts that can strengthen the
          Kingdom, not just their own career.
        </p>
        <p>
          What you learn can shape how you serve. What God has placed in you can strengthen someone else.
        </p>
      </Prose>

      <BodyOfChristEngine />
      <KingdomServiceNetwork />

      <Prose eyebrow="Boundaries" heading="Service, not status" tone="dark">
        <p>
          This is deliberately not a place for influence, rankings, or &ldquo;top contributor&rdquo; badges. The
          only word that matters here is <strong>service</strong>. And where care touches sensitive areas —
          counseling, mental health, medical topics — professional qualifications and appropriate boundaries always
          matter; spiritual encouragement is not a substitute for professional treatment, and the two can coexist.
        </p>
      </Prose>
    </>
  );
}
