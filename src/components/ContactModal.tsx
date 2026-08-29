import React, { useState, useEffect } from 'react';
import { 
  X, 
  Mail, 
  CheckCircle2, 
  Send, 
  AlertCircle,
  Building2,
  Clock,
  Loader2
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('General Inquiry');
  const [message, setMessage] = useState('');

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

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
          name: name.trim(),
          email: email.trim(),
          category: category,
          message: message.trim()
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
        setCategory('General Inquiry');
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

  if (!isOpen) return null;

  return (
    <div 
      id="contact-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        id="contact-modal-dialog"
        className="w-full max-w-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-gray-200 dark:border-white/10 flex items-center justify-between bg-gray-50/70 dark:bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white font-['Outfit']">
                Contact Support & Feedback
              </h2>
              <span className="text-xs text-gray-500 dark:text-zinc-400">
                Get in touch with our team in Dera Ismail Khan, Pakistan
              </span>
            </div>
          </div>

          <button
            id="close-contact-modal-btn"
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-gray-700 dark:text-zinc-300 leading-relaxed">
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
            <form onSubmit={handleSubmit} className="space-y-4">
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-zinc-800/80 border border-gray-200 dark:border-white/10 text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 dark:text-zinc-300 block mb-1">
                  Inquiry Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
