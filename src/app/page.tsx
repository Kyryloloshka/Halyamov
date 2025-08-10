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
import { projects, skills, experiences } from "@/constants";

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
