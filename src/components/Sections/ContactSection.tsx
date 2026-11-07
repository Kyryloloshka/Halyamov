"use client";
import React, { useRef, useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [validationError, setValidationError] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);
    if (!form.current) return;

    const data = new FormData(form.current);
    const message = String(data.get("user_message") ?? "").trim();
    const email = String(data.get("user_email") ?? "").trim();
    if (!message) return setValidationError("Message cannot be empty");
    if (!EMAIL_RE.test(email)) return setValidationError("Invalid email address");

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) return setStatus("error");

    setStatus("sending");
    try {
      // Loaded only when someone actually sends a message.
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      setStatus("success");
      form.current?.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="min-h-screen contact__container h-full flex items-center gap-8">
      <div className="h-full flex flex-auto flex-col justify-center items-center gap-6">
        <form
          onSubmit={sendEmail}
          ref={form}
          noValidate
          className="h-1/2 flex-auto w-full lg:h-full max-w-[500px] b rounded-xl text-xl flex flex-col gap-4 justify-center dark:text-light-1"
        >
          <label htmlFor="user_message">Dear Halyamov Kyrylo,</label>
          <textarea
            id="user_message"
            rows={6}
            className="bg-white/50 dark:bg-dark-3/50 px-4 py-2 custom-scrollbar rounded-lg border-b-2 border-b-black dark:border-light-1 outline-none resize-none dark:text-light-1"
            name="user_message"
          />
          <label htmlFor="user_email">My mail address is:</label>
          <input
            id="user_email"
            name="user_email"
            type="email"
            autoComplete="email"
            className="bg-white/50 dark:bg-dark-3/50 rounded-lg px-4 py-2 border-b-2 border-b-black dark:border-light-1 outline-none dark:text-light-1"
          />
          <span>Regards</span>
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-secondary-500/50 dark:bg-secondary-700/50 hover:bg-secondary-500/90 dark:hover:bg-secondary-700/90 transition rounded font-semibold text-dark-5 dark:text-light-1 p-4 shadow-lg dark:shadow-secondary-700/50 disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send"}
          </button>
          <div aria-live="polite">
            {validationError && (
              <span className="text-red-600 font-semibold">{validationError}</span>
            )}
            {status === "success" && (
              <span className="text-green-600 font-medium">
                Your message has been sent successfully!
              </span>
            )}
            {status === "error" && (
              <span className="text-red-600 font-semibold">
                Something went wrong!
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
