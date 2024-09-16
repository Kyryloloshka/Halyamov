"use client";
import { TextEffect } from "@/components/ui/TextEffect";
import { animatePageOut } from "@/lib/animations";
import { linksActions, useActionCreators } from "@/state";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const actions = useActionCreators(linksActions);

  const handleClickButtonPortfolio = () => {
    actions.setCurrentPageLabel("Projects");
    actions.setCurrentHref("/portfolio");
    animatePageOut("/portfolio", router);
  };

  return (
    <motion.div
      className="home-page__container min-h-screen flex justify-center items-center"
      initial={{ x: "-20vw" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
    >
      <div className="h-full flex justify-center items-center gap-8">
        <div className="flex flex-col gap-9 items-center text-center max-w-[800px] justify-center flex-auto tracking-wider">
          <div className="font-semibold text-dark-4 home-title">
            Hi, I&apos;m Halyamov Kyrylo.
          </div>
          <TextEffect
            per="word"
            preset="fade"
            as="p"
            delay={0.05}
            className="text-lg leading-6"
          >
            A dynamic and results-driven Web Developer with a proven track
            record in crafting and overseeing high-performance Websites and Web
            Applications. I am dedicated to transforming visions into impactful,
            user-centric online experiences that exceed expectations and propel
            businesses to new heights.
          </TextEffect>
          <button
            onClick={handleClickButtonPortfolio}
            className="text-xl font-medium text-light-2 bg-primary-500 rounded-xl px-12 py-4 hover:translate-y-[-4px] transition hover:bg-primary-600 tracking-widest uppercase"
          >
            Projects
          </button>
        </div>
      </div>
    </motion.div>
  );
}
