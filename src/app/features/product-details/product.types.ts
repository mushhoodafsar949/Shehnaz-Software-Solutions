// Product types for product-details component
export interface ProductScreenshot {
  url: string;
  title: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  image: string;
}

export interface TechDetail {
  category: string;
  items: string[];
}

export interface DevelopmentPractice {
  title: string;
  description: string;
}

export interface SecurityFeature {
  title: string;
  description: string;
}

export interface ComplianceStandard {
  name: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  screenshots: ProductScreenshot[];
  features: ProductFeature[];
  systemArchitecture?: string;
  devopsPipeline?: string;
  techDetails: TechDetail[];
  agileDiagram?: string;
  sprintWorkflow?: string;
  developmentPractices: DevelopmentPractice[];
  securityFeatures: SecurityFeature[];
  complianceStandards: ComplianceStandard[];
}

export interface ResponsiveOption {
  breakpoint: string;
  numVisible: number;
  numScroll?: number;
}

