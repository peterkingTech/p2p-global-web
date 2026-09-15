import type { Metadata } from "next";
import Prose from "@/components/sections/Prose";

export const metadata: Metadata = {
  title: "Terms",
  description: "P2P terms of use.",
};

export default function TermsPage() {
  return (
    <div className="pt-24">
      <Prose eyebrow="Legal" heading="Terms of Use">
        <p>
          Full terms of use will be published here as P2P&rsquo;s product features go live. This website is
          currently an informational and vision-casting site for the P2P Global Discipleship Network.
        </p>
      </Prose>
    </div>
  );
}
