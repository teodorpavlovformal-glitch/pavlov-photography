import type { Metadata } from "next";
import { ServicesHubPageView } from "@/components/site/ServicesHubPageView";
import { SiteFrame } from "@/components/site/SiteFrame";
import { servicesHubContent } from "@/data/brochure-content";

export const metadata: Metadata = {
  title: "Услуги | Pavlov Photography",
  description: servicesHubContent.hero.description,
};

export default function ServicesPage() {
  return (
    <SiteFrame>
      <ServicesHubPageView />
    </SiteFrame>
  );
}
