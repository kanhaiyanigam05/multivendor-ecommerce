"use client";
import React, { useState } from "react";
import { Datepicker as ReactDatepicker } from "flowbite-react";

const Datepicker = ({
  variant = "",
  label = null,
  range = false,
  labelClass = null,
  className = "",
  type = "date",
  id = null,
  required = false,
  wrapperClass = null,
  error = null,
  ...props
}) => {
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

      <div className={`relative text-[13px]`}>
        <input
          type={type}
          className={`h-[35px] bg-gray-50 rounded-lg w-full text-[#303030] border py-1 px-2 outline-offset-2 outline-blue-800 ${className}`}
          showTodayButton={false}
          showClearButton={false}
          id={id}
          required={required}
          {...props}
        />
      </div>
      {error && (
        <span className="text-red-800 text-[13px] font-500">
          <i className="fa fa-exclamation-circle me-2"></i>
          {Array.isArray(error) ? error[0] : error}
        </span>
      )}
    </div>
  );
};

export default Datepicker;
