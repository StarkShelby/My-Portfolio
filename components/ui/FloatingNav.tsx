"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/utils/cn";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => {
          const isTestimonial = navItem.name === "Testimonials";
          return (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
                isTestimonial ? "hidden sm:flex" : ""
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-sm cursor-pointer">{navItem.name}</span>
            </a>
          );
        })}

        <button
          onClick={() => window.scrollTo(0, 0)}
          className="relative overflow-hidden border text-sm font-medium border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-5 py-2 rounded-full transition-all duration-300 group"
        >
          <span className="relative z-10 group-hover:text-blue-400 transition-colors duration-300">
            Home
          </span>

          {/* Underline Glow on Hover */}
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

          {/* Fill Background on Hover */}
          <span className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition duration-300" />

          {/* Subtle glow ring on hover */}
          <span className="absolute inset-0 rounded-full group-hover:ring-2 group-hover:ring-blue-400 group-hover:ring-offset-2 transition duration-300" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
