"use client";

import { useEffect, useEffectEvent } from "react";

export function PointerGlow() {
  const handlePointerMove = useEffectEvent((event: PointerEvent) => {
    document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
    document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
  });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    if (window.innerWidth < 1024) {
      return;
    }

    document.documentElement.style.setProperty("--pointer-x", `${window.innerWidth / 2}px`);
    document.documentElement.style.setProperty("--pointer-y", "280px");

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return null;
}
