import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Quote from "@/components/sections/Quote";
import { scripture } from "@/content/copy";

export const metadata: Metadata = {
  title: "About",
  description: "Why P2P exists, its theological foundation, and its relationship to Scripture and the local church.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Why P2P Exists"
        subtitle="Not a bigger platform. A faithful instrument for an ancient pattern."
        mediaKey="about"
      />

      <Prose eyebrow="Theological Foundation" heading="Jesus Christ at the center">
        <p>
          P2P is not the hero of its own story. It is not a replacement for Jesus, Scripture, the Holy Spirit, or
          the local church. It exists as one instrument among many that God can use to help believers learn, grow,
          walk with others, serve, disciple, and multiply.
        </p>
        <Quote reference={scripture.mission.reference} text={scripture.mission.text} />
      </Prose>

      <Prose eyebrow="Discipleship Philosophy" heading="Peer to peer, not top-down" tone="dark">
        <p>
          The name isn&rsquo;t incidental. P2P assumes that spiritual growth is relational and mutual — everyone is
          learning from someone, and everyone, no matter how new in the faith, has something to offer someone else.
          A guide is a further-along peer, not a distant authority.
        </p>
      </Prose>

      <Prose eyebrow="Relationship to Scripture" heading="The Word has the final word">
        <p>
          Every study plan, prompt, and piece of content in P2P is meant to point a person back to the Bible
          itself, not to stand in for it. Where anything here ever seems to add to or override what Scripture
          says, Scripture wins — P2P is a tool for engaging the text, never a substitute authority over it.
        </p>
      </Prose>

      <Prose eyebrow="Relationship to the Church" heading="A supporting instrument, not a substitute" tone="dark">
        <p>
          P2P assumes every believer using it belongs, or is being pointed toward belonging, to a local church —
          with its own leadership, sacraments, and accountability. Nothing here is designed to be a person&rsquo;s
          only spiritual community. See how this plays out in practice on the{" "}
          <Link href="/churches" className="underline decoration-gold-soft/50 underline-offset-4 hover:text-gold-soft">
            Churches
          </Link>{" "}
          and{" "}
          <Link href="/families" className="underline decoration-gold-soft/50 underline-offset-4 hover:text-gold-soft">
            Families
          </Link>{" "}
          pages.
        </p>
      </Prose>

      <Prose eyebrow="Looking Ahead" heading="A vision still unfolding">
        <p>
          Some of what&rsquo;s described across this site — like gift-based service discovery — is a vision for
          where this can go, not a claim about what exists today. As the actual P2P product grows, this site will
          be updated to reflect exactly what is real, and clearly label what is still ahead.
        </p>
      </Prose>
    </>
  );
}
