"use client";
// Loaded lazily (next/dynamic) on the first burger click, so framer-motion
// never ships in the initial bundle.
import { AnimatePresence } from "framer-motion";
import NavLinks from "./NavLinks";
import type { NavbarLink } from ".";

const MobileMenu = ({
  isOpen,
  links,
  active,
  onNavigate,
}: {
  isOpen: boolean;
  links: NavbarLink[];
  active: string;
  onNavigate: () => void;
}) => (
  <div className="overflow-hidden fixed top-0 max-w-screen right-0 h-full z-[9] bg-dark-1 dark:bg-dark-2/95">
    <AnimatePresence mode="wait">
      {isOpen && (
        <NavLinks navbarLinks={links} active={active} onNavigate={onNavigate} />
      )}
    </AnimatePresence>
  </div>
);

export default MobileMenu;
