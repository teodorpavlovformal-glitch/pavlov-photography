import Link from "next/link";
import { Check } from "lucide-react";
import type { AboutContent } from "@/lib/content-types";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

interface AboutProps {
  content: AboutContent;
}

function renderTitle(content: AboutContent["title"]) {
  return (
    <>
      {content.lead} <span className="editorial-word">{content.accent}</span>
      {content.tail}
    </>
  );
}

export function About({ content }: AboutProps) {
  return (
    <SectionShell
      id="about"
      eyebrow={content.eyebrow}
      title={renderTitle(content.title)}
      contentClassName="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-10"
    >
      <Reveal>
        <div>
          <div className="space-y-4 text-[0.98rem] leading-7 text-[var(--muted)] sm:space-y-6 sm:text-[1.05rem] sm:leading-8">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-6 grid gap-2.5 sm:mt-8 sm:gap-3">
            {content.bulletPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[0.94rem] leading-6 text-white sm:text-sm sm:leading-7">
                <span className="mt-1 rounded-full border border-[var(--line-soft)] p-1 text-[var(--accent-bright)]">
                  <Check className="h-3 w-3" />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7">
            <Link href="/about" className="button-secondary">
              Повече за мен
            </Link>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="grid gap-3 sm:gap-5">
          <div className="grid grid-cols-2 gap-3">
            {content.stats.map((stat) => (
              <article key={stat.label} className="soft-card p-4 sm:p-6">
                <p className="text-[2rem] tracking-[-0.05em] text-white sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-[0.62rem] uppercase tracking-[0.16em] text-[var(--muted)] sm:mt-3 sm:text-xs sm:tracking-[0.24em]">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
          <article className="soft-card p-4 sm:p-6">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[var(--accent)] sm:text-sm sm:tracking-[0.22em]">Цитат</p>
            <blockquote className="mt-3 text-[0.98rem] leading-7 text-white sm:mt-4 sm:text-lg sm:leading-8">
              “{content.quote.text}”
            </blockquote>
            <p className="mt-4 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-sm sm:tracking-[0.24em]">
              {content.quote.author}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[var(--muted)]/80">
              {content.quote.role}
            </p>
          </article>
        </div>
      </Reveal>
    </SectionShell>
  );
}
