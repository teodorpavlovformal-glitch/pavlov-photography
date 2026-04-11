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
      className="section-frame relative overflow-hidden px-5 pb-14 pt-32 sm:px-8 lg:px-10 xl:px-16"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-start">
        <Reveal>
          <div className="relative">
            <h1 className="max-w-xl text-5xl leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              {renderEditorialTitle(content.title)}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              {content.description}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="button-primary">
                {content.primaryCta}
              </a>
              <a href="#services" className="button-secondary">
                {content.secondaryCta}
              </a>
            </div>
            <div className="mt-12 grid gap-4 border-t border-[var(--line-soft)] pt-6 sm:grid-cols-3">
              {content.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl tracking-[-0.04em] text-white">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal amount={0.2}>
          <div className="relative rounded-[2rem] border border-[var(--line-soft)] bg-[rgba(255,255,255,0.02)] p-4 shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
            <div className="absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(242,232,92,0.8),transparent)]" />
            <div className="space-y-4">
              {content.cards.map((card) => {
                const isActive = card.category === activeCategory;

                return (
                  <motion.button
                    key={card.category}
                    type="button"
                    variants={itemVariants}
                    className={[
                      "relative flex w-full flex-col rounded-[1.5rem] border px-5 py-5 text-left transition-all duration-300",
                      isActive
                        ? "border-[var(--accent-bright)] bg-[rgba(242,232,92,0.1)]"
                        : "border-[var(--line-soft)] bg-[rgba(255,255,255,0.02)] hover:border-[var(--line-strong)]",
                    ].join(" ")}
                    aria-controls="services"
                    onClick={() => handleCategoryClick(card.category)}
                  >
                    <span className="text-lg text-white">{card.title}</span>
                    <span className="mt-2 text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                      {card.subtitle}
                    </span>
                    <span className="mt-4 max-w-sm text-sm leading-7 text-[var(--muted)]">
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
