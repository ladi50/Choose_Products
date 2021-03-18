import { useCallback } from "react";

export const useFetch = () => {
  const fetchHandler = useCallback(async (url, opts) => {
    try {
      const response = await fetch(url, { ...opts });

      const res = await response.json();

      if (!response.ok) {
        throw new Error("Fetch failed!");
      }

      return res;
    } catch (err) {
      console.log(err);
    }
  }, []);

  return { fetchHandler };
};
