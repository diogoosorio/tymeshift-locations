import React from 'react';

import { Typography } from '@material-ui/core';

import { LocationModalProps } from './types';
import LocationIcons from '../LocationIcons';
import * as S from './styles';
import { Close } from '../../icons';

const LocationModal: React.FC<LocationModalProps> = ({ open, location, onCloseClick }) => (
  <S.Modal open={open} aria-labelledby="location-modal-title" data-testid="location-modal">

    <S.ModalHeader id="location-modal-title">
      <Typography variant="h3">{location.name}</Typography>
      <div>
        <S.CloseButton onClick={onCloseClick} aria-label="Close Modal">
          <Close />
        </S.CloseButton>
      </div>
    </S.ModalHeader>

    <S.ModalContent>
      <LocationIcons location={location} />

      <S.ModalDescription>
        <Typography variant="h4" component="h4">Description</Typography>

        <div>
          {location.description}
        </div>
      </S.ModalDescription>
    </S.ModalContent>

    <S.ModalActions>
      <S.DoneButton onClick={onCloseClick}>Done</S.DoneButton>
    </S.ModalActions>
  </S.Modal>
);

export default LocationModal;
