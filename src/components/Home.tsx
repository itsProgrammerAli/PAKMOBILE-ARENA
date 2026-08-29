import React from 'react';
import { HeroSection } from './HeroSection';
import { PhoneGridShowcase } from './PhoneGridShowcase';
import { FilterCategory, PhoneSpec } from '../types';
import { PHONES_DATA } from '../data/phones';

interface HomeProps {
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
      {/* Seamless Hero Section with Top Search Bar & Categories */}
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

      {/* Main Phone Catalog Showcase */}
      <PhoneGridShowcase
        phones={PHONES_DATA}
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
