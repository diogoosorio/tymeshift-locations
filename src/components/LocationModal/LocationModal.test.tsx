import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Location } from '../../types';
import LocationModal from './LocationModal';

const location: Location = {
  id: '10',
  name: 'Some Location',
  userCount: 10,
  description: 'Location Description',
};

describe('<LocationModal />', () => {
  describe('when the user clicks on the close icon', () => {
    it('calls the onCloseClick callback', () => {
      const onClose = jest.fn();

      render(
        <LocationModal open location={location} onCloseClick={onClose} />,
      );

      // clicking the close icon
      userEvent.click(screen.getByRole('button', { name: 'Close Modal' }));
      expect(onClose).toHaveBeenCalledTimes(1);

      // clicking the "Done" button
      userEvent.click(screen.getByRole('button', { name: 'Done' }));
      expect(onClose).toHaveBeenCalledTimes(2);
    });
  });
});
