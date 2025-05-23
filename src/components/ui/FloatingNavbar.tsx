"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { cn } from "../../../lib/utils";
import { useState, useEffect, useRef } from "react";
import { HiOutlineMenu } from "react-icons/hi";

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
  const [isDesktop, setIsDesktop] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Detect click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen && !isDesktop) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isDesktop]);

  return (
    <>
      {/* 🔘 Hamburger Icon (only visible when nav is closed and on mobile) */}
      {!isOpen && !isDesktop && (
        <div className="fixed top-6 right-6 z-50 md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/30 shadow-md"
          >
            <HiOutlineMenu size={24} />
          </button>
        </div>
      )}

      {/* 🌐 Floating Nav */}
      <AnimatePresence mode="wait">
        {(isOpen || isDesktop) && (
          <motion.div
            ref={navRef}
            initial={{ opacity: 0, y: -100 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.4 }}
            className={cn(
              "fixed top-6 inset-x-0 mx-auto max-w-fit px-6 py-4 z-40",
              "backdrop-blur-md bg-transparent",
              "border border-white/30",
              "rounded-full flex items-center justify-center space-x-6 md:space-x-10 shadow-md shadow-gray-500",
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
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-sm sm:text-lg font-medium text-gray-200 hover:text-purple-700 transition-colors"
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
