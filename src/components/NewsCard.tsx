import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Share2, Check } from 'lucide-react';
import { NewsArticle } from '../types';

interface NewsCardProps {
  article: NewsArticle;
  onShare?: (e: React.MouseEvent, article: NewsArticle) => void;
  copied?: boolean;
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80';

export const getCategoryBadgeClass = (category: string) => {
  switch (category) {
    case 'PTA & Taxes':
      return 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/60';
    case 'Market Trends':
      return 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60';
    case 'Telecom':
    case 'Telecom & 5G':
      return 'bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800/60';
    case 'Policy & Telecom':
      return 'bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 border-sky-200 dark:border-sky-800/60';
    case 'Local Market':
      return 'bg-orange-100 dark:bg-orange-950/60 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-800/60';
    case 'Global Tech':
      return 'bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/60';
    case 'Hardware & Tech':
      return 'bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800/60';
    case 'Consumer Guide':
      return 'bg-teal-100 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border-teal-200 dark:border-teal-800/60';
    default:
      return 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60';
  }
};

export const NewsCard: React.FC<NewsCardProps> = ({
  article,
  onShare,
  copied = false,
}) => {
  return (
    <Link
      to={`/news/${article.slug || article.id}`}
      className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-zinc-800 shadow-2xs hover:shadow-xl transition-all flex flex-col justify-between group hover:-translate-y-1 duration-200 cursor-pointer"
    >
      <div>
        {/* Featured Thumbnail with Category Pill */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-900">
          <img
            src={article.imageUrl || article.image || FALLBACK_IMAGE}
            alt={article.title}
            onError={(e) => {
              e.currentTarget.src = FALLBACK_IMAGE;
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

          {onShare && (
            <button
              onClick={(e) => onShare(e, article)}
              aria-label={`Share ${article.title}`}
              className="absolute top-3 right-3 p-2 rounded-lg bg-black/50 hover:bg-black/80 text-white backdrop-blur-xs transition-colors cursor-pointer"
              title="Share link"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Share2 className="w-3.5 h-3.5" />
              )}
            </button>
          )}
        </div>

        {/* Article Card Body */}
        <div className="p-5 sm:p-6 space-y-3">
          <div className="flex items-center text-xs text-gray-500 dark:text-zinc-400 font-medium">
            <div className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{article.date}</span>
            </div>
          </div>

          <h2 className="text-base sm:text-lg font-black text-gray-900 dark:text-white font-['Outfit'] tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug mt-3 mb-2">
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
  );
};

export default NewsCard;
