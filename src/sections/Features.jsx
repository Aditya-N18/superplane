import React from "react";
import {
  Crosshair,
  Cpu,
  Globe2,
  Joystick,
  Music2,
  Trophy,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/pixel/card";
import { Badge } from "@/components/ui/pixel/badge";

const FEATURES = [
  {
    icon: Crosshair,
    title: "BULLET HELL",
    desc: "Hand-tuned enemy patterns generate trillions of unique gauntlets. No two runs the same.",
    color: "text-neon-pink",
  },
  {
    icon: Cpu,
    title: "RUNS ANYWHERE",
    desc: "WebGL build streams in under 2MB. Plays at 144fps on a potato. Yes, really.",
    color: "text-neon-cyan",
  },
  {
    icon: Joystick,
    title: "1P · 2P · ONLINE",
    desc: "Couch co-op, rollback netcode, and cross-platform lobbies in under 3 clicks.",
    color: "text-neon-lime",
  },
  {
    icon: Music2,
    title: "ORIGINAL OST",
    desc: "42 chiptune tracks layered with live synths from the team behind ENTER THE GUNGEON.",
    color: "text-neon-violet",
  },
  {
    icon: Globe2,
    title: "WEEKLY WORLDS",
    desc: "A new biome, boss, and weapon class every Tuesday — forever. Live ops baked in.",
    color: "text-neon-amber",
  },
  {
    icon: Trophy,
    title: "RANKED LEAGUES",
    desc: "Climb from Pixel I to Plasma Lord. Seasonal cosmetics, no pay-to-win, ever.",
    color: "text-neon-pink",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <Badge variant="outline">// CORE FEATURES</Badge>
          <h2 className="pixel-font text-2xl sm:text-3xl md:text-4xl text-foreground max-w-3xl leading-tight">
            EVERYTHING YOU LOVED ABOUT THE
            <br />
            <span className="text-accent text-shadow-glow">ARCADE</span>{" "}
            — REBUILT FOR <span className="text-primary text-shadow-pink">2026</span>.
          </h2>
          <p className="arcade-font text-xl text-muted-foreground max-w-2xl">
            Six pillars. Zero compromise. Each one engineered to make you yell at your
            monitor in the best way.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <Card key={f.title} className="group transition-transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`inline-flex items-center justify-center w-12 h-12 bg-background border-2 border-ring/40 ${f.color}`}
                  >
                    <f.icon className="w-6 h-6" strokeWidth={2} />
                  </span>
                  <span className="pixel-font text-[10px] text-muted-foreground">
                    /// 00{FEATURES.indexOf(f) + 1}
                  </span>
                </div>
                <CardTitle className="pixel-font text-sm pt-2">
                  {f.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="arcade-font text-lg text-muted-foreground">
                  {f.desc}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
