import React from "react";
import DemoButton from "../DemoButton";
import Image, { type StaticImageData } from "next/image";
import { reveal } from "@/lib/reveal";

export type PortfolioItem = {
  title: string;
  desc: string;
  /** Static import (gets an automatic blur placeholder) or a URL. */
  img: StaticImageData | string;
  link: string;
  linkGh: string;
};

const PortfolioItem = ({
  index,
  item,
}: {
  index: number;
  item: PortfolioItem;
}) => {
  const x = index % 2 === 0 ? "-100px" : "100px";
  return (
    <div
      className={`flex flex-col gap-8 ${
        index % 2 === 0 ? "text-start items-start" : "text-end items-end"
      }`}
    >
      <h3
        {...reveal({ x })}
        className="text-adaptive-title font-bold text-dark-5 dark:text-light-1"
      >
        {item.title}
      </h3>
      <div {...reveal({ x, delay: 0.2 })}>
        <DemoButton href={item.link} label={item.title}>
          <Image
            src={item.img}
            alt={`${item.title} screenshot`}
            fill
            sizes="(max-width: 1050px) 90vw, 700px"
            quality={80}
            placeholder={typeof item.img === "string" ? "empty" : "blur"}
            className="object-cover object-top"
          />
        </DemoButton>
      </div>
      <p
        {...reveal({ x, delay: 0.4 })}
        className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px] dark:text-light-2"
      >
        {item.desc}
      </p>
      <div {...reveal({ x, delay: 0.6 })}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={item.linkGh}
          className="inline-block py-2 px-4 bg-secondary-500 dark:bg-secondary-700 rounded-md text-dark-3 dark:text-light-1 hover:scale-105 transition hover:bg-secondary-600 dark:hover:bg-secondary-800 shadow-md dark:shadow-secondary-700/50"
        >
          View in GitHub
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
