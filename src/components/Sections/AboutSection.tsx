import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SkillBlock from "@/components/SkillBlock";

interface AboutSectionProps {
  skills: any[];
  experiences: any[];
  skillRef: React.RefObject<HTMLDivElement>;
  expirienceRef: React.RefObject<HTMLDivElement>;
  isSkillRefInView: boolean;
  isExpirienceRefInView: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  skills,
  experiences,
  skillRef,
  expirienceRef,
  isSkillRefInView,
  isExpirienceRefInView,
}) => (
  <section id="about" className="min-h-screen pt-6">
    <div
      className="h-full"
    >
      <div className="pb-36">
        <div className="flex flex-col gap-24 text-dark-2 dark:text-light-1">
          <div className="flex flex-col justify-center max-w-[600px] adaptive-gap-about">
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
                          className={`bg-white dark:bg-dark-3 font-semibold rounded-b-lg  p-3 hover:left-3 relative left-0 transition-[left] ${
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
                      <div className="py-1 px-3 mx-3 rounded bg-white dark:bg-dark-3 text-sm font-semibold hover:left-1 relative left-0 transition-[left]">
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
      </div>
    </div>
  </section>
);

export default AboutSection;