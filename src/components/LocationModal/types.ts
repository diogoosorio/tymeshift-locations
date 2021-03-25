import { DialogProps } from '@material-ui/core';

import { Location } from '../../types';

type LocationModalProps = Pick<DialogProps, 'open'> & {
  location: Location;
  onCloseClick: () => void;
}

export type { LocationModalProps };
