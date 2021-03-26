import React from 'react';

import { DateTime } from 'luxon';
import { render } from '@testing-library/react';

import LocationIcons from './LocationIcons';

const location = {
  id: '1',
  name: 'My Location',
  userCount: 10,
  description: 'Some Location',
  createdAt: DateTime.fromISO('2016-05-25T09:24:15+01:00'),
  views: 5,
};
const getIconsText = (container: HTMLElement): Array<string | null> => {
  const icons = container.querySelectorAll('li');

  return Array.from(icons).map((el) => el.textContent);
};

describe('<LocationIcons />', () => {
  it('renders the user count and creation date', () => {
    const { container } = render(
      <LocationIcons location={location} />,
    );

    expect(getIconsText(container)).toEqual([
      '10 Users',
      '8:24AM (GMT+00:00)',
      '5 Views',
    ]);
  });

  describe('when the createdAt is undefined', () => {
    it('omits rendering the creation date', () => {
      const { container } = render(
        <LocationIcons location={{ ...location, createdAt: undefined }} />,
      );

      expect(getIconsText(container)).toEqual(['10 Users', '5 Views']);
    });
  });
});
