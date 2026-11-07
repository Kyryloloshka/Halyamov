"use client";
import { smoothScrollTo } from "@/lib/smoothScroll";

const NavLink = ({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) => {
  return (
    <a
      href={href}
      className={`transition-colors p-2 text-[16px] rounded-lg ${
        isActive
          ? "bg-dark-2 text-light-1 dark:bg-light-2 dark:text-dark-2"
          : "hover:bg-dark-2/10 dark:hover:bg-light-1/10 text-dark-1 dark:text-light-2"
      }`}
      onClick={(e) => {
        e.preventDefault();
        smoothScrollTo(href);
      }}
    >
      {label}
    </a>
  );
};

export default NavLink;
