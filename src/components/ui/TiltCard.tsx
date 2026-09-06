"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 100, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateYVal = ((x - centerX) / centerX) * 4;
    const rotateXVal = ((y - centerY) / centerY) * -4;
    rotateX.set(rotateXVal);
    rotateY.set(rotateYVal);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setHovering(false);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX: springX, rotateY: springY, perspective: 600 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
