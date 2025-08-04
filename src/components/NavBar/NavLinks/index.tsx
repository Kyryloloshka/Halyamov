import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "./Link";
import { usePathname } from "next/navigation";
import Curve from "./Curve";
import styles from "./style.module.scss";
import { menuSlide } from "../anim";

const NavLinks = ({ navbarLinks }: { navbarLinks: any }) => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState('#home');

  // Function to determine which section is currently in view
  const getCurrentSection = () => {
    const sections = ['#home', '#about', '#portfolio', '#contact'];
    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.querySelector(sections[i]);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100) {
          return sections[i];
        }
      }
    }
    return '#home';
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = getCurrentSection();
      setSelectedIndicator(currentSection);
    };

    // Set initial section after a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const initialSection = getCurrentSection();
      setSelectedIndicator(initialSection);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div
      variants={menuSlide}
      initial={"initial"}
      animate={"enter"}
      exit={"exit"}
      className={`${styles.menu}`}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            const currentSection = getCurrentSection();
            setSelectedIndicator(currentSection);
          }}
          className={styles.nav}
        >
          {navbarLinks.map((data: any, index: number) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator === data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default NavLinks;
