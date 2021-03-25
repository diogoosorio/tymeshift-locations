import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LoadError from './LoadError';

describe('<LoadError />', () => {
  describe('when a retry callback is provided', () => {
    it('invokes the retry callback when the retry button is clicked', () => {
      const onRetryClick = jest.fn();

      render(<LoadError onRetryClick={onRetryClick} retryMessage="Retry please!" />);

      userEvent.click(screen.getByRole('button', { name: 'Retry please!' }));

      expect(onRetryClick).toHaveBeenCalledTimes(1);
    });
  });
});
