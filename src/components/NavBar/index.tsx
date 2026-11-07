"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import "./style.scss";
import NavLink from "../NavLink";
import ThemeToggle from "../ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { smoothScrollTo } from "@/lib/smoothScroll";

export type NavbarLink = { name: string; href: string };

const MobileMenu = dynamic(() => import("./MobileMenu"), { ssr: false });

const navbarLinks: NavbarLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];
const sectionIds = navbarLinks.map((l) => l.href);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Mount the (lazy) mobile menu only after it was opened once.
  const [menuLoaded, setMenuLoaded] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    if (!isOpen) return;
    const scrollWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollWidth}px`;
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setMenuLoaded(true);
    setIsOpen((v) => !v);
  };

  return (
    <nav className="bg-transparrent min-h-[70px] flex items-center justify-center relative bg-filter dark:bg-dark-1/80">
      <div className="flex flex-auto justify-between nav-bar__container items-center py-5 navbar-gap">
        <Link
          href="/"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              smoothScrollTo("#home");
            }
          }}
          className="text-2xl font-bold text-dark-2 dark:text-light-1"
        >
          Halyamov
        </Link>
        <div className="hidden md:flex navbar-gap flex-wrap justify-center gap-y-1 items-center">
          {navbarLinks.map((link) => (
            <NavLink
              key={link.href}
              label={link.name}
              href={link.href}
              isActive={active === link.href}
            />
          ))}
          <ThemeToggle />
        </div>
        <div className="md:hidden z-[10]">
          <input
            type="checkbox"
            checked={isOpen}
            onChange={toggleMenu}
            id="checkbox"
            aria-label="Toggle menu"
          />
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </div>
        {menuLoaded && (
          <MobileMenu
            isOpen={isOpen}
            links={navbarLinks}
            active={active}
            onNavigate={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
