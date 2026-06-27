import { useEffect, useState } from 'react';
import { DataLemurService } from '../core/CsvService';
import type { DataLemurStats } from '../core/CsvService';

interface UseDataLemurResult {
  stats: DataLemurStats;
  loading: boolean;
  error: string | null;
}

/**
 * Fetches the DataLemur tracking CSV and tallies it. Falls back to a
 * configured static total when the CSV can't be reached (private
 * repo, offline, CORS, …) so the section never renders broken.
 */
export function useDataLemur(csvUrl: string, fallbackTotal: number): UseDataLemurResult {
  const [stats, setStats] = useState<DataLemurStats>({
    total: fallbackTotal,
    byDifficulty: [],
    live: false,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const service = new DataLemurService(csvUrl);
    service
      .fetchStats()
      .then((result) => {
        if (!cancelled) setStats(result);
      })
      .catch((err: unknown) => {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Unknown error');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [csvUrl, fallbackTotal]);

  return { stats, loading, error };
}
