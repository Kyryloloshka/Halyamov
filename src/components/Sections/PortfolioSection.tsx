import React from "react";
import PortfolioItem from "@/components/PortfolioItem";

const PortfolioSection = ({ projects }: { projects: any[] }) => {
  return (
    <section id="portfolio" className="text-dark-4 dark:text-light-1 h-full relative">
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
    </section>
  );
};

export default PortfolioSection;