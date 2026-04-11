import type { TermsContent } from "@/lib/content-types";
import { IconToken } from "@/components/ui/IconToken";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

interface TermsProps {
  content: TermsContent;
}

function renderTitle(content: TermsContent["title"]) {
  return (
    <>
      {content.lead} <span className="editorial-word">{content.accent}</span>
      {content.tail}
    </>
  );
}

export function Terms({ content }: TermsProps) {
  return (
    <SectionShell id="terms" eyebrow={content.eyebrow} title={renderTitle(content.title)}>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {content.items.map((item) => (
          <Reveal key={item.title}>
            <article className="soft-card h-full p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line-soft)] bg-[rgba(255,255,255,0.03)] text-[var(--accent-bright)]">
                <IconToken name={item.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
