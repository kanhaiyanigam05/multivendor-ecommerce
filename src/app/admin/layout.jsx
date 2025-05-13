"use client";
import React, { useEffect, useState } from "react";
import { AuthProvider } from "@/admin/context/AuthContext";
import { ThemeConfig } from "flowbite-react";

const RootAdminLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => setLoading(false), []);
  if (loading) {
    return (
      <body className="body-area">
        <ThemeConfig dark={false} />
        {/* <!-- Preloader start --> */}
        <div className="preloader" id="preloader">
          <div className="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {/* <!-- Preloader start --> */}
      </body>
    );
  }
  return (
    <body className="bg-[#f1f1f1]">
      <AuthProvider>{children}</AuthProvider>
    </body>
  );
};
export default RootAdminLayout;
