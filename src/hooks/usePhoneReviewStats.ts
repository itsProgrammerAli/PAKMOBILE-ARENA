import { useState, useEffect, useCallback } from 'react';
import { PhoneSpec, UserReview } from '../types';

export function getPhoneReviewsFromStorage(phoneId: string): UserReview[] {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem(`reviews_${phoneId}`);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {
    // Ignore error
  }
  return [];
}

export function calculatePhoneRating(phone: PhoneSpec, userReviews: UserReview[]) {
  const userCount = userReviews.length;
  const totalCount = phone.reviewCount + userCount;

  if (totalCount === 0) {
    return {
      rating: 0,
      ratingDisplay: '0.0',
      totalReviews: 0,
      hasReviews: false,
    };
  }

  let avgRating = 0;
  const userSum = userReviews.reduce((sum, r) => sum + (Number(r.rating) || 0), 0);

  if (phone.reviewCount === 0 && userCount > 0) {
    avgRating = userSum / userCount;
  } else if (userCount === 0) {
    avgRating = phone.rating;
  } else {
    const initialSum = phone.rating * phone.reviewCount;
    avgRating = (initialSum + userSum) / totalCount;
  }

  return {
    rating: avgRating,
    ratingDisplay: avgRating.toFixed(1),
    totalReviews: totalCount,
    hasReviews: totalCount > 0 && avgRating > 0,
  };
}

export function getEffectivePhoneRating(phone: PhoneSpec): number {
  const reviews = getPhoneReviewsFromStorage(phone.id);
  const stats = calculatePhoneRating(phone, reviews);
  return stats.rating;
}

export function usePhoneReviewStats(phone: PhoneSpec) {
  const [reviews, setReviews] = useState<UserReview[]>(() =>
    getPhoneReviewsFromStorage(phone.id)
  );

  const refreshReviews = useCallback(() => {
    setReviews(getPhoneReviewsFromStorage(phone.id));
  }, [phone.id]);

  useEffect(() => {
    refreshReviews();

    const handleStorage = (e: StorageEvent) => {
      if (e.key === `reviews_${phone.id}` || !e.key) {
        refreshReviews();
      }
    };

    const handleCustomUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<{ phoneId?: string }>;
      if (!customEvent.detail || customEvent.detail.phoneId === phone.id || !customEvent.detail.phoneId) {
        refreshReviews();
      }
    };

    window.addEventListener('storage', handleStorage);
    window.addEventListener('phone-review-updated', handleCustomUpdate);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('phone-review-updated', handleCustomUpdate);
    };
  }, [phone.id, refreshReviews]);

  const stats = calculatePhoneRating(phone, reviews);

  return {
    reviews,
    ...stats,
    refreshReviews,
  };
}
