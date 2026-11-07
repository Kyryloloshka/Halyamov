// Native smooth scroll runs on the compositor and respects `scroll-padding-top`
// (set to the navbar height in page.scss), so no JS animation loop is needed.
export const smoothScrollTo = (targetId: string) => {
  const targetElement = document.querySelector(targetId);
  if (!targetElement) return;
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  targetElement.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });
};
