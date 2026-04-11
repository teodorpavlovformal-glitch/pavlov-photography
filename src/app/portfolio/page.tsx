import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteFrame } from "@/components/site/SiteFrame";
import { Reveal } from "@/components/ui/Reveal";
import {
  getPortfolioArchivePath,
  getPortfolioCategoryLabel,
  getPortfolioItemPath,
  portfolioProjects,
} from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Портфолио архив | Pavlov Photography",
  description:
    "Разгледай пълния архив с подбрани фотографски проекти за недвижими имоти, автомобили и продукти.",
};

const archiveCategories = Array.from(new Set(portfolioProjects.map((project) => project.category)));

const ratioClassMap = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[16/10]",
  square: "aspect-square",
} as const;

const archiveStats = [
  { value: `${portfolioProjects.length}`, label: "Подбрани проекта" },
  { value: `${archiveCategories.length}`, label: "Категории работа" },
  { value: "48ч", label: "Типичен срок" },
];

export default function PortfolioArchivePage() {
  return (
    <SiteFrame>
      <section className="section-frame px-5 pb-18 pt-6 sm:px-8 lg:px-10 xl:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.8fr)] lg:items-end">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow">Архив</p>
              <h1 className="mt-5 text-balance text-4xl leading-[0.96] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
                Портфолио архив
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
                Разгледай по-спокойно избрани проекти отвъд началната страница. Тук всеки кадър има
                собствен контекст, настроение и ясно обяснение какво трябва да свърши визуално.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/#contact" className="button-primary">
                  Запази сесия
                </Link>
                <Link href="/#portfolio" className="button-secondary">
                  Обратно към началната селекция
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {archiveStats.map((stat) => (
              <div key={stat.label} className="soft-card p-5">
                <p className="text-3xl tracking-[-0.05em] text-white">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.26em] text-[var(--muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-frame px-5 py-18 sm:px-8 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                {portfolioProjects.length} проекта в архива
              </p>
              <div className="flex flex-wrap gap-2">
                {archiveCategories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-[var(--line-soft)] px-3 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-[var(--muted)]"
                  >
                    {getPortfolioCategoryLabel(category)}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 xl:grid-cols-3">
            {portfolioProjects.map((project) => (
              <Reveal key={project.slug}>
                <Link
                  href={getPortfolioItemPath(project)}
                  className={`group block overflow-hidden rounded-[1.8rem] border border-[var(--line-soft)] bg-[var(--surface)] ${ratioClassMap[project.ratio]}`}
                >
                  <div className="relative h-full">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 480px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/30 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                      <div className="max-w-[85%]">
                        <p className="mb-2 text-[0.68rem] uppercase tracking-[0.28em] text-[var(--accent)]">
                          {project.eyebrow}
                        </p>
                        <h2 className="text-2xl tracking-[-0.03em] text-white">{project.title}</h2>
                        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{project.subtitle}</p>
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

          <Reveal className="mt-8">
            <div className="flex justify-end">
              <Link href={getPortfolioArchivePath()} className="button-secondary">
                Архивът е активен
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteFrame>
  );
}
