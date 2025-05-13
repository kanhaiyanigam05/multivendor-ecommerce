import Button from "@/admin/components/Button";
import React from "react";

const CustomerList = () => {
  return (
    <section
      className="main-body-wrapper ml-0 p-6 transition-all duration-300 bg-[#f1f1f1] h-[100%]"
      id="content"
    >
      {/* <!-- page-starts --> */}
      <form className="collection-wrapper w-[100%] max-w-w-75 flex flex-col justify-center gap-3 mx-auto px-2">
        <div className="heading-sec flex items-center py-5 gap-2 justify-center">
          <div className="flex w-[100%]  max-w-[100%] justify-between">
            <h2 className="text-[20px] font-[700] text-[#303030]">Customers</h2>
            <div className="buttons-sec flex gap-2">
              <Button variant="white">Import</Button>
              <Button variant="white">Export</Button>
              <Button type="link" href={"/admin/customers/create"}>
                Add Customers
              </Button>
            </div>
          </div>
        </div>
        <div className="page-section w-[100%] bg-[#fff]  border border-[#3030302d] rounded-lg px-3 mb-5 flex gap-3 items-center">
          <div className="part-1 py-3">
            <div className="border-r border-gray-200 px-4">
              <h6 className="text-[13px] text-[#000] font-[500] flex gap-2 items-center">
                627 Customers
              </h6>
            </div>
          </div>
          <div className="part-1 py-3">
            <div className="px-4">
              <h6 className="text-[13px] text-[#000] font-[500]">
                100% of your customer base
              </h6>
            </div>
          </div>
        </div>
        <div className="collection-wrapper w-[100%] max-w-full">
          {/* <!-- first-section --> */}
          <div className="full-page-w max-w-full">
            <div className="page-section w-[100%] bg-[#fff]  border border-[#3030302d] rounded-lg">
              <div className="mx-auto py-2 w-full px-1">
                <div className="overflow-x-auto">
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
                          Customer Name
                        </th>
                        <th className="px-2 py-0 text-[13px] border-t border-b border-gray-200">
                          Email Subscription
                        </th>
                        <th className="px-2 py-0 text-[13px] border-t border-b border-gray-200">
                          Location
                        </th>
                        <th className="px-2 py-0 text-[13px] border-t border-b border-gray-200">
                          Orders
                        </th>
                        <th className="px-2 py-0 text-[13px] border-t border-b border-gray-200">
                          Amount Spent
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
                          <span>Swati </span>
                        </td>
                        <td className="px-2 py-0 text-[13px]">
                          <span className="bg-green-200 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-gray-700 dark:text-green-400 border border-green-200">
                            Subscribed
                          </span>
                        </td>
                        <td className="px-2 py-0 text-[13px]">-</td>
                        <td className="px-2 py-0 text-[13px]">0 Orders</td>

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
                          <span>Vandana Arora </span>
                        </td>
                        <td className="px-2 py-0 text-[13px]">
                          <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-gray-700 dark:text-green-400 border border-gray-200">
                            Not Subscribed
                          </span>
                        </td>
                        <td className="px-2 py-0 text-[13px]">-</td>
                        <td className="px-2 py-0 text-[13px]">0 Orders</td>

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
                          <span>KP </span>
                        </td>
                        <td className="px-2 py-0 text-[13px]">
                          <span className="bg-blue-200 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-gray-700 dark:text-green-400 border border-gray-200">
                            Pending
                          </span>
                        </td>
                        <td className="px-2 py-0 text-[13px]">-</td>
                        <td className="px-2 py-0 text-[13px]">0 Orders</td>

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
        {/* <!-- Export-modal --> */}
        <div
          id="default-modal-export"
          tabIndex="-1"
          aria-hidden="true"
          className="bg-[#00000059] hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div className="bg-gray-100 px-2 py-3 flex items-center justify-between  border-b rounded-t-lg dark:border-gray-600 border-gray-200">
                <h3 className="text-[14px] font-semibold text-gray-900 flex gap-1">
                  Import customers by CSV{" "}
                  <i data-lucide="info" className="w-4 text-gray-500"></i>
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal-export"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-4 md:p-5 space-y-4">
                <div className="modal-card-1">
                  <div className="border border-gray-500 rounded-lg flex">
                    <div className="px-4 py-4 border-r border-gray-300 bg-gray-100 rounded-l-lg flex justify-center items-center w-[80px]">
                      <i data-lucide="paperclip"></i>
                    </div>
                    <div className="px-4 py-4 flex justify-between items-center w-[100%]">
                      <div>
                        <h5 className="text-[13px] font-600 text-[#303030]">
                          customer_template-NASuaO10VLI3csv
                        </h5>
                        <span className="bg-black px-1 py-1 text-[13px] text-white font-[500] rounded-lg">
                          CSV
                        </span>
                        <span className="text-gray-400 font-[500] text-[13px]">
                          482 bytes
                        </span>
                      </div>
                      <button className="px-2 py-1 text-[13px] text-[#303030] submit-search-button rounded-lg">
                        Replace File
                      </button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center mb-3">
                      <input
                        id=""
                        type="checkbox"
                        value=""
                        className="custom-checkbox w-4 h-4 rounded-lg"
                      />
                      <label
                        htmlFor=""
                        className="ms-2 text-[13px] font-[500] text-gray-600"
                      >
                        I Overwrite existing customers that have the same email
                        or phone
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center mb-3">
                      <input
                        id=""
                        type="checkbox"
                        value=""
                        className="custom-checkbox w-4 h-4 rounded-lg"
                      />
                      <label
                        htmlFor=""
                        className="ms-2 text-[13px] font-[500] text-gray-600"
                      >
                        I Add tags to customers in this CSV and use these tags
                        to create a segment
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Modal footer --> */}
              <div className="flex items-center justify-between px-2 py-3 border-t border-gray-200 rounded-b-lg dark:border-gray-600 w-[100%]">
                <button
                  data-modal-hide="default-modal-export"
                  type="button"
                  className="text-blue-900 font-medium  text-[14px] text-center border-0 outline-none underline"
                >
                  Download a sample CSV
                </button>
                <div className="flex items-center justify-end gap-3">
                  <button
                    data-modal-hide="default-modal-export"
                    type="button"
                    className="text-black bg-white font-medium rounded-lg text-[13px] px-5 py-2 text-center submit-search-button"
                  >
                    I Cancel
                  </button>
                  <button
                    data-modal-hide="default-modal-export"
                    type="button"
                    className="text-white bg-black font-medium rounded-lg text-[13px] px-5 py-2 text-center submit-search-button"
                  >
                    Import Customers
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Export-modal --> */}
        {/* <!--Import-modal --> */}
        <div
          id="default-modal-import"
          tabIndex="-1"
          aria-hidden="true"
          className="bg-[#00000059] hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div className="bg-gray-100 px-2 py-3 flex items-center justify-between  border-b rounded-t-lg dark:border-gray-600 border-gray-200">
                <h3 className="text-[14px] font-semibold text-gray-900 flex gap-1">
                  Import customers by CSV{" "}
                  <i data-lucide="info" className="w-4 text-gray-500"></i>
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal-import"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-4 md:p-5 space-y-4">
                {/* =============import-file-here ================ */}
              </div>
              {/* <!-- Modal footer --> */}
              <div className="flex items-center justify-between px-2 py-3 border-t border-gray-200 rounded-b-lg dark:border-gray-600 w-[100%]">
                <button
                  data-modal-hide="default-modal-import"
                  type="button"
                  className="text-blue-900 font-medium  text-[14px] text-center border-0 outline-none underline"
                >
                  Download a sample CSV
                </button>
                <div className="flex items-center justify-end gap-3">
                  <button
                    data-modal-hide="default-modal-import"
                    type="button"
                    className="text-black bg-white font-medium rounded-lg text-[13px] px-5 py-2 text-center submit-search-button"
                  >
                    I Cancel
                  </button>
                  <button
                    data-modal-hide="default-modal-import"
                    type="button"
                    className="text-white bg-black font-medium rounded-lg text-[13px] px-5 py-2 text-center submit-search-button"
                  >
                    Import Customers
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Import-modal --> */}
      </form>
      {/* <!-- page-starts --> */}
    </section>
  );
};

export default CustomerList;
