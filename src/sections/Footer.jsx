import React from "react";
import { Gamepad2, Github, Twitter, Youtube, MessageSquare } from "lucide-react";

const LINKS = [
  {
    title: "GAME",
    items: ["Features", "Roadmap", "Patch Notes", "Esports"],
  },
  {
    title: "STUDIO",
    items: ["About", "Press Kit", "Careers", "Contact"],
  },
  {
    title: "SUPPORT",
    items: ["Help Center", "Status", "Bug Reports", "Refunds"],
  },
  {
    title: "LEGAL",
    items: ["Privacy", "Terms", "Cookies", "EULA"],
  },
];

const SOCIAL = [
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Github, label: "GitHub", href: "#" },
  { Icon: Youtube, label: "YouTube", href: "#" },
  { Icon: MessageSquare, label: "Discord", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/40">
      <div className="container py-16 grid gap-12 lg:grid-cols-[1.2fr_2fr]">
        <div className="flex flex-col gap-4">
          <a href="#top" className="flex items-center gap-2">
            <span className="relative inline-flex items-center justify-center w-9 h-9 bg-accent pixel-shadow box-shadow-margin">
              <Gamepad2 className="w-5 h-5 text-accent-foreground" strokeWidth={2.5} />
            </span>
            <span className="pixel-font text-base text-foreground tracking-wider">
              SUPER<span className="text-primary">PLANE</span>
            </span>
          </a>
          <p className="arcade-font text-lg text-muted-foreground max-w-sm">
            A retro pixel-art arcade shoot 'em up built by a tiny team of arcade
            kids in Tokyo, Berlin & Brooklyn.
          </p>
          <div className="flex gap-2 pt-2">
            {SOCIAL.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex w-10 h-10 items-center justify-center bg-background border-2 border-ring/40 text-foreground hover:text-accent hover:border-accent transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {LINKS.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <p className="pixel-font text-[10px] text-accent">{col.title}</p>
              <ul className="flex flex-col gap-2">
                {col.items.map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="arcade-font text-base text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="pixel-font text-[10px] text-muted-foreground">
            © 2026 SUPERPLANE STUDIOS. ALL RIGHTS RESERVED.
          </p>
          <p className="arcade-font text-base text-muted-foreground">
            Made with <span className="text-primary">♥</span> &amp; <span className="text-accent">pixels</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
