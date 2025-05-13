import React from "react";

const Switch = ({
  label = null,
  type = "checkbox",
  labelClass = null,
  id = null,
  className = null,
  error = null,
  ...props
}) => {
  return (
    <div className="w-fit">
      {label && (
        <label htmlFor={id} className={labelClass}>
          Switch
        </label>
      )}
      <label className="position-relative cursor-pointer">
        <input
          id={id}
          type={type}
          className={`sr-only peer ${className}`}
          {...props}
        />
        <div className="ecom-switch"></div>
      </label>
      {error && <span>{error}</span>}
    </div>
  );
};

export default Switch;
