import styled from 'styled-components';

import CardComponent from '../../components/Card';

const Content = styled.div`
  padding: 25px 60px;
`;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;

  // compensate the right margin of last row item and top
  // margin of first row items
  margin: -25px -25px 0 0;
`;

const Card = styled(CardComponent)`
  max-width: 340px;
  width: 340px;
  min-height: 139px;
  margin: 25px 25px 0 0;
`;

export { Content, Card, CardList };
