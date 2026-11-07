import React from "react";
import SkillBlock from "@/components/SkillBlock";
import { reveal } from "@/lib/reveal";

type Skill = { title: string; description: string };
type Experience = {
  title: string;
  description: string;
  date: string;
  company?: string;
};

const nudge = "hover:translate-x-2 transition-transform";
const nudgeSm = "hover:translate-x-1 transition-transform";
const nudgeLg = "hover:translate-x-3 transition-transform";

const TimelineDot = ({ className = "" }: { className?: string }) => (
  <div className={`w-1 h-full bg-gray-500 relative ${className}`}>
    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-2"></div>
  </div>
);

const AboutSection = ({
  skills,
  experiences,
}: {
  skills: Skill[];
  experiences: Experience[];
}) => (
  <section id="about" className="min-h-screen pt-6">
    <div className="h-full">
      <div className="pb-36">
        <div className="flex flex-col gap-24 text-dark-2 dark:text-light-1">
          <div className="flex flex-col justify-center max-w-[600px] adaptive-gap-about">
            <h2 className={`uppercase text-2xl font-semibold ${nudgeLg}`}>
              Biography
            </h2>
            <p className={`text-lg ${nudge}`}>
              My name is Halyamov Kyrylo, and I am a passionate and creative web
              developer from Kharkiv, Ukraine, with a wealth of experience in
              crafting high-quality applications. I am dedicated to continuously
              enhancing user experiences through aesthetic and functional
              design, always tailored to meet the clients&apos; needs. I possess
              a profound understanding of UI/UX principles and the agility to
              adapt to rapidly evolving project requirements.
            </p>
            <span className={`italic ${nudge}`}>
              In the realm of web development, beauty and functionality are not
              just goals; they are the essence of my craft.
            </span>
          </div>
          <div className="flex flex-col gap-12 justify-center">
            <h2
              {...reveal()}
              className={`uppercase text-2xl font-semibold ${nudgeLg}`}
            >
              Experience
            </h2>
            <ul className="max-w-[500px] sm:max-w-[700px]">
              {experiences.map((experience, index) => (
                <li key={experience.title} className="flex justify-between sm:h-48">
                  {index % 2 !== 0 && (
                    <>
                      <div className="hidden sm:w-[calc((100%-5rem)/2)] sm:flex flex-col gap-1 items-start"></div>
                      <div className="hidden w-5 sm:flex justify-center">
                        <TimelineDot />
                      </div>
                    </>
                  )}
                  <div
                    {...reveal({ delay: 0.1 * index })}
                    className="w-[calc(100%-5rem)] pb-12 sm:pb-0 sm:w-[calc((100%-5rem)/2)] flex flex-col gap-1 items-start"
                  >
                    <h3
                      className={`bg-white dark:bg-dark-3 font-semibold rounded-b-lg p-3 ${nudgeLg} ${
                        index % 2 === 0 ? "rounded-r-lg" : "rounded-l-lg"
                      }`}
                    >
                      {experience.title}
                    </h3>
                    <p className={`p-3 text-small italic ${nudgeSm}`}>
                      {experience.description}
                    </p>
                    <div className={`p-3 text-red-500 text-sm font-semibold ${nudgeSm}`}>
                      {experience.date}
                    </div>
                    {experience.company && (
                      <div
                        className={`py-1 px-3 mx-3 rounded bg-white dark:bg-dark-3 text-sm font-semibold ${nudgeSm}`}
                      >
                        {experience.company}
                      </div>
                    )}
                  </div>
                  <div
                    className={`w-5 flex justify-center ${
                      index % 2 !== 0 ? "sm:hidden" : ""
                    }`}
                  >
                    <TimelineDot className="rounded-t" />
                  </div>
                  <div
                    className={`sm:w-[calc((100%-5rem)/2)] flex flex-col gap-1 items-start ${
                      index % 2 !== 0 ? "sm:hidden" : ""
                    }`}
                  ></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-12 justify-center max-w-[600px]">
            <h2
              {...reveal()}
              className={`uppercase text-2xl font-semibold ${nudgeLg}`}
            >
              How I Do What I Do
            </h2>
            <ul className="flex flex-col gap-9">
              {skills.map((skill) => (
                <SkillBlock key={skill.title} {...skill} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
