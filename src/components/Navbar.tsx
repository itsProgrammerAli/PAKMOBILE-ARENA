import React, { useState } from 'react';
import { 
  Smartphone, 
  Scale, 
  Calculator, 
  Menu, 
  X, 
  ChevronDown,
  Layers,
  Sun,
  Moon,
} from 'lucide-react';
import { BRANDS } from '../data/phones';

export type NavbarActiveView = 'home' | 'brand' | 'phone-detail' | 'compare' | 'pta-tax';

interface NavbarProps {
  onNavigateToPta: () => void;
  onNavigateToCompare: () => void;
  onSelectBrand?: (brand: string) => void;
  compareCount: number;
  activeView: NavbarActiveView;
  selectedBrand?: string | null;
  onNavigateToHome: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateToPta,
  onNavigateToCompare,
  onSelectBrand,
  compareCount,
  activeView,
  selectedBrand,
  onNavigateToHome,
  theme,
  onToggleTheme,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBrandsDropdownOpen, setIsBrandsDropdownOpen] = useState(false);

  return (
    <header 
      id="main-navbar"
      className="relative z-40 w-full bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 transition-colors duration-200"
    >
      {/* Main Navigation Bar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* 1. LEFT CORNER: Brand / Logo */}
          <div className="flex items-center flex-shrink-0">
            <a 
              id="brand-logo-link"
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                onNavigateToHome();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-center space-x-2.5 focus:outline-none"
            >
              <div className="h-7 w-7 sm:h-8 sm:w-8 bg-emerald-600 rounded-xl flex items-center justify-center shadow-xs transition-transform duration-200 group-hover:scale-105">
                <Smartphone className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
              </div>

              <div className="flex items-center">
                <span className="text-base sm:text-lg font-bold tracking-tight text-gray-900 dark:text-white font-['Outfit']">
                  PakMobile <span className="text-emerald-600 dark:text-emerald-500">Arena</span>
                </span>
              </div>
            </a>
          </div>

          {/* 2. CENTER: Primary Desktop Navigation Items (Hidden on Mobile) */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {/* 1. Home Link */}
            <button
              id="nav-home-btn"
              onClick={() => {
                onNavigateToHome();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-sm font-semibold transition-all py-1.5 relative cursor-pointer ${
                activeView === 'home'
                  ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                  : 'text-gray-600 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <span>Home</span>
              {activeView === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
              )}
            </button>

            {/* 2. Brands Dropdown */}
            <div className="relative">
              <button
                id="nav-brands-btn"
                onClick={() => setIsBrandsDropdownOpen(!isBrandsDropdownOpen)}
                onBlur={() => setTimeout(() => setIsBrandsDropdownOpen(false), 200)}
                className={`flex items-center space-x-1.5 text-sm font-semibold transition-all py-1.5 group cursor-pointer relative ${
                  activeView === 'brand'
                    ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                    : 'text-gray-600 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <span>{activeView === 'brand' && selectedBrand ? selectedBrand : 'Brands'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isBrandsDropdownOpen ? 'rotate-180 text-emerald-600 dark:text-emerald-400' : activeView === 'brand' ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-400 dark:text-zinc-500 group-hover:text-gray-600 dark:group-hover:text-zinc-300'
                }`} />
                {activeView === 'brand' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
                )}
              </button>

              {isBrandsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 p-2 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-2xl z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-wider flex items-center justify-between border-b border-gray-100 dark:border-zinc-800 mb-1">
                    <span>Explore Brands</span>
                    <Layers className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="grid grid-cols-2 gap-1 py-1">
                    {BRANDS.map((b) => (
                      <button
                        key={b.slug}
                        id={`brand-dropdown-${b.slug}`}
                        onClick={() => {
                          if (onSelectBrand) onSelectBrand(b.name);
                          setIsBrandsDropdownOpen(false);
                        }}
                        className={`flex items-center justify-between px-2.5 py-2 text-xs font-medium rounded-xl transition-colors text-left cursor-pointer ${
                          selectedBrand?.toLowerCase() === b.name.toLowerCase() && activeView === 'brand'
                            ? 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 font-bold'
                            : 'text-gray-700 dark:text-zinc-300 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-emerald-50/60 dark:hover:bg-zinc-800/60'
                        }`}
                      >
                        <span>{b.name}</span>
                        <span className="text-[10px] text-gray-400 dark:text-zinc-500 font-mono">{b.count}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. Compare Link */}
            <button
              id="nav-compare-btn"
              onClick={onNavigateToCompare}
              className={`relative flex items-center space-x-1.5 text-sm font-semibold transition-all py-1.5 group cursor-pointer ${
                activeView === 'compare'
                  ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                  : 'text-gray-600 dark:text-zinc-300 hover:text-emerald-700 dark:hover:text-emerald-400'
              }`}
            >
              <Scale className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>Compare</span>
              {compareCount > 0 && (
                <span className="flex items-center justify-center w-4 h-4 text-[9px] font-bold text-white bg-emerald-600 rounded-full shadow-2xs">
                  {compareCount}
                </span>
              )}
              {activeView === 'compare' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
              )}
            </button>

            {/* 4. PTA Tax Link */}
            <button
              id="nav-pta-tax-btn"
              onClick={onNavigateToPta}
              className={`relative flex items-center space-x-1.5 text-sm font-semibold transition-all py-1.5 group cursor-pointer ${
                activeView === 'pta-tax'
                  ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                  : 'text-gray-600 dark:text-zinc-300 hover:text-emerald-700 dark:hover:text-emerald-400'
              }`}
            >
              <Calculator className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>PTA Tax Calculator</span>
              {activeView === 'pta-tax' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
              )}
            </button>
          </nav>

          {/* 3. RIGHT CORNER: Desktop Theme Toggle (Moon/Sun Icon) */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <button
              id="desktop-theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-xl bg-gray-50 dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 text-gray-700 dark:text-zinc-200 border border-gray-200 dark:border-zinc-700 transition-all shadow-2xs active:scale-95 focus:outline-none flex items-center justify-center cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-4.5 h-4.5 text-amber-400 transition-transform rotate-0 hover:rotate-45" />
              ) : (
                <Moon className="w-4.5 h-4.5 text-gray-700 transition-transform" />
              )}
            </button>
          </div>

          {/* Mobile Actions: Theme + Hamburger Menu Button (< md) */}
          <div className="flex items-center gap-1.5 md:hidden">
            <button
              id="mobile-theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-1.5 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-zinc-200 hover:text-gray-900 dark:hover:text-white focus:outline-none cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-gray-700" />
              )}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-1.5 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-zinc-200 hover:text-gray-900 dark:hover:text-white focus:outline-none cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4 text-gray-900 dark:text-white" /> : <Menu className="w-4 h-4 text-gray-700 dark:text-zinc-200" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu (Absolute Overlay Dropdown) */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-nav-menu"
          className="md:hidden absolute top-full left-0 right-0 z-50 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md shadow-xl border-b border-gray-100 dark:border-zinc-800 px-3 pt-2.5 pb-4 space-y-2.5 animate-in slide-in-from-top-1 duration-150"
        >
          <div className="grid grid-cols-2 gap-1.5">
            <button
              id="mobile-nav-home"
              onClick={() => {
                onNavigateToHome();
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-semibold text-left ${
                activeView === 'home'
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700/60'
                  : 'bg-gray-50 dark:bg-zinc-800/60 border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-zinc-100'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Home</span>
            </button>

            <button
              id="mobile-nav-compare"
              onClick={() => {
                onNavigateToCompare();
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center justify-between px-3 py-2 rounded-lg border text-xs font-semibold text-left ${
                activeView === 'compare'
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700/60'
                  : 'bg-gray-50 dark:bg-zinc-800/60 border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-zinc-100'
              }`}
            >
              <div className="flex items-center gap-2">
                <Scale className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Compare</span>
              </div>
              {compareCount > 0 && (
                <span className="flex items-center justify-center w-4 h-4 text-[9px] font-bold text-white bg-emerald-600 rounded-full">
                  {compareCount}
                </span>
              )}
            </button>

            <button
              id="mobile-nav-pta"
              onClick={() => {
                onNavigateToPta();
                setIsMobileMenuOpen(false);
              }}
              className={`col-span-2 flex items-center justify-between px-3 py-2 rounded-lg border text-xs font-semibold text-left ${
                activeView === 'pta-tax'
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700/60'
                  : 'bg-gray-50 dark:bg-zinc-800/60 border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-zinc-100'
              }`}
            >
              <div className="flex items-center gap-2">
                <Calculator className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>PTA Tax Calculator</span>
              </div>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">DIRBS 2026</span>
            </button>
          </div>

          {/* Quick Brand Grid in Mobile Drawer */}
          <div className="pt-2 border-t border-gray-100 dark:border-zinc-800">
            <div className="text-[11px] font-bold text-gray-500 dark:text-zinc-400 mb-1.5 px-1 uppercase tracking-wider flex items-center justify-between">
              <span>Popular Brands</span>
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
            </div>
            <div className="grid grid-cols-4 gap-1">
              {BRANDS.slice(0, 8).map((b) => (
                <button
                  key={b.slug}
                  id={`mobile-brand-btn-${b.slug}`}
                  onClick={() => {
                    if (onSelectBrand) onSelectBrand(b.name);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-2 py-1.5 rounded-lg text-center text-xs font-semibold border transition-colors ${
                    selectedBrand?.toLowerCase() === b.name.toLowerCase() && activeView === 'brand'
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-gray-50 dark:bg-zinc-800/60 border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 hover:border-emerald-500'
                  }`}
                >
                  {b.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
