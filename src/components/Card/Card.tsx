import React from 'react';

import { CardProps } from './types';
import * as S from './styles';

const Card: React.FC<CardProps> = ({ className }) => (
  <S.Card className={className} variant="outlined">
    <S.CardHeader
      title="Acme HQ"
      action={<S.IconContainer><S.PencilIcon /></S.IconContainer>}
    />
    <S.CardContent>
      Something, something
    </S.CardContent>
  </S.Card>
);

export default Card;
