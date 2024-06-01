import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
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
      }).delay(0.3 + index * 0.1)
        .to(elem, {
          xPercent: 100,
          duration: 0.8,
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
      }).delay((2 - index) * 0.1)
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