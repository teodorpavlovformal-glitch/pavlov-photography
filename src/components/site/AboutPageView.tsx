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
      <section className="section-frame px-5 pb-18 pt-6 sm:px-8 lg:px-10 xl:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.85fr)] lg:items-end">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow">{content.hero.eyebrow}</p>
              <h1 className="mt-5 text-balance text-4xl leading-[0.96] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
                {renderEditorialTitle(content.hero.title)}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
                {content.hero.description}
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/82 sm:text-base">
                {content.hero.supportingText}
              </p>
            </div>
          </Reveal>

          <Reveal className="grid gap-4 sm:grid-cols-2">
            {content.stats.map((stat) => (
              <article key={stat.label} className="soft-card p-6">
                <p className="text-4xl tracking-[-0.05em] text-white">{stat.value}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.26em] text-[var(--muted)]">
                  {stat.label}
                </p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-frame px-5 py-18 sm:px-8 lg:px-10 xl:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)]">
          <Reveal>
            <div className="space-y-6 text-[1.02rem] leading-8 text-[var(--muted)]">
              {content.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal className="soft-card p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              Как работя
            </p>
            <ul className="mt-5 grid gap-3">
              {content.values.map((value) => (
                <li
                  key={value}
                  className="rounded-[1.1rem] border border-[var(--line-soft)] bg-white/[0.02] px-4 py-4 text-sm leading-7 text-white/88"
                >
                  {value}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-frame px-5 py-18 sm:px-8 lg:px-10 xl:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(320px,1.2fr)]">
          <Reveal>
            <div className="max-w-xl">
              <p className="eyebrow">Процес</p>
              <h2 className="mt-5 text-3xl leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                Ясен процес, за да има по-малко шум и повече{" "}
                <span className="editorial-word">резултат</span>
              </h2>
              <div className="mt-6 space-y-5 text-sm leading-7 text-[var(--muted)]">
                {content.philosophy.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {content.process.map((step, index) => (
              <Reveal key={step.title}>
                <article className="soft-card flex gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--line-soft)] text-sm tracking-[0.24em] text-[var(--accent-bright)]">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {step.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-frame px-5 py-18 sm:px-8 lg:px-10 xl:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,1.1fr)]">
          <Reveal className="soft-card p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              Работна зона
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-white">
              {content.coverage.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-bright)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid gap-4">
            <Reveal className="soft-card p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                {content.philosophy.title}
              </p>
              <blockquote className="mt-4 text-lg leading-8 text-white">
                “{content.quote.text}”
              </blockquote>
              <p className="mt-5 text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
                {content.quote.author}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[var(--muted)]/80">
                {content.quote.role}
              </p>
            </Reveal>

            <Reveal className="soft-card flex flex-col gap-5 p-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="text-2xl leading-tight tracking-[-0.04em] text-white">
                  {content.ctaTitle}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
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
