/** Smooth scrolling unless the visitor prefers reduced motion. */
export function scrollToEl(el: Element | null | undefined, block: ScrollLogicalPosition = "start") {
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block });
}
