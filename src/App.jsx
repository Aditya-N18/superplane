import React from "react";
import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { LogosMarquee } from "@/sections/LogosMarquee";
import { Features } from "@/sections/Features";
import { Showcase } from "@/sections/Showcase";
import { Pricing } from "@/sections/Pricing";
import { FAQ } from "@/sections/FAQ";
import { CTA } from "@/sections/CTA";
import { Footer } from "@/sections/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-background text-foreground overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <LogosMarquee />
        <Features />
        <Showcase />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

