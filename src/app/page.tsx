"use client";
import { animatePageOut } from "@/lib/animations";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClickButtonPortfolio = () => {
    animatePageOut("/portfolio", router);
  };

  return (
    <motion.div
      className="home-page__container h-[calc(100vh-70px)]"
      initial={{ x: "-20vw" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
    >
      <div className="h-full flex justify-center items-center gap-8">
        <div className="flex flex-col gap-9 items-center text-center max-w-[800px] justify-center flex-auto tracking-wider">
          <div className="text-6xl font-semibold">Hi, I'm Halyamov Kyrylo.</div>
          <div className="text-lg leading-6">
            A dynamic and results-driven Web Developer with a proven track
            record in crafting and overseeing high-performance Websites and Web
            Applications. I am dedicated to transforming visions into impactful,
            user-centric online experiences that exceed expectations and propel
            businesses to new heights.
          </div>
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
