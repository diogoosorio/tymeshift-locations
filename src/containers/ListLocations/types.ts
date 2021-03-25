interface ExecutionResult<T> {
  loading: boolean;
  error?: Error;
  refetch: () => void;
  data: T;
}

export type { ExecutionResult };
