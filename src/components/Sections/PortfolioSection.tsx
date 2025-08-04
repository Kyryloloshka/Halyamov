import React from "react";
import PortfolioItem from "@/components/PortfolioItem";
import { smoothScrollTo } from "@/lib/smoothScroll";

const PortfolioSection = ({ projects }: { projects: any[] }) => {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    smoothScrollTo('#contact');
  };

  return (
    <section id="portfolio" className="text-dark-4 overflow-x-hidden h-full relative">
      <h3
        className={`text-2xl font-semibold hover:left-3 relative left-0 transition-[left] py-12 uppercase`}
      >
        My Works
      </h3>
      <div className="flex flex-col gap-[100px]">
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <PortfolioItem item={project} index={index} />
          </React.Fragment>
        ))}
      </div>
      <div className="max-w-screen min-h-screen flex justify-center flex-col gap-16 items-center text-center">
        <h3 className=" text-dark-5 if-interested-title">If interested</h3>
        <div className="relative">
          <button onClick={handleContactClick} className="hire-me-button">
            hire me
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;