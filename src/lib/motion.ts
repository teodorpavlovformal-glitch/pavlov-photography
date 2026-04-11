"use client";

import type { Transition, Variants } from "framer-motion";

export const motionTiming = {
  micro: 0.2,
  standard: 0.28,
  modal: 0.32,
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 28,
  mass: 0.9,
};

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTiming.standard, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTiming.standard, ease: [0.22, 1, 0.36, 1] },
  },
};

export const hoverLift = {
  whileHover: { y: -6, scale: 1.01 },
  transition: { duration: motionTiming.micro, ease: [0.22, 1, 0.36, 1] },
};

export const accordionVariants: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: motionTiming.micro, ease: [0.4, 0, 1, 1] },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: motionTiming.standard, ease: [0.22, 1, 0.36, 1] },
  },
};

export const modalVariants: Variants = {
  closed: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: motionTiming.micro },
  },
  open: {
    opacity: 1,
    scale: 1,
    transition: { duration: motionTiming.modal, ease: [0.22, 1, 0.36, 1] },
  },
};
