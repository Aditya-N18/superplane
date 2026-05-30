import React from "react";
import { ChevronRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/pixel/button";
import { Badge } from "@/components/ui/pixel/badge";
import { Spotlight } from "@/components/ui/aceternity/spotlight";
import { BackgroundGrid } from "@/components/ui/aceternity/background-grid";
import { TextGenerate } from "@/components/ui/aceternity/text-generate";
import { Starfield } from "@/components/Starfield";
import { PixelShip, PixelEnemy } from "@/components/PixelShip";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden pt-20 scanlines"
    >
      <Starfield />
      <BackgroundGrid />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="hsl(188 100% 56% / 0.6)"
      />

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center py-16 lg:py-24">
        <div className="flex flex-col items-start gap-6">
          <Badge variant="accent">
            <Sparkles className="w-3 h-3 mr-1.5" /> NEW · SEASON 2 LIVE
          </Badge>

          <h1 className="pixel-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-foreground">
            <span className="block">SHOOT.</span>
            <span className="block shimmer-text">DODGE.</span>
            <span className="block text-shadow-pink text-primary">SURVIVE.</span>
          </h1>

          <p className="arcade-font text-xl sm:text-2xl text-muted-foreground max-w-xl">
            <TextGenerate words="A retro pixel-art arcade shoot 'em up built for the modern web. 16-bit feels, 144hz reflexes, infinite chaos." />
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button variant="primary" size="xl" asChild>
              <a href="#cta" className="flex items-center gap-2">
                <Zap className="w-4 h-4" /> PLAY FREE
              </a>
            </Button>
            <Button variant="ghost" size="xl" asChild>
              <a href="#showcase" className="flex items-center gap-2">
                WATCH TRAILER <ChevronRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-6 text-xs text-muted-foreground arcade-font text-base">
            <Stat value="2.4M+" label="Players" />
            <Divider />
            <Stat value="187" label="Levels" />
            <Divider />
            <Stat value="98%" label="Rating" />
          </div>
        </div>

        <div className="relative flex items-center justify-center h-[420px] lg:h-[520px]">
          {/* Faux HUD frame */}
          <div className="absolute inset-x-6 inset-y-2 border-4 border-ring/60 clip-pixel-corners bg-background/30 backdrop-blur-sm" />
          <div className="absolute top-4 left-10 right-10 flex justify-between text-[10px] pixel-font text-accent">
            <span>HI-SCORE 998,750</span>
            <span className="animate-blink">▼ INCOMING</span>
          </div>

          {/* Enemies */}
          <PixelEnemy
            className="absolute top-16 left-1/4 animate-float-y"
            size={64}
          />
          <PixelEnemy
            className="absolute top-24 right-1/4 animate-float-y"
            size={48}
          />
          <PixelEnemy
            className="absolute top-44 left-1/2 -translate-x-1/2 animate-float-y"
            size={56}
          />

          {/* Hero ship */}
          <div className="relative animate-float-y">
            <PixelShip size={280} variant="cyan" className="drop-shadow-[0_0_24px_rgba(34,225,255,0.45)]" />
          </div>

          <div className="absolute bottom-6 left-10 right-10 flex justify-between text-[10px] pixel-font text-primary">
            <span>SHIELD ████████░░</span>
            <span>LIVES ❤ ❤ ❤</span>
          </div>
        </div>
      </div>

      {/* CRT vignette */}
      <div className="pointer-events-none absolute inset-0 z-[2] [background:radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.7)_100%)]" />
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="flex flex-col">
      <span className="pixel-font text-base text-foreground">{value}</span>
      <span className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function Divider() {
  return <span className="h-6 w-[2px] bg-border" />;
}
