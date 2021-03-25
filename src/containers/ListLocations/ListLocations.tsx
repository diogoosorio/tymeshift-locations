import React, { useCallback } from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';

import Header from '../../components/Header';
import LoadError from '../../components/LoadError';
import LocationModal from '../../components/LocationModal';
import { Routes } from '../../constants';
import { useFetchLocations } from './hooks';
import * as S from './styles';
import { LocationListContentProps } from './types';

const Content: React.FC<LocationListContentProps> = ({
  loading, locations, error, refetch, setLocationId,
}) => {
  if (error) {
    return <LoadError onRetryClick={refetch} />;
  }

  if (loading) {
    return (
      <S.LocationCardList data-testid="loading">
        {Array.from({ length: 10 }).map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <S.LoadingLocationCard key={i} />
        ))}
      </S.LocationCardList>
    );
  }

  if (!locations?.length) {
    return <p>There are no locations available.</p>;
  }

  return (
    <S.LocationCardList data-testid="locations">
      {locations?.map((location) => (
        <S.LocationCard
          key={location.id}
          location={location}
          onClick={() => setLocationId(location.id)}
        />
      ))}
    </S.LocationCardList>
  );
};

const ListLocations: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const history = useHistory();

  const {
    loading, error, locations, refetch,
  } = useFetchLocations();

  const setSelectedLocation = useCallback((locationId: string) => {
    history.push(`${Routes.LocationList}/${encodeURI(locationId)}`);
  }, [history]);

  const closeModal = useCallback(() => history.push(Routes.LocationList), [history]);

  const selectedLocation = locations?.find((location) => location.id === id);
  const invalidLocationId = !loading && id && !selectedLocation;

  // TODO: This should probably be a 404 page?
  if (invalidLocationId) {
    return <Redirect to={Routes.LocationList} />;
  }

  return (
    <>
      <Header title="Acme locations" subtitle="All locations" />
      <S.ContentContainer>
        <Content
          loading={loading}
          locations={locations}
          error={error}
          refetch={refetch}
          setLocationId={setSelectedLocation}
        />
      </S.ContentContainer>

      {selectedLocation && (
        <LocationModal onCloseClick={closeModal} location={selectedLocation} open />
      )}
    </>
  );
};

export default ListLocations;
