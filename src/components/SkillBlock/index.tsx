import { reveal } from "@/lib/reveal";

const SkillBlock = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <li {...reveal({ x: "-100px" })} className="flex flex-col gap-3">
      <h4 className="text-[1.5rem] hover:translate-x-2 transition-transform dark:text-light-1">
        {title}
      </h4>
      <p className="text-lg hover:translate-x-2 transition-transform dark:text-light-2">
        {description}
      </p>
    </li>
  );
};

export default SkillBlock;
