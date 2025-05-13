"use client";
import Button from "@/admin/components/Button";
import Checkbox from "@/admin/components/Checkbox";
import Dropdown from "@/admin/components/Dropdown";
import Input from "@/admin/components/Input";
import Loader from "@/admin/components/Loader";
import Select from "@/admin/components/Select";
import TagsInput from "@/admin/components/TagsInput";
import { Media } from "@/admin/context/MediaContext";
import useFetch from "@/admin/hooks/useFetch";
import useForm from "@/admin/hooks/useForm";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const InventoryEdit = () => {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  const [variants, setVariants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVariants, setSelectedVariants] = useState({}); // e.g., { Color: "#00f", Size: "L" }
  const {data: inventoryData, setData: setInventoryData, errors: inventoryErrors, put, delete: destroy, reset, processing: inventoryProcessing, success: inventorySuccess} = useForm({});
  
  const { data = {}, loading: inventoryLoading, refetch } = useFetch(
    `/admin/inventories/${id}`
  );
  const { inventory: invent = {}, inventories = [] } = data || {};
  useEffect(() => {
    setInventoryData(invent);
    // Function to extract unique variants dynamically by type and structure them
    const extractVariants = (inventoryData) => {
      const groupedVariants = {};

      // Iterate over the inventory data and group variants by type
      inventoryData.forEach((item) => {
        item.variants.forEach((variant) => {
          // If the variant type doesn't exist in groupedVariants, initialize it as an array
          if (!groupedVariants[variant.type]) {
            groupedVariants[variant.type] = [];
          }

          // Check if the value is already in the list for the current type to avoid duplicates
          const exists = groupedVariants[variant.type].some(
            (existingVariant) => existingVariant.name === variant.name
          );
          if (!exists) {
            groupedVariants[variant.type].push({
              name: variant.name,
              ...(variant.value && { value: variant.value }),
            });
          }
        });
      });

      // Convert groupedVariants into the required format
      const variantsArray = Object.keys(groupedVariants).map((type) => ({
        type: type,
        values: groupedVariants[type],
      }));

      // Update state with the structured variants
      setVariants(variantsArray);
    };

    // Run when inventory data is loaded
    if (inventories.length) {
      extractVariants(inventories);
    }
  }, [inventoryLoading]);
  console.log(
    inventories,
    "inventories",
    inventoryData,
    "inventoryData",
    variants,
    "variants"
  );
  console.log(inventoryData, 'inventoryDatainventoryDatainventoryDatainventoryData');
  
  const handleChangeInventory = (inventory) => {
    console.log(inventory, "inventoryinventoryinventory");

    //   setInventory(inventory);
    router.push(`/admin/inventories/${inventory.id}/edit`);
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleVariantChange = (type, name) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [type]: name,
    }));
  };
  const getFilteredInventories = () => {
    return inventories.filter((item) => {
      const variantMap = item.variants.reduce((acc, v) => {
        acc[v.type] = v;
        return acc;
      }, {});

      // Match search text on name or value
      const matchesSearch =
        !searchTerm ||
        item.variants.some((v) => v.name.toLowerCase().includes(searchTerm));

      // Match selected variant filters
      const matchesFilters = Object.entries(selectedVariants).every(
        ([type, selectedValue]) => variantMap[type]?.name === selectedValue
      );

      return matchesSearch && matchesFilters;
    });
  };
  const handleClearVariant = (type) => {
    setSelectedVariants((prev) => {
      const updatedVariants = { ...prev };
      delete updatedVariants[type]; // Remove the property from the object
      return updatedVariants;
    });
  };

  const filteredInventories = getFilteredInventories();

  const handleUpdateInventory = () => {
    put(`/admin/inventories/${id}`, {
      onSuccess: (result) => {
        console.log(result);
        refetch();
      },
      onError: (error) => {
        // Perform actions when there are errors
        console.log("Custom error handler:", error);
      },
    });
  };
  return (
    <section
      className="main-body-wrapper ml-0 p-6 transition-all duration-300 bg-[#f1f1f1] h-[100%]"
      id="content"
    >
      {/* <!-- page-starts --> */}
      <form className="collection-wrapper w-[100%] max-w-[920px] flex flex-col justify-center gap-3 mx-auto px-2">
        {(inventoryLoading || inventoryProcessing) && <Loader />}
        <div className="heading-sec flex items-center py-5 gap-2 justify-center">
          <div className="flex w-[100%]  max-w-[100%] justify-between">
            <h2 className="text-[20px] font-[700] text-[#303030] flex gap-1 items-center">
              <span>
                <i className="fa fa-long-arrow-left"></i>
              </span>
              <span>
                {inventoryData.variants?.map((variant) => variant.name).join(" / ")}
              </span>
            </h2>
          </div>
        </div>
        <div className="collection-wrapper w-[100%] max-w-full flex gap-4 items-start">
          {/* <!-- second-section --> */}
          <div className="full-page-w flex flex-col gap-3 items-start w-[320px]">
            <div className="page-section w-[100%] bg-[#fff] border border-[#3030302d] rounded-lg flex flex-col gap-0">
              <div className="flex gap-2 items-start border-b border-[#3030302d]">
                <div className="py-3 pl-3">
                  <img
                    src={
                        inventoryData.media?.full_path ||
                        inventoryData.product?.media[0]?.full_path
                    }
                    alt={
                        inventoryData.media?.full_path ||
                        inventoryData.product?.media[0]?.alt
                    }
                    className="h-20 w-20 object-contain border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1 py-3 pr-3  max-w-[200px]">
                  <h4 className="text-[15px] text-gray-600 font-semibold">
                    {inventoryData.product?.name}
                  </h4>
                  {inventoryData.product?.status ? (
                    <span className="bg-green-200 text-green-700 text-[13px] font-[400] px-3 py-1 rounded-lg w-fit">
                      Active
                    </span>
                  ) : (
                    <span className="bg-gray-200 text-gray-700 text-[13px] font-[400] px-3 py-1 rounded-lg w-fit">
                      Draft
                    </span>
                  )}
                  <span className="text-gray-600 text-[14px] font-[400]">
                    {`${inventories.length} Variant${
                      inventories.length > 1 ? "s" : ""
                    }`}
                  </span>
                </div>
              </div>
              <div className="relative w-full max-w-[100%] flex flex-col gap-2 mb-5 px-3 py-3">
                <div className="my-list-item-sec">
                  <div className="flex flex-col gap-3">
                    <Input
                      id="search"
                      type="text"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                    <div className="flex gap-3">
                      {variants?.map((variant, i) => (
                        <Dropdown
                          key={i}
                          btnText={`${variant.type}`}
                          btnClass={
                            "text-xs px-2 py-1 border border-dashed border-gray-300 rounded-md"
                          }
                          itemsWrapperClass={
                            "flex flex-col w-60 border bg-white border-gray-300 p-2 rounded-lg shadow-lg"
                          }
                        >
                          {variant.values?.map((value, i) => (
                            <Checkbox
                              key={i}
                              name={variant.type}
                              id={`${variant.type}-${value.name}`}
                              type="radio"
                              label={value.name}
                              wrapperClass={
                                "text-xs px-2 py-1 hover:bg-gray-50 rounded-md"
                              }
                              labelClass={"w-full"}
                              checked={
                                selectedVariants[variant.type] === value.name
                              }
                              onChange={() =>
                                handleVariantChange(variant.type, value.name)
                              }
                            />
                          ))}
                          <button
                            type="button"
                            className={`text-xs px-2 py-1 hover:bg-gray-50 rounded-md text-left ${
                              !selectedVariants[variant.type]
                                ? "text-gray-400"
                                : ""
                            }`}
                            onClick={() => handleClearVariant(variant.type)}
                            disabled={!selectedVariants[variant.type]}
                          >
                            Clear
                          </button>
                        </Dropdown>
                      ))}
                    </div>
                  </div>
                  <ul className="pt-3">
                    {filteredInventories?.map((item) => (
                      <li
                        key={item.id}
                        onClick={() => handleChangeInventory(item)}
                        className="cursor-pointer"
                      >
                        <div
                          className={`flex items-center gap-1 px-1 py-1 my-1 ${
                            item.id === inventoryData.id
                              ? "bg-gray-100 text-gray-800"
                              : "bg-transparent text-gray-500"
                          } hover:bg-gray-100 hover:text-gray-800 rounded-lg`}
                        >
                          <img
                            src={
                              item.media?.full_path ||
                              item.product?.media[0]?.full_path
                            }
                            alt={
                              item.media?.full_path ||
                              item.product?.media[0]?.alt
                            }
                            className="w-8 h-8 object-contain border border-gray-300 rounded-md bg-gray-100"
                          />
                          <p className="text-[14px] font-[600]">
                            {item.variants
                              ?.map((variant) => variant.name)
                              .join(" / ")}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {/* <div className="pt-3">
                  <Button type="button" variant="transparent" className={'!text-gray-800 font-thin !bg-gray-100 w-full !justify-start'}><i className="fa fa-plus mr-2"></i>Create new variant</Button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- second-section --> */}
          {/* <!-- first-section --> */}
          <div className="full-page-w flex flex-col  items-start w-[60%]">
            <div className="bg-[#fff] px-4 py-4 border border-[#3030302d] rounded-lg mb-5 w-[100%] flex flex-col gap-3">
              <h3 className="text-[13px] text-[#303030] font-500 font-[600]">
                Options
              </h3>
              {variants?.map((variant, i) => (
                  <TagsInput key={i} label={variant.type} value={variant.values} id={`tags-${i}`} placeholder={`Choose ${variant.type}`} disabled />
              ))}
              <Media label="Media" value={inventoryData.media_id} onChange={(e) => setInventoryData({ ...inventoryData, media_id: e })} />
            </div>

            <div className="bg-[#fff] px-4 py-4 border border-[#3030302d] rounded-lg mb-5 w-[100%] flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <h3 className="text-[13px] text-[#303030] font-500 font-[600]">
                  Pricing
                </h3>
              </div>
              <div className="flex gap-5">
                <Input label="Price" value={inventoryData.price || ""} onChange={(e) => setInventoryData({ ...inventoryData, price: e.target.value })} />
                <Input label="Compare-at price" placeholder="0.00" value={inventoryData.compare_at_price || ""} onChange={(e) => setInventoryData({ ...inventoryData, compare_at_price: e.target.value })} />
              </div>
            </div>
            <div className="bg-[#fff] px-4 py-4 border border-[#3030302d] rounded-lg mb-5 w-[100%] flex flex-col gap-3">
              <h3 className="text-[13px] text-[#303030] font-500 font-[600]">
                Inventory
              </h3>
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label={"SKU (Stock Keeping Unit)"}
                    id={"sku"}
                    value={inventoryData.sku || ""}
                    onChange={(e) => setInventoryData("sku", e.target.value)}
                    error={inventoryErrors.sku}
                  />
                  <Input
                    label={"Barcode (ISBN, UPC, GTIN, etc.)"}
                    id={"barcode"}
                    value={inventoryData.barcode || ""}
                    onChange={(e) => setInventoryData("barcode", e.target.value)}
                    error={inventoryErrors.barcode}
                  />
                </div>
              <Checkbox
                id={"trackInventory"}
                label={"Track quantity"}
                checked={inventoryData.track_quantity || false}
                onChange={(e) => setInventoryData("track_quantity", e.target.checked)}
                error={inventoryErrors.track_quantity}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <hr className="my-1" />
                <div className="flex justify-between items-center gap-3">
                  <p className="text-sm text-gray-700">Shop location</p>
                  {inventoryData.track_quantity ? (
                    <Input
                      type={"number"}
                      wrapperClass="!w-24"
                      value={inventoryData.qty}
                      onChange={(e) => setInventoryData("qty", e.target.value)}
                      error={inventoryErrors.qty}
                    />
                  ) : (
                    <p className="text-sm text-gray-700">Not tracked</p>
                  )}
                </div>
              </div>

              {inventoryData.track_quantity && (
                <Checkbox
                  id={"continue_when_oos"}
                  label={"Continue selling when out of stock"}
                  checked={inventoryData.continue_when_oos}
                  onChange={(e) =>
                    setInventoryData("continue_when_oos", e.target.checked)
                  }
                  error={inventoryErrors.continue_when_oos}
                />
              )}

            </div>
            <div className="bg-[#fff] px-4 py-4 border border-[#3030302d] rounded-lg mb-5 w-[100%] flex justify-end gap-3">
              <Button type="button" onClick={handleUpdateInventory}>Update</Button>
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

export default InventoryEdit;
