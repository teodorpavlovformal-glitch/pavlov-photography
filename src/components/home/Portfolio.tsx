"use client";

import { useState } from "react";
import Image from "next/image";
import type { PortfolioContent, PortfolioCategory } from "@/lib/content-types";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { PillTabs } from "@/components/ui/PillTabs";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

interface PortfolioProps {
  content: PortfolioContent;
}

function renderTitle(content: PortfolioContent["title"]) {
  return (
    <>
      {content.lead} <span className="editorial-word">{content.accent}</span>
      {content.tail}
    </>
  );
}

const ratioClassMap = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[16/10]",
  square: "aspect-square",
} as const;

export function Portfolio({ content }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all");

  const filteredItems =
    activeCategory === "all"
      ? content.items
      : content.items.filter((item) => item.category === activeCategory);

  return (
    <SectionShell
      id="portfolio"
      eyebrow={content.eyebrow}
      title={renderTitle(content.title)}
      description={content.description}
    >
      <Reveal>
        <div className="soft-card flex flex-wrap items-center gap-3 p-3 sm:gap-4 sm:p-4">
          <PillTabs
            layoutId="portfolio-tabs"
            options={content.filters}
            value={activeCategory}
            onChange={(value) => setActiveCategory(value)}
          />
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
            {filteredItems.length} проекта
          </p>
        </div>
      </Reveal>

      <div className="mt-8 columns-1 gap-4 min-[480px]:columns-2 lg:columns-3">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className={`group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-[1.6rem] border border-[var(--line-soft)] bg-[var(--surface)] ${ratioClassMap[item.ratio]}`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div>
                <h3 className="text-xl text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.subtitle}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Reveal className="mt-14">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(320px,1.2fr)] lg:items-end">
          <div className="flex justify-center lg:col-span-2">
            <p className="eyebrow">Обработка</p>
          </div>
          <div className="lg:col-span-2">
            <BeforeAfterSlider
              beforeLabel="Преди"
              afterLabel="След"
              beforeImage={{
                src: content.beforeAfter.beforeImage,
                alt: `${content.beforeAfter.alt} преди обработка`,
              }}
              afterImage={{
                src: content.beforeAfter.afterImage,
                alt: `${content.beforeAfter.alt} след обработка`,
              }}
            />
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
