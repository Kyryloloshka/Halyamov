"use client";
import { animatePageOut } from "@/lib/animations";
import { linksActions, useActionCreators } from "@/state";
import { usePathname, useRouter } from "next/navigation";

const Link = ({ href, label, pageName, ...rest }: any) => {
  const router = useRouter();
  const actions = useActionCreators(linksActions);
  const pathname = usePathname();
  const handleClick = () => {
    if (pathname === href) return;
    actions.setCurrentPageLabel(pageName);
    actions.setCurrentHref(href);
    animatePageOut(href, router);
  };
  return (
    <button onClick={handleClick} {...rest}>
      {label}
    </button>
  );
};

export default Link;
