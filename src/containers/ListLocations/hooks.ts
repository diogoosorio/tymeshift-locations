import { useState, useEffect, useCallback } from 'react';
import { fetchLocations } from '../../services/locations';

import { Location } from '../../types';
import { ExecutionResult } from './types';

const useFetchLocations = (): ExecutionResult<ReadonlyArray<Location>> => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  const [data, setData] = useState<ReadonlyArray<Location>>([]);
  const [refetch, setRefetch] = useState<boolean>(false);

  const triggerRefetch = useCallback(() => {
    if (!loading) {
      setRefetch(true);
    }
  }, [loading]);

  useEffect(() => {
    setRefetch(false);
    setLoading(true);
    setError(undefined);

    fetchLocations()
      .then((locations) => setData(locations))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [refetch]);

  return {
    loading,
    error,
    data,
    refetch: triggerRefetch,
  };
};

export { useFetchLocations };
