import * as React from "react";
import { cn } from "@/lib/utils";
import "./styles.css";

const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "pixel__input pixel-font max-w-full outline-none p-3 bg-background text-foreground placeholder:text-sm box-shadow-margin disabled:opacity-40 disabled:cursor-not-allowed border-0 rounded-none",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "PixelInput";

export { Input };
