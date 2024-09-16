"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { animatePageIn, animatePageOut } from "@/lib/animations";
import { useStateSelector } from "@/state";

interface TransitionContextProps {
  animateOut: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextProps | undefined>(
  undefined
);

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within a TransitionProvider");
  }
  return context;
};

const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const currentRoute = useStateSelector((state) => state.links.currentRoute);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useLayoutEffect(() => {
    const userAgent = window.navigator.userAgent;
    const isMobile = /Mobi|Android/i.test(userAgent);
    setIsDesktop(!isMobile);
  }, []);

  const animateOut = (href: string) => {
    animatePageOut(href, router);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      animatePageIn();
    };

    handleRouteChange();
  }, [pathname, isDesktop]);

  return (
    <TransitionContext.Provider value={{ animateOut }}>
      {isDesktop && (
        <div className="fixed w-screen h-screen pointer-events-none">
          <div className="rotate-12 origin-right relative z-10 w-screen h-screen">
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
            className="fixed top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white z-[1001] text-4xl uppercase leading-3 tracking-widest text-semibold opacity-0"
          >
            {currentRoute}
          </div>
        </div>
      )}
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionProvider;
