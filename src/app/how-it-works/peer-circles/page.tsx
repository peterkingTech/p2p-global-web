import { permanentRedirect } from "next/navigation";

// Peer Circles has been replaced by Study Together. The route is kept as a
// permanent redirect so existing links and bookmarks keep working.
export default function PeerCirclesPage() {
  permanentRedirect("/how-it-works/study-together");
}
