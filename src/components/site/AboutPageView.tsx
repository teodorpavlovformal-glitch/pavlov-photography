import Link from "next/link";
import type { AboutPageContent } from "@/lib/content-types";
import { Reveal } from "@/components/ui/Reveal";

interface AboutPageViewProps {
  content: AboutPageContent;
}

function renderEditorialTitle(title: AboutPageContent["hero"]["title"]) {
  return (
    <>
      {title.lead} <span className="editorial-word">{title.accent}</span>
      {title.tail}
    </>
  );
}

export function AboutPageView({ content }: AboutPageViewProps) {
  return (
    <>
      <section className="section-frame px-4 pb-14 pt-4 sm:px-8 sm:pb-18 sm:pt-6 lg:px-10 xl:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.85fr)] lg:items-end">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow">{content.hero.eyebrow}</p>
              <h1 className="mt-4 text-balance text-[2.55rem] leading-[0.94] tracking-[-0.05em] text-white sm:mt-5 sm:text-5xl lg:text-7xl">
                {renderEditorialTitle(content.hero.title)}
              </h1>
              <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-[var(--muted)] sm:mt-6 sm:text-lg">
                {content.hero.description}
              </p>
              <p className="mt-4 max-w-2xl text-[0.92rem] leading-6 text-white/82 sm:mt-5 sm:text-base sm:leading-7">
                {content.hero.supportingText}
              </p>
            </div>
          </Reveal>

          <Reveal className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {content.stats.map((stat) => (
              <article key={stat.label} className="soft-card p-4 sm:p-6">
                <p className="text-[2rem] tracking-[-0.05em] text-white sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-[0.62rem] uppercase tracking-[0.16em] text-[var(--muted)] sm:mt-3 sm:text-xs sm:tracking-[0.26em]">
                  {stat.label}
                </p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-frame px-4 py-14 sm:px-8 sm:py-18 lg:px-10 xl:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)]">
          <Reveal>
            <div className="space-y-4 text-[0.98rem] leading-7 text-[var(--muted)] sm:space-y-6 sm:text-[1.02rem] sm:leading-8">
              {content.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal className="soft-card p-4 sm:p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              Как работя
            </p>
            <ul className="mt-4 grid gap-2.5 sm:mt-5 sm:gap-3">
              {content.values.map((value) => (
                <li
                  key={value}
                  className="rounded-[0.95rem] border border-[var(--line-soft)] bg-white/[0.02] px-4 py-3.5 text-[0.92rem] leading-6 text-white/88 sm:rounded-[1.1rem] sm:py-4 sm:text-sm sm:leading-7"
                >
                  {value}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-frame px-4 py-14 sm:px-8 sm:py-18 lg:px-10 xl:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(320px,1.2fr)]">
          <Reveal>
            <div className="max-w-xl">
              <p className="eyebrow">Процес</p>
              <h2 className="mt-4 text-[2rem] leading-tight tracking-[-0.04em] text-white sm:mt-5 sm:text-4xl">
                Ясен процес, за да има по-малко шум и повече{" "}
                <span className="editorial-word">резултат</span>
              </h2>
              <div className="mt-4 space-y-4 text-[0.92rem] leading-6 text-[var(--muted)] sm:mt-6 sm:space-y-5 sm:text-sm sm:leading-7">
                {content.philosophy.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:gap-4">
            {content.process.map((step, index) => (
              <Reveal key={step.title}>
                <article className="soft-card flex gap-3 p-4 sm:gap-4 sm:p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--line-soft)] text-[0.68rem] tracking-[0.18em] text-[var(--accent-bright)] sm:h-12 sm:w-12 sm:text-sm sm:tracking-[0.24em]">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-[1.02rem] text-white sm:text-xl">{step.title}</h3>
                    <p className="mt-2 text-[0.92rem] leading-6 text-[var(--muted)] sm:mt-3 sm:text-sm sm:leading-7">
                      {step.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-frame px-4 py-14 sm:px-8 sm:py-18 lg:px-10 xl:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,1.1fr)]">
          <Reveal className="soft-card p-4 sm:p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              Работна зона
            </p>
            <ul className="mt-4 space-y-2.5 text-[0.92rem] leading-6 text-white sm:mt-5 sm:space-y-3 sm:text-sm sm:leading-7">
              {content.coverage.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-bright)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid gap-4">
            <Reveal className="soft-card p-4 sm:p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                {content.philosophy.title}
              </p>
              <blockquote className="mt-3 text-[1rem] leading-7 text-white sm:mt-4 sm:text-lg sm:leading-8">
                “{content.quote.text}”
              </blockquote>
              <p className="mt-4 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--muted)] sm:mt-5 sm:text-sm sm:tracking-[0.24em]">
                {content.quote.author}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[var(--muted)]/80">
                {content.quote.role}
              </p>
            </Reveal>

            <Reveal className="soft-card flex flex-col gap-4 p-4 sm:gap-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="text-[1.35rem] leading-tight tracking-[-0.04em] text-white sm:text-2xl">
                  {content.ctaTitle}
                </h2>
                <p className="mt-3 text-[0.92rem] leading-6 text-[var(--muted)] sm:mt-4 sm:text-sm sm:leading-7">
                  {content.ctaDescription}
                </p>
              </div>
              <Link href="/#contact" className="button-primary whitespace-nowrap">
                {content.ctaButton}
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
