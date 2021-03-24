import React from 'react';

import Typography from '@material-ui/core/Typography';

import { CardProps } from './types';
import * as S from './styles';

const EditCardIcon: React.FC = () => (
  <S.IconContainer>
    <S.PencilIcon />
  </S.IconContainer>
);

const Card: React.FC<CardProps> = ({
  className, title, children, onClick,
}) => (
  <S.Card className={className} variant="outlined">
    <S.CardActionArea onClick={onClick}>
      <S.CardHeader
        title={<Typography variant="h5" component="h5">{title}</Typography>}
        action={<EditCardIcon />}
        disableTypography
      />
      <S.CardContent>
        {children}
      </S.CardContent>
    </S.CardActionArea>
  </S.Card>
);

export default Card;
