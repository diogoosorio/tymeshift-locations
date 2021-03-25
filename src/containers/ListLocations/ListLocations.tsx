import React from 'react';

import Header from '../../components/Header';
import { useFetchLocations } from './hooks';
import Locations from './Locations';

const ListLocations: React.FC = () => {
  const {
    loading, error, data, refetch,
  } = useFetchLocations();

  return (
    <>
      <Header title="Acme locations" subtitle="All locations" />
      <Locations data={data} loading={loading} error={error} refetch={refetch} />
    </>
  );
};

export default ListLocations;
