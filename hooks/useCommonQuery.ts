import { useMemo, useState } from "react";
import { useQuery, QueryFunction } from "react-query";

interface QueryOptions<TData> {
  key: string;
  queryFn: QueryFunction<TData>;
}

interface QueryStatus {
  isLoading: boolean;
  isSuccess: boolean;
  isFetching: boolean;
  isRefetching: boolean;
  isError: boolean;
  isLoadingError: boolean;
}

interface QueryResult<TData> {
  refetch: () => void;
  isLoading: boolean;
  isSuccess: boolean;
  isFetching: boolean;
  isRefetching: boolean;
  isError: boolean;
  isLoadingError: boolean;
}

interface CommonQueryProps<TData> {
  query: QueryOptions<TData>;
  params?: any;
  callbacks?: {
    onError?: (error: any) => void;
    onSuccess?: (data: TData) => void;
  };
  initEnabled?: boolean;
}

const useCommonQuery = <TData>({
  query,
  params = null,
  callbacks = {},
  initEnabled = false,
}: CommonQueryProps<TData>): {
  result: QueryResult<TData>;
  status: QueryStatus;
  request: () => void;
} => {
  const [enabled, setEnabled] = useState<boolean>(initEnabled);
  const result = useQuery<TData>([query.key], () => query.queryFn(params), {
    enabled: enabled,
    ...callbacks,
  });

  const status = useMemo<QueryStatus>(() => {
    return {
      isLoading: result.isLoading,
      isSuccess: result.isSuccess,
      isFetching: result.isFetching,
      isRefetching: result.isRefetching,
      isError: result.isError,
      isLoadingError: result.isLoadingError,
    };
  }, [
    result.isLoading,
    result.isSuccess,
    result.isFetching,
    result.isRefetching,
    result.isError,
    result.isLoadingError,
  ]);

  const request = result.refetch;
  return { result, status, request };
};

export default useCommonQuery;
