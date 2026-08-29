import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft, 
  Scale, 
  Plus, 
  X, 
  ShieldCheck, 
  Cpu, 
  Camera, 
  Battery, 
  Zap, 
  Eye, 
  TrendingUp,
  Search
} from 'lucide-react';
import { PhoneSpec } from '../types';
import { PHONES_DATA } from '../data/phones';

interface ComparePageProps {
  comparedPhones: PhoneSpec[];
  onRemovePhone: (phoneId: string) => void;
  onAddPhone: (phone: PhoneSpec) => void;
  onSelectPhone: (phone: PhoneSpec) => void;
  onNavigateToPta: (phone?: PhoneSpec) => void;
  onBackToHome: () => void;
}

export const ComparePage: React.FC<ComparePageProps> = ({
  comparedPhones,
  onRemovePhone,
  onAddPhone,
  onSelectPhone,
  onNavigateToPta,
  onBackToHome,
}) => {
  // Empty state search term & dropdown state
  const [emptySearchTerm, setEmptySearchTerm] = useState<string>('');
  const [isEmptySearchOpen, setIsEmptySearchOpen] = useState<boolean>(false);
  const emptySearchRef = useRef<HTMLDivElement>(null);

  // Slot add search term & dropdown state
  const [slotSearchTerm, setSlotSearchTerm] = useState<string>('');
  const [isSlotSearchOpen, setIsSlotSearchOpen] = useState<boolean>(false);
  const slotSearchRef = useRef<HTMLDivElement>(null);

  const formatPKR = (val: number) => {
    return '₨ ' + val.toLocaleString('en-PK');
  };

  const availablePhones = PHONES_DATA.filter(
    (p) => !comparedPhones.some((cp) => cp.id === p.id)
  );

  // Filter available phones for empty state search
  const filteredEmptyPhones = availablePhones.filter((phone) => {
    if (!emptySearchTerm.trim()) return true;
    const q = emptySearchTerm.toLowerCase();
    return (
      phone.name.toLowerCase().includes(q) ||
      phone.brand.toLowerCase().includes(q) ||
      phone.model.toLowerCase().includes(q)
    );
  });

  // Filter available phones for slot search
  const filteredSlotPhones = availablePhones.filter((phone) => {
    if (!slotSearchTerm.trim()) return true;
    const q = slotSearchTerm.toLowerCase();
    return (
      phone.name.toLowerCase().includes(q) ||
      phone.brand.toLowerCase().includes(q) ||
      phone.model.toLowerCase().includes(q)
    );
  });

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        emptySearchRef.current &&
        !emptySearchRef.current.contains(event.target as Node)
      ) {
        setIsEmptySearchOpen(false);
      }
      if (
        slotSearchRef.current &&
        !slotSearchRef.current.contains(event.target as Node)
      ) {
        setIsSlotSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectFromEmptySearch = (phone: PhoneSpec) => {
    onAddPhone(phone);
    setEmptySearchTerm('');
    setIsEmptySearchOpen(false);
  };

  const handleSelectFromSlotSearch = (phone: PhoneSpec) => {
    onAddPhone(phone);
    setSlotSearchTerm('');
    setIsSlotSearchOpen(false);
  };

  const phone1 = comparedPhones[0] || null;
  const phone2 = comparedPhones[1] || null;

  return (
    <div id="compare-page" className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 pb-24 transition-colors duration-200">
      {/* Top Header / Breadcrumb */}
      <div className="bg-white dark:bg-zinc-950/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 relative flex flex-col md:grid md:grid-cols-3 items-center justify-between gap-3">
          {/* Col 1 (Left): Back Button */}
          <div className="flex items-center justify-start w-full md:w-auto">
            {/* Mobile Back Button: Minimal square icon */}
            <button
              id="compare-back-to-home-btn-mobile"
              onClick={onBackToHome}
              className="md:hidden absolute left-4 top-3.5 p-2.5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50/80 dark:bg-zinc-800/80 text-gray-700 dark:text-gray-200 shadow-sm active:scale-95 transition-all cursor-pointer"
              title="Back to Home"
              aria-label="Back to Home"
            >
              <ArrowLeft className="w-4 h-4 text-gray-700 dark:text-zinc-200" />
            </button>

            {/* Desktop Back Button: Full pill */}
            <button
              id="compare-back-to-home-btn-desktop"
              onClick={onBackToHome}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-xs font-semibold text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors flex-shrink-0 cursor-pointer"
              title="Back to Home"
              aria-label="Back to Home"
            >
              <ArrowLeft className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Back to Home</span>
            </button>
          </div>

          {/* Col 2 (Center): Centered Title & Subtitle */}
          <div className="text-center pt-0.5 sm:pt-0 px-8 md:px-0 w-full md:mx-auto">
            <h1 className="text-base sm:text-lg md:text-xl font-extrabold text-gray-900 dark:text-white font-['Outfit'] flex items-center justify-center gap-2">
              <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <span>1v1 Smartphone Comparison</span>
            </h1>
            <p className="text-[11px] sm:text-xs text-gray-500 dark:text-zinc-400 mt-0.5 max-w-md md:max-w-xl mx-auto">
              Side-by-side hardware specifications, Pakistan market pricing, and official PTA tax duties.
            </p>
          </div>

          {/* Col 3 (Right): Device Count Badge */}
          <div className="flex items-center justify-center md:justify-end w-full md:w-auto">
            <span className="text-[11px] sm:text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 sm:py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800/60 shadow-2xs whitespace-nowrap">
              {comparedPhones.length} of 2 Devices Selected
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-8">
        
        {/* ========================================================================= */}
        {/* EMPTY STATE: WHEN NO PHONES ARE SELECTED                                  */}
        {/* ========================================================================= */}
        {comparedPhones.length === 0 ? (
          <div className="p-6 sm:p-14 text-center rounded-3xl bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-2xl max-w-2xl mx-auto my-6 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-100 dark:border-emerald-800/60 shadow-2xs">
              <Scale className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white font-['Outfit'] tracking-tight">
                Select 2 Smartphones to Compare
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-zinc-400 mt-2 max-w-md mx-auto leading-relaxed">
                Choose 2 smartphones from our Pakistani market catalog to evaluate direct 1v1 hardware specifications, camera optics, benchmark processing, and official PTA tax duties.
              </p>
            </div>

            {/* 1. Primary Autocomplete Search & Select Input */}
            <div ref={emptySearchRef} className="relative max-w-lg mx-auto text-left">
              <label htmlFor="compare-empty-search" className="block text-xs font-bold text-gray-700 dark:text-zinc-300 mb-1.5">
                Search & Add First Smartphone:
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-600 dark:text-emerald-400 pointer-events-none" />
                <input
                  id="compare-empty-search"
                  type="text"
                  value={emptySearchTerm}
                  onChange={(e) => {
                    setEmptySearchTerm(e.target.value);
                    setIsEmptySearchOpen(true);
                  }}
                  onFocus={() => setIsEmptySearchOpen(true)}
                  placeholder="Search smartphone (e.g. iPhone 16 Pro, S25 Ultra, Redmi)..."
                  className="w-full pl-11 pr-10 py-3.5 bg-gray-50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 focus:bg-white dark:focus:bg-zinc-900 border border-gray-300 dark:border-white/10 focus:border-emerald-600 dark:focus:border-emerald-500 rounded-2xl text-xs sm:text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus:outline-none shadow-2xs transition-all"
                />
                {emptySearchTerm && (
                  <button
                    onClick={() => {
                      setEmptySearchTerm('');
                      setIsEmptySearchOpen(false);
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-700 dark:text-zinc-400 dark:hover:text-zinc-200 rounded-lg"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Autocomplete Dropdown */}
              {isEmptySearchOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-zinc-900/95 dark:backdrop-blur-2xl rounded-2xl border border-gray-200 dark:border-white/10 shadow-xl max-h-72 overflow-y-auto z-50 divide-y divide-gray-100 dark:divide-white/5 animate-in fade-in slide-in-from-top-2 duration-150">
                  {filteredEmptyPhones.length === 0 ? (
                    <div className="p-4 text-center text-xs text-gray-500 dark:text-zinc-400">
                      No matching smartphones found for "{emptySearchTerm}"
                    </div>
                  ) : (
                    filteredEmptyPhones.map((phone) => (
                      <button
                        key={phone.id}
                        onClick={() => handleSelectFromEmptySearch(phone)}
                        className="w-full p-3 hover:bg-emerald-50/70 dark:hover:bg-white/5 flex items-center justify-between text-left transition-colors group"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={phone.image}
                            alt={phone.name}
                            className="w-10 h-10 object-contain bg-gray-50 dark:bg-white/5 p-1 rounded-lg border border-gray-200 dark:border-white/10 group-hover:scale-105 transition-transform"
                            referrerPolicy="no-referrer"
                          />
                          <div className="min-w-0">
                            <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 truncate">
                              {phone.name}
                            </div>
                            <div className="text-[11px] text-gray-500 dark:text-zinc-400 flex items-center gap-2">
                              <span>{phone.brand}</span>
                              <span>•</span>
                              <span className="font-mono text-emerald-700 dark:text-emerald-400 font-semibold">{formatPKR(phone.pricePKR)}</span>
                            </div>
                          </div>
                        </div>

                        <span className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 group-hover:bg-emerald-600 group-hover:text-white transition-colors flex-shrink-0 ml-2">
                          <Plus className="w-4 h-4" />
                        </span>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* 2. Secondary Quick Add Popular Devices */}
            <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-white/10 max-w-lg mx-auto">
              <div className="text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider text-center">
                Or Quick Add Popular Devices:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PHONES_DATA.slice(0, 4).map((phone) => (
                  <button
                    key={phone.id}
                    onClick={() => onAddPhone(phone)}
                    className="p-3 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:border-emerald-300 dark:hover:border-emerald-700 border border-gray-200 dark:border-white/10 text-xs font-bold text-gray-800 dark:text-zinc-200 flex items-center justify-between transition-all group shadow-2xs"
                  >
                    <span className="truncate group-hover:text-emerald-800 dark:group-hover:text-emerald-300">{phone.name}</span>
                    <Plus className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-5 sm:space-y-8">
            
            {/* ========================================================================= */}
            {/* TOP DEVICE HEADER CARDS: STRICT 2-COLUMN SIDE-BY-SIDE GRID               */}
            {/* ========================================================================= */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              
              {/* Device 1 Card */}
              {phone1 && (
                <div className="relative rounded-2xl bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-gray-200 dark:border-white/10 p-2.5 sm:p-4 shadow-xs dark:shadow-2xl flex flex-col items-center text-center group transition-all">
                  <button
                    onClick={() => onRemovePhone(phone1.id)}
                    className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/50 transition-colors border border-transparent hover:border-rose-200 dark:hover:border-rose-800 z-10 cursor-pointer"
                    title={`Remove ${phone1.name}`}
                    aria-label={`Remove ${phone1.name}`}
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>

                  <div className="w-full h-20 sm:h-28 flex items-center justify-center mb-1.5 sm:mb-2 bg-gray-50 dark:bg-white/5 rounded-xl p-1.5 border border-gray-100 dark:border-white/5">
                    <img 
                      src={phone1.image} 
                      alt={phone1.name} 
                      className="max-h-16 sm:max-h-24 w-auto object-contain drop-shadow-xs group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <span className="px-2 py-0.2 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 mb-0.5">
                    {phone1.brand}
                  </span>

                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-['Outfit'] mb-0.5 line-clamp-1 w-full">
                    {phone1.name}
                  </h3>
                  <p className="text-[10px] text-slate-500 dark:text-zinc-400 mb-1.5 line-clamp-1 w-full">
                    {phone1.model}
                  </p>

                  <div className="w-full py-1 px-2 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/50 mb-2">
                    <div className="text-[9px] text-slate-500 dark:text-zinc-400 font-medium">Estimated PKR</div>
                    <div className="text-xs sm:text-sm font-extrabold text-emerald-700 dark:text-emerald-400 font-mono leading-tight">
                      {formatPKR(phone1.pricePKR)}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 w-full mt-auto">
                    <button
                      onClick={() => onSelectPhone(phone1)}
                      className="py-1.5 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] sm:text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Specs</span>
                    </button>

                    <button
                      onClick={() => onNavigateToPta(phone1)}
                      className="py-1.5 px-2 rounded-lg bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-zinc-300 text-[10px] sm:text-xs font-semibold transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      <span>PTA</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Device 2 Card OR Add Second Smartphone Slot */}
              {phone2 ? (
                <div className="relative rounded-2xl bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-gray-200 dark:border-white/10 p-2.5 sm:p-4 shadow-xs dark:shadow-2xl flex flex-col items-center text-center group transition-all">
                  <button
                    onClick={() => onRemovePhone(phone2.id)}
                    className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/50 transition-colors border border-transparent hover:border-rose-200 dark:hover:border-rose-800 z-10 cursor-pointer"
                    title={`Remove ${phone2.name}`}
                    aria-label={`Remove ${phone2.name}`}
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>

                  <div className="w-full h-20 sm:h-28 flex items-center justify-center mb-1.5 sm:mb-2 bg-gray-50 dark:bg-white/5 rounded-xl p-1.5 border border-gray-100 dark:border-white/5">
                    <img 
                      src={phone2.image} 
                      alt={phone2.name} 
                      className="max-h-16 sm:max-h-24 w-auto object-contain drop-shadow-xs group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <span className="px-2 py-0.2 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 mb-0.5">
                    {phone2.brand}
                  </span>

                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-['Outfit'] mb-0.5 line-clamp-1 w-full">
                    {phone2.name}
                  </h3>
                  <p className="text-[10px] text-slate-500 dark:text-zinc-400 mb-1.5 line-clamp-1 w-full">
                    {phone2.model}
                  </p>

                  <div className="w-full py-1 px-2 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/50 mb-2">
                    <div className="text-[9px] text-slate-500 dark:text-zinc-400 font-medium">Estimated PKR</div>
                    <div className="text-xs sm:text-sm font-extrabold text-emerald-700 dark:text-emerald-400 font-mono leading-tight">
                      {formatPKR(phone2.pricePKR)}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 w-full mt-auto">
                    <button
                      onClick={() => onSelectPhone(phone2)}
                      className="py-1.5 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] sm:text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Specs</span>
                    </button>

                    <button
                      onClick={() => onNavigateToPta(phone2)}
                      className="py-1.5 px-2 rounded-lg bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-zinc-300 text-[10px] sm:text-xs font-semibold transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      <span>PTA</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Searchable Add 2nd Phone Slot */
                <div 
                  ref={slotSearchRef} 
                  className="rounded-2xl border-2 border-dashed border-emerald-300/80 dark:border-emerald-700/80 bg-emerald-50/20 dark:bg-emerald-950/20 p-2.5 sm:p-4 flex flex-col items-center justify-center text-center relative"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-100/70 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-1 shadow-2xs border border-emerald-200 dark:border-emerald-800/60">
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-0.5 font-['Outfit']">
                    Add 2nd Phone
                  </h4>
                  <p className="hidden sm:block text-[10px] text-slate-500 dark:text-zinc-400 mb-2 max-w-xs leading-relaxed">
                    Search and pick any device for direct 1v1 comparison.
                  </p>
                  
                  {/* Search Input for Slot */}
                  <div className="w-full max-w-xs relative text-left mt-0.5">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 pointer-events-none" />
                      <input
                        type="text"
                        value={slotSearchTerm}
                        onChange={(e) => {
                          setSlotSearchTerm(e.target.value);
                          setIsSlotSearchOpen(true);
                        }}
                        onFocus={() => setIsSlotSearchOpen(true)}
                        placeholder="Search 2nd phone..."
                        className="w-full pl-7 pr-6 py-1.5 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-white/10 focus:border-emerald-600 dark:focus:border-emerald-500 rounded-xl text-[11px] font-semibold text-slate-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus:outline-none shadow-2xs transition-all"
                      />
                      {slotSearchTerm && (
                        <button
                          onClick={() => {
                            setSlotSearchTerm('');
                            setIsSlotSearchOpen(false);
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 text-gray-400 hover:text-gray-700 dark:text-zinc-400 dark:hover:text-zinc-200 rounded"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      )}
                    </div>

                    {/* Slot Search Dropdown Menu */}
                    {isSlotSearchOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-zinc-900/95 dark:backdrop-blur-2xl rounded-2xl border border-gray-200 dark:border-white/10 shadow-2xl max-h-60 overflow-y-auto z-50 divide-y divide-gray-100 dark:divide-white/5 animate-in fade-in slide-in-from-top-1 duration-150">
                        {filteredSlotPhones.length === 0 ? (
                          <div className="p-3 text-center text-xs text-gray-500 dark:text-zinc-400">
                            No phones found matching "{slotSearchTerm}"
                          </div>
                        ) : (
                          filteredSlotPhones.map((p) => (
                            <button
                              key={p.id}
                              onClick={() => handleSelectFromSlotSearch(p)}
                              className="w-full p-2 hover:bg-emerald-50 dark:hover:bg-white/5 flex items-center justify-between text-left transition-colors group cursor-pointer"
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <img
                                  src={p.image}
                                  alt={p.name}
                                  className="w-7 h-7 object-contain bg-gray-50 dark:bg-white/5 p-0.5 rounded-lg border border-gray-200 dark:border-white/10"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="min-w-0">
                                  <div className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 truncate">
                                    {p.name}
                                  </div>
                                  <div className="text-[10px] text-slate-500 dark:text-zinc-400 font-mono">
                                    {formatPKR(p.pricePKR)}
                                  </div>
                                </div>
                              </div>
                              <Plus className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 group-hover:scale-110 ml-1.5" />
                            </button>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>

            {/* ========================================================================= */}
            {/* FULL DETAILED 1V1 SIDE-BY-SIDE SPECIFICATION MATRIX                       */}
            {/* ========================================================================= */}
            <div className="space-y-3 sm:space-y-4">
              
              {/* 1. Price & Market Availability in Pakistan */}
              <div className="rounded-2xl bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-xs dark:shadow-2xl overflow-hidden">
                <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-50/80 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 flex items-center justify-center sm:justify-start gap-2">
                  <div className="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-3 h-3" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 font-['Outfit']">
                    Price & Market Status (Pakistan)
                  </h3>
                </div>

                <div className="p-1.5 sm:p-2.5">
                  
                  {/* Estimated Market Price */}
                  <div className="py-2 px-2 border-b border-gray-100 dark:border-white/5">
                    <div className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase text-center py-0.5">
                      Estimated Market Price (PKR)
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-white/10 text-center items-center mt-0.5">
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone1 ? formatPKR(phone1.pricePKR) : '-'}
                      </div>
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone2 ? formatPKR(phone2.pricePKR) : <span className="text-xs text-slate-400 dark:text-slate-500 font-normal italic">-</span>}
                      </div>
                    </div>
                  </div>

                  {/* Official Launch Price */}
                  <div className="py-2 px-2 border-b border-gray-100 dark:border-white/5">
                    <div className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase text-center py-0.5">
                      Official Launch Price
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-white/10 text-center items-center mt-0.5">
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone1 ? (phone1.officialPricePKR ? formatPKR(phone1.officialPricePKR) : 'Market Imported') : '-'}
                      </div>
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone2 ? (phone2.officialPricePKR ? formatPKR(phone2.officialPricePKR) : 'Market Imported') : <span className="text-xs text-slate-400 dark:text-slate-500 font-normal italic">-</span>}
                      </div>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="py-2 px-2 border-b border-gray-100 dark:border-white/5">
                    <div className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase text-center py-0.5">
                      Market Price Range (PKR)
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-white/10 text-center items-center mt-0.5">
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone1 ? `${formatPKR(phone1.marketPriceRangePKR.min)} – ${formatPKR(phone1.marketPriceRangePKR.max)}` : '-'}
                      </div>
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone2 ? `${formatPKR(phone2.marketPriceRangePKR.min)} – ${formatPKR(phone2.marketPriceRangePKR.max)}` : <span className="text-xs text-slate-400 dark:text-slate-500 font-normal italic">-</span>}
                      </div>
                    </div>
                  </div>

                  {/* Release Date */}
                  <div className="py-2 px-2">
                    <div className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase text-center py-0.5">
                      Release Date
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-white/10 text-center items-center mt-0.5">
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone1 ? phone1.releaseDate : '-'}
                      </div>
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone2 ? phone2.releaseDate : <span className="text-xs text-slate-400 dark:text-slate-500 font-normal italic">-</span>}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* 2. PTA DIRBS Customs Duty Breakdown */}
              <div className="rounded-2xl bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-xs dark:shadow-2xl overflow-hidden">
                <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-50/80 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 flex items-center justify-center sm:justify-start gap-2">
                  <div className="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-3 h-3" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 font-['Outfit']">
                    PTA DIRBS Tax Duties (FBR Pakistan 2026)
                  </h3>
                </div>

                <div className="p-1.5 sm:p-2.5">
                  
                  {/* Passport Tax */}
                  <div className="py-2 px-2 border-b border-gray-100 dark:border-white/5">
                    <div className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase text-center py-0.5">
                      Passport Registration Duty
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-white/10 text-center items-center mt-0.5">
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone1 ? formatPKR(phone1.ptaTax.passportTaxPKR) : '-'}
                      </div>
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone2 ? formatPKR(phone2.ptaTax.passportTaxPKR) : <span className="text-xs text-slate-400 dark:text-slate-500 font-normal italic">-</span>}
                      </div>
                    </div>
                  </div>

                  {/* CNIC Tax */}
                  <div className="py-2 px-2 border-b border-gray-100 dark:border-white/5">
                    <div className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase text-center py-0.5">
                      CNIC Registration Duty
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-white/10 text-center items-center mt-0.5">
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone1 ? formatPKR(phone1.ptaTax.cnicTaxPKR) : '-'}
                      </div>
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone2 ? formatPKR(phone2.ptaTax.cnicTaxPKR) : <span className="text-xs text-slate-400 dark:text-slate-500 font-normal italic">-</span>}
                      </div>
                    </div>
                  </div>

                  {/* PTA Status */}
                  <div className="py-2 px-2">
                    <div className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase text-center py-0.5">
                      PTA Approval Status
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-white/10 text-center items-center mt-0.5">
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone1 ? phone1.ptaTax.status : '-'}
                      </div>
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone2 ? phone2.ptaTax.status : <span className="text-xs text-slate-400 dark:text-slate-500 font-normal italic">-</span>}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* 3. Performance & Processing */}
              <div className="rounded-2xl bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-xs dark:shadow-2xl overflow-hidden">
                <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-50/80 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 flex items-center justify-center sm:justify-start gap-2">
                  <div className="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-3 h-3" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 font-['Outfit']">
                    Performance & Processor
                  </h3>
                </div>

                <div className="p-1.5 sm:p-2.5">
                  
                  {/* Chipset */}
                  <div className="py-2 px-2 border-b border-gray-100 dark:border-white/5">
                    <div className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase text-center py-0.5">
                      Chipset / Processor
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-white/10 text-center items-center mt-0.5">
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone1 ? phone1.specs.processor : '-'}
                      </div>
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone2 ? phone2.specs.processor : <span className="text-xs text-slate-400 dark:text-slate-500 font-normal italic">-</span>}
                      </div>
                    </div>
                  </div>

                  {/* RAM */}
                  <div className="py-2 px-2 border-b border-gray-100 dark:border-white/5">
                    <div className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase text-center py-0.5">
                      RAM Memory
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-white/10 text-center items-center mt-0.5">
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone1 ? phone1.specs.ram : '-'}
                      </div>
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone2 ? phone2.specs.ram : <span className="text-xs text-slate-400 dark:text-slate-500 font-normal italic">-</span>}
                      </div>
                    </div>
                  </div>

                  {/* Storage */}
                  <div className="py-2 px-2 border-b border-gray-100 dark:border-white/5">
                    <div className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase text-center py-0.5">
                      Internal Storage
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-white/10 text-center items-center mt-0.5">
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone1 ? phone1.specs.storage : '-'}
                      </div>
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone2 ? phone2.specs.storage : <span className="text-xs text-slate-400 dark:text-slate-500 font-normal italic">-</span>}
                      </div>
                    </div>
                  </div>

                  {/* OS */}
                  <div className="py-2 px-2">
                    <div className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase text-center py-0.5">
                      Operating System
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-white/10 text-center items-center mt-0.5">
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone1 ? phone1.specs.os : '-'}
                      </div>
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone2 ? phone2.specs.os : <span className="text-xs text-slate-400 dark:text-slate-500 font-normal italic">-</span>}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* 4. Display */}
              <div className="rounded-2xl bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-xs dark:shadow-2xl overflow-hidden">
                <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-50/80 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 flex items-center justify-center sm:justify-start gap-2">
                  <div className="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-3 h-3" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 font-['Outfit']">
                    Display & Screen
                  </h3>
                </div>

                <div className="p-1.5 sm:p-2.5">
                  
                  {/* Panel & Size */}
                  <div className="py-2 px-2 border-b border-gray-100 dark:border-white/5">
                    <div className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase text-center py-0.5">
                      Panel Type & Resolution
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-white/10 text-center items-center mt-0.5">
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone1 ? phone1.specs.display : '-'}
                      </div>
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone2 ? phone2.specs.display : <span className="text-xs text-slate-400 dark:text-slate-500 font-normal italic">-</span>}
                      </div>
                    </div>
                  </div>

                  {/* Refresh Rate */}
                  <div className="py-2 px-2">
                    <div className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase text-center py-0.5">
                      Refresh Rate
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-white/10 text-center items-center mt-0.5">
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone1 ? phone1.specs.refreshRate : '-'}
                      </div>
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone2 ? phone2.specs.refreshRate : <span className="text-xs text-slate-400 dark:text-slate-500 font-normal italic">-</span>}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* 5. Cameras */}
              <div className="rounded-2xl bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-xs dark:shadow-2xl overflow-hidden">
                <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-50/80 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 flex items-center justify-center sm:justify-start gap-2">
                  <div className="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Camera className="w-3 h-3" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 font-['Outfit']">
                    Camera Optics
                  </h3>
                </div>

                <div className="p-1.5 sm:p-2.5">
                  
                  {/* Main Camera */}
                  <div className="py-2 px-2 border-b border-gray-100 dark:border-white/5">
                    <div className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase text-center py-0.5">
                      Rear Camera System
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-white/10 text-center items-center mt-0.5">
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone1 ? phone1.specs.mainCamera : '-'}
                      </div>
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone2 ? phone2.specs.mainCamera : <span className="text-xs text-slate-400 dark:text-slate-500 font-normal italic">-</span>}
                      </div>
                    </div>
                  </div>

                  {/* Front Selfie */}
                  <div className="py-2 px-2">
                    <div className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase text-center py-0.5">
                      Front Selfie Camera
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-white/10 text-center items-center mt-0.5">
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone1 ? phone1.specs.selfieCamera : '-'}
                      </div>
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone2 ? phone2.specs.selfieCamera : <span className="text-xs text-slate-400 dark:text-slate-500 font-normal italic">-</span>}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* 6. Battery & Charging */}
              <div className="rounded-2xl bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-xs dark:shadow-2xl overflow-hidden">
                <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-50/80 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 flex items-center justify-center sm:justify-start gap-2">
                  <div className="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Battery className="w-3 h-3" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 font-['Outfit']">
                    Battery & Charging
                  </h3>
                </div>

                <div className="p-1.5 sm:p-2.5">
                  
                  {/* Battery Capacity */}
                  <div className="py-2 px-2 border-b border-gray-100 dark:border-white/5">
                    <div className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase text-center py-0.5">
                      Battery Capacity
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-white/10 text-center items-center mt-0.5">
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone1 ? phone1.specs.battery : '-'}
                      </div>
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone2 ? phone2.specs.battery : <span className="text-xs text-slate-400 dark:text-slate-500 font-normal italic">-</span>}
                      </div>
                    </div>
                  </div>

                  {/* Charging Speed */}
                  <div className="py-2 px-2">
                    <div className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase text-center py-0.5">
                      Charging Speed / Standard
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-white/10 text-center items-center mt-0.5">
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone1 ? phone1.specs.charging : '-'}
                      </div>
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone2 ? phone2.specs.charging : <span className="text-xs text-slate-400 dark:text-slate-500 font-normal italic">-</span>}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* 7. Cellular Network & Connectivity */}
              <div className="rounded-2xl bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-xs dark:shadow-2xl overflow-hidden">
                <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-50/80 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 flex items-center justify-center sm:justify-start gap-2">
                  <div className="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Scale className="w-3 h-3" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 font-['Outfit']">
                    Network & Connectivity
                  </h3>
                </div>

                <div className="p-1.5 sm:p-2.5">
                  <div className="py-2 px-2">
                    <div className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase text-center py-0.5">
                      Cellular Network & Bands
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-white/10 text-center items-center mt-0.5">
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone1 ? phone1.specs.network : '-'}
                      </div>
                      <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 text-center leading-snug px-1.5">
                        {phone2 ? phone2.specs.network : <span className="text-xs text-slate-400 dark:text-slate-500 font-normal italic">-</span>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
