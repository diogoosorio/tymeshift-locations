import { IconProps } from '../../icons';

interface IconListItemProps {
  icon: React.ReactElement<IconProps>;
  text: string;
}

interface IconListProps {
  className?: string;
  children: Array<React.ReactElement<IconListItemProps> | undefined>;
}

export type { IconListProps, IconListItemProps };
