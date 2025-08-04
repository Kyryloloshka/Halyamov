"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import NavLink from "../NavLink";
import Link from "../Link";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { menuSlide } from "./anim";
import NavLinks from "./NavLinks";
import { linksActions, useActionCreators, useStateSelector } from "@/state";
import ThemeToggle from "../ThemeToggle";

const navbarLinks = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Portfolio",
    href: "#portfolio",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const NavBar = () => {
  const isActive = useStateSelector((state) => state.links.isBurgerMenuOpen);
  const actions = useActionCreators(linksActions);

  useEffect(() => {
    if (isActive) {
      const scrollWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [isActive]);

  useEffect(() => {
    const checkbox = document.getElementById("checkbox");
    if (checkbox && checkbox instanceof HTMLInputElement) {
      checkbox.checked = isActive;
    }
  }, [isActive]);

  const handleChange = () => {
    actions.toggleIsBurgerMenuOpen();
  };

  return (
    <nav className="bg-transparrent min-h-[70px] flex items-center justify-center relative bg-filter dark:bg-dark-1/80">
      <div className="flex flex-auto justify-between nav-bar__container items-center py-5 navbar-gap">
        <Link
          href="/"
          pageName={"home"}
          className="text-2xl font-bold text-dark-2 dark:text-light-1"
        >
          Halyamov
        </Link>
        <div
          className={`hidden md:flex navbar-gap flex-wrap justify-center gap-y-1 items-center`}
        >
          {navbarLinks.map((link) => {
            return (
              <NavLink key={link.href} label={link.name} href={link.href} />
            );
          })}
          <ThemeToggle />
        </div>
        <div className={`md:hidden z-[10]`}>
          <input
            type="checkbox"
            checked={isActive}
            onChange={handleChange}
            id="checkbox"
          />
          <label htmlFor="checkbox" className={"toggle"}>
            <div className={"bars"} id="bar1"></div>
            <div className={"bars"} id="bar2"></div>
            <div className={"bars"} id="bar3"></div>
          </label>
        </div>
        <div className="overflow-hidden fixed top-0 max-w-screen right-0 h-full z-[9] bg-dark-1 dark:bg-dark-2/95">
          <AnimatePresence mode="wait">
            {isActive && (
              <>
                <NavLinks navbarLinks={navbarLinks} />
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
