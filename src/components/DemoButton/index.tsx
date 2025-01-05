import React, { use, useEffect, useRef, useState } from "react";
import "./style.scss";
import { gsap } from "gsap";

const DemoButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const checkTabTextRef = useRef<HTMLDivElement | null>(null);
  const viewDemotextRef = useRef<HTMLDivElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const buttonElement = buttonRef.current;
    const textElement = viewDemotextRef.current;

    if (buttonElement && textElement) {
      if (isAnimating) return;
      textElement.style.display = "block";

      if (isHovered) {
        gsap.to(textElement, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
        });
      } else {
        gsap.to(textElement, {
          opacity: 0,
          y: -30,
          duration: 0.7,
          ease: "power2.out",
        });
      }
    }
  }, [isHovered, isAnimating]);
  const handleClick = () => {
    if (isAnimating) return; // Уникнення повторного натискання під час анімації

    setIsAnimating(true);
    const buttonElement = buttonRef.current;
    const textElement = checkTabTextRef.current;
    const viewDemoTextElement = viewDemotextRef.current;
    if (buttonElement && textElement) {
      textElement.style.display = "block";
      gsap.to(viewDemoTextElement, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power2.out",
      });
      gsap
        .timeline()
        .to(textElement, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          onComplete: () => {
            window.open(href, "_blank");
            setIsAnimating(false);
          },
        })
        .to(textElement, {
          opacity: 0,
          y: -30,
          duration: 0.7,
          ease: "power2.out",
        });
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative button-demo hover:cursor-pointer transition-all image-adaptive aspect-[20/12]`}
    >
      {children}
      <div
        ref={checkTabTextRef}
        className="demo-button-text absolute z-[2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase font-medium text-light-1 tracking-[0.08em]"
        style={{ display: "none", opacity: 0 }}
      >
        Check out new tab
      </div>
      <div
        ref={viewDemotextRef}
        className="demo-button-text absolute z-[2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase font-medium text-light-1 tracking-[0.08em]"
        style={{ display: "none", opacity: 0 }}
      >
        View demo
      </div>
    </button>
  );
};

export default DemoButton;
