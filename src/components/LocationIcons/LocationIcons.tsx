import React from 'react';

import { ListItem } from '@material-ui/core';

import * as S from './styles';
import { IconListItemProps, LocationIconsProps } from './types';
import { Eye, Timezone, Users } from '../../icons';

const DateFormat = "h:ma ('GMT'ZZ)";

const Item: React.FC<IconListItemProps> = ({ icon, text }) => (
  <ListItem disableGutters>
    <S.ListItemIcon>{icon}</S.ListItemIcon>
    <S.ListItemText primary={text} primaryTypographyProps={{ variant: 'body1' }} />
  </ListItem>
);

const LocationIcons: React.FC<LocationIconsProps> = ({ location, className }) => (
  <S.List className={className} disablePadding>
    <Item icon={<Users />} text={`${location.userCount} Users`} />
    {location.createdAt && (
      <Item icon={<Timezone />} text={`${location.createdAt.toFormat(DateFormat)}`} />
    )}
    <Item icon={<Eye />} text={`${location.views} Views`} />
  </S.List>
);

export default LocationIcons;
