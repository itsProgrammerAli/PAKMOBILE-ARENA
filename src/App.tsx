import React, { useState, useEffect, useMemo } from 'react';
import { Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom';
import { FilterCategory, PhoneSpec } from './types';
import { PHONES_DATA, BRANDS } from './data/phones';
import { Navbar, NavbarActiveView } from './components/Navbar';
import { Home } from './pages/Home';
import { BrandPage } from './components/BrandPage';
import { PhoneDetailPage } from './components/PhoneDetailPage';
import { ComparePage } from './components/ComparePage';
import { PtaTaxPage } from './components/PtaTaxPage';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import { Footer } from './components/Footer';
import { Scale, ArrowRight, X, Smartphone } from 'lucide-react';

export type AppView = 'home' | 'brand' | 'phone-detail' | 'compare' | 'pta-tax' | 'news';

// Graceful Phone Detail Route with dynamic parameter lookup and friendly not-found state
interface PhoneDetailRouteProps {
  onNavigateToHome: () => void;
  onSelectBrand: (brand: string) => void;
  onToggleCompare: (phone: PhoneSpec) => void;
  comparedPhones: PhoneSpec[];
  onNavigateToPta: (phone?: PhoneSpec) => void;
  onNavigateToCompare: () => void;
  onSelectPhone: (phone: PhoneSpec) => void;
}

const PhoneDetailRoute: React.FC<PhoneDetailRouteProps> = ({
  onNavigateToHome,
  onSelectBrand,
  onToggleCompare,
  comparedPhones,
  onNavigateToPta,
  onNavigateToCompare,
  onSelectPhone,
}) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const phone = useMemo(() => PHONES_DATA.find((p) => p.id === id), [id]);

  if (!phone) {
    return (
      <div className="min-h-[65vh] flex flex-col items-center justify-center px-4 py-16 text-center">
        <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 flex items-center justify-center mb-4 border border-slate-200 dark:border-zinc-700 shadow-xs">
          <Smartphone className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white font-['Outfit'] mb-2">
          Smartphone Not Found
        </h1>
        <p className="text-sm sm:text-base text-gray-500 dark:text-zinc-400 max-w-md mb-8">
          The requested device specification is not available in our verified Pakistani database.
        </p>
        <button
          id="not-found-back-home-btn"
          onClick={onNavigateToHome}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-xs shadow-emerald-600/20 active:scale-95 cursor-pointer"
        >
          <span>Back to Phone Catalog</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <PhoneDetailPage
      key={phone.id}
      phone={phone}
      onBack={() => navigate('/')}
      onNavigateToHome={onNavigateToHome}
      onSelectBrand={onSelectBrand}
      onToggleCompare={onToggleCompare}
      isCompared={comparedPhones.some((p) => p.id === phone.id)}
      onNavigateToPta={onNavigateToPta}
      onNavigateToCompare={onNavigateToCompare}
      onSelectPhone={onSelectPhone}
    />
  );
};

// Brand Route supporting deep-linked /brand/:brand URLs
const BrandRoute: React.FC<{
  onNavigateToHome: () => void;
  onSelectPhone: (phone: PhoneSpec) => void;
  onToggleCompare: (phone: PhoneSpec) => void;
  comparedPhones: PhoneSpec[];
}> = ({ onNavigateToHome, onSelectPhone, onToggleCompare, comparedPhones }) => {
  const { brand } = useParams<{ brand: string }>();
  const matchedBrand = BRANDS.find(
    (b) => b.slug.toLowerCase() === brand?.toLowerCase() || b.name.toLowerCase() === brand?.toLowerCase()
  );

  if (!matchedBrand) {
    return (
      <div className="min-h-[65vh] flex flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white font-['Outfit'] mb-2">
          Brand Not Found
        </h1>
        <p className="text-sm sm:text-base text-gray-500 dark:text-zinc-400 max-w-md mb-8">
          The requested mobile brand is not recognized in our catalog.
        </p>
        <button
          onClick={onNavigateToHome}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-xs shadow-emerald-600/20 active:scale-95 cursor-pointer"
        >
          <span>Back to Catalog</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <BrandPage
      brandName={matchedBrand.name}
      onBackToHome={onNavigateToHome}
      onSelectPhone={onSelectPhone}
      onToggleCompare={onToggleCompare}
      comparedPhoneIds={comparedPhones.map((p) => p.id)}
    />
  );
};

// Graceful 404 Route
const NotFoundRoute: React.FC<{ onNavigateToHome: () => void }> = ({ onNavigateToHome }) => (
  <div className="min-h-[65vh] flex flex-col items-center justify-center px-4 py-16 text-center">
    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white font-['Outfit'] mb-2">
      Page Not Found
    </h1>
    <p className="text-sm sm:text-base text-gray-500 dark:text-zinc-400 max-w-md mb-8">
      The page you are looking for does not exist or has been moved.
    </p>
    <button
      id="404-back-to-home-btn"
      onClick={onNavigateToHome}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-xs shadow-emerald-600/20 active:scale-95 cursor-pointer"
    >
      <span>Back to Home</span>
      <ArrowRight className="w-4 h-4" />
    </button>
  </div>
);

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Home filtering state preserved across views & back navigation
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  // Scroll & Back Restoration State
  const [lastViewedPhoneId, setLastViewedPhoneId] = useState<string | null>(null);

  // Selected phone pre-fill for PTA page
  const [ptaTargetPhone, setPtaTargetPhone] = useState<PhoneSpec | null>(null);

  // Compared phones list (up to 2)
  const [comparedPhones, setComparedPhones] = useState<PhoneSpec[]>([]);

  // Theme State ('light' | 'dark') - default to 'light' mode on initial visit
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('theme');
        if (saved === 'dark' || saved === 'light') return saved;
      } catch {
        // Fallback if localStorage is inaccessible
      }
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

  // Dynamic canonical synchronization for client-side navigation & SEO
  useEffect(() => {
    try {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      const cleanPath = location.pathname === '/' ? '/' : location.pathname;
      canonicalLink.href = `https://pakmobilearena.online${cleanPath}`;
    } catch {
      // Safe fallback
    }
  }, [location.pathname]);

  // Scroll restoration to last viewed phone card when navigating back to home
  useEffect(() => {
    if (location.pathname === '/' && lastViewedPhoneId) {
      const timer = setTimeout(() => {
        const element = document.getElementById(`phone-card-${lastViewedPhoneId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, lastViewedPhoneId]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Navigation handlers utilizing React Router routes
  const handleNavigateToHome = () => {
    setSelectedBrand(null);
    setActiveFilter('all');
    setSearchQuery('');
    setLastViewedPhoneId(null);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBrand = (brand: string) => {
    setSelectedBrand(brand);
    setActiveFilter('all');
    setSearchQuery('');
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPhone = (phone: PhoneSpec) => {
    setLastViewedPhoneId(phone.id);
    navigate(`/phone/${phone.id}`);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleNavigateToCompare = () => {
    navigate('/compare');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToNews = () => {
    navigate('/news');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToPta = (phone?: PhoneSpec) => {
    if (phone) {
      setPtaTargetPhone(phone);
    }
    navigate('/pta');
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

  // Derive active navigation tab from current location
  const activeNavView: NavbarActiveView = useMemo(() => {
    if (location.pathname.startsWith('/news')) return 'news';
    if (location.pathname === '/compare') return 'compare';
    if (location.pathname === '/pta' || location.pathname === '/pta-tax') return 'pta-tax';
    if (location.pathname.startsWith('/phone/')) return 'phone-detail';
    if (selectedBrand && selectedBrand !== 'all') return 'brand';
    return 'home';
  }, [location.pathname, selectedBrand]);

  const showCompareDock =
    (location.pathname === '/' || location.pathname.startsWith('/brand')) && comparedPhones.length > 0;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 font-sans flex flex-col selection:bg-emerald-100 selection:text-emerald-900 dark:selection:bg-emerald-900/60 dark:selection:text-emerald-200 transition-colors duration-200">
      {/* 1. Header Navbar */}
      <Navbar
        onNavigateToHome={handleNavigateToHome}
        onNavigateToCompare={handleNavigateToCompare}
        onNavigateToPta={() => handleNavigateToPta()}
        onNavigateToNews={handleNavigateToNews}
        onSelectBrand={handleSelectBrand}
        compareCount={comparedPhones.length}
        activeView={activeNavView}
        selectedBrand={selectedBrand}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* 2. Routes & Page Body */}
      <main className="flex-1">
        <Routes>
          {/* News Routes */}
          <Route
            path="/news"
            element={
              <News
                onNavigateToHome={handleNavigateToHome}
                onNavigateToPta={() => handleNavigateToPta()}
                onNavigateToCompare={handleNavigateToCompare}
              />
            }
          />
          <Route
            path="/news/:slug"
            element={
              <NewsDetail
                onNavigateToHome={handleNavigateToHome}
                onNavigateToPta={() => handleNavigateToPta()}
                onNavigateToCompare={handleNavigateToCompare}
              />
            }
          />

          {/* Consistent Phone Detail Route */}
          <Route
            path="/phone/:id"
            element={
              <PhoneDetailRoute
                onNavigateToHome={handleNavigateToHome}
                onSelectBrand={handleSelectBrand}
                onToggleCompare={handleToggleCompare}
                comparedPhones={comparedPhones}
                onNavigateToPta={handleNavigateToPta}
                onNavigateToCompare={handleNavigateToCompare}
                onSelectPhone={handleSelectPhone}
              />
            }
          />

          {/* Compare Route */}
          <Route
            path="/compare"
            element={
              <ComparePage
                comparedPhones={comparedPhones}
                onRemovePhone={handleRemoveComparedPhone}
                onAddPhone={handleAddComparedPhone}
                onSelectPhone={handleSelectPhone}
                onNavigateToPta={handleNavigateToPta}
                onBackToHome={handleNavigateToHome}
              />
            }
          />

          {/* PTA Tax Calculator Routes */}
          <Route
            path="/pta"
            element={
              <PtaTaxPage
                initialPhone={ptaTargetPhone}
                onSelectPhone={handleSelectPhone}
                onBackToHome={handleNavigateToHome}
              />
            }
          />
          <Route
            path="/pta-tax"
            element={
              <PtaTaxPage
                initialPhone={ptaTargetPhone}
                onSelectPhone={handleSelectPhone}
                onBackToHome={handleNavigateToHome}
              />
            }
          />

          {/* Optional Brand Route */}
          <Route
            path="/brand/:brand"
            element={
              <BrandRoute
                onNavigateToHome={handleNavigateToHome}
                onSelectPhone={handleSelectPhone}
                onToggleCompare={handleToggleCompare}
                comparedPhones={comparedPhones}
              />
            }
          />

          {/* Home Catalog Route */}
          <Route
            path="/"
            element={
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
            }
          />

          {/* Graceful 404 Catch-All Route */}
          <Route path="*" element={<NotFoundRoute onNavigateToHome={handleNavigateToHome} />} />
        </Routes>
      </main>

      {/* Floating Compare Dock on Home/Brand views when devices are selected */}
      {showCompareDock && (
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
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80';
                  }}
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
        onNavigateToNews={handleNavigateToNews}
        onSelectBrand={handleSelectBrand}
      />
    </div>
  );
}
