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
      className={["section-frame px-5 py-20 sm:px-8 lg:px-10 xl:px-16", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
        </div>
        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  );
}
