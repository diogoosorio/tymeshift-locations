import React from 'react';

import { DateTime } from 'luxon';
import { render } from '@testing-library/react';

import LocationIcons from './LocationIcons';
import { Location } from '../../types';

const location: Location = {
  id: '1',
  name: 'My Location',
  userCount: 10,
  description: 'Some Location',
  createdAt: DateTime.fromISO('2016-05-25T09:24:15+01:00'),
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

    expect(getIconsText(container)).toEqual(['10 Users', '8:24AM (GMT+00:00)']);
  });

  describe('when the createdAt is undefined', () => {
    it('omits rendering the creation date', () => {
      const { container } = render(
        <LocationIcons location={{ ...location, createdAt: undefined }} />,
      );

      expect(getIconsText(container)).toEqual(['10 Users']);
    });
  });
});
