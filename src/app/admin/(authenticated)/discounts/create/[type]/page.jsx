"use client";
import Button from "@/admin/components/Button";
import Checkbox from "@/admin/components/Checkbox";
import Datepicker from "@/admin/components/Datepicker";
import Input from "@/admin/components/Input";
import Loader from "@/admin/components/Loader";
import Select from "@/admin/components/Select";
import useFetch from "@/admin/hooks/useFetch";
import useForm from "@/admin/hooks/useForm";
import SearchableModal from "@/admin/components/SearchableModal";
import { generateCoupon } from "@/utils/utilities";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import React, { useState } from "react";
import {DiscountApplyOn, DiscountBuys, DiscountEligibility, DiscountMethod, DiscountRequirement, DiscountType, DiscountValue} from "@/utils/enums";

const DiscountCreate = () => {
  const params = useParams();
  const type = params.type;

  if (!Object.values(DiscountType).includes(type)) {
    notFound();
  }

  const { data, setData, post, processing, success, errors, reset } = useForm({
    type: type,
    method: DiscountMethod.CODE,
    code: "",
    title: "",
    discount_type: DiscountValue.PERCENTAGE,
    amount: "",
    applies_to: DiscountApplyOn.COLLECTIONS,
    collections: [],
    products: [],
    once_per_order: false,
    requirement: DiscountRequirement.NO,
    min_amount: "",
    min_qty: "",
    buys: DiscountBuys.QUANTITY,
    gets_qty: "",
    gets_applies_to: DiscountApplyOn.COLLECTIONS,
    gets_collections: [],
    gets_products: [],
    discounted_value_type: DiscountValue.PERCENTAGE,

    eligibility_country: DiscountEligibility.ALL,
    countries: [],
    exclude_shipping_over_a_amount: false,
    shipping_amount: "",

    eligibility: DiscountEligibility.ALL,
    customers: [],
    limit_total_usage: false,
    total_usage: "",
    once_per_customer: false,
    start_date: "",
    start_time: "",
    set_end_date: false,
    end_date: "",
    end_time: "",
  });
  const {
    data: products,
    loading: productsLoading,
    refetch,
  } = useFetch("/admin/products");
  const [isOpen, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const discountTypeOptions = [
    {
      label: "Percentage",
      value: DiscountMethod.PERCENTAGE,
    },
    {
      label: "Fixed amount",
      value: DiscountMethod.FIXED,
    },
  ];
  const appliesToOptions = [
    {
      label: "Specific collections",
      value: DiscountApplyOn.COLLECTIONS,
    },
    {
      label: "Specific products",
      value: DiscountApplyOn.PRODUCTS,
    },
  ];
  const productSortOptions = [
    { label: "Best selling", value: "" },
    { label: "Product title A-Z", value: "asc-title" },
    { label: "Product title Z-A", value: "desc-title" },
    { label: "Highest price", value: "high-price" },
    { label: "Lowest price", value: "low-price" },
    { label: "Newest", value: "new" },
    { label: "Oldest", value: "old" },
  ];
  console.log(data, "data", products);

  return (
    <section
      id="content"
      className="main-body-wrapper ml-0 p-6 transition-all duration-300 bg-[#f1f1f1] h-full"
    >
      {/* <!-- page-starts --> */}
      <form className="collection-wrapper w-full max-w-[950px] flex flex-col justify-center gap-3 mx-auto">
        {productsLoading && processing && <Loader />}
        <div className="heading-sec flex items-center py-5 gap-2 justify-center">
          <div className="flex w-full  max-w-full justify-start gap-2">
            <Link href={"/admin/discounts"} type="button" className="text-2xl">
              <i className="fa fa-long-arrow-left"></i>
            </Link>
            <h2 className="text-xl font-bold text-gray-800">Create discount</h2>
          </div>
        </div>
        <div className="collection-wrapper w-full flex justify-center gap-3">
          {/* <!-- first-section --> */}
          <div className="w-full flex flex-col items-start">
            <div className="w-full bg-white px-4 py-4 border border-[#3030302d] rounded-lg pb-0 mb-4">
              <div className="space-y-6 font-[sans-serif] max-w-full mx-auto">
                <div>
                  <div className="flex max-w-full justify-between items-center">
                    <div className={`text-sm text-gray-800 font-semibold`}>
                      Amount off products
                    </div>
                    <div className="text-[14px] text-gray-500 font-medium">
                      Product discount
                    </div>
                  </div>
                </div>

                <div>
                  <h6 className="text-[13px] text-gray-800 font-medium mb-2">
                    Method
                  </h6>

                  <div className="mb-4 dark:border-gray-700 max-w-full w-full flex flex-col gap-4">
                    <div className="flex flex-wrap -mb-px text-sm font-medium text-center rounded-md tab-link-list max-w-full w-full">
                      <Button
                        variant={data.method === DiscountMethod.CODE ? "light" : "white"}
                        className={"rounded-r-none"}
                        onClick={() => setData("method", DiscountMethod.CODE)}
                      >
                        Discount Code
                      </Button>
                      <Button
                        variant={
                          data.method === DiscountMethod.AUTO ? "light" : "white"
                        }
                        className={"rounded-l-none"}
                        onClick={() => setData("method", DiscountMethod.AUTO)}
                      >
                        Automatic Discount
                      </Button>
                    </div>
                    {data.method === DiscountMethod.CODE ? (
                      <div>
                        <Input
                          labelClass={"flex items-center justify-between"}
                          label={
                            <>
                              <h6>Discount Code</h6>
                              <p
                                className="text-xs text-blue-700 hover:underline font-light cursor-pointer"
                                onClick={() =>
                                  setData("code", generateCoupon())
                                }
                              >
                                Generate random code
                              </p>
                            </>
                          }
                          placeholder={"e.g. SUMMER20, CRISTMAS50OFF, etc."}
                          value={data.code}
                          onChange={(e) => setData("code", e.target.value)}
                        />
                        <p className="text-xs text-gray-700 font-light pt-1">
                          Customers must enter this code at checkout.
                        </p>
                      </div>
                    ) :  data.method === DiscountMethod.AUTO ? (
                      <div>
                        <Input
                          labelClass={"flex items-center justify-between"}
                          label={"Title"}
                          placeholder={"e.g. Summer Sale, Christmas Sale, etc."}
                          value={data.title}
                          onChange={(e) => setData("title", e.target.value)}
                        />
                        <p className="text-xs text-gray-700 font-light pt-1">
                          Customers will see this in their cart and at checkout.
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            {data.type === DiscountType.AMOUNT_OFF_PRODUCT && (
              <>
                {/* <!--------------=========fixed Amount========----------> */}
                <div className="page-section w-full bg-white px-4 py-4 border border-[#3030302d] rounded-lg mx-0 my-0 mb-5">
                  <div className="space-y-6 font-[sans-serif] max-w-full mx-auto">
                    <h6 className="mb-2 text-sm text-gray-800 font-[600] block">
                      Discount Value
                    </h6>
                    {/* <!-- select-tag-amount --> */}
                    <div className="flex max-w-full justify-between items-start gap-3">
                      <Select
                        wrapperClass={"!w-2/3"}
                        id={"discount-value"}
                        options={discountTypeOptions}
                        value={data.discount_type}
                        onChange={(e) => setData("discount_type", e)}
                      />
                      <Input
                        wrapperClass={"!w-1/3"}
                        id={"discount-amount"}
                        value={data.amount}
                        onChange={(e) => setData("amount", e.target.value)}
                        {...(data.discount_type === DiscountValue.PERCENTAGE
                          ? {
                              postfix: "fa fa-percent",
                              placeholder: "0.00",
                            }
                          : { prefix: "fa fa-dollar", placeholder: "0.00" })}
                      />
                    </div>
                    {/* <!-- select-tag-applies --> */}
                    <Select
                      label={"Applies to"}
                      options={appliesToOptions}
                      value={data.applies_to}
                      onChange={(e) => setData("applies_to", e)}
                    />

                    {/* <!-- search product modal --> */}
                    <div className="seacrh-product-sec">
                      <div className="flex items-center max-w-full mx-auto gap-3">
                        <Input
                          id={"search-product"}
                          placeholder={"Search Product"}
                        />
                        <Button variant="white" onClick={() => setOpen(true)}>
                          Browse
                        </Button>
                      </div>
                    </div>
                    <SearchableModal
                      type="product-inventories"
                      show={isOpen}
                      onHide={() => setOpen(false)}
                      items={products}
                      value={data.products}
                      onChange={(e) => setData("products", e)}
                      options={productSortOptions}
                    />
                    {data.products.length > 0 &&
                      data.products.map((id, i) => {
                        const product = products?.find((p) => p.id === id.id);
                        if (!product) return null;

                        return (
                          <div
                            key={i}
                            className={`flex items-center justify-between max-w-full mx-auto border border-gray-200 rounded-none px-3 py-2 mb-0 ${
                              data.products.length - 1 === i && "rounded-b-lg"
                            } ${i === 0 && "rounded-t-lg"}`}
                          >
                            <div className="flex items-center gap-2">
                              <img
                                src={product.media[0].full_path}
                                alt={product.media[0].alt}
                                className="w-10 h-10 object-contain rounded-lg border border-gray-300 bg-gray-100"
                              />
                              <div>
                                <p className="text-sm">{product.name}</p>
                                {product.inventories.length > 0 ? (
                                  <p className="text-xs text-gray-500">
                                    (
                                    {`${id.inventories.length} of ${product.inventories.length} variants selected`}
                                    )
                                  </p>
                                ) : (
                                  <p className="text-xs text-gray-500">
                                    $ {product.sale_price}
                                  </p>
                                )}
                              </div>
                            </div>
                            <Button
                              variant="transparent"
                              className="!text-gray-400 hover:!bg-gray-200 hover:!text-gray-600 text-sm !p-2"
                              onClick={() =>
                                setData(
                                  "products",
                                  data.products.filter((p) => p.id !== id.id)
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
                        );
                      })}
                  </div>
                </div>
                {/* <!--------------=========fixed Amount========----------> */}
              </>
            )}
            {data.type === DiscountType.BUY_X_GET_Y && (
              <>
                {/* <!-- Section Container --> */}
                <div className="page-section w-full bg-white px-4 py-4 border border-[#3030302d] rounded-lg mx-0 my-0 mb-5">
                  <div className="space-y-2 font-[sans-serif] max-w-full mx-auto">
                    <h6 className="text-sm text-gray-800 font-[600] block mb-3">
                      Customer{" "}
                      {data.buys === DiscountBuys.QUANTITY ? "buys" : "spends"}
                    </h6>

                    <div className="flex flex-col gap-3">
                      {/* <!-- No Minimum Requirement --> */}
                      <Checkbox
                        type={"radio"}
                        name={"buys"}
                        id={"min-qty-items"}
                        label={"Minimum quantity of items"}
                        value={DiscountBuys.QUANTITY}
                        checked={data.buys === DiscountBuys.QUANTITY}
                        onChange={(e) => setData("buys", e.target.value)}
                      />
                      <Checkbox
                        type={"radio"}
                        name={"buys"}
                        id={"min-amount"}
                        label={"Minimum purchase amount"}
                        value={DiscountBuys.AMOUNT}
                        checked={data.buys === DiscountBuys.AMOUNT}
                        onChange={(e) => setData("buys", e.target.value)}
                      />
                      <div className="flex justify-center gap-3">
                        {data.buys === DiscountBuys.QUANTITY && (
                          <Input
                            wrapperClass={"!w-1/3"}
                            label={"Quantity"}
                            type={"number"}
                            id={"minQtyInput"}
                            placeholder="0"
                            value={data.min_qty}
                            onChange={(e) => setData("min_qty", e.target.value)}
                          />
                        )}
                        {data.buys === DiscountBuys.AMOUNT && (
                          <Input
                            wrapperClass={"!w-1/3"}
                            label={"Amount"}
                            id={"minAmountInput"}
                            placeholder="0.00"
                            prefix={"fa fa-dollar"}
                            value={data.min_amount}
                            onChange={(e) =>
                              setData("min_amount", e.target.value)
                            }
                          />
                        )}
                        <Select
                          wrapperClass={"!w-2/3"}
                          label={"Applies to"}
                          options={appliesToOptions}
                          value={data.applies_to}
                          onChange={(e) => setData("applies_to", e)}
                        />
                      </div>

                      {/* <!-- search product modal --> */}
                      <div className="seacrh-product-sec">
                        <div className="flex items-center max-w-full mx-auto gap-3">
                          <Input
                            id={"search-product"}
                            placeholder={"Search Product"}
                          />
                          <Button variant="white">Browse</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 font-[sans-serif] max-w-full mx-auto mt-3 border-t border-[#3030302d] pt-3">
                    <h6 className="text-sm text-gray-800 font-[600] block mb-3">
                      Customer gets
                    </h6>
                    <p className="text-sm text-gray-800 font-[400] block mb-3">
                      Customers must add the quantity of items specified below
                      to their cart.
                    </p>
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-3">
                        <Input
                          wrapperClass={"!w-1/3"}
                          label={"Quantity"}
                          type={"number"}
                          id={"getsQtyInput"}
                          placeholder="0"
                          value={data.gets_qty}
                          onChange={(e) => setData("gets_qty", e.target.value)}
                        />
                        <Select
                          wrapperClass={"!w-2/3"}
                          label={"Applies to"}
                          options={appliesToOptions}
                          value={data.gets_applies_to}
                          onChange={(e) => setData("gets_applies_to", e)}
                        />
                      </div>

                      {/* <!-- search product modal --> */}
                      <div className="seacrh-product-sec">
                        <div className="flex items-center max-w-full mx-auto gap-3">
                          <Input
                            id={"search-product"}
                            placeholder={"Search Product"}
                          />
                          <Button variant="white">Browse</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 font-[sans-serif] max-w-full mx-auto mt-3">
                    <h6 className="text-sm text-gray-800 font-[600] block mb-3">
                      At a discounted value
                    </h6>
                    <div className="flex flex-col gap-3">
                      {/* <!-- No Minimum Requirement --> */}
                      <Checkbox
                        type={"radio"}
                        name={"discounted_value_type"}
                        id={"discounted-value-type-percentage"}
                        label={"Percentage"}
                        value={DiscountValue.PERCENTAGE}
                        checked={data.discounted_value_type === DiscountValue.PERCENTAGE}
                        onChange={(e) =>
                          setData("discounted_value_type", e.target.value)
                        }
                      />
                      {data.discounted_value_type === DiscountValue.PERCENTAGE && (
                        <Input
                          wrapperClass={"!w-1/3 ml-5"}
                          type={"text"}
                          id={"discounted-value-percentage"}
                          placeholder="0"
                          value={data.discounted_value}
                          postfix={"fa fa-percent"}
                          onChange={(e) =>
                            setData("discounted_value", e.target.value)
                          }
                        />
                      )}
                      <Checkbox
                        type={"radio"}
                        name={"discounted_value_type"}
                        id={"discounted-value-type-amount"}
                        label={"Amount off each"}
                        value={DiscountValue.FIXED}
                        checked={data.discounted_value_type === DiscountValue.FIXED}
                        onChange={(e) =>
                          setData("discounted_value_type", e.target.value)
                        }
                      />
                      {data.discounted_value_type === DiscountValue.FIXED && (
                        <Input
                          wrapperClass={"!w-1/3 ml-5"}
                          id={"discounted-value-amount"}
                          placeholder="0.00"
                          prefix={"fa fa-dollar"}
                          value={data.discounted_value}
                          onChange={(e) =>
                            setData("discounted_value", e.target.value)
                          }
                        />
                      )}
                      <Checkbox
                        type={"radio"}
                        name={"discounted_value_type"}
                        id={"discounted-value-type-free"}
                        label={"Free"}
                        value={DiscountValue.FREE}
                        checked={data.discounted_value_type === DiscountValue.FREE}
                        onChange={(e) =>
                          setData("discounted_value_type", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                {/* <!--------------=========minimum purchase========----------> */}
              </>
            )}
            {data.type === DiscountType.AMOUNT_OFF_ORDER && (
              <>
                {/* <!--------------=========fixed Amount========----------> */}
                <div className="page-section w-full bg-white px-4 py-4 border border-[#3030302d] rounded-lg mx-0 my-0 mb-5">
                  <div className="space-y-6 font-[sans-serif] max-w-full mx-auto">
                    <h6 className="mb-2 text-sm text-gray-800 font-[600] block">
                      Discount Value
                    </h6>
                    {/* <!-- select-tag-amount --> */}
                    <div className="flex max-w-full justify-between items-start gap-3">
                      <Select
                        wrapperClass={"!w-2/3"}
                        id={"discount-value"}
                        options={discountTypeOptions}
                        value={data.discount_type}
                        onChange={(e) => setData("discount_type", e)}
                      />
                      <Input
                        wrapperClass={"!w-1/3"}
                        id={"discount-amount"}
                        value={data.amount}
                        onChange={(e) => setData("amount", e.target.value)}
                        {...(data.discount_type === DiscountValue.PERCENTAGE
                          ? {
                              postfix: "fa fa-percent",
                              placeholder: "0.00",
                            }
                          : { prefix: "fa fa-dollar", placeholder: "0.00" })}
                      />
                    </div>
                  </div>
                </div>
                {/* <!--------------=========fixed Amount========----------> */}
              </>
            )}

            {data.type === DiscountType.FREE_SHIPPING && (
              <>
                {/* <!-- Section Container --> */}
                <div className="page-section w-full bg-white px-4 py-4 border border-[#3030302d] rounded-lg mx-0 my-0 mb-5">
                  <div className="space-y-2 font-[sans-serif] max-w-full mx-auto">
                    <h6 className="text-sm text-gray-800 font-[600] block mb-3">
                      Countries
                    </h6>

                    <div className="flex flex-col gap-3">
                      {/* <!-- No Minimum Requirement --> */}
                      <Checkbox
                        type={"radio"}
                        name={"countries"}
                        id={"all-countries"}
                        label={"All countries"}
                        value={DiscountEligibility.ALL}
                        checked={data.eligibility_country === DiscountEligibility.ALL}
                        onChange={(e) =>
                          setData("eligibility_country", e.target.value)
                        }
                      />
                      <Checkbox
                        type={"radio"}
                        name={"countries"}
                        id={"specific-countries"}
                        label={"Specific countries"}
                        value={DiscountEligibility.SPECIFIC}
                        checked={data.eligibility_country === DiscountEligibility.SPECIFIC}
                        onChange={(e) =>
                          setData("eligibility_country", e.target.value)
                        }
                      />
                      {data.eligibility_country === DiscountEligibility.SPECIFIC && (
                        <div className="seacrh-product-sec">
                          <div className="flex items-center max-w-full mx-auto gap-3">
                            <Input
                              id={"search-product"}
                              placeholder={"Search Product"}
                            />
                            <Button variant="white">Browse</Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2 font-[sans-serif] max-w-full mx-auto mt-3">
                    <h6 className="text-sm text-gray-800 font-[600] block mb-3">
                      Shipping rates
                    </h6>
                    <div className="flex flex-col gap-3">
                      {/* <!-- No Minimum Requirement --> */}
                      <Checkbox
                        id={"exclude-shipping-rates"}
                        label={"Exclude shipping rates over a certain amount"}
                        value={data.exclude_shipping_over_a_amount}
                        checked={data.exclude_shipping_over_a_amount}
                        onChange={(e) =>
                          setData("exclude_shipping_over_a_amount", e.target.checked)
                        }
                      />
                      {data.exclude_shipping_over_a_amount && (
                        <Input
                          wrapperClass={"!w-1/3 ml-5"}
                          id={"shipping-rate-amount"}
                          placeholder="0.00"
                          value={data.shipping_amount}
                          prefix={"fa fa-dollar"}
                          onChange={(e) =>
                            setData("shipping_amount", e.target.value)
                          }
                        />
                      )}
                    </div>
                  </div>
                </div>
                {/* <!--------------=========minimum purchase========----------> */}
              </>
            )}
            {data.type !== DiscountType.BUY_X_GET_Y && (
              <>
                {/* <!--------------=========minimum purchase========----------> */}
                {/* <!-- Section Container --> */}
                <div className="page-section w-full bg-white px-4 py-4 border border-[#3030302d] rounded-lg mx-0 my-0 mb-5">
                  <div className="space-y-2 font-[sans-serif] max-w-full mx-auto">
                    <h6 className="mb-2 text-sm text-gray-800 font-[600] block mb-3">
                      Minimum purchase requirements
                    </h6>

                    {/* <!-- No Minimum Requirement --> */}
                    <Checkbox
                      type={"radio"}
                      name={"requirement"}
                      id={"no-min-req"}
                      label={"No minimum requirements"}
                      value={DiscountRequirement.NO}
                      checked={data.requirement === DiscountRequirement.NO}
                      onChange={(e) => setData("requirement", e.target.value)}
                    />
                    <Checkbox
                      type={"radio"}
                      name={"requirement"}
                      id={"min-amount"}
                      label={"Minimum purchase amount"}
                      value={DiscountRequirement.AMOUNT}
                      checked={data.requirement === DiscountRequirement.AMOUNT}
                      onChange={(e) => setData("requirement", e.target.value)}
                    />
                    {data.requirement === DiscountRequirement.AMOUNT && (
                      <div className="w-1/3 ml-5">
                        <Input
                          id={"minAmountInput"}
                          placeholder="0.00"
                          prefix={"fa fa-dollar"}
                          value={data.min_amount}
                          onChange={(e) =>
                            setData("min_amount", e.target.value)
                          }
                        />
                        <p className="text-xs text-gray-700 font-light pt-1">
                          Applies only to selected{" "}
                          {data.applies_to === DiscountApplyOn.PRODUCTS
                            ? "products"
                            : "collections"}
                          .
                        </p>
                      </div>
                    )}
                    <Checkbox
                      type={"radio"}
                      name={"requirement"}
                      id={"min-qty"}
                      label={"Minimum quantity"}
                      value={"min-qty"}
                      checked={data.requirement === DiscountRequirement.QUANTITY}
                      onChange={(e) => setData("requirement", e.target.value)}
                    />
                    {data.requirement === DiscountRequirement.QUANTITY && (
                      <div className="w-1/3 ml-5">
                        <Input
                          type={"number"}
                          id={"minQtyInput"}
                          placeholder="0.00"
                          value={data.min_qty}
                          onChange={(e) => setData("min_qty", e.target.value)}
                        />
                        <p className="text-xs text-gray-700 font-light pt-1">
                          Applies only to selected{" "}
                          {data.applies_to === DiscountApplyOn.PRODUCTS
                            ? "products"
                            : "collections"}
                          .
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                {/* <!--------------=========minimum purchase========----------> */}
              </>
            )}

            {/* <!--------------=========Eligibility========----------> */}
            <div className="page-section w-full bg-white px-4 py-4 border border-[#3030302d] rounded-lg mx-0 my-0 mb-5">
              <div className="space-y-3 font-[sans-serif] max-w-full mx-auto">
                <h6 className="mb-2 text-sm text-gray-800 font-[600] block">
                  Eligibility
                </h6>
                <p className="text-xs text-gray-800">
                  Redeemable on all sales channels you have set up
                </p>
                <Checkbox
                  type={"radio"}
                  name={"eligibility"}
                  id={"all-customers"}
                  label={"All customers"}
                  value={DiscountEligibility.ALL}
                  checked={data.eligibility === DiscountEligibility.ALL}
                  onChange={(e) => setData("eligibility", e.target.value)}
                />
                <Checkbox
                  type={"radio"}
                  name={"eligibility"}
                  id={"specific-customers"}
                  label={"Specific customers"}
                  value={DiscountEligibility.SPECIFIC}
                  checked={data.eligibility === DiscountEligibility.SPECIFIC}
                  onChange={(e) => setData("eligibility", e.target.value)}
                />
                {data.eligibility === DiscountEligibility.SPECIFIC && (
                  <div className="flex items-center max-w-full mx-auto gap-3">
                    <Input placeholder={"Search customers"} />
                    <Button variant="white">Browse</Button>
                  </div>
                )}
              </div>
            </div>
            {/* <!--------------=========Eligibility========----------> */}
            {/* <!--------------=========Maximum Discount Uses========----------> */}
            <div className="page-section w-full bg-white px-4 py-4 border border-[#3030302d] rounded-lg mb-5">
              <div className="space-y-3 font-[sans-serif] max-w-full mx-auto">
                <h6 className="mb-2 text-sm text-gray-800 font-[600] block">
                  Maximum discount uses
                </h6>
                <Checkbox
                  id={"limit-total-uses"}
                  label={
                    "Limit number of times this discount can be used in total"
                  }
                  checked={data.limit_total_usage}
                  onChange={(e) =>
                    setData("limit_total_usage", e.target.checked)
                  }
                />
                {data.limit_total_usage && (
                  <Input
                    wrapperClass={"!w-1/3"}
                    type="number"
                    id={"total-usage"}
                    placeholder={"0"}
                    value={data.total_usage}
                    onChange={(e) => setData("total_usage", e.target.value)}
                  />
                )}
                <Checkbox
                  id={"once-per-customer"}
                  label={"Limit to one use per customer"}
                  checked={data.once_per_customer}
                  onChange={(e) =>
                    setData("once_per_customer", e.target.checked)
                  }
                />
              </div>
            </div>
            {/* <!--------------=========Maximum Discount Uses========----------> */}
            {/* <!--------------=========Active dates========----------> */}
            <div className="page-section w-full bg-white px-4 py-4 border border-[#3030302d] rounded-lg mb-5">
              <div className="space-y-3 font-[sans-serif] max-w-full mx-auto">
                <h6 className="mb-2 text-sm text-gray-800 font-[600] block">
                  Active dates
                </h6>
                <div>
                  <div className="max-w-full">
                    <div className="flex items-center gap-2 w-full">
                      <Input
                        type="date"
                        label={"Start date"}
                        id={"start-date"}
                        placeholder={"Select start date"}
                        value={data.start_date}
                        onChange={(e) => setData("start_date", e.target.value)}
                      />
                      <Input
                        type="time"
                        label={"Start time"}
                        id={"start-time"}
                        placeholder={"Select start time"}
                        value={data.start_time}
                        onChange={(e) => setData("start_time", e.target.value)}
                      />
                    </div>

                    {/* <!-- Checkbox --> */}
                    <Checkbox
                      wrapperClass={"mt-5"}
                      id={"set-end-date"}
                      label={"Set end date"}
                      checked={data.set_end_date}
                      value={data.set_end_date}
                      onChange={(e) =>
                        setData("set_end_date", e.target.checked)
                      }
                    />

                    {/* <!-- Date & Time Fields (Initially Hidden) --> */}
                    {data.set_end_date && (
                      <div className="flex items-center gap-2 w-full mt-3">
                        <Input
                          type="date"
                          label={"End Date"}
                          id={"end-date"}
                          placeholder={"Select end date"}
                          value={data.end_date}
                          onChange={(e) => setData("end_date", e.target.value)}
                        />
                        <Input
                          type="time"
                          label={"End time"}
                          id={"end-time"}
                          placeholder={"Select end time"}
                          value={data.end_time}
                          onChange={(e) => setData("end_time", e)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- first-section --> */}
          {/* <!-- second-section --> */}
          <div className="full-page-w flex flex-col gap-3 items-start w-[320px]">
            <div className="page-section w-full bg-white px-4 py-4 border border-[#3030302d] rounded-lg">
              <div className="flex items-start justify-start flex-col pb-4">
                <div className="flex items-center gap-4">
                  <h6
                    className="text-gray-600 font-[600] text-[13px] mb-0 pb-0"
                    id="new-discount-code"
                  >
                    No discount code yet
                  </h6>
                  <a
                    type="button"
                    href="#"
                    className="relative z-50 bg-transparent outline-none border-0 copy-code-button pointer hidden"
                  >
                    <span id="copy_text" className="text-[20px]">
                      &#10064;
                    </span>
                  </a>
                </div>

                <span className="text-gray-600 font-[400] text-[12px]">
                  Code
                </span>
              </div>
              <div className="pb-3">
                <h6 className="text-gray-600 font-[600] text-[13px] mb-0 pb-0">
                  Type
                </h6>
                <span className="text-gray-600 font-[400] text-[12px]">
                  Amount off products
                </span>
              </div>
              <h5 className="mb-2 text-sm text-gray-800 font-[600] block">
                Details
              </h5>
              {/* <!-- Percentage List --> */}
              <div id="percentage-list-1" className="mt-2">
                <ul className="list-disc list-inside text-[13px] py-1">
                  <li>For Online Store</li>
                  <li>No minimum purchase requirement</li>
                  <li>All customers</li>
                  <li>No usage limits</li>
                  <li>Can’t combine with other discounts</li>
                  <li>Active today</li>
                </ul>
              </div>
              {/* <!-- Fixed Amount List --> */}
              <div id="fixed-amount-list-1" className="mt-2 hidden">
                <ul className="list-disc list-inside text-[13px] py-1">
                  <li>For Online Store</li>
                  <li>Applies to each eligible item per order</li>
                  <li>No minimum purchase requirement</li>
                  <li>All customers</li>
                  <li>No usage limits</li>
                  <li>Can’t combine with other discounts</li>
                  <li>Active today</li>
                </ul>
              </div>
            </div>
            <div className="page-section w-full bg-white px-4 py-4 border border-[#3030302d] rounded-lg">
              <div>
                <h6 className="text-gray-600 font-[600] text-[13px] mb-0 pb-0">
                  No Sales channel access
                </h6>
                {/* <!-- Checkbox --> */}
                <div className="flex items-start mt-3">
                  <input
                    id="allow_checkbox"
                    type="checkbox"
                    className="custom-checkbox section w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                  />
                  <label
                    htmlFor="allow_checkbox"
                    className="ms-2 text-[13px] font-[400] text-gray-900 dark:text-gray-300"
                  >
                    Allow discount to be featured on
                    <a
                      href="#"
                      type="button"
                      className="block"
                      data-modal-target="static-modal-channel"
                      data-modal-toggle="static-modal-channel"
                    >
                      selected channels
                    </a>
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- second-section --> */}
          {/* <!-- sales channel modal --> */}
          <div
            id="static-modal-channel"
            data-modal-backdrop="static"
            tabIndex="-1"
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                {/* <!-- Modal header --> */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Static modal
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="static-modal-channel"
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
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union
                    enacts new consumer privacy laws for its citizens, companies
                    around the world are updating their terms of service
                    agreements to comply.
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation
                    (G.D.P.R.) goes into effect on May 25 and is meant to ensure
                    a common set of data rights in the European Union. It
                    requires organizations to notify users as soon as possible
                    of high-risk data breaches that could personally affect
                    them.
                  </p>
                </div>
                {/* <!-- Modal footer --> */}
                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    data-modal-hide="static-modal-channel"
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    I accept
                  </button>
                  <button
                    data-modal-hide="static-modal-channel"
                    type="button"
                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- sales channel modal --> */}
        </div>
        <div className="w-full flex justify-end mt-3 gap-3">
          <button
            type="button"
            className="flex items-center text-gray-800 bg-white hover:bg-[#acbbd126] rounded-lg text-[13px] pt-1 pb-1 px-2 h-[30px] submit-search-button"
          >
            <i data-lucide="trash-2" className="w-4 h-4 mr-2"></i>Discard
          </button>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 rounded-lg text-[13px] pt-1 pb-1 px-3 h-[30px]"
          >
            Save Discount
          </button>
        </div>
      </form>
      {/* <!-- page-starts --> */}
    </section>
  );
};

export default DiscountCreate;
