import React, { useState, useMemo, useEffect } from 'react';
import { 
  ArrowLeft, 
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
  HardDrive,
  ChevronRight,
  Home as HomeIcon
} from 'lucide-react';
import { PhoneSpec, UserReview } from '../types';
import { PHONES_DATA } from '../data/phones';
import { PhoneCard } from './PhoneCard';
import { PhoneReviewSection } from './PhoneReviewSection';

interface PhoneDetailPageProps {
  phone: PhoneSpec;
  onBack: () => void;
  onNavigateToHome?: () => void;
  onSelectBrand?: (brand: string) => void;
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
  const isRealme = phone.brand.toLowerCase() === 'realme' || phone.id.includes('realme');

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
          /* Apple iPhone 15 Pro Max Sculpted Titanium & Triangular Pro Island */
          <g>
            {/* Matte Glass Pro Camera Bump */}
            <rect 
              x="48" 
              y="32" 
              width="78" 
              height="78" 
              rx="20" 
              fill="rgba(255,255,255,0.18)" 
              stroke="rgba(255,255,255,0.35)" 
              strokeWidth="1.2" 
            />
            
            {/* Top Left Lens (48MP Main OIS) */}
            <circle cx="68" cy="52" r="15" fill="#111827" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="68" cy="52" r="11" fill={`url(#lens-grad-${phone.id})`} />
            <circle cx="68" cy="52" r="6" fill="#030712" />
            <circle cx="65" cy="49" r="2.5" fill="#38bdf8" opacity="0.65" />

            {/* Bottom Left Lens (12MP 5x Tetraprism Telephoto) */}
            <circle cx="68" cy="88" r="15" fill="#111827" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="68" cy="88" r="11" fill={`url(#lens-grad-${phone.id})`} />
            <circle cx="68" cy="88" r="6" fill="#030712" />
            <circle cx="65" cy="85" r="2.5" fill="#38bdf8" opacity="0.65" />

            {/* Right Middle Lens (12MP Ultra-Wide) */}
            <circle cx="104" cy="70" r="15" fill="#111827" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="104" cy="70" r="11" fill={`url(#lens-grad-${phone.id})`} />
            <circle cx="104" cy="70" r="6" fill="#030712" />
            <circle cx="101" cy="67" r="2.5" fill="#38bdf8" opacity="0.65" />

            {/* Adaptive True Tone Flash */}
            <circle cx="104" cy="46" r="6.5" fill="#fef08a" stroke="#cbd5e1" strokeWidth="1.2" opacity="0.95" />
            <circle cx="104" cy="46" r="3" fill="#facc15" />

            {/* LiDAR Scanner & Mic */}
            <circle cx="104" cy="94" r="5" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
            <circle cx="86" cy="94" r="2" fill="#020617" />

            {/* Subtle Centered Apple Logo */}
            <g transform="translate(122, 185) scale(0.65)" opacity="0.4" fill="white">
              <path d="M15.2 12.9c-.03-2.9 2.37-4.3 2.48-4.37-1.35-1.97-3.45-2.24-4.2-2.27-1.78-.18-3.48 1.05-4.38 1.05-.91 0-2.31-1.02-3.8-0.99-1.95.03-3.76 1.14-4.76 2.88-2.03 3.52-.52 8.74 1.45 11.59.97 1.4 2.12 2.96 3.63 2.9 1.46-.06 2.01-.94 3.78-.94 1.76 0 2.27.94 3.79.91 1.56-.03 2.55-1.41 3.5-2.82 1.11-1.62 1.56-3.19 1.59-3.27-.03-.02-3.05-1.17-3.08-4.67zM12.4 4.5c.8-0.97 1.34-2.32 1.19-3.67-1.15.05-2.55.77-3.37 1.73-.72.83-1.35 2.18-1.18 3.5 1.29.1 2.61-.69 3.36-1.56z" />
            </g>
          </g>
        ) : isRealme ? (
          /* Realme 12 Pro Plus 5G Luxury Watch Dial & Golden 3D Seam */
          <g>
            {/* Center Golden 3D Zipper Seam running top to bottom */}
            <line x1="130" y1="18" x2="130" y2="382" stroke="#eab308" strokeWidth="2.5" opacity="0.9" />
            <line x1="129" y1="18" x2="129" y2="382" stroke="#fef08a" strokeWidth="0.8" opacity="0.95" />
            <line x1="131" y1="18" x2="131" y2="382" stroke="#ca8a04" strokeWidth="0.8" opacity="0.8" />

            {/* Luxury Watch Golden Fluted Outer Bezel */}
            <circle cx="130" cy="110" r="54" fill="none" stroke="#eab308" strokeWidth="3.5" opacity="0.95" />
            <circle cx="130" cy="110" r="51" fill="none" stroke="#fef08a" strokeWidth="1" opacity="0.8" />
            <circle cx="130" cy="110" r="49" fill="#0f172a" stroke="#ca8a04" strokeWidth="2" />
            <circle cx="130" cy="110" r="46" fill={`url(#lens-grad-${phone.id})`} />

            {/* Sunburst Dial Texture Ring */}
            <circle cx="130" cy="110" r="40" fill="none" stroke="rgba(234,179,8,0.25)" strokeWidth="1" strokeDasharray="3 2" />

            {/* Top Main Camera (50MP Sony IMX890 OIS) */}
            <circle cx="112" cy="92" r="13" fill="#0a0f1d" stroke="#64748b" strokeWidth="1.5" />
            <circle cx="112" cy="92" r="8.5" fill="#020617" />
            <circle cx="110" cy="90" r="2.5" fill="#38bdf8" opacity="0.8" />

            {/* Top Right Camera (8MP Ultra-Wide) */}
            <circle cx="148" cy="92" r="13" fill="#0a0f1d" stroke="#64748b" strokeWidth="1.5" />
            <circle cx="148" cy="92" r="8.5" fill="#020617" />
            <circle cx="146" cy="90" r="2.5" fill="#38bdf8" opacity="0.8" />

            {/* Bottom Center 64MP Periscope Rectangular Prism Lens */}
            <rect x="120" y="118" width="20" height="15" rx="3" fill="#020617" stroke="#64748b" strokeWidth="1.5" />
            <circle cx="130" cy="125" r="4.5" fill="#0f172a" />
            <circle cx="128" cy="123" r="1.5" fill="#38bdf8" opacity="0.9" />

            {/* 120X SuperZoom Micro Inscription */}
            <text
              x="130"
              y="108"
              textAnchor="middle"
              fill="#fbbf24"
              fontSize="6"
              fontWeight="bold"
              letterSpacing="0.8"
            >
              120X
            </text>

            {/* realme Lower-case Branding on Back */}
            <text
              x="75"
              y="350"
              textAnchor="middle"
              fill="rgba(255,255,255,0.7)"
              fontSize="12"
              fontWeight="bold"
              letterSpacing="0.5"
            >
              realme
            </text>
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
  onNavigateToHome,
  onSelectBrand,
  onToggleCompare,
  isCompared,
  onNavigateToPta,
  onNavigateToCompare,
  onSelectPhone,
}) => {
  const [selectedColor, setSelectedColor] = useState<string>(phone.colors[0] || 'Default');
  const [imageError, setImageError] = useState(false);

  // User submitted reviews state
  const [userReviews, setUserReviews] = useState<UserReview[]>(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(`reviews_${phone.id}`);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) return parsed;
        }
      }
    } catch {
      // Storage access might be restricted in sandbox
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
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(`reviews_${phone.id}`);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            setUserReviews(parsed);
          } else {
            setUserReviews([]);
          }
        } else {
          setUserReviews([]);
        }
      }
    } catch {
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
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(`reviews_${phone.id}`, JSON.stringify(updated));
      }
    } catch {
      // Storage restricted or quota exceeded
    }
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
    <div id="phone-detail-page" className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 pb-20 transition-colors duration-200">
      
      {/* Clean Breadcrumb Navigation Line */}
      <div className="relative w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-2xs">
        <div className="max-w-5xl mx-auto px-3 sm:px-4 py-2.5">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-1.5 text-xs sm:text-sm font-medium text-slate-500 dark:text-zinc-400 min-w-0">
            <button
              id="breadcrumb-home"
              onClick={() => {
                if (onNavigateToHome) onNavigateToHome();
                else onBack();
              }}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer font-medium"
            >
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>

            <ChevronRight className="w-3.5 h-3.5 text-slate-300 dark:text-zinc-600 shrink-0" />

            <button
              id="breadcrumb-brand"
              onClick={() => {
                if (onSelectBrand) onSelectBrand(phone.brand);
                else if (onNavigateToHome) onNavigateToHome();
                else onBack();
              }}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shrink-0 cursor-pointer font-medium"
            >
              {phone.brand}
            </button>

            <ChevronRight className="w-3.5 h-3.5 text-slate-300 dark:text-zinc-600 shrink-0" />

            <span className="text-slate-800 dark:text-slate-200 font-semibold truncate max-w-[200px] sm:max-w-xs md:max-w-md">
              {phone.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Flat Layout Container */}
      <div className="w-full max-w-5xl mx-auto px-3 sm:px-4 py-3 space-y-4 bg-transparent">
        
        {/* ========================================================================= */}
        {/* SEQUENCE 1: VISUALIZER, PRICING, VARIANTS, & PTA CUSTOM DUTIES           */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
          
          {/* Left Column: Visualizer & Colorways (Flat on page background) */}
          <div className="md:col-span-5 space-y-3">
            
            {/* Phone Image Showcase (Directly on page background) */}
            <div className="relative w-full aspect-square bg-white dark:bg-slate-900 rounded-xl p-4 flex items-center justify-center border border-slate-200 dark:border-slate-800 group overflow-hidden shadow-2xs">
              {imageError ? (
                <DeviceVisual phone={phone} selectedColor={selectedColor} colorHex={activeColorHex} />
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    id="main-product-display-image"
                    key={`${activeImage}-${selectedColor}`}
                    src={activeImage} 
                    alt={`${phone.name} - ${selectedColor}`}
                    className="max-h-64 sm:max-h-72 w-auto object-contain drop-shadow-md dark:drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-all duration-300 animate-in fade-in zoom-in-95"
                    referrerPolicy="no-referrer"
                    onError={() => {
                      setImageError(true);
                    }}
                  />
                </div>
              )}

              {/* Brand Badge */}
              <span className="absolute top-3 left-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-white/95 dark:bg-slate-800 text-slate-800 dark:text-zinc-200 border border-slate-200 dark:border-slate-700 shadow-2xs">
                {phone.brand}
              </span>

              {/* PTA Verified Badge */}
              <span className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-1 shadow-2xs">
                <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                <span>PTA Verified</span>
              </span>
            </div>

            {/* Official Colorways Selection */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-600 dark:text-zinc-400">
                  Official Colorways ({phone.colors.length}):
                </span>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/50 text-[11px]">
                  {selectedColor}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full">
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
                      className={`w-full py-2 px-2.5 rounded-lg text-xs font-semibold transition-all flex items-center justify-start gap-2 border text-left truncate cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-300 ring-1 ring-emerald-500/40 shadow-2xs font-bold'
                          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-zinc-300 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60'
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

          {/* Right Column: Title, Pricing & PTA Duty Section */}
          <div className="md:col-span-7 space-y-3">
            
            {/* Standalone Price & PTA Duty Card */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 space-y-4 shadow-2xs">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 mb-1.5">
                  <span className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800/60 text-[10px]">
                    {phone.brand} Official
                  </span>

                  {/* Rating indicator */}
                  <div className="flex items-center gap-1 font-bold text-[11px]">
                    <Star className={`w-3.5 h-3.5 ${currentRating > 0 ? 'fill-amber-400 text-amber-400' : 'text-slate-300 dark:text-zinc-600'}`} />
                    <span className={currentRating > 0 ? 'text-amber-600 dark:text-amber-400' : 'text-slate-700 dark:text-zinc-300'}>
                      {currentRating.toFixed(1)}
                    </span>
                    <span className="text-slate-400 dark:text-zinc-500 font-normal">
                      ({totalReviewsCount})
                    </span>
                  </div>

                  <span>•</span>
                  <span>Released: {phone.releaseDate}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-['Outfit']">
                  {phone.name}
                </h1>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                  1-Year Local Brand Warranty / Official PTA Approved
                </p>
              </div>

              {/* Price Display */}
              <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-zinc-400 block">
                      Estimated Market Price (PKR):
                    </span>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700 dark:text-emerald-400 tracking-tight font-['Outfit']">
                        {formatPKR(activePricePKR)}
                      </span>
                      {activeOfficialPricePKR && (
                        <span className="text-xs text-slate-400 dark:text-zinc-500 line-through">
                          Market Avg: {formatPKR(activeOfficialPricePKR)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Variant Selector */}
                {phone.variants && phone.variants.length > 0 && (
                  <div className="pt-2.5 border-t border-slate-200/80 dark:border-slate-700/80 flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400 mr-1">
                      Variant:
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {phone.variants.map((variant) => {
                        const isSelected = variant.id === (currentVariant?.id || phone.variants![0].id);
                        return (
                          <button
                            key={variant.id}
                            id={`variant-pill-${variant.id}`}
                            onClick={() => setSelectedVariantId(variant.id)}
                            className={`text-xs px-2.5 py-1 rounded-md border font-medium transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-emerald-600 text-white border-emerald-600 shadow-2xs font-semibold'
                                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-zinc-300 border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:bg-emerald-50/40 dark:hover:bg-slate-800'
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

                {/* Retail Range */}
                <div className="flex items-center justify-between text-xs text-slate-600 dark:text-zinc-400 pt-2 border-t border-slate-200/80 dark:border-slate-700/80">
                  <span className="flex items-center gap-1 font-medium">
                    <Store className="w-3.5 h-3.5 text-slate-400 dark:text-zinc-500 flex-shrink-0" />
                    <span>Retail Market Range:</span>
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-zinc-200">
                    {formatPKR(activeMarketPriceRange.min)} – {formatPKR(activeMarketPriceRange.max)}
                  </span>
                </div>
              </div>

              {/* Official PTA Passport & CNIC Tax Breakdown */}
              <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      Official PTA Customs Duty Slabs
                    </span>
                  </div>
                  <button 
                    onClick={() => onNavigateToPta(phone)}
                    className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 underline underline-offset-2 flex items-center gap-1 flex-shrink-0 cursor-pointer"
                  >
                    <Calculator className="w-3 h-3" />
                    <span>Tax Slabs</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="p-2.5 bg-white dark:bg-slate-900 rounded-md border border-slate-200 dark:border-slate-700/80 shadow-2xs">
                    <span className="text-[10px] font-medium text-slate-500 dark:text-zinc-400 block">PTA Passport Tax:</span>
                    <span className="text-base font-extrabold font-mono text-emerald-700 dark:text-emerald-400 block mt-0.5">
                      {formatPKR(phone.ptaTax.passportTaxPKR)}
                    </span>
                    <span className="text-[9px] text-slate-400 dark:text-zinc-500">Within 60 days of arrival in Pakistan</span>
                  </div>

                  <div className="p-2.5 bg-white dark:bg-slate-900 rounded-md border border-slate-200 dark:border-slate-700/80 shadow-2xs">
                    <span className="text-[10px] font-medium text-slate-500 dark:text-zinc-400 block">PTA CNIC Tax (ID Card):</span>
                    <span className="text-base font-bold font-mono text-slate-900 dark:text-white block mt-0.5">
                      {formatPKR(phone.ptaTax.cnicTaxPKR)}
                    </span>
                    <span className="text-[9px] text-slate-400 dark:text-zinc-500">Standard rate for non-travelers</span>
                  </div>
                </div>

                <p className="text-[10px] text-slate-500 dark:text-zinc-400 leading-relaxed">
                  * Boxed smartphones sold through authorized local distributors already include all PTA duties & taxes pre-paid in retail price.
                </p>
              </div>

              {/* Quick Specs Highlight Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="p-2 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-200/70 dark:border-slate-700/70 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <div className="truncate">
                    <span className="text-[9px] text-slate-400 dark:text-zinc-500 block uppercase">Processor</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-zinc-200 truncate block">{phone.specs.processor.split('(')[0]}</span>
                  </div>
                </div>

                <div className="p-2 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-200/70 dark:border-slate-700/70 flex items-center gap-2">
                  <Camera className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                  <div className="truncate">
                    <span className="text-[9px] text-slate-400 dark:text-zinc-500 block uppercase">Camera</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-zinc-200 truncate block">{phone.specs.mainCamera.split('+')[0]}</span>
                  </div>
                </div>

                <div className="p-2 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-200/70 dark:border-slate-700/70 flex items-center gap-2">
                  <Battery className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <div className="truncate">
                    <span className="text-[9px] text-slate-400 dark:text-zinc-500 block uppercase">Battery</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-zinc-200 truncate block">{phone.specs.battery}</span>
                  </div>
                </div>

                <div className="p-2 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-200/70 dark:border-slate-700/70 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                  <div className="truncate">
                    <span className="text-[9px] text-slate-400 dark:text-zinc-500 block uppercase">Display</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-zinc-200 truncate block">{phone.specs.refreshRate}</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* SEQUENCE 2: FULL TECHNICAL SPECIFICATIONS (FLAT INDIVIDUAL TABLES)        */}
        {/* ========================================================================= */}
        <div className="pt-2 space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-['Outfit'] tracking-tight">
                Full Technical Specifications
              </h2>
            </div>
            <p className="text-xs text-slate-500 dark:text-zinc-400">
              Verified hardware and software specifications for the official {phone.name} Pakistani market edition.
            </p>
          </div>

          <div className="space-y-4">
            
            {/* Table 1: Build & Design */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-2xs">
              <div className="bg-slate-50 dark:bg-slate-800/60 px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Build & Design</span>
                </span>
                <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-medium">Hardware Casing</span>
              </div>
              <div className="px-4 divide-y divide-slate-100 dark:divide-slate-800">
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
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-2xs">
              <div className="bg-slate-50 dark:bg-slate-800/60 px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Display & Screen</span>
                </span>
                <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-medium">Panel Technology</span>
              </div>
              <div className="px-4 divide-y divide-slate-100 dark:divide-slate-800">
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
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-2xs">
              <div className="bg-slate-50 dark:bg-slate-800/60 px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Performance & Chipset</span>
                </span>
                <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-medium">Processing Power</span>
              </div>
              <div className="px-4 divide-y divide-slate-100 dark:divide-slate-800">
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
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-2xs">
              <div className="bg-slate-50 dark:bg-slate-800/60 px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                  <Camera className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Main Rear Camera System</span>
                </span>
                <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-medium">Optics & Photography</span>
              </div>
              <div className="px-4 divide-y divide-slate-100 dark:divide-slate-800">
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
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-2xs">
              <div className="bg-slate-50 dark:bg-slate-800/60 px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                  <Camera className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>Front Selfie Camera</span>
                </span>
                <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-medium">Front Sensor</span>
              </div>
              <div className="px-4 divide-y divide-slate-100 dark:divide-slate-800">
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
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-2xs">
              <div className="bg-slate-50 dark:bg-slate-800/60 px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                  <Battery className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Battery & Power Delivery</span>
                </span>
                <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-medium">Power & Longevity</span>
              </div>
              <div className="px-4 divide-y divide-slate-100 dark:divide-slate-800">
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
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-2xs">
              <div className="bg-slate-50 dark:bg-slate-800/60 px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Connectivity & Extras</span>
                </span>
                <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-medium">Pakistan Carriers</span>
              </div>
              <div className="px-4 divide-y divide-slate-100 dark:divide-slate-800">
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
        <div className="pt-2 space-y-3">
          <div className="flex items-center gap-2">
            <CheckCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-['Outfit'] tracking-tight">
              Pros & Cons Analysis
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pros List */}
            <div className="p-4 sm:p-5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 space-y-3">
              <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-300 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Reasons to Buy (The Good)</span>
              </div>
              <ul className="space-y-2.5">
                {getPros(phone).map((pro, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 font-medium leading-relaxed">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0 font-bold" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons List */}
            <div className="p-4 sm:p-5 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/40 space-y-3">
              <div className="flex items-center gap-2 text-rose-900 dark:text-rose-300 font-bold text-sm">
                <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                <span>Points to Consider (The Bad)</span>
              </div>
              <ul className="space-y-2.5">
                {getCons(phone).map((con, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-rose-950 dark:text-rose-200 font-medium leading-relaxed">
                    <XCircle className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400 mt-0.5 flex-shrink-0" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SEQUENCE 3.5: EDITORIAL EXPERT REVIEW & PAKISTAN MARKET VERDICT           */}
        {/* ========================================================================= */}
        <PhoneReviewSection 
          phone={phone} 
          onNavigateToCompare={onNavigateToCompare} 
        />

        {/* ========================================================================= */}
        {/* SEQUENCE 4: REAL USER RATINGS & COMMUNITY REVIEWS FEEDBACK SECTION        */}
        {/* ========================================================================= */}
        <div id="user-reviews-section" className="bg-white dark:bg-slate-900 rounded-xl p-4 sm:p-5 shadow-2xs border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3.5">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 rounded-lg border border-amber-200/60 dark:border-amber-800/40">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-['Outfit']">
                  Real User Ratings & Community Feedback
                </h2>
                <p className="text-xs text-slate-500 dark:text-zinc-400">
                  {totalReviewsCount === 0 
                    ? 'No pre-written ratings. Ready for genuine Pakistani buyers to leave authentic feedback.'
                    : `Verified buyer reviews and rating breakdown for ${phone.name}.`}
                </p>
              </div>
            </div>

            <button
              id="write-review-toggle-btn"
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="px-3.5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 self-start sm:self-auto"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
              <span>{showReviewForm ? 'Cancel' : 'Write a Review'}</span>
            </button>
          </div>

          {reviewSubmitted && (
            <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-700/60 text-emerald-800 dark:text-emerald-200 text-xs font-semibold flex items-center justify-between gap-2 animate-in fade-in shadow-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
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
            <form onSubmit={handleAddReview} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-emerald-200 dark:border-emerald-800/50 space-y-3 animate-in fade-in slide-in-from-top-2">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Submit Your Review for {phone.name}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-slate-700 dark:text-zinc-300 block mb-1">
                    Your Name / Nickname *
                  </label>
                  <div className="relative">
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Hamza Tariq"
                      value={reviewName}
                      onChange={(e) => setReviewName(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:outline-hidden focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white"
                    />
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-700 dark:text-zinc-300 block mb-1">
                    Your City in Pakistan *
                  </label>
                  <div className="relative">
                    <input 
                      type="text"
                      placeholder="e.g. Lahore, Karachi, Islamabad"
                      value={reviewCity}
                      onChange={(e) => setReviewCity(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:outline-hidden focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white"
                    />
                    <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 dark:text-zinc-300 block mb-1">
                  Rating (1 to 5 Stars) *
                </label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((starVal) => (
                    <button
                      type="button"
                      key={starVal}
                      onClick={() => setReviewRating(starVal)}
                      className="p-1 rounded-md hover:bg-amber-50 dark:hover:bg-amber-950/40 transition-colors"
                    >
                      <Star 
                        className={`w-5 h-5 ${
                          starVal <= reviewRating 
                            ? 'fill-amber-400 text-amber-400' 
                            : 'text-slate-300 dark:text-zinc-600'
                        }`} 
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 ml-1.5">
                    {reviewRating}.0 / 5.0
                  </span>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 dark:text-zinc-300 block mb-1">
                  Your Real-World Review & Experience *
                </label>
                <textarea 
                  required
                  rows={3}
                  placeholder="Share your thoughts on battery life, camera quality, PTA network coverage, thermals, or day-to-day usability..."
                  value={reviewComment}
                  onChange={(e) => setReviewComment(e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:outline-hidden focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white"
                />
              </div>

              <div className="flex justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setShowReviewForm(false)}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-zinc-300 text-xs font-bold hover:bg-slate-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Publish Review</span>
                </button>
              </div>
            </form>
          )}

          {/* Reviews List or Empty State */}
          {userReviews.length > 0 ? (
            <div className="space-y-3">
              {userReviews.map((rev) => (
                <div key={rev.id} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-bold text-xs flex items-center justify-center">
                        {rev.userName.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white block">{rev.userName}</span>
                        <span className="text-[10px] text-slate-400 dark:text-zinc-500 flex items-center gap-1">
                          <MapPin className="w-2.5 h-2.5" />
                          {rev.city} • {rev.date}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300 dark:text-zinc-700'}`} 
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed pl-9">
                    "{rev.comment}"
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 rounded-xl bg-slate-50/70 dark:bg-slate-800/20 border border-dashed border-slate-200 dark:border-slate-800 text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                <MessageSquarePlus className="w-5 h-5" />
              </div>
              <div className="max-w-md mx-auto">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                  No user reviews submitted yet
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-zinc-400 mt-0.5 leading-relaxed">
                  Be the first Pakistani smartphone owner to rate and review the <span className="font-semibold text-slate-700 dark:text-zinc-300">{phone.name}</span>. Click the button above to publish your feedback.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* SEQUENCE 5: RELATED / SIMILAR SMARTPHONES IN THIS RANGE                   */}
        {/* ========================================================================= */}
        {relatedPhones.length > 0 && (
          <div id="related-devices-section" className="pt-2 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-['Outfit'] tracking-tight">
                    Similar Devices in this Range
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">
                    Handpicked smartphones with comparable PKR price points, hardware class, or same brand ecosystem.
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800/60 self-start sm:self-auto">
                {relatedPhones.length} Alternative Picks
              </span>
            </div>

            {/* Responsive Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 dark:from-emerald-950 dark:to-teal-950 border border-emerald-700/40 rounded-xl p-4 sm:p-5 text-white shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-0.5 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold font-['Outfit']">
              Compare with other devices or check PTA tax
            </h3>
            <p className="text-xs text-emerald-100 max-w-xl">
              Use our side-by-side comparison engine or calculate customs duties on any international phone model.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => onNavigateToPta(phone)}
              className="w-full sm:w-auto px-4 py-2 rounded-lg bg-white text-emerald-800 text-xs font-bold hover:bg-emerald-50 transition-colors shadow-xs flex items-center justify-center gap-1.5"
            >
              <Calculator className="w-4 h-4 text-emerald-600" />
              <span>PTA Tax Calculator</span>
            </button>
            <button
              onClick={onNavigateToCompare}
              className="w-full sm:w-auto px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 border border-emerald-500 text-white text-xs font-bold transition-colors shadow-xs flex items-center justify-center gap-1.5"
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
