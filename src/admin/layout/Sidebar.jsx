"use client";
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = ({ active, toggleActive }) => {
  const [activeMenu, setActiveMenu] = useState(
    localStorage.getItem("sidebar-menu") || ""
  );
  const handleToggle = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu("");
      localStorage.setItem("sidebar-menu", "");
    } else {
      setActiveMenu(menu);
      localStorage.setItem("sidebar-menu", menu);
    }
  };
  return (
    <>
      {/* <!-- Main modal --> */}
      <nav className="bg-[#EBEBEB] shadow-lg h-screen absolute top-14 left-0 min-w-[250px] py-1 px-4 font-[sans-serif] overflow-auto">
        <div className="navbar-side-1 flex flex-col h-[100%] justify-between pb-[100px]">
          <div className="upper-links">
            <div className="">
              <ul className="mt-3">
                <li>
                  <Link
                    href={"/admin"}
                    className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-house mr-1"
                    >
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>

                    <span>Home</span>
                  </Link>
                </li>
                <li className="sub-nav">
                  <Link
                    href={"/admin/orders"}
                    onClick={() => handleToggle("orders")}
                    className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-panel-top mr-1"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M3 9h18" />
                    </svg>
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                      Orders
                    </span>
                  </Link>

                  {/* <!-- Always Visible Submenu --> */}
                  <ul
                    className="sub-menu ml-8"
                    style={{
                      display: activeMenu === "orders" ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        href={"/admin/orders"}
                        className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                      >
                        <span>Drafts</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"#!"}
                        className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                      >
                        <span>Abandoned checkouts</span>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="sub-nav">
                  <Link
                    href={"/admin/products"}
                    onClick={() => handleToggle("products")}
                    className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tag mr-1"
                    >
                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                    </svg>
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                      Products
                    </span>
                  </Link>

                  {/* <!-- Always Visible Submenu --> */}
                  <ul
                    className="sub-menu ml-8"
                    style={{
                      display: activeMenu === "products" ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        href={"/admin/collections"}
                        className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-corner-down-right mr-1"
                        >
                          <polyline points="15 10 20 15 15 20" />
                          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                        </svg>
                        <span>Collections</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/admin/inventories"}
                        className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-corner-down-right mr-1"
                        >
                          <polyline points="15 10 20 15 15 20" />
                          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                        </svg>
                        <span>Inventory</span>
                      </Link>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-corner-down-right mr-1"
                        >
                          <polyline points="15 10 20 15 15 20" />
                          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                        </svg>
                        <span>Purchase Orders</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-corner-down-right mr-1"
                        >
                          <polyline points="15 10 20 15 15 20" />
                          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                        </svg>
                        <span>Transfers</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-corner-down-right mr-1"
                        >
                          <polyline points="15 10 20 15 15 20" />
                          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                        </svg>
                        <span>Gift Cards</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sub-nav">
                  <Link
                    href={"/admin/customers"}
                    onClick={() => handleToggle("customers")}
                    className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-user-round mr-1"
                    >
                      <circle cx="12" cy="8" r="5" />
                      <path d="M20 21a8 8 0 0 0-16 0" />
                    </svg>
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                      Customers
                    </span>
                  </Link>

                  {/* <!-- Always Visible Submenu --> */}
                  <ul
                    className="sub-menu ml-8"
                    style={{
                      display: activeMenu === "customers" ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        href={"/admin/customers"}
                        className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                      >
                        <span>Drafts</span>
                      </Link>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                      >
                        <span>Abandoned checkouts</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sub-nav">
                  <a
                    href="javascript:void(0)"
                    onClick={() => handleToggle("content")}
                    className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-images mr-1"
                    >
                      <path d="M18 22H4a2 2 0 0 1-2-2V6" />
                      <path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" />
                      <circle cx="12" cy="8" r="2" />
                      <rect width="16" height="16" x="6" y="2" rx="2" />
                    </svg>
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                      Content
                    </span>
                  </a>

                  {/* <!-- Always Visible Submenu --> */}
                  <ul
                    className="sub-menu ml-8"
                    style={{
                      display: activeMenu === "content" ? "block" : "none",
                    }}
                  >
                    <li>
                      <a
                        href="{{ route('blog.blog_list') }}"
                        className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                      >
                        <span>blog</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                      >
                        <span>Abandoned checkouts</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sub-nav">
                  <a
                    href="javascript:void(0)"
                    onClick={() => handleToggle("marketing")}
                    className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-target mr-1"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                      Marketing
                    </span>
                  </a>

                  {/* <!-- Always Visible Submenu --> */}
                  <ul
                    className="sub-menu ml-8"
                    style={{
                      display: activeMenu === "marketing" ? "block" : "none",
                    }}
                  >
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                      >
                        <span>Drafts</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                      >
                        <span>Abandoned checkouts</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sub-nav">
                  <a
                    href="javascript:void(0)"
                    onClick={() => handleToggle("analytics")}
                    className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chart-column-big mr-1"
                    >
                      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                      <rect x="15" y="5" width="4" height="12" rx="1" />
                      <rect x="7" y="8" width="4" height="9" rx="1" />
                    </svg>
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                      Analytics
                    </span>
                  </a>

                  {/* <!-- Always Visible Submenu --> */}
                  <ul
                    className="sub-menu ml-8"
                    style={{
                      display: activeMenu === "analytics" ? "block" : "none",
                    }}
                  >
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                      >
                        <span>Drafts</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                      >
                        <span>Abandoned checkouts</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    href={"/admin/discounts"}
                    className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500] z-40 relative"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-badge-percent mr-1"
                    >
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                      <path d="m15 9-6 6" />
                      <path d="M9 9h.01" />
                      <path d="M15 15h.01" />
                    </svg>
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                      Discounts
                    </span>
                  </Link>

                  {/* <!-- Always Visible Submenu --> */}
                  {/* <ul className="sub-menu ml-8">
                                    <li>
                                        <a href="javascript:void(0)"
                                            className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]">
                                            <span>Drafts</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)"
                                            className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]">
                                            <span>Abandoned checkouts</span>
                                        </a>
                                    </li>
                                </ul> */}
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h6 className="text-[#303030d8] text-[12px] font-[600] px-4 flex justify-between items-center hover:text-[#303030]">
                <span>Sales Channel</span>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </h6>
              <ul className="mt-3">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-store mr-1 bg-[#000000be] px-[2px] py-[2px] rounded-sm"
                    >
                      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                      <path d="M2 7h20" />
                      <path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" />
                    </svg>
                    <span>Online Store</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h6 className="text-[#303030d8] text-[12px] font-[600] px-4 flex justify-between items-center hover:text-[#303030]">
                <span>Apps</span>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right "
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </h6>
              <ul className="mt-3">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-plus mr-1"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12h8" />
                      <path d="M12 8v8" />
                    </svg>
                    <span>Add Apps</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="lower-links">
            <ul className="mt-3">
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-[#303030] hover:text-[#303030] text-[12px] flex items-center hover:bg-[#ffffff83] px-4 py-1 rounded-md transition-all font-[500]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-settings mr-1"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>

                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Sidebar --> */}
      <nav
        id="sidebar"
        className="bg-[#211636] shadow-lg h-screen fixed top-100 right-0 min-w-[270px] py-6 px-4 font-[sans-serif] flex flex-col overflow-auto transform translate-x-full transition-transform"
      >
        {/* <!-- Close Button --> */}
        <button
          id="closeButton"
          className="absolute top-4 right-4 text-white text-xl"
        >
          ✕
        </button>

        <div className="flex flex-wrap items-center cursor-pointer">
          {/* <div className="relative">
                    <img src='https://readymadeui.com/profile_2.webp'
                        className="w-12 h-12 p-1 rounded-full border-2 border-gray-300" />
                    <span className="h-3 w-3 rounded-full bg-green-600 block absolute bottom-1 right-0"></span>
                </div>

                <div className="ml-6">
                    <p className="text-xs text-gray-300">Hello</p>
                    <h6 className="text-base text-white">John Doe</h6>
                </div> */}
        </div>

        {/* <hr className="border-gray-500 mt-8" /> */}

        {/* <div className="my-8 flex-1">
                <h6 className="text-[12px] text-white inline-block">Teams</h6>

                <ul className="mt-6 space-y-6">
                    <li className="flex items-center text-[12px] text-gray-300 hover:text-white cursor-pointer">
                        <span className="relative inline-block mr-4">
                            <img src='https://readymadeui.com/profile_3.webp'
                                className="w-10 h-10 p-1 rounded-full border-2 border-gray-300" />
                            <span className="h-3 w-3 rounded-full bg-green-600 block absolute bottom-1 right-0"></span>
                        </span>
                        Peter Taylor
                        <span
                            className="bg-red-500 min-w-[20px] min-h-[20px] px-1 flex items-center justify-center text-white text-[11px] font-bold rounded-full ml-auto">1</span>
                    </li>
                </ul>
            </div> */}
      </nav>
    </>
  );
};

export default Sidebar;
