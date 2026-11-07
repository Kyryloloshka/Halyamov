import type { CSSProperties } from "react";

// Props for an element animated by <RevealObserver />.
export const reveal = (
  { x = "-200px", delay = 0 }: { x?: string; delay?: number } = {}
) => ({
  "data-reveal": "",
  style: {
    "--reveal-x": x,
    "--reveal-delay": `${delay}s`,
  } as CSSProperties,
});
