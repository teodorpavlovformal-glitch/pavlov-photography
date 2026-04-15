import { ApertureLogo } from "@/components/ui/ApertureLogo";
import type { FooterCtaContent } from "@/lib/content-types";

interface FooterCtaProps {
  content: FooterCtaContent;
}

export function FooterCta({ content }: FooterCtaProps) {
  return (
    <footer className="section-frame border-b-0 px-4 py-7 sm:px-8 sm:py-10 lg:px-10 xl:px-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 rounded-[1.1rem] border border-[var(--line-soft)] bg-[rgba(255,255,255,0.02)] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:rounded-[2rem] sm:px-6 sm:py-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <ApertureLogo className="h-9 w-9 sm:h-12 sm:w-12" />
          <div>
            <p className="text-[1.05rem] tracking-[-0.04em] text-white sm:text-2xl">{content.title}</p>
            <p className="mt-1.5 text-[0.92rem] text-[var(--muted)] sm:mt-2 sm:text-sm">{content.subtitle}</p>
          </div>
        </div>
        <a href="#contact" className="button-primary justify-center whitespace-nowrap">
          {content.button}
        </a>
      </div>
    </footer>
  );
}
