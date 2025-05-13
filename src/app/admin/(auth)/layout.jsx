import React from "react";

const GuestLayout = ({ children }) => {
  return (
    <>
      <div className="bg-gray-50">
        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div className="max-w-md w-full">
            <a href="javascript:void(0)">
              <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-40 mb-8 mx-auto block" />
            </a>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestLayout;
