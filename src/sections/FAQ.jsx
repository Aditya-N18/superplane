import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/pixel/accordion";
import { Badge } from "@/components/ui/pixel/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/pixel/alert";
import { Info } from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "WHICH PLATFORMS DO YOU SUPPORT?",
    a: "Anything with a modern browser — Chrome, Firefox, Safari, and Edge. Native Steam, Switch, and iOS builds drop Q3 with cross-progression.",
  },
  {
    q: "IS THIS REALLY FREE TO PLAY?",
    a: "Yep. The full base game (12 hulls, 40+ levels, online co-op) is free forever. PILOT and ACE only add cosmetics, cloud features, and competitive infrastructure.",
  },
  {
    q: "DO I NEED A CONTROLLER?",
    a: "Nope. Default keyboard layout (WASD + mouse) is tournament-viable. Xbox, PS5, Switch Pro, and any HID gamepad work out of the box with full rebinding.",
  },
  {
    q: "HOW BIG IS THE DOWNLOAD?",
    a: "1.8 MB initial WebGL bundle. Levels and assets stream as you play. Total cached after a full run: ~120MB.",
  },
  {
    q: "ARE THERE ANY MICROTRANSACTIONS?",
    a: "Only cosmetic skins and emotes, all earnable in-game. Zero pay-to-win. Zero loot boxes. We hate them too.",
  },
  {
    q: "CAN I MOD THE GAME?",
    a: "Workshop is in open beta. Build your own ships, biomes, and bullet patterns in our Lua-based scripting layer and publish in one click.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container max-w-4xl">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <Badge variant="secondary">// FAQ</Badge>
          <h2 className="pixel-font text-2xl sm:text-3xl md:text-4xl text-foreground leading-tight">
            QUESTIONS? <span className="text-accent text-shadow-glow">WE GOT YOU.</span>
          </h2>
          <p className="arcade-font text-xl text-muted-foreground max-w-xl">
            Still curious? Hit us up on Discord — we read everything.
          </p>
        </div>

        <Alert variant="default" className="mb-10">
          <Info className="w-4 h-4 text-accent" />
          <AlertTitle>HEADS UP, PILOT</AlertTitle>
          <AlertDescription>
            Beta testers get a permanent founder badge + the EX-BLITZ-7 chrome
            skin. Slots are limited.
          </AlertDescription>
        </Alert>

        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
