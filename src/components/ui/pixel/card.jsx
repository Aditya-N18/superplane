import * as React from "react";
import { cn } from "@/lib/utils";
import "./styles.css";

const Card = React.forwardRef(({ className, font = "pixel", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative rounded-none border-0 bg-card text-card-foreground pixel-shadow box-shadow-margin",
      font === "pixel" && "pixel-font",
      className
    )}
    {...props}
  />
));
Card.displayName = "PixelCard";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "PixelCardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-normal text-base leading-snug tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "PixelCardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "PixelCardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "PixelCardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "PixelCardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
