import { useEffect, useState } from "react";

type Data<T> = T | null;
type DataError = Error | null;

interface Param<T> {
  data: Data<T>;
  loading: boolean;
  error: DataError;
}

export const useFetch = <T>(url: string): Param<T> => {
  const [data, setData] = useState<Data<T>>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<DataError>(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, controller);
        if (!response.ok) throw new Error("Error al obtener datos");
        const jsonData: T = await response.json();
        setData(jsonData);
        setError(null);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);
  return { data, loading, error };
};
