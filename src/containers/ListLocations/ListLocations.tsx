import React, { useCallback } from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';

import Header from '../../components/Header';
import { Routes } from '../../constants';
import { useFetchLocations } from './hooks';
import Locations from './Locations';

const ListLocations: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const history = useHistory();

  const {
    loading, error, data, refetch,
  } = useFetchLocations();

  const setSelectedLocation = useCallback((locationId: string) => {
    history.push(`${Routes.LocationList}/${parseInt(locationId, 10)}`);
  }, [history]);

  const selectedLocation = data.find((location) => location.id === id);
  const invalidLocationId = !loading && id && !selectedLocation;

  if (invalidLocationId) {
    return <Redirect to={Routes.LocationList} />;
  }

  return (
    <>
      <Header title="Acme locations" subtitle="All locations" />
      <Locations
        setLocation={setSelectedLocation}
        data={data}
        loading={loading}
        error={error}
        refetch={refetch}
      />
      {selectedLocation && (
      <h2>
        Selected:
        {selectedLocation.id}
      </h2>
      )}
    </>
  );
};

export default ListLocations;
