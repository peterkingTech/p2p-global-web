import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { getMedia } from "@/content/media";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /**
   * Optional full-bleed photograph. Only pass one where the photo carries
   * the page's meaning — most interior pages are typography-led.
   */
  mediaKey?: string;
  /** Required with `mediaKey`: describes the photo for screen readers. */
  imageAlt?: string;
};

export default function PageHero({ eyebrow, title, subtitle, mediaKey, imageAlt }: Props) {
  const photo = mediaKey ? getMedia(mediaKey) : undefined;

  if (photo?.photo) {
    return (
      <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-ink text-paper">
        <Image
          src={photo.photo}
          alt={imageAlt ?? ""}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: photo.position ?? "50% 50%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/5" aria-hidden="true" />
        <Reveal className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-16 sm:pb-20">
          <p className="type-eyebrow text-sage">{eyebrow}</p>
          <h1 className="type-title mt-5 max-w-3xl">{title}</h1>
          {subtitle && <p className="type-lead mt-6 max-w-2xl text-paper/85">{subtitle}</p>}
        </Reveal>
      </section>
    );
  }

  // Typography-led hero: a quiet forest field, the headline does the work.
  return (
    <section
      className="relative overflow-hidden bg-ink px-6 pt-40 pb-20 text-paper sm:pt-48 sm:pb-24"
      style={{
        backgroundImage:
          "radial-gradient(90% 120% at 100% 0%, rgba(46,122,85,0.22) 0%, rgba(6,19,15,0) 60%), linear-gradient(180deg, #0c261d 0%, #06130f 100%)",
      }}
    >
      <Reveal className="mx-auto max-w-6xl">
        <p className="type-eyebrow text-sage">{eyebrow}</p>
        <h1 className="type-title mt-5 max-w-4xl">{title}</h1>
        {subtitle && <p className="type-lead mt-6 max-w-2xl text-paper/80">{subtitle}</p>}
      </Reveal>
    </section>
  );
}
