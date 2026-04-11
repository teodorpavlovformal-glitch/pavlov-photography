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
      contentClassName="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]"
    >
      <Reveal>
        <div>
          <div className="space-y-6 text-[1.05rem] leading-8 text-[var(--muted)]">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-8 grid gap-3">
            {content.bulletPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm leading-7 text-white">
                <span className="mt-1 rounded-full border border-[var(--line-soft)] p-1 text-[var(--accent-bright)]">
                  <Check className="h-3 w-3" />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/about" className="button-secondary">
              Повече за мен
            </Link>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="grid gap-5">
          <div className="grid gap-4 sm:grid-cols-2">
            {content.stats.map((stat) => (
              <article key={stat.label} className="soft-card p-6">
                <p className="text-4xl tracking-[-0.05em] text-white">{stat.value}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
          <article className="soft-card p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">Цитат</p>
            <blockquote className="mt-4 text-lg leading-8 text-white">
              “{content.quote.text}”
            </blockquote>
            <p className="mt-4 text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
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
