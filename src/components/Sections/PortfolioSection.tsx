import React from "react";
import PortfolioItem, {
  type PortfolioItem as PortfolioItemType,
} from "@/components/PortfolioItem";

const PortfolioSection = ({ projects }: { projects: PortfolioItemType[] }) => {
  return (
    <section id="portfolio" className="text-dark-4 dark:text-light-1 h-full relative">
      <h2 className="text-2xl font-semibold hover:translate-x-3 transition-transform py-12 uppercase">
        My Works
      </h2>
      <div className="flex flex-col gap-[100px]">
        {projects.map((project, index) => (
          <PortfolioItem key={project.title} item={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
