import Button from "@/admin/components/Button";
import Link from "next/link";
import React from "react";

const OrderList = () => {
  return (
    <section
      className="main-body-wrapper ml-0 p-6 transition-all duration-300 bg-[#f1f1f1] h-[100%]"
      id="content"
    >
      {/* <!-- page-starts --> */}
      <form className="collection-wrapper w-[100%] max-w-w-75 flex flex-col justify-center gap-3 mx-auto px-2">
        <div className="heading-sec flex items-center py-5 gap-2 justify-center">
          <div className="flex w-[100%]  max-w-[100%] justify-between">
            <h2 className="text-[20px] font-[700] text-[#303030]">Products</h2>
            <div className="buttons-sec flex gap-2">
              <Button variant="white">Drafts</Button>
              <Button type="link" href={"/admin/orders/create"}>
                Create Orders
              </Button>
            </div>
          </div>
        </div>
        <div className="page-section w-[100%] bg-[#fff]  border border-[#3030302d] rounded-lg px-3 mb-5 flex gap-3 items-center">
          <div className="part-1 py-3">
            <div className="relative inline-block text-left border-r border-gray-200 px-4">
              {/* <!-- Main Button --> */}
              <button
                id="filterDropdownBtn"
                type="button"
                className="inline-flex justify-between items-center w-full text-[13px] text-gray-800 font-[500] gap-2"
              >
                <i data-lucide="calendar" className="w-4"></i>
                <span id="selectedFilter">Today</span>
              </button>

              {/* <!-- Dropdown --> */}
              <div
                id="filterDropdown"
                className="hidden absolute mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10"
              >
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <label className="flex items-center px-4 py-2 cursor-pointer">
                      <input
                        type="radio"
                        name="filter"
                        value="Today"
                        className="mr-2"
                      />
                      Today
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center px-4 py-2 cursor-pointer">
                      <input
                        type="radio"
                        name="filter"
                        value="Last 7 Days"
                        className="mr-2"
                      />
                      Last 7 Days
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center px-4 py-2 cursor-pointer">
                      <input
                        type="radio"
                        name="filter"
                        value="Last 1 Month"
                        className="mr-2"
                      />
                      Last 1 Month
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="part-1 py-3 w-[100%]">
            <div className="border-r border-gray-200 px-4">
              <h6 className="text-[13px] text-[#000] font-[600] border-b border-dashed border-[#000] py-2">
                Orders
              </h6>
              <div className="flex justify-between w-[100%] py-1">
                <h6 className="text-[13px] text-[#000] font-[600] flex gap-2 items-center border-b-[2px] border-blue-400 max-w-max">
                  <span>7</span>
                  <span>
                    <i data-lucide="move-down-right" className="w-3"></i>
                  </span>
                  <span className="text-gray-500 font-[600]">13%</span>
                </h6>
                <div className="graph">
                  <img
                    src="https://img.freepik.com/free-vector/business-arrow-showing-growth-progress_1394-344.jpg"
                    alt=""
                    className="w-[40px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="part-1 py-3 w-[100%]">
            <div className="border-r border-gray-200 px-4">
              <h6 className="text-[13px] text-[#000] font-[600] border-b border-dashed border-[#000] py-2">
                Items Ordered
              </h6>
              <div className="flex justify-between w-[100%] py-1">
                <h6 className="text-[13px] text-[#000] font-[600] flex gap-2 items-center border-b-[2px] border-blue-400 max-w-max">
                  <span>11</span>
                  <span>
                    <i data-lucide="move-up-right" className="w-3"></i>
                  </span>
                  <span className="text-gray-500 font-[600] text-green-800">
                    22%
                  </span>
                </h6>
                <div className="graph">
                  <img
                    src="https://img.freepik.com/free-vector/business-success-growth-green-arrow-world-map_1017-45122.jpg"
                    alt=""
                    className="w-[40px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="part-1 py-3 w-[100%]">
            <div className="border-r border-gray-200 px-4">
              <h6 className="text-[13px] text-[#000] font-[600] border-b border-dashed border-[#000] py-2">
                Returns
              </h6>
              <div className="flex justify-between w-[100%] py-1">
                <h6 className="text-[13px] text-[#000] font-[600] flex gap-2 items-center border-b-[2px] border-blue-400 max-w-max">
                  <span>&#8377; 10,000</span>
                  <span>
                    <i data-lucide="move-up-right" className="w-3"></i>
                  </span>
                  <span className="text-gray-500 font-[600] text-red-800">
                    22%
                  </span>
                </h6>
                <div className="graph">
                  <img
                    src="https://img.freepik.com/free-photo/flat-statistics-presentation-with-arrow_23-2149023766.jpg"
                    alt=""
                    className="w-[40px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="part-1 py-3 w-[100%]">
            <div className="border-r border-gray-200 px-4">
              <h6 className="text-[13px] text-[#000] font-[600] border-b border-dashed border-[#000] py-2">
                Orders Fullfilled
              </h6>
              <div className="flex justify-between w-[100%] py-1">
                <h6 className="text-[13px] text-[#000] font-[600] flex gap-2 items-center border-b-[2px] border-blue-400 max-w-max">
                  <span>7</span>
                  <span>
                    <i data-lucide="move-down-right" className="w-3"></i>
                  </span>
                  <span className="text-gray-500 font-[600]">30%</span>
                </h6>
                <div className="graph">
                  <img
                    src="https://img.freepik.com/free-vector/red-arrow-pointing-downwards-showing-crisis_1394-769.jpg?"
                    alt=""
                    className="w-[40px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="part-1 py-3 w-[100%]">
            <div className="border-r border-gray-200 px-4">
              <h6 className="text-[13px] text-[#000] font-[600] border-b border-dashed border-[#000] py-2">
                Order Delivered
              </h6>
              <div className="flex justify-between w-[100%] py-1">
                <h6 className="text-[13px] text-[#000] font-[600] flex gap-2 items-center border-b-[2px] border-blue-400 max-w-max">
                  <span>11</span>
                  <span>
                    <i data-lucide="move-up-right" className="w-3"></i>
                  </span>
                  <span className="text-gray-500 font-[600] text-green-800">
                    250%
                  </span>
                </h6>
                <div className="graph">
                  <img
                    src="https://img.freepik.com/free-vector/red-arrow-going-up-with-bar-chart_1308-110320.jpg"
                    alt=""
                    className="w-[40px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="part-1 py-3 w-[100%]">
            <div className="border-r border-gray-200 px-4">
              <h6 className="text-[13px] text-[#000] font-[600] border-b border-dashed border-[#000] py-2">
                Orders to Fulfillment Time
              </h6>
              <div className="flex justify-between w-[100%] py-1">
                <h6 className="text-[13px] text-[#000] font-[600] flex gap-2 items-center border-b-[2px] border-blue-400 max-w-max">
                  <span>7</span>
                  <span>
                    <i data-lucide="move-up-right" className="w-3"></i>
                  </span>
                  <span className="text-gray-500 font-[600]">30%</span>
                </h6>
                <div className="graph">
                  <img
                    src="https://img.freepik.com/free-vector/illustration-data-analysis-graph_53876-17902.jpg"
                    alt=""
                    className="w-[40px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="collection-wrapper w-[100%] max-w-full">
          {/* <!-- first-section --> */}
          <div className="full-page-w max-w-full">
            <div className="page-section w-[100%] bg-[#fff]  border border-[#3030302d] rounded-lg">
              <div className="mx-auto py-2 w-full px-1">
                <div className="overflow-x-auto">
                  <div className="top-btns-sec py-3 flex justify-between items-center">
                    <div className="left-sec flex gap-2 items-center">
                      <button className="text-[12px] text-gray-900 font-normal px-3 py-1 bg-gray-200 rounded-lg h-[30px] focus:bg-gray-200 active:bg-gray-200">
                        All
                      </button>
                      <button className="text-[12px] text-gray-900 font-normal px-3 py-1 bg-white rounded-lg  h-[30px] focus:bg-gray-200 active:bg-gray-200 hover:bg-gray-200">
                        Open and invoice sent
                      </button>
                      <button className="text-[12px] text-gray-900 font-normal px-3 py-1 bg-white rounded-lg h-[30px] focus:bg-gray-200 active:bg-gray-200 hover:bg-gray-200">
                        Open
                      </button>
                      <button className="text-[12px] text-gray-900 font-normal px-3 py-1 bg-white rounded-lg h-[30px] focus:bg-gray-200 active:bg-gray-200 hover:bg-gray-200">
                        Invoice sent
                      </button>
                      <button className="text-[12px] text-gray-900 font-normal px-3 py-1 bg-white rounded-lg h-[30px] focus:bg-gray-200 active:bg-gray-200 hover:bg-gray-200">
                        Completed
                      </button>
                      <button className="text-[12px] text-gray-900 font-normal px-3 py-1 bg-white rounded-lg h-[30px] focus:bg-gray-200 active:bg-gray-200 hover:bg-gray-200">
                        +
                      </button>
                    </div>
                    <div className="right-sec flex gap-2 items-center">
                      <button className="bg-white submit-search-button rounded-lg px-2 py-1 border border-gray-200 text-gray-500/50 text-[13px] flex gap-2">
                        <span>
                          <i data-lucide="search" className="w-4"></i>
                        </span>
                        <span>
                          <i data-lucide="list-filter" className="w-4"></i>
                        </span>
                      </button>
                      <button className="bg-white submit-search-button rounded-lg px-3 py-1 border border-gray-200 text-gray-500/50 text-[13px]">
                        <span>
                          <i data-lucide="arrow-down-up" className="w-4"></i>
                        </span>
                      </button>
                    </div>
                  </div>

                  <table id="search-table" className="display w-full bg-white">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-2 py-0 border-t border-b border-gray-200">
                          <input
                            type="checkbox"
                            id="select-all"
                            className="custom-checkbox section"
                          />
                        </th>
                        <th className="px-2 py-0 text-[13px] border-t border-b border-gray-200">
                          Drafts
                        </th>
                        <th className="px-2 py-0 text-[13px] border-t border-b border-gray-200">
                          Date
                        </th>
                        <th className="px-2 py-0 text-[13px] border-t border-b border-gray-200">
                          Customer
                        </th>
                        <th className="px-2 py-0 text-[13px] border-t border-b border-gray-200">
                          Status
                        </th>
                        <th className="px-2 py-0 text-[13px] border-t border-b border-gray-200">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-t border-b border-gray-100 hover:bg-gray-100">
                        <td className="px-2 py-0">
                          <input
                            type="checkbox"
                            className="row-checkbox custom-checkbox section"
                          />
                        </td>
                        <td className="px-2 py-0 text-[13px]">
                          <div>
                            <span
                              data-popover-target="popover-description"
                              data-popover-placement="bottom-end"
                              type="button"
                            >
                              <span className="sr-only">Show information</span>
                              #D26
                            </span>

                            <div
                              data-popover
                              id="popover-description"
                              role="tooltip"
                              className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
                            >
                              <div className="p-3 space-y-2 h-[100px] overflow-y-auto">
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                  Activity growth - Incremental
                                </h3>
                                <p>
                                  Report helps navigate cumulative growth of
                                  community activities. Ideally, the chart
                                  should have a growing trend, as stagnating
                                  chart signifies a significant decrease of
                                  community activity.
                                </p>
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                  Calculation
                                </h3>
                                <p>
                                  For each date bucket, the all-time volume of
                                  activities is calculated. This means that
                                  activities in period n contain all activities
                                  up to period n, plus the activities generated
                                  by your community in period.
                                </p>
                              </div>
                              <div data-popper-arrow></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-2 py-0 text-[13px]">
                          Tuesday at 10:23 pm
                        </td>
                        <td className="px-2 py-0 text-[13px]">-</td>
                        <td className="px-2 py-0 text-[13px]">
                          <span className="bg-green-200 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-gray-700 dark:text-green-400 border border-green-200">
                            <i className="fa-solid fa-square text-[10px] text-gray-500 mr-2"></i>
                            Completed
                          </span>
                        </td>

                        <td className="px-2 py-0 text-[13px]">
                          &#8377; 20,375.00 INR{" "}
                        </td>
                      </tr>
                      <tr className="bg-white border-t border-b border-gray-100 hover:bg-gray-100">
                        <td className="px-2 py-0">
                          <input
                            type="checkbox"
                            className="row-checkbox custom-checkbox section"
                          />
                        </td>
                        <td className="px-2 py-0 text-[13px]">
                          <div>
                            <span
                              data-popover-target="popover-description2"
                              data-popover-placement="bottom-end"
                              type="button"
                            >
                              <span className="sr-only">Show information</span>
                              #D26
                            </span>

                            <div
                              data-popover
                              id="popover-description2"
                              role="tooltip"
                              className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
                            >
                              <div className="p-3 space-y-2 h-[100px] overflow-y-auto">
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                  Activity growth - Incremental
                                </h3>
                                <p>
                                  Report helps navigate cumulative growth of
                                  community activities. Ideally, the chart
                                  should have a growing trend, as stagnating
                                  chart signifies a significant decrease of
                                  community activity.
                                </p>
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                  Calculation
                                </h3>
                                <p>
                                  For each date bucket, the all-time volume of
                                  activities is calculated. This means that
                                  activities in period n contain all activities
                                  up to period n, plus the activities generated
                                  by your community in period.
                                </p>
                              </div>
                              <div data-popper-arrow></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-2 py-0 text-[13px]">
                          Tuesday at 10:23 pm
                        </td>
                        <td className="px-2 py-0 text-[13px]">-</td>
                        <td className="px-2 py-0 text-[13px]">
                          <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-gray-700 dark:text-green-400 border border-gray-200">
                            <i className="fa-solid fa-square text-[10px] text-gray-500 mr-2"></i>
                            open
                          </span>
                        </td>

                        <td className="px-2 py-0 text-[13px]">
                          &#8377; 20,375.00 INR{" "}
                        </td>
                      </tr>
                      <tr className="bg-white border-t border-b border-gray-100 hover:bg-gray-100">
                        <td className="px-2 py-0">
                          <input
                            type="checkbox"
                            className="row-checkbox custom-checkbox section"
                          />
                        </td>
                        <td className="px-2 py-0 text-[13px]">
                          <div>
                            <span
                              data-popover-target="popover-description3"
                              data-popover-placement="bottom-end"
                              type="button"
                            >
                              <span className="sr-only">Show information</span>
                              #D26
                            </span>

                            <div
                              data-popover
                              id="popover-description3"
                              role="tooltip"
                              className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
                            >
                              <div className="p-3 space-y-2 h-[100px] overflow-y-auto">
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                  Activity growth - Incremental
                                </h3>
                                <p>
                                  Report helps navigate cumulative growth of
                                  community activities. Ideally, the chart
                                  should have a growing trend, as stagnating
                                  chart signifies a significant decrease of
                                  community activity.
                                </p>
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                  Calculation
                                </h3>
                                <p>
                                  For each date bucket, the all-time volume of
                                  activities is calculated. This means that
                                  activities in period n contain all activities
                                  up to period n, plus the activities generated
                                  by your community in period.
                                </p>
                              </div>
                              <div data-popper-arrow></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-2 py-0 text-[13px]">
                          Tuesday at 10:23 pm
                        </td>
                        <td className="px-2 py-0 text-[13px]">-</td>
                        <td className="px-2 py-0 text-[13px]">
                          <span className="bg-yellow-200 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-gray-700 dark:text-green-400 border border-yellow-200">
                            <i className="fa-solid fa-square text-[10px] text-gray-500 mr-2"></i>
                            Invoice Sent
                          </span>
                        </td>

                        <td className="px-2 py-0 text-[13px]">
                          &#8377; 20,375.00 INR{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- first-section --> */}
        </div>
        {/* <!-- Main modal --> */}
      </form>
      {/* <!-- page-starts --> */}
    </section>
  );
};

export default OrderList;
