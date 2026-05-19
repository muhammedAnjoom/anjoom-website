import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

interface Position {
  x: number;
  y: number;
}

const DESKTOP_POINTER_QUERY = "(any-hover: hover) and (any-pointer: fine)";

export function SmoothCursor() {
  const lastMousePos = useRef<Position>({ x: 0, y: 0 });
  const velocity = useRef<Position>({ x: 0, y: 0 });
  const lastUpdateTime = useRef(Date.now());
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const ringX = useSpring(0, {
    damping: 34,
    stiffness: 220,
    mass: 1,
  });
  const ringY = useSpring(0, {
    damping: 34,
    stiffness: 220,
    mass: 1,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_POINTER_QUERY);

    const updateEnabled = () => {
      setIsEnabled(mediaQuery.matches);
      if (!mediaQuery.matches) {
        setIsVisible(false);
      }
    };

    updateEnabled();
    mediaQuery.addEventListener("change", updateEnabled);

    return () => mediaQuery.removeEventListener("change", updateEnabled);
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const updateVelocity = (currentPos: Position) => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastUpdateTime.current;

      if (deltaTime > 0) {
        velocity.current = {
          x: (currentPos.x - lastMousePos.current.x) / deltaTime,
          y: (currentPos.y - lastMousePos.current.y) / deltaTime,
        };
      }

      lastUpdateTime.current = currentTime;
      lastMousePos.current = currentPos;
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      const currentPos = { x: event.clientX, y: event.clientY };
      updateVelocity(currentPos);
      setIsVisible(true);

      ringX.set(currentPos.x);
      ringY.set(currentPos.y);
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target;
      setIsHovering(
        target instanceof Element &&
        Boolean(target.closest("a, button, [role='button'], [data-cursor='hover']"))
      );
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerover", handlePointerOver, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
    };
  }, [isEnabled, ringX, ringY]);

  if (!isEnabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[50] h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-emerald-500/20 via-teal-500/20 to-transparent blur-[80px] mix-blend-screen"
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.1 : 1,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
