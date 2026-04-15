import type { ReactNode } from "react";
import { FooterCta } from "@/components/home/FooterCta";
import { Navbar } from "@/components/home/Navbar";
import { FloatingCallButton } from "@/components/ui/FloatingCallButton";
import { PointerGlow } from "@/components/ui/PointerGlow";
import { homeContent } from "@/data/home-content";
import { brochureNavLinks } from "@/lib/site-navigation";

interface SiteFrameProps {
  children: ReactNode;
}

export function SiteFrame({ children }: SiteFrameProps) {
  return (
    <>
      <PointerGlow />
      <Navbar links={brochureNavLinks} rootHrefBase="/" />
      <main className="relative overflow-hidden pb-24 pt-20 sm:pt-32 md:pb-0">{children}</main>
      <FooterCta content={homeContent.footerCta} />
      <FloatingCallButton phone={homeContent.contact.phone} />
    </>
  );
}
