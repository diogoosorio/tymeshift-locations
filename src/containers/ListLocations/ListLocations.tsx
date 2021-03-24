import React from 'react';

import Header from '../../components/Header';
import IconList from '../../components/IconList';
import Eye from '../../icons/Eye';
import Timezone from '../../icons/Timezone';
import Users from '../../icons/Users';
import * as S from './styles';

const ListLocations: React.FC = () => (
  <>
    <Header title="Acme locations" subtitle="All locations" />
    <S.Content>
      <S.CardList>
        <S.Card onClick={() => console.log('hello')} title="Acme Location">
          <IconList items={[
            { key: 'second-item', icon: <Eye />, text: 'Second Item' },
            { key: 'third-item', icon: <Timezone />, text: 'Third Item' },
            { key: 'fourth-item', icon: <Users />, text: 'Fourth Item' },
          ]}
          />
        </S.Card>
      </S.CardList>
    </S.Content>
  </>
);

export default ListLocations;
