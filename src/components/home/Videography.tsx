"use client";

import Link from "next/link";
import { useState, startTransition } from "react";
import { motion } from "framer-motion";
import type { VideographyContent } from "@/lib/content-types";
import { IconToken } from "@/components/ui/IconToken";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

interface VideographyProps {
  content: VideographyContent;
}

function renderTitle(content: VideographyContent["title"]) {
  return (
    <>
      {content.lead} <span className="editorial-word">{content.accent}</span>
      {content.tail}
    </>
  );
}

export function Videography({ content }: VideographyProps) {
  const [activeUseCase, setActiveUseCase] = useState(0);

  return (
    <SectionShell
      id="videography"
      eyebrow={content.eyebrow}
      title={renderTitle(content.title)}
      description={content.description}
      contentClassName="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)]"
    >
      <div className="space-y-6">
        <Reveal>
          <div className="inline-flex rounded-[1.75rem] border border-[var(--line-soft)] bg-[rgba(242,232,92,0.08)] px-6 py-5">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Per video</p>
              <p className="mt-3 text-4xl tracking-[-0.05em] text-white">{content.price}</p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div>
            <Link href="/services/videography" className="button-secondary">
              Детайли за видеография
            </Link>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {content.features.map((feature) => (
            <Reveal key={feature.title}>
              <article className="soft-card h-full p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line-soft)] bg-[rgba(255,255,255,0.03)] text-[var(--accent-bright)]">
                  <IconToken name={feature.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl text-white">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {feature.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="grid gap-5">
        <Reveal>
          <div className="soft-card overflow-hidden">
            {content.useCases.map((useCase, index) => {
              const isActive = index === activeUseCase;

              return (
                <button
                  key={useCase.title}
                  type="button"
                  className={[
                    "flex w-full items-center justify-between border-b border-[var(--line-soft)] px-5 py-5 text-left transition-colors last:border-b-0",
                    isActive
                      ? "bg-[rgba(242,232,92,0.08)] text-white"
                      : "text-[var(--muted)] hover:bg-[rgba(255,255,255,0.02)]",
                  ].join(" ")}
                  onClick={() => startTransition(() => setActiveUseCase(index))}
                >
                  <span className="text-base uppercase tracking-[0.18em]">{useCase.title}</span>
                  <span className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                    {isActive ? "Активно" : "Виж"}
                  </span>
                </button>
              );
            })}
            <motion.div
              key={content.useCases[activeUseCase]?.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22 }}
              className="px-5 py-6 text-sm leading-7 text-[var(--muted)]"
            >
              {content.useCases[activeUseCase]?.description}
            </motion.div>
          </div>
        </Reveal>

        <Reveal>
          <div className="soft-card p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">Какво включва</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-white">
              {content.included.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-bright)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="soft-card flex flex-col gap-5 p-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">{content.ctaLead}</p>
            <a href="#contact" className="button-primary whitespace-nowrap">
              {content.ctaButton}
            </a>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
