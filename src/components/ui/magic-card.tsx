import {
  type CSSProperties,
  type ReactNode,
  useCallback,
  useState,
} from "react";

import { cn } from "@/lib/utils";

interface MagicCardProps {
  children: ReactNode;
  className?: string;
  spotlightSize?: number;
}

export function MagicCard({
  children,
  className,
  spotlightSize = 240,
}: MagicCardProps) {
  const [position, setPosition] = useState({ x: -spotlightSize, y: -spotlightSize });

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      setPosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    },
    []
  );

  const handlePointerLeave = useCallback(() => {
    setPosition({ x: -spotlightSize, y: -spotlightSize });
  }, [spotlightSize]);

  return (
    <div
      data-cursor="hover"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={
        {
          "--magic-x": `${position.x}px`,
          "--magic-y": `${position.y}px`,
          "--magic-size": `${spotlightSize}px`,
        } as CSSProperties
      }
      className={cn("magic-card", className)}
    >
      {children}
    </div>
  );
}
