"use client";
import { motion, useInView } from "framer-motion";
import "./style.scss";
import { useRef } from "react";
import Image from "next/image";

const About = () => {
  const skillRef = useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillRef, { margin: "-50px", once: true });
  
  const expirienceRef = useRef<HTMLDivElement>(null);
  const isExpirienceRefInView = useInView(expirienceRef, {
    margin: "-50px",
    once: true,
  });
  return (
    <motion.div
      className="about__container h-full pt-6"
      initial={{ x: "-20vw" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
    >
      <div className="pb-36">
        <div className="flex flex-col gap-24 text-dark-2">
          <div className="flex flex-col gap-12 justify-center min-h-[calc(100vh-80px)] max-w-[600px]">
            <h1 className="uppercase text-2xl font-semibold">Biography</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
              odit quo sequi sapiente iste quidem perspiciatis! Expedita
              consequatur unde adipisci deserunt obcaecati placeat dicta,
              dolorum rem reprehenderit quam corporis ullam vero dolor eaque
              laudantium architecto rerum officiis nulla! Iste asperiores sint
              at sunt dignissimos eveniet excepturi omnis non ullam neque,
            </p>
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              nisi delectus quasi, temporibus ab corrupti?
            </span>
            <div className="self-end">
              <Image
                width={100}
                className="stroke-5"
                src="assets/svgs/sign.svg"
                alt="sign"
              />
            </div>
          </div>
          <div
            ref={skillRef}
            className="flex flex-col gap-12 justify-center max-w-[600px]"
          >
            <motion.h1
              initial={{ x: "-600px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ duration: 0.4, ease: "backOut" }}
              className="uppercase text-2xl font-semibold"
            >
              How i do what i do
            </motion.h1>
            <ul className="flex flex-col gap-9">
              <motion.li
                initial={{ x: "-600px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.4, ease: "backOut" }}
                className="flex flex-col gap-3"
              >
                <h4 className="text-[1.5rem]">Next.js</h4>
                <p className="text-lg">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Autem repellat deleniti fugiat ullam natus architecto dolore
                  earum corporis amet, ipsa quibusdam optio, unde nisi illum
                  aspernatur numquam perferendis! Corrupti, placeat.
                </p>
              </motion.li>
              <motion.li
                initial={{ x: "-600px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.4, ease: "backOut" }}
                className="flex flex-col gap-3"
              >
                <h4 className="text-[1.5rem]">Next.js</h4>
                <p className="text-lg">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Autem repellat deleniti fugiat ullam natus architecto dolore
                  earum corporis amet, ipsa quibusdam optio, unde nisi illum
                  aspernatur numquam perferendis! Corrupti, placeat.
                </p>
              </motion.li>
            </ul>
          </div>
          <div
            ref={expirienceRef}
            className="flex flex-col gap-12 justify-center"
          >
            <motion.h1
              initial={{ x: "-600px" }}
              animate={isExpirienceRefInView ? { x: 0 } : {}}
              transition={{ duration: 0.4, ease: "backOut" }}
              className="uppercase text-2xl font-semibold"
            >
              Experience
            </motion.h1>
            <ul className="max-w-[700px]">
              <li className="flex justify-between h-48">
                <motion.div
                  initial={{ x: "-600px" }}
                  animate={isExpirienceRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.1, duration: 0.4, ease: "backOut" }}
                  className="w-[calc((100%-5rem)/2)] flex flex-col gap-1 items-start"
                >
                  <h4 className="bg-white font-semibold rounded-b-lg rounded-s-lg p-3">
                    Tleasdf
                  </h4>
                  <p className="p-3 text-small italic">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sint aperiam oasdfflorem50ficiis molestiae assumenda
                    voluptatibus reprehenderit! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Atque, laudantium delectus
                    veritatis ipsam a placeat optio quis expedita dolorum sit
                    repellendus eius animi possimus tempora, consectetur porro
                    cupiditate voluptatem aspernatur unde distinctio tempore sed
                    fuga eos explicabo.
                  </p>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  <div className="py-1 px-3 mx-3 rounded bg-white text-sm font-semibold">
                    Company
                  </div>
                </motion.div>
                <div className="w-5 flex justify-center">
                  <div className="w-1 h-full bg-gray-500 rounded-t relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-2"></div>
                  </div>
                </div>
                <div className="w-[calc((100%-5rem)/2)] flex flex-col gap-1 items-start"></div>
              </li>
              <li className="flex justify-between h-48">
                <div className="w-[calc((100%-5rem)/2)] flex flex-col gap-1 items-start"></div>
                <div className="w-5 flex justify-center">
                  <div className="w-1 h-full bg-gray-500 relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-2"></div>
                  </div>
                </div>
                <motion.div
                  initial={{ x: "-600px" }}
                  animate={isExpirienceRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.2, duration: 0.4, ease: "backOut" }}
                  className="w-[calc((100%-5rem)/2)]  flex flex-col gap-1 items-start"
                >
                  <h4 className="bg-white font-semibold rounded-b-lg rounded-s-lg p-3">
                    University
                  </h4>
                  <p className="p-3 text-small italic">
                    Admission to the programming specialty opens up many
                    opportunities for me. Here I meet like-minded people, with
                    whom I begin to develop many times faster. Here I get
                    general knowledge from different corners of this huge
                    programming continent.
                  </p>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023 - Present
                  </div>
                  {/* <div className="py-1 px-3 mx-3 rounded bg-white text-sm font-semibold">
                    Company
                  </div> */}
                </motion.div>
              </li>
              <li className="flex justify-between">
                <motion.div
                  initial={{ x: "-600px" }}
                  animate={isExpirienceRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.4, ease: "backOut" }}
                  className="w-[calc((100%-5rem)/2)] flex flex-col gap-1 items-start"
                >
                  <h4 className="bg-white font-semibold rounded-b-lg rounded-s-lg p-3">
                    School
                  </h4>
                  <p className="p-3 text-small italic">
                    The birth of my passion for programming. I&apos;m trying myself
                    in different areas of IT, and I&apos;m trying to implement my
                    initial projects. I participate in various district and
                    regional olympiads, and I am gaining confidence before the
                    big challenge - to become a professional
                  </p>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Before 2023
                  </div>
                  {/* <div className="py-1 px-3 mx-3 rounded bg-white text-sm font-semibold">
                    Company
                  </div> */}
                </motion.div>
                <div className="w-5 flex justify-center">
                  <div className="w-1 h-full bg-gray-500 rounded-b relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-2"></div>
                  </div>
                </div>
                <div className="w-[calc((100%-5rem)/2)] flex flex-col gap-1 items-start"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
