"use client";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="h-full contact__container"
      initial={{ x: "-20vw" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
    >
      <div>Contact</div>
    </motion.div>
  );
};

export default Contact;
