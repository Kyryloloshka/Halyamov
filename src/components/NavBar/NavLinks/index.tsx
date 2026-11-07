import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "./Link";
import Curve from "./Curve";
import styles from "./style.module.scss";
import { menuSlide } from "../anim";
import type { NavbarLink } from "..";

const NavLinks = ({
  navbarLinks,
  active,
  onNavigate,
}: {
  navbarLinks: NavbarLink[];
  active: string;
  onNavigate: () => void;
}) => {
  const [selectedIndicator, setSelectedIndicator] = useState(active);

  useEffect(() => {
    setSelectedIndicator(active);
  }, [active]);

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
          onMouseLeave={() => setSelectedIndicator(active)}
          className={styles.nav}
        >
          {navbarLinks.map((data, index) => (
            <Link
              key={data.href}
              data={{ ...data, index }}
              isActive={selectedIndicator === data.href}
              setSelectedIndicator={setSelectedIndicator}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default NavLinks;
