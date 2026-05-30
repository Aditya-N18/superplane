import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Animated pixel starfield — canvas-based, GPU-friendly. Renders square stars
 * drifting downward at three speeds for a parallax effect. Capped at ~60fps.
 */
export function Starfield({ className, density = 110 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf;
    let stars = [];
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const colors = ["#ffffff", "#bafd00", "#22e1ff", "#ff2e88"];

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function seed() {
      stars = new Array(density).fill(0).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 2 + 1, // depth 1..3
        c: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() < 0.85 ? 1 : 2,
      }));
    }

    function tick() {
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        s.y += s.z * 0.35;
        if (s.y > height) {
          s.y = -2;
          s.x = Math.random() * width;
        }
        ctx.fillStyle = s.c;
        ctx.globalAlpha = 0.25 + s.z * 0.25;
        ctx.fillRect(Math.floor(s.x), Math.floor(s.y), s.size, s.size);
      }
      raf = requestAnimationFrame(tick);
    }

    resize();
    tick();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 -z-10 h-full w-full", className)}
      aria-hidden="true"
    />
  );
}
