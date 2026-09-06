"use client";
import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent | Touch) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    const handleMouse = (e: MouseEvent) => move(e);
    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length) move(e.touches[0]);
    };

    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("touchmove", handleTouch, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("touchmove", handleTouch);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[-1]"
      style={{
        background: `radial-gradient(circle 220px at ${pos.x}px ${pos.y}px, rgba(178, 213, 229, 0.12), transparent 80%)`,
      }}
    />
  );
}
