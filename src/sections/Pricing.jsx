import React from "react";
import { Check, Zap, Crown, Rocket } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/pixel/card";
import { Badge } from "@/components/ui/pixel/badge";
import { Button } from "@/components/ui/pixel/button";

const PLANS = [
  {
    id: "free",
    name: "ARCADE",
    price: "0",
    tagline: "Insert coin. Press start.",
    icon: Zap,
    cta: "PLAY FREE",
    variant: "ghost",
    features: [
      "12 starter ships",
      "Solo + local co-op",
      "Daily seed runs",
      "Community workshop",
    ],
  },
  {
    id: "pro",
    name: "PILOT",
    price: "9",
    tagline: "Most pilots fly here.",
    icon: Rocket,
    cta: "GO PILOT",
    variant: "primary",
    highlighted: true,
    features: [
      "All 48 hulls + skins",
      "Online ranked + lobbies",
      "Cloud saves & 4K assets",
      "Weekly biome drops",
      "Priority netcode region",
    ],
  },
  {
    id: "elite",
    name: "ACE",
    price: "19",
    tagline: "For tournament play.",
    icon: Crown,
    cta: "BECOME ACE",
    variant: "secondary",
    features: [
      "Everything in PILOT",
      "Private tournament servers",
      "Replay studio + photo mode",
      "Exclusive ACE cosmetics",
      "Early access to season",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <Badge variant="warning">// PICK YOUR TIER</Badge>
          <h2 className="pixel-font text-2xl sm:text-3xl md:text-4xl text-foreground max-w-3xl leading-tight">
            ONE QUARTER.<br />
            <span className="text-primary text-shadow-pink">UNLIMITED CONTINUES.</span>
          </h2>
          <p className="arcade-font text-xl text-muted-foreground max-w-2xl">
            No ads. No loot boxes. Cancel anytime. Cosmetics only, forever.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          {PLANS.map((p) => (
            <div
              key={p.id}
              className={`relative ${p.highlighted ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              {p.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <Badge variant="default">★ MOST POPULAR</Badge>
                </div>
              )}
              <Card
                className={`h-full flex flex-col ${
                  p.highlighted
                    ? "ring-4 ring-primary/40"
                    : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex w-10 h-10 items-center justify-center bg-background border-2 border-ring/40 text-accent">
                      <p.icon className="w-5 h-5" strokeWidth={2} />
                    </span>
                    <span className="pixel-font text-xs text-muted-foreground">
                      /// {p.name}
                    </span>
                  </div>
                  <div className="pt-4">
                    <p className="pixel-font text-sm text-foreground">{p.name}</p>
                    <p className="arcade-font text-xl text-muted-foreground">
                      {p.tagline}
                    </p>
                  </div>
                  <div className="flex items-baseline gap-2 pt-4">
                    <span className="pixel-font text-3xl text-foreground">
                      ${p.price}
                    </span>
                    <span className="arcade-font text-lg text-muted-foreground">
                      /month
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-6">
                  <ul className="space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex w-4 h-4 items-center justify-center bg-success text-success-foreground">
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </span>
                        <span className="arcade-font text-lg text-foreground">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4">
                    <Button variant={p.variant} size="lg" className="w-full">
                      {p.cta}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 arcade-font text-base text-muted-foreground">
          ⚡ All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
