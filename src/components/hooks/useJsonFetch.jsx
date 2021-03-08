import { useState, useEffect } from 'react';

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState();
  const [hasError, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await fetch(url);
      if (response.ok) {
        try {
          setData(await response.json());
        } catch {
          setError('Error parsing server response: probably not a JSON');
        } finally {
          setLoading(false);
        }
      } else {
        setError(response.statusText + ', status: ' + response.status);
      }
    }

    fetchData();
  }, [url]);

  return { data, isLoading, hasError };
}
