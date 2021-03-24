import { IconProps } from '../../icons';

interface IconListItem {
  key: string;
  icon: React.ReactElement<IconProps>;
  text: string;
}

interface IconListProps {
  className?: string;
  items: Array<IconListItem>,
}

export type { IconListProps, IconListItem };
