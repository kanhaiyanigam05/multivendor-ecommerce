"use client";
import Button from "@/admin/components/Button";
import Input from "@/admin/components/Input";
import Modal from "@/admin/components/Modal";
import Select from "@/admin/components/Select";
import useForm from "@/admin/hooks/useForm";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CustomerCreate = () => {
  const { data, setData, post, errors, processing, reset, success } = useForm({
    fname: "",
    lname: "",
    email: "",
    tel: "",
    phone: "",
    address: [],
  });
  const [address, setAddress] = useState([]);
  const [showModal, setShowModal] = useState(false);
  console.log(data, "data, address", address);
  useEffect(() => {
    setAddress(data.address);
  }, [data.address]);

  return (
    <section
      className="main-body-wrapper ml-0 p-6 transition-all duration-300 bg-[#f1f1f1] h-full"
      id="content"
    >
      {/* <!-- page-starts --> */}
      <form className="collection-wrapper w-full max-w-[920px] flex flex-col justify-center gap-3 mx-auto px-2">
        <div className="heading-sec flex items-center py-5 gap-2 justify-center">
          <div className="flex w-full  max-w-full justify-between">
            <h2 className="text-[20px] font-[700] text-gray-700 flex gap-1 items-center">
              <Link href="/admin/customers">
                <i className="fa fa-long-arrow-left"></i>
              </Link>
              <span>New Customer</span>
            </h2>
          </div>
        </div>
        <div className="collection-wrapper w-full max-w-full flex gap-4 items-start">
          {/* <!-- first-section --> */}
          <div className="full-page-w flex flex-col  items-start w-[60%]">
            <div className="bg-[#fff] px-4 py-4 border border-[#3030302d] rounded-lg mb-5 w-full flex flex-col gap-3">
              <div className="flex justify-between max-w-full items-end gap-2">
                <div className="flex max-w-full w-full flex-col gap-1">
                  <h3 className="text-sm font-semibold text-gray-700">
                    Customer Overview
                  </h3>
                </div>
              </div>
              <div className="relative border border-gray-400 rounded-lg px-3 py-3 w-full flex flex-col gap-3">
                <div className="flex justify-between w-full gap-3">
                  <Input
                    label={"First Name"}
                    id={"fname"}
                    placeholder={"First Name"}
                    value={data.fname}
                    onChange={(e) => setData("fname", e.target.value)}
                  />
                  <Input
                    label={"Last Name"}
                    id={"lname"}
                    placeholder={"Last Name"}
                    value={data.lname}
                    onChange={(e) => setData("lname", e.target.value)}
                  />
                </div>

                <Input
                  label={"Email"}
                  id={"email"}
                  placeholder={"Email"}
                  value={data.email}
                  onChange={(e) => setData("email", e.target.value)}
                />
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <div className="flex justify-between w-full gap-3 mb-3 items-end">
                    <Select
                      wrapperClass="!w-24"
                      id={"tel"}
                      placeholder={"tel"}
                      value={data.tel}
                      onChange={(e) => setData("tel", e.target.value)}
                    />
                    <Input
                      id={"phone"}
                      placeholder={"Phone"}
                      value={data.phone}
                      onChange={(e) => setData("phone", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mb-5 ">
              <div className="bg-[#fff] px-4 py-4 border border-[#3030302d]  rounded-lg w-full flex flex-col gap-3">
                <div className="flex flex-col max-w-full items-end gap-2">
                  <div className="flex max-w-full w-full flex-col gap-1">
                    <h3 className="text-[13px] text-gray-700 font-[600]">
                      Default Address
                    </h3>
                    <p className="text-[13px] text-gray-500 font-[500]">
                      This is the primary default address for this customer
                    </p>
                  </div>
                  <div className="w-full">
                    {Object.keys(data.address).length > 0 ? (
                      <div className="flex flex-col gap-3 p-3 rounded-lg border border-gray-300">
                        <div className="flex justify-between gap-1">
                          <h3 className="text-sm font-semibold text-gray-700">
                            Address
                          </h3>
                          <button
                            className="text-xs text-gray-600"
                            type="button"
                            onClick={() => setShowModal(true)}
                          >
                            <i className="fa fa-pencil"></i>
                          </button>
                        </div>
                        <div className="text-xs text-gray-600 flex flex-col gap-1">
                          <p>{`${address.fname} ${address.lname}`}</p>
                          <p>{address.company}</p>
                          <p>{address.address}</p>
                          <p>{address.address2}</p>
                          {address.zone ? (
                            <>
                              <p>{address.city}</p>
                              <p>{`${address.zone} ${address.postalcode}`}</p>
                            </>
                          ) : (
                            <p>{`${address.city} ${address.postalcode}`}</p>
                          )}
                          <p>{address.country}</p>
                          <p>{`+${address.telcode} ${address.phone}`}</p>
                        </div>
                      </div>
                    ) : (
                      <button
                        className="flex justify-between w-full px-2 py-2 border border-gray-400 rounded-lg"
                        type="button"
                        onClick={() => setShowModal(true)}
                      >
                        <span className="flex gap-3 w-full">
                          <span className="border-2 border-gray-600 rounded-[50%] h-[18px] w-[18px] flex justify-center items-center text-gray-600">
                            <span className="text-[10px] font-[900] text-gray-600 flex justify-center items-center">
                              <i className="fa fa-plus"></i>
                            </span>
                          </span>

                          <span className="text-[14px] text-gray-600">
                            Add Address
                          </span>
                        </span>
                        <span className="flex justify-center items-center text-gray-600">
                          <i className="fa fa-angle-right text-[11px] font-[900] text-gray-600"></i>
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Modal
              show={showModal}
              onHide={() => setShowModal(false)}
              title={"Add default address"}
            >
              <div className="w-full relative border-t border-gray-400 px-3 py-3 flex flex-col gap-3">
                <Select
                  id={"country"}
                  label={"Country/region"}
                  placeholder={"Country/region"}
                  value={address.country || ""}
                  onChange={(e) =>
                    setAddress((prevData) => ({
                      ...prevData,
                      country: e.target.value,
                    }))
                  }
                />
                <div className="flex justify-between w-full gap-3">
                  <Input
                    label={"First Name"}
                    id={"fname"}
                    placeholder={"First Name"}
                    value={address.fname || ""}
                    onChange={(e) =>
                      setAddress((prevData) => ({
                        ...prevData,
                        fname: e.target.value,
                      }))
                    }
                  />
                  <Input
                    label={"Last Name"}
                    id={"lname"}
                    placeholder={"Last Name"}
                    value={address.lname || ""}
                    onChange={(e) =>
                      setAddress((prevData) => ({
                        ...prevData,
                        lname: e.target.value,
                      }))
                    }
                  />
                </div>
                <Input
                  label={"Company"}
                  id={"company"}
                  placeholder={"Company"}
                  value={address.company || ""}
                  onChange={(e) =>
                    setAddress((prevData) => ({
                      ...prevData,
                      company: e.target.value,
                    }))
                  }
                />
                <Input
                  label={"Address"}
                  id={"address"}
                  placeholder={"Address"}
                  value={address.address || ""}
                  onChange={(e) =>
                    setAddress((prevData) => ({
                      ...prevData,
                      address: e.target.value,
                    }))
                  }
                />
                <Input
                  label={"Apartment,suite,etc"}
                  id={"apartment"}
                  placeholder={"Apartment,suite,etc"}
                  value={address.address2 || ""}
                  onChange={(e) =>
                    setAddress((prevData) => ({
                      ...prevData,
                      address2: e.target.value,
                    }))
                  }
                />
                <div className="flex justify-between w-full gap-3 mb-3">
                  <Input
                    label={"City"}
                    id={"city"}
                    placeholder={"City"}
                    value={address.city || ""}
                    onChange={(e) =>
                      setAddress((prevData) => ({
                        ...prevData,
                        city: e.target.value,
                      }))
                    }
                  />
                  <Select
                    label={"State"}
                    id={"zone"}
                    placeholder={"State"}
                    value={address.zone || ""}
                    onChange={(e) =>
                      setAddress((prevData) => ({
                        ...prevData,
                        zone: e.target.value,
                      }))
                    }
                  />
                </div>
                <Input
                  label={"PIN Code"}
                  id={"PIN"}
                  placeholder={"PIN Code"}
                  value={address.postalcode || ""}
                  onChange={(e) =>
                    setAddress((prevData) => ({
                      ...prevData,
                      postalcode: e.target.value,
                    }))
                  }
                />
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <div className="flex justify-between w-full gap-3 mb-3 items-end">
                    <Select
                      wrapperClass="!w-24"
                      id={"tel"}
                      placeholder={"tel"}
                      value={address.telcode || ""}
                      onChange={(e) =>
                        setAddress((prevData) => ({
                          ...prevData,
                          telcode: e.target.value,
                        }))
                      }
                    />
                    <Input
                      id={"phone"}
                      placeholder={"Phone"}
                      value={address.phone || ""}
                      onChange={(e) =>
                        setAddress((prevData) => ({
                          ...prevData,
                          phone: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
              </div>
              {/* <!-- Modal footer --> */}
              <div className="rounded-b-lg top-box-shadow flex justify-end items-center gap-2 px-2 py-2 border-t border-gray-200 dark:border-gray-600 bg-white">
                <Button
                  variant="white"
                  className="w-18"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="w-18"
                  onClick={() => {
                    setShowModal(false);
                    setData("address", address);
                  }}
                >
                  {Object.keys(data?.address || {}).length === 0
                    ? "Save"
                    : "Update"}
                </Button>
              </div>
            </Modal>
            <div
              className=" bg-[#fff] px-4 py-4 border border-[#3030302d] rounded-lg mb-5 w-full flex
                                                                    flex-col gap-3"
            >
              <div className="flex justify-between max-w-full items-end gap-2">
                <div className="flex max-w-full w-full flex-col gap-1">
                  <h3
                    htmlFor=""
                    className="text-[13px] text-gray-700 font-[500]"
                  >
                    Tax Details
                  </h3>
                  <div className="relative">
                    <label
                      htmlFor="small"
                      className="block mb-2 text-[13px] text-gray"
                    >
                      Collect Tax
                    </label>
                    <select
                      id="small"
                      className="block w-full border border-gray-500 rounded-lg h-[35px] px-2 text-[13px]"
                    >
                      <option value="Collect tax">Collect tax</option>
                      <option value="Collect tax unless exemptions apply">
                        Collect tax unless exemptions apply
                      </option>
                      <option value="Don't collect tax">
                        Don't collect tax
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- first-section --> */}
          {/* <!-- second-section --> */}
          <div className="full-page-w flex flex-col gap-3 items-start w-[320px]">
            <div className="page-section w-full bg-[#fff] px-4 py-4 border border-[#3030302d] rounded-lg flex justify-between items-center">
              <div className="flex justify-between w-full">
                <div className="flex flex-col justify-start">
                  <label className="text-[13px] text-gray-700 font-[700]">
                    Notes
                  </label>
                  <span className="text-[11px] text-gray-500 font-[400]">
                    No Notes
                  </span>
                </div>
                <button
                  className="bg-tranasprent border-0 outline-none"
                  data-modal-target="default-modal-notes_edit"
                  data-modal-toggle="default-modal-notes_edit"
                  type="button"
                >
                  <i data-lucide="pencil" className="w-4 text-gray-500"></i>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- second-section --> */}
          {/* <!-- note-edit-modal --> */}
          <div
            id="default-modal-notes_edit"
            tabIndex="-1"
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[#0000007a]"
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                <div>
                  {/* <!-- Modal header --> */}
                  <div className="flex items-center justify-between border-b rounded-t-lg dark:border-gray-600 border-gray-200 bg-gray-100 px-2 py-1">
                    <h3 className="text-[14px] font-semibold text-gray-900 dark:text-white">
                      Add note
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal-notes_edit"
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
                  <div className="px-5 py-5 w-full">
                    <div className="b-textarea w-full relative">
                      <textarea
                        className="border border-black rounded-lg w-full px-1 py-1"
                        rows="3"
                        maxLength="5000"
                      ></textarea>
                      <p className="char-counter absolute bottom-3 right-0 text-sm px-3 py-1">
                        0/5000
                      </p>
                    </div>
                  </div>
                  {/* <!-- Modal footer --> */}
                  <div className="rounded-b-lg top-box-shadow flex justify-end items-center gap-2 px-2 py-2 border-t border-gray-200 rounded-b dark:border-gray-600 bg-white">
                    <button
                      data-modal-hide="default-modal-notes_edit"
                      type="button"
                      className="submit-search-button text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg px-2 py-1 h-[35px] w-[70px]"
                    >
                      Cancel
                    </button>
                    <button
                      data-modal-hide="default-modal-notes_edit"
                      type="button"
                      className="submit-search-button text-sm font-medium text-gray-900 focus:outline-none bg-gray-200 rounded-lg px-2 py-1 h-[35px] w-[70px]"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- note-edit-modal --> */}

          {/* <!-- customer-add-n-modal --> */}
          <div
            id="default-modal-new-customer_add_edit"
            tabIndex="-1"
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[#0000007a]"
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                <div>
                  {/* <!-- Modal header --> */}
                  <div className="flex items-center justify-between border-b rounded-t-lg dark:border-gray-600 border-gray-200 bg-gray-100 px-2 py-1">
                    <h3 className="text-[14px] font-semibold text-gray-900 dark:text-white">
                      Create a new customer
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal-new-customer_add_edit"
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
                  <div className="px-5 py-5 w-full max-h-[83vh] overflow-y-auto">
                    <div className="w-full relative border border-gray-400 rounded-lg px-3 py-3">
                      <div className="mb-3">
                        <label
                          htmlFor=""
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Country/region
                        </label>
                        <select
                          id=""
                          className="h-[35px] bg-gray-50 rounded-lg w-full text-[13px] text-gray-700 border border-black py-1 px-2 outline-none focus:outline-blue-800"
                        >
                          <option value="India">India</option>
                          <option value="Hungary">Hungary</option>
                          <option value="Hati">Hati</option>
                          <option value="Japan">Japan</option>
                          <option value="Greece">Greece</option>
                        </select>
                      </div>
                      <div className="flex justify-between w-full gap-3 mb-3">
                        <div className="flex flex-col w-full">
                          <label
                            htmlFor=""
                            className="text-[13px] text-gray-600 font-[500]"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            className="border border-gray-500 rounded-lg h-[35px] px-1"
                          />
                        </div>
                        <div className="flex flex-col w-full">
                          <label
                            htmlFor=""
                            className="text-[13px] text-gray-600 font-[500]"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="border border-gray-500 rounded-lg h-[35px] px-1"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col w-full mb-3">
                        <label
                          htmlFor=""
                          className="text-[13px] text-gray-600 font-[500]"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          className="border border-gray-500 rounded-lg h-[35px] px-1"
                        />
                      </div>

                      <div className="flex justify-between w-full gap-3 mb-3 items-end">
                        <div className="flex flex-col w-[100px]">
                          <label
                            htmlFor="phone-code-1"
                            className="block text-sm font-medium text-gray-900 dark:text-white mb-1"
                          >
                            Phone
                          </label>
                          <input
                            id="phone-code-1"
                            type="tel"
                            className="phone-code w-full h-[35px] rounded-lg text-[13px] text-gray-700 border border-black py-1 px-2 outline-none focus:outline-blue-800"
                          />
                        </div>
                        <div className="flex-1">
                          <input
                            type="text"
                            className="w-full h-[35px] rounded-lg text-[13px] text-gray-700 border border-black py-1 px-2 outline-none focus:outline-blue-800"
                            placeholder="Enter phone number"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col w-full mb-3">
                        <label
                          htmlFor=""
                          className="text-[13px] text-gray-600 font-[500]"
                        >
                          Address
                        </label>
                        <div className="relative w-full">
                          <i
                            data-lucide="search"
                            className="w-4 absolute top-1 left-1"
                          ></i>
                          <input
                            type="text"
                            className="border border-gray-500 rounded-lg h-[35px] px-1 w-full pl-7"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col w-full mb-3">
                        <label
                          htmlFor=""
                          className="text-[13px] text-gray-600 font-[500]"
                        >
                          Apartment,suite,etc
                        </label>
                        <input
                          type="text"
                          className="border border-gray-500 rounded-lg h-[35px] px-1"
                        />
                      </div>
                      <div className="flex justify-between w-full gap-3 mb-3">
                        <div className="flex flex-col w-full">
                          <label
                            htmlFor=""
                            className="text-[13px] text-gray-600 font-[500]"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            className="border border-gray-500 rounded-lg h-[35px] px-1"
                          />
                        </div>
                        <div className="flex flex-col w-full">
                          <label
                            htmlFor="state"
                            className="text-[13px] text-gray-600 font-[500]"
                          >
                            State
                          </label>
                          <select
                            id="state"
                            name="state"
                            className="h-[35px] bg-gray-50 rounded-lg w-full text-[13px] text-gray-700 border border-black py-1 px-2 outline-none"
                          >
                            <option value="">Select State</option>
                            <option value="Andhra Pradesh">
                              Andhra Pradesh
                            </option>
                            <option value="Arunachal Pradesh">
                              Arunachal Pradesh
                            </option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">
                              Himachal Pradesh
                            </option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">
                              Madhya Pradesh
                            </option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                            <option>──────────</option>
                            <option value="Andaman and Nicobar Islands">
                              Andaman and Nicobar Islands
                            </option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Dadra and Nagar Haveli and Daman and Diu">
                              Dadra and Nagar Haveli and Daman and Diu
                            </option>
                            <option value="Delhi">Delhi</option>
                            <option value="Jammu and Kashmir">
                              Jammu and Kashmir
                            </option>
                            <option value="Ladakh">Ladakh</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Puducherry">Puducherry</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex flex-col w-full mb-3">
                        <label
                          htmlFor=""
                          className="text-[13px] text-gray-600 font-[500]"
                        >
                          PIN Code
                        </label>
                        <input
                          type="text"
                          className="border border-gray-500 rounded-lg h-[35px] px-1"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- Modal footer --> */}
                  <div className="rounded-b-lg top-box-shadow flex justify-end items-center gap-2 px-2 py-2 border-t border-gray-200 rounded-b dark:border-gray-600 bg-white">
                    <button
                      data-modal-hide="default-modal-new-customer_add_edit"
                      type="button"
                      className="submit-search-button text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg px-2 py-1 h-[35px] w-[70px]"
                    >
                      Cancel
                    </button>
                    <button
                      data-modal-hide="default-modal-new-customer_add_edit"
                      type="button"
                      className="submit-search-button text-sm font-medium text-gray-900 focus:outline-none bg-gray-200 rounded-lg px-2 py-1 h-[35px] w-[70px]"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- customer-add-n-modal --> */}
        </div>
        {/* <!-- Main modal --> */}
      </form>
      {/* <!-- page-starts --> */}
    </section>
  );
};

export default CustomerCreate;
