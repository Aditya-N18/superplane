import React from "react";
import { Marquee } from "@/components/ui/aceternity/marquee";

const PRESS = [
  "★ ★ ★ ★ ★  IGN",
  "“PURE NEON ECSTASY”  — POLYGON",
  "GAME OF THE YEAR · PIXEL AWARDS '26",
  "EDITORS' CHOICE  — STEAM",
  "“THE NEW STANDARD”  — KOTAKU",
  "FEATURED · APPLE ARCADE",
  "97 / 100 — METACRITIC",
];

export function LogosMarquee() {
  return (
    <section className="relative border-y border-border/50 bg-card/30 py-8">
      <Marquee items={PRESS} />
    </section>
  );
}
