import React from 'react';
import { 
  Scale, 
  Eye, 
  Check, 
  ShieldCheck, 
  Cpu, 
  Camera, 
  Battery, 
  Star 
} from 'lucide-react';
import { PhoneSpec } from '../types';
import { usePhoneReviewStats } from '../hooks/usePhoneReviewStats';

interface PhoneCardProps {
  phone: PhoneSpec;
  onSelect: (phone: PhoneSpec) => void;
  onToggleCompare: (phone: PhoneSpec) => void;
  isCompared: boolean;
}

export const PhoneCard: React.FC<PhoneCardProps> = ({
  phone,
  onSelect,
  onToggleCompare,
  isCompared,
}) => {
  const { ratingDisplay, totalReviews, hasReviews } = usePhoneReviewStats(phone);

  const formatPKR = (val: number) => {
    return '₨ ' + val.toLocaleString('en-PK');
  };

  return (
    <div 
      id={`phone-card-${phone.id}`}
      className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-2xs hover:shadow-lg dark:hover:shadow-emerald-950/30 hover:border-emerald-300 dark:hover:border-emerald-500/50 transition-all duration-300 overflow-hidden scroll-mt-24"
    >
      {/* Top Tag Badges */}
      <div className="absolute top-2 left-2 right-2 sm:top-3 sm:left-3 sm:right-3 z-10 flex items-center justify-between pointer-events-none gap-1">
        <span className="px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-md sm:rounded-lg bg-white/95 dark:bg-zinc-900/90 backdrop-blur-md text-gray-700 dark:text-zinc-200 border border-gray-200 dark:border-white/10 shadow-2xs truncate">
          {phone.brand}
        </span>

        {/* PTA Status Badge */}
        <span className={`px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-md sm:rounded-lg backdrop-blur-md border flex items-center gap-0.5 sm:gap-1 shadow-2xs flex-shrink-0 ${
          phone.ptaTax.status.includes('Approved')
            ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60'
            : 'bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/60'
        }`}>
          <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          <span>{phone.ptaTax.status.includes('Approved') ? 'PTA' : 'Non-PTA'}</span>
        </span>
      </div>

      {/* Image Preview Container */}
      <div 
        onClick={() => onSelect(phone)}
        className="relative w-full h-32 sm:h-44 bg-gradient-to-b from-gray-50/80 to-emerald-50/20 dark:from-white/[0.02] dark:to-emerald-950/20 p-3 sm:p-4 flex items-center justify-center cursor-pointer overflow-hidden group/img pt-8 sm:pt-10"
      >
        <img 
          src={phone.image} 
          alt={phone.name}
          className="h-24 sm:h-36 max-w-[85%] object-contain mx-auto drop-shadow-sm dark:drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] group-hover/img:scale-105 transition-transform duration-300"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Quick View Hover Overlay (Desktop) */}
        <div className="hidden sm:flex absolute inset-0 bg-emerald-950/10 dark:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 items-center justify-center backdrop-blur-[2px]">
          <span className="px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-900 text-gray-900 dark:text-white text-xs font-bold border border-gray-200 dark:border-white/20 shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
            <Eye className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>View Specs</span>
          </span>
        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between space-y-2.5 sm:space-y-3">
        <div>
          {/* Rating and Release */}
          <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-500 dark:text-zinc-400 mb-1">
            <div className="flex items-center gap-1 font-medium">
              <Star className={`w-3 h-3 ${hasReviews ? 'fill-amber-400 text-amber-400' : 'text-gray-300 dark:text-zinc-600'}`} />
              <span className={hasReviews ? 'text-amber-500 font-bold' : 'text-gray-600 dark:text-zinc-400'}>
                {ratingDisplay}
              </span>
              <span className="text-gray-400 dark:text-zinc-500 font-normal">
                ({totalReviews} {totalReviews === 1 ? 'review' : 'reviews'})
              </span>
            </div>
            <span className="text-[10px] text-gray-400 dark:text-zinc-500 hidden sm:inline">{phone.releaseDate}</span>
          </div>

          {/* Phone Title */}
          <h3 
            onClick={() => onSelect(phone)}
            className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors cursor-pointer line-clamp-1 font-['Outfit']"
            title={phone.name}
          >
            {phone.name}
          </h3>

          {/* Key Specs Pills Grid - Compact */}
          <div className="grid grid-cols-2 gap-1 mt-2 text-[10px] sm:text-[11px] text-gray-600 dark:text-zinc-300">
            <div className="flex items-center gap-1 p-1 rounded bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 truncate">
              <Cpu className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <span className="truncate">{phone.specs.processor.split('(')[0].replace('Qualcomm ', '').replace('MediaTek ', '')}</span>
            </div>
            <div className="flex items-center gap-1 p-1 rounded bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 truncate">
              <Camera className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-teal-600 dark:text-teal-400 flex-shrink-0" />
              <span className="truncate">{phone.specs.mainCamera.split('+')[0].replace('Triple', '').replace('Dual', '')}</span>
            </div>
            <div className="flex items-center gap-1 p-1 rounded bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 truncate col-span-2 sm:col-span-1">
              <Battery className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <span className="truncate">{phone.specs.battery}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 p-1 rounded bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 truncate col-span-1">
              <span className="text-[9px] font-bold text-gray-400 dark:text-zinc-500 uppercase">OS</span>
              <span className="truncate">{phone.specs.os.split('(')[0]}</span>
            </div>
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-2 sm:pt-2.5 border-t border-gray-100 dark:border-white/10 space-y-2">
          <div>
            <div className="flex items-baseline justify-between gap-1">
              <span className="text-xs sm:text-sm md:text-base font-bold text-emerald-600 dark:text-emerald-400 font-mono tracking-tight">
                {formatPKR(phone.pricePKR)}
              </span>
              {phone.officialPricePKR && (
                <span className="text-[10px] text-gray-400 dark:text-zinc-500 line-through truncate">
                  {formatPKR(phone.officialPricePKR)}
                </span>
              )}
            </div>

            {/* Passport Tax Note */}
            <div className="text-[9px] sm:text-[10px] text-gray-500 dark:text-zinc-400 mt-0.5 truncate">
              Tax: <span className="font-mono font-semibold text-gray-700 dark:text-zinc-300">{formatPKR(phone.ptaTax.passportTaxPKR)}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-1.5">
            <button
              id={`compare-btn-${phone.id}`}
              onClick={() => onToggleCompare(phone)}
              className={`py-1.5 px-1.5 sm:px-2 rounded-lg text-[10px] sm:text-xs font-semibold flex items-center justify-center gap-1 transition-all border ${
                isCompared
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700/60'
                  : 'bg-white dark:bg-white/5 text-gray-700 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-white/10 border-gray-200 dark:border-white/10'
              }`}
              title="Compare phone"
            >
              {isCompared ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span className="truncate">Added</span>
                </>
              ) : (
                <>
                  <Scale className="w-3 h-3 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span className="truncate">Compare</span>
                </>
              )}
            </button>

            <button
              id={`view-specs-btn-${phone.id}`}
              onClick={() => onSelect(phone)}
              className="py-1.5 px-1.5 sm:px-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] sm:text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1"
            >
              <span>Specs</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

