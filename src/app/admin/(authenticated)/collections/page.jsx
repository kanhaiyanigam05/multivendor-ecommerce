"use client";
import Button from "@/admin/components/Button";
import React, { useEffect, useState } from "react";

const CollectionsList = () => {
  return (
    <section
      className="main-body-wrapper ml-0 p-6 transition-all duration-300"
      id="content"
    >
      <div className="heading-sec flex w-[100%] justify-between items-center py-5">
        <h2 className="text-[20px] font-[700] text-[#303030]">Collections</h2>
        <Button href={"/admin/collections/create"} type="link">
          Create Collection
        </Button>
      </div>
      <div className="overflow-x-auto overflow-y-hidden font-[sans-serif] rounded-lg border-[#3030302f] shadow-[ rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;]">
        <table className="w-[100%] bg-transparent border-[1px] border-[#3030302f] shadow-[ rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;] rounded-lg">
          <thead className="bg-transparent whitespace-nowrap rounded-lg border-b border-[#30303048]">
            <tr>
              <th className="" colSpan="4">
                <div className="table-head-buttons px-2 py-2 flex justify-between w-[100%]">
                  <div className="left-buttons flex gap-3">
                    <button
                      type="button"
                      className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-[#303030] bg-[#55555548] rounded-lg focus:ring-4 focus:outline-none"
                    >
                      All
                    </button>
                    <button
                      type="button"
                      className="px-3 py-0 text-xs font-medium text-center inline-flex items-center text-[#303030] bg-transparent rounded-lg "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-plus"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </button>
                  </div>
                  <div className="right flex gap-3">
                    <button
                      type="button"
                      className="bg-white py-2 px-3  shadow-[rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;]
                                     rounded-md text-black text-sm tracking-wider font-medium border border-[#30303044] outline-none active:shadow-inner flex gap-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-search"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-list-filter"
                      >
                        <path d="M3 6h18" />
                        <path d="M7 12h10" />
                        <path d="M10 18h4" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="bg-white py-2 px-3  shadow-[rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;]
                                     rounded-md text-black text-sm tracking-wider font-medium border border-[#30303044] outline-none active:shadow-inner flex gap-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-down-up"
                      >
                        <path d="m3 16 4 4 4-4" />
                        <path d="M7 20V4" />
                        <path d="m21 8-4-4-4 4" />
                        <path d="M17 4v16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody className="whitespace-nowrap">
            <tr className="border-b border-[#30303048]">
              <th className="pl-4 w-8 ">
                <input id="checkbox" type="checkbox" className="hidden peer" />
                <label
                  htmlFor="checkbox"
                  className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-gray-50 w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full fill-white"
                    viewBox="0 0 520 520"
                  >
                    <path
                      d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                      data-name="7-Check"
                      data-original="#000000"
                    />
                  </svg>
                </label>
              </th>
              <th className="p-4 text-left text-sm font-medium text-[#303030]">
                Title
              </th>
              <th className="p-4 text-left text-sm font-medium text-[#303030]">
                Products
              </th>
              <th className="p-4 text-left text-sm font-medium text-[#303030]">
                Products Condition
              </th>
            </tr>
            <tr className="">
              <td className="pl-4 w-8">
                <input id="checkbox1" type="checkbox" className="hidden peer" />
                <label
                  htmlFor="checkbox1"
                  className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-gray-50 w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full fill-white"
                    viewBox="0 0 520 520"
                  >
                    <path
                      d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                      data-name="7-Check"
                      data-original="#000000"
                    />
                  </svg>
                </label>
              </td>
              <td className="p-4 text-sm">John Doe</td>
              <td className="p-4 text-sm">john@example.com</td>
              <td className="p-4 text-sm">Admin</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bottom-text text-center py-2">
        <h6 className="text-[13px]">
          Learn more about{" "}
          <a href="#" className="text-blue-500">
            collections
          </a>
        </h6>
      </div>
    </section>
  );
};

export default CollectionsList;
