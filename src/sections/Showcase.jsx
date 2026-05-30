import React from "react";
import { Play, Shield, Swords, Rocket } from "lucide-react";
import { Card } from "@/components/ui/pixel/card";
import { Badge } from "@/components/ui/pixel/badge";
import { Button } from "@/components/ui/pixel/button";
import { PixelShip, PixelEnemy, PixelStar } from "@/components/PixelShip";
import { BackgroundGrid } from "@/components/ui/aceternity/background-grid";

const SHIPS = [
  {
    name: "VECTOR-α",
    class: "Scout",
    variant: "cyan",
    stats: { atk: 6, def: 4, spd: 9 },
    icon: Rocket,
  },
  {
    name: "BLITZ-7",
    class: "Striker",
    variant: "pink",
    stats: { atk: 9, def: 3, spd: 7 },
    icon: Swords,
  },
  {
    name: "AEGIS-XL",
    class: "Tank",
    variant: "lime",
    stats: { atk: 5, def: 10, spd: 4 },
    icon: Shield,
  },
];

export function Showcase() {
  return (
    <section id="showcase" className="relative py-24 sm:py-32 overflow-hidden">
      <BackgroundGrid variant="dot" />

      <div className="container">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
          <div className="flex flex-col gap-6">
            <Badge variant="default">// FACTIONS</Badge>
            <h2 className="pixel-font text-2xl sm:text-3xl md:text-4xl text-foreground leading-tight">
              PICK YOUR SHIP.<br />
              <span className="text-accent text-shadow-glow">WRITE YOUR LEGEND.</span>
            </h2>
            <p className="arcade-font text-xl text-muted-foreground max-w-lg">
              12 unlockable hulls. 48 weapons. 200+ mods. Every loadout
              changes how the universe shoots back at you.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "Bullet patterns",
                "Roguelite runs",
                "Daily seeds",
                "Boss rush",
                "Endless mode",
                "Photo mode",
              ].map((t) => (
                <div
                  key={t}
                  className="pixel-font text-[10px] px-3 py-2 bg-secondary text-secondary-foreground border-l-2 border-accent"
                >
                  ▶ {t}
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              <Button variant="primary" size="lg">
                <Play className="w-4 h-4 mr-2" /> WATCH TRAILER
              </Button>
              <Button variant="ghost" size="lg">
                VIEW ROSTER
              </Button>
            </div>
          </div>

          {/* Right: ship selection panel */}
          <Card className="relative p-6 pt-7 bg-card/80 backdrop-blur">
            <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[10px] pixel-font text-muted-foreground">
              <span>SELECT HULL · 03/12</span>
              <span className="text-accent animate-blink">● ONLINE</span>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {SHIPS.map((s, i) => (
                <div
                  key={s.name}
                  className="relative flex flex-col items-center gap-3 p-4 bg-background border-2 border-ring/30 hover:border-accent transition-colors group"
                >
                  {i === 0 && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 pixel-font text-[9px] bg-primary text-primary-foreground px-2 py-0.5">
                      SELECTED
                    </span>
                  )}
                  <PixelShip size={96} variant={s.variant} />
                  <div className="text-center">
                    <p className="pixel-font text-xs text-foreground">{s.name}</p>
                    <p className="arcade-font text-base text-muted-foreground">
                      {s.class}
                    </p>
                  </div>
                  <div className="w-full space-y-1">
                    <StatBar label="ATK" value={s.stats.atk} color="bg-primary" />
                    <StatBar label="DEF" value={s.stats.def} color="bg-accent" />
                    <StatBar label="SPD" value={s.stats.spd} color="bg-neon-lime" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t-2 border-dashed border-ring/40 pt-4">
              <div className="flex items-center gap-2">
                <PixelEnemy size={28} />
                <span className="arcade-font text-base text-muted-foreground">
                  Next boss in 02:14
                </span>
              </div>
              <div className="flex gap-1">
                <PixelStar size={6} color="#ffb020" />
                <PixelStar size={6} color="#ffb020" />
                <PixelStar size={6} color="#ffb020" />
                <PixelStar size={6} color="#ffb020" />
                <PixelStar size={6} color="#3a3f55" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function StatBar({ label, value, color }) {
  return (
    <div className="flex items-center gap-2">
      <span className="pixel-font text-[8px] text-muted-foreground w-7">
        {label}
      </span>
      <div className="flex-1 grid grid-cols-10 gap-[2px]">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 ${i < value ? color : "bg-secondary"}`}
          />
        ))}
      </div>
    </div>
  );
}
