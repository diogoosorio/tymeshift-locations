import { IconProps } from '../../icons';
import { Location } from '../../types';

interface IconListItemProps {
  icon: React.ReactElement<IconProps>;
  text: string;
}

interface LocationIconsProps {
  className?: string;
  location: Location;
}

export type { LocationIconsProps, IconListItemProps };
