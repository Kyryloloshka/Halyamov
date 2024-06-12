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

const navbarLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const NavBar = () => {
  const isActive = useStateSelector((state) => state.links.isBurgerMenuOpen);
  const actions = useActionCreators(linksActions);
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
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
    <nav className="bg-transparrent min-h-[70px] flex items-center justify-center relative bg-filter">
      <div className="flex flex-auto justify-between nav-bar__container items-center py-5 navbar-gap">
        <Link
          href="/"
          pageName={"home"}
          className="text-2xl font-bold text-dark-2"
        >
          Halyamov
        </Link>
        <div
          className={`hidden md:flex navbar-gap flex-wrap justify-center gap-y-1`}
        >
          {navbarLinks.map((link) => {
            return (
              <NavLink key={link.href} label={link.name} href={link.href} />
            );
          })}
        </div>
        <div className={`md:hidden z-10`}>
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
        <AnimatePresence mode="wait">
          {isActive && (
            <>
              <NavLinks navbarLinks={navbarLinks} />
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBar;
