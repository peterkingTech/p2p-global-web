import Link from "next/link";
import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";

export type FilmstripItem = {
  mediaKey: string;
  icon?: string;
  title: string;
  body: string;
  href?: string;
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
        {items.map((item) => {
          const className = "relative h-[380px] w-[75vw] shrink-0 snap-start overflow-hidden rounded-lg sm:w-[320px]";
          const content = (
            <>
              <CinematicMedia mediaKey={item.mediaKey} />
              <div className="relative z-10 flex h-full flex-col justify-end p-6 text-paper">
                {item.icon && (
                  <span className="text-3xl" aria-hidden="true">
                    {item.icon}
                  </span>
                )}
                <h3 className="font-display mt-3 text-xl tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">{item.body}</p>
                {item.href && (
                  <span className="mt-3 text-xs tracking-[0.2em] text-gold-soft/90 uppercase">Read the story →</span>
                )}
              </div>
            </>
          );

          return item.href ? (
            <Link key={item.title} href={item.href} className={className}>
              {content}
            </Link>
          ) : (
            <div key={item.title} className={className}>
              {content}
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}
