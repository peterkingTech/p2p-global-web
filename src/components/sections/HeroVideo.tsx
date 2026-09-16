import CinematicMedia from "@/components/media/CinematicMedia";

/** Full-screen photo moment — deliberately no text or buttons over it. */
export default function HeroVideo() {
  return (
    <div className="relative h-[100svh] overflow-hidden" role="img" aria-label="Many hands together holding up one Bible">
      <CinematicMedia mediaKey="heroVideo" kenBurns={false} />
    </div>
  );
}
