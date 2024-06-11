"use client";
import React from "react";
import "./style.scss";
import NavLink from "../NavLink";
import Link from "../Link";
import { usePathname } from "next/navigation";

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
        <div className="flex navbar-gap flex-wrap justify-center gap-y-1">
          {navbarLinks.map((link) => {
            return (
              <NavLink key={link.href} label={link.name} href={link.href} />
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
