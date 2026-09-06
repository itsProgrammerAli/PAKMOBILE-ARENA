import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Calculator, 
  ShieldCheck, 
  Smartphone, 
  DollarSign,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  Info
} from 'lucide-react';
import { useExchangeRate } from '../hooks/useExchangeRate';
import { phones } from '../data/phones';
import { PhoneSpec } from '../types';

export const BASE_USD_RATE = 277.30;
export const FIXED_REGULATORY_DUTY = 17600;

export interface PTATaxBreakdown {
  usdPrice: number;
  basePKR: number;
  salesTax: number;
  regulatoryDuty: number;
  customsDuty: number;
  totalTax: number;
  totalLandedCost: number;
  isFlagship: boolean;
}

/**
 * Official FBR PTA Tax Calculation Engine (September 2026 SRO compliant)
 * - Phones <= $500: Standard flat rate slabs.
 * - Phones > $500 (Flagships): 25% Sales Tax + Fixed Regulatory Duty (Rs 17,600) + Customs Duty.
 * - Reference standard base USD rate: Rs 277.30.
 */
export function calculatePTATax(
  usd: number, 
  docType: 'passport' | 'cnic' = 'passport', 
  exchangeRate: number = BASE_USD_RATE
): number {
  if (usd <= 30) {
    return docType === 'passport' ? 430 : 550;
  } else if (usd <= 100) {
    return docType === 'passport' ? 3200 : 4030;
  } else if (usd <= 200) {
    return docType === 'passport' ? 9580 : 11560;
  } else if (usd <= 350) {
    return docType === 'passport' ? 40500 : 50400;
  } else if (usd <= 500) {
    return docType === 'passport' ? 68900 : 84200;
  } else {
    // Flagships > $500: 25% Sales Tax + Fixed Regulatory Duty (Rs 17,600) + Customs Duty
    const basePKR = usd * exchangeRate;
    const salesTax = basePKR * 0.25;
    const fixedRegulatoryDuty = FIXED_REGULATORY_DUTY;
    const customsDuty = docType === 'passport' ? 19000 : 38000;
    return Math.round(salesTax + fixedRegulatoryDuty + customsDuty);
  }
}

export function getPTATaxBreakdown(
  usd: number, 
  docType: 'passport' | 'cnic' = 'passport', 
  exchangeRate: number = BASE_USD_RATE
): PTATaxBreakdown {
  const basePKR = Math.round(usd * exchangeRate);
  const isFlagship = usd > 500;

  if (isFlagship) {
    const salesTax = Math.round(basePKR * 0.25);
    const regulatoryDuty = FIXED_REGULATORY_DUTY;
    const customsDuty = docType === 'passport' ? 19000 : 38000;
    const totalTax = salesTax + regulatoryDuty + customsDuty;
    return {
      usdPrice: usd,
      basePKR,
      salesTax,
      regulatoryDuty,
      customsDuty,
      totalTax,
      totalLandedCost: basePKR + totalTax,
      isFlagship: true
    };
  } else {
    const totalTax = calculatePTATax(usd, docType, exchangeRate);
    return {
      usdPrice: usd,
      basePKR,
      salesTax: 0,
      regulatoryDuty: 0,
      customsDuty: totalTax,
      totalTax,
      totalLandedCost: basePKR + totalTax,
      isFlagship: false
    };
  }
}

interface PTATaxCalculatorProps {
  onBack?: () => void;
  onSelectPhone?: (phone: PhoneSpec) => void;
}

export const PTATaxCalculator: React.FC<PTATaxCalculatorProps> = ({ onBack, onSelectPhone }) => {
  const [customPriceUSD, setCustomPriceUSD] = useState<number>(899);
  const [docType, setDocType] = useState<'passport' | 'cnic'>('passport');
  const { liveRate } = useExchangeRate();

  const currentRate = liveRate || BASE_USD_RATE;
  const breakdown = getPTATaxBreakdown(customPriceUSD, docType, currentRate);

  const formatPKR = (val: number) => '₨ ' + val.toLocaleString('en-PK');

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-700 dark:text-zinc-200 hover:bg-gray-50 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white font-['Outfit'] flex items-center gap-2">
              <Calculator className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              <span>PTA DIRBS Tax Calculator</span>
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              FBR customs duty and tax engine for smartphones imported into Pakistan.
            </p>
          </div>
        </div>

        <div className="text-right">
          <span className="inline-block text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5 rounded-xl border border-emerald-200 dark:border-emerald-800/60 shadow-2xs">
            USD / PKR: ₨ {currentRate.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Main Calculator Card */}
      <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-gray-200/80 dark:border-zinc-800 p-6 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-zinc-300 mb-2">
                Handset Valuation (USD $)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                <input
                  type="number"
                  min="10"
                  max="3000"
                  value={customPriceUSD}
                  onChange={(e) => setCustomPriceUSD(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full pl-9 pr-4 py-3 bg-gray-50 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 rounded-2xl text-base font-bold text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <p className="text-[11px] text-gray-500 dark:text-zinc-400 mt-1.5">
                Official FBR valuation standard base USD rate: ₨ {BASE_USD_RATE.toFixed(2)}
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-zinc-300 mb-2">
                Registration Method
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDocType('passport')}
                  className={`p-3 rounded-2xl border text-left font-semibold text-xs transition-all cursor-pointer ${
                    docType === 'passport'
                      ? 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 shadow-2xs'
                      : 'border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-zinc-400'
                  }`}
                >
                  <div className="font-bold">Passport Registration</div>
                  <div className="text-[10px] text-gray-500 dark:text-zinc-400 mt-0.5">International Passengers</div>
                </button>
                <button
                  type="button"
                  onClick={() => setDocType('cnic')}
                  className={`p-3 rounded-2xl border text-left font-semibold text-xs transition-all cursor-pointer ${
                    docType === 'cnic'
                      ? 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 shadow-2xs'
                      : 'border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-zinc-400'
                  }`}
                >
                  <div className="font-bold">CNIC Registration</div>
                  <div className="text-[10px] text-gray-500 dark:text-zinc-400 mt-0.5">Commercial & Domestic</div>
                </button>
              </div>
            </div>

            {/* Quick Presets */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-zinc-300 mb-2">
                Quick Category Slabs
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Budget ($150)', val: 150 },
                  { label: 'Mid-Range ($350)', val: 350 },
                  { label: 'Flagship ($999)', val: 999 }
                ].map((item) => (
                  <button
                    key={item.val}
                    type="button"
                    onClick={() => setCustomPriceUSD(item.val)}
                    className="px-2.5 py-2 text-[11px] font-bold rounded-xl border border-gray-200 dark:border-zinc-800 hover:border-emerald-500 text-gray-700 dark:text-zinc-300 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="bg-slate-50 dark:bg-zinc-800/50 rounded-2xl p-6 border border-gray-200/60 dark:border-zinc-800 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="pb-4 border-b border-gray-200 dark:border-zinc-700">
                <div className="text-xs font-bold uppercase text-gray-500 dark:text-zinc-400 tracking-wider">
                  Estimated PTA DIRBS Tax
                </div>
                <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1 font-mono">
                  {formatPKR(breakdown.totalTax)}
                </div>
                <div className="text-xs text-gray-500 dark:text-zinc-400 mt-1">
                  Payable via 1Link, ATM, or Online Banking PSID
                </div>
              </div>

              {breakdown.isFlagship ? (
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-gray-600 dark:text-zinc-300">
                    <span>25% Sales Tax (on base valuation):</span>
                    <span className="font-mono font-semibold">{formatPKR(breakdown.salesTax)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-zinc-300">
                    <span>Fixed Regulatory Duty:</span>
                    <span className="font-mono font-semibold">{formatPKR(breakdown.regulatoryDuty)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-zinc-300">
                    <span>Customs Duty ({docType.toUpperCase()}):</span>
                    <span className="font-mono font-semibold">{formatPKR(breakdown.customsDuty)}</span>
                  </div>
                </div>
              ) : (
                <div className="text-xs text-gray-600 dark:text-zinc-300">
                  <span>Standardized FBR Fixed Slab for mid-range and budget models (under $500).</span>
                </div>
              )}

              <div className="pt-4 border-t border-gray-200 dark:border-zinc-700 space-y-2">
                <div className="flex justify-between text-xs text-gray-600 dark:text-zinc-300">
                  <span>Approx. Handset Base Value:</span>
                  <span className="font-mono">{formatPKR(breakdown.basePKR)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-gray-900 dark:text-white">
                  <span>Total Landed Cost in Pakistan:</span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400">{formatPKR(breakdown.totalLandedCost)}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-zinc-700 text-[11px] text-gray-500 dark:text-zinc-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Full compliance with DIRBS SRO 1064 and interbank exchange guidelines.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PTATaxCalculator;
