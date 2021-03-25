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

  describe('when a location id is provided in the URL', () => {
    it.todo('renders the location detail modal');
  });

  describe('when an invalid location id is provided in the URL', () => {
    it.todo('redirects the user to the location list URL instead');
  });

  describe('when the user clicks on a location', () => {
    it.todo('changes the URL to the detail page');
    it.todo('renders the location detail modal');
  });
});
