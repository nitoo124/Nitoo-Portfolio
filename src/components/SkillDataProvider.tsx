"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface IProps {
  src: string;
  index: number;
  name: string;
}

function SkillDataProvider({ src, index, name }: IProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Trigger animation when 30% of element is visible
  });

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: index * 0.1, // Staggered delay
      }
    }
  };

  const hoverEffect = {
    scale: 1.1,
    rotate: [0, -5, 5, -5, 5, 0], // Gentle wiggle effect
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={cardVariants}
      animate={inView ? "visible" : "hidden"}
      whileHover={hoverEffect}
      className="flex flex-col items-center justify-center p-4 rounded-lg bg-purple-200/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 m-2"
    >
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
        <Image
          src={src}
          alt={name}
          fill
          sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 96px"
          className="object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = "/default-skill.png"; // Fallback image
          }}
        />
      </div>
      <motion.p 
        className="text-sm md:text-base font-medium mt-3 text-center text-white/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ delay: index * 0.1 + 0.2 }}
      >
        {name}
      </motion.p>
    </motion.div>
  );
}

export default SkillDataProvider;