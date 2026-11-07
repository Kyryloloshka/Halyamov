import { motion } from "framer-motion";
import { slide, scale } from "../../anim";
import styles from "./style.module.scss";
import { smoothScrollTo } from "@/lib/smoothScroll";

type Props = {
  data: { name: string; href: string; index: number };
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
  onNavigate: () => void;
};

export default function Index({
  data,
  isActive,
  setSelectedIndicator,
  onNavigate,
}: Props) {
  const { name, href, index } = data;

  const handleClick = () => {
    if (href.startsWith("#")) smoothScrollTo(href);
    onNavigate();
  };

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
      <button onClick={handleClick} className="dark:text-light-1">
        {name}
      </button>
    </motion.div>
  );
}
