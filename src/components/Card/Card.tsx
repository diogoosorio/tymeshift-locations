import React from 'react';

import { Typography } from '@material-ui/core';

import { CardProps } from './types';
import * as S from './styles';

const Card: React.FC<CardProps> = ({
  className, title, children, actionIcon, onClick,
}) => (
  <S.Card className={className} variant="outlined">
    <S.CardActionArea onClick={onClick}>
      <S.CardHeader
        title={<Typography variant="h5" component="h5">{title}</Typography>}
        action={actionIcon ? <S.IconContainer>{actionIcon}</S.IconContainer> : undefined}
        disableTypography
      />
      <S.CardContent>
        {children}
      </S.CardContent>
    </S.CardActionArea>
  </S.Card>
);

export default Card;
