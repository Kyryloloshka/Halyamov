"use client";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ x: "-20vw" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
    >
      <div>Portfolio</div>
    </motion.div>
  );
};

export default Portfolio;
