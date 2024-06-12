import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../anim";
import styles from "./style.module.scss";
import { animatePageOut } from "@/lib/animations";
import { usePathname, useRouter } from "next/navigation";
import { linksActions, useActionCreators } from "@/state";

export default function Index({ data, isActive, setSelectedIndicator }: any) {
  const { name, href, index } = data;
  const actions = useActionCreators(linksActions);
  const router = useRouter();
  const pathname = usePathname();
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
      <button
        onClick={() => {
          if (pathname === href) return;
          actions.setCurrentPageLabel(name);
          actions.setCurrentHref(href);
          actions.setIsBurgerMenuOpen(false);
          animatePageOut(href, router);
        }}
      >
        {name}
      </button>
    </motion.div>
  );
}
