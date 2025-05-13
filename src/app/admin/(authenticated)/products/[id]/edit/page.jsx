"use client";
import React, { useEffect, useState } from "react";

import Editor from "@/admin/components/Editor";
import Input from "@/admin/components/Input";
import Checkbox from "@/admin/components/Checkbox";
import Select from "@/admin/components/Select";
import useForm from "@/admin/hooks/useForm";
import Link from "next/link";
import useFetch from "@/admin/hooks/useFetch";
import { useParams } from "next/navigation";
import Loader from "@/admin/components/Loader";
import { slugify } from "@/utils/utilities";
import VariantSection from "@/admin/components/variants/VariantSection";
import { Media } from "@/admin/context/MediaContext";

const ProductEdit = () => {
  const params = useParams();
  const id = params.id;
  const { data: product, loading: productLoading } = useFetch(
    `/admin/products/${id}`
  );
  const { data: categories, loading: categoriesLoading } =
    useFetch("/admin/categories");
  const [activeCategory, setActiveCategory] = useState(null);
  const [openMeta, setOpenMeta] = useState(false);
  const { data, setData, put, processing, reset, errors, success } = useForm({
    name: "",
    short_description: "",
    long_description: "",
    category_id: "",
    sale_price: 0.0,
    actual_price: "",
    track_stock: true,
    stock: 0,
    continue_when_oos: false,
    if_sku: false,
    sku: "",
    barcode: "",
    shipping: true,
    weight_value: "",
    weight_unit: "",
    weight: "",
    meta_title: "",
    meta_description: "",
    meta_keywords: "",
    slug: "",
    status: "active",
    product_type: "variable",
    media: [],
    variants: [],
  });
  useEffect(() => {
    if (product && !productLoading) {
      const mediaIds = product.media?.map((media) => media.id);

      setData({
        ...data,
        id: product.id,
        name: product.name || "",
        short_description: product.short_description || "",
        long_description: product.long_description || "",
        category_id: product.category_id || "",
        sale_price: product.sale_price ?? 0.0,
        actual_price: product.actual_price || "",
        track_stock: product.track_stock ?? true,
        stock: product.stock || 0,
        continue_when_oos: product.continue_when_oos ?? false,
        if_sku: product.if_sku ?? false,
        sku: product.sku || "",
        barcode: product.barcode || "",
        shipping: product.shipping ?? true,
        weight_value: product.weight_value || "",
        weight_unit: product.weight_unit || "",
        weight: product.weight || "",
        meta_title: product.meta_title || "",
        meta_description: product.meta_description || "",
        meta_keywords: product.meta_keywords || "",
        slug: product.slug || "",
        status: product.status || "active",
        product_type: product.product_type || "variable",
        media: mediaIds || [],
        variants: product.inventories,
      });
      if (
        product.meta_title ||
        product.meta_description ||
        product.meta_keywords ||
        product.slug
      ) {
        setOpenMeta(true);
      }
    }
  }, [product, productLoading]);

  useEffect(() => {
    console.log("Updated form data:", data);
  }, [data]);

  useEffect(() => {
    data.weight = data.weight_value + " " + data.weight_unit;
  }, [data.weight_unit, data.weight_value]);
  useEffect(() => {
    if (categories && !categoriesLoading) {
      setActiveCategory(
        categories?.find((category) => category.id == data.category_id)
      );
    }
  }, [categories, data.category_id]);
  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "draft", label: "Draft" },
  ];
  const weightUnitOptions = [
    { value: "lb", label: "Pound" },
    { value: "oz", label: "Ounce" },
    { value: "kg", label: "Kilogram" },
    { value: "g", label: "Gram" },
  ];
  const typeOptions = [
    { value: "simple", label: "Simple" },
    { value: "variable", label: "Variable" },
    { value: "affiliate", label: "Affiliate" },
    { value: "downloadable", label: "Downloadable" },
  ];
  const categoriesOptions =
    !categoriesLoading && categories
      ? categories.map((category, i) => {
          return { value: category.id, label: category.name };
        })
      : [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    await put(`/admin/products/${data.id}`, {
      onSuccess: (result) => {
        console.log(result);
      },
      onError: (error) => {
        // Perform actions when there are errors
        console.log("Custom error handler:", error);
      },
    });
    console.log(success);
  };

  return (
    <section
      className="main-body-wrapper ml-0 p-6 transition-all duration-300 bg-[#f1f1f1] h-[100%]"
      id="content"
    >
      {/* <!-- page-starts --> */}
      <form
        className="collection-wrapper w-[100%] max-w-[920px] flex flex-col justify-center gap-3 mx-auto px-2"
        onSubmit={handleSubmit}
      >
        {(productLoading || processing) && <Loader />}
        <div className="heading-sec flex items-center py-5 gap-2 justify-center">
          <div className="flex w-[100%]  max-w-[100%] justify-between">
            <h2 className="text-[20px] font-[700] text-[#303030] flex gap-1 items-center">
              <Link href={"/admin/products"}>
                <i className="fa fa-long-arrow-left"></i>
              </Link>
              <span>Add Products</span>
            </h2>
          </div>
        </div>

        <div className="collection-wrapper w-[100%] max-w-full flex gap-4 items-start">
          {/* <!-- first-section --> */}
          <div className="full-page-w flex flex-col  items-start w-[60%]">
            <div className="bg-[#fff] px-4 py-4 border border-[#3030302d] rounded-lg mb-5 w-[100%] flex flex-col gap-3">
              <Input
                id={"name"}
                label={"Name"}
                placeholder={"Short sleeve t-shirt"}
                required
                value={data.name}
                onChange={(e) =>
                  setData({
                    ...data,
                    name: e.target.value,
                    slug: data.slug ? data.slug : slugify(e.target.value),
                  })
                }
                error={errors.name}
              />
              <Input
                textarea
                rows="3"
                label={"Short Description"}
                placeholder={"Write your content here..."}
                value={data.short_description}
                onChange={(e) => setData("short_description", e.target.value)}
                error={errors.short_description}
              />
              <Editor
                label={"Description"}
                placeholder={"Write your content here..."}
                value={data.long_description}
                onChange={(e) => setData("long_description", e)}
                error={errors.long_description}
              />
              <Media
                multiple
                id={"media"}
                label={"Media"}
                value={data.media}
                onChange={(e) => setData("media", e)}
                error={errors.media}
              />
              {!categoriesLoading && (
                <Select
                  label={
                    activeCategory ? (
                      <div className="flex justify-between">
                        <span>Category</span>
                        <span>{`${activeCategory.variants_count} Variant${
                          activeCategory.variants_count > 1 ? "s" : ""
                        }`}</span>
                      </div>
                    ) : (
                      "Category"
                    )
                  }
                  id={"category"}
                  searchable
                  variant={"simple"}
                  placeholder={"Search or select a category"}
                  options={categoriesOptions}
                  value={data.category_id}
                  onChange={(e) => setData("category_id", e)}
                  error={errors.category_id}
                />
              )}
            </div>

            <div className="bg-[#fff] px-4 py-4 border border-[#3030302d] rounded-lg mb-5 w-[100%] flex flex-col gap-3">
              <h3 className="text-[13px] text-[#303030] font-500 font-[600]">
                Pricing
              </h3>
              <div className="flex gap-5">
                <Input
                  label={"Price"}
                  id={"sale_price"}
                  placeholder={"0.00"}
                  prefix={"fa fa-dollar text-gray-400"}
                  value={data.sale_price}
                  onChange={(e) => setData("sale_price", e.target.value)}
                  error={errors.sale_price}
                />
                <Input
                  label={"Compare-at Price"}
                  id={"actual_price"}
                  placeholder={"0.00"}
                  prefix={"fa fa-dollar text-gray-400"}
                  postfix={"fa fa-question-circle text-gray-400"}
                  tooltip={
                    "To display a markdown, enter a value higher than your price, Often show with a strikethrough."
                  }
                  value={data.actual_price}
                  onChange={(e) => setData("actual_price", e.target.value)}
                  error={errors.actual_price}
                />
              </div>
            </div>
            <div className="bg-[#fff] px-4 py-4 border border-[#3030302d] rounded-lg mb-5 w-[100%] flex flex-col gap-3">
              <h3 className="text-[13px] text-[#303030] font-500 font-[600]">
                Inventory
              </h3>
              <Checkbox
                id={"trackInventory"}
                label={"Track quantity"}
                checked={data.track_stock}
                onChange={(e) => setData("track_stock", e.target.checked)}
                error={errors.track_stock}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <hr className="my-1" />
                <div className="flex justify-between items-center gap-3">
                  <p className="text-sm text-gray-700">Shop location</p>
                  {data.track_stock ? (
                    <Input
                      type={"number"}
                      wrapperClass="!w-24"
                      value={data.stock}
                      onChange={(e) => setData("stock", e.target.value)}
                      error={errors.stock}
                    />
                  ) : (
                    <p className="text-sm text-gray-700">Not tracked</p>
                  )}
                </div>
              </div>

              {data.track_stock && (
                <Checkbox
                  id={"continue_when_oos"}
                  label={"Continue selling when out of stock"}
                  checked={data.continue_when_oos}
                  onChange={(e) =>
                    setData("continue_when_oos", e.target.checked)
                  }
                  error={errors.continue_when_oos}
                />
              )}
              <Checkbox
                id={"if_sku"}
                label={"This product has a SKU or barcode"}
                checked={data.if_sku}
                onChange={(e) => setData("if_sku", e.target.checked)}
                error={errors.if_sku}
              />

              {data.if_sku && (
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label={"SKU (Stock Keeping Unit)"}
                    id={"sku"}
                    value={data.sku}
                    onChange={(e) => setData("sku", e.target.value)}
                    error={errors.sku}
                  />
                  <Input
                    label={"Barcode (ISBN, UPC, GTIN, etc.)"}
                    id={"barcode"}
                    value={data.barcode}
                    onChange={(e) => setData("barcode", e.target.value)}
                    error={errors.barcode}
                  />
                </div>
              )}
            </div>

            <div className="bg-[#fff] px-4 py-4 border border-[#3030302d] rounded-lg mb-5 w-[100%] flex flex-col gap-3">
              <h3 className="text-[13px] text-[#303030] font-500 font-[600]">
                Shipping
              </h3>

              <Checkbox
                id={"availableShipping"}
                label={"Shipping Available"}
                checked={data.shipping}
                onChange={(e) => setData("shipping", e.target.checked)}
                error={errors.shipping}
              />
              {data.shipping && (
                <div className="flex gap-2">
                  <Input
                    label={"Weight"}
                    type={"number"}
                    wrapperClass="!w-40"
                    placeholder={"0.0"}
                    value={data.weight_value}
                    onChange={(e) => setData("weight_value", e.target.value)}
                    error={errors.weight_value}
                  />
                  <Select
                    label={"Weight Unit"}
                    id={"weight_unit"}
                    wrapperClass="!w-20"
                    options={weightUnitOptions}
                    value={data.weight_unit}
                    onChange={(e) => setData("weight_unit", e)}
                    error={errors.weight_unit}
                  />
                </div>
              )}
            </div>

            {!productLoading && (
              <VariantSection
                variants={data.variants}
                setVariants={(variants) => setData("variants", variants)}
                meta_fields={activeCategory?.variants || []}
                loading={productLoading}
              />
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
                    https://hi11ms-rr.myshopify.com/products/{data.slug}
                  </small>
                </div>
              )}
            </div>
            {/* <!-- ===================new-section ===================--> */}
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
                onChange={(e) => setData("status", e.target.value)}
                error={errors.status}
              />
              <button
                type="submit"
                className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2 dark:bg-gray-800
                            dark:hover:bg-gray-700 dark:border-gray-700"
              >
                Save
              </button>
            </div>
            <div className="page-section w-[100%] bg-[#fff] px-4 py-4 border border-[#3030302d] rounded-lg flex flex-col justify-between items-center gap-3">
              <Select
                variant={"advance"}
                label={"Type"}
                id={"type"}
                options={typeOptions}
                placeholder={"Search Type"}
                value={data.product_type}
                onChange={(e) => setData("product_type", e)}
                error={errors.product_type}
              />
              <Select
                multiple
                variant={"advance"}
                label={"Collection"}
                id={"collection"}
                options={typeOptions}
                placeholder={"Collection"}
                value={data.collection}
                onChange={(e) => setData("collection", e)}
                error={errors.collection}
              />
              <Select
                multiple
                variant={"advance"}
                label={"Tags"}
                id={"tags"}
                options={typeOptions}
                placeholder={"Tags"}
                value={data.tags}
                onChange={(e) => setData("tags", e)}
                error={errors.tags}
              />
            </div>
          </div>
          {/* <!-- second-section --> */}
        </div>
        {/* <!-- Main modal --> */}
      </form>
      {/* <!-- page-starts --> */}
    </section>
  );
};

export default ProductEdit;
