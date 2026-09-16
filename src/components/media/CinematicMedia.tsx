import { getMedia } from "@/content/media";
import Scene from "@/components/media/Scene";

type Props = {
  mediaKey: string;
  className?: string;
  kenBurns?: boolean;
  grain?: boolean;
  vignette?: boolean;
  children?: React.ReactNode;
};

/**
 * Renders the background for a cinematic panel: a real video, else a real
 * photo, else a generated gradient + line-art glyph. Priority and asset
 * choice both live in content/media.ts — swapping in official P2P footage
 * later means only editing that file, not call sites.
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
  const backdrop = {
    backgroundColor: asset.base,
    backgroundImage: asset.gradient.join(", "),
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {asset.video ? (
        <div className="absolute inset-0" style={backdrop}>
          <video
            className={`absolute inset-0 h-full w-full object-contain motion-reduce:hidden ${kenBurns ? "animate-kenburns" : ""}`}
            src={asset.video}
            poster={asset.photo}
            preload="metadata"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      ) : asset.photo ? (
        <div className="absolute inset-0" style={backdrop}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset.photo}
            alt=""
            className={`absolute inset-0 h-full w-full object-contain ${kenBurns ? "animate-kenburns" : ""}`}
          />
        </div>
      ) : (
        <div
          className={`absolute inset-0 flex items-center justify-center ${kenBurns ? "animate-kenburns" : ""}`}
          style={backdrop}
        >
          {asset.scene && <Scene variant={asset.scene} />}
        </div>
      )}
      {grain && <div className="grain-overlay" />}
      {vignette && <div className="vignette" />}
      {children}
    </div>
  );
}
