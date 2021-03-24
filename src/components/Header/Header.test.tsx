import React from 'react';
import { render } from '@testing-library/react';

import Header from './Header';

describe('<Header />', () => {
  it('renders the title and subtitle', () => {
    const { getByText } = render(
      <Header title="Big title" subtitle="Small title" />,
    );

    expect(getByText('Big title')).toBeInTheDocument();
    expect(getByText('Small title')).toBeInTheDocument();
  });

  describe('when the subtitle is omitted', () => {
    it('omits the subtitle DOM node', () => {
      const { container } = render(<Header title="Big title" />);

      expect(container).toMatchInlineSnapshot(`
        <div>
          <header>
            <h1
              class="MuiTypography-root MuiTypography-body1"
            >
              Big title
            </h1>
          </header>
        </div>
      `);
    });
  });
});
