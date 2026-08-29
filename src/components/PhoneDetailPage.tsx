import React, { useState, useMemo, useEffect } from 'react';
import { 
  ArrowLeft, 
  Share2, 
  Scale, 
  Check, 
  ShieldCheck, 
  Calculator, 
  Star, 
  CheckCircle2, 
  XCircle, 
  Cpu, 
  Camera, 
  Battery, 
  Smartphone, 
  Wifi, 
  Layers, 
  Zap, 
  CheckCheck,
  Store,
  Compass,
  MessageSquarePlus,
  Send,
  User,
  MapPin,
  Sparkles,
  HardDrive
} from 'lucide-react';
import { PhoneSpec, UserReview } from '../types';
import { PHONES_DATA } from '../data/phones';
import { PhoneCard } from './PhoneCard';

interface PhoneDetailPageProps {
  phone: PhoneSpec;
  onBack: () => void;
  onToggleCompare: (phone: PhoneSpec) => void;
  isCompared: boolean;
  onNavigateToPta: (phone?: PhoneSpec) => void;
  onNavigateToCompare: () => void;
  onSelectPhone?: (phone: PhoneSpec) => void;
}

/**
 * High-fidelity Vector Device Visualizer
 * Provides a pixel-perfect, realistic titanium smartphone illustration that renders 
 * dynamically in any colorway with titanium sheen, camera optics, and S-Pen stylus.
 */
const DeviceVisual: React.FC<{
  phone: PhoneSpec;
  selectedColor: string;
  colorHex: string;
}> = ({ phone, selectedColor, colorHex }) => {
  const isSamsungA54 = phone.id === 'samsung-galaxy-a54-5g' || (phone.brand.toLowerCase() === 'samsung' && !phone.id.includes('ultra'));
  const isSamsungUltra = phone.id.includes('s25-ultra') || phone.id.includes('s24-ultra');
  const isTecno = phone.brand.toLowerCase() === 'tecno' || phone.id.includes('tecno') || phone.id.includes('spark');
  const isApple = phone.brand.toLowerCase() === 'apple' || phone.id.includes('iphone');

  // Derive frame & accent colors based on base color hex
  const baseColor = colorHex || '#475569';

  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <svg
        viewBox="0 0 280 400"
        className="w-full max-h-72 drop-shadow-xl select-none transition-all duration-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`frame-grad-${phone.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="50%" stopColor={baseColor} />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id={`back-grad-${phone.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={baseColor} stopOpacity="0.9" />
            <stop offset="40%" stopColor={baseColor} />
            <stop offset="100%" stopColor={baseColor} stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id={`lens-grad-${phone.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="50%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
          <filter id={`glow-${phone.id}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Device Shadow & Outer Frame */}
        <rect
          x="35"
          y="15"
          width="190"
          height="370"
          rx={isTecno ? "30" : isSamsungA54 ? "24" : "26"}
          fill={`url(#frame-grad-${phone.id})`}
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
          filter={`url(#glow-${phone.id})`}
        />

        {/* Inner Back Plate */}
        <rect
          x="38"
          y="18"
          width="184"
          height="364"
          rx={isTecno ? "28" : isSamsungA54 ? "22" : "23"}
          fill={`url(#back-grad-${phone.id})`}
        />

        {/* Specular Sheen across glass */}
        <path
          d="M 38 18 L 160 18 L 60 382 L 38 382 Z"
          fill="white"
          opacity="0.07"
        />

        {isSamsungA54 ? (
          /* Samsung Galaxy A54 5G Signature Floating Triple Lens Array */
          <g>
            {/* Lens 1 (Top - 50MP Main OIS) */}
            <circle cx="68" cy="55" r="16" fill="#111827" stroke="#cbd5e1" strokeWidth="2.5" />
            <circle cx="68" cy="55" r="12" fill={`url(#lens-grad-${phone.id})`} />
            <circle cx="68" cy="55" r="6" fill="#030712" />
            <circle cx="65" cy="52" r="2.5" fill="#60a5fa" opacity="0.6" />

            {/* Lens 2 (Middle - 12MP Ultrawide) */}
            <circle cx="68" cy="98" r="16" fill="#111827" stroke="#cbd5e1" strokeWidth="2.5" />
            <circle cx="68" cy="98" r="12" fill={`url(#lens-grad-${phone.id})`} />
            <circle cx="68" cy="98" r="6" fill="#030712" />
            <circle cx="65" cy="95" r="2.5" fill="#60a5fa" opacity="0.6" />

            {/* Lens 3 (Bottom - 5MP Macro) */}
            <circle cx="68" cy="141" r="16" fill="#111827" stroke="#cbd5e1" strokeWidth="2.5" />
            <circle cx="68" cy="141" r="12" fill={`url(#lens-grad-${phone.id})`} />
            <circle cx="68" cy="141" r="6" fill="#030712" />
            <circle cx="65" cy="138" r="2.5" fill="#60a5fa" opacity="0.6" />

            {/* Single LED Flash to the right between lens 1 and lens 2 */}
            <circle cx="98" cy="76" r="6.5" fill="#fef08a" stroke="#cbd5e1" strokeWidth="1.5" opacity="0.9" />

            {/* Subtle SAMSUNG Branding */}
            <text
              x="130"
              y="348"
              textAnchor="middle"
              fill="rgba(255,255,255,0.4)"
              fontSize="10"
              fontWeight="bold"
              letterSpacing="3"
            >
              SAMSUNG
            </text>
          </g>
        ) : isSamsungUltra ? (
          /* Samsung Galaxy S25 Ultra Signature Camera Array & S-Pen */
          <g>
            {/* Camera 1 (Top Left - 200MP Main) */}
            <circle cx="70" cy="55" r="19" fill="#18191b" stroke="#94a3b8" strokeWidth="2" />
            <circle cx="70" cy="55" r="14" fill={`url(#lens-grad-${phone.id})`} />
            <circle cx="70" cy="55" r="8" fill="#090d16" />
            <circle cx="67" cy="52" r="3" fill="#60a5fa" opacity="0.6" />

            {/* Camera 2 (Middle Left - 50MP Ultrawide) */}
            <circle cx="70" cy="100" r="19" fill="#18191b" stroke="#94a3b8" strokeWidth="2" />
            <circle cx="70" cy="100" r="14" fill={`url(#lens-grad-${phone.id})`} />
            <circle cx="70" cy="100" r="8" fill="#090d16" />
            <circle cx="67" cy="97" r="3" fill="#60a5fa" opacity="0.6" />

            {/* Camera 3 (Bottom Left - 50MP Periscope) */}
            <circle cx="70" cy="145" r="19" fill="#18191b" stroke="#94a3b8" strokeWidth="2" />
            <circle cx="70" cy="145" r="14" fill={`url(#lens-grad-${phone.id})`} />
            <circle cx="70" cy="145" r="8" fill="#090d16" />
            <circle cx="67" cy="142" r="3" fill="#60a5fa" opacity="0.6" />

            {/* Right Column: Flash */}
            <circle cx="110" cy="55" r="8" fill="#fef08a" stroke="#cbd5e1" strokeWidth="1.5" opacity="0.9" />

            {/* Right Column: Laser AF Sensor */}
            <circle cx="110" cy="90" r="7" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
            <circle cx="110" cy="90" r="3" fill="#ef4444" opacity="0.7" />

            {/* Right Column: 3x Telephoto */}
            <circle cx="110" cy="125" r="13" fill="#18191b" stroke="#94a3b8" strokeWidth="1.5" />
            <circle cx="110" cy="125" r="9" fill={`url(#lens-grad-${phone.id})`} />
            <circle cx="108" cy="123" r="2.5" fill="#60a5fa" opacity="0.6" />

            {/* Subtle SAMSUNG Branding */}
            <text
              x="130"
              y="345"
              textAnchor="middle"
              fill="rgba(255,255,255,0.4)"
              fontSize="10"
              fontWeight="bold"
              letterSpacing="3"
            >
              SAMSUNG
            </text>

            {/* Built-in S-Pen Stylus leaning beside phone */}
            <g transform="translate(235, 120) rotate(6)">
              <rect x="0" y="0" width="8" height="230" rx="4" fill={baseColor} stroke="#cbd5e1" strokeWidth="1" />
              <rect x="1" y="0" width="6" height="12" rx="2" fill="#94a3b8" />
              <rect x="1" y="70" width="6" height="22" rx="2" fill="#1e293b" />
              <path d="M 0 226 L 4 235 L 8 226 Z" fill="#0f172a" />
            </g>
          </g>
        ) : isTecno ? (
          /* Tecno Spark 40 Pro+ 3D Curved Aesthetic with Vertical 3-Ring Island */
          <g>
            {/* 3D Curved Edge Highlights */}
            <path d="M 40 25 Q 36 200 40 375" stroke="rgba(255,255,255,0.3)" strokeWidth="3" fill="none" />
            <path d="M 220 25 Q 224 200 220 375" stroke="rgba(255,255,255,0.15)" strokeWidth="3" fill="none" />

            {/* Vertical Pill Camera Island */}
            <rect 
              x="48" 
              y="32" 
              width="48" 
              height="124" 
              rx="24" 
              fill="rgba(255,255,255,0.15)" 
              stroke="rgba(255,255,255,0.35)" 
              strokeWidth="1.2" 
            />

            {/* Lens 1 (Top - 50MP Main) */}
            <circle cx="72" cy="54" r="16" fill="#111827" stroke="#cbd5e1" strokeWidth="1.5" />
            <circle cx="72" cy="54" r="12" fill={`url(#lens-grad-${phone.id})`} />
            <circle cx="72" cy="54" r="6" fill="#030712" />
            <circle cx="69" cy="51" r="2.5" fill="#38bdf8" opacity="0.7" />

            {/* Lens 2 (Middle - Auxiliary Depth) */}
            <circle cx="72" cy="94" r="16" fill="#111827" stroke="#cbd5e1" strokeWidth="1.5" />
            <circle cx="72" cy="94" r="12" fill={`url(#lens-grad-${phone.id})`} />
            <circle cx="72" cy="94" r="6" fill="#030712" />
            <circle cx="69" cy="91" r="2.5" fill="#38bdf8" opacity="0.7" />

            {/* Lens 3 (Bottom - AI Lens) */}
            <circle cx="72" cy="134" r="16" fill="#111827" stroke="#cbd5e1" strokeWidth="1.5" />
            <circle cx="72" cy="134" r="12" fill={`url(#lens-grad-${phone.id})`} />
            <circle cx="72" cy="134" r="6" fill="#030712" />
            <circle cx="69" cy="131" r="2.5" fill="#38bdf8" opacity="0.7" />

            {/* Quad LED Flash & Sensor */}
            <circle cx="106" cy="54" r="6.5" fill="#fef08a" stroke="#cbd5e1" strokeWidth="1.2" />
            <circle cx="106" cy="54" r="3" fill="#facc15" />

            {/* Micro 50MP text */}
            <text
              x="106"
              y="74"
              textAnchor="middle"
              fill="rgba(255,255,255,0.6)"
              fontSize="6"
              fontWeight="bold"
              letterSpacing="0.5"
            >
              50MP
            </text>
            <text
              x="106"
              y="82"
              textAnchor="middle"
              fill="rgba(255,255,255,0.4)"
              fontSize="5"
              fontWeight="medium"
            >
              AI CAM
            </text>

            {/* Authentic TECNO SPARK Branding */}
            <text
              x="130"
              y="338"
              textAnchor="middle"
              fill="rgba(255,255,255,0.5)"
              fontSize="9"
              fontWeight="bold"
              letterSpacing="2.5"
            >
              TECNO SPARK
            </text>
          </g>
        ) : isApple ? (
          /* Apple iPhone Pro Triangular Island */
          <g>
            <rect x="50" y="35" width="70" height="70" rx="18" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <circle cx="70" cy="53" r="14" fill="#18191b" stroke="#94a3b8" strokeWidth="2" />
            <circle cx="70" cy="87" r="14" fill="#18191b" stroke="#94a3b8" strokeWidth="2" />
            <circle cx="100" cy="70" r="14" fill="#18191b" stroke="#94a3b8" strokeWidth="2" />
            <circle cx="100" cy="48" r="6" fill="#fef08a" stroke="#cbd5e1" strokeWidth="1" />
            <circle cx="100" cy="92" r="5" fill="#0f172a" stroke="#475569" strokeWidth="1" />
          </g>
        ) : (
          /* Generic Flagship Circular / Modern Matrix Island */
          <g>
            <circle cx="130" cy="100" r="45" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
            <circle cx="115" cy="85" r="14" fill="#18191b" stroke="#94a3b8" strokeWidth="2" />
            <circle cx="145" cy="85" r="14" fill="#18191b" stroke="#94a3b8" strokeWidth="2" />
            <circle cx="130" cy="118" r="14" fill="#18191b" stroke="#94a3b8" strokeWidth="2" />
          </g>
        )}
      </svg>
    </div>
  );
};

export const PhoneDetailPage: React.FC<PhoneDetailPageProps> = ({
  phone,
  onBack,
  onToggleCompare,
  isCompared,
  onNavigateToPta,
  onNavigateToCompare,
  onSelectPhone,
}) => {
  const [selectedColor, setSelectedColor] = useState<string>(phone.colors[0] || 'Default');
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);

  // User submitted reviews state
  const [userReviews, setUserReviews] = useState<UserReview[]>(() => {
    const saved = localStorage.getItem(`reviews_${phone.id}`);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });

  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewName, setReviewName] = useState('');
  const [reviewCity, setReviewCity] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // Selected RAM/Storage variant state
  const [selectedVariantId, setSelectedVariantId] = useState<string>(() => {
    return phone.variants && phone.variants.length > 0 ? phone.variants[0].id : '';
  });

  // Reset selected color, variant, and image status when phone changes
  useEffect(() => {
    setSelectedColor(phone.colors[0] || 'Default');
    setImageError(false);
    if (phone.variants && phone.variants.length > 0) {
      setSelectedVariantId(phone.variants[0].id);
    } else {
      setSelectedVariantId('');
    }
    const saved = localStorage.getItem(`reviews_${phone.id}`);
    if (saved) {
      try {
        setUserReviews(JSON.parse(saved));
      } catch {
        setUserReviews([]);
      }
    } else {
      setUserReviews([]);
    }
    setShowReviewForm(false);
    setReviewSubmitted(false);
  }, [phone.id, phone.colors, phone.variants]);

  // Derived current variant and dynamic active pricing/specs
  const currentVariant = useMemo(() => {
    if (!phone.variants || phone.variants.length === 0) return null;
    return phone.variants.find((v) => v.id === selectedVariantId) || phone.variants[0];
  }, [phone.variants, selectedVariantId]);

  const activePricePKR = currentVariant ? currentVariant.pricePKR : phone.pricePKR;
  const activeOfficialPricePKR = currentVariant?.officialPricePKR !== undefined ? currentVariant.officialPricePKR : phone.officialPricePKR;
  const activeMarketPriceRange = currentVariant ? currentVariant.marketPriceRangePKR : phone.marketPriceRangePKR;
  const activeRamSpec = currentVariant?.ram || phone.specs.ram;
  const activeStorageSpec = currentVariant?.storage || phone.specs.storage;

  // Compute live review stats (combines official baseline or real user additions)
  const totalReviewsCount = phone.reviewCount + userReviews.length;
  const currentRating = useMemo(() => {
    if (totalReviewsCount === 0) return 0.0;
    if (phone.reviewCount === 0 && userReviews.length > 0) {
      const sum = userReviews.reduce((acc, r) => acc + r.rating, 0);
      return Number((sum / userReviews.length).toFixed(1));
    }
    if (userReviews.length === 0) return phone.rating;
    const initialSum = phone.rating * phone.reviewCount;
    const userSum = userReviews.reduce((acc, r) => acc + r.rating, 0);
    return Number(((initialSum + userSum) / totalReviewsCount).toFixed(1));
  }, [phone.rating, phone.reviewCount, userReviews, totalReviewsCount]);

  const formatPKR = (val: number) => {
    return '₨ ' + val.toLocaleString('en-PK');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSelectRelated = (targetPhone: PhoneSpec) => {
    if (onSelectPhone) {
      onSelectPhone(targetPhone);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName.trim() || !reviewComment.trim()) return;

    const newRev: UserReview = {
      id: Date.now().toString(),
      userName: reviewName.trim(),
      city: reviewCity.trim() || 'Pakistan',
      rating: reviewRating,
      date: new Date().toLocaleDateString('en-PK', { month: 'short', day: 'numeric', year: 'numeric' }),
      comment: reviewComment.trim(),
    };

    const updated = [newRev, ...userReviews];
    setUserReviews(updated);
    localStorage.setItem(`reviews_${phone.id}`, JSON.stringify(updated));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('phone-review-updated', { detail: { phoneId: phone.id } }));
    }
    setReviewName('');
    setReviewCity('');
    setReviewComment('');
    setReviewSubmitted(true);
    setShowReviewForm(false);
    setTimeout(() => setReviewSubmitted(false), 4000);
  };

  // Active colorway hex code
  const activeColorHex = useMemo(() => {
    return phone.colorHexes?.[selectedColor] || '#475569';
  }, [phone.colorHexes, selectedColor]);

  // Determine active display image based on selected color variant
  const activeImage = useMemo(() => {
    if (phone.colorImages && phone.colorImages[selectedColor]) {
      return phone.colorImages[selectedColor];
    }
    return phone.image;
  }, [phone.colorImages, phone.image, selectedColor]);

  // Filter up to 3 related phones sharing brand OR similar price range (+/- 20%), excluding the active phone
  const relatedPhones = useMemo(() => {
    const minPrice = phone.pricePKR * 0.8;
    const maxPrice = phone.pricePKR * 1.2;

    const otherPhones = PHONES_DATA.filter((p) => p.id !== phone.id);

    // 1. Same brand AND in similar price range
    const sameBrandSimilarPrice = otherPhones.filter(
      (p) => p.brand.toLowerCase() === phone.brand.toLowerCase() && p.pricePKR >= minPrice && p.pricePKR <= maxPrice
    );

    // 2. Same brand (different price range)
    const sameBrand = otherPhones.filter(
      (p) => p.brand.toLowerCase() === phone.brand.toLowerCase() && !sameBrandSimilarPrice.some((x) => x.id === p.id)
    );

    // 3. Different brand but within +/- 20% price band
    const similarPriceOtherBrands = otherPhones.filter(
      (p) => p.brand.toLowerCase() !== phone.brand.toLowerCase() && p.pricePKR >= minPrice && p.pricePKR <= maxPrice
    );

    // 4. Fallback: closest price delta
    const fallbacks = otherPhones
      .filter(
        (p) => 
          !sameBrandSimilarPrice.some((x) => x.id === p.id) &&
          !sameBrand.some((x) => x.id === p.id) &&
          !similarPriceOtherBrands.some((x) => x.id === p.id)
      )
      .sort((a, b) => Math.abs(a.pricePKR - phone.pricePKR) - Math.abs(b.pricePKR - phone.pricePKR));

    const combined = [...sameBrandSimilarPrice, ...similarPriceOtherBrands, ...sameBrand, ...fallbacks];
    return combined.slice(0, 3);
  }, [phone]);

  // Generate dynamic pros & cons based on phone specs
  const getPros = (p: PhoneSpec) => {
    return [
      `Next-gen ${p.specs.processor} delivers ultra-smooth performance and peak energy efficiency`,
      `Flagship ${p.specs.display.split(',')[0]} with ${p.specs.refreshRate} refresh rate and high outdoor visibility`,
      `Advanced optics featuring ${p.specs.mainCamera.split('+')[0].trim()} with exceptional dynamic range`,
      `Long-lasting ${p.specs.battery} battery with rapid ${p.specs.charging.split(',')[0]} support`,
      `Verified PTA DIRBS tax registration status available nationwide across Pakistan`,
    ];
  };

  const getCons = (p: PhoneSpec) => {
    return [
      p.pricePKR > 200000 
        ? `High PTA custom duty slab on passport/CNIC registration for non-official units` 
        : `No official expandable microSD slot for external storage`,
      `Premium retail price reflects prevailing Pakistani market exchange rates`,
      `Fast charging brick may need to be acquired separately depending on retail box pack`,
    ];
  };

  return (
    <div id="phone-detail-page" className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 pb-20 transition-colors duration-200">
      
      {/* Top Breadcrumb & Navigation Bar (Static, Non-Sticky) */}
      <div className="relative w-full bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-white/10 shadow-2xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-3">
          
          <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-zinc-400 min-w-0">
            <button 
              id="back-to-home-btn"
              onClick={onBack}
              className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-emerald-50 dark:hover:bg-white/10 hover:text-emerald-700 dark:hover:text-emerald-400 text-gray-700 dark:text-zinc-200 transition-colors border border-gray-200 dark:border-white/10 inline-flex items-center justify-center flex-shrink-0"
              title="Back"
              aria-label="Back"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="hidden sm:flex items-center space-x-2 text-xs font-medium">
              <span className="text-gray-500 dark:text-zinc-400">{phone.brand}</span>
              <span className="text-gray-300 dark:text-zinc-700">/</span>
              <span className="font-bold text-gray-900 dark:text-white truncate max-w-xs">{phone.name}</span>
            </div>
          </div>

          <div className="flex gap-3 flex-1 sm:flex-initial sm:w-72">
            <button
              id="detail-compare-toggle-btn"
              onClick={() => onToggleCompare(phone)}
              className={`flex-1 h-10 px-3.5 rounded-xl text-xs font-bold inline-flex items-center justify-center gap-2 transition-all shadow-2xs ${
                isCompared
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/60'
                  : 'bg-white dark:bg-white/5 text-gray-700 dark:text-zinc-300 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 hover:text-emerald-700 dark:hover:text-emerald-400'
              }`}
            >
              {isCompared ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span>In Compare</span>
                </>
              ) : (
                <>
                  <Scale className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span>Compare</span>
                </>
              )}
            </button>

            <button
              id="detail-share-btn"
              onClick={handleShare}
              className="flex-1 h-10 px-3.5 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-bold text-gray-700 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-white/10 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors inline-flex items-center justify-center gap-2 shadow-2xs"
            >
              <Share2 className="w-4 h-4 flex-shrink-0" />
              <span>{copied ? 'Copied!' : 'Share'}</span>
            </button>
          </div>

        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 space-y-8 sm:space-y-10">
        
        {/* ========================================================================= */}
        {/* SEQUENCE 1: BASIC INFO, INTERACTIVE IMAGE, PRICING, & PTA TAX            */}
        {/* ========================================================================= */}
        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm dark:shadow-2xl border border-gray-200 dark:border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Dynamic Color-Variant Main Image & Clean Grid Color Picker */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-5">
              
              {/* Product Visual Container with Fallback-Proof Vector Renderer */}
              <div className="relative w-full max-w-sm aspect-square bg-gradient-to-b from-gray-50 to-emerald-50/20 dark:from-white/[0.02] dark:to-emerald-950/20 rounded-3xl p-6 flex items-center justify-center border border-gray-200/80 dark:border-white/10 group overflow-hidden">
                
                {/* Visualizer: renders high-res photo if loaded and valid, or ultra-crisp vector illustration in exact titanium finish */}
                {imageError ? (
                  <DeviceVisual phone={phone} selectedColor={selectedColor} colorHex={activeColorHex} />
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      id="main-product-display-image"
                      key={`${activeImage}-${selectedColor}`}
                      src={activeImage} 
                      alt={`${phone.name} - ${selectedColor}`}
                      className="max-h-72 w-auto object-contain drop-shadow-md dark:drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-all duration-300 animate-in fade-in zoom-in-95"
                      referrerPolicy="no-referrer"
                      onError={() => {
                        setImageError(true);
                      }}
                    />
                  </div>
                )}

                {/* Brand Badge */}
                <span className="absolute top-4 left-4 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-lg bg-white/95 dark:bg-zinc-900/90 text-gray-800 dark:text-zinc-200 shadow-2xs border border-gray-200 dark:border-white/10">
                  {phone.brand}
                </span>

                {/* PTA Verified Badge */}
                <span className="absolute top-4 right-4 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>PTA Verified</span>
                </span>
              </div>

              {/* Colorways Selector: Strict, Clean Uniform Grid Alignment */}
              <div className="w-full space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider">
                    Official Colorways ({phone.colors.length}):
                  </span>
                  <span className="text-xs text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800/50">
                    {selectedColor}
                  </span>
                </div>

                {/* Strict 2-column on mobile, 3-column on tablet/desktop */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full">
                  {phone.colors.map((colorName) => {
                    const isSelected = selectedColor === colorName;
                    const hexCode = phone.colorHexes?.[colorName] || '#475569';

                    return (
                      <button
                        key={colorName}
                        id={`colorway-btn-${colorName.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => {
                          setSelectedColor(colorName);
                          setImageError(false);
                        }}
                        className={`w-full py-2.5 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-start gap-2.5 border text-left truncate ${
                          isSelected
                            ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-300 ring-2 ring-emerald-500/30 shadow-2xs font-bold'
                            : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-700 dark:text-zinc-300 hover:border-gray-300 dark:hover:border-white/20 hover:bg-gray-50 dark:hover:bg-white/10'
                        }`}
                        title={`Select ${colorName}`}
                      >
                        <span 
                          className={`w-3.5 h-3.5 rounded-full border border-black/20 dark:border-white/30 flex-shrink-0 shadow-2xs transition-transform ${isSelected ? 'scale-110 ring-2 ring-emerald-500/50' : ''}`}
                          style={{ backgroundColor: hexCode }}
                        />
                        <span className="truncate flex-1 font-medium">{colorName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Phone Information, Clean Pricing Block, and PTA Tax */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex flex-wrap items-center gap-2.5 text-xs text-gray-500 dark:text-zinc-400 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800/60">
                    Model: {phone.model}
                  </span>

                  {/* Clean Real Ratings Logic */}
                  <div className="flex items-center gap-1.5 font-bold">
                    <div className="flex items-center">
                      <Star className={`w-4 h-4 ${currentRating > 0 ? 'fill-amber-400 text-amber-400' : 'text-gray-300 dark:text-zinc-600'}`} />
                    </div>
                    <span className={currentRating > 0 ? 'text-amber-600 dark:text-amber-400' : 'text-gray-700 dark:text-zinc-300'}>
                      {currentRating.toFixed(1)}
                    </span>
                    <span className="text-gray-400 dark:text-zinc-500 font-normal">
                      ({totalReviewsCount} {totalReviewsCount === 1 ? 'review' : 'reviews'})
                    </span>
                  </div>

                  <span className="text-gray-300 dark:text-zinc-700">•</span>
                  <span>Released: {phone.releaseDate}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight font-['Outfit']">
                  {phone.name}
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-400 mt-1">
                  1-Year Official Local Brand Warranty / PTA Approved Market Edition
                </p>
              </div>

              {/* ========================================================================= */}
              {/* CLEAN PRICING CARD LAYOUT: COMPACT VARIANTS & STRUCTURED METRICS          */}
              {/* ========================================================================= */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-2xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider block mb-1">
                      Estimated Market Price (PKR)
                    </span>
                    <div className="flex items-baseline gap-2.5 flex-wrap">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-700 dark:text-emerald-400 font-mono tracking-tight whitespace-nowrap">
                        {formatPKR(activePricePKR)}
                      </span>
                      {activeOfficialPricePKR && (
                        <span className="text-xs sm:text-sm text-gray-400 dark:text-zinc-500 font-mono line-through whitespace-nowrap">
                          Market Avg: {formatPKR(activeOfficialPricePKR)}
                        </span>
                      )}
                    </div>
                  </div>

                  <span className="self-start sm:self-auto px-3.5 py-1.5 text-xs font-bold rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 whitespace-nowrap inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>In Stock Across Pakistan</span>
                  </span>
                </div>

                {/* Compact PriceOye-Style Variant Selector */}
                {phone.variants && phone.variants.length > 0 && (
                  <div className="pt-3 border-t border-gray-200/80 dark:border-white/10 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-gray-500 dark:text-zinc-400 mr-1">
                      Variant:
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {phone.variants.map((variant) => {
                        const isSelected = variant.id === (currentVariant?.id || phone.variants![0].id);
                        return (
                          <button
                            key={variant.id}
                            id={`variant-pill-${variant.id}`}
                            onClick={() => setSelectedVariantId(variant.id)}
                            className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all ${
                              isSelected
                                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm font-semibold'
                                : 'bg-white dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 border-gray-200 dark:border-zinc-700 hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-zinc-700/50'
                            }`}
                            title={`Select ${variant.name} variant`}
                          >
                            {variant.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Retail Range Row with Horizontal Divider */}
                <div className="flex items-center justify-between text-xs text-gray-600 dark:text-zinc-300 pt-3 border-t border-gray-200/80 dark:border-white/10">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Store className="w-3.5 h-3.5 text-gray-400 dark:text-zinc-500 flex-shrink-0" />
                    <span>Retail Market Range:</span>
                  </span>
                  <span className="font-bold font-mono text-gray-900 dark:text-white whitespace-nowrap">
                    {formatPKR(activeMarketPriceRange.min)} – {formatPKR(activeMarketPriceRange.max)}
                  </span>
                </div>
              </div>

              {/* PTA Tax Official Breakout Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50/90 via-teal-50/50 to-gray-50 dark:from-emerald-950/40 dark:via-teal-950/20 dark:to-zinc-900 border border-emerald-200 dark:border-emerald-800/50 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      Official PTA Passport & CNIC Tax Slabs
                    </span>
                  </div>
                  <button 
                    onClick={() => onNavigateToPta(phone)}
                    className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 underline underline-offset-2 flex items-center gap-1 flex-shrink-0"
                  >
                    <Calculator className="w-3.5 h-3.5" />
                    <span>Open Tax Slabs</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 bg-white dark:bg-zinc-900/90 rounded-xl border border-emerald-100 dark:border-white/10 shadow-2xs">
                    <span className="text-[11px] font-medium text-gray-500 dark:text-zinc-400 block">PTA Passport Tax:</span>
                    <span className="text-lg font-extrabold font-mono text-emerald-700 dark:text-emerald-400 block mt-0.5">
                      {formatPKR(phone.ptaTax.passportTaxPKR)}
                    </span>
                    <span className="text-[10px] text-gray-400 dark:text-zinc-500">Within 60 days of arrival in Pakistan</span>
                  </div>

                  <div className="p-3 bg-white dark:bg-zinc-900/90 rounded-xl border border-emerald-100 dark:border-white/10 shadow-2xs">
                    <span className="text-[11px] font-medium text-gray-500 dark:text-zinc-400 block">PTA CNIC Tax (ID Card):</span>
                    <span className="text-lg font-bold font-mono text-gray-900 dark:text-white block mt-0.5">
                      {formatPKR(phone.ptaTax.cnicTaxPKR)}
                    </span>
                    <span className="text-[10px] text-gray-400 dark:text-zinc-500">Standard rate for non-travelers</span>
                  </div>
                </div>

                <p className="text-[11px] text-gray-500 dark:text-zinc-400 leading-relaxed">
                  * Note: Official boxed smartphones sold through authorized local distributors include all PTA customs duties & taxes pre-paid in the retail price.
                </p>
              </div>

              {/* Quick Specs Highlight Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                <div className="p-2.5 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <div className="truncate">
                    <span className="text-[10px] text-gray-400 dark:text-zinc-500 block uppercase">Processor</span>
                    <span className="text-xs font-bold text-gray-800 dark:text-zinc-200 truncate block">{phone.specs.processor.split('(')[0]}</span>
                  </div>
                </div>

                <div className="p-2.5 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 flex items-center gap-2">
                  <Camera className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                  <div className="truncate">
                    <span className="text-[10px] text-gray-400 dark:text-zinc-500 block uppercase">Camera</span>
                    <span className="text-xs font-bold text-gray-800 dark:text-zinc-200 truncate block">{phone.specs.mainCamera.split('+')[0]}</span>
                  </div>
                </div>

                <div className="p-2.5 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 flex items-center gap-2">
                  <Battery className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <div className="truncate">
                    <span className="text-[10px] text-gray-400 dark:text-zinc-500 block uppercase">Battery</span>
                    <span className="text-xs font-bold text-gray-800 dark:text-zinc-200 truncate block">{phone.specs.battery}</span>
                  </div>
                </div>

                <div className="p-2.5 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                  <div className="truncate">
                    <span className="text-[10px] text-gray-400 dark:text-zinc-500 block uppercase">Display</span>
                    <span className="text-xs font-bold text-gray-800 dark:text-zinc-200 truncate block">{phone.specs.refreshRate}</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* SEQUENCE 2: FULL TECHNICAL SPECIFICATIONS (STRICT 12-COLUMN HORIZONTAL)   */}
        {/* ========================================================================= */}
        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm dark:shadow-2xl border border-gray-200 dark:border-white/10 space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white font-['Outfit'] tracking-tight">
                Full Technical Specifications
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-400">
              Verified hardware and software specifications for the official {phone.name} Pakistani market edition.
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Table 1: Build & Design */}
            <div className="border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xs">
              <div className="bg-gray-50 dark:bg-white/5 px-4 sm:px-6 py-3.5 border-b border-gray-200 dark:border-white/10 flex items-center justify-between">
                <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Build & Design</span>
                </span>
                <span className="text-xs text-gray-500 dark:text-zinc-400 font-medium">Hardware Casing</span>
              </div>
              <div className="px-4 sm:px-6 divide-y divide-gray-100 dark:divide-white/5">
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">Dimensions & Weight</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">
                    {phone.id === 'samsung-galaxy-s24-ultra'
                      ? '162.3 x 79.0 x 8.6 mm, ~232 grams (Flat titanium frame & Grade 2 Titanium construction)'
                      : phone.id === 'samsung-galaxy-a55-5g'
                      ? '161.1 x 77.4 x 8.2 mm, ~213 grams (Brushed aluminum metal frame with ergonomic Key Island)'
                      : phone.id === 'samsung-galaxy-a54-5g'
                      ? '158.2 x 76.7 x 8.2 mm, ~202 grams (Ergonomic glass sandwich with rounded corners)'
                      : phone.id === 'tecno-spark-40-pro-plus'
                      ? '164.0 x 75.3 x 6.49 mm (Ultra-slim 6.49mm profile), ~160 grams (Featherweight curved grip)'
                      : '163.0 x 76.5 x 8.25 mm, ~220 grams (ergonomic grip)'}
                  </div>
                </div>
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">Build Materials</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">
                    {phone.id === 'samsung-galaxy-s24-ultra'
                      ? 'Corning Gorilla Armor anti-reflective front glass, Gorilla Glass back, Grade 2 Titanium frame'
                      : phone.id === 'samsung-galaxy-a55-5g'
                      ? 'Corning Gorilla Glass Victus+ front and back, premium brushed aluminum metal frame'
                      : phone.id === 'samsung-galaxy-a54-5g'
                      ? 'Corning Gorilla Glass 5 front and back, durable polycarbonate matte-finish frame'
                      : phone.id === 'tecno-spark-40-pro-plus'
                      ? 'Corning Gorilla Glass 5 3D curved front, Magic Skin vegan leather / matte glass back, aerospace composite frame'
                      : 'Corning Gorilla Glass Armor front/back, Aerospace Grade Aluminum or Titanium frame'}
                  </div>
                </div>
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">SIM Slot Configuration</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">
                    {phone.id === 'samsung-galaxy-s24-ultra'
                      ? 'Dual SIM (Nano-SIM and eSIM, dual stand-by) + multi-eSIM profile support across all Pakistan telcos'
                      : phone.id === 'samsung-galaxy-a55-5g'
                      ? 'Hybrid Dual SIM (Nano-SIM, dual stand-by) + microSD card slot (expandable up to 1TB)'
                      : phone.id === 'samsung-galaxy-a54-5g'
                      ? 'Hybrid Dual SIM (Nano-SIM, dual stand-by) + microSD card slot (expandable up to 1TB)'
                      : phone.id === 'tecno-spark-40-pro-plus'
                      ? 'Dual SIM (Nano-SIM, dual stand-by) + dedicated microSD card slot (expandable up to 1TB)'
                      : 'Dual SIM (Nano-SIM, dual stand-by) + eSIM supported by Jazz, Zong, Telenor, Ufone'}
                  </div>
                </div>
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">Water & Dust Resistance</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">
                    {phone.id === 'samsung-galaxy-s24-ultra'
                      ? 'IP68 dust/water resistant (up to 1.5m for 30 mins) with S-Pen stylus IP68 rating'
                      : phone.id === 'samsung-galaxy-a55-5g'
                      ? 'IP67 dust/water resistant (up to 1m for 30 mins) with water-touch rejection'
                      : phone.id === 'samsung-galaxy-a54-5g'
                      ? 'IP67 dust/water resistant (up to 1m for 30 mins) with water-touch rejection'
                      : phone.id === 'tecno-spark-40-pro-plus'
                      ? 'IP64 dust and splash water resistance + 1.5m drop resistance certified'
                      : 'IP68 dust/water resistant (1.5m for 30 mins)'}
                  </div>
                </div>
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">Official Colorways</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">{phone.colors.join(', ')}</div>
                </div>
              </div>
            </div>

            {/* Table 2: Display & Screen */}
            <div className="border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xs">
              <div className="bg-gray-50 dark:bg-white/5 px-4 sm:px-6 py-3.5 border-b border-gray-200 dark:border-white/10 flex items-center justify-between">
                <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Display & Screen</span>
                </span>
                <span className="text-xs text-gray-500 dark:text-zinc-400 font-medium">Panel Technology</span>
              </div>
              <div className="px-4 sm:px-6 divide-y divide-gray-100 dark:divide-white/5">
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">Display Technology</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">{phone.specs.display}</div>
                </div>
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">Refresh Rate</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">{phone.specs.refreshRate}</div>
                </div>
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">Resolution & Density</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">
                    {phone.id === 'samsung-galaxy-s24-ultra'
                      ? 'QHD+ (3120 x 1440 pixels, 19.5:9 ratio, ~505 PPI density) Dynamic LTPO AMOLED 2X'
                      : phone.id === 'samsung-galaxy-a55-5g'
                      ? 'FHD+ (1080 x 2340 pixels, 19.5:9 ratio, ~390 PPI density) with Vision Booster'
                      : phone.id === 'samsung-galaxy-a54-5g'
                      ? 'FHD+ (1080 x 2340 pixels, 19.5:9 ratio, ~403 PPI density) with Vision Booster'
                      : phone.id === 'tecno-spark-40-pro-plus'
                      ? '1.5K (1224 x 2720 pixels, ~440 PPI density) 3D Curved AMOLED with 2160Hz PWM high frequency dimming'
                      : 'QHD+ (3120 x 1440 pixels, ~505 PPI density)'}
                  </div>
                </div>
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">Peak Brightness</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">
                    {phone.id === 'samsung-galaxy-s24-ultra'
                      ? '2600 nits Peak Brightness with Corning Gorilla Armor Anti-Reflective Coating & Vision Booster'
                      : phone.id === 'samsung-galaxy-a55-5g'
                      ? '1000 nits High Brightness Mode (HBM) with Vision Booster outdoor sunlight visibility'
                      : phone.id === 'samsung-galaxy-a54-5g'
                      ? '1000 nits High Brightness Mode (HBM) with Vision Booster outdoor visibility'
                      : phone.id === 'tecno-spark-40-pro-plus'
                      ? 'Peak brightness up to 1500 nits with Wet & Oily Touch 2.0 control'
                      : 'Peak brightness up to 2600 nits'}
                  </div>
                </div>
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">HDR Standards</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">
                    {phone.id === 'samsung-galaxy-s24-ultra'
                      ? 'HDR10+, Vision Booster, 100% DCI-P3 wide color gamut, SGS Eye Care Certified'
                      : phone.id === 'samsung-galaxy-a55-5g'
                      ? 'HDR10+, SGS Eye Care Certification, 100% DCI-P3 wide color spectrum'
                      : phone.id === 'samsung-galaxy-a54-5g'
                      ? 'HDR10+, SGS Eye Care Certification, 100% DCI-P3 wide color spectrum'
                      : phone.id === 'tecno-spark-40-pro-plus'
                      ? 'HDR10, 10-bit Color Depth (1.07 Billion Colors), 100% DCI-P3 wide color gamut'
                      : 'HDR10+, Vision Booster, 100% DCI-P3 wide color gamut'}
                  </div>
                </div>
              </div>
            </div>

            {/* Table 3: Performance, Chipset & OS */}
            <div className="border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xs">
              <div className="bg-gray-50 dark:bg-white/5 px-4 sm:px-6 py-3.5 border-b border-gray-200 dark:border-white/10 flex items-center justify-between">
                <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Performance & Chipset</span>
                </span>
                <span className="text-xs text-gray-500 dark:text-zinc-400 font-medium">Processing Power</span>
              </div>
              <div className="px-4 sm:px-6 divide-y divide-gray-100 dark:divide-white/5">
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">System Chipset</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">{phone.specs.processor}</div>
                </div>
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">RAM Capacity & Type</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">{activeRamSpec}</div>
                </div>
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">Internal Storage</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">{activeStorageSpec}</div>
                </div>
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">Operating System</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">{phone.specs.os}</div>
                </div>
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">AI Acceleration</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">
                    {phone.id === 'samsung-galaxy-s24-ultra'
                      ? 'Galaxy AI Suite (Circle to Search with Google, Live Translate, Note Assist, Generative Photo Edit, Transcript Assist)'
                      : phone.id === 'samsung-galaxy-a55-5g'
                      ? 'Samsung Exynos AI Engine with Photo Remaster, Object Eraser, AI Auto Framing & Knox Vault AI verification'
                      : phone.id === 'samsung-galaxy-a54-5g'
                      ? 'Samsung Exynos AI Engine with Photo Remaster, Object Eraser & Auto Framing'
                      : phone.id === 'tecno-spark-40-pro-plus'
                      ? 'MediaTek APU AI Engine with Ask Ella AI Assistant, AI Eraser 2.0, and AI Call Noise Reduction'
                      : 'Dedicated Neural Processing Unit (NPU) for on-device AI algorithms and image tuning'}
                  </div>
                </div>
              </div>
            </div>

            {/* Table 4: Main Rear Camera System */}
            <div className="border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xs">
              <div className="bg-gray-50 dark:bg-white/5 px-4 sm:px-6 py-3.5 border-b border-gray-200 dark:border-white/10 flex items-center justify-between">
                <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
                  <Camera className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Main Rear Camera System</span>
                </span>
                <span className="text-xs text-gray-500 dark:text-zinc-400 font-medium">Optics & Photography</span>
              </div>
              <div className="px-4 sm:px-6 divide-y divide-gray-100 dark:divide-white/5">
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">Sensor Configuration</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">{phone.specs.mainCamera}</div>
                </div>
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">Image Stabilization</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">
                    {phone.id === 'samsung-galaxy-s24-ultra'
                      ? 'Multi-Directional OIS (2x wider OIS optical correction angle) + Super Steady EIS video stabilization'
                      : phone.id === 'samsung-galaxy-a55-5g'
                      ? 'Hardware OIS (Optical Image Stabilization, 1.5° wider angle) + VDIS (Video Digital Image Stabilization)'
                      : phone.id === 'samsung-galaxy-a54-5g'
                      ? 'Hardware OIS (Optical Image Stabilization, 1.5° wider angle) + VDIS (Video Digital Image Stabilization)'
                      : phone.id === 'tecno-spark-40-pro-plus'
                      ? 'EIS (Electronic Image Stabilization) + PDAF Autofocus with Super Night 3.0 algorithms'
                      : 'Multi-Directional OIS (Optical Image Stabilization) + Super Steady EIS video stabilization'}
                  </div>
                </div>
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">Video Recording</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">
                    {phone.id === 'samsung-galaxy-s24-ultra'
                      ? '8K @ 24/30fps, 4K @ 30/60/120fps, 1080p @ 240fps slow-motion, 10-bit HDR10+ recording'
                      : phone.id === 'samsung-galaxy-a55-5g'
                      ? '4K @ 30fps, 1080p @ 30/60fps with Super HDR Video (12-bit) and gyro-EIS'
                      : phone.id === 'samsung-galaxy-a54-5g'
                      ? '4K @ 30fps, 1080p @ 30/60fps, 720p @ 480fps super slow-motion'
                      : phone.id === 'tecno-spark-40-pro-plus'
                      ? '2K @ 30fps, 1080p @ 30/60fps with Dual View video recording mode'
                      : '8K @ 30fps, 4K @ 24/30/60/120fps, 1080p @ 240fps slow-motion'}
                  </div>
                </div>
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">Optics Features</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">
                    {phone.id === 'samsung-galaxy-s24-ultra'
                      ? 'Laser Autofocus, 100x Space Zoom, ProVisual Engine AI, Super Nightography, Expert RAW 24MP'
                      : phone.id === 'samsung-galaxy-a55-5g'
                      ? 'AI ISP Nightography, 4-in-1 Pixel Binning, Super HDR Video, Object Eraser, Single Take'
                      : phone.id === 'samsung-galaxy-a54-5g'
                      ? 'Nightography, Auto Framing, Photo Remaster, Object Eraser, Pro Mode, Food Mode, Single Take'
                      : phone.id === 'tecno-spark-40-pro-plus'
                      ? 'Super Night Mode 3.0, AI Portrait 2.0, HDR, Quad-LED Flash, Document Scanner, Panorama'
                      : 'Laser Autofocus, Super Nightography, ProVisual Engine AI, RAW DNG export, 100x Space Zoom'}
                  </div>
                </div>
              </div>
            </div>

            {/* Table 5: Front Selfie Camera */}
            <div className="border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xs">
              <div className="bg-gray-50 dark:bg-white/5 px-4 sm:px-6 py-3.5 border-b border-gray-200 dark:border-white/10 flex items-center justify-between">
                <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
                  <Camera className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>Front Selfie Camera</span>
                </span>
                <span className="text-xs text-gray-500 dark:text-zinc-400 font-medium">Front Sensor</span>
              </div>
              <div className="px-4 sm:px-6 divide-y divide-gray-100 dark:divide-white/5">
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">Resolution & Sensor</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">{phone.specs.selfieCamera}</div>
                </div>
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">Front Video Capabilities</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">
                    {phone.id === 'samsung-galaxy-s24-ultra'
                      ? '4K recording @ 30/60fps with Auto HDR, Dual Pixel PDAF & Dual Video Call integration'
                      : phone.id === 'samsung-galaxy-a55-5g'
                      ? '4K recording @ 30fps, 1080p @ 30/60fps with Portrait Video Bokeh & Super HDR'
                      : phone.id === 'samsung-galaxy-a54-5g'
                      ? '4K recording @ 30fps, 1080p @ 30/60fps with Portrait Video Bokeh'
                      : phone.id === 'tecno-spark-40-pro-plus'
                      ? '1080p recording @ 30fps with Dual Micro-Slit LED Flash assistance'
                      : '4K recording @ 30/60fps with Auto HDR & Dual Video Call integration'}
                  </div>
                </div>
              </div>
            </div>

            {/* Table 6: Battery & Power Delivery */}
            <div className="border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xs">
              <div className="bg-gray-50 dark:bg-white/5 px-4 sm:px-6 py-3.5 border-b border-gray-200 dark:border-white/10 flex items-center justify-between">
                <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
                  <Battery className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Battery & Power Delivery</span>
                </span>
                <span className="text-xs text-gray-500 dark:text-zinc-400 font-medium">Power & Longevity</span>
              </div>
              <div className="px-4 sm:px-6 divide-y divide-gray-100 dark:divide-white/5">
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">Battery Capacity</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">{phone.specs.battery}</div>
                </div>
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">Wired Charging</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">{phone.specs.charging}</div>
                </div>
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">Wireless & Reverse Power</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">
                    {phone.id === 'samsung-galaxy-s24-ultra'
                      ? '45W Super Fast Charging 2.0 + 15W Fast Wireless Charging 2.0 + 4.5W Wireless PowerShare'
                      : phone.id === 'samsung-galaxy-a55-5g'
                      ? '25W Super Fast Wired Charging Protocol with USB Power Delivery 3.0 (PD 3.0)'
                      : phone.id === 'samsung-galaxy-a54-5g'
                      ? '25W Super Fast Wired Charging Protocol with USB Power Delivery 3.0 (PD 3.0)'
                      : phone.id === 'tecno-spark-40-pro-plus'
                      ? '30W Magnetic Wireless Charging support + Smart Bypass charging for low-temperature gaming'
                      : 'Wired Fast Charging Protocol with Power Delivery (PD 3.0)'}
                  </div>
                </div>
              </div>
            </div>

            {/* Table 7: Connectivity & Extras */}
            <div className="border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xs">
              <div className="bg-gray-50 dark:bg-white/5 px-4 sm:px-6 py-3.5 border-b border-gray-200 dark:border-white/10 flex items-center justify-between">
                <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Connectivity & Extras</span>
                </span>
                <span className="text-xs text-gray-500 dark:text-zinc-400 font-medium">Pakistan Carriers</span>
              </div>
              <div className="px-4 sm:px-6 divide-y divide-gray-100 dark:divide-white/5">
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">Cellular Networks</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">{phone.specs.network} (Jazz, Zong, Telenor, Ufone 4G/5G)</div>
                </div>
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">Wi-Fi & Bluetooth</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">
                    {phone.id === 'samsung-galaxy-s24-ultra'
                      ? 'Wi-Fi 7 (802.11 a/b/g/n/ac/ax/be tri-band), Bluetooth 5.3, NFC, USB Type-C 3.2 Gen 1 (DisplayPort)'
                      : phone.id === 'samsung-galaxy-a55-5g'
                      ? 'Wi-Fi 6 (802.11 a/b/g/n/ac/ax dual-band), Bluetooth 5.3, NFC, USB Type-C 2.0 (OTG)'
                      : phone.id === 'samsung-galaxy-a54-5g'
                      ? 'Wi-Fi 6 (802.11 a/b/g/n/ac/ax dual-band), Bluetooth 5.3, NFC, USB Type-C 2.0 (OTG)'
                      : phone.id === 'tecno-spark-40-pro-plus'
                      ? 'Wi-Fi 802.11 a/b/g/n/ac (dual-band), Bluetooth 5.3, NFC, FM Radio, USB Type-C 2.0 (OTG)'
                      : 'Wi-Fi 7 (tri-band), Bluetooth 5.4, NFC for contactless transactions'}
                  </div>
                </div>
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-normal break-words">Special Hardware</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">
                    {phone.id === 'samsung-galaxy-s24-ultra'
                      ? 'Built-in S-Pen Stylus with Bluetooth LE & 2.8ms Latency, Samsung DeX desktop support, Samsung Knox Vault, UWB'
                      : phone.id === 'samsung-galaxy-a55-5g'
                      ? 'Stereo Dual Speakers with Dolby Atmos, Samsung Knox Vault Hardware Security, Brushed Metal Frame Key Island'
                      : phone.id === 'samsung-galaxy-a54-5g'
                      ? 'Stereo Dual Speakers tuned with Dolby Atmos, Samsung Knox Vault Hardware Security, Voice Focus call clarity'
                      : phone.id === 'tecno-spark-40-pro-plus'
                      ? 'Dynamic Port 2.0 (Dynamic Island notifications), Dual Stereo Speakers with Dolby Atmos & DTS, Infrared Blaster'
                      : 'Ultra Wideband (UWB) support, Stereo speakers tuned with Dolby Atmos'}
                  </div>
                </div>
                <div className="flex flex-row items-baseline justify-between py-2.5 border-b border-gray-100 dark:border-white/5 gap-3 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-[36%] shrink-0 text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-tight leading-snug break-words">Biometrics & Audio</div>
                  <div className="w-[64%] text-xs sm:text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-snug break-words text-left">
                    {phone.id === 'samsung-galaxy-s24-ultra'
                      ? 'Qualcomm 3D Sonic Gen 2 Ultrasonic In-Display Fingerprint Sensor, AI Face Unlock, Stereo Dual Speakers tuned by AKG'
                      : phone.id === 'samsung-galaxy-a55-5g'
                      ? 'Optical Under-Display Fingerprint Sensor, AI Face Unlock, Stereo Dual Speakers with Dolby Atmos'
                      : phone.id === 'samsung-galaxy-a54-5g'
                      ? 'Optical Under-Display Fingerprint Sensor, AI Face Unlock, Stereo Dual Speakers with Dolby Atmos'
                      : phone.id === 'tecno-spark-40-pro-plus'
                      ? 'Under-Display Optical Fingerprint Sensor, AI Face Unlock, Dual Stereo Speakers certified with Hi-Res Audio'
                      : 'Ultrasonic In-Display Fingerprint Sensor, AI Face Unlock, Stereo Dual Speakers with Dolby Atmos'}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* SEQUENCE 3: PROS & CONS ANALYSIS                                          */}
        {/* ========================================================================= */}
        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm dark:shadow-2xl border border-gray-200 dark:border-white/10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-['Outfit'] mb-6 flex items-center gap-2">
            <CheckCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            <span>Pros & Cons Analysis</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pros List */}
            <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 space-y-4">
              <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-300 font-bold text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>Reasons to Buy (The Good)</span>
              </div>
              <ul className="space-y-3">
                {getPros(phone).map((pro, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 font-medium leading-relaxed">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0 font-bold" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons List */}
            <div className="p-6 rounded-2xl bg-rose-50/60 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/50 space-y-4">
              <div className="flex items-center gap-2 text-rose-900 dark:text-rose-300 font-bold text-base">
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <span>Points to Consider (The Bad)</span>
              </div>
              <ul className="space-y-3">
                {getCons(phone).map((con, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-rose-950 dark:text-rose-200 font-medium leading-relaxed">
                    <XCircle className="w-4 h-4 text-rose-500 dark:text-rose-400 mt-0.5 flex-shrink-0" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SEQUENCE 4: REAL USER RATINGS & COMMUNITY REVIEWS FEEDBACK SECTION        */}
        {/* ========================================================================= */}
        <div id="user-reviews-section" className="bg-white dark:bg-white/5 dark:backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm dark:shadow-2xl border border-gray-200 dark:border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 dark:border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-2xl border border-emerald-100 dark:border-emerald-800/60">
                <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-['Outfit']">
                  Real User Ratings & Community Feedback
                </h2>
                <p className="text-xs text-gray-500 dark:text-zinc-400">
                  {totalReviewsCount === 0 
                    ? 'No pre-written ratings. Ready for genuine Pakistani buyers to leave authentic feedback.'
                    : `Verified buyer reviews and rating breakdown for ${phone.name}.`}
                </p>
              </div>
            </div>

            <button
              id="write-review-toggle-btn"
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 self-start sm:self-auto"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>{showReviewForm ? 'Cancel' : 'Write a Review'}</span>
            </button>
          </div>

          {reviewSubmitted && (
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-700/60 text-emerald-800 dark:text-emerald-200 text-xs font-semibold flex items-center justify-between gap-2 animate-in fade-in shadow-xs">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>Thank you! Your verified review has been published.</span>
              </div>
              <button 
                onClick={() => setReviewSubmitted(false)}
                className="text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-white text-xs font-bold p-1"
                aria-label="Dismiss banner"
              >
                ✕
              </button>
            </div>
          )}

          {/* Interactive Review Submission Form */}
          {showReviewForm && (
            <form onSubmit={handleAddReview} className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-emerald-200 dark:border-emerald-800/50 space-y-4 animate-in fade-in slide-in-from-top-2">
              <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Submit Your Review for {phone.name}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-700 dark:text-zinc-300 block mb-1.5">
                    Your Name / Nickname *
                  </label>
                  <div className="relative">
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Hamza Tariq"
                      value={reviewName}
                      onChange={(e) => setReviewName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    />
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 dark:text-zinc-300 block mb-1.5">
                    Your City in Pakistan *
                  </label>
                  <div className="relative">
                    <input 
                      type="text"
                      placeholder="e.g. Lahore, Karachi, Islamabad"
                      value={reviewCity}
                      onChange={(e) => setReviewCity(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    />
                    <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 dark:text-zinc-300 block mb-1.5">
                  Rating (1 to 5 Stars) *
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((starVal) => (
                    <button
                      type="button"
                      key={starVal}
                      onClick={() => setReviewRating(starVal)}
                      className="p-1.5 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-950/40 transition-colors"
                    >
                      <Star 
                        className={`w-6 h-6 ${
                          starVal <= reviewRating 
                            ? 'fill-amber-400 text-amber-400' 
                            : 'text-gray-300 dark:text-zinc-600'
                        }`} 
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 ml-2">
                    {reviewRating}.0 / 5.0
                  </span>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 dark:text-zinc-300 block mb-1.5">
                  Your Real-World Review & Experience *
                </label>
                <textarea 
                  required
                  rows={3}
                  placeholder="Share your thoughts on battery life, camera quality, PTA network coverage, thermals, or day-to-day usability..."
                  value={reviewComment}
                  onChange={(e) => setReviewComment(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowReviewForm(false)}
                  className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-zinc-300 text-xs font-bold hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Publish Review</span>
                </button>
              </div>
            </form>
          )}

          {/* Reviews List or Empty State */}
          {userReviews.length > 0 ? (
            <div className="space-y-4">
              {userReviews.map((rev) => (
                <div key={rev.id} className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-bold text-xs flex items-center justify-center">
                        {rev.userName.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-gray-900 dark:text-white block">{rev.userName}</span>
                        <span className="text-[10px] text-gray-400 dark:text-zinc-500 flex items-center gap-1">
                          <MapPin className="w-2.5 h-2.5" />
                          {rev.city} • {rev.date}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3.5 h-3.5 ${i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300 dark:text-zinc-700'}`} 
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-gray-700 dark:text-zinc-300 leading-relaxed pl-10">
                    "{rev.comment}"
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-gray-50/70 dark:bg-white/[0.02] border border-dashed border-gray-200 dark:border-white/10 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                <MessageSquarePlus className="w-6 h-6" />
              </div>
              <div className="max-w-md mx-auto">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                  No user reviews submitted yet
                </h4>
                <p className="text-xs text-gray-500 dark:text-zinc-400 mt-1 leading-relaxed">
                  Be the first Pakistani smartphone owner to rate and review the <span className="font-semibold text-gray-700 dark:text-zinc-300">{phone.name}</span>. Click the button above to publish your feedback.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* SEQUENCE 5: RELATED / SIMILAR SMARTPHONES IN THIS RANGE                   */}
        {/* ========================================================================= */}
        {relatedPhones.length > 0 && (
          <div id="related-devices-section" className="bg-white dark:bg-white/5 dark:backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm dark:shadow-2xl border border-gray-200 dark:border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-2xl border border-emerald-100 dark:border-emerald-800/60">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-['Outfit']">
                    Similar Devices in this Range
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-zinc-400">
                    Handpicked smartphones with comparable PKR price points, hardware class, or same brand ecosystem.
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5 rounded-xl border border-emerald-200 dark:border-emerald-800/60 self-start sm:self-auto">
                {relatedPhones.length} Alternative Picks
              </span>
            </div>

            {/* Responsive Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPhones.map((relPhone) => (
                <PhoneCard
                  key={relPhone.id}
                  phone={relPhone}
                  onSelect={handleSelectRelated}
                  onToggleCompare={onToggleCompare}
                  isCompared={isCompared}
                />
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA / Exploration Bar */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 dark:from-emerald-950/80 dark:to-teal-950/80 dark:border dark:border-white/10 rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold font-['Outfit']">
              Compare with other devices or check PTA tax
            </h3>
            <p className="text-xs text-emerald-100 max-w-xl">
              Use our side-by-side comparison engine or calculate customs duties on any international phone model.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onNavigateToPta(phone)}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white text-emerald-800 text-xs font-extrabold hover:bg-emerald-50 transition-colors shadow-xs flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-emerald-600" />
              <span>PTA Tax Calculator</span>
            </button>
            <button
              onClick={onNavigateToCompare}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 border border-emerald-500 text-white text-xs font-bold transition-colors shadow-xs flex items-center justify-center gap-2"
            >
              <Scale className="w-4 h-4" />
              <span>Compare Devices</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
