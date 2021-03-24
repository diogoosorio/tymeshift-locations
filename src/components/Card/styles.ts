import styled, { css } from 'styled-components';

import MuiCard from '@material-ui/core/Card';
import MuiCardHeader from '@material-ui/core/CardHeader';
import MuiCardContent from '@material-ui/core/CardContent';

import Pencil from '../../icons/Pencil';

const transition = css`
  transition-duration: 0.5;
  transition-timing-function: ease-in;
`;

const Card = styled(MuiCard)`
  ${transition}
  transition-property: background-color;

  position: relative;
  padding: 15px 25px 15px 25px;
  background-color: rgba(246, 246, 246, 0.2);
  border-color: rgba(0, 11, 22, 0.1);
  border-width: 1px;
  border-radius: 2px;

  :hover {
    background-color: rgb(246, 246, 246);
  }
`;

const CardHeader = styled(MuiCardHeader)`
  padding: 0;
  max-width: 264px;

  & .MuiCardHeader-action {
    position: absolute;
    margin: 0;
    top: 10px;
    right: 10px;
  }
`;

const CardContent = styled(MuiCardContent)`
  padding: 0;
  margin-top: 5px;
`;

const PencilIcon = styled(Pencil)`
  width: 14px;
  height: 14px;
`;

const IconContainer = styled.div`
  ${transition}
  transition-property: opacity;

  display: flex;
  width: 26px;
  height: 26px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  opacity: 0;

  ${Card}:hover & {
    opacity: 1;
  }
`;

export {
  Card,
  CardHeader,
  CardContent,
  PencilIcon,
  IconContainer,
};
