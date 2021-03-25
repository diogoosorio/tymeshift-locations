import styled from 'styled-components';

import Button from '@material-ui/core/Button';

import CardComponent from '../../../components/Card';

const Container = styled.div`
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
  width: 340px;
  margin: 25px 25px 0 0;
`;

const RetryButton = styled(Button)`
  text-transform: none;
`;

export {
  Container,
  Card,
  CardList,
  RetryButton,
};
