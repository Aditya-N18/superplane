import React from "react";
import { cn } from "@/lib/utils";

/**
 * Pure-SVG pixel ship — top-down arcade fighter.
 * Uses shape-rendering="crispEdges" so it stays sharp at any size.
 */
export function PixelShip({ className, size = 280, variant = "cyan" }) {
  const accent =
    variant === "pink"
      ? "#ff2e88"
      : variant === "lime"
      ? "#bafd00"
      : "#22e1ff";
  const darkAccent =
    variant === "pink"
      ? "#8a0042"
      : variant === "lime"
      ? "#4a6a00"
      : "#0a5566";

  return (
    <svg
      className={cn("select-none", className)}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      aria-label="Pixel ship"
    >
      {/* Nose cone */}
      <rect x="7" y="1" width="2" height="1" fill={accent} />
      <rect x="7" y="2" width="2" height="1" fill="#ffffff" />
      {/* Body upper */}
      <rect x="6" y="3" width="4" height="1" fill={accent} />
      <rect x="6" y="4" width="4" height="1" fill="#ffffff" />
      {/* Cockpit */}
      <rect x="7" y="5" width="2" height="1" fill="#06070d" />
      <rect x="6" y="5" width="1" height="1" fill={accent} />
      <rect x="9" y="5" width="1" height="1" fill={accent} />
      {/* Wings */}
      <rect x="2" y="6" width="12" height="1" fill={accent} />
      <rect x="1" y="7" width="14" height="1" fill={accent} />
      <rect x="1" y="7" width="2" height="1" fill="#ffffff" />
      <rect x="13" y="7" width="2" height="1" fill="#ffffff" />
      {/* Wing under-glow */}
      <rect x="2" y="8" width="2" height="1" fill={darkAccent} />
      <rect x="12" y="8" width="2" height="1" fill={darkAccent} />
      {/* Engine block */}
      <rect x="5" y="8" width="6" height="1" fill={accent} />
      <rect x="6" y="9" width="4" height="1" fill="#ffffff" />
      {/* Twin thrusters */}
      <rect x="5" y="10" width="2" height="2" fill="#ff2e88" />
      <rect x="9" y="10" width="2" height="2" fill="#ff2e88" />
      <rect x="5" y="12" width="2" height="1" fill="#ffb020" />
      <rect x="9" y="12" width="2" height="1" fill="#ffb020" />
      <rect x="5" y="13" width="2" height="1" fill="#fff8c4" />
      <rect x="9" y="13" width="2" height="1" fill="#fff8c4" />
      {/* Center exhaust */}
      <rect x="7" y="11" width="2" height="2" fill="#ff2e88" />
      <rect x="7" y="13" width="2" height="1" fill="#ffb020" />
      <rect x="7" y="14" width="2" height="2" fill="#fff8c4" />
    </svg>
  );
}

/** Tiny pixel star for sparse starfields. */
export function PixelStar({ className, color = "#ffffff", size = 4 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 4 4"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <rect x="0" y="1" width="1" height="2" fill={color} />
      <rect x="3" y="1" width="1" height="2" fill={color} />
      <rect x="1" y="0" width="2" height="4" fill={color} />
    </svg>
  );
}

/** Pixel asteroid / enemy blob. */
export function PixelEnemy({ className, size = 64 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 12 12"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <rect x="3" y="1" width="6" height="1" fill="#a061ff" />
      <rect x="2" y="2" width="8" height="1" fill="#a061ff" />
      <rect x="1" y="3" width="10" height="3" fill="#a061ff" />
      <rect x="2" y="6" width="8" height="2" fill="#a061ff" />
      <rect x="3" y="8" width="6" height="1" fill="#a061ff" />
      {/* Eyes */}
      <rect x="3" y="4" width="2" height="2" fill="#06070d" />
      <rect x="7" y="4" width="2" height="2" fill="#06070d" />
      <rect x="4" y="4" width="1" height="1" fill="#ff2e88" />
      <rect x="8" y="4" width="1" height="1" fill="#ff2e88" />
      {/* Mouth */}
      <rect x="4" y="7" width="4" height="1" fill="#06070d" />
      <rect x="5" y="6" width="2" height="1" fill="#06070d" />
      {/* Tendrils */}
      <rect x="1" y="9" width="2" height="1" fill="#a061ff" />
      <rect x="5" y="9" width="2" height="1" fill="#a061ff" />
      <rect x="9" y="9" width="2" height="1" fill="#a061ff" />
      <rect x="1" y="10" width="1" height="1" fill="#a061ff" />
      <rect x="6" y="10" width="1" height="1" fill="#a061ff" />
      <rect x="10" y="10" width="1" height="1" fill="#a061ff" />
    </svg>
  );
}
