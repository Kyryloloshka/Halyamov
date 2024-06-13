"use client";
import { motion, useInView } from "framer-motion";
import "./style.scss";
import { useRef } from "react";
import Image from "next/image";
import SkillBlock from "@/components/SkillBlock";

const skills = [
  {
    title: "React",
    description:
      "React is a popular JavaScript library for building user interfaces. Developed by Facebook, React allows developers to create reusable UI components that efficiently update in response to data changes.",
  },
  {
    title: "Next.js",
    description:
      "Next.js is a powerful React framework that allows for efficient server-side rendering and simplified client-side routing. With its built-in features like automatic code splitting and prefetching, Next.js enables me to build fast and highly optimized web applications.",
  },
  {
    title: "Tailwind CSS",
    description:
      "Tailwind CSS is a utility-first CSS framework that streamlines the process of building responsive and customizable user interfaces. By composing styles from a predefined set of utility classes, Tailwind CSS empowers me to create consistent designs with minimal effort.",
  },
  {
    title: "Three.js",
    description:
      "Three.js is a JavaScript library for creating 3D graphics and animations in web browsers. It provides a simple API for rendering 3D scenes using WebGL, allowing developers to create immersive visual experiences directly in the browser.",
  },
  {
    title: "Firebase",
    description:
      "Firebase is a comprehensive platform for building mobile and web applications developed by Google. It offers a variety of services, including authentication, real-time database, cloud storage, hosting, and more.",
  },
];

const About = () => {
  const skillRef = useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillRef, {
    margin: "-100px",
    once: true,
  });

  const expirienceRef = useRef<HTMLDivElement>(null);
  const isExpirienceRefInView = useInView(expirienceRef, {
    margin: "-180px",
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
          <div className="flex flex-col gap-12 justify-center min-h-screen max-w-[600px]">
            <h1 className="uppercase text-2xl font-semibold hover:left-3 relative left-0 transition-[left]">
              Biography
            </h1>
            <p className="text-lg relative hover:left-2 left-0 transition-[left]">
              My name is Halyamov Kyrylo, and I am a passionate and creative
              frontend developer from Kharkiv, Ukraine, with a wealth of
              experience in crafting high-quality web applications. I am
              dedicated to continuously enhancing user experiences through
              aesthetic and functional design, always tailored to meet the
              clients&apos; needs. I possess a profound understanding of UI/UX
              principles and the agility to adapt to rapidly evolving project
              requirements.
            </p>
            <span className="italic relative hover:left-2 left-0 transition-[left]">
              In the realm of frontend development, beauty and functionality are
              not just goals; they are the essence of my craft.
            </span>
            <div className="self-end relative hover:scale-[1.03] transition-[scale]">
              <Image
                width={100}
                height={100}
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
              initial={{ x: "-200px", opacity: 0 }}
              animate={isSkillRefInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.4, ease: "backOut" }}
              className="uppercase text-2xl font-semibold hover:left-3 relative left-0 transition-[left]"
            >
              How I Do What I Do
            </motion.h1>
            <ul className="flex flex-col gap-9">
              {skills.map((skill, index) => (
                <SkillBlock key={index} {...skill} />
              ))}
            </ul>
          </div>
          <div
            ref={expirienceRef}
            className="flex flex-col gap-12 justify-center"
          >
            <motion.h1
              initial={{ x: "-200px", opacity: 0 }}
              animate={isExpirienceRefInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.4, ease: "backOut" }}
              className="uppercase text-2xl font-semibold hover:left-3 relative left-0 transition-[left]"
            >
              Experience
            </motion.h1>
            <ul className="max-w-[500px] sm:max-w-[700px]">
              <li className="flex justify-between md:h-48">
                <motion.div
                  initial={{ x: "-200px", opacity: 0 }}
                  animate={isExpirienceRefInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.1, duration: 0.4, ease: "backOut" }}
                  className="w-[calc(100%-5rem)] pb-12 sm:pb-0 sm:w-[calc((100%-5rem)/2)] flex flex-col gap-1 items-start"
                >
                  <h4 className="bg-white font-semibold rounded-b-lg rounded-s-lg p-3 hover:left-3 relative left-0 transition-[left]">
                    My Journey of Growth
                  </h4>
                  <p className="p-3 text-small italic hover:left-1 relative left-0 transition-[left]">
                    In the quest for personal and professional growth, I
                    embarked on a journey filled with challenges and triumphs.
                    With unwavering determination, I delved into the world of
                    web development, eager to hone my skills and make a
                    meaningful impact.
                  </p>
                  <div className="p-3 text-red-400 text-sm font-semibold hover:left-1 relative left-0 transition-[left]">
                    2024 - Present
                  </div>
                  <div className="py-1 px-3 mx-3 rounded bg-white text-sm font-semibold hover:left-1 relative left-0 transition-[left]">
                    My Endeavors
                  </div>
                </motion.div>
                <div className="w-5 flex justify-center">
                  <div className="w-1 h-full bg-gray-500 rounded-t relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-2"></div>
                  </div>
                </div>
                <div className="sm:w-[calc((100%-5rem)/2)] flex flex-col gap-1 items-start"></div>
              </li>
              <li className="flex justify-between sm:h-48">
                <div className="hidden sm:w-[calc((100%-5rem)/2)] sm:flex flex-col gap-1 items-start"></div>
                <div className="hidden w-5 sm:flex justify-center">
                  <div className="w-1 h-full bg-gray-500 relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-2"></div>
                  </div>
                </div>
                <motion.div
                  initial={{ x: "-200px", opacity: 0 }}
                  animate={isExpirienceRefInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.2, duration: 0.4, ease: "backOut" }}
                  className="w-[calc(100%-5rem)] pb-12 sm:pb-0 sm:w-[calc((100%-5rem)/2)] flex flex-col gap-1 items-start"
                >
                  <h4 className="bg-white font-semibold rounded-b-lg rounded-s-lg p-3 hover:left-3 relative left-0 transition-[left]">
                    University
                  </h4>
                  <p className="p-3 text-small italic hover:left-1 relative left-0 transition-[left]">
                    Admission to the programming specialty opens up many
                    opportunities for me. Here I meet like-minded people, with
                    whom I begin to develop many times faster. Here I get
                    general knowledge from different corners of this huge
                    programming continent.
                  </p>
                  <div className="p-3 text-red-400 text-sm font-semibold hover:left-1 relative left-0 transition-[left]">
                    2023 - Present
                  </div>
                  {/* <div className="py-1 px-3 mx-3 rounded bg-white text-sm font-semibold hover:left-1 relative left-0 transition-[left]">
                    Company
                  </div> */}
                </motion.div>
                <div className="sm:hidden w-5 flex justify-center">
                  <div className="w-1 h-full bg-gray-500 relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-2"></div>
                  </div>
                </div>
                <div className="sm:hidden sm:w-[calc((100%-5rem)/2)] flex flex-col gap-1 items-start"></div>
              </li>
              <li className="flex justify-between">
                <motion.div
                  initial={{ x: "-200px", opacity: 0 }}
                  animate={isExpirienceRefInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.3, duration: 0.4, ease: "backOut" }}
                  className="w-[calc(100%-5rem)]   sm:w-[calc((100%-5rem)/2)] flex flex-col gap-1 items-start"
                >
                  <h4 className="bg-white font-semibold rounded-b-lg rounded-s-lg p-3 hover:left-3 relative left-0 transition-[left]">
                    School
                  </h4>
                  <p className="p-3 text-small italic hover:left-1 relative left-0 transition-[left]">
                    The birth of my passion for programming. I&apos;m trying
                    myself in different areas of IT, and I&apos;m trying to
                    implement my initial projects. I participate in various
                    district and regional olympiads, and I am gaining confidence
                    before the big challenge - to become a professional
                  </p>
                  <div className="p-3 text-red-400 text-sm font-semibold hover:left-1 relative left-0 transition-[left]">
                    Before 2023
                  </div>
                  {/* <div className="py-1 px-3 mx-3 rounded bg-white text-sm font-semibold hover:left-1 relative left-0 transition-[left]">
                    Company
                  </div> */}
                </motion.div>
                <div className="w-5 flex justify-center">
                  <div className="w-1 h-full bg-gray-500 rounded-b relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-2"></div>
                  </div>
                </div>
                <div className="sm:w-[calc((100%-5rem)/2)] flex flex-col gap-1 items-start"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
