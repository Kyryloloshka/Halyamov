"use client";
import { motion, useInView } from "framer-motion";
import "./style.scss";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import SkillBlock from "@/components/SkillBlock";
import { scrollToTop } from "@/lib/helpers";
import Link from "@/components/Link";

const skills = [
  {
    title: "React",
    description:
      "React is a core part of my development toolkit. I use it to build dynamic, reusable user interfaces for web applications. Its component-based architecture allows me to efficiently manage complex UIs and handle data updates seamlessly.",
  },
  {
    title: "Next.js",
    description:
      "Next.js has been my go-to framework for creating highly optimized web applications. I leverage its server-side rendering and static site generation capabilities to improve performance and SEO.",
  },
  {
    title: "Tailwind CSS",
    description:
      "I use Tailwind CSS to create modern, responsive designs with ease. Its utility-first approach allows me to focus on building unique interfaces without worrying about repetitive CSS.",
  },
  {
    title: "Three.js",
    description:
      "Three.js has been a game-changer for adding 3D elements and animations to my projects. I’ve used it to create immersive visualizations and interactive experiences directly in the browser.",
  },
  {
    title: "Firebase",
    description:
      "Firebase provides me with everything I need for backend development. I’ve used it for authentication, real-time database, and hosting in several projects, allowing me to quickly prototype and deploy apps without setting up complex server infrastructures.",
  },
  {
    title: "Vue",
    description:
      "Vue is one of my favorite frameworks for building user interfaces. I love its simplicity and flexibility, which make it easy to integrate into projects.",
  },
  {
    title: "Nuxt.js",
    description:
      "Nuxt.js takes my Vue development to the next level. I’ve used it for building server-side rendered applications and static sites that are fast, secure, and SEO-friendly.",
  },
  {
    title: "Astro",
    description:
      "Astro is a tool I turn to when building ultra-fast static websites. I appreciate its ability to integrate multiple frameworks like React and Vue seamlessly. Using Astro, I’ve created lightweight, high-performing websites that prioritize user experience and minimal client-side JavaScript.",
  },
];

const experiences = [
  {
    title: "First Job",
    description:
      "My first commercial experience at IncDev was an exciting leap into the professional world. I took on the role of a junior developer, collaborating with a talented team to create and maintain web applications. This role allowed me to apply my knowledge in real-world projects, refine my coding skills, and work with clients, which gave me invaluable experience in both technical and communication aspects.",
    date: "2024 - Present",
    company: "IncDev",
  },
  {
    title: "My Journey of Growth",
    description:
      "In the quest for personal and professional growth, I embarked on a journey filled with challenges and triumphs. With unwavering determination, I delved into the world of web development, eager to hone my skills and make a meaningful impact.",
    date: "2024 - Present",
    company: "My Endeavors",
  },
  {
    title: "University",
    description:
      "Admission to the programming specialty opens up many opportunities for me. Here I meet like-minded people, with whom I begin to develop many times faster. Here I get general knowledge from different corners of this huge programming continent.",
    date: "2023 - Present",
    company: "",
  },
  {
    title: "School",
    description:
      "The birth of my passion for programming. I'm trying myself in different areas of IT, and I'm trying to implement my initial projects. I participate in various district and regional olympiads, and I am gaining confidence before the big challenge - to become a professional",
    date: "Before 2023",
    company: "",
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

  useLayoutEffect(() => {
    scrollToTop();
  }, []);
  return (
    <motion.div
      className="about__container h-full pt-6"
      initial={{ x: "-20vw" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
    >
      <div className="pb-36">
        <div className="flex flex-col gap-24 text-dark-2">
          <div className="flex flex-col justify-center min-h-screen max-w-[600px] adaptive-gap-about">
            <h1 className="uppercase text-2xl font-semibold hover:left-3 relative left-0 transition-[left]">
              Biography
            </h1>
            <p className="text-lg relative hover:left-2 left-0 transition-[left]">
              My name is Halyamov Kyrylo, and I am a passionate and creative web
              developer from Kharkiv, Ukraine, with a wealth of experience in
              crafting high-quality applications. I am dedicated to continuously
              enhancing user experiences through aesthetic and functional
              design, always tailored to meet the clients&apos; needs. I possess
              a profound understanding of UI/UX principles and the agility to
              adapt to rapidly evolving project requirements.
            </p>
            <span className="italic relative hover:left-2 left-0 transition-[left]">
              In the realm of web development, beauty and functionality are not
              just goals; they are the essence of my craft.
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
              {experiences.map((experience, index) => (
                <li key={experience.title} className="flex justify-between sm:h-48">
                  {index % 2 !== 0 && (
                    <>
                      <div className="hidden sm:w-[calc((100%-5rem)/2)] sm:flex flex-col gap-1 items-start"></div>
                      <div className="hidden w-5 sm:flex justify-center">
                        <div className="w-1 h-full bg-gray-500 relative">
                          <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-2"></div>
                        </div>
                      </div>
                    </>
                  )}
                  <motion.div
                    initial={{ x: "-200px", opacity: 0 }}
                    animate={isExpirienceRefInView ? { x: 0, opacity: 1 } : {}}
                    transition={{
                      delay: 0.1 * index,
                      duration: 0.4,
                      ease: "backOut",
                    }}
                    className="w-[calc(100%-5rem)] pb-12 sm:pb-0 sm:w-[calc((100%-5rem)/2)] flex flex-col gap-1 items-start"
                  >
                    <h4
                      className={`bg-white font-semibold rounded-b-lg  p-3 hover:left-3 relative left-0 transition-[left] ${
                        index % 2 === 0 ? "rounded-r-lg" : "rounded-s-lg"
                      }`}
                    >
                      {experience.title}
                    </h4>
                    <p className="p-3 text-small italic hover:left-1 relative left-0 transition-[left]">
                      {experience.description}
                    </p>
                    <div className="p-3 text-red-500 text-sm font-semibold hover:left-1 relative left-0 transition-[left]">
                      {experience.date}
                    </div>
                    {experience.company && (
                      <div className="py-1 px-3 mx-3 rounded bg-white text-sm font-semibold hover:left-1 relative left-0 transition-[left]">
                        {experience.company}
                      </div>
                    )}
                  </motion.div>
                  <>
                    <div
                      className={`w-5 flex justify-center ${
                        index % 2 !== 0 ? "sm:hidden" : ""
                      }`}
                    >
                      <div className="w-1 h-full bg-gray-500 rounded-t relative">
                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-2"></div>
                      </div>
                    </div>
                    <div
                      className={`sm:w-[calc((100%-5rem)/2)] flex flex-col gap-1 items-start ${
                        index % 2 !== 0 ? "sm:hidden" : ""
                      }`}
                    ></div>
                  </>
                </li>
              ))}
            </ul>
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
        </div>
        <section className="relative pt-16 flex justify-center flex-col gap-16 items-center text-center">
          <Link href="/contact" className="hire-me-button" label="contact">
            hire me
          </Link>
        </section>
      </div>
    </motion.div>
  );
};

export default About;
