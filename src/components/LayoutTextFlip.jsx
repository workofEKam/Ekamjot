import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

export const LayoutTextFlip = ({
  text = "I am Ekamjot Singh,  Always",
  words = ["Learning", "Building", "Growing"],
  duration = 3000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-x-4 flex-wrap px-4">
      <motion.span
        layoutId="subtext"
        className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium tracking-tight drop-shadow-lg text-center sm:text-left">
        I am Ekamjot Singh, <span className="italic">Always</span>
      </motion.span>
      <motion.span
        layout
        className="relative overflow-hidden rounded-md border border-transparent bg-white px-3 py-1.5 sm:px-4 sm:py-2 font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-black shadow-sm ring shadow-black/10 ring-black/10 drop-shadow-lg dark:bg-neutral-900 dark:text-white dark:shadow-sm dark:ring-1 dark:shadow-white/10 dark:ring-white/10">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={cn("inline-block whitespace-nowrap")}> 
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </div>
  );
};
