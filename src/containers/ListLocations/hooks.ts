import { useState, useEffect, useCallback } from 'react';
import { fetchLocations } from '../../services/locations';

import { Location } from '../../types';
import { FetchLocationsResult } from './types';

const useFetchLocations = (): FetchLocationsResult => {
  const [loading, setLoading] = useState<'initial' | 'loading' | 'none'>('initial');
  const [error, setError] = useState<Error>();
  const [locations, setLocations] = useState<Location[]>([]);

  const loadLocations = useCallback(() => {
    setLoading('loading');
    setError(undefined);
    setLocations([]);

    fetchLocations()
      .then((response) => setLocations([...response]))
      .catch((err) => setError(err))
      .finally(() => setLoading('none'));
  }, []);

  const reloadLocations = useCallback(() => {
    if (loading === 'none') {
      loadLocations();
    }
  }, [loadLocations, loading]);

  useEffect(() => loadLocations(), [loadLocations]);

  return {
    loading: loading !== 'none',
    error,
    locations,
    refetch: reloadLocations,
  };
};

export { useFetchLocations };
