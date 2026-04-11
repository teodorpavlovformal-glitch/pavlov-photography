"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { revealVariants } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  amount?: number;
}

export function Reveal({ children, className, amount = 0.25 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}
