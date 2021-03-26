import { DialogProps } from '@material-ui/core';

import { Location } from '../../types';

type LocationModalProps = Pick<DialogProps, 'open'> & {
  location: Location & { views: number };
  onCloseClick: () => void;
}

export type { LocationModalProps };
