import styled, { css } from 'styled-components';

import LocationCardComponent from '../../components/LocationCard';

const ContentContainer = styled.div`
  padding: 25px 60px;
`;

const LocationCardList = styled.div`
  display: flex;
  flex-wrap: wrap;

  // compensate the right margin of last row item and top
  // margin of first row items
  margin: -25px -25px 0 0;
`;

const cardDimensions = css`
  width: 340px;
  margin: 25px 25px 0 0;
`;

const LocationCard = styled(LocationCardComponent)`
  ${cardDimensions}
`;

const LoadingLocationCard = styled(LocationCardComponent.Loading)`
  ${cardDimensions};
  min-height: 115px;
`;

export {
  ContentContainer,
  LocationCardList,
  LocationCard,
  LoadingLocationCard,
};
