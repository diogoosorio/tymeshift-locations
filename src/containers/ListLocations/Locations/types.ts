import { useFetchLocations } from "../hooks";

type LocationProps = ReturnType<typeof useFetchLocations> & {
  setLocation: (id: string) => void;
}

export type { LocationProps };
