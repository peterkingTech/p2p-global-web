import Link from "next/link";
import CinematicMedia from "@/components/media/CinematicMedia";

type Props = {
  mediaKey: string;
  href?: string;
  imgHeight?: string;
  tone?: "light" | "dark";
  className?: string;
  children: React.ReactNode;
};

/** Image block on top, content below on a solid background — never text over media. */
export default function MediaCard({ mediaKey, href, imgHeight = "h-48", tone = "dark", className = "", children }: Props) {
  const inner = (
    <div className={`overflow-hidden rounded-lg ${tone === "dark" ? "bg-ink text-paper" : "bg-paper text-ink"} ${className}`}>
      <div className={`relative ${imgHeight}`}>
        <CinematicMedia mediaKey={mediaKey} grain={false} vignette={false} />
      </div>
      <div className="p-6">{children}</div>
    </div>
  );

  return href ? (
    <Link href={href} className="block h-full transition-opacity hover:opacity-90">
      {inner}
    </Link>
  ) : (
    inner
  );
}
