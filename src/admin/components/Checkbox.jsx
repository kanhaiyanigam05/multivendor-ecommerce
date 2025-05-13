import React, { useEffect, useRef } from "react";

const Checkbox = ({
  type = "checkbox",
  id = null,
  label = null,
  labelClass = "",
  className = "",
  wrapperClass = "",
  indeterminate = false,
  error = null,
  ...props
}) => {
  const checkboxRef = useRef(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <div className={`flex items-center space-x-3 ${wrapperClass}`}>
      <input
        ref={checkboxRef}
        className={`h-4 w-4 accent-gray-800 border-gray-300 rounded ${className}`}
        type={type}
        id={id}
        {...props}
      />
      {label && (
        <label htmlFor={id} className={`text-sm text-gray-800 ${labelClass}`}>
          {label}
        </label>
      )}
      {error ? <span className="valid-feedback">{error}</span> : null}
    </div>
  );
};

export default Checkbox;
