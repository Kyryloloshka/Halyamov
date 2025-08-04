"use client";
import { linksActions, useActionCreators } from "@/state";
import { usePathname, useRouter } from "next/navigation";

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const isActive = href === pathname;
  const router = useRouter();
  const actions = useActionCreators(linksActions);
  const handleClick = () => {
    if (pathname === href) return;
    actions.setCurrentPageLabel(label);
    actions.setCurrentHref(href);
    router.push(href);
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
