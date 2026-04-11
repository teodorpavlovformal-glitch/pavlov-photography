import { homeContent } from "@/data/home-content";
import type { NavLink } from "@/lib/content-types";

export const homeNavLinks: NavLink[] = homeContent.nav;

export const brochureNavLinks: NavLink[] = [
  { label: "Начало", href: "/" },
  { label: "За мен", href: "/about" },
  { label: "Услуги", href: "/services" },
  { label: "Видеография", href: "/services/videography" },
  { label: "Портфолио", href: "/portfolio" },
];
