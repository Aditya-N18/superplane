import React, { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/pixel/button";
import { Input } from "@/components/ui/pixel/input";
import { Badge } from "@/components/ui/pixel/badge";
import { MovingBorder } from "@/components/ui/aceternity/moving-border";
import { Starfield } from "@/components/Starfield";
import { PixelShip } from "@/components/PixelShip";

export function CTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setEmail("");
  }

  return (
    <section
      id="cta"
      className="relative py-24 sm:py-32 overflow-hidden scanlines"
    >
      <Starfield density={70} />
      <div className="container relative z-10">
        <MovingBorder
          duration={3500}
          containerClassName="mx-auto max-w-4xl bg-card pixel-shadow"
          className="p-10 sm:p-16 text-center flex flex-col items-center gap-6 bg-card"
          borderClassName="h-16 w-16 bg-[radial-gradient(hsl(var(--primary))_30%,transparent_70%)]"
        >
          <Badge variant="default">★ JOIN THE BETA</Badge>

          <PixelShip
            size={96}
            variant="pink"
            className="animate-float-y drop-shadow-[0_0_24px_rgba(255,46,136,0.55)]"
          />

          <h2 className="pixel-font text-2xl sm:text-3xl md:text-4xl text-foreground leading-tight max-w-2xl">
            READY <span className="text-primary text-shadow-pink">PLAYER ONE?</span>
          </h2>
          <p className="arcade-font text-xl text-muted-foreground max-w-xl">
            Drop your email, get a beta key in 60 seconds and a founder badge for life.
            No spam, ever.
          </p>

          <form
            onSubmit={submit}
            className="w-full max-w-md flex flex-col sm:flex-row gap-3 pt-2"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none z-10" />
              <Input
                type="email"
                required
                placeholder="pilot@superplane.gg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-9 w-full"
                aria-label="Email address"
              />
            </div>
            <Button type="submit" variant="primary" size="lg">
              GET KEY <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </form>

          {sent && (
            <p
              role="status"
              className="arcade-font text-lg text-success animate-pulse"
            >
              ✓ Beta key dispatched. Check your inbox, pilot.
            </p>
          )}

          <p className="arcade-font text-base text-muted-foreground pt-2">
            By signing up you agree to our cookie-flavored
            <span className="text-accent"> terms of arcade</span>.
          </p>
        </MovingBorder>
      </div>
    </section>
  );
}
