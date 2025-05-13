import Link from "next/link";
import React from "react";

const Button = ({
  variant = "primary",
  type = "button",
  children,
  className,
  ...props
}) => {
  if (variant === "primary") {
    className +=
      " bg-gray-900 text-white border border-gray-900 hover:bg-gray-800";
  } else if (variant === "secondary") {
    className +=
      " bg-gray-600 text-white border border-gray-600 hover:bg-gray-500";
  } else if (variant === "danger") {
    className +=
      " bg-red-600 text-white border border-red-600 hover:bg-red-700";
  } else if (variant === "success") {
    className +=
      " bg-green-600 text-white border border-green-600 hover:bg-green-700";
  } else if (variant === "warning") {
    className +=
      " bg-yellow-600 text-white border border-yellow-600 hover:bg-yellow-700";
  } else if (variant === "info") {
    className +=
      " bg-blue-600 text-white border border-blue-600 hover:bg-blue-700";
  } else if (variant === "light") {
    className +=
      " bg-gray-200 text-gray-800 border border-gray-200 hover:bg-gray-300";
  } else if (variant === "dark") {
    className +=
      " bg-gray-800 text-white border border-gray-800 hover:bg-gray-700";
  } else if (variant === "white") {
    className +=
      " bg-white text-gray-600 border border-gray-300 hover:bg-gray-100";
  } else if (variant === "black") {
    className += " bg-black text-white border border-black hover:bg-gray-800";
  } else if (variant === "transparent") {
    className +=
      " bg-transparent text-white border border-gray-300 hover:bg-gray-100";
  }

  return type === "link" ? (
    <Link
      className={`font-semibold flex justify-center items-center text-center py-1.5 px-3 min-w-7 min-h-7 text-xs rounded-md bg-[linear-gradient(180deg,_rgba(48,48,48,0)_63.53%,_rgba(255,255,255,0.15)_100%)] shadow-['625rem_rgba(48,48,48,1)_inset,_0rem_0.03125rem_0rem_0.09375rem_rgba(255,255,255,0.25)_inset'] ${className}`}
      {...props}
    >
      {children}
    </Link>
  ) : (
    <button
      type="button"
      className={`font-semibold flex justify-center items-center text-center py-1.5 px-3 min-w-7 min-h-7 text-xs rounded-md bg-[linear-gradient(180deg,_rgba(48,48,48,0)_63.53%,_rgba(255,255,255,0.15)_100%)] shadow-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
