"use client";
import { useEffect } from "react";

// A single IntersectionObserver for every `[data-reveal]` element on the page.
// Sections stay server components; the animation itself is a CSS transition
// on opacity/translate (see globals.scss), so it runs on the compositor.
//
// Elements are only hidden once this component runs (it adds `.reveal-ready`
// to <html>). If the JS bundle can't run at all (very old browser, blocked
// script), the content simply stays visible.
const RevealObserver = () => {
  useEffect(() => {
    const html = document.documentElement;
    const elements = Array.prototype.slice.call(
      document.querySelectorAll("[data-reveal]:not(.is-visible)")
    ) as HTMLElement[];

    if (!("IntersectionObserver" in window)) return; // keep everything visible

    // Anything already on screen is shown right away, so enabling the
    // hidden state below never makes visible content blink.
    const viewportHeight = window.innerHeight;
    const pending = elements.filter((el) => {
      const rect = el.getBoundingClientRect();
      const onScreen = rect.top < viewportHeight && rect.bottom > 0;
      if (onScreen) el.classList.add("is-visible");
      return !onScreen;
    });

    html.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -100px 0px" }
    );
    pending.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
};

export default RevealObserver;
