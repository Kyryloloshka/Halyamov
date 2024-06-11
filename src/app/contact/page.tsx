"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const text = "Say Hello";

  const form = useRef<HTMLFormElement>(null);

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
    <motion.div
      className="min-h-[calc(100vh-70px)] contact__container h-full flex  items-center gap-8"
      initial={{ x: "-20vw" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
    >
      <div className="h-full flex flex-auto flex-col justify-center lg:flex-row items-center gap-6 lg:gap-2">
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 flex-auto lg:h-full max-w-[500px] lg:w-1/2 bg-red-50/90 rounded-xl text-xl flex flex-col gap-4 justify-center px-8 py-6"
        >
          <span>Dear Halyamov Kyrylo,</span>
          <textarea
            rows={6}
            className="bg-gray-500/10 px-4 py-2 custom-scrollbar rounded-lg border-b-2 border-b-black outline-none resize-none"
            name="user_message"
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="text"
            className=" bg-gray-500/10 rounded-lg px-4 py-2 border-b-2 border-b-black outline-none"
          />
          <span>Regards</span>
          <button
            type="submit"
            className="bg-secondary-500/50 hover:bg-secondary-500/90 transition rounded font-semibold text-dark-5 p-4"
          >
            Send
          </button>
          {validationError && (
            <span className="text-red-600 font-semibold">
              {validationError}
            </span>
          )}
          {success && (
            <span className="text-green-600 font-medium">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
