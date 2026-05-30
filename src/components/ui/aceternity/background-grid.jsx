import React from "react";
import { cn } from "@/lib/utils";

/**
 * Aceternity-inspired animated grid background with a radial fade mask.
 * Pure CSS — no canvas, no perf cost.
 */
export function BackgroundGrid({ className, variant = "grid" }) {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          "absolute inset-0",
          variant === "grid" ? "grid-bg" : "dot-bg"
        )}
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 0%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 0%, transparent 80%)",
        }}
      />
    </div>
  );
}
