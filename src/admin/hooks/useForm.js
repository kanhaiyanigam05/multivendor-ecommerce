"use client";
import { parseCookies } from "nookies";
import { useState } from "react";

// Utility to set the Authorization header for fetch requests
const setAuthHeader = (token) => {
  return {
    Authorization: token ? `Bearer ${token}` : "", // If token exists, add the Bearer token
  };
};

// useForm hook using fetch for making API requests
const useForm = (initialValues = {}) => {
  const [data, dataSet] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const setData = (key, value) => {
    if (typeof key === 'object' && key !== null) {
      // Bulk set
      dataSet((prev) => ({ ...prev, ...key }));
    } else {
      // Single field update
      dataSet((prev) => ({ ...prev, [key]: value }));
    }
  };
  

  // Reset form fields
  const reset = (...fields) => {
    if (fields.length === 0) {
      dataSet(initialValues);
    } else {
      dataSet((prev) => {
        const newData = { ...prev };
        fields.forEach(
          (field) => (newData[field] = initialValues[field] ?? "")
        );
        return newData;
      });
    }
  };

  // Submit function using fetch
  const submit = async (method, url, options = {}) => {
    setProcessing(true);
    setErrors({});
    setSuccess(false);

    // Get the token (you can change this logic depending on your token storage method)
    const token = parseCookies().authToken;
    const laravelUrl = process.env.NEXT_PUBLIC_LARAVEL_URL;
    try {
      // Make the fetch request
      const response = await fetch(laravelUrl + url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...setAuthHeader(token), // Include the Authorization header if the token exists
        },
        body: JSON.stringify(data),
        ...options, // Optionally override any other fetch options
      });

      const result = await response.json();

      // Handle the response and errors
      if (!response.ok) {
        const errors = result.errors || result.error || {};
        setErrors(errors);
        if (options.onError) {
          options.onError(errors);
        }
      } else {
        setSuccess(true);
        if (options.onSuccess) options.onSuccess(result);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setProcessing(false);
    }
  };

  return {
    data,
    setData,
    reset,
    errors,
    processing,
    success,
    post: (url, options) => submit("POST", url, options),
    put: (url, options) => submit("PUT", url, options),
    patch: (url, options) => submit("PATCH", url, options),
    delete: (url, options) => submit("DELETE", url, options),
  };
};

export default useForm;
