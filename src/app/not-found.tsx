import Link from "next/link";

const NotFound = () => {
  return (
    <div className="text-center not-found__container h-screen flex flex-col gap-9 items-center justify-center text-dark-3 dark:text-light-1">
      <h1 className="text-4xl font-semibold">404 - Page Not Found</h1>
      <p className="text-xl">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link href="/" className="button-primary">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
