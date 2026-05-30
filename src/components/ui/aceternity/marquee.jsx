import React from "react";
import { cn } from "@/lib/utils";

/**
 * Aceternity-inspired infinite logo / item marquee.
 * `items` is an array of strings or nodes; they're rendered twice for a
 * seamless loop driven by the CSS `marquee` keyframe.
 */
export function Marquee({ items, className, pauseOnHover = true }) {
  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max gap-12 animate-marquee whitespace-nowrap",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center text-muted-foreground pixel-font text-xs sm:text-sm tracking-widest"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
