import React from 'react';
import Typography from '@material-ui/core/Typography';

import * as S from './styles';
import HeaderProps from './types';

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => (
  <S.Header>
    {subtitle && (
      <Typography variant="subtitle1" component="h2">
        {subtitle}
      </Typography>
    )}
    <Typography variant="h1" component="h1">
      {title}
    </Typography>
  </S.Header>
);

export default Header;
