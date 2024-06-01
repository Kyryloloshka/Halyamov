"use client";
import { animatePageOut } from "@/lib/animations";
import { linksActions, useActionCreators } from "@/state";
import { usePathname, useRouter } from "next/navigation";

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const isActive = href === pathname;
  const router = useRouter();
  const actions = useActionCreators(linksActions);
  const handleClick = () => {
    actions.setCurrentPageLabel(label);
    animatePageOut(href, router);
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
