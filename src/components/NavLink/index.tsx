"use client";
import { linksActions, useActionCreators } from "@/state";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { smoothScrollTo } from "@/lib/smoothScroll";

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);
  const actions = useActionCreators(linksActions);
  
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
      setIsActive(href === currentSection);
    };

    // Set initial active state after a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const initialSection = getCurrentSection();
      setIsActive(href === initialSection);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [href]);
  
  const handleClick = () => {
    if (href.startsWith('#')) {
      // Custom smooth scroll to section
      smoothScrollTo(href);
    }
    actions.setCurrentPageLabel(label);
    actions.setCurrentHref(href);
  };
  
  return (
    <button
      className={`transition p-2 text-[16px] rounded-lg ${
        isActive && "bg-dark-2 text-light-1"
      }`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default NavLink;
