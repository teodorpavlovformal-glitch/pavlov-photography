import type { Metadata } from "next";
import { AboutPageView } from "@/components/site/AboutPageView";
import { SiteFrame } from "@/components/site/SiteFrame";
import { aboutPageContent } from "@/data/brochure-content";

export const metadata: Metadata = {
  title: "За мен | Pavlov Photography",
  description: aboutPageContent.hero.description,
};

export default function AboutPage() {
  return (
    <SiteFrame>
      <AboutPageView content={aboutPageContent} />
    </SiteFrame>
  );
}
