// Deterministic pseudo-random module grid, styled like a QR code, so the
// page reads as "a code will go here" without shipping something that looks
// scannable-but-broken. Replace with a real generated QR code once there's
// an actual join link to encode.
function seededGrid(size: number, seed: number) {
  let s = seed;
  const next = () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
  return Array.from({ length: size }, () => Array.from({ length: size }, () => next() > 0.55));
}

const SIZE = 11;
const MODULE = 8;
const grid = seededGrid(SIZE, 42);

function Finder({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={MODULE * 3} height={MODULE * 3} fill="none" stroke="currentColor" strokeWidth={MODULE * 0.4} />
      <rect x={MODULE} y={MODULE} width={MODULE} height={MODULE} fill="currentColor" />
    </g>
  );
}

export default function QRPlaceholder() {
  const px = SIZE * MODULE;
  return (
    <svg
      viewBox={`0 0 ${px} ${px}`}
      width={px}
      height={px}
      className="text-ink"
      role="img"
      aria-label="Placeholder QR code — scanning will be enabled once sign-up is live"
    >
      <rect width={px} height={px} fill="var(--color-paper)" />
      {grid.map((row, ry) =>
        row.map(
          (on, rx) =>
            on &&
            !(rx < 3 && ry < 3) &&
            !(rx > SIZE - 4 && ry < 3) &&
            !(rx < 3 && ry > SIZE - 4) && (
              <rect key={`${rx}-${ry}`} x={rx * MODULE} y={ry * MODULE} width={MODULE} height={MODULE} fill="currentColor" />
            )
        )
      )}
      <Finder x={0} y={0} />
      <Finder x={px - MODULE * 3} y={0} />
      <Finder x={0} y={px - MODULE * 3} />
    </svg>
  );
}
