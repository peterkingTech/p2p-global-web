// Original line-art emblems used as the "photography" stand-in across every
// mock media panel. These are authored illustrations, not simulated photos —
// deliberately so, since a fake-photorealistic placeholder would risk being
// mistaken for a real image. Swap the corresponding media.ts entry to a real
// `photo`/`video` and the emblem disappears automatically.

export type SceneVariant =
  | "seed"
  | "sprout"
  | "tree"
  | "forest"
  | "city"
  | "ocean"
  | "book"
  | "scroll"
  | "prayer"
  | "people"
  | "family"
  | "church"
  | "heart"
  | "code"
  | "target"
  | "palette"
  | "mortarboard"
  | "flame"
  | "network"
  | "globe"
  | "sunrise"
  | "mission"
  | "gift"
  | "cross";

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" } as const;

function paths(variant: SceneVariant) {
  switch (variant) {
    case "seed":
      return (
        <>
          <path d="M60 150 Q100 135 140 150" {...stroke} />
          <ellipse cx="100" cy="118" rx="16" ry="24" fill="currentColor" stroke="none" />
        </>
      );
    case "sprout":
      return (
        <>
          <path d="M55 155 Q100 142 145 155" {...stroke} />
          <path d="M100 155 V95" {...stroke} />
          <path d="M100 110 Q75 100 68 78" {...stroke} />
          <path d="M100 100 Q125 90 132 68" {...stroke} />
        </>
      );
    case "tree":
      return (
        <>
          <path d="M100 160 V110" {...stroke} />
          <circle cx="100" cy="75" r="38" {...stroke} />
        </>
      );
    case "forest":
      return (
        <>
          <path d="M40 155 H160" {...stroke} />
          <path d="M65 155 V140 M65 140 L48 108 L82 108 L65 82 L88 108 L65 108" {...stroke} />
          <path d="M100 155 V132 M100 132 L80 95 L120 95 L100 132" {...stroke} />
          <path d="M135 155 V142 M135 142 L120 116 L150 116 L135 142" {...stroke} />
        </>
      );
    case "city":
      return (
        <>
          <path d="M35 160 H165" {...stroke} />
          <path d="M50 160V115h18v45M80 160V90h20v70M112 160V70h18v90M142 160V125h16v35" {...stroke} />
        </>
      );
    case "ocean":
      return (
        <>
          <circle cx="100" cy="70" r="22" {...stroke} />
          <path d="M40 120 Q60 108 80 120 T120 120 T160 120" {...stroke} />
          <path d="M40 145 Q60 133 80 145 T120 145 T160 145" {...stroke} />
        </>
      );
    case "book":
      return (
        <>
          <path d="M100 65 C85 55 65 52 45 58 V140 C65 134 85 137 100 147 C115 137 135 134 155 140 V58 C135 52 115 55 100 65Z" {...stroke} />
          <path d="M100 65 V147" {...stroke} />
          <path d="M58 78 H88 M58 96 H88 M112 78 H142 M112 96 H142" {...stroke} />
        </>
      );
    case "scroll":
      return (
        <>
          <rect x="48" y="80" width="104" height="44" rx="4" {...stroke} />
          <circle cx="48" cy="102" r="12" {...stroke} />
          <circle cx="152" cy="102" r="12" {...stroke} />
          <path d="M68 92 H132 M68 104 H132 M68 116 H112" {...stroke} />
        </>
      );
    case "prayer":
      return (
        <>
          <path d="M100 50 V150" {...stroke} />
          <path d="M100 60 C80 70 70 100 78 140 C85 150 95 150 100 140" {...stroke} />
          <path d="M100 60 C120 70 130 100 122 140 C115 150 105 150 100 140" {...stroke} />
        </>
      );
    case "people":
      return (
        <>
          <circle cx="72" cy="70" r="16" {...stroke} />
          <path d="M45 145 C45 112 99 112 99 145" {...stroke} />
          <circle cx="128" cy="70" r="16" {...stroke} />
          <path d="M101 145 C101 112 155 112 155 145" {...stroke} />
        </>
      );
    case "family":
      return (
        <>
          <circle cx="55" cy="75" r="14" {...stroke} />
          <path d="M32 145 C32 116 78 116 78 145" {...stroke} />
          <circle cx="145" cy="75" r="14" {...stroke} />
          <path d="M122 145 C122 116 168 116 168 145" {...stroke} />
          <circle cx="100" cy="100" r="11" {...stroke} />
          <path d="M82 148 C82 126 118 126 118 148" {...stroke} />
        </>
      );
    case "church":
      return (
        <>
          <path d="M100 45 V65" {...stroke} />
          <path d="M90 55 H110" {...stroke} />
          <path d="M55 150 V100 L100 65 L145 100 V150" {...stroke} />
          <path d="M90 150 V120 H110 V150" {...stroke} />
        </>
      );
    case "heart":
      return <path d="M100 145 C55 110 45 80 65 62 C82 47 100 62 100 78 C100 62 118 47 135 62 C155 80 145 110 100 145Z" {...stroke} />;
    case "code":
      return (
        <>
          <path d="M75 65 L45 100 L75 135" {...stroke} />
          <path d="M125 65 L155 100 L125 135" {...stroke} />
          <path d="M112 55 L88 145" {...stroke} />
        </>
      );
    case "target":
      return (
        <>
          <circle cx="100" cy="100" r="45" {...stroke} />
          <circle cx="100" cy="100" r="26" {...stroke} />
          <circle cx="100" cy="100" r="7" fill="currentColor" stroke="none" />
        </>
      );
    case "palette":
      return (
        <>
          <path d="M100 50 C60 50 40 78 40 105 C40 128 58 130 65 122 C72 115 85 118 88 128 C92 140 105 148 122 143 C148 135 160 108 152 85 C144 62 124 50 100 50Z" {...stroke} />
          <circle cx="70" cy="90" r="6" fill="currentColor" stroke="none" />
          <circle cx="95" cy="72" r="6" fill="currentColor" stroke="none" />
          <circle cx="122" cy="82" r="6" fill="currentColor" stroke="none" />
        </>
      );
    case "mortarboard":
      return (
        <>
          <path d="M100 65 L165 92 L100 119 L35 92 Z" {...stroke} />
          <path d="M65 105 V128 C65 140 135 140 135 128 V105" {...stroke} />
          <path d="M165 92 V122" {...stroke} />
        </>
      );
    case "flame":
      return (
        <path
          d="M100 150 C72 150 60 128 66 105 C69 118 78 122 82 116 C76 95 82 72 100 55 C98 78 108 88 116 82 C126 95 132 112 126 128 C138 118 138 100 132 88 C148 105 150 132 128 146 C132 138 130 130 122 128 C120 140 112 150 100 150Z"
          {...stroke}
        />
      );
    case "network":
      return (
        <>
          <circle cx="60" cy="65" r="12" {...stroke} />
          <circle cx="140" cy="65" r="12" {...stroke} />
          <circle cx="100" cy="140" r="12" {...stroke} />
          <path d="M70 72 L92 130 M130 72 L108 130 M72 65 H128" {...stroke} />
        </>
      );
    case "globe":
      return (
        <>
          <circle cx="100" cy="100" r="50" {...stroke} />
          <path d="M50 100 H150" {...stroke} />
          <path d="M100 50 C130 75 130 125 100 150 C70 125 70 75 100 50Z" {...stroke} />
        </>
      );
    case "sunrise":
      return (
        <>
          <path d="M40 130 H160" {...stroke} />
          <path d="M60 130 C60 100 140 100 140 130" {...stroke} />
          <path d="M100 78 V60 M70 90 L58 78 M130 90 L142 78" {...stroke} />
        </>
      );
    case "mission":
      return (
        <>
          <circle cx="100" cy="100" r="48" {...stroke} />
          <path d="M100 66 L112 100 L100 134 L88 100 Z" fill="currentColor" stroke="none" />
        </>
      );
    case "gift":
      return (
        <>
          <rect x="50" y="95" width="100" height="60" rx="3" {...stroke} />
          <path d="M50 118 H150" {...stroke} />
          <path d="M100 95 V155" {...stroke} />
          <path d="M100 95 C85 70 65 72 65 88 C65 100 85 100 100 95Z" {...stroke} />
          <path d="M100 95 C115 70 135 72 135 88 C135 100 115 100 100 95Z" {...stroke} />
        </>
      );
    case "cross":
      return (
        <>
          <path d="M100 50 V150" {...stroke} />
          <path d="M65 85 H135" {...stroke} />
        </>
      );
  }
}

export default function Scene({ variant, className = "" }: { variant: SceneVariant; className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      style={{ width: "42%", maxWidth: 180, opacity: 0.28, color: "var(--color-gold-soft)" }}
    >
      {paths(variant)}
    </svg>
  );
}
