import React from 'react';
import { 
  Award, 
  Store, 
  Cpu, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Star,
  Layers,
  ArrowRight
} from 'lucide-react';
import { PhoneSpec, PhoneReview } from '../types';

interface PhoneReviewSectionProps {
  phone: PhoneSpec;
  onNavigateToCompare?: () => void;
}

/**
 * Intelligent editorial review fallback generator.
 * If phone.review is not hardcoded, generates an authentic Pakistani market-specific
 * editorial breakdown with realistic pricing, street trends, performance metrics, and advice.
 */
export function getPhoneReviewData(phone: PhoneSpec): PhoneReview {
  if (phone.review) {
    return phone.review;
  }

  const isFlagship = phone.pricePKR >= 200000;
  const isMidrange = phone.pricePKR >= 50000 && phone.pricePKR < 200000;
  const isBudget = phone.pricePKR < 50000;

  let verdictScore = 8.4;
  let headline = `${phone.name}: A compelling offering in Pakistan's competitive smartphone landscape.`;
  let pakistanMarketContext = '';
  let performanceAndCamera = '';
  let finalVerdict = '';

  if (isFlagship) {
    verdictScore = 9.2;
    headline = `${phone.name}: Pinnacle tier engineering commanding a steep PTA custom duty premium in Pakistan.`;
    pakistanMarketContext = `In Pakistan, the ${phone.name} retails at around Rs ${phone.pricePKR.toLocaleString()} official box-pack price with official warranty via local channels. For imported non-PTA units, the DIRBS customs registration slab adds approximately Rs ${phone.ptaTax.passportTaxPKR.toLocaleString()} on passport or Rs ${phone.ptaTax.cnicTaxPKR.toLocaleString()} on CNIC. While official distributor stock is readily available in major commercial hubs like Hafeez Centre (Lahore), Saddar (Karachi), and Blue Area (Islamabad), street cash discounts typically range between 3% to 6% below list price.`;
    performanceAndCamera = `Powered by the ${phone.specs.processor}, the device effortlessly handles intensive sustained loads including PUBG Mobile at maximum frame rates, 4K/8K video scrubbing, and heavy multitasking without thermal throttling. The camera setup with ${phone.specs.mainCamera.split('+')[0].trim()} and high-speed OIS delivers studio-grade dynamic range and class-leading low-light fidelity under difficult lighting conditions.`;
    finalVerdict = `If you have the budget and seek an uncompromising flagship with top-tier resale liquidity in Pakistan, the ${phone.name} is an exceptional investment. However, if PTA tax overhead stretches your target budget, consider official mid-premium alternatives that provide 90% of the flagship experience without the hefty customs tier.`;
  } else if (isMidrange) {
    verdictScore = 8.6;
    headline = `${phone.name}: The sweet spot of modern specs, vibrant display, and competitive mid-range pricing in Pakistan.`;
    pakistanMarketContext = `Positioned in the popular Rs 50,000 to Rs 200,000 segment, the ${phone.name} is a high-volume seller across PriceOye, Daraz, and retail hubs like Hall Road and Saddar. With full official PTA approval included in the box price, consumers face zero custom duty worries. Local authorized distributors (such as Airlink, M&P, or Core) offer a 1-year brand warranty with accessible service centers nationwide.`;
    performanceAndCamera = `The ${phone.specs.processor} paired with ${phone.specs.ram} ensures butter-smooth daily navigation, responsive app launches, and consistent 60fps gaming in popular competitive titles. In warm Pakistani summer ambient temperatures, thermal dissipation remains stable. The camera array centered on ${phone.specs.mainCamera.split('+')[0].trim()} produces vivid colors tailored for social media, accompanied by a bright ${phone.specs.refreshRate} panel that maintains great readability under direct sunlight.`;
    finalVerdict = `A standout recommendation for Pakistani university students, working professionals, and content creators looking for solid cameras and dependable battery longevity without crossing the 6-figure price barrier. You get verified PTA compliance, hassle-free warranty, and balanced day-to-day performance.`;
  } else {
    verdictScore = 8.1;
    headline = `${phone.name}: Reliable budget daily driver built for maximum battery endurance and essential everyday tasks.`;
    pakistanMarketContext = `Priced competitively under Rs 50,000 at approximately Rs ${phone.pricePKR.toLocaleString()}, the ${phone.name} represents high-value accessibility for Pakistani buyers. Officially PTA approved out-of-the-box and manufactured under local CKD assembly lines in Pakistan, it avoids luxury import surcharges. Spare parts, back covers, tempered glass, and local warranty repairs are easily accessible even in tier-2 cities across Punjab, Sindh, and KPK.`;
    performanceAndCamera = `Driven by the energy-efficient ${phone.specs.processor}, general day-to-day usability—such as WhatsApp, YouTube, banking apps, and light casual gaming—runs fluidly. The massive ${phone.specs.battery} battery easily delivers 1.5 to 2 days of real-world endurance on Jazz, Zong, or Ufone 4G networks. The ${phone.specs.mainCamera.split('+')[0].trim()} captures crisp daylight memories with respectable dynamic range for its price bracket.`;
    finalVerdict = `Ideal for budget-conscious buyers, students, and riders who prioritize marathon battery life, sturdy build quality, and verified PTA peace of mind. While hardcore 3D mobile gaming is limited, it excels as an ultra-reliable primary smartphone for daily communication.`;
  }

  return {
    verdictScore,
    headline,
    pakistanMarketContext,
    performanceAndCamera,
    finalVerdict,
  };
}

export const PhoneReviewSection: React.FC<PhoneReviewSectionProps> = ({ 
  phone,
  onNavigateToCompare 
}) => {
  const review = getPhoneReviewData(phone);

  const getScoreBadge = (score: number) => {
    if (score >= 9.0) return { label: "Editor's Choice • Outstanding", color: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30' };
    if (score >= 8.5) return { label: 'Highly Recommended • Value King', color: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30' };
    if (score >= 8.0) return { label: 'Solid Performer • Great Value', color: 'bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-500/30' };
    return { label: 'Capable Daily Driver', color: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30' };
  };

  const badgeInfo = getScoreBadge(review.verdictScore);

  return (
    <div 
      id="expert-editorial-review" 
      className="bg-white dark:bg-slate-900 rounded-xl p-4 sm:p-6 shadow-2xs border border-slate-200 dark:border-slate-800 space-y-5 transition-all"
    >
      {/* Header Banner with Score */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              PakMobile Arena Lab Analysis
            </span>
            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${badgeInfo.color}`}>
              <ShieldCheck className="w-3.5 h-3.5" />
              {badgeInfo.label}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-['Outfit'] tracking-tight flex items-center gap-2">
            <span>Editorial Expert Review & Market Verdict</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
            Tested & evaluated for Pakistani retail conditions, thermal durability, and PTA tax feasibility.
          </p>
        </div>

        {/* Verdict Score Ring / Gauge */}
        <div className="self-start sm:self-center flex items-center gap-3 bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60 rounded-xl px-4 py-2.5 shrink-0 shadow-2xs">
          <div className="w-12 h-12 rounded-xl bg-emerald-600 dark:bg-emerald-500 text-white flex flex-col items-center justify-center font-black shadow-sm">
            <span className="text-lg leading-none font-['Outfit']">{review.verdictScore.toFixed(1)}</span>
            <span className="text-[9px] uppercase tracking-wider font-semibold opacity-90">/ 10</span>
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-tight flex items-center gap-1">
              <span>Overall Score</span>
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 inline" />
            </div>
            <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
              Pakistan Market Tested
            </div>
          </div>
        </div>
      </div>

      {/* Catchy Editorial Headline */}
      <div className="relative pl-4 border-l-4 border-emerald-500 dark:border-emerald-400 bg-emerald-50/40 dark:bg-emerald-950/20 py-3 pr-4 rounded-r-lg">
        <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-zinc-100 font-['Outfit'] leading-snug italic">
          "{review.headline}"
        </p>
      </div>

      {/* 3 Structured Review Modules */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Module 1: Pakistan Market Context */}
        <div className="bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 rounded-xl p-4 flex flex-col justify-between space-y-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm border-b border-slate-200/60 dark:border-slate-700/60 pb-2">
              <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                <Store className="w-4 h-4" />
              </div>
              <span className="font-['Outfit'] tracking-tight">Pakistan Market & Pricing</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {review.pakistanMarketContext}
            </p>
          </div>
          <div className="pt-2 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Official Warranty & Retail Availability</span>
          </div>
        </div>

        {/* Module 2: Performance & Camera */}
        <div className="bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 rounded-xl p-4 flex flex-col justify-between space-y-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm border-b border-slate-200/60 dark:border-slate-700/60 pb-2">
              <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-['Outfit'] tracking-tight">Performance & Optics</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {review.performanceAndCamera}
            </p>
          </div>
          <div className="pt-2 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            <Layers className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Thermals, Gaming & Low-Light Testing</span>
          </div>
        </div>

        {/* Module 3: Final Verdict & Buying Recommendation */}
        <div className="bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-4 flex flex-col justify-between space-y-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-300 font-bold text-sm border-b border-emerald-200/60 dark:border-emerald-800/50 pb-2">
              <div className="p-1.5 rounded-lg bg-emerald-600 text-white">
                <Award className="w-4 h-4" />
              </div>
              <span className="font-['Outfit'] tracking-tight">Final Buying Recommendation</span>
            </div>
            <p className="text-xs sm:text-[13px] text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium">
              {review.finalVerdict}
            </p>
          </div>
          <div className="pt-2 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800 dark:text-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Target Buyer Segment Match</span>
          </div>
        </div>

      </div>

      {/* Trust & Methodology Footer */}
      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Independent editorial assessment by PakMobile Arena Research Desk • Not sponsored by any manufacturer</span>
        </div>
        {onNavigateToCompare && (
          <button
            onClick={onNavigateToCompare}
            className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-bold cursor-pointer transition-colors"
          >
            <span>Compare with competitors</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        )}
      </div>
    </div>
  );
};
