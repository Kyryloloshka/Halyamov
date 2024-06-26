import React, { useRef, useState } from "react";
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
  const [isVisibeIsViewDemo, setIsVisibeIsViewDemo] = useState(true);
  const handleClick = () => {
    const buttonElement = buttonRef.current;
    setIsVisibeIsViewDemo(false);
    if (buttonElement) {
      const rect = buttonElement.getBoundingClientRect();
      buttonElement.style.zIndex = "1005";
      buttonElement.style.position = "sticky";
      gsap.timeline().to(buttonElement, {
        duration: 0.7,
        scale: 1.1,
        opacity: 0.9,
        ease: "power2.out",
        onComplete: () => {
          window.location.href = href;
        },
      });
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`${
        isVisibeIsViewDemo && "button-demo hover:cursor-pointer "
      } relative transition-all image-adaptive aspect-[20/12]`}
    >
      {children}
    </button>
  );
};

export default DemoButton;
