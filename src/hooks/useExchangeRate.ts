import { useState, useEffect } from 'react';

const FALLBACK_PKR_RATE = 278.50;
const CACHE_KEY = 'pakmobile_usd_pkr_rate';
const CACHE_TIME_KEY = 'pakmobile_usd_pkr_timestamp';
const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 hour session cache

let memoryCachedRate: number | null = null;

export function useExchangeRate(): {
  liveRate: number;
  loading: boolean;
  error: string | null;
} {
  const [liveRate, setLiveRate] = useState<number>(() => {
    if (memoryCachedRate) return memoryCachedRate;
    if (typeof window !== 'undefined') {
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        const cachedTime = sessionStorage.getItem(CACHE_TIME_KEY);
        if (cached && cachedTime) {
          const age = Date.now() - parseInt(cachedTime, 10);
          if (age < CACHE_DURATION_MS) {
            const parsed = parseFloat(cached);
            if (!isNaN(parsed) && parsed > 0) {
              memoryCachedRate = parsed;
              return parsed;
            }
          }
        }
      } catch {
        // Ignore storage read errors
      }
    }
    return FALLBACK_PKR_RATE;
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    // Check if session cache is fresh
    if (typeof window !== 'undefined') {
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        const cachedTime = sessionStorage.getItem(CACHE_TIME_KEY);
        if (cached && cachedTime) {
          const age = Date.now() - parseInt(cachedTime, 10);
          if (age < CACHE_DURATION_MS) {
            const parsed = parseFloat(cached);
            if (!isNaN(parsed) && parsed > 0) {
              setLiveRate(parsed);
              return;
            }
          }
        }
      } catch {
        // Continue to fetch
      }
    }

    async function fetchRate() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://open.er-api.com/v6/latest/USD');
        if (!response.ok) {
          throw new Error(`Exchange rate HTTP error: ${response.status}`);
        }
        const data = await response.json();
        const pkr = data?.rates?.PKR;

        if (typeof pkr === 'number' && pkr > 0) {
          if (isMounted) {
            setLiveRate(pkr);
            memoryCachedRate = pkr;
          }
          try {
            sessionStorage.setItem(CACHE_KEY, pkr.toString());
            sessionStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
          } catch {
            // Storage quota or privacy restriction
          }
        } else {
          throw new Error('PKR rate not present in API response');
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err?.message || 'Failed to fetch exchange rate');
          // Keep existing rate or fallback
          if (!memoryCachedRate) {
            setLiveRate(FALLBACK_PKR_RATE);
          }
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchRate();

    return () => {
      isMounted = false;
    };
  }, []);

  return { liveRate, loading, error };
}
