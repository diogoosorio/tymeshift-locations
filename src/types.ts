import { DateTime } from 'luxon';

interface Location {
  id: string;
  createdAt?: DateTime;
  name: string;
  userCount: number;
  description: string;
}

export type { Location };
