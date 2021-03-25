import { mocked } from 'ts-jest/utils';

import client from '../infrastructure/api';
import logging from '../infrastructure/logging';

import { fetchLocations } from './locations';

jest.mock('../infrastructure/api');
jest.mock('../infrastructure/logging');

const mockedClient = mocked(client, true);
const mockedLogging = mocked(logging, true);
const mockedData = [
  {
    id: '1',
    createdAt: '2021-03-05T09:10:35.462Z',
    name: 'Mario',
    userCount: 10,
    description: "It's me, Mario!",
  },
  {
    id: '2',
    createdAt: 'no-good-date',
    name: 'Luigi',
    userCount: 20,
    description: "Let's-a go!",
  },
];

describe('.fetchLocations', () => {
  describe('when the creation date is invalid', () => {
    it('returns no creation date for the offending location', async () => {
      mockedClient.get.mockResolvedValueOnce({
        data: mockedData,
      });

      const locations = await fetchLocations();

      expect(locations[0].createdAt?.toISO()).toEqual('2021-03-05T09:10:35.462+00:00');
      expect(locations[1].createdAt).toBeUndefined();

      expect(mockedLogging.info).toHaveBeenCalledWith(expect.stringMatching(/location #2.+: no-good-date/i));
    });
  });

  describe('when the api request fails', () => {
    it('returns the rejected promise', (done) => {
      const error = new Error('Oops');

      mockedClient.get.mockRejectedValueOnce(error);

      fetchLocations()
        .then(() => done.fail())
        .catch((err) => {
          expect(logging.error).toHaveBeenCalledWith(error);
          expect(err).toEqual(error);
        })
        .finally(done);
    });
  });
});
