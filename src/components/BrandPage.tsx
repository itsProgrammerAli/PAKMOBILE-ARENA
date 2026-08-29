import React, { useState } from 'react';
import { PhoneSpec } from '../types';
import { PHONES_DATA, BRANDS } from '../data/phones';
import { PhoneCard } from './PhoneCard';
import { ArrowLeft, ArrowUpDown, Smartphone, ShieldCheck } from 'lucide-react';
import { getEffectivePhoneRating } from '../hooks/usePhoneReviewStats';

interface BrandPageProps {
  brandName: string;
  onBackToHome: () => void;
  onSelectPhone: (phone: PhoneSpec) => void;
  onToggleCompare: (phone: PhoneSpec) => void;
  comparedPhoneIds: string[];
}

export const BrandPage: React.FC<BrandPageProps> = ({
  brandName,
  onBackToHome,
  onSelectPhone,
  onToggleCompare,
  comparedPhoneIds,
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  // Filter phones exclusively for this brand
  const brandPhones = PHONES_DATA.filter(
    (phone) => phone.brand.toLowerCase() === brandName.toLowerCase()
  );

  // Match brand metadata
  const brandMeta = BRANDS.find(
    (b) => b.name.toLowerCase() === brandName.toLowerCase()
  );

  // Sort
  const sortedPhones = [...brandPhones].sort((a, b) => {
    if (sortBy === 'price-asc') return a.pricePKR - b.pricePKR;
    if (sortBy === 'price-desc') return b.pricePKR - a.pricePKR;
    if (sortBy === 'rating') return getEffectivePhoneRating(b) - getEffectivePhoneRating(a);
    return 0; // featured default
  });

  return (
    <div id="brand-page" className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 pb-20 transition-colors duration-200">
      
      {/* Top Breadcrumb Header Bar (Static, non-sticky) */}
      <div className="relative w-full py-3 sm:py-3.5 mb-4 bg-transparent border-b border-gray-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2.5 sm:gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-zinc-400 min-w-0">
            {/* Mobile Back Button: Minimal square icon */}
            <button
              id="brand-back-btn-mobile"
              onClick={onBackToHome}
              className="md:hidden p-2.5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50/80 dark:bg-zinc-800/80 text-gray-700 dark:text-gray-200 shadow-sm active:scale-95 transition-all cursor-pointer flex-shrink-0"
              title="Back to All Phones"
              aria-label="Back to All Phones"
            >
              <ArrowLeft className="w-4 h-4 text-gray-700 dark:text-zinc-200" />
            </button>

            {/* Desktop Back Button: Full pill */}
            <button
              id="brand-back-btn-desktop"
              onClick={onBackToHome}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-xs font-semibold text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors flex-shrink-0 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Back to All Phones</span>
            </button>

            <span className="text-gray-300 dark:text-zinc-700 hidden sm:inline">/</span>
            <span className="text-gray-400 dark:text-zinc-500 text-xs font-medium hidden sm:inline">Brands</span>
            <span className="text-gray-300 dark:text-zinc-700">/</span>
            <span className="font-bold text-gray-900 dark:text-white text-xs sm:text-sm truncate">{brandName}</span>
          </div>

          <div className="flex items-center flex-shrink-0">
            <span className="text-[11px] sm:text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 sm:py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800/60 whitespace-nowrap shadow-2xs">
              {sortedPhones.length} Official Models
            </span>
          </div>
        </div>
      </div>

      {/* Brand Hero Banner */}
      <div className="bg-gradient-to-b from-emerald-50/70 via-gray-50 to-gray-50 dark:from-emerald-950/20 dark:via-zinc-950 dark:to-zinc-950 border-b border-gray-200 dark:border-white/10 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-white/5 border border-emerald-200 dark:border-white/10 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-bold text-emerald-900 dark:text-emerald-300 tracking-wide uppercase">
                  Official Pakistan Catalog
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight font-['Outfit']">
                {brandName} <span className="text-emerald-600 dark:text-emerald-500">Mobile Prices</span> in Pakistan
              </h1>

              <p className="text-sm sm:text-base text-gray-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                Explore the complete lineup of official {brandName} smartphones in Pakistan. Compare verified PKR retail market prices, camera & processor specifications, and PTA DIRBS tax duties for 2026.
              </p>
            </div>

            {/* Quick Brand Trust Badge */}
            <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl p-5 rounded-2xl border border-gray-200 dark:border-white/10 shadow-xs flex items-center gap-4 max-w-sm flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0 border border-emerald-100 dark:border-emerald-800/60">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-gray-900 dark:text-white text-sm">1-Year Official Warranty</div>
                <div className="text-gray-500 dark:text-zinc-400 mt-0.5">All {brandName} phones listed are available through authorized Pakistani retailers & distributors.</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Phones Listing Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Sort and Count Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-gray-200 dark:border-white/10">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white font-['Outfit']">
              All {brandName} Devices ({sortedPhones.length})
            </h2>
            <p className="text-xs text-gray-500 dark:text-zinc-400 mt-0.5">
              Showing current market availability across Karachi, Lahore, Islamabad, and nationwide.
            </p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <label htmlFor="brand-sort-select" className="text-xs font-bold text-gray-500 dark:text-zinc-400 flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5 text-gray-400 dark:text-zinc-500" />
              <span>Sort:</span>
            </label>
            <select
              id="brand-sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 text-xs font-bold text-gray-800 dark:text-zinc-200 rounded-xl px-3.5 py-2 focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-500 shadow-2xs cursor-pointer"
            >
              <option value="featured">Featured & Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Phones Grid */}
        {sortedPhones.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-2xl max-w-lg mx-auto">
            <Smartphone className="w-12 h-12 text-gray-400 dark:text-zinc-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">No Models Found for {brandName}</h3>
            <p className="text-xs text-gray-500 dark:text-zinc-400 mb-6">
              There are currently no active models listed under this brand.
            </p>
            <button
              onClick={onBackToHome}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-all shadow-xs"
            >
              Browse All Brands
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
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

      </div>
    </div>
  );
};
