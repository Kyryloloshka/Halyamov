import React, { useRef } from "react";
import DemoButton from "../DemoButton";
import Image from "next/image";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";

export type PortfolioItem = {
  title: string;
  desc: string;
  img: string;
  link: string;
  linkGh: string;
};

const PortfolioItem = ({
  index,
  item,
}: {
  index: number;
  item: PortfolioItem;
}) => {
  const ref = useRef<any>(null);
  const isRefInView = useInView(ref, { margin: "-200px", once: true });
  const initialPosition = index % 2 === 0 ? "-100px" : "100px";
  return (
    <motion.div
      className={`flex flex-col gap-8 ${
        index % 2 === 0 ? "text-start items-start" : "text-end items-end"
      }`}
      ref={ref}
    >
      <motion.h1
        initial={{ x: initialPosition, opacity: 0 }}
        animate={isRefInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "backOut" }}
        className="text-adaptive-title font-bold text-dark-5"
      >
        {item.title}
      </motion.h1>
      <motion.div
        initial={{ x: initialPosition, opacity: 0 }}
        animate={isRefInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: "backOut" }}
        className=""
      >
        <DemoButton href={item.link}>
          <Image src={item.img} alt="" fill />
        </DemoButton>
      </motion.div>
      <motion.p
        initial={{ x: initialPosition, opacity: 0 }}
        animate={isRefInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4, ease: "backOut" }}
        className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]"
      >
        {item.desc}
      </motion.p>
      <motion.p
        initial={{ x: initialPosition, opacity: 0 }}
        animate={isRefInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6, ease: "backOut" }}
        className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]"
      >
        <Link target="_blank" href={item.linkGh}>
          <button
            type="button"
            className="py-2 px-4 bg-secondary-500 rounded-md text-dark-3 hover:scale-105 transition"
          >
            View in GitHub
          </button>
        </Link>
      </motion.p>
    </motion.div>
  );
};

export default PortfolioItem;
