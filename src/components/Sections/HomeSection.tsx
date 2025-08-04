import React from "react";
import { TextEffect } from "@/components/ui/TextEffect";
import { smoothScrollTo } from "@/lib/smoothScroll";

const HomeSection = () => {
  const handlePortfolioClick = (e: React.MouseEvent) => {
    e.preventDefault();
    smoothScrollTo('#portfolio');
  };

  return (
    <section id="home" className="min-h-screen flex justify-center items-center">
      <div className="h-full flex justify-center items-center gap-8">
        <div className="flex flex-col gap-9 items-center text-center max-w-[800px] justify-center flex-auto tracking-wider">
                  <div className="font-semibold text-dark-4 dark:text-light-1 home-title">
          Hi, I&apos;m Halyamov Kyrylo.
        </div>
          <TextEffect
            per="word"
            preset="fade"
            as="p"
            delay={0.05}
            className="text-lg leading-6 dark:text-light-2"
          >
            A dynamic and results-driven Web Developer with a proven track
            record in crafting and overseeing high-performance Websites and Web
            Applications. I am dedicated to transforming visions into impactful,
            user-centric online experiences that exceed expectations and propel
            businesses to new heights.
          </TextEffect>
          <button
            onClick={handlePortfolioClick}
            className="text-xl font-medium text-light-2 bg-primary-500 dark:bg-primary-700 rounded-xl px-12 py-4 hover:translate-y-[-4px] transition hover:bg-primary-600 dark:hover:bg-primary-800 tracking-widest uppercase shadow-lg dark:shadow-primary-800/50"
          >
            Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;