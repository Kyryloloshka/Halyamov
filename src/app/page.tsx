"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="home-page__container h-full"
      initial={{ x: "-20vw" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
    >
      <div className="min-h-full">
        <div className="h-full flex justify-center items-center gap-8">
          <div className="h-[300px] min-h-[300px] flex-auto flex justify-center">
            <div className="bg-primary-600 rounded-full min-h-[250px] max-w-[300px] aspect-square"></div>
          </div>
          <div className="flex flex-col gap-6 items-left text-left justify-center flex-auto tracking-wider">
            <div className="text-6xl font-semibold">Lorem, ipsum dolor.</div>
            <div className="text-md leading-6">
              um blanditiis, nam dolore voluptatum possimus, officiis laborum.
              Ut praesentium est id commodi officia, sequi possimus rem iusto
              ipsam blanditiis qui rerum dolorum deleniti fuga perspiciatis
              earum voluptatum tempora incidunt molestias ab quae expedita atque
              asperiores?
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
