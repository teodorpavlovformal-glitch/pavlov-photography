import Link from "next/link";
import { servicesHubContent } from "@/data/brochure-content";
import type { ServicesHubContent } from "@/lib/content-types";
import { getServicePagePath } from "@/lib/brochure";
import { Reveal } from "@/components/ui/Reveal";

interface ServicesHubPageViewProps {
  content?: ServicesHubContent;
}

export function ServicesHubPageView({ content = servicesHubContent }: ServicesHubPageViewProps) {
  return (
    <>
      <section className="section-frame px-4 pb-14 pt-4 sm:px-8 sm:pb-18 sm:pt-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-center text-[2.55rem] leading-[0.94] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
                {content.hero.eyebrow}
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-center text-[0.98rem] leading-7 text-[var(--muted)] sm:mt-6 sm:text-lg">
                {content.hero.description}
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
            {content.proofStats.map((stat) => (
              <article key={stat.label} className="soft-card p-4 sm:p-5">
                <p className="text-[2rem] tracking-[-0.05em] text-white sm:text-3xl">{stat.value}</p>
                <p className="mt-2 text-[0.62rem] uppercase tracking-[0.16em] text-[var(--muted)] sm:text-xs sm:tracking-[0.26em]">
                  {stat.label}
                </p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-frame px-4 py-14 sm:px-8 sm:py-18 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-3 sm:gap-4 xl:grid-cols-2">
            {content.cards.map((card) => (
              <Reveal key={card.slug}>
                <article className="soft-card flex h-full flex-col p-4 sm:p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                    {card.eyebrow}
                  </p>
                  <h2 className="mt-3 text-[1.9rem] leading-tight tracking-[-0.04em] text-white sm:mt-4 sm:text-3xl">
                    {card.title}
                  </h2>
                  <p className="mt-3 text-[0.92rem] leading-6 text-[var(--muted)] sm:mt-4 sm:text-sm sm:leading-7">{card.summary}</p>
                  <p className="mt-4 text-[0.62rem] uppercase tracking-[0.16em] text-white/72 sm:mt-5 sm:text-xs sm:tracking-[0.24em]">
                    {card.audience}
                  </p>
                  <p className="mt-2.5 text-[2rem] tracking-[-0.05em] text-white sm:mt-3 sm:text-4xl">
                    {card.startingPrice}
                  </p>
                  <ul className="mt-5 space-y-2.5 border-t border-[var(--line-soft)] pt-5 text-[0.92rem] leading-6 text-white sm:mt-6 sm:space-y-3 sm:pt-6 sm:text-sm sm:leading-7">
                    {card.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-bright)]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={getServicePagePath(card.slug)} className="button-secondary mt-6 justify-center sm:mt-8">
                    {card.slug === "videography" ? "Видеография" : card.eyebrow}
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-frame px-4 py-14 sm:px-8 sm:py-18 lg:px-10 xl:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(320px,1.2fr)]">
          <Reveal>
            <div className="max-w-xl">
              <p className="eyebrow">Пакети</p>
              <h2 className="mt-4 text-[2rem] leading-tight tracking-[-0.04em] text-white sm:mt-5 sm:text-4xl">
                Какво получавате отвъд самото{" "}
                <span className="editorial-word">заснемане</span>
              </h2>
            </div>
          </Reveal>

          <Reveal className="soft-card p-4 sm:p-6">
            <ul className="grid gap-2.5 sm:gap-3">
              {content.packageNotes.map((note) => (
                <li
                  key={note}
                  className="rounded-[0.95rem] border border-[var(--line-soft)] bg-white/[0.02] px-4 py-3.5 text-[0.92rem] leading-6 text-white/88 sm:rounded-[1.1rem] sm:py-4 sm:text-sm sm:leading-7"
                >
                  {note}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-frame px-4 py-14 sm:px-8 sm:py-18 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-7xl">
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
      </section>
    </>
  );
}
