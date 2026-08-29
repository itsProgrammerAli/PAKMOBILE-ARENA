import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Calculator, 
  ShieldCheck, 
  Smartphone, 
  ArrowRight, 
  FileText, 
  Search
} from 'lucide-react';
import { PhoneSpec } from '../types';
import { PHONES_DATA } from '../data/phones';

interface PtaTaxPageProps {
  initialPhone?: PhoneSpec | null;
  onSelectPhone: (phone: PhoneSpec) => void;
  onBackToHome: () => void;
}

export const PtaTaxPage: React.FC<PtaTaxPageProps> = ({
  initialPhone,
  onSelectPhone,
  onBackToHome,
}) => {
  const [activeTab, setActiveTab] = useState<'preset' | 'custom'>('preset');
  const [selectedDevice, setSelectedDevice] = useState<PhoneSpec>(
    initialPhone || PHONES_DATA[0]
  );
  
  // Custom Calculator Inputs
  const [customPriceUSD, setCustomPriceUSD] = useState<number>(899);
  const [docType, setDocType] = useState<'passport' | 'cnic'>('passport');
  const [searchFilter, setSearchFilter] = useState('');

  const USD_TO_PKR_RATE = 278.40;

  // Official FBR PTA Tax Slabs for 2026 (DIRBS SRO compliance)
  const calculateCustomTax = (usd: number, type: 'passport' | 'cnic') => {
    let tax = 0;
    if (usd <= 30) {
      tax = type === 'passport' ? 430 : 550;
    } else if (usd <= 100) {
      tax = type === 'passport' ? 3200 : 4030;
    } else if (usd <= 200) {
      tax = type === 'passport' ? 9580 : 11560;
    } else if (usd <= 350) {
      tax = type === 'passport' ? 40500 : 50400;
    } else if (usd <= 500) {
      tax = type === 'passport' ? 68900 : 84200;
    } else {
      // Flagship > $500 category (includes sales tax + regulatory duty)
      tax = type === 'passport' ? 115000 + (usd - 500) * 45 : 138000 + (usd - 500) * 55;
    }
    return Math.round(tax);
  };

  const calculatedTax = calculateCustomTax(customPriceUSD, docType);
  const estimatedDevicePKR = Math.round(customPriceUSD * USD_TO_PKR_RATE);
  const totalLandedCost = estimatedDevicePKR + calculatedTax;

  const formatPKR = (val: number) => {
    return '₨ ' + val.toLocaleString('en-PK');
  };

  const filteredPhones = PHONES_DATA.filter((p) =>
    p.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
    p.brand.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div id="pta-tax-page" className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 pb-24 transition-colors duration-200">
      {/* Top Header / Breadcrumb */}
      <div className="bg-white dark:bg-zinc-950/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 relative flex flex-col md:grid md:grid-cols-3 items-center justify-between gap-3">
          {/* Col 1 (Left): Back button */}
          <div className="flex items-center justify-start w-full md:w-auto">
            {/* Mobile Back Button: Minimal square icon */}
            <button
              id="pta-back-to-home-btn-mobile"
              onClick={onBackToHome}
              className="md:hidden absolute left-4 top-3.5 p-2.5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50/80 dark:bg-zinc-800/80 text-gray-700 dark:text-gray-200 shadow-sm active:scale-95 transition-all cursor-pointer"
              title="Back to Home"
              aria-label="Back to Home"
            >
              <ArrowLeft className="w-4 h-4 text-gray-700 dark:text-zinc-200" />
            </button>

            {/* Desktop Back Button: Full pill */}
            <button
              id="pta-back-to-home-btn-desktop"
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
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <h1 className="text-base sm:text-lg md:text-xl font-extrabold text-gray-900 dark:text-white font-['Outfit'] flex items-center gap-2">
                <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>PTA Tax & Customs Duty Calculator</span>
              </h1>
              <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 rounded">
                DIRBS FBR
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-gray-500 dark:text-zinc-400 mt-0.5 max-w-md md:max-w-xl mx-auto">
              Official smartphone registration duties, SRO tax slabs, and PSID payment guides in Pakistan.
            </p>
          </div>

          {/* Col 3 (Right): Exchange Rate Badge */}
          <div className="flex items-center justify-center md:justify-end w-full md:w-auto">
            <span className="text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 sm:py-1.5 rounded-xl border border-emerald-200 dark:border-emerald-800/60 shadow-2xs whitespace-nowrap">
              USD / PKR Exchange: 278.40
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-8 sm:space-y-10">
        
        {/* Main Calculator Box */}
        <div className="rounded-3xl bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-2xl overflow-hidden">
          
          {/* Tabs Selector: Full Width Segmented Control */}
          <div className="p-3 sm:px-6 sm:py-4 border-b border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/5">
            <div className="bg-gray-200/80 dark:bg-black/40 p-1 rounded-2xl flex flex-col sm:flex-row gap-1.5 w-full max-w-2xl mx-auto border dark:border-white/5">
              <button
                id="pta-tab-preset"
                onClick={() => setActiveTab('preset')}
                className={`flex-1 py-2.5 px-4 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'preset'
                    ? 'bg-white dark:bg-zinc-900 text-emerald-800 dark:text-emerald-400 shadow-xs border border-emerald-100 dark:border-white/10'
                    : 'text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5'
                }`}
              >
                <Smartphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Select by Phone Model</span>
              </button>
              <button
                id="pta-tab-custom"
                onClick={() => setActiveTab('custom')}
                className={`flex-1 py-2.5 px-4 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'custom'
                    ? 'bg-white dark:bg-zinc-900 text-emerald-800 dark:text-emerald-400 shadow-xs border border-emerald-100 dark:border-white/10'
                    : 'text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5'
                }`}
              >
                <Calculator className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Custom USD Invoice Calculator</span>
              </button>
            </div>
          </div>

          {/* Calculator Body */}
          <div className="p-6 sm:p-8">
            {activeTab === 'preset' ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Column: Device Selection */}
                <div className="lg:col-span-5 space-y-4">
                  <label className="block text-xs font-bold text-gray-700 dark:text-zinc-300 uppercase tracking-wider">
                    Select Device from Database:
                  </label>

                  {/* Search Input for fast filter */}
                  <div className="relative">
                    <Search className="w-4 h-4 text-gray-400 dark:text-zinc-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      value={searchFilter}
                      onChange={(e) => setSearchFilter(e.target.value)}
                      placeholder="Search phone name (e.g. iPhone, S25)..."
                      className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-medium text-gray-900 dark:text-white rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-500 focus:bg-white dark:focus:bg-zinc-900 transition-all shadow-2xs placeholder:text-gray-400 dark:placeholder:text-zinc-500"
                    />
                  </div>

                  {/* Device List Scrollable */}
                  <div className="space-y-1.5 max-h-96 overflow-y-auto pr-1 border border-gray-100 dark:border-white/5 rounded-2xl p-2 bg-gray-50/50 dark:bg-black/20">
                    {filteredPhones.map((phone) => (
                      <button
                        key={phone.id}
                        onClick={() => setSelectedDevice(phone)}
                        className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between gap-3 border ${
                          selectedDevice.id === phone.id
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700 shadow-2xs'
                            : 'bg-white dark:bg-white/5 border-gray-200/80 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img 
                            src={phone.image} 
                            alt={phone.name} 
                            className="w-9 h-9 object-contain bg-white dark:bg-zinc-900 rounded-lg p-1 border border-gray-100 dark:border-white/5 flex-shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <div className="truncate">
                            <div className="text-xs font-bold text-gray-900 dark:text-white truncate">
                              {phone.name}
                            </div>
                            <div className="text-[10px] text-gray-500 dark:text-zinc-400 font-mono">
                              {formatPKR(phone.pricePKR)}
                            </div>
                          </div>
                        </div>

                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          selectedDevice.id === phone.id
                            ? 'bg-emerald-600 dark:bg-emerald-500 text-white'
                            : 'bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-zinc-300'
                        }`}>
                          {selectedDevice.id === phone.id ? 'Selected' : 'Choose'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Column: Tax Breakdown Card */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-50/80 to-teal-50/50 dark:from-emerald-950/30 dark:to-teal-950/20 border border-emerald-200 dark:border-emerald-800/40 space-y-6">
                    
                    {/* Device Banner */}
                    <div className="flex items-center gap-4 pb-4 border-b border-emerald-200/80 dark:border-emerald-800/40">
                      <img 
                        src={selectedDevice.image} 
                        alt={selectedDevice.name} 
                        className="w-20 h-20 object-contain rounded-2xl bg-white dark:bg-white/5 p-2.5 border border-emerald-100 dark:border-white/10 shadow-xs"
                        referrerPolicy="no-referrer"
                      />
                      <div className="space-y-1">
                        <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold uppercase tracking-wider border dark:border-emerald-800/40">
                          {selectedDevice.brand}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white font-['Outfit']">
                          {selectedDevice.name}
                        </h3>
                        <div className="text-xs text-gray-600 dark:text-zinc-400">
                          Estimated Market Retail: <strong className="font-mono text-gray-900 dark:text-zinc-200">{formatPKR(selectedDevice.pricePKR)}</strong>
                        </div>
                      </div>
                    </div>

                    {/* Passport vs CNIC Slabs Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Passport Card */}
                      <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/80 border border-emerald-200 dark:border-emerald-800/40 shadow-xs space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider">
                          <span>Passport Duty Rate</span>
                          <span className="text-[10px] text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/60">
                            International
                          </span>
                        </div>
                        <div className="text-2xl font-extrabold text-emerald-700 dark:text-emerald-400 font-mono">
                          {formatPKR(selectedDevice.ptaTax.passportTaxPKR)}
                        </div>
                        <p className="text-[11px] text-gray-500 dark:text-zinc-400 leading-normal">
                          Requires entry stamp on passport within 60 days of arrival in Pakistan.
                        </p>
                      </div>

                      {/* CNIC Card */}
                      <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/80 border border-gray-200 dark:border-white/10 shadow-xs space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider">
                          <span>CNIC Duty Rate</span>
                          <span className="text-[10px] text-gray-700 dark:text-zinc-300 bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded">
                            Local Resident
                          </span>
                        </div>
                        <div className="text-2xl font-extrabold text-gray-900 dark:text-white font-mono">
                          {formatPKR(selectedDevice.ptaTax.cnicTaxPKR)}
                        </div>
                        <p className="text-[11px] text-gray-500 dark:text-zinc-400 leading-normal">
                          Applicable for any Pakistani citizen with a valid Nadra CNIC number.
                        </p>
                      </div>

                    </div>

                    {/* Landed Summary Calculation */}
                    <div className="p-4 rounded-2xl bg-white/90 dark:bg-zinc-900/90 border border-emerald-200 dark:border-emerald-800/40 text-xs text-gray-700 dark:text-zinc-300 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 dark:text-zinc-400">Base Phone Cost:</span>
                        <span className="font-mono font-bold text-gray-900 dark:text-white">{formatPKR(selectedDevice.pricePKR)}</span>
                      </div>
                      <div className="flex justify-between items-center text-emerald-700 dark:text-emerald-400 font-semibold">
                        <span>Passport PTA Duty:</span>
                        <span className="font-mono font-bold">+{formatPKR(selectedDevice.ptaTax.passportTaxPKR)}</span>
                      </div>
                      <div className="pt-2 border-t border-emerald-100 dark:border-emerald-800/40 flex justify-between items-center text-sm font-bold text-gray-900 dark:text-white">
                        <span>Total Landed Smartphone Cost:</span>
                        <span className="font-mono text-emerald-700 dark:text-emerald-400 font-extrabold text-base">
                          {formatPKR(selectedDevice.pricePKR + selectedDevice.ptaTax.passportTaxPKR)}
                        </span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => onSelectPhone(selectedDevice)}
                      className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2"
                    >
                      <span>View Full Specifications for {selectedDevice.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                  </div>
                </div>

              </div>
            ) : (
              /* Custom USD Value Calculation */
              <div className="max-w-2xl mx-auto space-y-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                    Enter Device Invoice Price (USD $):
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="relative flex-1">
                      <span className="absolute left-4 top-3.5 text-gray-500 dark:text-zinc-400 font-bold">$</span>
                      <input
                        type="number"
                        min="1"
                        max="5000"
                        value={customPriceUSD}
                        onChange={(e) => setCustomPriceUSD(Number(e.target.value))}
                        className="w-full bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 text-base font-bold text-gray-900 dark:text-white rounded-xl pl-8 pr-4 py-3 focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-500 shadow-2xs font-mono"
                        placeholder="e.g. 799"
                      />
                    </div>
                    <div className="px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-mono font-bold text-gray-600 dark:text-zinc-300 whitespace-nowrap">
                      ≈ {formatPKR(estimatedDevicePKR)}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                    Registration Document Type:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setDocType('passport')}
                      className={`p-3.5 rounded-2xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                        docType === 'passport'
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-300 shadow-xs'
                          : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-600 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-white/10'
                      }`}
                    >
                      <span>🛂 International Passport (Traveler)</span>
                    </button>
                    <button
                      onClick={() => setDocType('cnic')}
                      className={`p-3.5 rounded-2xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                        docType === 'cnic'
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-300 shadow-xs'
                          : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-600 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-white/10'
                      }`}
                    >
                      <span>🪪 Pakistani CNIC (Resident)</span>
                    </button>
                  </div>
                </div>

                {/* Calculation Result */}
                <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50/60 dark:from-emerald-950/30 dark:to-teal-950/20 border border-emerald-200 dark:border-emerald-800/40 space-y-4">
                  <div className="flex justify-between items-center text-xs text-gray-600 dark:text-zinc-400">
                    <span>Applicable FBR SRO Category:</span>
                    <span className="font-bold text-emerald-800 dark:text-emerald-300 font-mono">
                      {customPriceUSD > 500 ? 'Category 6 (> $500 Flagship SRO)' : customPriceUSD > 350 ? 'Category 5 ($350 - $500 Mid-Tier)' : 'Category 4 (< $350 Entry)'}
                    </span>
                  </div>

                  <div className="py-4 border-y border-emerald-200/80 dark:border-emerald-800/40 flex justify-between items-center">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400 block">
                        Estimated PTA Tax Duty ({docType.toUpperCase()})
                      </span>
                      <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700 dark:text-emerald-400 font-mono mt-1 block">
                        {formatPKR(calculatedTax)}
                      </span>
                    </div>
                    <ShieldCheck className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                  </div>

                  <div className="flex justify-between items-center text-xs font-bold text-gray-900 dark:text-white">
                    <span>Total Landed Smartphone Value (PKR):</span>
                    <span className="font-mono text-emerald-800 dark:text-emerald-300 font-extrabold text-lg">
                      {formatPKR(totalLandedCost)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* OFFICIAL FBR PTA TAX SLABS TABLE */}
        <div className="rounded-3xl bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-2xl overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-base font-bold text-gray-900 dark:text-white font-['Outfit']">
                Official FBR SRO PTA Tax Slabs (Pakistan)
              </h2>
            </div>
            <span className="text-xs font-mono text-gray-500 dark:text-zinc-400">Updated for 2026</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-50/70 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 text-gray-500 dark:text-zinc-400 font-bold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="p-4">Category</th>
                  <th className="p-4">C&F USD Price</th>
                  <th className="p-4">Passport Duty (PKR)</th>
                  <th className="p-4">CNIC Duty (PKR)</th>
                  <th className="p-4">Sales Tax / Regulatory Duty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-white/5 text-gray-700 dark:text-zinc-300 font-medium">
                <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                  <td className="p-4 font-bold text-gray-900 dark:text-white">Slab 1</td>
                  <td className="p-4 font-mono">Up to $30</td>
                  <td className="p-4 font-mono font-bold text-emerald-700 dark:text-emerald-400">₨ 430</td>
                  <td className="p-4 font-mono">₨ 550</td>
                  <td className="p-4 text-gray-500 dark:text-zinc-400">Fixed Duty</td>
                </tr>
                <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                  <td className="p-4 font-bold text-gray-900 dark:text-white">Slab 2</td>
                  <td className="p-4 font-mono">$30 – $100</td>
                  <td className="p-4 font-mono font-bold text-emerald-700 dark:text-emerald-400">₨ 3,200</td>
                  <td className="p-4 font-mono">₨ 4,030</td>
                  <td className="p-4 text-gray-500 dark:text-zinc-400">Fixed Duty + 17% ST</td>
                </tr>
                <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                  <td className="p-4 font-bold text-gray-900 dark:text-white">Slab 3</td>
                  <td className="p-4 font-mono">$100 – $200</td>
                  <td className="p-4 font-mono font-bold text-emerald-700 dark:text-emerald-400">₨ 9,580</td>
                  <td className="p-4 font-mono">₨ 11,560</td>
                  <td className="p-4 text-gray-500 dark:text-zinc-400">Fixed Duty + 17% ST</td>
                </tr>
                <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                  <td className="p-4 font-bold text-gray-900 dark:text-white">Slab 4</td>
                  <td className="p-4 font-mono">$200 – $350</td>
                  <td className="p-4 font-mono font-bold text-emerald-700 dark:text-emerald-400">₨ 40,500</td>
                  <td className="p-4 font-mono">₨ 50,400</td>
                  <td className="p-4 text-gray-500 dark:text-zinc-400">Duty + 17% Sales Tax</td>
                </tr>
                <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5">
                  <td className="p-4 font-bold text-gray-900 dark:text-white">Slab 5</td>
                  <td className="p-4 font-mono">$350 – $500</td>
                  <td className="p-4 font-mono font-bold text-emerald-700 dark:text-emerald-400">₨ 68,900</td>
                  <td className="p-4 font-mono">₨ 84,200</td>
                  <td className="p-4 text-gray-500 dark:text-zinc-400">High Tier Regulatory Duty</td>
                </tr>
                <tr className="bg-emerald-50/30 dark:bg-emerald-950/30 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/50">
                  <td className="p-4 font-bold text-emerald-950 dark:text-emerald-300">Slab 6 (Flagship)</td>
                  <td className="p-4 font-mono font-bold text-emerald-950 dark:text-emerald-300">Above $500</td>
                  <td className="p-4 font-mono font-extrabold text-emerald-700 dark:text-emerald-400">₨ 115,000 – ₨ 165,000+</td>
                  <td className="p-4 font-mono font-extrabold text-gray-900 dark:text-white">₨ 138,000 – ₨ 185,000+</td>
                  <td className="p-4 text-emerald-900 dark:text-emerald-300 font-semibold">25% Sales Tax + Regulatory Duty</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* STEP-BY-STEP PAYMENT GUIDE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold font-mono border dark:border-emerald-800/40">
              01
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white font-['Outfit']">
              Dial *8484# or Visit DIRBS
            </h3>
            <p className="text-xs text-gray-500 dark:text-zinc-400 leading-relaxed">
              Dial <code className="font-mono font-bold text-emerald-700 dark:text-emerald-400">*8484#</code> from any mobile in Pakistan or visit <code className="font-mono text-emerald-700 dark:text-emerald-400">dirbs.pta.gov.pk</code>. Select "Register Mobile Device" and enter your 15-digit IMEI.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold font-mono border dark:border-teal-800/40">
              02
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white font-['Outfit']">
              Generate 17-digit PSID
            </h3>
            <p className="text-xs text-gray-500 dark:text-zinc-400 leading-relaxed">
              FBR will generate a unique 17-digit Payment Slip Identifier (PSID) code and send it via SMS with the exact amount payable.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold font-mono border dark:border-emerald-800/40">
              03
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white font-['Outfit']">
              Pay via 1Link Banking App
            </h3>
            <p className="text-xs text-gray-500 dark:text-zinc-400 leading-relaxed">
              Open your banking app (Meezan, HBL, Allied, JazzCash, Easypaisa), navigate to 1Bill / FBR Tax Payment, enter the PSID, and confirm payment. Phone activates within 24 hours.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
