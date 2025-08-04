import React from "react";

interface ContactSectionProps {
  form: React.RefObject<HTMLFormElement>;
  sendEmail: (e: React.FormEvent) => void;
  validationError: string | null;
  success: boolean;
  error: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  form,
  sendEmail,
  validationError,
  success,
  error,
}) => (
  <section id="contact" className="min-h-screen contact__container h-full flex items-center gap-8">
    <div className="h-full flex flex-auto flex-col justify-center  items-center gap-6">
      <form
        onSubmit={sendEmail}
        ref={form}
        className="h-1/2 flex-auto w-full lg:h-full max-w-[500px] b rounded-xl text-xl flex flex-col gap-4 justify-center"
      >
        <span>Dear Halyamov Kyrylo,</span>
        <textarea
          rows={6}
          className="bg-white/50 px-4 py-2 custom-scrollbar rounded-lg border-b-2 border-b-black outline-none resize-none"
          name="user_message"
        />
        <span>My mail address is:</span>
        <input
          name="user_email"
          type="text"
          className=" bg-white/50 rounded-lg px-4 py-2 border-b-2 border-b-black outline-none"
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
  </section>
);

export default ContactSection;