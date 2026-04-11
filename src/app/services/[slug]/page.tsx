import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPageView } from "@/components/site/ServiceDetailPageView";
import { SiteFrame } from "@/components/site/SiteFrame";
import { getServicePageBySlug, servicePageSlugs } from "@/lib/brochure";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const servicePage = getServicePageBySlug(slug);

  if (!servicePage) {
    return {
      title: "Услуга | Pavlov Photography",
      description: "Подробна информация за фотографските услуги на Pavlov Photography.",
    };
  }

  return {
    title: `${servicePage.navLabel} | Pavlov Photography`,
    description: servicePage.hero.summary,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const servicePage = getServicePageBySlug(slug);

  if (!servicePage) {
    notFound();
  }

  return (
    <SiteFrame>
      <ServiceDetailPageView content={servicePage} />
    </SiteFrame>
  );
}
