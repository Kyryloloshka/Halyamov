import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

const SkillBlock = ({ title, description }: any) => {
  const ref = useRef<any>(null);
  const isRefInView = useInView(ref, { margin: "-100px", once: true });

  return (
    <motion.li
      ref={ref}
      initial={{ x: "-100px", opacity: 0 }}
      animate={isRefInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.4, ease: "backOut" }}
      className="flex flex-col gap-3 "
    >
      <h4 className="text-[1.5rem] hover:left-2 relative left-0 transition-[left]">
        {title}
      </h4>
      <p className="text-lg hover:left-2 relative left-0 transition-[left]">
        {description}
      </p>
    </motion.li>
  );
};

export default SkillBlock;
