"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll"; // <- Yeh import karein
import { cn } from "../../../lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string; // e.g., "home", "projects", etc.
  }[];
  className?: string;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={cn(
          "fixed top-6 inset-x-0 mx-auto max-w-fit px-6 py-4 z-50",
          "backdrop-blur-md bg-transparent",
          "border border-white/30",
          "rounded-full flex items-center justify-center space-x-6 md:space-x-10 shadow-md shadow-gray-500",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <ScrollLink
            key={`link-${idx}`}
            to={navItem.link} // This should match the `id` of the section
            spy={true}
            smooth={true}
            offset={-80} // Adjust according to navbar height
            duration={500}
            className="cursor-pointer text-sm sm:text-lg font-medium text-white hover:text-purple-200 transition-colors"
          >
            {navItem.name}
          </ScrollLink>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
