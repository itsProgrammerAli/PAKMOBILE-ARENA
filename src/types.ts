export interface PhoneVariant {
  id: string;
  name: string;
  ram?: string;
  storage?: string;
  pricePKR: number;
  officialPricePKR?: number;
  marketPriceRangePKR: {
    min: number;
    max: number;
  };
}

export interface PhoneReview {
  verdictScore: number; // e.g. 8.5 / 10
  headline: string; // Catchy one-line verdict
  pakistanMarketContext: string; // Pricing & retail availability reality
  performanceAndCamera: string; // Real-world gaming, thermals, and camera performance
  finalVerdict: string; // Direct "Who should buy this and who should skip it" advice
}

export interface PhoneSpec {
  id: string;
  name: string;
  brand: string;
  model: string;
  pricePKR: number;
  officialPricePKR?: number;
  marketPriceRangePKR: {
    min: number;
    max: number;
  };
  variants?: PhoneVariant[];
  ptaTax: {
    passportTaxPKR: number;
    cnicTaxPKR: number;
    status: 'Official PTA Approved' | 'Non-PTA' | 'Factory Unlocked';
  };
  releaseDate: string;
  rating: number;
  reviewCount: number;
  image: string;
  tags: Array<'trending' | 'budget' | 'camera' | 'gaming' | 'flagship' | 'battery'>;
  specs: {
    display: string;
    refreshRate: string;
    processor: string;
    ram: string;
    storage: string;
    mainCamera: string;
    selfieCamera: string;
    battery: string;
    charging: string;
    os: string;
    network: string;
  };
  colors: string[];
  colorImages?: Record<string, string>;
  colorHexes?: Record<string, string>;
  popularInCities: string[];
  review?: PhoneReview;
}

export type FilterCategory = 'all' | 'trending' | 'budget' | 'camera' | 'gaming' | 'flagship';

export interface UserReview {
  id: string;
  userName: string;
  city: string;
  rating: number;
  date: string;
  comment: string;
}

export interface BrandInfo {
  name: string;
  count: number;
  logoText: string;
  slug: string;
}

export type NewsCategory = 'All' | 'PTA & Taxes' | 'Market Trends' | 'Telecom' | 'Hardware & Tech' | 'Consumer Guide' | 'Launches';

export interface NewsArticleSection {
  heading: string;
  paragraphs: string[];
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  isoDate?: string;
  category: string;
  readTime: string;
  imageUrl: string;
  image?: string; // backwards compatibility
  summary: string;
  content: NewsArticleSection[];
  tags: string[];
  author?: string;
}
