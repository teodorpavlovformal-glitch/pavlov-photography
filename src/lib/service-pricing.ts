import type { ServiceCategory } from "@/lib/content-types";

export const servicePricingEventName = "service-pricing:select";

export interface ServicePricingSelectionDetail {
  category: ServiceCategory;
}

export function createServicePricingSelectionEvent(category: ServiceCategory) {
  return new CustomEvent<ServicePricingSelectionDetail>(servicePricingEventName, {
    detail: { category },
  });
}
