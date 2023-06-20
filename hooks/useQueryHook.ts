import { useMemo, useEffect } from "react";
import { useQuery, UseQueryResult, QueryFunction, QueryKey } from "react-query";

interface QueryOptions<TData, TError> {
  key: QueryKey;
  queryFn: QueryFunction<TData>;
  callbacks?: {
    onError?: (error: TError) => void;
    onSuccess?: (data: TData) => void;
  };
}

interface QueryStatus {
  isLoading: boolean;
  isSuccess: boolean;
  isFetching: boolean;
  isRefetching: boolean;
  isError: boolean;
  isLoadingError: boolean;
}

interface QueryResult<TData, TError> extends UseQueryResult<TData, TError> {
  refetch: () => void;
}

const useQueryHook = <TData = any, TError = any>({
  query,
  params,
  callbacks = {},
}: {
  query: QueryOptions<TData, TError>;
  params?: any;
  callbacks?: {
    onError?: (error: TError) => void;
    onSuccess?: (data: TData) => void;
  };
}): {
  result: QueryResult<TData, TError>;
  status: QueryStatus;
  request: () => void;
} => {
  const result = useQuery<TData, TError>(
    [query.key, params],
    () => query.queryFn(params),
    {
      ...callbacks,
    }
  );

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

  const { isLoading, isFetching, isRefetching } = result;

  useEffect(() => {
    if (isLoading || isFetching || isRefetching) {
      // Loading or fetching state
    } else {
      // Completed state
    }
  }, [isLoading, isFetching, isRefetching]);

  const request = result.refetch;

  return { result, status, request };
};

export default useQueryHook;
