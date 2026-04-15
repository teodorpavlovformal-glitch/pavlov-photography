import Image from "next/image";
import Link from "next/link";
import type { ServicePageContent } from "@/lib/content-types";
import { getServicePortfolioProjects } from "@/lib/brochure";
import { getPortfolioItemPath } from "@/lib/portfolio";
import { Reveal } from "@/components/ui/Reveal";

interface ServiceDetailPageViewProps {
  content: ServicePageContent;
}

function renderEditorialTitle(title: ServicePageContent["hero"]["title"]) {
  return (
    <>
      {title.lead}
      {title.accent ? (
        <>
          {" "}
          <span className="editorial-word">{title.accent}</span>
        </>
      ) : null}
      {title.tail}
    </>
  );
}

export function ServiceDetailPageView({ content }: ServiceDetailPageViewProps) {
  const relatedProjects = getServicePortfolioProjects(content.slug);

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
              {content.hero.summary.trim() ? (
                <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-[var(--muted)] sm:mt-6 sm:text-lg">
                  {content.hero.summary}
                </p>
              ) : null}
            </div>
          </Reveal>

          <Reveal className="grid gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-1">
            <article className="soft-card p-4 sm:p-5">
              <p className="text-xs uppercase tracking-[0.26em] text-[var(--muted)]">Аудитория</p>
              <p className="mt-2 text-[0.94rem] leading-6 text-white sm:mt-3 sm:text-base sm:leading-7">{content.hero.audience}</p>
            </article>
            <article className="soft-card p-4 sm:p-5">
              <p className="text-xs uppercase tracking-[0.26em] text-[var(--muted)]">Резултат</p>
              <p className="mt-2 text-[0.94rem] leading-6 text-white sm:mt-3 sm:text-base sm:leading-7">{content.hero.outcome}</p>
            </article>
            <article className="soft-card p-4 sm:p-5">
              <p className="text-xs uppercase tracking-[0.26em] text-[var(--muted)]">Стартова цена</p>
              <p className="mt-2 text-[2rem] tracking-[-0.04em] text-white sm:mt-3 sm:text-3xl">
                От {content.hero.startingPrice}
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section-frame px-4 py-14 sm:px-8 sm:py-18 lg:px-10 xl:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-stretch">
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-[var(--line-soft)] bg-[var(--surface)]">
            <div className="relative aspect-[16/10]">
              <Image
                src={content.hero.image}
                alt={content.hero.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            </div>
          </Reveal>

          <Reveal className="soft-card flex h-full flex-col justify-center p-4 text-center sm:p-8 lg:p-10">
            <p className="text-center text-[1rem] uppercase tracking-[0.18em] text-[var(--accent)] sm:text-2xl sm:tracking-[0.24em]">
              Какво печелите
            </p>
            <ul className="mx-auto mt-4 max-w-xl space-y-3 text-[0.98rem] leading-7 text-white sm:mt-6 sm:space-y-4 sm:text-lg sm:leading-8">
              {content.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start justify-center gap-3 text-left">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-bright)]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-frame px-4 py-14 sm:px-8 sm:py-18 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal className="soft-card p-4 text-center sm:p-8 lg:p-10">
            <h2 className="text-center text-[1rem] uppercase tracking-[0.18em] text-[var(--accent)] sm:text-2xl sm:tracking-[0.24em]">
              Какво е включено
            </h2>
            <ul className="mt-5 grid gap-2.5 text-left md:grid-cols-2 sm:mt-8 sm:gap-3">
              {content.included.map((item) => (
                <li
                  key={item}
                  className="rounded-[0.95rem] border border-[var(--line-soft)] bg-white/[0.02] px-4 py-3.5 text-[0.92rem] leading-6 text-white/88 sm:rounded-[1.1rem] sm:py-4 sm:text-sm sm:leading-7"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-frame px-4 py-14 sm:px-8 sm:py-18 lg:px-10 xl:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(240px,0.62fr)_minmax(0,1.38fr)] lg:items-start">
          <Reveal>
            <div className="flex h-full min-h-[16rem] flex-col items-center justify-center text-center">
              <p className="eyebrow justify-center">Стъпки</p>
              <h2 className="mt-4 text-center text-[2rem] leading-tight tracking-[-0.04em] text-white sm:mt-5 sm:text-4xl">
                Процес без излишен <span className="editorial-word">хаос</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:gap-4">
            {content.workflow.map((step, index) => (
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
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4 sm:mb-8">
              <div>
                <p className="eyebrow">Пакети</p>
                <h2 className="mt-4 text-[2rem] leading-tight tracking-[-0.04em] text-white sm:mt-5 sm:text-4xl">
                  Избери правилния <span className="editorial-word">формат</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:gap-5 lg:grid-cols-3">
            {content.packages.map((plan) => (
              <Reveal key={plan.name}>
                <article
                  className={[
                    "soft-card flex h-full flex-col p-4 sm:p-6",
                    plan.featured ? "border-[var(--accent-bright)] bg-[rgba(242,232,92,0.08)]" : "",
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
                      <span className="rounded-full bg-[var(--accent-bright)] px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-black">
                        {plan.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-4 text-[0.92rem] leading-6 text-[var(--muted)] sm:mt-5 sm:text-sm sm:leading-7">{plan.summary}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-[var(--line-soft)] pt-5 text-[0.92rem] leading-6 text-white sm:mt-6 sm:space-y-3 sm:pt-6 sm:text-sm sm:leading-7">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-bright)]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-frame px-4 py-14 sm:px-8 sm:py-18 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4 sm:mb-8">
              <div>
                <p className="eyebrow">Подбрани проекти</p>
                <h2 className="mt-4 text-[2rem] leading-tight tracking-[-0.04em] text-white sm:mt-5 sm:text-4xl">
                  Примери от реално <span className="editorial-word">портфолио</span>
                </h2>
              </div>
              <Link href="/portfolio" className="button-secondary">
                Виж целия архив
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:gap-4 xl:grid-cols-3">
            {relatedProjects.map((project) => (
              <Reveal key={project.slug}>
                <Link href={getPortfolioItemPath(project)} aria-label={project.title} className="group block overflow-hidden rounded-[1.1rem] border border-[var(--line-soft)] bg-[var(--surface)] sm:rounded-[1.8rem]">
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 480px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/25 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                      <h3 className="text-[1.15rem] tracking-[-0.03em] text-white sm:text-2xl">{project.title}</h3>
                      <p className="mt-1.5 text-[0.86rem] leading-[1.35rem] text-[var(--muted)] sm:mt-2 sm:text-sm sm:leading-6">{project.subtitle}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-frame px-4 py-14 sm:px-8 sm:py-18 lg:px-10 xl:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(320px,1.2fr)]">
          <Reveal>
            <div className="max-w-xl">
              <p className="eyebrow">Въпроси</p>
              <h2 className="mt-4 text-[2rem] leading-tight tracking-[-0.04em] text-white sm:mt-5 sm:text-4xl">
                Важните <span className="editorial-word">въпроси</span> преди заснемане
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:gap-4">
            {content.faq.map((item) => (
              <Reveal key={item.question}>
                <article className="soft-card p-4 sm:p-6">
                  <h3 className="text-[1.02rem] text-white sm:text-xl">{item.question}</h3>
                  <p className="mt-3 text-[0.92rem] leading-6 text-[var(--muted)] sm:mt-4 sm:text-sm sm:leading-7">{item.answer}</p>
                </article>
              </Reveal>
            ))}
          </div>
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
