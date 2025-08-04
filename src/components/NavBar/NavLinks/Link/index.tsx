import { motion } from "framer-motion";
import { slide, scale } from "../../anim";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import { linksActions, useActionCreators } from "@/state";
import { smoothScrollTo } from "@/lib/smoothScroll";

export default function Index({ data, isActive, setSelectedIndicator }: any) {
  const { name, href, index } = data;
  const actions = useActionCreators(linksActions);
  const pathname = usePathname();

  const handleClick = () => {
    if (href.startsWith('#')) {
      // Custom smooth scroll to section
      smoothScrollTo(href);
    }
    actions.setCurrentPageLabel(name);
    actions.setCurrentHref(href);
    actions.setIsBurgerMenuOpen(false);
  };

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
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
