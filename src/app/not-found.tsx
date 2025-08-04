"use client";
import { linksActions, useActionCreators } from "@/state";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const actions = useActionCreators(linksActions);
  const router = useRouter();
  const handleGoToHome = () => {
    actions.setCurrentPageLabel("home");
    actions.setCurrentHref("/");
    router.push("/");
  };
  return (
    <div className="text-center not-found__container h-screen flex flex-col gap-9 items-center justify-center text-dark-3">
      <h1 className="text-4xl font-semibold">404 - Page Not Found</h1>
      <p className="text-xl">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <button onClick={handleGoToHome} className="button-primary">
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFound;
