"use client";

import { useState, useEffect, useEffectEvent } from "react";
import { Menu, X } from "lucide-react";
import type { NavLink } from "@/lib/content-types";
import { ApertureLogo } from "@/components/ui/ApertureLogo";

interface NavbarProps {
  links: NavLink[];
  rootHrefBase?: string;
}

export function Navbar({ links, rootHrefBase = "" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const desktopLinks = links.filter((link) => link.href !== "#contact");
  const mobileLinks = links.some((link) => link.href === "#contact")
    ? links
    : [...links, { label: "Контакт", href: "#contact" }];

  const resolveHref = (href: string) =>
    rootHrefBase && href.startsWith("#") ? `${rootHrefBase}${href}` : href;

  const onScroll = useEffectEvent(() => {
    setIsScrolled(window.scrollY > 32);
  });

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const chromeClass = isScrolled || isOpen ? "nav-solid" : "nav-clear";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <div className={`mx-auto max-w-7xl rounded-full border px-5 py-3 transition-all duration-300 ${chromeClass}`}>
        <div className="flex items-center justify-between gap-6">
          <a href={resolveHref("#hero")} className="group flex items-center gap-3">
            <ApertureLogo className="h-10 w-10" />
            <p className="text-[0.8rem] font-medium uppercase tracking-[0.36em] text-[var(--muted)] sm:text-[0.9rem]">
              Pavlov Photography
            </p>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {desktopLinks.map((link) => (
              <a
                key={`${rootHrefBase}${link.href}`}
                href={resolveHref(link.href)}
                className="text-xs uppercase tracking-[0.28em] text-[var(--muted)] transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href={resolveHref("#contact")} className="button-secondary">
              Контакт
            </a>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              className="icon-button"
              aria-label={isOpen ? "Затвори менюто" : "Отвори менюто"}
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="mt-4 border-t border-[var(--line-soft)] pt-4 lg:hidden">
            <nav className="flex flex-col gap-3">
              {mobileLinks.map((link) => (
                <a
                  key={`${rootHrefBase}${link.href}-mobile`}
                  href={resolveHref(link.href)}
                  className="rounded-2xl border border-[var(--line-soft)] px-4 py-3 text-sm uppercase tracking-[0.2em] text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
