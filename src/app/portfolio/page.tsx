"use client";
import DemoButton from "@/components/DemoButton";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import "./style.scss";

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
  const ref = useRef<any>();

  const { scrollYProgress } = useScroll({ target: ref });
  const xScroll = useTransform(scrollYProgress, [0, 1], ["30%", "-75%"]);

  return (
    <motion.div
      className="h-full relative"
      initial={{ x: "-20vw" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
    >
      <div className="h-[600vh] text-dark-4" ref={ref}>
        <div className="h-[calc(100vh-60px)] flex items-center justify-center text-8xl text-center ">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x: xScroll }} className="flex gap-[100px]">
            {items.map((item) => (
              <div className={`flex items-center`} key={item.id}>
                <div className="flex flex-col gap-8  self-start">
                  <h1 className="text-adaptive-title font-bold text-dark-5">
                    {item.title}
                  </h1>
                  <DemoButton href={item.link}>
                    <Image src={item.img} alt="" fill />
                  </DemoButton>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
