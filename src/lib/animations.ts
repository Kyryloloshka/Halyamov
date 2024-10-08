import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const userAgent =
  typeof window !== "undefined" ? window.navigator.userAgent : "";
const isMobile = () => /Mobi|Android/i.test(userAgent);

export const animatePageIn = () => {
  if (isMobile()) return;
  const tranElems = [
    document.getElementById("transition-element"),
    document.getElementById("transition-element-2"),
    document.getElementById("transition-element-3"),
  ];
  const titleElem = document.getElementById("page-title");

  tranElems.forEach((elem, index) => {
    if (elem) {
      const tl = gsap.timeline();

      tl.set(elem, {
        xPercent: 0,
      })
        .delay(0.3 + index * 0.1)
        .to(elem, {
          xPercent: 100,
          duration: 0.8,
          onComplete: () => {
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "0px";
          },
        });
    }
  });

  if (titleElem) {
    gsap.to(titleElem, {
      opacity: 0,
      duration: 0.5,
    });
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  if (isMobile()) {
    router.push(href);
    return;
  }
  const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = `${scrollWidth}px`;
  const tranElems = [
    document.getElementById("transition-element"),
    document.getElementById("transition-element-2"),
    document.getElementById("transition-element-3"),
  ];
  const titleElem = document.getElementById("page-title");

  tranElems.forEach((elem, index) => {
    if (elem) {
      const tl = gsap.timeline();

      tl.set(elem, {
        xPercent: -100,
      })
        .delay((2 - index) * 0.1)
        .to(elem, {
          xPercent: 0,
          duration: 0.8,
        });
    }
  });
  if (titleElem) {
    gsap.to(titleElem, {
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
      onComplete: () => {
        router.push(href);
      },
    });
  }
};
