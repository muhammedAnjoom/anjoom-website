import { type ComponentPropsWithoutRef, useId } from "react";

import { cn } from "@/lib/utils";

export interface AnimatedGridPatternProps extends ComponentPropsWithoutRef<"svg"> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: number;
}

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  className,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-[#006b5e]/[0.035] stroke-[#006b5e]/[0.08]",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <rect
        className="magic-grid-pulse"
        width={width - 1}
        height={height - 1}
        x={width * 3}
        y={height * 2}
      />
      <rect
        className="magic-grid-pulse magic-grid-pulse-delayed"
        width={width - 1}
        height={height - 1}
        x={width * 9}
        y={height * 8}
      />
      <rect
        className="magic-grid-pulse magic-grid-pulse-slow"
        width={width - 1}
        height={height - 1}
        x={width * 15}
        y={height * 4}
      />
    </svg>
  );
}
