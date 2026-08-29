import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { FilterCategory, PhoneSpec } from '../types';
import { PHONES_DATA } from '../data/phones';

interface HeroSectionProps {
  activeFilter: FilterCategory;
  onSelectFilter: (filter: FilterCategory) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectPhone: (phone: PhoneSpec) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  activeFilter,
  onSelectFilter,
  searchQuery,
  setSearchQuery,
  onSelectPhone,
}) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const desktopSearchContainerRef = useRef<HTMLDivElement>(null);

  // Live filter matches for smart search suggestions
  const filteredSuggestions = searchQuery.trim() === '' 
    ? [] 
    : PHONES_DATA.filter((phone) => {
        const q = searchQuery.toLowerCase();
        return (
          phone.name.toLowerCase().includes(q) ||
          phone.brand.toLowerCase().includes(q) ||
          phone.specs.processor.toLowerCase().includes(q) ||
          phone.specs.mainCamera.toLowerCase().includes(q)
        );
      }).slice(0, 5);

  // Handle outside click to close search dropdown suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isInsideMobile = searchContainerRef.current && searchContainerRef.current.contains(event.target as Node);
      const isInsideDesktop = desktopSearchContainerRef.current && desktopSearchContainerRef.current.contains(event.target as Node);
      if (!isInsideMobile && !isInsideDesktop) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatPKR = (num: number) => {
    return '₨ ' + num.toLocaleString('en-PK');
  };

  return (
    <section 
      id="hero-section" 
      className="relative pt-3 pb-6 md:pt-10 md:pb-12 px-4 bg-gradient-to-b from-emerald-50/40 via-transparent to-transparent dark:from-emerald-950/20 dark:via-zinc-950 dark:to-zinc-950 border-b border-gray-100 dark:border-zinc-800/80 transition-colors duration-200 overflow-hidden"
    >
      {/* Ambient Radial Glow Background */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] md:w-[48rem] h-[20rem] md:h-[26rem] bg-gradient-to-tr from-emerald-400/10 via-teal-400/10 to-transparent dark:from-emerald-500/10 dark:via-teal-500/5 dark:to-transparent rounded-full blur-3xl pointer-events-none -z-0" 
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* ========================================================================= */}
        {/* MOBILE ONLY SEARCH BAR (< md): Clean, desktop-grade card below header     */}
        {/* ========================================================================= */}
        <div 
          ref={searchContainerRef}
          className="w-full max-w-2xl mb-4 sm:mb-5 relative md:hidden"
        >
          <div className="relative flex items-center w-full bg-white dark:bg-zinc-900 rounded-2xl shadow-md shadow-emerald-500/5 border border-emerald-500/20 p-1.5 transition-all focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500">
            {/* Search Icon */}
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-500 pointer-events-none flex items-center justify-center">
              <Search className={`w-4 h-4 transition-colors ${isSearchFocused ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-400 dark:text-zinc-500'}`} />
            </div>

            {/* Clean Input Field */}
            <input
              id="hero-search-input-mobile"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              placeholder="Search phone, brand, processor..."
              autoComplete="off"
              className="w-full bg-transparent text-xs sm:text-sm pl-9 pr-24 py-2.5 outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 font-medium"
            />

            {/* Clear Button */}
            {searchQuery && (
              <button
                id="hero-search-clear-btn-mobile"
                onClick={() => setSearchQuery('')}
                className="absolute right-20 top-1/2 -translate-y-1/2 p-1 rounded-md text-gray-400 hover:text-gray-700 dark:text-zinc-400 dark:hover:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                aria-label="Clear search text"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Premium Emerald Action Button */}
            <button
              id="hero-search-submit-btn-mobile"
              onClick={() => {
                if (filteredSuggestions.length > 0) {
                  onSelectPhone(filteredSuggestions[0]);
                  setIsSearchFocused(false);
                }
              }}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs px-4 py-2 rounded-xl shadow-sm cursor-pointer transition-all flex-shrink-0"
            >
              <span>Search</span>
            </button>
          </div>

          {/* Mobile Live Suggestions Dropdown */}
          {isSearchFocused && filteredSuggestions.length > 0 && (
            <div 
              id="hero-search-dropdown-mobile"
              className="absolute left-0 right-0 top-full mt-1.5 bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-2xl overflow-hidden z-50 text-left animate-in fade-in slide-in-from-top-1 duration-150"
            >
              <div className="px-3.5 py-2 bg-gray-50 dark:bg-zinc-800/80 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between text-[11px] font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider">
                <span>Matching Devices ({filteredSuggestions.length})</span>
                <span>PKR Rates</span>
              </div>

              <div className="divide-y divide-gray-100 dark:divide-zinc-800 max-h-72 overflow-y-auto">
                {filteredSuggestions.map((phone) => (
                  <div
                    key={phone.id}
                    onClick={() => {
                      onSelectPhone(phone);
                      setIsSearchFocused(false);
                    }}
                    className="p-2.5 sm:p-3 hover:bg-emerald-50/70 dark:hover:bg-zinc-800/80 transition-colors cursor-pointer flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-2.5">
                      <img 
                        src={phone.image} 
                        alt={phone.name} 
                        className="w-9 h-9 object-contain rounded-lg bg-gray-50 dark:bg-zinc-800 p-1 border border-gray-100 dark:border-zinc-700 flex-shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <div className="text-xs font-bold text-gray-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                          {phone.name}
                        </div>
                        <div className="text-[10px] text-gray-500 dark:text-zinc-400 flex items-center gap-1.5">
                          <span>{phone.specs.processor.split('(')[0]}</span>
                          <span>•</span>
                          <span>{phone.specs.battery}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 font-mono">
                        {formatPKR(phone.pricePKR)}
                      </div>
                      <div className="text-[10px] text-emerald-800 dark:text-emerald-400 font-medium">
                        {phone.ptaTax.status.includes('Approved') ? 'PTA Approved' : 'Non-PTA'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* MARKET BADGE PILL                                                         */}
        {/* ========================================================================= */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-emerald-200/80 dark:border-emerald-800/60 mb-2.5 sm:mb-3 shadow-xs">
          <span className="flex h-1.5 w-1.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-600 dark:bg-emerald-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-bold text-emerald-900 dark:text-emerald-300 tracking-wide">
            Pakistan's Largest Verified Smartphone Database
          </span>
        </div>

        {/* ========================================================================= */}
        {/* MAIN HEADLINE                                                             */}
        {/* ========================================================================= */}
        <h1 
          id="hero-headline"
          className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center tracking-tight leading-tight text-gray-900 dark:text-white font-['Outfit'] mb-1.5 sm:mb-2 md:mb-3"
        >
          <span>Find Your Perfect Smartphone </span>
          <span className="text-emerald-600 dark:text-emerald-500">in Pakistan</span>
        </h1>

        {/* ========================================================================= */}
        {/* 2-LINE SUBTITLE DESCRIPTION                                              */}
        {/* ========================================================================= */}
        <p 
          id="hero-subheadline"
          className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-zinc-400 max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-2 sm:mb-3 font-normal leading-relaxed text-center"
        >
          Explore verified hardware specs, live market prices (PKR), expert reviews, and official PTA tax duties for every major mobile brand.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP FLOATING SEARCH BAR (hidden md:block): Positioned between        */}
        {/* subtitle and category filter chips                                       */}
        {/* ========================================================================= */}
        <div 
          ref={desktopSearchContainerRef}
          className="hidden md:block w-full max-w-2xl mx-auto mt-5 mb-6 relative z-20"
        >
          <div className="relative flex items-center bg-white dark:bg-zinc-900 rounded-2xl shadow-lg shadow-emerald-500/5 border border-emerald-500/20 p-1.5 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500 transition-all">
            {/* Search Icon */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-500 pointer-events-none flex items-center justify-center">
              <Search className={`w-5 h-5 transition-colors ${isSearchFocused ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-400 dark:text-zinc-500'}`} />
            </div>

            {/* Input Field */}
            <input
              id="hero-search-input-desktop"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              placeholder="Search phone, brand, or processor (e.g. S24, iPhone 16, Dimensity)..."
              autoComplete="off"
              className="w-full h-11 text-sm pl-10 pr-28 rounded-xl bg-transparent focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 font-medium"
            />

            {/* Clear Button */}
            {searchQuery && (
              <button
                id="hero-search-clear-btn-desktop"
                onClick={() => setSearchQuery('')}
                className="absolute right-28 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-gray-400 hover:text-gray-700 dark:text-zinc-400 dark:hover:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Clear search text"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            {/* Emerald Green Action Button */}
            <button
              id="hero-search-submit-btn-desktop"
              onClick={() => {
                if (filteredSuggestions.length > 0) {
                  onSelectPhone(filteredSuggestions[0]);
                  setIsSearchFocused(false);
                }
              }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-6 py-2.5 rounded-xl transition-all shadow-md shadow-emerald-600/20 cursor-pointer flex items-center gap-1.5 flex-shrink-0"
            >
              <span>Search</span>
            </button>
          </div>

          {/* Desktop Live Suggestions Dropdown */}
          {isSearchFocused && filteredSuggestions.length > 0 && (
            <div 
              id="hero-search-dropdown-desktop"
              className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-2xl overflow-hidden z-50 text-left animate-in fade-in slide-in-from-top-1 duration-150"
            >
              <div className="px-4 py-2.5 bg-gray-50 dark:bg-zinc-800/80 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider">
                <span>Matching Devices ({filteredSuggestions.length})</span>
                <span>PKR Rates</span>
              </div>

              <div className="divide-y divide-gray-100 dark:divide-zinc-800 max-h-80 overflow-y-auto">
                {filteredSuggestions.map((phone) => (
                  <div
                    key={phone.id}
                    onClick={() => {
                      onSelectPhone(phone);
                      setIsSearchFocused(false);
                    }}
                    className="p-3 hover:bg-emerald-50/70 dark:hover:bg-zinc-800/80 transition-colors cursor-pointer flex items-center justify-between gap-4 group"
                  >
                    <div className="flex items-center gap-3">
                      <img 
                        src={phone.image} 
                        alt={phone.name} 
                        className="w-10 h-10 object-contain rounded-xl bg-gray-50 dark:bg-zinc-800 p-1 border border-gray-100 dark:border-zinc-700 flex-shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                          {phone.name}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-zinc-400 flex items-center gap-2 mt-0.5">
                          <span>{phone.specs.processor.split('(')[0]}</span>
                          <span>•</span>
                          <span>{phone.specs.battery}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <div className="text-sm font-bold text-emerald-700 dark:text-emerald-400 font-mono">
                        {formatPKR(phone.pricePKR)}
                      </div>
                      <div className="text-xs text-emerald-800 dark:text-emerald-400 font-medium">
                        {phone.ptaTax.status.includes('Approved') ? 'PTA Approved' : 'Non-PTA'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* CATEGORY FILTER CHIPS                                                     */}
        {/* ========================================================================= */}
        <div className="w-full max-w-4xl px-1">
          <div 
            id="hero-quick-filters" 
            className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-1 justify-start sm:justify-center md:flex-wrap md:justify-center md:gap-2.5"
          >
            {/* All Phones */}
            <button
              id="filter-chip-all"
              onClick={() => onSelectFilter('all')}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 flex-shrink-0 cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-emerald-600 text-white border border-emerald-600 shadow-md shadow-emerald-600/20 font-semibold'
                  : 'bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border border-gray-200/80 dark:border-zinc-700 text-gray-700 dark:text-gray-300 shadow-xs hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400'
              }`}
            >
              <span>📱</span>
              <span>All Phones</span>
            </button>

            {/* Trending */}
            <button
              id="filter-chip-trending"
              onClick={() => onSelectFilter('trending')}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 flex-shrink-0 cursor-pointer ${
                activeFilter === 'trending'
                  ? 'bg-emerald-600 text-white border border-emerald-600 shadow-md shadow-emerald-600/20 font-semibold'
                  : 'bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border border-gray-200/80 dark:border-zinc-700 text-gray-700 dark:text-gray-300 shadow-xs hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400'
              }`}
            >
              <span>🔥</span>
              <span>Trending</span>
            </button>

            {/* Budget */}
            <button
              id="filter-chip-budget"
              onClick={() => onSelectFilter('budget')}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 flex-shrink-0 cursor-pointer ${
                activeFilter === 'budget'
                  ? 'bg-emerald-600 text-white border border-emerald-600 shadow-md shadow-emerald-600/20 font-semibold'
                  : 'bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border border-gray-200/80 dark:border-zinc-700 text-gray-700 dark:text-gray-300 shadow-xs hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400'
              }`}
            >
              <span>💰</span>
              <span>Budget (&lt;80k)</span>
            </button>

            {/* Camera Kings */}
            <button
              id="filter-chip-camera"
              onClick={() => onSelectFilter('camera')}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 flex-shrink-0 cursor-pointer ${
                activeFilter === 'camera'
                  ? 'bg-emerald-600 text-white border border-emerald-600 shadow-md shadow-emerald-600/20 font-semibold'
                  : 'bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border border-gray-200/80 dark:border-zinc-700 text-gray-700 dark:text-gray-300 shadow-xs hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400'
              }`}
            >
              <span>📸</span>
              <span>Camera Kings</span>
            </button>

            {/* Gaming 120Hz+ */}
            <button
              id="filter-chip-gaming"
              onClick={() => onSelectFilter('gaming')}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 flex-shrink-0 cursor-pointer ${
                activeFilter === 'gaming'
                  ? 'bg-emerald-600 text-white border border-emerald-600 shadow-md shadow-emerald-600/20 font-semibold'
                  : 'bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border border-gray-200/80 dark:border-zinc-700 text-gray-700 dark:text-gray-300 shadow-xs hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400'
              }`}
            >
              <span>🎮</span>
              <span>Gaming 120Hz+</span>
            </button>

            {/* Ultra Flagships */}
            <button
              id="filter-chip-flagship"
              onClick={() => onSelectFilter('flagship')}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 flex-shrink-0 cursor-pointer ${
                activeFilter === 'flagship'
                  ? 'bg-emerald-600 text-white border border-emerald-600 shadow-md shadow-emerald-600/20 font-semibold'
                  : 'bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border border-gray-200/80 dark:border-zinc-700 text-gray-700 dark:text-gray-300 shadow-xs hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400'
              }`}
            >
              <span>👑</span>
              <span>Ultra Flagships</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
