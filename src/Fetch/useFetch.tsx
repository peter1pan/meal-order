import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any | null>(null);
  const [isLoading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (res.status === 404) {
          throw new Error(res.statusText);
        }
        setLoading(false);
        setData(data);
      } catch (err: any) {
        setLoading(false);
        setError(err.message);
      }
    };
    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
