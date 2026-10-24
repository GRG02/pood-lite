export type Language = "th" | "en";

export interface MetricItem {
  label: string;
  value: string;
  note: string;
}

export interface ScreenshotContentItem {
  id: string;
  src: string;
  title: string;
  badge: string;
  desc: string;
}

export interface ComparisonRowItem {
  feature: string;
  poodLite: string;
  buzz: string;
  wisprFlow: string;
}

export interface SpecItem {
  title: string;
  desc: string;
}

export interface SiteContent {
  navbar: {
    announcement: string;
    features: string;
    comparison: string;
    gallery: string;
    specs: string;
    eula: string;
    manual: string;
    portfolio: string;
    download: string;
  };
  hero: {
    pill: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    motto: string;
    downloadCta: string;
    virusTotalCta: string;
    manualCta: string;
    platformNote: string;
    metrics: MetricItem[];
  };
  features: {
    badge: string;
    title: string;
    subtitle: string;
    philosophyTitle: string;
    mottoQuote: string;
    mottoAuthor: string;
    pillars: {
      number: string;
      title: string;
      desc: string;
    }[];
    cards: {
      title: string;
      desc: string;
    }[];
  };
  comparison: {
    badge: string;
    title: string;
    subtitle: string;
    headers: {
      feature: string;
      poodLite: string;
      buzz: string;
      wisprFlow: string;
    };
    rows: ComparisonRowItem[];
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    clickToEnlarge: string;
    closeModal: string;
    screenshots: ScreenshotContentItem[];
  };
  specs: {
    badge: string;
    title: string;
    subtitle: string;
    os: SpecItem;
    cpu: SpecItem;
    ram: SpecItem;
    storage: SpecItem;
    audio: SpecItem;
    network: SpecItem;
  };
  licenseSection: {
    badge: string;
    title: string;
    intro: string;
    points: {
      title: string;
      desc: string;
    }[];
    rightsNote: string;
    readFullEulaBtn: string;
  };
  guarantee: {
    title: string;
    description: string;
    badge: string;
  };
  cta: {
    badge: string;
    title: string;
    subtitle: string;
    downloadBtn: string;
    portfolioBtn: string;
  };
  footer: {
    developedBy: string;
    developerName: string;
    role: string;
    copyright: string;
    attribution: string;
  };
  eulaPage: {
    backHome: string;
    badge: string;
    title: string;
    subtitle: string;
    switchLangPrompt: string;
    thaiVersionTitle: string;
    englishVersionTitle: string;
    thirdPartyTitle: string;
    thirdPartySubtitle: string;
    modelTitle: string;
    modelBadge: string;
    modelDesc: string;
    modelRepoLink: string;
    librariesTitle: string;
    contactEmail: string;
    contactRightsHolder: string;
  };
}
