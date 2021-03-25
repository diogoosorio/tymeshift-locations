import { IconProps } from '../../icons';

interface IconListItemProps {
  icon: React.ReactElement<IconProps>;
  text: string;
}

interface IconListProps {
  className?: string;
  children: React.ReactElement<IconListItemProps>[];
}

export type { IconListProps, IconListItemProps };
