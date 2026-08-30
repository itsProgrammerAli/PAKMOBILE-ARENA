import React, { useState, useEffect } from 'react';
import { FilterCategory, PhoneSpec } from './types';
import { PHONES_DATA } from './data/phones';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { BrandPage } from './components/BrandPage';
import { PhoneDetailPage } from './components/PhoneDetailPage';
import { ComparePage } from './components/ComparePage';
import { PtaTaxPage } from './components/PtaTaxPage';
import { Footer } from './components/Footer';
import { Scale, ArrowRight, X } from 'lucide-react';

export type AppView = 'home' | 'brand' | 'phone-detail' | 'compare' | 'pta-tax';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  
  // Navigation & Scroll Restoration State
  const [lastViewedPhoneId, setLastViewedPhoneId] = useState<string | null>(null);
  const [previousView, setPreviousView] = useState<AppView>('home');

  // Selected phone for detail view
  const [selectedPhone, setSelectedPhone] = useState<PhoneSpec | null>(null);
  
  // Selected phone pre-fill for PTA page
  const [ptaTargetPhone, setPtaTargetPhone] = useState<PhoneSpec | null>(null);

  // Compared phones list (up to 2)
  const [comparedPhones, setComparedPhones] = useState<PhoneSpec[]>([]);

  // Theme State ('light' | 'dark') - default to 'light' mode on initial visit
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
    }
    return 'light';
  });

  // Sync theme with <html> class & localStorage
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  // Browser Native Back/Forward History Listener
  useEffect(() => {
    // Initialize root history entry
    window.history.replaceState({ view: 'home', brand: null }, '');

    const handlePopState = (event: PopStateEvent) => {
      const state = event.state;
      if (!state || state.view === 'home') {
        setCurrentView('home');
        setSelectedPhone(null);
        setSelectedBrand(state?.brand || null);
      } else if (state.view === 'phone-detail' && state.phoneId) {
        const found = PHONES_DATA.find((p) => p.id === state.phoneId);
        if (found) {
          setSelectedPhone(found);
          setCurrentView('phone-detail');
        } else {
          setCurrentView('home');
          setSelectedPhone(null);
        }
      } else if (state.view === 'brand' && state.brand) {
        setSelectedBrand(state.brand);
        setCurrentView('brand');
      } else if (state.view === 'compare') {
        setCurrentView('compare');
      } else if (state.view === 'pta-tax') {
        if (state.phoneId) {
          const found = PHONES_DATA.find((p) => p.id === state.phoneId);
          if (found) setPtaTargetPhone(found);
        }
        setCurrentView('pta-tax');
      } else {
        setCurrentView('home');
        setSelectedPhone(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Navigation handlers
  const handleNavigateToHome = () => {
    setSelectedBrand(null);
    setActiveFilter('all');
    setSearchQuery('');
    setLastViewedPhoneId(null);
    setSelectedPhone(null);
    setCurrentView('home');
    window.history.pushState({ view: 'home', brand: null }, '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    if (window.history.state && window.history.state.view === 'phone-detail') {
      window.history.back();
    } else {
      handleNavigateToHome();
    }
    if (lastViewedPhoneId) {
      setTimeout(() => {
        const element = document.getElementById(`phone-card-${lastViewedPhoneId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 120); // Delay ensures Home DOM is fully mounted
    }
  };

  const handleSelectBrand = (brand: string) => {
    setSelectedBrand(brand);
    setActiveFilter('all');
    setSearchQuery('');
    setCurrentView('home');
    window.history.pushState({ view: 'home', brand }, '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPhone = (phone: PhoneSpec) => {
    setPreviousView(currentView);
    setLastViewedPhoneId(phone.id);
    setSelectedPhone(phone);
    setCurrentView('phone-detail');
    window.history.pushState({ view: 'phone-detail', phoneId: phone.id }, '');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleNavigateToCompare = () => {
    setCurrentView('compare');
    window.history.pushState({ view: 'compare' }, '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToPta = (phone?: PhoneSpec) => {
    if (phone) {
      setPtaTargetPhone(phone);
    } else if (selectedPhone) {
      setPtaTargetPhone(selectedPhone);
    }
    setCurrentView('pta-tax');
    window.history.pushState({ view: 'pta-tax', phoneId: phone?.id || selectedPhone?.id }, '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleCompare = (phone: PhoneSpec) => {
    setComparedPhones((prev) => {
      const exists = prev.some((p) => p.id === phone.id);
      if (exists) {
        return prev.filter((p) => p.id !== phone.id);
      } else {
        if (prev.length >= 2) {
          return [prev[1], phone];
        }
        return [...prev, phone];
      }
    });
  };

  const handleRemoveComparedPhone = (phoneId: string) => {
    setComparedPhones((prev) => prev.filter((p) => p.id !== phoneId));
  };

  const handleAddComparedPhone = (phone: PhoneSpec) => {
    if (comparedPhones.length < 2 && !comparedPhones.some((p) => p.id === phone.id)) {
      setComparedPhones((prev) => [...prev, phone]);
    }
  };

  const handleClearAllCompared = () => {
    setComparedPhones([]);
  };

  const handleResetFilters = () => {
    setActiveFilter('all');
    setSelectedBrand(null);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 font-sans flex flex-col selection:bg-emerald-100 selection:text-emerald-900 dark:selection:bg-emerald-900/60 dark:selection:text-emerald-200 transition-colors duration-200">
      
      {/* 1. Header Navbar */}
      <Navbar
        onNavigateToHome={handleNavigateToHome}
        onNavigateToCompare={handleNavigateToCompare}
        onNavigateToPta={() => handleNavigateToPta()}
        onSelectBrand={handleSelectBrand}
        compareCount={comparedPhones.length}
        activeView={currentView}
        selectedBrand={selectedBrand}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* 2. Page Router Body */}
      <main className="flex-1">
        {currentView === 'phone-detail' && selectedPhone ? (
          <PhoneDetailPage
            phone={selectedPhone}
            onBack={handleBackToHome}
            onNavigateToHome={handleNavigateToHome}
            onSelectBrand={handleSelectBrand}
            onToggleCompare={handleToggleCompare}
            isCompared={comparedPhones.some((p) => p.id === selectedPhone.id)}
            onNavigateToPta={handleNavigateToPta}
            onNavigateToCompare={handleNavigateToCompare}
            onSelectPhone={handleSelectPhone}
          />
        ) : currentView === 'compare' ? (
          <ComparePage
            comparedPhones={comparedPhones}
            onRemovePhone={handleRemoveComparedPhone}
            onAddPhone={handleAddComparedPhone}
            onSelectPhone={handleSelectPhone}
            onNavigateToPta={handleNavigateToPta}
            onBackToHome={handleNavigateToHome}
          />
        ) : currentView === 'pta-tax' ? (
          <PtaTaxPage
            initialPhone={ptaTargetPhone}
            onSelectPhone={handleSelectPhone}
            onBackToHome={handleNavigateToHome}
          />
        ) : currentView === 'brand' && selectedBrand ? (
          <BrandPage
            brandName={selectedBrand}
            onBackToHome={handleNavigateToHome}
            onSelectPhone={handleSelectPhone}
            onToggleCompare={handleToggleCompare}
            comparedPhoneIds={comparedPhones.map((p) => p.id)}
          />
        ) : (
          /* HOME VIEW */
          <Home
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            onResetFilters={handleResetFilters}
            onSelectPhone={handleSelectPhone}
            onToggleCompare={handleToggleCompare}
            comparedPhoneIds={comparedPhones.map((p) => p.id)}
          />
        )}
      </main>

      {/* Floating Compare Dock on Home/Brand views when devices are selected */}
      {(currentView === 'home' || currentView === 'brand') && comparedPhones.length > 0 && (
        <aside 
          id="floating-compare-bar"
          aria-label="Smartphone Comparison Dock"
          className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 bg-white/95 dark:bg-zinc-900/90 backdrop-blur-2xl border border-gray-200 dark:border-white/10 shadow-2xl dark:shadow-black/80 rounded-2xl p-2.5 sm:p-3 px-3 sm:px-4 flex items-center gap-2 sm:gap-3.5 animate-in slide-in-from-bottom-6 duration-200 max-w-[96vw] sm:max-w-fit relative"
        >
          {/* Absolute Top-Right Dismiss Button */}
          <button
            id="floating-dismiss-compare-btn"
            onClick={handleClearAllCompared}
            aria-label="Dismiss and clear all compared smartphones"
            title="Clear and close comparison dock"
            className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-white dark:bg-zinc-800 hover:bg-rose-50 dark:hover:bg-rose-950/50 text-gray-400 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 rounded-full border border-gray-300 dark:border-white/15 shadow-md flex items-center justify-center transition-all z-50 focus:outline-none"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-xs border border-emerald-200 dark:border-emerald-800/60 flex-shrink-0">
              <Scale className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xs font-bold text-gray-900 dark:text-white">
                {comparedPhones.length} of 2 Devices
              </div>
              <div className="text-[10px] text-gray-500 dark:text-zinc-400">1v1 Comparison</div>
            </div>
          </div>

          {/* Mini Phone Avatars */}
          <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
            {comparedPhones.map((phone) => (
              <div
                key={phone.id}
                className="relative group bg-gray-50 dark:bg-white/10 rounded-xl p-1 border border-gray-200 dark:border-white/10 flex-shrink-0"
              >
                <img
                  src={phone.image}
                  alt={phone.name}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => handleRemoveComparedPhone(phone.id)}
                  aria-label={`Remove ${phone.name} from comparison`}
                  className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-rose-500 text-white rounded-full flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-2.5 h-2.5" />
                </button>
              </div>
            ))}
          </div>

          <button
            id="floating-open-compare-page-btn"
            onClick={handleNavigateToCompare}
            className="px-3.5 sm:px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs flex items-center gap-1.5 whitespace-nowrap flex-shrink-0"
          >
            <span>Compare ({comparedPhones.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </aside>
      )}

      {/* 3. Footer */}
      <Footer
        onNavigateToPta={() => handleNavigateToPta()}
        onNavigateToCompare={handleNavigateToCompare}
        onSelectBrand={handleSelectBrand}
      />

    </div>
  );
}
