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
      <section className="section-frame px-5 pb-18 pt-6 sm:px-8 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-center text-4xl leading-[0.96] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
                {content.hero.eyebrow}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-7 text-[var(--muted)] sm:text-lg">
                {content.hero.description}
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-10 grid gap-4 sm:grid-cols-3">
            {content.proofStats.map((stat) => (
              <article key={stat.label} className="soft-card p-5">
                <p className="text-3xl tracking-[-0.05em] text-white">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.26em] text-[var(--muted)]">
                  {stat.label}
                </p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-frame px-5 py-18 sm:px-8 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            {content.cards.map((card) => (
              <Reveal key={card.slug}>
                <article className="soft-card flex h-full flex-col p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                    {card.eyebrow}
                  </p>
                  <h2 className="mt-4 text-3xl leading-tight tracking-[-0.04em] text-white">
                    {card.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{card.summary}</p>
                  <p className="mt-5 text-xs uppercase tracking-[0.24em] text-white/72">
                    {card.audience}
                  </p>
                  <p className="mt-3 text-4xl tracking-[-0.05em] text-white">
                    {card.startingPrice}
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-[var(--line-soft)] pt-6 text-sm leading-7 text-white">
                    {card.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-bright)]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={getServicePagePath(card.slug)}
                    className="button-secondary mt-8 justify-center"
                  >
                    {card.slug === "videography" ? "Видеография" : card.eyebrow}
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-frame px-5 py-18 sm:px-8 lg:px-10 xl:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(320px,1.2fr)]">
          <Reveal>
            <div className="max-w-xl">
              <p className="eyebrow">Пакети</p>
              <h2 className="mt-5 text-3xl leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                Какво получавате отвъд самото{" "}
                <span className="editorial-word">заснемане</span>
              </h2>
            </div>
          </Reveal>

          <Reveal className="soft-card p-6">
            <ul className="grid gap-3">
              {content.packageNotes.map((note) => (
                <li
                  key={note}
                  className="rounded-[1.1rem] border border-[var(--line-soft)] bg-white/[0.02] px-4 py-4 text-sm leading-7 text-white/88"
                >
                  {note}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-frame px-5 py-18 sm:px-8 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-7xl">
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
      </section>
    </>
  );
}
