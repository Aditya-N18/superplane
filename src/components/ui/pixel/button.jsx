import * as React from "react";
import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import "./styles.css";

const pixelButtonVariants = cva(
  "pixel__button pixel-font cursor-pointer rounded-none items-center justify-center whitespace-nowrap text-sm transition-all duration-100 select-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "pixel-default__button box-shadow-margin",
        primary: "pixel-primary__button box-shadow-margin",
        secondary: "pixel-secondary__button box-shadow-margin",
        warning: "pixel-warning__button box-shadow-margin",
        success: "pixel-success__button box-shadow-margin",
        destructive: "pixel-destructive__button box-shadow-margin",
        ghost: "pixel-ghost__button box-shadow-margin",
        link: "pixel-link__button",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(pixelButtonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "PixelButton";

export { Button, pixelButtonVariants };
