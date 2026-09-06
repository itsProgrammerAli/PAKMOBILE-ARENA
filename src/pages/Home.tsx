import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { PhoneGridShowcase } from '../components/PhoneGridShowcase';
import { FilterCategory, PhoneSpec } from '../types';
import { phones } from '../data/phones';

export interface HomeProps {
  activeFilter: FilterCategory;
  setActiveFilter: (filter: FilterCategory) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedBrand: string | null;
  setSelectedBrand: (brand: string | null) => void;
  onResetFilters: () => void;
  onSelectPhone: (phone: PhoneSpec) => void;
  onToggleCompare: (phone: PhoneSpec) => void;
  comparedPhoneIds: string[];
}

export const Home: React.FC<HomeProps> = ({
  activeFilter,
  setActiveFilter,
  searchQuery,
  setSearchQuery,
  selectedBrand,
  setSelectedBrand,
  onResetFilters,
  onSelectPhone,
  onToggleCompare,
  comparedPhoneIds,
}) => {
  return (
    <div className="space-y-4">
      {/* Seamless Hero Section with Top Search Bar & Categories - ONLY rendered when no brand is selected */}
      {(!selectedBrand || selectedBrand === 'all') && (
        <HeroSection
          activeFilter={activeFilter}
          onSelectFilter={(f) => {
            setActiveFilter(f);
            setSelectedBrand(null);
          }}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSelectPhone={onSelectPhone}
        />
      )}

      {/* Dynamic Subtitle Banner & Counter */}
      <div className="sr-only">
        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">
          All Smartphones in Pakistan. <span className="font-semibold text-emerald-600 dark:text-emerald-400">{phones.length} models</span>
        </p>
      </div>

      {/* Main Phone Catalog Showcase */}
      <PhoneGridShowcase
        phones={phones}
        activeFilter={activeFilter}
        searchQuery={searchQuery}
        selectedBrand={selectedBrand}
        onResetFilters={onResetFilters}
        onSelectPhone={onSelectPhone}
        onToggleCompare={onToggleCompare}
        comparedPhoneIds={comparedPhoneIds}
      />
    </div>
  );
};

export default Home;
