import React, { useRef } from "react";
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Aceternity-inspired moving border. A glowing dot travels around the
 * perimeter of a rectangular path, leaving a chunky pixel trail.
 *
 * Works well wrapped around CTAs or feature cards.
 */
export function MovingBorder({
  children,
  duration = 2400,
  rx = "0",
  ry = "0",
  className,
  containerClassName,
  borderClassName,
  ...otherProps
}) {
  const pathRef = useRef(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength?.();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val)?.x ?? 0
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val)?.y ?? 0
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <div
      className={cn(
        "relative overflow-hidden p-[3px]",
        containerClassName
      )}
      {...otherProps}
    >
      <div className="absolute inset-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute h-full w-full"
          width="100%"
          height="100%"
          aria-hidden="true"
        >
          <rect
            fill="none"
            width="100%"
            height="100%"
            rx={rx}
            ry={ry}
            ref={pathRef}
          />
        </svg>
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "inline-block",
            transform,
          }}
        >
          <div
            className={cn(
              "h-12 w-12 bg-[radial-gradient(hsl(var(--accent))_30%,transparent_70%)] opacity-90",
              borderClassName
            )}
          />
        </motion.div>
      </div>

      <div
        className={cn(
          "relative bg-card text-foreground flex h-full w-full items-center justify-center antialiased",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
