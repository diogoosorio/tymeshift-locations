import React from 'react';

import { DateTime } from 'luxon';
import { mocked } from 'ts-jest/utils';
import {
  getByText, render, screen, waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';

import { fetchLocations } from '../../services/locations';
import ListLocations from './ListLocations';

jest.mock('../../services/locations');

const mockedFetchLocations = mocked(fetchLocations);
const locations = [
  {
    id: '1',
    createdAt: DateTime.fromISO('2021-03-05T09:10:35.462Z'),
    name: 'Mario',
    userCount: 10,
    description: "It's me, Mario!",
  },
  {
    id: '2',
    createdAt: DateTime.fromISO('2021-02-10T11:25:10.462Z'),
    name: 'Luigi',
    userCount: 20,
    description: "Let's-a go!",
  },
];

describe('<ListLocations />', () => {
  it('list all the locations', async () => {
    mockedFetchLocations.mockResolvedValueOnce(locations);

    render(
      <Router>
        <ListLocations />
      </Router>,
    );

    expect(screen.getByTestId('loading')).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText('Mario')).toBeInTheDocument());
    expect(screen.getByText('Luigi')).toBeInTheDocument();
  });

  describe("when there's an error retrieving the locations", () => {
    it('renders an error message with a retry', async () => {
      mockedFetchLocations.mockRejectedValueOnce(new Error('error'));
      mockedFetchLocations.mockResolvedValueOnce(locations);

      render(
        <Router>
          <ListLocations />
        </Router>,
      );

      await waitFor(() => expect(screen.getByText(/error loading the page/i)).toBeInTheDocument());

      const retryButton = screen.getByRole('button', { name: /here to retry/i });
      userEvent.click(retryButton);

      await waitFor(() => expect(screen.getByTestId('loading')).toBeInTheDocument());
      await waitFor(() => expect(screen.getByText('Mario')).toBeInTheDocument());
    });
  });

  describe('when a valid location id is provided in the URL', () => {
    it('loads the location detail modal', async () => {
      mockedFetchLocations.mockResolvedValueOnce(locations);

      render(
        <Router initialEntries={['/locations/2']}>
          <Switch>
            <Route path={['/locations/:id', '/locations']} exact component={ListLocations} />
          </Switch>
        </Router>,
      );

      const modal = await waitFor(() => screen.getByTestId('location-modal'));
      const modalDescription = getByText(modal, /let's-a go/i);
      const modalCounter = getByText(modal, /1 views/i);
      expect(modalDescription).toBeInTheDocument();
      expect(modalCounter).toBeInTheDocument();

      // close the modal
      userEvent.click(screen.getByRole('button', { name: 'Done' }));
      await waitFor(() => expect(modalDescription).not.toBeInTheDocument());
    });
  });

  describe('when an invalid location id is provided in the URL', () => {
    it('redirects the user to the location list URL instead', async () => {
      mockedFetchLocations.mockResolvedValueOnce(locations);

      render(
        <Router initialEntries={['/locations/invalid-id']}>
          <Switch>
            <Route path="/locations/:id" exact component={ListLocations} />
            <Route path="/locations" exact>
              <p>locations page</p>
            </Route>
          </Switch>
        </Router>,
      );

      await waitFor(() => expect(screen.getByText(/locations page/i)).toBeInTheDocument());
    });
  });

  describe('when the user clicks on a location', () => {
    it('renders the location detail modal', async () => {
      mockedFetchLocations.mockResolvedValueOnce(locations);

      render(
        <Router initialEntries={['/locations']}>
          <Switch>
            <Route path={['/locations', '/locations/:id']} exact component={ListLocations} />
          </Switch>
        </Router>,
      );

      const locationCard = await waitFor(() => screen.getByTestId('location-card-2'));
      const locationName = getByText(locationCard, 'Luigi');
      const locationCounter = getByText(locationCard, /0 views/i);
      userEvent.click(locationName);

      const modal = await waitFor(() => screen.getByTestId('location-modal'));
      const modalDescription = getByText(modal, /let's-a go/i);
      const modalCounter = getByText(modal, /1 views/i);

      expect(modalDescription).toBeInTheDocument();
      expect(modalCounter).toBeInTheDocument();

      // close the modal
      userEvent.click(screen.getByRole('button', { name: 'Done' }));
      await waitFor(() => expect(modalDescription).not.toBeInTheDocument());

      // counter on the card was also increment
      expect(locationCounter.textContent).toEqual('1 Views');
    });
  });
});
