"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { cn } from "../../../lib/utils";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // Heroicons

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="fixed top-6 right-6 z-50 md:hidden">
        <button
          onClick={toggleMenu}
          className="p-2  mt-3 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/30 shadow-md"
        >
          {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Nav Bar */}
      <AnimatePresence mode="wait">
        {(isOpen || typeof window !== "undefined" && window.innerWidth >= 768) && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.4 }}
            className={cn(
              "fixed top-6 inset-x-0 mx-auto max-w-fit px-6 py-4  z-40",
              "backdrop-blur-md bg-transparent",
              "border border-white/30",
              "rounded-full  flex items-center justify-center space-x-6 md:space-x-10 shadow-md shadow-gray-500",
              className
            )}
          >
            {navItems.map((navItem, idx) => (
              <ScrollLink
                key={`link-${idx}`}
                to={navItem.link}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={closeMenu} // mobile click pe close
                className="cursor-pointer text-sm sm:text-lg font-medium text-white hover:text-purple-200 transition-colors"
              >
                {navItem.name}
              </ScrollLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
