import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Card from './Card';

const onClick = jest.fn();

describe('<Card />', () => {
  describe('when clicked', () => {
    it('invokes the onClick callback', () => {
      const { getByText } = render(
        <Card title="My Card" onClick={onClick} />,
      );

      userEvent.click(getByText('My Card'));

      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
