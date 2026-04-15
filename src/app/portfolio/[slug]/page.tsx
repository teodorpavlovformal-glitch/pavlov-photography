import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteFrame } from "@/components/site/SiteFrame";
import { Reveal } from "@/components/ui/Reveal";
import {
  getPortfolioArchivePath,
  getPortfolioCategoryLabel,
  getPortfolioItemBySlug,
  getPortfolioItemPath,
  getRelatedPortfolioItems,
  portfolioProjects,
} from "@/lib/portfolio";

interface PortfolioProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PortfolioProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioItemBySlug(slug);

  if (!project) {
    return {
      title: "Портфолио проект | Pavlov Photography",
    };
  }

  return {
    title: `${project.title} | Pavlov Photography`,
    description: project.summary,
  };
}

export default async function PortfolioProjectPage({ params }: PortfolioProjectPageProps) {
  const { slug } = await params;
  const project = getPortfolioItemBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedPortfolioItems(project.slug);

  return (
    <SiteFrame>
      <section className="section-frame px-4 pb-14 pt-4 sm:px-8 sm:pb-18 sm:pt-6 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Link
              href={getPortfolioArchivePath()}
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[var(--muted)] transition-colors duration-200 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Обратно към архива
            </Link>
          </Reveal>

          <div className="mt-6 grid gap-7 sm:mt-8 sm:gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.85fr)] lg:items-end">
            <Reveal>
              <div className="max-w-3xl">
                <p className="eyebrow">{project.eyebrow}</p>
                <h1 className="mt-4 text-balance text-[2.55rem] leading-[0.94] tracking-[-0.05em] text-white sm:mt-5 sm:text-5xl lg:text-7xl">
                  {project.title}
                </h1>
                <p className="mt-4 text-[1rem] leading-7 text-white/86 sm:mt-5 sm:text-lg sm:leading-8">{project.subtitle}</p>
                <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-[var(--muted)] sm:mt-6 sm:text-lg">
                  {project.summary}
                </p>
              </div>
            </Reveal>

            <Reveal className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1">
              {project.facts.map((fact) => (
                <div key={fact.label} className="soft-card p-4 sm:p-5">
                  <p className="text-[0.62rem] uppercase tracking-[0.16em] text-[var(--muted)] sm:text-xs sm:tracking-[0.26em]">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-[1rem] tracking-[-0.03em] text-white sm:mt-3 sm:text-lg">{fact.value}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-frame px-4 py-14 sm:px-8 sm:py-18 lg:px-10 xl:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-[var(--line-soft)] bg-[var(--surface)]">
            <div className="relative aspect-[16/10]">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            </div>
          </Reveal>

          <div className="grid gap-4">
            <Reveal>
              <div className="soft-card p-4 sm:p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">Бриф</p>
                <p className="mt-3 text-[0.92rem] leading-6 text-[var(--muted)] sm:mt-4 sm:text-sm sm:leading-7">{project.brief}</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="soft-card p-4 sm:p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                  Предизвикателство
                </p>
                <p className="mt-3 text-[0.92rem] leading-6 text-[var(--muted)] sm:mt-4 sm:text-sm sm:leading-7">{project.challenge}</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="soft-card p-4 sm:p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">Подход</p>
                <p className="mt-3 text-[0.92rem] leading-6 text-[var(--muted)] sm:mt-4 sm:text-sm sm:leading-7">{project.approach}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-frame px-4 py-14 sm:px-8 sm:py-18 lg:px-10 xl:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(360px,1fr)] lg:items-start">
          <Reveal>
            <div className="max-w-xl">
              <p className="eyebrow">Какво е включено</p>
              <h2 className="mt-4 text-[2rem] leading-tight tracking-[-0.04em] text-white sm:mt-5 sm:text-4xl">
                Финални материали за{" "}
                <span className="editorial-word">{getPortfolioCategoryLabel(project.category)}</span>
              </h2>
              <p className="mt-4 text-[0.92rem] leading-6 text-[var(--muted)] sm:mt-5 sm:text-sm sm:leading-7">
                Всеки проект приключва с подбрана, готова за използване селекция. Идеята е да има
                не просто красиви кадри, а завършен пакет, който работи реално за обявата, сайта
                или кампанията.
              </p>
            </div>
          </Reveal>

          <Reveal className="soft-card p-4 sm:p-6">
            <ul className="grid gap-2.5 sm:gap-3">
              {project.deliverables.map((deliverable) => (
                <li
                  key={deliverable}
                  className="rounded-[0.95rem] border border-[var(--line-soft)] bg-white/[0.02] px-4 py-3.5 text-[0.92rem] leading-6 text-white/88 sm:rounded-[1.1rem] sm:py-4 sm:text-sm sm:leading-7"
                >
                  {deliverable}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-frame px-4 py-14 sm:px-8 sm:py-18 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4 sm:mb-8">
              <div>
                <p className="eyebrow">Още проекти</p>
                <h2 className="mt-4 text-[2rem] leading-tight tracking-[-0.04em] text-white sm:mt-5 sm:text-4xl">
                  Подобни <span className="editorial-word">кадри</span>
                </h2>
              </div>
              <Link href={getPortfolioArchivePath()} className="button-secondary">
                Виж целия архив
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:gap-4 xl:grid-cols-3">
            {relatedProjects.map((relatedProject) => (
              <Reveal key={relatedProject.slug}>
                <Link
                  href={getPortfolioItemPath(relatedProject)}
                  className="group block overflow-hidden rounded-[1.1rem] border border-[var(--line-soft)] bg-[var(--surface)] sm:rounded-[1.8rem]"
                >
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 480px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:gap-4 sm:p-5">
                      <div>
                        <p className="mb-2 text-[0.68rem] uppercase tracking-[0.28em] text-[var(--accent)]">
                          {relatedProject.eyebrow}
                        </p>
                        <h3 className="text-[1.15rem] tracking-[-0.03em] text-white sm:text-2xl">
                          {relatedProject.title}
                        </h3>
                        <p className="mt-1.5 text-[0.86rem] leading-[1.35rem] text-[var(--muted)] sm:mt-2 sm:text-sm sm:leading-6">
                          {relatedProject.subtitle}
                        </p>
                      </div>
                      <span className="icon-button shrink-0">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
