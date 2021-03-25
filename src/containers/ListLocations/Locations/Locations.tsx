import React from 'react';

import Skeleton from '@material-ui/lab/Skeleton';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

import {
  Timezone,
  Users,
  Pencil,
} from '../../../icons';
import IconList from '../../../components/IconList';
import * as S from './styles';
import { LocationProps } from './types';

const Locations: React.FC<LocationProps> = ({
  loading, data, error, refetch, setLocation,
}) => {
  if (error) {
    return (
      <S.Container>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          There was an error retrieving your locations.
          <S.RetryButton size="small" onClick={refetch}>Click here to retry.</S.RetryButton>
        </Alert>
      </S.Container>
    );
  }

  if (loading) {
    return (
      <S.Container>
        <S.CardList>
          {Array.from({ length: 10 }).map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <S.Card key={`loading-card-${i}`} title={<Skeleton width="80%" />}>
              <Skeleton width="60%" />
              <Skeleton width="60%" />
            </S.Card>
          ))}
        </S.CardList>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.CardList>
        {data.map((location) => (
          <S.Card
            onClick={() => setLocation(location.id)}
            actionIcon={<Pencil />}
            title={location.name}
            key={location.id}
          >
            <IconList>
              <IconList.Item icon={<Users />} text={`${location.userCount} Users`} />
              <IconList.Item icon={<Timezone />} text={`${location.createdAt?.toFormat('t (ZZZZ ZZ)')}`} />
            </IconList>
          </S.Card>
        ))}
      </S.CardList>
    </S.Container>
  );
};

export default Locations;
