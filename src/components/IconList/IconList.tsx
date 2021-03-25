import React from 'react';

import ListItem from '@material-ui/core/ListItem';

import * as S from './styles';
import { IconListItemProps, IconListProps } from './types';

const IconListItem: React.FC<IconListItemProps> = ({ icon, text }) => (
  <ListItem disableGutters>
    <S.ListItemIcon>{icon}</S.ListItemIcon>
    <S.ListItemText primary={text} primaryTypographyProps={{ variant: 'body1' }} />
  </ListItem>
);

const IconList: React.FC<IconListProps> = ({ children, className }) => (
  <S.List className={className} disablePadding>
    {children}
  </S.List>
);

export default Object.assign(IconList, { Item: IconListItem });
