"use client";
import { motion } from "framer-motion";
import "./style.scss";
import Link from "@/components/Link";
import PortfolioItem from "@/components/PortfolioItem";
import React, { useLayoutEffect } from "react";
import { scrollToTop } from "@/lib/helpers";
import { projects } from "@/constants";

const Portfolio = () => {
  useLayoutEffect(() => {
    scrollToTop();
  }, []);

  return (
    <motion.div
      className="h-full relative protfolio__container"
      initial={{ x: "-20vw" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
    >
      <section className="text-dark-4 ">
        <motion.div
          className={`min-h-screen flex items-center justify-center text-8xl text-center my-works-title`}
        >
          My Works
        </motion.div>
        <div className="flex flex-col gap-[100px]">
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <PortfolioItem item={project} index={index} />
            </React.Fragment>
          ))}
        </div>
      </section>
      <section className="max-w-screen min-h-screen flex justify-center flex-col gap-16 items-center text-center">
        <h3 className=" text-dark-5 if-interested-title">If interested</h3>
        <div className="relative">
          <Link href="/contact" className="hire-me-button" label="contact">
            hire me
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Portfolio;
