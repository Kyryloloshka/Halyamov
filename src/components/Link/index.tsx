"use client";
import { linksActions, useActionCreators } from "@/state";
import { usePathname, useRouter } from "next/navigation";

const Link = ({ href, pageName, children, ...rest }: any) => {
  const router = useRouter();
  const actions = useActionCreators(linksActions);
  const pathname = usePathname();
  const handleClick = () => {
    if (pathname === href) return;
    actions.setCurrentPageLabel(pageName);
    actions.setCurrentHref(href);
    router.push(href);
  };
  return (
    <button onClick={handleClick} {...rest}>
      {children}
    </button>
  );
};

export default Link;
