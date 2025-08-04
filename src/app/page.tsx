"use client";
import React from "react";
import { useRef as useReactRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import "./page.scss";
import HomeSection from "@/components/Sections/HomeSection";
import AboutSection from "@/components/Sections/AboutSection";
import PortfolioSection from "@/components/Sections/PortfolioSection";
import ContactSection from "@/components/Sections/ContactSection";
import { projects } from "@/constants";

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
      "Three.js has been a game-changer for adding 3D elements and animations to my projects. I've used it to create immersive visualizations and interactive experiences directly in the browser.",
  },
  {
    title: "Firebase",
    description:
      "Firebase provides me with everything I need for backend development. I've used it for authentication, real-time database, and hosting in several projects, allowing me to quickly prototype and deploy apps without setting up complex server infrastructures.",
  },
  {
    title: "Vue",
    description:
      "Vue is one of my favorite frameworks for building user interfaces. I love its simplicity and flexibility, which make it easy to integrate into projects.",
  },
  {
    title: "Nuxt.js",
    description:
      "Nuxt.js takes my Vue development to the next level. I've used it for building server-side rendered applications and static sites that are fast, secure, and SEO-friendly.",
  },
  {
    title: "Astro",
    description:
      "Astro is a tool I turn to when building ultra-fast static websites. I appreciate its ability to integrate multiple frameworks like React and Vue seamlessly. Using Astro, I've created lightweight, high-performing websites that prioritize user experience and minimal client-side JavaScript.",
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

export default function Home() {
  const skillRef = useReactRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillRef, {
    margin: "-100px",
    once: true,
  });

  const expirienceRef = useReactRef<HTMLDivElement>(null);
  const isExpirienceRefInView = useInView(expirienceRef, {
    margin: "-180px",
    once: true,
  });

  // Contact form state
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const form = useReactRef<HTMLFormElement>(null);

  const emailSchema = z.object({
    user_message: z.string().min(1, "Message cannot be empty"),
    user_email: z.string().email("Invalid email address"),
  });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setValidationError(null);

    if (!form.current) return;

    const formData = new FormData(form.current);
    const formValues = Object.fromEntries(formData.entries());

    const validationResult = emailSchema.safeParse(formValues);

    if (!validationResult.success) {
      setValidationError(validationResult.error.errors[0].message);
      return;
    }

    if (
      !process.env.NEXT_PUBLIC_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_PUBLIC_KEY
    )
      return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          if (form.current) form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <div className="home-page__container">
      <HomeSection />
      <AboutSection
        skills={skills}
        experiences={experiences}
        skillRef={skillRef}
        expirienceRef={expirienceRef}
        isSkillRefInView={isSkillRefInView}
        isExpirienceRefInView={isExpirienceRefInView}
      />
      <PortfolioSection projects={projects} />
      <ContactSection
        form={form}
        sendEmail={sendEmail}
        validationError={validationError}
        success={success}
        error={error}
      />
    </div>
  );
}
