import { type CSSProperties } from "react";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
  reverse?: boolean;
  borderWidth?: number;
}

export const BorderBeam = ({
  className,
  size = 90,
  delay = 0,
  duration = 7,
  colorFrom = "#006b5e",
  colorTo = "#4ddcc6",
  reverse = false,
  borderWidth = 1,
}: BorderBeamProps) => {
  return (
    <div
      aria-hidden="true"
      style={
        {
          "--beam-size": `${size}px`,
          "--beam-duration": `${duration}s`,
          "--beam-delay": `${delay}s`,
          "--beam-from": colorFrom,
          "--beam-to": colorTo,
          "--beam-border-width": `${borderWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "magic-border-beam",
        reverse && "magic-border-beam-reverse",
        className
      )}
    />
  );
};
