import type { LucideIcon } from "lucide-react";
import {
  BadgeEuro,
  CalendarRange,
  Clock3,
  Film,
  FolderOutput,
  Mail,
  MapPinned,
  Music4,
  Phone,
  Sparkles,
  Timer,
  WalletCards,
  Zap,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "badge-euro": BadgeEuro,
  "calendar-range": CalendarRange,
  "clock-3": Clock3,
  film: Film,
  "folder-output": FolderOutput,
  mail: Mail,
  "map-pinned": MapPinned,
  music4: Music4,
  phone: Phone,
  sparkles: Sparkles,
  timer: Timer,
  "wallet-cards": WalletCards,
  zap: Zap,
};

interface IconTokenProps {
  name: string;
  className?: string;
}

export function IconToken({ name, className }: IconTokenProps) {
  const Icon = iconMap[name] ?? Sparkles;

  return <Icon className={className} aria-hidden="true" />;
}
