import { type ComponentPropsWithoutRef, type CSSProperties } from "react";

import { cn } from "@/lib/utils";

export interface AnimatedGradientTextProps
  extends ComponentPropsWithoutRef<"span"> {
  speed?: number;
  colorFrom?: string;
  colorTo?: string;
}

export function AnimatedGradientText({
  children,
  className,
  speed = 1,
  colorFrom = "#006b5e",
  colorTo = "#4ddcc6",
  ...props
}: AnimatedGradientTextProps) {
  return (
    <span
      style={
        {
          "--gradient-speed": `${speed * 5}s`,
          "--gradient-from": colorFrom,
          "--gradient-to": colorTo,
        } as CSSProperties
      }
      className={cn("magic-gradient-text", className)}
      {...props}
    >
      {children}
    </span>
  );
}
