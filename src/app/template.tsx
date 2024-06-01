"use client";
import { animatePageIn } from "@/lib/animations";
import { useStateSelector } from "@/state";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pageTitle = useStateSelector((state) => state.links.currentRoute);
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <div className="rotate-12 origin-right relative z-[1000]">
        <div
          id="transition-element"
          className="w-[200vw] h-[200vh] bg-dark-2 z-[1000] fixed top-[-50vh] left-[-50vw]"
        ></div>
        <div
          id="transition-element-2"
          className="w-[200vw] h-[200vh] bg-primary-600 z-[999] fixed top-[-50vh] left-[-50vw]"
        ></div>
        <div
          id="transition-element-3"
          className="w-[200vw] h-[200vh] bg-secondary-500 z-[998] fixed top-[-50vh] left-[-50vw]"
        ></div>
      </div>
      <div
        id="page-title"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-[1001] text-4xl uppercase leading-3 tracking-widest text-semibold opacity-1"
      >
        {pageTitle}
      </div>
      {children}
    </div>
  );
}
