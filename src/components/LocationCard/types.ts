import { Location } from '../../types';

interface LocationCardProps {
  className?: string;
  onClick?: () => void;
  loading?: boolean;
  location: Location;
}

export type { LocationCardProps };
