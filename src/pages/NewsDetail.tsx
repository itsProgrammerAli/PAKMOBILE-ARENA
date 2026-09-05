import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Check, 
  Tag, 
  ChevronRight, 
  ShieldCheck, 
  Flame, 
  ExternalLink,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Calculator,
  Scale
} from 'lucide-react';
import { NewsArticle } from '../types';
import { getNewsArticleBySlug, getRelatedNews, NEWS_DATA } from '../data/news';

interface NewsDetailProps {
  onNavigateToHome?: () => void;
  onNavigateToPta?: () => void;
  onNavigateToCompare?: () => void;
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80';

export const NewsDetail: React.FC<NewsDetailProps> = ({
  onNavigateToHome,
  onNavigateToPta,
  onNavigateToCompare
}) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);

  // Retrieve the article
  const article: NewsArticle | undefined = slug ? getNewsArticleBySlug(slug) : undefined;
  const relatedArticles: NewsArticle[] = slug ? getRelatedNews(slug, 2) : [];

  // Scroll to top upon page load or slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setImageError(false);
  }, [slug]);

  const handleShare = () => {
    const url = typeof window !== 'undefined' ? window.location.href : `https://pakmobilearena.online/news/${slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }).catch(() => {
        // Fallback
      });
    }
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'PTA & Taxes':
        return 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/60';
      case 'Market Trends':
        return 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60';
      case 'Telecom':
        return 'bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800/60';
      case 'Hardware & Tech':
        return 'bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800/60';
      case 'Consumer Guide':
        return 'bg-teal-100 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border-teal-200 dark:border-teal-800/60';
      default:
        return 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60';
    }
  };

  // If article not found, render 404 state
  if (!article) {
    return (
      <div className="w-full bg-gray-50 dark:bg-zinc-950 min-h-[75vh] py-16 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white font-['Outfit']">
            Article Not Found
          </h1>
          <p className="text-sm text-gray-600 dark:text-zinc-400">
            The requested market update or editorial could not be located. It may have been relocated or updated.
          </p>
          <div className="pt-2">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-xl transition-all shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All News</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const primaryImage = imageError ? FALLBACK_IMAGE : (article.imageUrl || article.image || FALLBACK_IMAGE);

  return (
    <article className="w-full bg-gray-50 dark:bg-zinc-950 min-h-screen py-6 sm:py-10 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4 md:space-y-8">
        
        {/* ========================================================================= */}
        {/* BREADCRUMBS & NAVIGATION                                                 */}
        {/* ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-zinc-400">
            <Link 
              to="/" 
              onClick={(e) => {
                if (onNavigateToHome) {
                  e.preventDefault();
                  onNavigateToHome();
                  navigate('/');
                }
              }}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link 
              to="/news" 
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
            >
              News
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-800 dark:text-zinc-200 font-semibold truncate max-w-[200px] sm:max-w-xs">
              {article.category}
            </span>
          </nav>

          <Link
            to="/news"
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs sm:text-sm font-bold text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors shadow-2xs group"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to All News</span>
          </Link>
        </div>

        {/* ========================================================================= */}
        {/* ARTICLE HERO HEADER                                                      */}
        {/* ========================================================================= */}
        <header className="space-y-4 mt-3 mb-2 md:my-0">
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 mt-2 mb-4 md:mt-0 md:mb-0">
            <span className={`px-3 py-1 rounded-lg text-xs font-bold border shadow-2xs ${getCategoryBadgeClass(article.category)}`}>
              {article.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Published {article.date}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-gray-900 dark:text-white font-['Outfit'] tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-b border-gray-200 dark:border-zinc-800 pb-4">
            <div className="text-xs sm:text-sm text-gray-600 dark:text-zinc-400">
              {article.author ? (
                <span>By <strong className="text-gray-900 dark:text-zinc-200 font-semibold">{article.author}</strong></span>
              ) : (
                <span>By <strong className="text-gray-900 dark:text-zinc-200 font-semibold">PakMobile Arena Editorial Team</strong></span>
              )}
            </div>

            <button
              id="share-article-btn"
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-bold text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shadow-2xs"
              title="Copy share link"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Share Article</span>
                </>
              )}
            </button>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* HERO IMAGE                                                               */}
        {/* ========================================================================= */}
        <div className="relative w-full h-64 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-lg">
          <img
            src={primaryImage}
            alt={article.title}
            onError={(e) => {
              setImageError(true);
              e.currentTarget.src = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80";
            }}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 text-white/90 text-xs font-medium backdrop-blur-xs px-3 py-1.5 rounded-lg bg-black/40 w-fit">
            <span>Special Report • PakMobile Arena Research</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* EXECUTIVE SUMMARY CALLOUT                                                */}
        {/* ========================================================================= */}
        <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider mb-2">
            <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Executive Summary</span>
          </div>
          <p className="text-sm sm:text-base font-medium text-emerald-950 dark:text-emerald-100 leading-relaxed italic">
            "{article.summary}"
          </p>
        </div>

        {/* ========================================================================= */}
        {/* LONG-FORM BODY CONTENT (Structured Headings & Paragraphs)               */}
        {/* ========================================================================= */}
        <div className="space-y-8 text-gray-800 dark:text-zinc-200">
          {article.content.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white font-['Outfit'] tracking-tight flex items-center gap-2.5">
                <span className="w-1.5 h-5 bg-emerald-600 dark:bg-emerald-500 rounded-full inline-block" />
                <span>{section.heading}</span>
              </h2>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-zinc-300">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* PAKISTAN MARKET TAKEAWAY BOX (Emerald Accent)                             */}
        {/* ========================================================================= */}
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border-l-4 border-l-emerald-600 border border-gray-200 dark:border-zinc-800 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
            <ShieldCheck className="w-5 h-5" />
            <span>Pakistan Market Takeaway for Buyers & Retailers</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-zinc-300 leading-relaxed">
            Always verify smartphone IMEI authenticity via PTA DIRBS (SMS 8484 or official website) prior to finalizing purchase in wholesale centers like Hafeez Centre, Hall Road, or Saddar Karachi. Ensure physical warranty cards bear authenticated local distributor holograms (Airlink, Mercantile, M&P, Carlcare).
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {onNavigateToPta && (
              <button
                onClick={onNavigateToPta}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Check Official PTA Tax Slabs</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
            {onNavigateToCompare && (
              <button
                onClick={onNavigateToCompare}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-200 cursor-pointer"
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Compare Specs with Other Models</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TOPICS / TAGS                                                            */}
        {/* ========================================================================= */}
        {article.tags && article.tags.length > 0 && (
          <div className="pt-4 border-t border-gray-200 dark:border-zinc-800 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider">
              <Tag className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Related Subjects</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-xl text-xs font-semibold bg-white dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 border border-gray-200 dark:border-zinc-800 shadow-2xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* BOTTOM NAVIGATION / BACK BUTTON                                          */}
        {/* ========================================================================= */}
        <div className="pt-6 border-t border-gray-200 dark:border-zinc-800 flex items-center justify-between">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Back to All News</span>
          </Link>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-4 py-2 text-xs font-semibold text-gray-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
          >
            Back to Top ↑
          </button>
        </div>

        {/* ========================================================================= */}
        {/* RELATED NEWS RECOMMENDATION SECTION                                      */}
        {/* ========================================================================= */}
        {relatedArticles.length > 0 && (
          <section className="pt-10 border-t border-gray-200 dark:border-zinc-800 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white font-['Outfit']">
                  Related Stories & Analysis
                </h3>
                <p className="text-xs text-gray-500 dark:text-zinc-400 mt-0.5">
                  Keep exploring Pakistan's tech landscape
                </p>
              </div>
              <Link
                to="/news"
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 inline-flex items-center gap-1"
              >
                <span>View all</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/news/${rel.slug}`}
                  className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-zinc-800 shadow-2xs hover:shadow-md transition-all group flex flex-col justify-between hover:-translate-y-1 duration-200"
                >
                  <div>
                    <div className="h-40 w-full overflow-hidden bg-zinc-900 relative">
                      <img
                        src={rel.imageUrl || rel.image || FALLBACK_IMAGE}
                        alt={rel.title}
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80";
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <span className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-lg text-[10px] font-bold border backdrop-blur-md bg-white/90 dark:bg-zinc-900/90 ${getCategoryBadgeClass(rel.category)}`}>
                        {rel.category}
                      </span>
                    </div>

                    <div className="p-4 space-y-2">
                      <div className="flex items-center gap-3 text-[11px] text-gray-500 dark:text-zinc-400">
                        <span>{rel.date}</span>
                        <span>•</span>
                        <span>{rel.readTime}</span>
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white font-['Outfit'] line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-zinc-400 line-clamp-2">
                        {rel.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0 text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>
    </article>
  );
};

export default NewsDetail;
