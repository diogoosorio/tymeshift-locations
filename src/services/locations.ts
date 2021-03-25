import { DateTime } from 'luxon';

import client from '../infrastructure/api';
import logging from '../infrastructure/logging';
import { Location } from '../types';

type ApiLocation = Omit<Location, 'createdAt'> & {
  createdAt: string;
}

const mapLocation = (unparsed: ApiLocation): Location => {
  const parsedDate = DateTime.fromISO(unparsed.createdAt);

  if (!parsedDate.isValid) {
    logging.info(`Location #${unparsed.id} has an unparseable date: ${unparsed.createdAt}`);
  }

  return {
    ...unparsed,
    createdAt: parsedDate.isValid ? parsedDate : undefined,
  };
};

const fetchLocations = async (): Promise<ReadonlyArray<Location>> => {
  try {
    const { data } = await client.get<ApiLocation[]>('/locations');

    return data.map((l) => mapLocation(l));
  } catch (e) {
    logging.error(e);
    throw e;
  }
};

export { fetchLocations };
