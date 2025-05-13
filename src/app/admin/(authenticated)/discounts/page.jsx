"use client";
import Button from "@/admin/components/Button";
import Modal from "@/admin/components/Modal";
import Link from "next/link";
import React, { useState } from "react";

const DiscountsList = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <section
      className="main-body-wrapper ml-0 p-6 transition-all duration-300 bg-[#f1f1f1] h-[100%]"
      id="content"
    >
      {/* <!-- page-starts --> */}
      <form className="collection-wrapper w-[100%] max-w-w-75 flex flex-col justify-center gap-3 mx-auto">
        <div className="heading-sec flex items-center py-5 gap-2 justify-center">
          <div className="flex w-[100%]  max-w-[100%] justify-between">
            <h2 className="text-[20px] font-[700] text-[#303030]">Discount</h2>
            <div className="flex gap-2">
              <Button disabled className={"opacity-50"}>
                <i className="fa fa-download mr-2"></i>
                <span>Export</span>
              </Button>
              <Button onClick={() => setShowModal(true)}>
                Create Discount
              </Button>
            </div>
          </div>
        </div>
        <div className="collection-wrapper w-[100%] max-w-full">
          {/* <!-- first-section --> */}
          <div className="full-page-w max-w-full">
            <div className="page-section w-[100%] bg-[#fff] px-3 py-3 border border-[#3030302d] rounded-lg">
              <div className="space-y-6 font-[sans-serif] max-w-[100%] mx-auto flex flex-col justify-center items-center gap-2">
                <div className="top-img">
                  <img src="{{ asset('adminhtml/images/1.svg') }}" alt="" />
                </div>
                <div className="text-center flex flex-col gap-1 justify-center items-center">
                  <h5 className="text-[#303030] font-[600] text-[14px]">
                    Manage discounts and promotions
                  </h5>
                  <p className="text-[#303030] font-[400] text-[12px] max-w-[400px]">
                    Add discount codes and automatic discounts that apply at
                    checkout. You can also use discounts with{" "}
                    <a href="#" className="text-blue-600 underline">
                      compare at prices.
                    </a>
                  </p>
                  <Button
                    onClick={() => setShowModal(true)}
                    className="me-2 mb-2 mt-3"
                  >
                    Create Discount
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- first-section --> */}
        </div>

        {/* <!-- Main modal --> */}
        <Modal
          title="Select discount type"
          show={showModal}
          onHide={() => setShowModal(false)}
        >
          <div>
            <div className="modal-content">
              <ul>
                <li className="hover:bg-[#e7e6e683] px-3 py-3 rounded-md border-b border-gray-200">
                  <Link href={"/admin/discounts/create/amount-off-product"}>
                    <div className="list-section flex justify-between">
                      <div>
                        <p className="font-[600] text-[13px] text-[#303030]">
                          Amount off products
                        </p>
                        <p>
                          <span className="font-[400] text-[13px] text-[#303030] justify-center items-center">
                            Discount specific products or collections of
                            products
                          </span>
                        </p>
                      </div>
                      <div className="flex gap-2 justify-center items-center">
                        <span className="bg-gray-200 text-gray-500 text-xs font-medium me-2 px-2.5 py-1 rounded-md flex items-center gap-2">
                          <i className="fa fa-tag transform -scale-x-100"></i>
                          Product Discount
                        </span>
                        <p className="text-xs text-gray-400">
                          <i className="fa fa-chevron-right"></i>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="hover:bg-[#e7e6e683] px-3 py-3 rounded-md border-b border-gray-200">
                  <Link href={"/admin/discounts/create/buy-x-get-y"}>
                    <div className="list-section flex justify-between">
                      <div>
                        <p className="font-[600] text-[13px] text-[#303030]">
                          Buy X get Y
                        </p>
                        <p>
                          <span className="font-[400] text-[13px] text-[#303030] justify-center items-center">
                            Discount products based on a customer’s purchase
                          </span>
                        </p>
                      </div>
                      <div className="flex gap-2 justify-center items-center">
                        <span className="bg-gray-200 text-gray-500 text-xs font-medium me-2 px-2.5 py-1 rounded-md flex items-center gap-2">
                          <i className="fa fa-tag transform -scale-x-100"></i>
                          Product Discount
                        </span>
                        <p className="text-xs text-gray-400">
                          <i className="fa fa-chevron-right"></i>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="hover:bg-[#e7e6e683] px-3 py-3 rounded-md border-b border-gray-200">
                  <Link href={"/admin/discounts/create/amount-off-order"}>
                    <div className="list-section flex justify-between">
                      <div>
                        <p className="font-[600] text-[13px] text-[#303030]">
                          Amount off order
                        </p>
                        <p>
                          <span className="font-[400] text-[13px] text-[#303030] justify-center items-center">
                            Discount the total order amount
                          </span>
                        </p>
                      </div>
                      <div className="flex gap-2 justify-center items-center">
                        <span className="bg-gray-200 text-gray-500 text-xs font-medium me-2 px-2.5 py-1 rounded-md flex items-center gap-2">
                          <i className="fa fa-shopping-bag transform -scale-x-100"></i>
                          Order Discount
                        </span>
                        <p className="text-xs text-gray-400">
                          <i className="fa fa-chevron-right"></i>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="hover:bg-[#e7e6e683] px-3 py-3 rounded-md border-b border-gray-200">
                  <Link href={"/admin/discounts/create/free-shipping"}>
                    <div className="list-section flex justify-between">
                      <div>
                        <p className="font-[600] text-[13px] text-[#303030]">
                          Free shipping
                        </p>
                        <p>
                          <span className="font-[400] text-[13px] text-[#303030] justify-center items-center">
                            Offer free shipping on an order
                          </span>
                        </p>
                      </div>
                      <div className="flex gap-2 justify-center items-center">
                        <span className="bg-gray-200 text-gray-500 text-xs font-medium me-2 px-2.5 py-1 rounded-md flex items-center gap-2">
                          <i className="fa fa-truck transform -scale-x-100"></i>
                          Shipping discount
                        </span>
                        <p className="text-xs text-gray-400">
                          <i className="fa fa-chevron-right"></i>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Modal footer --> */}
          <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <Button variant="white" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
          </div>
        </Modal>
        <div className="w-full flex justify-center mt-1">
          <small>
            Learn more about
            <a href="#" className="text-blue-600 underline">
              discounts
            </a>
          </small>
        </div>
      </form>
      {/* <!-- page-starts --> */}
    </section>
  );
};

export default DiscountsList;
