import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  FileText, 
  Mail, 
  Info, 
  CheckCircle2, 
  Send, 
  AlertCircle,
  Building2,
  Lock,
  Globe2,
  Clock,
  Sparkles,
  Loader2
} from 'lucide-react';

export type LegalModalType = 'privacy' | 'terms' | 'contact' | 'about' | null;

interface LegalModalsProps {
  activeModal: LegalModalType;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose }) => {
  // Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactCategory, setContactCategory] = useState('General Inquiry');
  const [contactMessage, setContactMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeModal) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://formspree.io/f/xwlkpeea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: contactName.trim(),
          email: contactEmail.trim(),
          category: contactCategory,
          message: contactMessage.trim()
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setContactName('');
        setContactEmail('');
        setContactMessage('');
        setContactCategory('General Inquiry');
      } else {
        const data = await response.json().catch(() => ({}));
        if (data && data.errors && data.errors.length > 0) {
          setErrorMessage(data.errors.map((err: { message: string }) => err.message).join(', '));
        } else {
          setErrorMessage('Failed to send message. Please try again or email us directly.');
        }
      }
    } catch (err) {
      setErrorMessage('Failed to send message. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!activeModal) return null;

  return (
    <div 
      id="legal-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        id="legal-modal-dialog"
        className="w-full max-w-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-gray-200 dark:border-white/10 flex items-center justify-between bg-gray-50/70 dark:bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center flex-shrink-0">
              {activeModal === 'privacy' && <Lock className="w-5 h-5" />}
              {activeModal === 'terms' && <FileText className="w-5 h-5" />}
              {activeModal === 'contact' && <Mail className="w-5 h-5" />}
              {activeModal === 'about' && <Info className="w-5 h-5" />}
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white font-['Outfit']">
                {activeModal === 'privacy' && 'Privacy Policy & Data Protection'}
                {activeModal === 'terms' && 'Terms of Service & Usage Agreement'}
                {activeModal === 'contact' && 'Contact Support & Feedback'}
                {activeModal === 'about' && 'About PakMobile Arena & Disclaimer'}
              </h2>
              <span className="text-xs text-gray-500 dark:text-zinc-400">
                {activeModal === 'privacy' && 'Official Pakistan Data Protection Guidelines (Updated 2026)'}
                {activeModal === 'terms' && 'Standard Consumer Platform Terms & Conditions'}
                {activeModal === 'contact' && 'Get in touch with our team in Dera Ismail Khan, Pakistan'}
                {activeModal === 'about' && 'Pakistan\'s Premier Smartphone Specs & Live Price Tracker'}
              </span>
            </div>
          </div>

          <button
            id="close-legal-modal-btn"
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-gray-700 dark:text-zinc-300 leading-relaxed">
          
          {/* ========================================================================= */}
          {/* 1. PRIVACY POLICY                                                         */}
          {/* ========================================================================= */}
          {activeModal === 'privacy' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-emerald-900 dark:text-emerald-200 block text-xs">
                    Your Privacy is Paramount
                  </span>
                  <p className="text-xs text-emerald-950 dark:text-emerald-300">
                    PakMobile Arena operates in strict adherence to international and Pakistani digital consumer privacy standards. We do not sell, monetize, or harvest personal user telemetry.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>1. Information We Collect</span>
                </h3>
                <p>
                  We only process data that you voluntarily provide to our platform:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-zinc-400">
                  <li><strong>User Reviews & Ratings:</strong> Name/nickname, city in Pakistan, star score, and written experience.</li>
                  <li><strong>Support Inquiries:</strong> Name, email address, and message content submitted via our contact form.</li>
                  <li><strong>Local Preferences:</strong> Theme selection (Light/Dark mode) and comparison dock device IDs stored securely in your browser's LocalStorage.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>2. Cookies & Local Storage</span>
                </h3>
                <p>
                  We utilize standard client-side browser storage exclusively to enhance your active browsing session. We do not employ third-party tracking cookies or cross-site advertising beacons.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>3. Data Security & Retention</span>
                </h3>
                <p>
                  All review submissions and contact queries are transmitted over encrypted TLS 1.3 channels. You may clear your locally stored reviews and device preferences at any time by resetting your browser cookies.
                </p>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* 2. TERMS OF SERVICE                                                       */}
          {/* ========================================================================= */}
          {activeModal === 'terms' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-start gap-3">
                <FileText className="w-5 h-5 text-gray-600 dark:text-zinc-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-gray-900 dark:text-white block text-xs">
                    Platform Usage Agreement
                  </span>
                  <p className="text-xs text-gray-600 dark:text-zinc-400">
                    By accessing PakMobile Arena, you acknowledge and agree to the following terms regarding smartphone pricing, technical specifications, and PTA DIRBS compliance.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>1. Accurate Price Data Usage & Market Volatility</span>
                </h3>
                <p>
                  PakMobile Arena aggregates and estimates market prices across authorized retailers (PriceOye, Daraz Mall, Official Brand Flagship Stores) and major wholesale tech markets (Hafeez Centre Lahore, Saddar Karachi, Blue Area Islamabad).
                </p>
                <p className="text-gray-500 dark:text-zinc-400 text-xs">
                  * Due to daily fluctuations in the USD / PKR foreign exchange rate and local distributor inventory levels, physical retail shop prices may vary slightly from online estimates.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>2. Official PTA Tax & Customs Duty Disclaimer</span>
                </h3>
                <p>
                  PTA passport and CNIC registration duties displayed in our calculator reflect official Statutory Regulatory Orders (SROs) published by the Federal Board of Revenue (FBR) and Pakistan Telecommunication Authority (PTA).
                </p>
                <p>
                  Final tax calculation for unregistered imported devices is determined by the official PTA DIRBS system at the time of PSID generation.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>3. Intellectual Property Rights</span>
                </h3>
                <p>
                  All brand logos, smartphone model names, hardware designs, and trademarks (e.g., Samsung, Tecno, Apple, Xiaomi, Infinix) belong to their respective corporate owners and are utilized here strictly for identification and editorial evaluation purposes.
                </p>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* 3. CONTACT US FORM                                                        */}
          {/* ========================================================================= */}
          {activeModal === 'contact' && (
            <div className="space-y-6">
              {isSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-700/60 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-emerald-950 dark:text-white font-['Outfit']">
                    Thank you! Your message has been received.
                  </h3>
                  <p className="text-xs text-emerald-900 dark:text-emerald-200 max-w-md mx-auto">
                    We will get back to you shortly. Our support team in Dera Ismail Khan monitors inquiries continuously.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <p className="text-xs text-gray-500 dark:text-zinc-400">
                    Have a price update from your local city, a smartphone suggestion, or a business inquiry? Fill out the form below and our team will get back to you promptly.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 dark:text-zinc-300 block mb-1">
                        Full Name *
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. Asad Ullah"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-zinc-800/80 border border-gray-200 dark:border-white/10 text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-700 dark:text-zinc-300 block mb-1">
                        Email Address *
                      </label>
                      <input 
                        type="email"
                        required
                        placeholder="e.g. asad@gmail.com"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-zinc-800/80 border border-gray-200 dark:border-white/10 text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-700 dark:text-zinc-300 block mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={contactCategory}
                      onChange={(e) => setContactCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-zinc-800/80 border border-gray-200 dark:border-white/10 text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white cursor-pointer"
                    >
                      <option value="General Inquiry">General Consumer Inquiry</option>
                      <option value="Price Correction">Local Market Price Correction / Tip</option>
                      <option value="PTA SRO Update">PTA Tax / SRO Rate Update</option>
                      <option value="Device Request">Request a New Smartphone Addition</option>
                      <option value="Business Partnership">Advertising & Commercial Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-700 dark:text-zinc-300 block mb-1">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please provide specifics regarding the device, market shop location, or inquiry details..."
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-zinc-800/80 border border-gray-200 dark:border-white/10 text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800/60 text-rose-800 dark:text-rose-200 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
                      <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                    <div className="flex items-center gap-2 text-[11px] text-gray-500 dark:text-zinc-400">
                      <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Average response time: &lt; 24 business hours</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {/* Direct Support Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-gray-200 dark:border-white/10">
                <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center gap-3">
                  <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-gray-400 dark:text-zinc-500 uppercase block font-bold">Office Location</span>
                    <span className="text-xs font-bold text-gray-800 dark:text-zinc-200">Dera Ismail Khan, Pakistan</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center gap-3">
                  <Mail className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-gray-400 dark:text-zinc-500 uppercase block font-bold">Official Support Email</span>
                    <a 
                      href="mailto:itsprogrammerali@gmail.com" 
                      className="text-xs font-bold text-gray-900 dark:text-white hover:underline break-all"
                    >
                      itsprogrammerali@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* 4. ABOUT US & DISCLAIMER                                                  */}
          {/* ========================================================================= */}
          {activeModal === 'about' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/20 border border-emerald-200 dark:border-emerald-800/50 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-emerald-900 dark:text-emerald-200 block text-xs">
                    Pakistan's Trusted Smartphone Portal
                  </span>
                  <p className="text-xs text-emerald-950 dark:text-emerald-300">
                    PakMobile Arena was established to bring total price clarity, hardware benchmarking, and verified PTA registration guidance to mobile phone buyers across Pakistan.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>How We Aggregate Pakistani Market Prices</span>
                </h3>
                <p>
                  Our data intelligence engine continuously tracks authorized e-commerce stores (such as PriceOye and Daraz Mall) along with daily wholesale market reports from major tech hubs including:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-xs text-gray-700 dark:text-zinc-300 font-medium">
                  <li className="p-2 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">📍 Hafeez Centre & Hall Road, Lahore</li>
                  <li className="p-2 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">📍 Saddar & Star City Mall, Karachi</li>
                  <li className="p-2 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">📍 Blue Area & Singapore Plaza, Islamabad</li>
                  <li className="p-2 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">📍 Karkhano Market & Saddar, Peshawar</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>PTA DIRBS Compliance & Public Service Notice</span>
                </h3>
                <p>
                  We support the Pakistan Telecommunication Authority's Device Identification, Registration and Blocking System (DIRBS). Always ensure you purchase officially approved devices or calculate exact customs duties before importing international devices into Pakistan.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-amber-900 dark:text-amber-300 text-xs space-y-1">
                <span className="font-bold block">Editorial Independence Notice</span>
                <p>
                  PakMobile Arena maintains complete editorial autonomy. We do not accept payment to artificially elevate phone ratings or manipulate benchmark scores. All device pros/cons are objectively generated from technical specifications and verified user reviews.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-gray-200 dark:border-white/10 flex items-center justify-between bg-gray-50/50 dark:bg-white/[0.02] text-xs">
          <span className="text-gray-500 dark:text-zinc-500 font-mono text-[11px]">
            © 2026 PakMobile Arena Pakistan
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-zinc-900 font-bold hover:bg-gray-800 dark:hover:bg-zinc-100 transition-colors shadow-2xs cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
