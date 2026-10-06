/** A trailing/leading "→" that flips to "←" under RTL locales, and a
 * separate "back" arrow that points the opposite way. Content never bakes
 * a directional glyph into a translatable string — the glyph is chosen
 * here, purely from CSS `dir`, not from the current locale in JS. */
export function NextArrow() {
  return (
    <span aria-hidden="true">
      <span className="rtl:hidden">→</span>
      <span className="hidden rtl:inline">←</span>
    </span>
  );
}

export function BackArrow() {
  return (
    <span aria-hidden="true">
      <span className="rtl:hidden">←</span>
      <span className="hidden rtl:inline">→</span>
    </span>
  );
}
