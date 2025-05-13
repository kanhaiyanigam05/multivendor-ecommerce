"use client";
import React, { useState } from "react";

const Input = ({
  variant = "",
  label = null,
  labelClass = null,
  className = "",
  type = "text",
  id = null,
  required = false,
  wrapperClass = null,
  textarea = false,
  error = null,
  prefix = null,
  postfix = null,
  tooltip = null,
  ...props
}) => {
  const [isPassword, setPassword] = useState(type === "password");
  const [showTooltip, setTooltip] = useState(false);
  return (
    <div className={`${wrapperClass} flex max-w-[100%] w-full flex-col gap-1 `}>
      {label && (
        <label
          htmlFor={id}
          className={`text-[13px] text-[#303030] font-500 ${labelClass}`}
        >
          {label}
          {required ? <span className="text-red-800">*</span> : null}
        </label>
      )}
      {textarea ? (
        <textarea
          className={`rounded-lg w-full text-[13px] text-[#303030] border border-black py-1 px-2 outline-offset-2 outline-blue-800 ${className}
          ${error ? "bg-red-50" : "bg-gray-50"}`}
          id={id}
          required={required}
          {...props}
        />
      ) : (
        <div className={`relative text-[13px]`}>
          <input
            className={`h-[35px] bg-gray-50 rounded-lg w-full text-[#303030] border py-1 px-2 outline-offset-2 outline-blue-800 ${className}
            ${
              error ? "border-red-800 bg-red-100" : "border-black bg-gray-50"
            } ${prefix ? "pl-6" : ""} ${prefix ? "pr-6" : ""}`}
            type={
              type === "password" ? (isPassword ? "password" : "text") : type
            }
            id={id}
            required={required}
            {...props}
          />
          {prefix && (
            <div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 font-extralight">
              <i className={prefix}></i>
            </div>
          )}
          {postfix && (
            <div
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 font-extralight"
              {...(!tooltip
                ? {}
                : {
                    onMouseEnter: () => setTooltip(true),
                    onMouseLeave: () => setTooltip(false),
                  })}
            >
              <i className={postfix}></i>
              {showTooltip && (
                <div className="absolute left-0 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded-lg shadow-md w-60">
                  {tooltip}
                </div>
              )}
            </div>
          )}
          {!prefix && type === "password" && (
            <div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer">
              <i
                className={`fa ${isPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={() => setPassword(!isPassword)}
              ></i>
            </div>
          )}
          {!postfix && type === "password" && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer">
              <i
                className={`fa ${isPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={() => setPassword(!isPassword)}
              ></i>
            </div>
          )}
        </div>
      )}
      {error && (
        <span className="text-red-800 text-[13px] font-500">
          <i className="fa fa-exclamation-circle me-2"></i>
          {Array.isArray(error) ? error[0] : error}
        </span>
      )}
    </div>
  );
};

export default Input;
