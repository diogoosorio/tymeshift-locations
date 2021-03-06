import { Location } from '../../types';

interface FetchLocationsResult {
  loading: boolean;
  error?: Error;
  locations?: Location[];
  refetch: () => void;
}

interface LocationListContentProps extends FetchLocationsResult{
  setLocationId: (id: string) => void;
  views: Record<string, number>;
}

export type { FetchLocationsResult, LocationListContentProps };
