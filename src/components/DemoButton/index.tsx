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
      const scale = Math.max(
        window.innerHeight / rect.height,
        window.innerWidth / rect.width
      );
      const offsetX = window.innerWidth / 2 - (rect.left + rect.width / 2);
      const offsetY = window.innerHeight / 2 - (rect.top + rect.height / 2);
      buttonElement.style.zIndex = "1005";
      buttonElement.style.position = "sticky";
      gsap.timeline().to(buttonElement, {
        duration: 0.7,
        scaleX: scale,
        scaleY: scale,
        x: offsetX,
        y: offsetY,
        ease: "power4.out",
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
