import React from 'react';

import { DateTime } from 'luxon';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LocationCard from './LocationCard';
import { Location } from '../../types';

const onClick = jest.fn();
const location: Location = {
  id: '1',
  name: 'My Location',
  userCount: 10,
  description: 'Some Location',
  createdAt: DateTime.fromISO('2016-05-25T09:24:15+01:00'),
};

describe('<LocationCard />', () => {
  describe('when clicked', () => {
    it('invokes the onClick callback', () => {
      render(
        <LocationCard location={location} onClick={onClick} />,
      );

      userEvent.click(screen.getByText('My Location'));

      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
