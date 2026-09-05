import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Newspaper, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Flame, 
  Calculator,
  Scale,
  Search,
  Check,
  Share2
} from 'lucide-react';
import { NewsArticle } from '../types';
import { NEWS_DATA, getSortedNews, getNewsCategories } from '../data/news';

interface NewsPageProps {
  onNavigateToHome?: () => void;
  onNavigateToPta?: () => void;
  onNavigateToCompare?: () => void;
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80';

export const NewsPage: React.FC<NewsPageProps> = ({
  onNavigateToHome,
  onNavigateToPta,
  onNavigateToCompare
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  // Strictly sorted descending by ISO date (newest on top)
  const sortedArticles = useMemo(() => {
    return getSortedNews(NEWS_DATA);
  }, []);

  const categories = useMemo(() => {
    return getNewsCategories();
  }, []);

  // Filtered list based on active category & optional search
  const filteredArticles = useMemo(() => {
    return sortedArticles.filter((article) => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch = !searchQuery.trim() || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (article.tags && article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [sortedArticles, selectedCategory, searchQuery]);

  const handleShare = (e: React.MouseEvent, article: NewsArticle) => {
    e.preventDefault();
    e.stopPropagation();
    const url = typeof window !== 'undefined' ? `${window.location.origin}/news/${article.slug}` : `https://pakmobilearena.online/news/${article.slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setCopiedSlug(article.slug);
        setTimeout(() => setCopiedSlug(null), 2500);
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

  return (
    <div className="w-full bg-gray-50 dark:bg-zinc-950 min-h-screen py-6 sm:py-10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* ========================================================================= */}
        {/* HEADER SECTION                                                           */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Market Intelligence & Updates</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white font-['Outfit'] tracking-tight">
            Pakistan Mobile News & <span className="text-emerald-600 dark:text-emerald-500">Market Insights</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-600 dark:text-zinc-400 leading-relaxed font-normal">
            Real-time regulatory updates on PTA taxes, domestic assembly figures, carrier 5G frameworks, and retail price movements across Karachi, Lahore, and Islamabad.
          </p>

          {/* Search bar */}
          <div className="pt-2 max-w-md mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search topics, FBR tax, 5G, or chipsets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-zinc-200"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CATEGORY FILTER PILLS                                                    */}
        {/* ========================================================================= */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20 font-bold scale-[1.02]'
                    : 'bg-white dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 border border-gray-200 dark:border-zinc-800'
                }`}
              >
                {cat === 'All' && <BookOpen className="w-3.5 h-3.5" />}
                {cat === 'PTA & Taxes' && <Calculator className="w-3.5 h-3.5" />}
                {cat === 'Market Trends' && <Flame className="w-3.5 h-3.5" />}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* RESPONSIVE ARTICLES GRID (1 col mobile, 2 col tablet, 3 col desktop)     */}
        {/* Every card is wrapped in a React Router <Link to={`/news/${article.slug}`}> */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              to={`/news/${article.slug}`}
              className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-zinc-800 shadow-2xs hover:shadow-xl transition-all flex flex-col justify-between group hover:-translate-y-1 duration-200 cursor-pointer"
            >
              <div>
                {/* Featured Thumbnail with Category Pill */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={article.imageUrl || article.image || FALLBACK_IMAGE}
                    alt={article.title}
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80";
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border backdrop-blur-md bg-white/95 dark:bg-zinc-900/95 shadow-xs ${getCategoryBadgeClass(article.category)}`}>
                      {article.category}
                    </span>
                  </div>

                  <button
                    onClick={(e) => handleShare(e, article)}
                    aria-label={`Share ${article.title}`}
                    className="absolute top-3 right-3 p-2 rounded-lg bg-black/50 hover:bg-black/80 text-white backdrop-blur-xs transition-colors"
                    title="Share link"
                  >
                    {copiedSlug === article.slug ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Share2 className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Article Card Body */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-zinc-400 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-base sm:text-lg font-black text-gray-900 dark:text-white font-['Outfit'] tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                    {article.title}
                  </h2>

                  {/* 2-line teaser */}
                  <p className="text-xs sm:text-[13px] text-gray-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer: Clear "Read Full Article ->" */}
              <div className="p-5 sm:p-6 pt-0 border-t border-gray-100 dark:border-zinc-800/80 mt-2 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 pt-3">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                
                <span className="text-[11px] text-gray-400 font-medium pt-3">
                  {article.tags?.[0] ? `#${article.tags[0]}` : ''}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State if search finds no matches */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 p-8 space-y-3">
            <Newspaper className="w-12 h-12 text-gray-400 mx-auto" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">No updates matched your criteria</h3>
            <p className="text-sm text-gray-500 dark:text-zinc-400">
              Try adjusting your search terms or select another category filter above.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-2 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* QUICK HUB CROSS-PROMOTION BANNER                                          */}
        {/* ========================================================================= */}
        <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
              <Calculator className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Smart Buyer Verification</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white font-['Outfit']">
              Planning to import or buy a new phone?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-zinc-300 max-w-xl">
              Calculate exact FBR DIRBS custom duties on Passport or CNIC, or compare any two models side-by-side with official Pakistan market prices.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {onNavigateToPta && (
              <button
                onClick={onNavigateToPta}
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <Calculator className="w-4 h-4" />
                <span>PTA Calculator</span>
              </button>
            )}
            {onNavigateToCompare && (
              <button
                onClick={onNavigateToCompare}
                className="px-4 py-2.5 bg-white dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 text-gray-800 dark:text-zinc-200 border border-gray-200 dark:border-zinc-700 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <Scale className="w-4 h-4 text-emerald-600" />
                <span>Compare Specs</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewsPage;
