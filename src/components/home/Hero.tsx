"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { HeroContent, ServiceCategory } from "@/lib/content-types";
import { createServicePricingSelectionEvent } from "@/lib/service-pricing";
import { Reveal } from "@/components/ui/Reveal";
import { itemVariants } from "@/lib/motion";

interface HeroProps {
  content: HeroContent;
}

function renderEditorialTitle(title: HeroContent["title"]) {
  return (
    <>
      {title.lead} <span className="editorial-word">{title.accent}</span>
      {title.tail}
    </>
  );
}

export function Hero({ content }: HeroProps) {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("automotive");

  function handleCategoryClick(category: ServiceCategory) {
    setActiveCategory(category);

    window.dispatchEvent(createServicePricingSelectionEvent(category));

    const servicesSection = document.getElementById("services");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    servicesSection?.scrollIntoView?.({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }

  return (
    <section
      id="hero"
      className="section-frame relative overflow-hidden px-4 pb-10 pt-20 sm:px-8 sm:pb-14 sm:pt-32 lg:px-10 xl:px-16"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-7 sm:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-start">
        <Reveal>
          <div className="relative">
            <h1 className="max-w-[10.75ch] text-[2.55rem] leading-[0.93] tracking-[-0.06em] text-white sm:max-w-xl sm:text-6xl lg:text-7xl">
              {renderEditorialTitle(content.title)}
            </h1>
            <p className="mt-4 max-w-[29rem] text-[0.98rem] leading-7 text-[var(--muted)] sm:mt-6 sm:max-w-xl sm:text-lg sm:leading-8">
              {content.description}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row">
              <a href="#contact" className="button-primary justify-center sm:justify-start">
                {content.primaryCta}
              </a>
              <a href="#services" className="button-secondary justify-center sm:justify-start">
                {content.secondaryCta}
              </a>
            </div>
            <div className="mt-9 grid max-w-[25rem] grid-cols-2 gap-x-5 gap-y-4 border-t border-[var(--line-soft)] pt-5 sm:mt-12 sm:max-w-none sm:grid-cols-3 sm:gap-4 sm:pt-6">
              {content.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={index === content.stats.length - 1 ? "col-span-2 sm:col-span-1" : ""}
                >
                  <p className="text-[1.85rem] tracking-[-0.04em] text-white sm:text-3xl">{stat.value}</p>
                  <p className="mt-2 max-w-[10rem] text-[0.62rem] uppercase tracking-[0.18em] text-[var(--muted)] sm:max-w-none sm:text-xs sm:tracking-[0.28em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal amount={0.2}>
          <div className="relative rounded-[1.2rem] border border-[var(--line-soft)] bg-[rgba(255,255,255,0.02)] p-3 shadow-[0_18px_42px_rgba(0,0,0,0.2)] sm:rounded-[2rem] sm:p-4 sm:shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
            <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(242,232,92,0.8),transparent)]" />
            <div className="space-y-2.5 sm:space-y-4">
              {content.cards.map((card) => {
                const isActive = card.category === activeCategory;

                return (
                  <motion.button
                    key={card.category}
                    type="button"
                    variants={itemVariants}
                    className={[
                      "relative flex w-full flex-col rounded-[1rem] border px-4 py-4 text-left transition-all duration-300 sm:rounded-[1.5rem] sm:px-5 sm:py-5",
                      isActive
                        ? "border-[var(--accent-bright)] bg-[rgba(242,232,92,0.1)]"
                        : "border-[var(--line-soft)] bg-[rgba(255,255,255,0.02)] hover:border-[var(--line-strong)]",
                    ].join(" ")}
                    aria-controls="services"
                    onClick={() => handleCategoryClick(card.category)}
                  >
                    <span className="text-[1.03rem] text-white sm:text-lg">{card.title}</span>
                    <span className="mt-2 text-[0.6rem] uppercase tracking-[0.16em] text-[var(--accent)] sm:text-xs sm:tracking-[0.24em]">
                      {card.subtitle}
                    </span>
                    <span className="mt-3 max-w-sm text-[0.92rem] leading-6 text-[var(--muted)] sm:mt-4 sm:text-sm sm:leading-7">
                      {card.details}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
