import React, { useEffect, useState } from "react";
import { Menu, X, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/pixel/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#features", label: "FEATURES" },
  { href: "#showcase", label: "SHOWCASE" },
  { href: "#pricing", label: "PRICING" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-background/70 border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative inline-flex items-center justify-center w-9 h-9 bg-accent pixel-shadow box-shadow-margin">
            <Gamepad2 className="w-5 h-5 text-accent-foreground" strokeWidth={2.5} />
          </span>
          <span className="pixel-font text-sm sm:text-base text-foreground tracking-wider">
            SUPER<span className="text-primary">PLANE</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="pixel-font text-[11px] text-muted-foreground hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <a href="#">SIGN IN</a>
          </Button>
          <Button variant="primary" size="sm" asChild>
            <a href="#cta">PLAY NOW</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="container py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="pixel-font text-xs text-muted-foreground hover:text-accent"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <Button variant="ghost" size="sm" className="flex-1" asChild>
                <a href="#">SIGN IN</a>
              </Button>
              <Button variant="primary" size="sm" className="flex-1" asChild>
                <a href="#cta" onClick={() => setOpen(false)}>
                  PLAY NOW
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
