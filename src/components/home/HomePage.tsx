import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { Faq } from "@/components/home/Faq";
import { FooterCta } from "@/components/home/FooterCta";
import { Hero } from "@/components/home/Hero";
import { Navbar } from "@/components/home/Navbar";
import { Portfolio } from "@/components/home/Portfolio";
import { Reviews } from "@/components/home/Reviews";
import { Services } from "@/components/home/Services";
import { Terms } from "@/components/home/Terms";
import { Videography } from "@/components/home/Videography";
import { FloatingCallButton } from "@/components/ui/FloatingCallButton";
import { PointerGlow } from "@/components/ui/PointerGlow";
import { homeContent } from "@/data/home-content";
import { homeNavLinks } from "@/lib/site-navigation";

export function HomePage() {
  return (
    <>
      <PointerGlow />
      <Navbar links={homeNavLinks} />
      <main className="relative overflow-hidden">
        <Hero content={homeContent.hero} />
        <About content={homeContent.about} />
        <Services content={homeContent.services} />
        <Videography content={homeContent.videography} />
        <Portfolio content={homeContent.portfolio} />
        <Terms content={homeContent.terms} />
        <Reviews content={homeContent.reviews} />
        <Faq content={homeContent.faq} />
        <Contact content={homeContent.contact} />
      </main>
      <FooterCta content={homeContent.footerCta} />
      <FloatingCallButton phone={homeContent.contact.phone} />
    </>
  );
}
