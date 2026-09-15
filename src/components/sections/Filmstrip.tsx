import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";

export type FilmstripItem = {
  mediaKey: string;
  icon?: string;
  title: string;
  body: string;
};

type Props = {
  items: readonly FilmstripItem[];
  ariaLabel: string;
};

/** Horizontal, snap-scrolling gallery — used for editorial category discovery. */
export default function Filmstrip({ items, ariaLabel }: Props) {
  return (
    <Reveal>
      <div
        role="group"
        aria-label={ariaLabel}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 [scrollbar-width:thin] sm:px-[max(1.5rem,calc((100vw-72rem)/2))]"
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="relative h-[380px] w-[75vw] shrink-0 snap-start overflow-hidden rounded-lg sm:w-[320px]"
          >
            <CinematicMedia mediaKey={item.mediaKey} />
            <div className="relative z-10 flex h-full flex-col justify-end p-6 text-paper">
              {item.icon && (
                <span className="text-3xl" aria-hidden="true">
                  {item.icon}
                </span>
              )}
              <h3 className="font-display mt-3 text-xl tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/70">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
