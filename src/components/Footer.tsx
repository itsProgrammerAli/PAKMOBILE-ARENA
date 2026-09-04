import React, { useState } from 'react';
import { Smartphone, ShieldCheck, Calculator, Scale, Lock, FileText, Mail, Info, Newspaper } from 'lucide-react';
import { BRANDS } from '../data/phones';
import { LegalModals, LegalModalType } from './LegalModals';
import { useExchangeRate } from '../hooks/useExchangeRate';

interface FooterProps {
  onNavigateToPta: () => void;
  onNavigateToCompare: () => void;
  onNavigateToNews?: () => void;
  onSelectBrand?: (brand: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateToPta,
  onNavigateToCompare,
  onNavigateToNews,
  onSelectBrand,
}) => {
  const [activeLegalModal, setActiveLegalModal] = useState<LegalModalType>(null);
  const { liveRate } = useExchangeRate();

  return (
    <>
      <footer id="main-footer" className="border-t border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-950 text-gray-600 dark:text-zinc-400 text-xs transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 mb-8 md:mb-12">
            
            {/* Col 1: Brand Info */}
            <div className="md:col-span-2 lg:col-span-4 space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-600 shadow-xs">
                  <Smartphone className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-extrabold font-['Outfit'] text-gray-900 dark:text-white">
                  PakMobile <span className="text-emerald-600 dark:text-emerald-500">Arena</span>
                </span>
              </div>

              <p className="text-gray-500 dark:text-zinc-400 leading-relaxed max-w-sm text-xs">
                Pakistan's premier smartphone database, specification comparison engine, and live retail price tracker across Karachi, Lahore, Islamabad, Rawalpindi, and Peshawar.
              </p>

              <div className="flex items-center gap-2 text-xs text-emerald-800 dark:text-emerald-300 font-bold bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1.5 rounded-xl border border-emerald-200 dark:border-emerald-800/50 w-fit">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>Official DIRBS FBR PTA Tax Compliance 2026</span>
              </div>
            </div>

            {/* Links Container: 2-Column Grid on Mobile (< md), Nested Columns on Desktop */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:col-span-2 lg:col-span-5 md:grid-cols-2 lg:grid-cols-5 py-2 md:py-0 border-y md:border-y-0 border-gray-100 dark:border-white/5">
              
              {/* Column 1: Tools & Services */}
              <div className="lg:col-span-3 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white font-['Outfit'] mb-1.5">
                  Tools & Services
                </h4>
                <ul className="space-y-0.5 font-medium">
                  <li>
                    <button 
                      id="footer-pta-tax-calculator-btn"
                      onClick={onNavigateToPta}
                      className="text-xs text-gray-600 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors py-1 flex items-center gap-1.5 cursor-pointer text-left"
                    >
                      <Calculator className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span>PTA Calculator</span>
                    </button>
                  </li>
                  <li>
                    <button 
                      id="footer-smartphone-comparison-btn"
                      onClick={onNavigateToCompare}
                      className="text-xs text-gray-600 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors py-1 flex items-center gap-1.5 cursor-pointer text-left"
                    >
                      <Scale className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span>Comparison</span>
                    </button>
                  </li>
                  {onNavigateToNews && (
                    <li>
                      <button 
                        id="footer-market-news-btn"
                        onClick={onNavigateToNews}
                        className="text-xs text-gray-600 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors py-1 flex items-center gap-1.5 cursor-pointer text-left"
                      >
                        <Newspaper className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <span>Market News & Updates</span>
                      </button>
                    </li>
                  )}
                  <li>
                    <a 
                      href="#hero-quick-filters" 
                      className="text-xs text-gray-600 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors py-1 flex items-center gap-1.5"
                    >
                      <span>🔥</span>
                      <span>Trending Phones</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#hero-quick-filters" 
                      className="text-xs text-gray-600 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors py-1 flex items-center gap-1.5"
                    >
                      <span>💰</span>
                      <span>Budget (&lt; ₨ 80k)</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2: Legal & Support */}
              <div className="lg:col-span-2 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white font-['Outfit'] mb-1.5">
                  Legal & Support
                </h4>
                <ul className="space-y-0.5 font-medium">
                  <li>
                    <button 
                      id="footer-privacy-policy-btn"
                      onClick={() => setActiveLegalModal('privacy')}
                      className="text-xs text-gray-600 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors py-1 flex items-center gap-1.5 cursor-pointer text-left"
                    >
                      <Lock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span>Privacy Policy</span>
                    </button>
                  </li>
                  <li>
                    <button 
                      id="footer-terms-of-service-btn"
                      onClick={() => setActiveLegalModal('terms')}
                      className="text-xs text-gray-600 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors py-1 flex items-center gap-1.5 cursor-pointer text-left"
                    >
                      <FileText className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span>Terms of Service</span>
                    </button>
                  </li>
                  <li>
                    <button 
                      id="footer-contact-us-btn"
                      onClick={() => setActiveLegalModal('contact')}
                      className="text-xs text-gray-600 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors py-1 flex items-center gap-1.5 cursor-pointer text-left"
                    >
                      <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span>Contact Us</span>
                    </button>
                  </li>
                  <li>
                    <button 
                      id="footer-about-us-btn"
                      onClick={() => setActiveLegalModal('about')}
                      className="text-xs text-gray-600 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors py-1 flex items-center gap-1.5 cursor-pointer text-left"
                    >
                      <Info className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span>About Us</span>
                    </button>
                  </li>
                </ul>
              </div>

            </div>

            {/* Col 3: Popular Brands (Horizontal wrapping row) */}
            <div className="md:col-span-2 lg:col-span-3 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white font-['Outfit'] mb-1.5">
                Popular Mobile Brands
              </h4>
              <div className="flex items-center gap-2 flex-wrap py-2">
                {BRANDS.map((b) => (
                  <button
                    key={b.slug}
                    id={`footer-brand-btn-${b.slug}`}
                    onClick={() => {
                      if (onSelectBrand) onSelectBrand(b.name);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className="px-2.5 py-1 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-zinc-300 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors text-[11px] font-medium cursor-pointer"
                  >
                    {b.name}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Immersive Data Feed & Status Bar */}
          <div className="pt-6 sm:pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] font-mono tracking-widest text-gray-500 dark:text-zinc-500 uppercase">
            <span>© 2026 PAKMOBILE ARENA DATABASE</span>
            <div className="flex space-x-6 sm:space-x-8 items-center">
              <span>USD / PKR: {liveRate.toFixed(2)}</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">LIVE MARKET SYNC</span>
              </span>
            </div>
          </div>

        </div>
      </footer>

      {/* Interactive Legal & Policy Modals */}
      <LegalModals
        activeModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </>
  );
};
