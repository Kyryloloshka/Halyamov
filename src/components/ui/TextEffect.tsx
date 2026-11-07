import React, { type CSSProperties } from "react";

type TextEffectProps = {
  children: string;
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3";
  className?: string;
  /** Stagger between words, seconds. */
  delay?: number;
  /** Fade duration per word, seconds. */
  duration?: number;
};

// Pure-CSS word-by-word fade (was framer-motion with a motion.span per word).
// Rendered on the server, so the text is in the HTML immediately.
export function TextEffect({
  children,
  as: Tag = "p",
  className,
  delay = 0.02,
  duration = 1,
}: TextEffectProps) {
  const words = children.split(/(\S+)/);
  let wordIndex = 0;

  return (
    <Tag
      aria-label={children}
      className={className}
      style={
        {
          "--te-stagger": `${delay}s`,
          "--te-duration": `${duration}s`,
        } as CSSProperties
      }
    >
      {words.map((word, i) =>
        /\S/.test(word) ? (
          <span
            key={i}
            aria-hidden="true"
            className="text-effect-word"
            style={{ "--i": wordIndex++ } as CSSProperties}
          >
            {word}
          </span>
        ) : (
          <React.Fragment key={i}>{word}</React.Fragment>
        )
      )}
    </Tag>
  );
}
