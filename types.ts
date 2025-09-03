
export interface Plan {
  name: string;
  tagline: string;
  price: string;
  priceDetails: string;
  description: string;
  cta: string;
  ctaAction: string;
  isFeatured?: boolean;
}

export interface Feature {
  name: string;
  starter: boolean;
  professional: boolean;
  enterprise: boolean;
}

export interface FeatureCategory {
  title: string;
  isMainHeader?: boolean;
  features: Feature[];
}

export interface Addon {
  name: string;
  price: string;
  description: string;
  features: string[];
}
