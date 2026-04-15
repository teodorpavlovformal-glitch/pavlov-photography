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
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {content.items.map((item) => (
          <Reveal key={item.title}>
            <article className="soft-card h-full p-4 sm:p-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line-soft)] bg-[rgba(255,255,255,0.03)] text-[var(--accent-bright)] sm:h-11 sm:w-11">
                <IconToken name={item.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-[1.02rem] text-white sm:mt-6 sm:text-xl">{item.title}</h3>
              <p className="mt-2.5 text-[0.92rem] leading-6 text-[var(--muted)] sm:mt-4 sm:text-sm sm:leading-7">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
