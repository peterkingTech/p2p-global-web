import { getMedia } from "@/content/media";

type Props = {
  mediaKey: string;
  className?: string;
  kenBurns?: boolean;
  grain?: boolean;
  vignette?: boolean;
  children?: React.ReactNode;
};

/**
 * Renders the background for a cinematic panel. Today every entry in
 * content/media.ts is a generated gradient (MOCK/TEMPORARY); once real
 * photography or video exists, this component picks it up automatically
 * via the `photo`/`video` fields without any change at call sites.
 */
export default function CinematicMedia({
  mediaKey,
  className = "",
  kenBurns = false,
  grain = true,
  vignette = true,
  children,
}: Props) {
  const asset = getMedia(mediaKey);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {asset.video ? (
        <video
          className={`absolute inset-0 h-full w-full object-cover ${kenBurns ? "animate-kenburns" : ""}`}
          src={asset.video}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : asset.photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={asset.photo}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover ${kenBurns ? "animate-kenburns" : ""}`}
        />
      ) : (
        <div
          className={`absolute inset-0 ${kenBurns ? "animate-kenburns" : ""}`}
          style={{
            backgroundColor: asset.base,
            backgroundImage: asset.gradient.join(", "),
          }}
        />
      )}
      {grain && <div className="grain-overlay" />}
      {vignette && <div className="vignette" />}
      {children}
    </div>
  );
}
