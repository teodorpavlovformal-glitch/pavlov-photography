import type { ReactNode } from "react";

interface SectionShellProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export function SectionShell({
  id,
  eyebrow,
  children,
  className,
  contentClassName,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={["section-frame px-4 py-14 sm:px-8 sm:py-20 lg:px-10 xl:px-16", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-7 max-w-3xl sm:mb-10">
          <p className="eyebrow">{eyebrow}</p>
        </div>
        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  );
}
