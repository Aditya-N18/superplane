import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Aceternity-inspired TextGenerateEffect — fades and blurs words into view.
 */
export function TextGenerate({ words, className, duration = 0.6, filter = true }) {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration,
        delay: stagger(0.12),
      }
    );
  }, [animate, duration, filter]);

  return (
    <motion.div ref={scope} className={cn("inline", className)}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          className="opacity-0 inline-block"
          style={{ filter: filter ? "blur(8px)" : "none" }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );
}
