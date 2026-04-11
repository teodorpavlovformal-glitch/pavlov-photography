import { ApertureLogo } from "@/components/ui/ApertureLogo";
import type { FooterCtaContent } from "@/lib/content-types";

interface FooterCtaProps {
  content: FooterCtaContent;
}

export function FooterCta({ content }: FooterCtaProps) {
  return (
    <footer className="section-frame border-b-0 px-5 py-10 sm:px-8 lg:px-10 xl:px-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 rounded-[2rem] border border-[var(--line-soft)] bg-[rgba(255,255,255,0.02)] px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <ApertureLogo className="h-12 w-12" />
          <div>
            <p className="text-2xl tracking-[-0.04em] text-white">{content.title}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">{content.subtitle}</p>
          </div>
        </div>
        <a href="#contact" className="button-primary whitespace-nowrap">
          {content.button}
        </a>
      </div>
    </footer>
  );
}
