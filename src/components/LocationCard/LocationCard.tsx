import React from 'react';

import { Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import { Pencil } from '../../icons';
import { LocationCardProps } from './types';
import * as S from './styles';
import LocationIcons from '../LocationIcons';

const LoadingLocationCard: React.FC<Pick<LocationCardProps, 'className'>> = ({ className }) => (
  <S.Card className={className} variant="outlined">
    <S.CardActionArea $loading>
      <S.CardHeader
        title={<Skeleton variant="text" width="80%" />}
        disableTypography
      />
      <S.CardContent data-testid="icon-list">
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="60%" />
      </S.CardContent>
    </S.CardActionArea>
  </S.Card>
);

const LocationCard: React.FC<LocationCardProps> = ({
  className, location, onClick,
}) => (
  <S.Card className={className} variant="outlined" data-testid={`location-card-${location.id}`}>
    <S.CardActionArea onClick={onClick}>
      <S.CardHeader
        title={<Typography variant="h5" component="h5">{location.name}</Typography>}
        action={<S.IconContainer><Pencil /></S.IconContainer>}
        disableTypography
      />
      <S.CardContent data-testid="icon-list">
        <LocationIcons location={location} />
      </S.CardContent>
    </S.CardActionArea>
  </S.Card>
);

export default Object.assign(LocationCard, { Loading: LoadingLocationCard });
