import React from 'react';

import { DateTime } from 'luxon';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LocationCard from './LocationCard';

const onClick = jest.fn();
const location = {
  id: '1',
  name: 'My Location',
  userCount: 10,
  description: 'Some Location',
  createdAt: DateTime.fromISO('2016-05-25T09:24:15+01:00'),
  views: 0,
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
