import React from 'react';

import { Alert, AlertTitle } from '@material-ui/lab';
import * as S from './styles';
import { LoadErrorProps } from './types';

const LoadError: React.FC<LoadErrorProps> = ({
  title = 'Error',
  message = 'There was an error loading the page.',
  retryMessage = 'Click here to retry.',
  onRetryClick,
}) => (
  <Alert severity="error">
    <AlertTitle>{title}</AlertTitle>
    {message}
    {onRetryClick && (
      <S.RetryButton size="small" onClick={onRetryClick}>
        {retryMessage}
      </S.RetryButton>
    )}
  </Alert>
);

export default LoadError;
