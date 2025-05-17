"use client";
import Button from "@/admin/components/Button";
import Checkbox from "@/admin/components/Checkbox";
import Editor from "@/admin/components/Editor";
import Input from "@/admin/components/Input";
import Loader from "@/admin/components/Loader";
import Select from "@/admin/components/Select";
import { Media } from "@/admin/context/MediaContext";
import useFetch from "@/admin/hooks/useFetch";
import useForm from "@/admin/hooks/useForm";
import SearchableModal from "@/admin/components/SearchableModal";
import { slugify } from "@/utils/utilities";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Conditions from "@/admin/components/conditions/Conditions";

const CollectionsCreate = () => {
  const { data, setData, post, errors, processing, reset, success } = useForm({
    name: "",
    description: "",
    type: "manual",
    products: [],
    match: "all",
    conditions: [],
    meta_title: "",
    meta_description: "",
    meta_keywords: "",
    slug: "",
    status: "active",
    media_id: "",
  });
  const {
    data: products,
    loading: productsLoading,
  } = useFetch("/admin/products");
  const { data: columns, loading: columnsLoading } = useFetch("/admin/conditions");
  console.log('columns', columns);
  const [isOpen, setOpen] = useState(false);
  const [openMeta, setOpenMeta] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const productSortOptions = [
    { label: "Best selling", value: "" },
    { label: "Product title A-Z", value: "asc-title" },
    { label: "Product title Z-A", value: "desc-title" },
    { label: "Highest price", value: "high-price" },
    { label: "Lowest price", value: "low-price" },
    { label: "Newest", value: "new" },
    { label: "Oldest", value: "old" },
  ];
  const columnsOptions = columns?.map((column) => ({ label: column.name, value: column.id }));
  const conditionsOptions = columns?.map((column) => ({ label: column.name, value: column.id }));
  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "draft", label: "Draft" },
  ];
  console.log(data, "collection data", products);
  const handleModelClose = () => {
    setOpen(false);
    setSearchTerm("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    await post('/admin/collections', {
      onSuccess: (result) => {
        reset();
        console.log(success);
      },
      onError: (error) => {
        console.log("Custom error handler:", error);
      },
    }).then((r) => console.log("result", r));
  };
  const handleTypeChange = (newType) => {
    let updatedConditions = data.conditions;

    if (newType === "smart") {
      if (!Array.isArray(data.conditions) || data.conditions.length === 0) {
        updatedConditions = [{}];
      }
    } else if (newType === "manual") {
      updatedConditions = (data.conditions || []).filter(
          (condition) =>
              condition &&
              typeof condition === "object" &&
              Object.keys(condition).length > 0 &&
              Object.values(condition).some((val) => val !== null && val !== "")
      );
    }

    setData("type", newType);
    setData("conditions", updatedConditions);
  };


  return (
    <section
      className="main-body-wrapper ml-0 p-6 transition-all duration-300 bg-[#f1f1f1] h-[100%]"
      id="content"
    >
      {/* <!-- page-starts --> */}
      <form className="collection-wrapper w-[100%] max-w-[920px] flex flex-col justify-center gap-3 mx-auto">
        {(productsLoading || processing || columnsLoading) && <Loader />}
        <div className="heading-sec flex items-center py-5 gap-2 justify-center">
          <div className="flex w-[100%]  max-w-[100%] justify-start gap-2">
            <Link
              href={"/admin/collections"}
              type="button"
              className="text-2xl"
            >
              <i className="fa fa-long-arrow-left"></i>
            </Link>
            <h2 className="text-[20px] font-[700] text-[#303030]">
              Collections
            </h2>
          </div>
        </div>
        <div className="collection-wrapper w-[100%] flex justify-center gap-3">
          {/* <!-- first-section --> */}
          <div className="full-page-w flex flex-col gap-3 items-start w-[600px]">
            <div className="page-section w-[100%] bg-[#fff] px-3 py-3 border border-[#3030302d] rounded-lg">
              <div className="space-y-6 font-[sans-serif] max-w-[100%] mx-auto">
                <Input
                  id={"name"}
                  label={"Collection name"}
                  placeholder={
                    "e.g. Summer collection, Under $100, Staff picks"
                  }
                  onChange={(e) => setData("name", e.target.value)}
                  value={data.name}
                />
                <Editor
                  id={"description"}
                  label={"Description"}
                  placeholder={"add collection description"}
                  onChange={(e) => setData("description", e)}
                  value={data.description}
                />
              </div>
            </div>
            <div className="page-section w-[100%] bg-[#fff] px-3 py-4 border border-[#3030302d] rounded-lg">
              <div className="space-y-6 font-[sans-serif] max-w-[100%] mx-auto">
                <h5 className="mb-2 text-sm text-[#303030] font-[600] block">
                  Collection type
                </h5>
                <Checkbox
                    id={"manual"}
                    type="radio"
                    name={"type"}
                    onChange={(e) => handleTypeChange(e.target.value)}
                    value={"manual"}
                    checked={data.type === "manual"}
                    labelClass={"flex flex-col align-top text-xs !text-gray-600"}
                    label={
                      <>
                        <strong className="font-semibold">Manual</strong>
                        <p>
                          Add products to this collection one by one. Learn more
                          about{" "}
                          <a
                              href="#"
                              className="text-blue-500 hover:text-blue-600 underline"
                          >
                            manual collections
                          </a>
                          .
                        </p>
                      </>
                    }
                />

                <Checkbox
                    id={"smart"}
                    type="radio"
                    name={"type"}
                    onChange={(e) => handleTypeChange(e.target.value)}
                    value={"smart"}
                    checked={data.type === "smart"}
                    labelClass={"flex flex-col align-top text-xs !text-gray-600"}
                    label={
                      <>
                        <strong className="font-semibold">Smart</strong>
                        <p>
                          Existing and future products that match the conditions
                          you set will automatically be added <br /> to this
                          collection. Learn more about&nbsp;
                          <a
                              href="#"
                              className="text-blue-500 hover:text-blue-600 underline"
                          >
                            smart collections
                          </a>
                          .
                        </p>
                      </>
                    }
                />

              </div>
            </div>
            {data.type === "manual" && (
              <>
                <div className="page-section w-[100%] bg-[#fff] px-3 py-4 border border-[#3030302d] rounded-lg">
                  <div className="space-y-6 font-[sans-serif] max-w-[100%] mx-auto">
                    <h5 className="mb-2 text-sm text-[#303030] font-[600] block">
                      Products
                    </h5>
                    <div className="flex justify-around gap-2">
                      <Input
                        prefix={"fa fa-search transform -scale-x-100"}
                        id={"search"}
                        placeholder={"Search Something..."}
                        onChange={(e) => {
                          setSearchTerm(e.target.value);
                          !isOpen && setOpen(true);
                        }}
                        value={searchTerm}
                      />
                      <Button
                        variant="white"
                        onClick={() => setOpen(true)}
                        className={
                          "shadow-lg border border-gray-200 w-1/5 hover:bg-gray-100"
                        }
                      >
                        Browse
                      </Button>
                    </div>
                    <div className="product-added-list px-3">
                      <div className="flex items-center px-4 py-2 mb-4 text-[#003a5a] rounded-lg bg-blue-100">
                        <i className="fa fa-info-circle mr-2"></i>
                        <div className="ms-3 text-xs font-medium">
                          This collection will be sorted by{" "}
                          <span className="font-bold">Product title A-Z</span>{" "}
                          after saving.
                        </div>
                      </div>
                      {data.products?.length <= 0 ? (
                        <div className="flex flex-col items-center gap-5 py-5">
                          <div className="product-icon flex justify-center text-5xl">
                            <i className="fa fa-tags text-[#bdbaba] transform -scale-x-100"></i>
                          </div>
                          <div className="text text-center text-xs text-gray-600 mt-1">
                            <p className="max-w-[300px] mx-auto">
                              There are no products in this collection. Search
                              or browse to add products.
                            </p>
                          </div>
                        </div>
                      ) : (
                        <ul className="w-full">
                          {data.products.map((item, index) => {
                            const product = products.find((p) => p.id === item);
                            console.log(product);

                            return (
                              <li
                                className="border-t border-[#b3b1b1] py-2"
                                key={index}
                              >
                                <div className="products flex items-center justify-between gap-2 w-[100%]">
                                  <div className="image flex items-center gap-2">
                                    <img
                                      src={product?.media[0]?.full_path}
                                      alt={product?.media[0]?.full_path}
                                      className="w-10 h-10 object-contain rounded-lg border border-gray-300 bg-gray-100"
                                    />
                                    <h5 className="text-[12px] text-[#303030]">
                                      {product?.name || "Default Product Name"}{" "}
                                      {/* Display the actual product name */}
                                    </h5>
                                  </div>
                                  <div className="active-deative-button flex items-center justify-center gap-3">
                                    <span
                                      className={`${
                                        product.status === "active"
                                          ? "bg-green-200 text-green-700"
                                          : "bg-red-200 text-red-700"
                                      } text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm`}
                                    >
                                      {product.status === "active"
                                        ? "Active"
                                        : "Draft"}
                                    </span>
                                    <Button
                                      variant="transparent"
                                      className="!text-gray-400 hover:!bg-gray-200 hover:!text-gray-600 text-sm !p-2"
                                      onClick={() =>
                                        setData("products",
                                          data.products.filter(
                                            (p) => p !== item
                                          )
                                        )
                                      }
                                    >
                                      <svg
                                        className="w-2.5 h-2.5"
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
                                    </Button>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                    <div className="product-empty-list"></div>
                  </div>
                </div>
                {/* <!-- Main modal --> */}
                <SearchableModal
                  show={isOpen}
                  onHide={handleModelClose}
                  items={products}
                  options={productSortOptions}
                  value={data.products}
                  onChange={(e) => setData("products", e.map((p) => p.id))}
                  search={searchTerm}
                  onSearch={(e) => setSearchTerm(e.target.value)}
                />
                {/* <!-- Main modal --> */}
              </>
            )}
            {data.type === "smart" && (
              <div className="page-section w-[100%] bg-[#fff] px-3 py-3 border border-[#3030302d] rounded-lg">
                <div className="heading-text">
                  <div className="heading flex justify-between w-[100%]">
                    <h5 className="mb-2 text-sm text-[#303030] font-[600] block">
                      Conditions
                    </h5>
                  </div>
                  <div className="flex justify-start items-center gap-3 !text-xs !text-gray-600">
                    <p>Products must match:</p>
                    <Checkbox
                      type="radio"
                      name={"match"}
                      value={"all"}
                      label={"all conditions"}
                      id={"all"}
                      labelClass={"!text-xs !text-gray-600"}
                      checked={data.match === "all"}
                      onChange={(e) => setData("match", e.target.value)}
                    />
                    <Checkbox
                      type="radio"
                      name={"condition"}
                      value={"any"}
                      label={"any condition"}
                      id={"any"}
                      labelClass={"!text-xs !text-gray-600"}
                      checked={data.match === "any"}
                      onChange={(e) => setData("match", e.target.value)}
                    />
                  </div>
                  <Conditions value={data.conditions} onChange={(e) => setData("conditions", e)} columns={columns} />
                </div>
              </div>
            )}
            <div className="bg-[#fff] px-4 py-4 border border-[#3030302d] rounded-lg mb-5 w-[100%] flex flex-col gap-3">
              <div className="heading-text border-b border-gray-300 py-2">
                <div className="heading flex justify-between w-[100%]">
                  <h5 className="mb-2 text-sm text-[#303030] font-[600] block">
                    Search engine listing
                  </h5>
                  {!openMeta && (
                    <button
                      className="icon-edit"
                      onClick={() => setOpenMeta(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-lucide="pencil"
                        className="lucide lucide-pencil h-[14px] w-[14px]"
                      >
                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </button>
                  )}
                </div>
                <small>
                  Add a title and description to see how this collection might
                  appear in a search engine listing
                </small>
              </div>
              {openMeta && (
                <div
                  className="max-w-[100%] flex flex-col gap-3"
                  id="editForm1"
                >
                  <Input
                    label={"Title"}
                    id={"meta_title"}
                    placeholder={"Page Title"}
                    value={data.meta_title}
                    onChange={(e) =>
                      setData({
                        ...data,
                        meta_title: e.target.value,
                        slug: data.slug ? data.slug : slugify(e.target.value),
                      })
                    }
                    error={errors.meta_title}
                  />
                  <Input
                    textarea
                    rows={"3"}
                    label={"Description"}
                    id={"meta_description"}
                    placeholder={"Meta description"}
                    value={data.meta_description}
                    onChange={(e) =>
                      setData("meta_description", e.target.value)
                    }
                    error={errors.meta_description}
                  />
                  <Input
                    label={"Keywords"}
                    id={"meta_keywords"}
                    placeholder={"Meta keywords"}
                    value={data.meta_keywords}
                    onChange={(e) => setData("meta_keywords", e.target.value)}
                    error={errors.meta_keywords}
                  />
                  <Input
                    label={"URL Handle"}
                    id={"slug"}
                    value={data.slug}
                    onChange={(e) =>
                      setData(
                        "slug",
                        slugify(e.target.value) ||
                          slugify(data.meta_title) ||
                          slugify(data.name)
                      )
                    }
                    error={errors.slug}
                  />
                  <small className="text-[11px] text-gray-500">
                    https://hi11ms-rr.myshopify.com/conditions/{data.slug}
                  </small>
                </div>
              )}
            </div>
          </div>
          {/* <!-- first-section --> */}
          {/* <!-- second-section --> */}
          <div className="full-page-w flex flex-col gap-3 items-start w-[320px]">
            <div className="page-section w-[100%] bg-[#fff] px-4 py-4 border border-[#3030302d] rounded-lg flex justify-between items-end gap-3">
              <Select
                label={"Status"}
                id={"status"}
                options={statusOptions}
                value={data.status}
                onChange={(e) => setData("status", e)}
                error={errors.status}
              />
              <Button type="submit" onClick={handleSubmit}>Save</Button>
            </div>
            <div className="page-section w-[100%] bg-[#fff] px-3 py-3 border border-[#3030302d] rounded-lg">
              {/* <!-- Image Upload Section (Initially visible) --> */}
              <div
                className="space-y-6 font-[sans-serif] max-w-[100%] mx-auto"
                id="imageUploadSection"
              >
                <Media
                  id={"media_id"}
                  label={"Media"}
                  mediaWrapperClass={"!col-span-4 !row-span-4"}
                  labelClass={"text-[14px] text-[#303030] font-[600]"}
                  value={data.media_id}
                  onChange={(e) => setData("media_id", e)}
                />
              </div>
              {/* <!-- Image Upload Section (Initially visible) --> */}
              {/* <!-- Image Preview Section (Initially hidden) --> */}
              <div
                className="page-section w-[100%] bg-[#fff] px-3 py-3  hidden"
                id="imagePreviewContainer"
              >
                <div className="space-y-6 font-[sans-serif] max-w-[100%] mx-auto">
                  <div className="flex items-start justify-between w-full">
                    <h3 className="text-[14px] text-[#303030] font-[600] mb-3">
                      Image
                    </h3>
                    <div className="image-edit-dropdown">
                      <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="text-blue-700 text-sm px-1 py-1 text-center inline-flex items-center hover:underline hover:text-blue-800"
                        type="button"
                      >
                        Edit{" "}
                        <svg
                          className="w-2.5 h-2.5 ms-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>

                      {/* <!-- Dropdown menu --> */}
                      <div
                        id="dropdown"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg  w-44 dark:bg-gray-700 border shadow-slate-300"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownDefaultButton"
                        >
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              ata-modal-target="large-modal1"
                              data-modal-toggle="large-modal1"
                              type="button"
                            >
                              Change Image
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              type="button"
                              data-modal-target="static-modal-alt"
                              data-modal-toggle="static-modal-alt"
                            >
                              Edit Alt text
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-red-600 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white remove-this section"
                            >
                              Remove
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown menu --> */}
                    </div>
                  </div>
                  {/* <!-- Image Slider Container --> */}
                  <div
                    id="imageSlider"
                    className="flex items-center justify-center relative overflow-hidden border borde-[#303030] px-2 py-2 rounded-lg"
                  >
                    {/* <!-- Slide content goes here --> */}
                    <div id="sliderImages" className="flex">
                      {/* <!-- Dynamically added images will be inserted here --> */}
                    </div>

                    {/* <!-- Next and Previous Buttons --> */}
                    <button
                      id="prevBtn"
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-full shadow-md"
                    >
                      ❮
                    </button>
                    <button
                      id="nextBtn"
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-full shadow-md"
                    >
                      ❯
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- Image Preview Section (Initially hidden) --> */}

              {/* <!-- alt text change modal --> */}
              <div
                id="static-modal-alt"
                data-modal-backdrop="static"
                tabIndex="-1"
                aria-hidden="true"
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
              >
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                  {/* <!-- Modal content --> */}
                  <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-center justify-between px-4 py-1 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200 bg-[#f3f3f3] h-[53px]">
                      <h3 className="text-sm font-semibold text-[#303030]">
                        Edit Alt Text
                      </h3>
                      <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="static-modal-alt"
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
                      <div className="change-alt-text">
                        {/* <!-- Image Slider for Alt Text Modal --> */}

                        <div className="text-container-section flex">
                          <div className="image-show-section">
                            <div
                              id="altTextSlider"
                              className="flex items-center justify-center relative overflow-hidden"
                            >
                              <div
                                id="altTextSliderImages"
                                className="flex gap-4"
                              >
                                {/* <!-- Alt text input for each image --> */}
                              </div>
                            </div>

                            <button
                              id="altPrevBtn"
                              className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-[#f8f8f88f] flex justify-center  items-center
                                                     text-black  h-[40px] w-[40px] rounded-full shadow-md"
                            >
                              <span className="block text-[10px]">
                                <i data-lucide="chevron-left"></i>
                              </span>
                            </button>
                            <button
                              id="altNextBtn"
                              className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-[#f8f8f88f] flex justify-center  items-center
                                                    text-black  h-[40px] w-[40px] rounded-full shadow-md"
                            >
                              <span className="block text-[10px]">
                                <i data-lucide="chevron-right"></i>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Modal footer --> */}
                    <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 w-full">
                      <button
                        data-modal-hide="static-modal-alt"
                        type="button"
                        className="text-white bg-black hover:bg-black-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Done
                      </button>
                      <button
                        data-modal-hide="static-modal-alt"
                        type="button"
                        className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- alt text change modal --> */}
              {/* <!-- Main modal --> */}
              <div
                id="large-modal1"
                data-modal-backdrop="static"
                tabIndex="-1"
                aria-hidden="true"
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-[100%] md:inset-0 h-[calc(100%-1rem)] max-h-full  "
              >
                <div className="relative p-4 w-full max-w-[60%] max-h-full">
                  {/* <!-- Modal content --> */}
                  <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-center justify-between px-4 py-1 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200 bg-[#f3f3f3] h-[53px]">
                      <h3 className="text-sm font-semibold text-[#303030]">
                        Select image
                      </h3>
                      <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="large-modal1"
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
                    <div className="p-4 md:p-5 space-y-4 relative main-modal-body-1 w-full max-h-[70vh] overflow-y-auto">
                      <div className="modal-body-header flex justify-between items-center w-[100%]">
                        <div className="max-w-full">
                          <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                              </svg>
                            </div>
                            <input
                              type="search"
                              id="default-search"
                              className="h-[20px] block w-full p-4 ps-10 text-sm text-gray-900 border border-[#000] rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Search files"
                              required
                            />
                            {/* <!-- <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> --> */}
                          </div>
                          {/* <!-- No results message (Hidden by default) --> */}
                          <p
                            id="noResults"
                            className="hidden text-red-500 text-sm mt-2"
                          >
                            No results found
                          </p>
                        </div>
                        <div className="right-side-button flex gap-3 items-center">
                          <div className="dropdown-buttons">
                            <button
                              id="multiLevelDropdownButton1"
                              data-dropdown-toggle="multi-dropdown1"
                              className="text-[#303030] add-image-button bg-[transparent] hover:bg-[#3030303] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
                              type="button"
                            >
                              <i
                                data-lucide="arrow-down-up"
                                className="w-4 h-4 mr-1"
                              ></i>
                              Sort
                            </button>

                            {/* <!-- Dropdown menu --> */}
                            <div
                              id="multi-dropdown1"
                              className="z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm  dark:bg-gray-700 max-w-[250px] w-[250px]"
                            >
                              <ul
                                className="py-3 px-3 text-[11px] text-gray-700 dark:text-gray-200 w-[100%] flex flex-col gap-2"
                                aria-labelledby="multiLevelDropdownButton1"
                              >
                                <li className="">
                                  <div className="flex items-center">
                                    <input
                                      id="default-radio-2"
                                      type="radio"
                                      name="default-radio"
                                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                      htmlFor="default-radio-2"
                                      className="ms-2 text-[13px] font-[400] text-[#303030]"
                                    >
                                      Date added (newest first)
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="flex items-center">
                                    <input
                                      id="default-radio-2"
                                      type="radio"
                                      name="default-radio"
                                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                      htmlFor="default-radio-2"
                                      className="ms-2 text-[13px] font-[400] text-[#303030]"
                                    >
                                      Date added (oldest first)
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="flex items-center">
                                    <input
                                      id="default-radio-2"
                                      type="radio"
                                      name="default-radio"
                                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                      htmlFor="default-radio-2"
                                      className="ms-2 text-[13px] font-[400] text-[#303030]"
                                    >
                                      File name (A-Z)
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="flex items-center">
                                    <input
                                      id="default-radio-2"
                                      type="radio"
                                      name="default-radio"
                                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                      htmlFor="default-radio-2"
                                      className="ms-2 text-[13px] font-[400] text-[#303030]"
                                    >
                                      File size (smallest first)
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="flex items-center">
                                    <input
                                      id="default-radio-2"
                                      type="radio"
                                      name="default-radio"
                                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                      htmlFor="default-radio-2"
                                      className="ms-2 text-[13px] font-[400] text-[#303030]"
                                    >
                                      File size (largest first)
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="dropdown-buttons">
                            <button
                              id="multiLevelDropdownButton1"
                              data-dropdown-toggle="multi-dropdown"
                              className="text-[#303030] add-image-button bg-[transparent] hover:bg-[#3030303] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                              type="button"
                            >
                              <span id="selectedIcon" className="w-4 h-4 mr-1">
                                &#9638;
                              </span>
                              {/* <!-- ☷ Grid Icon --> */}
                              {/* <!-- <span className="w-2.5 h-2.5 ml-2">&#9662;</span> ▼ Dropdown Arrow --> */}
                              <svg
                                className="w-2.5 h-2.5 ms-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="m1 1 4 4 4-4"
                                />
                              </svg>
                            </button>

                            {/* <!-- Dropdown menu --> */}
                            <div
                              id="multi-dropdown"
                              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-[130px] dark:bg-gray-700"
                            >
                              <ul
                                className="py-3 px-3 text-[11px] text-gray-700 dark:text-gray-200 w-[100%] flex flex-col gap-2"
                                aria-labelledby="multiLevelDropdownButton1"
                              >
                                <li className="text-[13px] font-[500] text-[#303030] flex cursor-pointer">
                                  <button
                                    id="gridView"
                                    className="flex cursor-pointer"
                                  >
                                    <span className="w-4 h-4 mr-1">
                                      &#9638;
                                    </span>{" "}
                                    Grid View
                                    {/* <!-- ☷ --> */}
                                  </button>
                                </li>
                                <li className="text-[13px] font-[500] text-[#303030] flex cursor-pointer">
                                  <button
                                    id="listView"
                                    className="flex cursor-pointer"
                                  >
                                    <span className="w-4 h-4 mr-1">
                                      &#9776;
                                    </span>{" "}
                                    List View
                                    {/* <!-- ☰ --> */}
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="main-modal-body w-[100%]">
                        <div className="main-upper-buttons"></div>
                        <div className="main-image-uploader mt-2">
                          {/* <!-- dropzone Code --> */}
                          <div
                            id="dropzone"
                            className="border-2 border-dashed border-[#303030] px-5 py-8 rounded-md w-full flex flex-col items-center justify-center gap-2 cursor-pointer bg-[rgb(231 231 231 / 32%)]  transition-all relative"
                          >
                            <input
                              type="file"
                              id="fileInput"
                              className="hidden"
                              accept="image/*"
                              multiple
                            />
                            <span className="text-[12px] text-[#303030] font-[600] add-image-button px-2 py-1 rounded-md">
                              Add Image
                            </span>
                            <small className="text-[#474747] font-[400]">
                              or drop an image to upload
                            </small>
                          </div>
                          {/* <!-- dropzone Code --> */}
                          {/* <!-- List and Grid View --> */}
                          <div className="mt-4">
                            <div
                              id="preview"
                              className="flex flex-wrap gap-[20px]"
                            ></div>
                          </div>
                          {/* <!-- List and Grid View --> */}
                          {/* <!-- Container to store all uploaded images --> */}

                          {/* <!-- Container to store all uploaded images --> */}
                          <div
                            id="imageGalleryContainer"
                            className="mt-4 flex flex-wrap gap-3 border-t pt-4"
                          >
                            {/* <!-- Dummy Gallery Images --> */}
                            <div className="gallery-item flex items-center gap-3 p-2 rounded-md bg-gray-100 relative">
                              <input
                                type="checkbox"
                                className="file-checkbox absolute top-2 left-2 w-4 h-4"
                              />
                              <img
                                src="https://ikshitachoudhary.com/cdn/shop/files/02_Custom_65.jpg?v=1702553856&width=1800"
                                alt="Dummy Image 1"
                                className="preview-img w-[70px] h-[70px] rounded-md shadow-md object-cover"
                              />
                              <button className="view-icon bg-white p-1 rounded-full shadow-md cursor-pointer ml-auto bottom-2 right-2">
                                👁️
                              </button>
                            </div>

                            <div className="gallery-item flex items-center gap-3 p-2 rounded-md bg-gray-100 relative">
                              <input
                                type="checkbox"
                                className="file-checkbox absolute top-2 left-2 w-4 h-4"
                              />
                              <img
                                src="https://ikshitachoudhary.com/cdn/shop/files/02_Custom_65.jpg?v=1702553856&width=1800"
                                alt="Dummy Image 2"
                                className="preview-img w-[70px] h-[70px] rounded-md shadow-md object-cover"
                              />
                              <button className="view-icon bg-white p-1 rounded-full shadow-md cursor-pointer ml-auto bottom-2 right-2">
                                👁️
                              </button>
                            </div>

                            <div className="gallery-item flex items-center gap-3 p-2 rounded-md bg-gray-100 relative">
                              <input
                                type="checkbox"
                                className="file-checkbox absolute top-2 left-2 w-4 h-4"
                              />
                              <img
                                src="https://ikshitachoudhary.com/cdn/shop/files/02_Custom_65.jpg?v=1702553856&width=1800"
                                alt="Dummy Image 3"
                                className="preview-img w-[70px] h-[70px] rounded-md shadow-md object-cover"
                              />
                              <button className="view-icon bg-white p-1 rounded-full shadow-md cursor-pointer ml-auto absolute bottom-2 right-2">
                                👁️
                              </button>
                            </div>
                          </div>

                          {/* <!-- Container to store all uploaded images --> */}
                        </div>
                      </div>
                    </div>

                    {/* <!-- Sidebar Image View --> */}
                    <div
                      id="sidebarNew"
                      className="absolute top-0 right-0 h-[100%] inset-y-0 w-64 bg-white p-4 shadow-lg hidden"
                    >
                      <button
                        id="closeSidebar"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        X
                      </button>

                      <div id="sidebarSlider" className="relative mt-4">
                        <button
                          id="prevSidebarImage"
                          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-1 shadow-md"
                        >
                          ⬅️
                        </button>
                        <img
                          id="sidebarSliderImage"
                          className="w-full h-auto rounded-lg"
                          src="#!"
                        />
                        <button
                          id="nextSidebarImage"
                          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-1 shadow-md"
                        >
                          ➡️
                        </button>
                      </div>

                      <div id="imageDetails" className="image-details mt-2">
                        <p>
                          <strong>Image Name: </strong>
                          <span id="imageName"></span>
                        </p>
                        <p>
                          <strong>Size: </strong>
                          <span id="imageSize"></span>
                        </p>
                        <p>
                          <strong>Upload Time: </strong>
                          <span id="uploadTime"></span>
                        </p>
                      </div>
                    </div>
                    {/* <!-- Sidebar Image View --> */}
                    {/* <!-- Modal footer --> */}
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 justify-end gap-2">
                      <button
                        data-modal-hide="large-modal1"
                        type="button"
                        className="py-2.5 px-5  text-sm font-medium text-[#303030] focus:outline-none bg-white rounded-lg border
                                     border-[#00000036] hover:bg-gray-100 hover:text-[#303030] focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        Cancel
                      </button>
                      <button
                        data-modal-hide="large-modal1"
                        type="button"
                        className="text-white bg-[#303030] hover:bg-[#303030] focus:ring-4
                                     focus:outline-none focus:ring-[#303030] font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                        id="doneButton"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                  {/* <!-- Modal content --> */}
                </div>
              </div>
              {/* <!-- Main modal --> */}
            </div>
          </div>
          {/* <!-- second-section --> */}
        </div>
        <div className="w-full flex justify-end mt-3">
        <Button type="submit" onClick={handleSubmit}>Save</Button>
        </div>
      </form>
      {/* <!-- page-starts --> */}
    </section>
  );
};

export default CollectionsCreate;
