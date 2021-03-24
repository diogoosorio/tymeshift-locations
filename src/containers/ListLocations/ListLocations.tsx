import React from 'react';

import Header from '../../components/Header';
import * as S from './styles';

const ListLocations: React.FC = () => (
  <>
    <Header title="Acme locations" subtitle="All locations" />
    <S.Content>
      <S.CardList>
        <S.Card />
        <S.Card />
        <S.Card />
        <S.Card />
        <S.Card />
        <S.Card />
        <S.Card />
        <S.Card />
        <S.Card />
        <S.Card />
        <S.Card />
        <S.Card />
      </S.CardList>
    </S.Content>
  </>
);

export default ListLocations;
