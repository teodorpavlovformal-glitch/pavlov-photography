"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import type { FaqContent } from "@/lib/content-types";
import { accordionVariants } from "@/lib/motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

interface FaqProps {
  content: FaqContent;
}

function renderTitle(content: FaqContent["title"]) {
  return (
    <>
      {content.lead} <span className="editorial-word">{content.accent}</span>
      {content.tail}
    </>
  );
}

export function Faq({ content }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionShell id="faq" eyebrow={content.eyebrow} title={renderTitle(content.title)}>
      <div className="grid gap-4 lg:grid-cols-2">
        {content.items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <Reveal key={item.question}>
              <article className="soft-card overflow-hidden">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:gap-4 sm:px-5 sm:py-5"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                >
                  <span className="text-[0.95rem] leading-[1.65rem] text-white sm:text-base sm:leading-7">{item.question}</span>
                  <span className="icon-button shrink-0">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="answer"
                      variants={accordionVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <div className="border-t border-[var(--line-soft)] px-4 py-4 text-[0.92rem] leading-6 text-[var(--muted)] sm:px-5 sm:py-5 sm:text-sm sm:leading-7">
                        {item.answer}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
