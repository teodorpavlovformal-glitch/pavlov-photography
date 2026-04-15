"use client";

import { useEffect, useEffectEvent, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReviewsContent } from "@/lib/content-types";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

interface ReviewsProps {
  content: ReviewsContent;
}

function renderTitle(content: ReviewsContent["title"]) {
  return (
    <>
      {content.lead} <span className="editorial-word">{content.accent}</span>
      {content.tail}
    </>
  );
}

export function Reviews({ content }: ReviewsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const tick = useEffectEvent(() => {
    setActiveIndex((current) => (current + 1) % content.featured.length);
  });

  useEffect(() => {
    const timer = window.setInterval(() => tick(), 5500);
    return () => window.clearInterval(timer);
  }, []);

  const activeReview = content.featured[activeIndex];

  return (
    <SectionShell id="reviews" eyebrow={content.eyebrow} title={renderTitle(content.title)}>
      <Reveal>
        <article className="soft-card p-4 sm:p-10">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent)]">★★★★★</p>
          <blockquote className="mt-4 max-w-4xl text-[1.32rem] leading-[1.15] text-white sm:mt-6 sm:text-4xl">
            “{activeReview.quote}”
          </blockquote>
          <div className="mt-5 flex flex-col gap-4 border-t border-[var(--line-soft)] pt-4 sm:mt-8 sm:pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[0.72rem] uppercase tracking-[0.18em] text-white sm:text-sm sm:tracking-[0.24em]">{activeReview.author}</p>
              <p className="mt-2 text-[0.62rem] uppercase tracking-[0.16em] text-[var(--muted)] sm:text-xs sm:tracking-[0.24em]">
                {activeReview.role}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="icon-button"
                aria-label="Предишен отзив"
                onClick={() =>
                  setActiveIndex((current) =>
                    current === 0 ? content.featured.length - 1 : current - 1,
                  )
                }
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-2">
                {content.featured.map((review, index) => (
                  <button
                    key={review.author}
                    type="button"
                    aria-label={`Покажи отзив ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    className={[
                      "h-1.5 rounded-full transition-all",
                      index === activeIndex
                        ? "w-8 bg-[var(--accent-bright)]"
                        : "w-3 bg-[var(--line-soft)]",
                    ].join(" ")}
                  />
                ))}
              </div>
              <button
                type="button"
                className="icon-button"
                aria-label="Следващ отзив"
                onClick={() => setActiveIndex((current) => (current + 1) % content.featured.length)}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </article>
      </Reveal>
    </SectionShell>
  );
}
