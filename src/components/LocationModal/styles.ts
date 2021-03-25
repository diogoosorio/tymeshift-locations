import styled from 'styled-components';

import {
  Button,
  Dialog, DialogActions, DialogContent, IconButton,
} from '@material-ui/core';

const Modal = styled(Dialog)`
  .MuiDialog-paper {
    width: 440px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  padding: 16px 25px;
  align-items: center;
  justify-content: space-between;
`;

const CloseButton = styled(IconButton)`
  padding: 4px;
`;

const ModalContent = styled(DialogContent)`
  margin-top: 15px;
  padding: 0 25px;
`;

const ModalDescription = styled.div`
  margin-top: 20px;
`;

const ModalActions = styled(DialogActions)`
  margin-top: 15px;
  padding: 10px 25px;
`;

const DoneButton = styled(Button)`
  text-transform: none;
  background-color: #37B24D;
  color: #fff;
  border-radius: 16px;
  padding: 4px 15px;

  :hover {
    background-color: #298539;
  }
`;

export {
  Modal,
  ModalHeader,
  CloseButton,
  ModalContent,
  ModalDescription,
  ModalActions,
  DoneButton,
};
