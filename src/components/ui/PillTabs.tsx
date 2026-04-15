"use client";

import { motion } from "framer-motion";
import { springTransition } from "@/lib/motion";

interface TabOption<T extends string> {
  value: T;
  label: string;
}

interface PillTabsProps<T extends string> {
  layoutId: string;
  options: TabOption<T>[];
  value: T;
  onChange: (value: T) => void;
}

export function PillTabs<T extends string>({
  layoutId,
  options,
  value,
  onChange,
}: PillTabsProps<T>) {
  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className="inline-flex flex-wrap gap-1 rounded-[1rem] border border-[var(--line-soft)] bg-[rgba(255,255,255,0.02)] p-1 sm:gap-2 sm:rounded-full"
    >
      {options.map((option) => {
        const isActive = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={[
              "relative rounded-full px-2.5 py-2 text-[0.66rem] tracking-[0.14em] uppercase transition-colors duration-200 sm:px-4 sm:text-sm sm:tracking-[0.22em]",
              isActive
                ? "text-black"
                : "text-[var(--muted)] hover:text-[var(--foreground)]",
            ].join(" ")}
            onClick={() => onChange(option.value)}
          >
            {isActive ? (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-0 rounded-full bg-[var(--accent-bright)]"
                transition={springTransition}
              />
            ) : null}
            <span className="relative z-10">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
