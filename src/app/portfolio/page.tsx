"use client";
import { motion } from "framer-motion";
import "./style.scss";
import Link from "@/components/Link";
import PortfolioItem from "@/components/PortfolioItem";
import React, { useLayoutEffect } from "react";
import { scrollToTop } from "@/lib/helpers";

const items = [
  {
    id: 1,
    title: "3D tic tac toe",
    desc: "Innovative 3D tic tac toe game built with Three.js and Next.js. It's a fun game to play with friends and family.",
    img: "/assets/images/tic-tac-toe.png",
    link: "https://ddd-tic-tac-toe.vercel.app/",
  },
  {
    id: 2,
    title: "Tohachat App",
    desc: "This is a social media application built with Next.js and Appwrite database. That allows users to post messages and images, and also like and comment on posts, edit their profile, and more.",
    img: "/assets/images/tohachat.png",
    link: "https://tohachat.vercel.app/",
  },
  {
    id: 3,
    title: "Communi Chat App",
    desc: "This is a chat application built with Next.js and Firebase. It allows users to chat with friends and family.",
    img: "/assets/images/communi.png",
    link: "https://communi-ochre.vercel.app/",
  },
  {
    id: 4,
    title: "Chess Game",
    desc: "This is a chess game built with Next.js and Firebase.",
    img: "/assets/images/chessmate.png",
    link: "https://chess-2-0-next-js.vercel.app/play",
  },
  {
    id: 5,
    title: "This Portfolio",
    desc: "This portfolio is built with Next.js, Framer Motion and Gsap. It's a responsive and interactive portfolio that showcases my works and skills.",
    img: "/assets/images/portfolio.png",
    link: "/",
  },
];

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
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <PortfolioItem item={item} index={index} />
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
