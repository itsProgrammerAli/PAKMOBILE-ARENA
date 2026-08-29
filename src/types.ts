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
}

export type FilterCategory = 'all' | 'trending' | 'budget' | 'camera' | 'gaming' | 'flagship';

export interface BrandInfo {
  name: string;
  count: number;
  logoText: string;
  slug: string;
}
