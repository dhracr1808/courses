import { type UseApiCall } from "@/models";
import { useCallback, useEffect, useState } from "react";

type Data<T> = T | null;
type CustomError = Error | null;

type UseApiOptions<P> = {
  autoFetch?: boolean;
} & (P extends null ? { params?: P } : { params: P });

interface UseApiResult<T, P> {
  loading: boolean;
  error: CustomError;
  data: Data<T>;
  fetch: (param: P) => void;
}

export const useApi = <T, P>(
  apiCall: (param: P) => UseApiCall<T>,
  options?: UseApiOptions<P>,
): UseApiResult<T, P> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Data<T>>(null);
  const [error, setError] = useState<CustomError>(null);

  const fetch = useCallback(
    (param: P) => {
      const { call, controller } = apiCall(param);
      setLoading(true);
      call
        .then((resp) => {
          console.log(resp);
          setData(resp.data);
          setError(null);
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
      return () => controller.abort();
    },
    [apiCall],
  );

  useEffect(() => {
    if (options && options.autoFetch && options.params) {
      return fetch(options.params);
    }
  }, [options?.autoFetch, options?.params]);
  return { loading, data, error, fetch };
};
