"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { PortfolioItem } from "@/lib/content-types";
import { modalVariants } from "@/lib/motion";

interface GalleryLightboxProps {
  items: PortfolioItem[];
  activeIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function GalleryLightbox({
  items,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  useEffect(() => {
    if (!activeItem) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrev();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeItem, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {activeItem ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/82 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
            className="relative w-full max-w-5xl overflow-hidden rounded-[1.75rem] border border-[var(--line-soft)] bg-[var(--surface)]"
            variants={modalVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute right-4 top-4 z-10 flex gap-2">
              <button
                type="button"
                className="icon-button"
                onClick={onClose}
                aria-label="Затвори"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={activeItem.image}
                alt={activeItem.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-6 pb-6 pt-16">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                  {activeItem.isVideo ? "Видео" : "Фотография"}
                </p>
                <h3 className="mt-2 text-2xl text-white">{activeItem.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{activeItem.subtitle}</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-[var(--line-soft)] px-6 py-4">
              <button
                type="button"
                className="icon-button"
                onClick={onPrev}
                aria-label="Предишен проект"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="text-sm tracking-[0.2em] text-[var(--muted)] uppercase">
                {activeIndex !== null ? `${activeIndex + 1} / ${items.length}` : ""}
              </span>
              <button
                type="button"
                className="icon-button"
                onClick={onNext}
                aria-label="Следващ проект"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
