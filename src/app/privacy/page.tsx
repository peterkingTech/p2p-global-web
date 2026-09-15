import type { Metadata } from "next";
import Prose from "@/components/sections/Prose";

export const metadata: Metadata = {
  title: "Privacy",
  description: "P2P privacy policy.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24">
      <Prose eyebrow="Legal" heading="Privacy Policy">
        <p>
          A full privacy policy will be published here before P2P collects any personal data through this website.
          Nothing on this site currently stores personal information beyond what your browser retains locally.
        </p>
      </Prose>
    </div>
  );
}
