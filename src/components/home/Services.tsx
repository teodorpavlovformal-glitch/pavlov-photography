"use client";

import Link from "next/link";
import { useEffect, useEffectEvent, useState } from "react";
import { motion } from "framer-motion";
import type { ServiceCategory, ServicesContent } from "@/lib/content-types";
import { itemVariants } from "@/lib/motion";
import {
  servicePricingEventName,
  type ServicePricingSelectionDetail,
} from "@/lib/service-pricing";
import { PillTabs } from "@/components/ui/PillTabs";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

interface ServicesProps {
  content: ServicesContent;
}

function renderTitle(content: ServicesContent["title"]) {
  return (
    <>
      {content.lead} <span className="editorial-word">{content.accent}</span>
      {content.tail}
    </>
  );
}

export function Services({ content }: ServicesProps) {
  const [activeCategory, setActiveCategory] =
    useState<ServiceCategory>("automotive");

  const onServicePricingSelect = useEffectEvent((event: Event) => {
    const customEvent = event as CustomEvent<ServicePricingSelectionDetail>;
    const category = customEvent.detail?.category;

    if (category && content.tabs.some((tab) => tab.category === category)) {
      setActiveCategory(category);
    }
  });

  useEffect(() => {
    const listener = onServicePricingSelect as EventListener;

    window.addEventListener(servicePricingEventName, listener);
    return () => window.removeEventListener(servicePricingEventName, listener);
  }, []);

  const activeTab = content.tabs.find((tab) => tab.category === activeCategory) ?? content.tabs[0];

  return (
    <SectionShell
      id="services"
      eyebrow={content.eyebrow}
      title={renderTitle(content.title)}
      description={content.description}
    >
      <Reveal>
        <PillTabs
          layoutId="services-tabs"
          options={content.tabs.map((tab) => ({ value: tab.category, label: tab.label }))}
          value={activeCategory}
          onChange={(value) => setActiveCategory(value)}
        />
      </Reveal>
      <div className="mt-8">
        <p className="max-w-[34rem] text-[0.94rem] leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
          {activeTab.description}
        </p>
        <div className="mt-4 sm:mt-6">
          <Link href="/services" className="button-secondary">
            Разгледай всички услуги
          </Link>
        </div>
        <div className="mt-6 grid gap-3.5 sm:mt-8 sm:gap-5 lg:grid-cols-3">
          {activeTab.plans.map((plan) => (
            <motion.article
              key={plan.name}
              variants={itemVariants}
              className={[
                "soft-card flex h-full flex-col p-4 sm:p-6",
                plan.featured
                  ? "border-[var(--accent-bright)] bg-[rgba(242,232,92,0.08)]"
                  : "",
              ].join(" ")}
            >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-xs sm:tracking-[0.24em]">
                      {plan.name}
                    </p>
                    <p className="mt-3 text-[2.2rem] tracking-[-0.06em] text-white sm:mt-4 sm:text-5xl">{plan.price}</p>
                  </div>
                {plan.badge ? (
                  <span className="rounded-full bg-[var(--accent-bright)] px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.18em] text-black sm:px-3 sm:text-[0.65rem] sm:tracking-[0.24em]">
                    {plan.badge}
                  </span>
                ) : null}
              </div>
              <p className="mt-4 text-[0.92rem] leading-6 text-[var(--muted)] sm:mt-5 sm:text-sm sm:leading-7">{plan.summary}</p>
              <ul className="mt-4 space-y-2.5 border-t border-[var(--line-soft)] pt-4 text-[0.92rem] leading-6 text-white sm:mt-6 sm:space-y-3 sm:pt-6 sm:text-sm sm:leading-7">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-bright)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="button-secondary mt-5 justify-center sm:mt-8">
                Запази час
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
