import React from 'react';
import { TrendingUp, ShieldCheck, DollarSign, RefreshCw } from 'lucide-react';
import { useExchangeRate } from '../hooks/useExchangeRate';

export const LiveMarketStats: React.FC = () => {
  const { liveRate } = useExchangeRate();

  return (
    <section id="live-market-stats" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 mb-4 sm:mb-8">
      {/* Responsive Grid: 1 column on mobile (grid-cols-1), 2 on tablets (sm:grid-cols-2), 4 on desktop (lg:grid-cols-4) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Stat 1: USD/PKR Exchange */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs flex items-center gap-4 hover:border-emerald-200 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0 border border-emerald-100">
            <DollarSign className="w-6 h-6" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Interbank Rate</div>
            <div className="text-base sm:text-lg font-bold text-gray-900 font-mono tracking-tight">1 USD = ₨ {liveRate.toFixed(2)}</div>
            <div className="text-xs text-emerald-700 font-semibold flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Live Market Rate</span>
            </div>
          </div>
        </div>

        {/* Stat 2: PTA Tax Rates */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs flex items-center gap-4 hover:border-emerald-200 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0 border border-emerald-100">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">PTA FBR Duty 2026</div>
            <div className="text-base sm:text-lg font-bold text-gray-900 font-mono tracking-tight">DIRBS Verified</div>
            <div className="text-xs text-emerald-700 font-medium mt-0.5">Passport & CNIC Slabs</div>
          </div>
        </div>

        {/* Stat 3: Top Trending Phone in Pakistan */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs flex items-center gap-4 hover:border-teal-200 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0 border border-teal-100">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">#1 Trending in PK</div>
            <div className="text-base sm:text-lg font-bold text-gray-900 truncate">iPhone 16 Pro Max</div>
            <div className="text-xs text-teal-700 font-semibold mt-0.5">18.4k searches today</div>
          </div>
        </div>

        {/* Stat 4: Market Update timestamp */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs flex items-center gap-4 hover:border-amber-200 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 flex-shrink-0 border border-amber-100">
            <RefreshCw className="w-6 h-6" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Retail Sync</div>
            <div className="text-base sm:text-lg font-bold text-gray-900 font-mono tracking-tight">Live Rates</div>
            <div className="text-xs text-emerald-700 font-semibold mt-0.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Updated 5 mins ago</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
