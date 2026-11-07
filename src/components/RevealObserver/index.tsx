"use client";
import { useEffect } from "react";

// A single IntersectionObserver for every `[data-reveal]` element on the page.
// Sections stay server components; the animation itself is a CSS transition
// on opacity/translate (see globals.scss), so it runs on the compositor.
const RevealObserver = () => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      "[data-reveal]:not(.is-visible)"
    );
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -100px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
};

export default RevealObserver;
