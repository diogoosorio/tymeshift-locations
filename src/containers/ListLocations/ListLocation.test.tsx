import React from 'react';

describe('<ListLocations />', () => {
  it.todo('renders a loading state');

  describe('when the locations are retrieved', () => {
    it.todo('lists all the locations');
  });

  describe("when there's an error retrieving the locations", () => {
    it.todo('renders an error state');

    describe('when the user clicks on the retry button', () => {
      it.todo('re-triggers the the API request');
    });
  });
});
