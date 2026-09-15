import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";

type Props = {
  icon: string;
  title: string;
  body: string;
  mediaKey: string;
  reverse?: boolean;
};

/** Alternating image/text row — editorial layout, deliberately not a card grid. */
export default function FeatureRow({ icon, title, body, mediaKey, reverse = false }: Props) {
  return (
    <Reveal>
      <div className={`flex flex-col items-center gap-8 sm:flex-row ${reverse ? "sm:flex-row-reverse" : ""}`}>
        <div className="relative h-56 w-full shrink-0 overflow-hidden rounded-lg sm:h-72 sm:w-80">
          <CinematicMedia mediaKey={mediaKey} />
        </div>
        <div className="text-center sm:text-left">
          <span className="text-3xl" aria-hidden="true">{icon}</span>
          <h3 className="font-display mt-3 text-2xl tracking-tight">{title}</h3>
          <p className="mt-3 max-w-md text-base leading-relaxed opacity-75">{body}</p>
        </div>
      </div>
    </Reveal>
  );
}
