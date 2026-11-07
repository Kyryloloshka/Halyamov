import React from "react";
import "./style.scss";

// A real link instead of a GSAP timeline + delayed window.open(): the delayed
// open could be swallowed by popup blockers (notably iOS Safari).
const DemoButton = ({
  children,
  href,
  label,
}: {
  children: React.ReactNode;
  href: string;
  label: string;
}) => {
  const isExternal = href.startsWith("http");
  const caption = href.startsWith("https://github.com")
    ? "View in GitHub"
    : "View demo";

  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={`${label}: ${caption}`}
      className="relative block button-demo image-adaptive aspect-[20/12] overflow-hidden"
    >
      {children}
      <span className="demo-button-text absolute z-[2] top-1/2 left-1/2 uppercase font-medium text-light-1 tracking-[0.08em] whitespace-nowrap">
        {caption}
      </span>
    </a>
  );
};

export default DemoButton;
