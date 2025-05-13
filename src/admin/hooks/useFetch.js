/*import { parseCookies } from "nookies";
import { useEffect, useState } from "react";

// Utility to set the Authorization header for fetch requests
const setAuthHeader = (token) => {
  return {
    Authorization: token ? `Bearer ${token}` : "", // If token exists, add the Bearer token
  };
};
export default function useFetch(url, method = "GET", options) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = parseCookies().authToken;
    const laravelUrl = process.env.NEXT_PUBLIC_LARAVEL_URL;
    async function fetchData() {
      try {
        const response = await fetch(laravelUrl + url, {
          method: method,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...setAuthHeader(token),
          },
          ...options, // Optionally override any other fetch options
        });
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return { data, error, loading };
}
*/
import { parseCookies } from "nookies";
import { useEffect, useState, useCallback } from "react";

const setAuthHeader = (token) => {
  return {
    Authorization: token ? `Bearer ${token}` : "",
  };
};

export default function useFetch(url, method = "GET", options) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reloadFlag, setReloadFlag] = useState(0); // used to trigger re-fetch

  const refetch = useCallback(() => {
    setReloadFlag((prev) => prev + 1); // trigger re-run of useEffect
  }, []);

  useEffect(() => {
    const token = parseCookies().authToken;
    const laravelUrl = process.env.NEXT_PUBLIC_LARAVEL_URL;

    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(laravelUrl + url, {
          method: method,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...setAuthHeader(token),
          },
          ...options,
        });

        const data = await response.json();
        setData(data);
        setError(null);
      } catch (error) {
        setError(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, method, options, reloadFlag]); // 👈 re-run when reloadFlag changes

  return { data, error, loading, refetch };
}
