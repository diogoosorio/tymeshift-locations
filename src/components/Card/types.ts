import React from 'react';
import { IconProps } from '../../icons';

interface CardProps {
  className?: string;
  onClick?: () => void;
  actionIcon?: React.ReactElement<IconProps>
  title: React.ReactChild;
}

export type { CardProps };
