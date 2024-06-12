import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "./Link";
import { usePathname } from "next/navigation";
import Curve from "./Curve";
import styles from "./style.module.scss";
import { menuSlide } from "../anim";

const NavLinks = ({ navbarLinks }: { navbarLinks: any }) => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial={"initial"}
      animate={"enter"}
      exit={"exit"}
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          {navbarLinks.map((data: any, index: number) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
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
