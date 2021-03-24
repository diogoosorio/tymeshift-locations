import React from 'react';

import ListItem from '@material-ui/core/ListItem';

import * as S from './styles';
import { IconListProps } from './types';

const IconList: React.FC<IconListProps> = ({ items, className }) => (
  <S.List className={className} disablePadding>
    {items.map(({ key, icon, text }) => (
      <ListItem key={key} disableGutters>
        <S.ListItemIcon>{icon}</S.ListItemIcon>
        <S.ListItemText primary={text} primaryTypographyProps={{ variant: 'body1' }} />
      </ListItem>
    ))}
  </S.List>
);

export default IconList;
