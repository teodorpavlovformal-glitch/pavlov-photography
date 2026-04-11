import { PhoneCall } from "lucide-react";

interface FloatingCallButtonProps {
  phone: string;
}

export function FloatingCallButton({ phone }: FloatingCallButtonProps) {
  return (
    <a
      href={`tel:${phone}`}
      aria-label="Обади се сега"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-full border border-[var(--line-strong)] bg-[rgba(13,13,13,0.94)] px-4 py-3 text-sm uppercase tracking-[0.2em] text-white shadow-[0_18px_40px_rgba(0,0,0,0.45)] md:hidden"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-bright)] text-black">
        <PhoneCall className="h-4 w-4" />
      </span>
      Обади се
    </a>
  );
}
