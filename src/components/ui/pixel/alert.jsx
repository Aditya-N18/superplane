import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full p-4 pixel-font rounded-none border-0 box-shadow-margin grid grid-cols-[auto_1fr] items-start gap-3",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground pixel-shadow",
        destructive:
          "bg-card text-destructive pixel-shadow-destructive [&_[data-slot=description]]:text-destructive/80",
        success:
          "bg-card text-success [&_[data-slot=description]]:text-success/80 pixel-shadow",
        warning:
          "bg-card text-warning [&_[data-slot=description]]:text-warning/80 pixel-shadow",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = React.forwardRef(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "PixelAlert";

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "col-start-2 text-sm font-medium underline underline-offset-4 tracking-tight",
      className
    )}
    {...props}
  />
));
AlertTitle.displayName = "PixelAlertTitle";

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="description"
    className={cn(
      "col-start-2 text-xs leading-relaxed [&_p]:leading-relaxed",
      className
    )}
    {...props}
  />
));
AlertDescription.displayName = "PixelAlertDescription";

export { Alert, AlertTitle, AlertDescription };
