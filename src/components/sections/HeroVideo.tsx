import { getTranslations } from "next-intl/server";
import CinematicMedia from "@/components/media/CinematicMedia";

/** Full-screen photo moment — deliberately no text or buttons over it. */
export default async function HeroVideo() {
  const t = await getTranslations("HeroVideo");
  return (
    <div className="relative h-[100svh] overflow-hidden" role="img" aria-label={t("ariaLabel")}>
      <CinematicMedia mediaKey="heroVideo" kenBurns={false} />
    </div>
  );
}
