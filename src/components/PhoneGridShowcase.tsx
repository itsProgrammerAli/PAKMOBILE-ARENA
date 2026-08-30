import React, { useState, useMemo } from 'react';
import { PhoneSpec, FilterCategory } from '../types';
import { PhoneCard } from './PhoneCard';
import { ArrowUpDown, AlertCircle } from 'lucide-react';
import { getEffectivePhoneRating } from '../hooks/usePhoneReviewStats';
import { filterPhonesByCategory, getCategoryHeading } from '../utils/filterUtils';

interface PhoneGridShowcaseProps {
  phones: PhoneSpec[];
  activeFilter: FilterCategory;
  searchQuery: string;
  selectedBrand: string | null;
  onResetFilters: () => void;
  onSelectPhone: (phone: PhoneSpec) => void;
  onToggleCompare: (phone: PhoneSpec) => void;
  comparedPhoneIds: string[];
}

export const PhoneGridShowcase: React.FC<PhoneGridShowcaseProps> = ({
  phones,
  activeFilter,
  searchQuery,
  selectedBrand,
  onResetFilters,
  onSelectPhone,
  onToggleCompare,
  comparedPhoneIds,
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  // Normalize brand name for robust case-insensitive and alias matching
  const normalizeBrand = (b: string | null | undefined): string => {
    if (!b) return '';
    const lower = b.toLowerCase().trim();
    if (lower === 'iphone' || lower === 'apple') return 'apple';
    if (lower === 'galaxy' || lower === 'samsung') return 'samsung';
    if (lower === 'redmi' || lower === 'mi' || lower === 'xiaomi') return 'xiaomi';
    return lower;
  };

  // 1. Compute filtered list (before sorting)
  const filteredPhones = useMemo(() => {
    let result = filterPhonesByCategory(phones, activeFilter);

    // Apply brand filtering if selected
    if (selectedBrand && selectedBrand !== 'all') {
      const normSelected = normalizeBrand(selectedBrand);
      result = result.filter((phone) => {
        const normPhoneBrand = normalizeBrand(phone.brand);
        const isIphoneMatch = normSelected === 'apple' && (phone.name.toLowerCase().includes('iphone') || normPhoneBrand === 'apple');
        return normPhoneBrand === normSelected || isIphoneMatch;
      });
    }

    // Filter by search query if any
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter((phone) => {
        return (
          phone.name.toLowerCase().includes(q) ||
          phone.brand.toLowerCase().includes(q) ||
          phone.specs.processor.toLowerCase().includes(q) ||
          phone.specs.mainCamera.toLowerCase().includes(q)
        );
      });
    }

    return result;
  }, [phones, activeFilter, selectedBrand, searchQuery]);

  // 2. Strict Immutable Sorting Logic (Always Clone First)
  const sortedPhones = useMemo(() => {
    const result = [...filteredPhones]; // Always clone from filtered base

    switch (sortBy) {
      case 'price-asc':
        return result.sort((a, b) => a.pricePKR - b.pricePKR);
      case 'price-desc':
        return result.sort((a, b) => b.pricePKR - a.pricePKR);
      case 'rating':
        return result.sort((a, b) => getEffectivePhoneRating(b) - getEffectivePhoneRating(a));
      case 'featured':
      default:
        // Return original default order (preserve trending / flagship priority)
        return result;
    }
  }, [filteredPhones, sortBy]);

  const categoryTitle = getCategoryHeading(activeFilter, selectedBrand);

  return (
    <section id="phones-showcase-section" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20">
      
      {/* Section Header with Controls - Responsive Alignment */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between items-center text-center md:text-left gap-4 pb-6 mb-7 border-b border-gray-200/80 dark:border-zinc-800/80">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5 flex-wrap">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white font-['Outfit'] tracking-tight">
              {categoryTitle}
            </h2>
            <span className="inline-flex items-center gap-1 whitespace-nowrap px-2.5 py-0.5 rounded-full text-[11px] font-bold font-mono bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60 flex-shrink-0 shadow-2xs">
              <span>{sortedPhones.length}</span>
              <span>models</span>
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-400 mt-1.5 max-w-lg leading-relaxed">
            Prices verified with official distributors & authorized retail outlets across Pakistan.
          </p>
        </div>

        {/* Sort & Brand Controls */}
        <div className="flex items-center justify-center md:justify-end gap-2.5 w-full md:w-auto flex-wrap">
          {selectedBrand && (
            <button
              id="clear-brand-filter-btn"
              onClick={onResetFilters}
              className="px-3 py-1.5 text-xs font-bold rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
            >
              <span>Brand: {selectedBrand}</span>
              <span className="font-extrabold">×</span>
            </button>
          )}

          <div className="flex items-center gap-2 bg-white dark:bg-zinc-900/90 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-gray-200/80 dark:border-zinc-800 shadow-xs">
            <label htmlFor="phone-sort-select" className="text-xs font-semibold text-gray-500 dark:text-zinc-400 flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Sort:</span>
            </label>
            <select
              id="phone-sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'featured' | 'price-asc' | 'price-desc' | 'rating')}
              className="bg-transparent border-none text-xs font-bold text-gray-800 dark:text-zinc-200 py-0.5 pr-2 focus:outline-none cursor-pointer"
            >
              <option value="featured" className="bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100">Featured & Trending</option>
              <option value="price-asc" className="bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100">Price: Low to High</option>
              <option value="price-desc" className="bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100">Price: High to Low</option>
              <option value="rating" className="bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Responsive Grid of Cards */}
      {sortedPhones.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-gray-200/80 dark:border-zinc-800 shadow-sm dark:shadow-2xl">
          <AlertCircle className="w-10 h-10 text-gray-400 dark:text-zinc-500 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">No Smartphones Found</h3>
          <p className="text-sm text-gray-500 dark:text-zinc-400 max-w-md mx-auto mb-6">
            We couldn't find any phone matching your current search or category filters.
          </p>
          <button
            id="empty-reset-filters-btn"
            onClick={onResetFilters}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/20 cursor-pointer"
          >
            Reset Filters & Show All
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {sortedPhones.map((phone) => (
            <PhoneCard
              key={phone.id}
              phone={phone}
              onSelect={onSelectPhone}
              onToggleCompare={onToggleCompare}
              isCompared={comparedPhoneIds.includes(phone.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
};
