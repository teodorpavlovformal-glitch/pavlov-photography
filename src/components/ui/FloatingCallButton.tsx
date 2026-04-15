import { PhoneCall } from "lucide-react";

interface FloatingCallButtonProps {
  phone: string;
}

export function FloatingCallButton({ phone }: FloatingCallButtonProps) {
  return (
    <a
      href={`tel:${phone}`}
      aria-label="Обади се сега"
      className="fixed bottom-[calc(0.8rem+env(safe-area-inset-bottom))] right-3 z-50 inline-flex items-center gap-1.5 rounded-full border border-[var(--line-soft)] bg-[rgba(13,13,13,0.92)] px-2.5 py-2 text-[0.62rem] uppercase tracking-[0.14em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.28)] md:hidden"
    >
      <span className="flex h-[1.875rem] w-[1.875rem] items-center justify-center rounded-full bg-[var(--accent-bright)] text-black">
        <PhoneCall className="h-3.25 w-3.25" />
      </span>
      <span className="hidden min-[430px]:inline">Обади се</span>
    </a>
  );
}
