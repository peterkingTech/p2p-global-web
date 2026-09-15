import CinematicMedia from "@/components/media/CinematicMedia";

/** Full-screen video moment — deliberately no text or buttons over it. */
export default function HeroVideo() {
  return (
    <div className="relative h-[100svh] overflow-hidden" role="img" aria-label="Ocean waves at sunrise">
      <CinematicMedia mediaKey="heroVideo" kenBurns={false} />
    </div>
  );
}
