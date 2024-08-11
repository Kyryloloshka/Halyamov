"use client";
import { motion, Variants } from "framer-motion";
import React from "react";

type PresetType = "blur" | "shake" | "scale" | "fade" | "slide";

type TextEffectProps = {
  children: string;
  per?: "word" | "char";
  as?: keyof JSX.IntrinsicElements;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  className?: string;
  preset?: PresetType;
  duration?: number;
  delay?: number;
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.delay,
      duration: custom.duration,
    },
  }),
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom) => ({
    opacity: 1,
    transition: {
      duration: custom.duration,
    },
  }),
};

const presetVariants: Record<
  PresetType,
  { container: Variants; item: Variants }
> = {
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(12px)" },
      visible: (custom) => ({
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: custom.duration },
      }),
    },
  },
  shake: {
    container: defaultContainerVariants,
    item: {
      hidden: { x: 0 },
      visible: (custom) => ({
        x: [-5, 5, -5, 5, 0],
        transition: { duration: custom.duration },
      }),
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0 },
      visible: (custom) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: custom.duration },
      }),
    },
  },
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: (custom) => ({
        opacity: 1,
        transition: { duration: custom.duration },
      }),
    },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: (custom) => ({
        opacity: 1,
        y: 0,
        transition: { duration: custom.duration },
      }),
    },
  },
};

const AnimationComponent: React.FC<{
  word: string;
  variants: Variants;
  per: "word" | "char";
  custom: { duration: number; delay: number };
}> = React.memo(({ word, variants, per, custom }) => {
  if (per === "word") {
    return (
      <motion.span
        aria-hidden="true"
        variants={variants}
        className="inline-block whitespace-pre"
        custom={custom}
      >
        {word}
      </motion.span>
    );
  }

  return (
    <span className="inline-block whitespace-pre">
      {word.split("").map((char, charIndex) => (
        <motion.span
          key={`char-${charIndex}`}
          aria-hidden="true"
          variants={variants}
          className="inline-block whitespace-pre"
          custom={custom}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
});

AnimationComponent.displayName = "AnimationComponent";

export function TextEffect({
  children,
  per = "word",
  as = "p",
  variants,
  className,
  preset,
  duration = 1,
  delay = 0.02,
}: TextEffectProps) {
  const words = children.split(/(\S+)/);
  const MotionTag = motion[as as keyof typeof motion];
  const selectedVariants = preset
    ? presetVariants[preset]
    : { container: defaultContainerVariants, item: defaultItemVariants };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;

  return (
    <MotionTag
      initial="hidden"
      animate="visible"
      custom={{ duration, delay }}
      aria-label={children}
      variants={containerVariants}
      className={className}
    >
      {words.map((word, wordIndex) => (
        <AnimationComponent
          key={`word-${wordIndex}`}
          word={word}
          variants={itemVariants}
          per={per}
          custom={{ duration, delay }}
        />
      ))}
    </MotionTag>
  );
}
