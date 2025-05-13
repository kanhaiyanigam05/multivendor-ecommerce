"use client";
import Loader from "@/admin/components/Loader";
import Table from "@/admin/components/Table";
import useFetch from "@/admin/hooks/useFetch";
import useForm from "@/admin/hooks/useForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const InventoriesList = () => {
    const router = useRouter();
  const {data: inventories, loading: inventoriesLoading, refetch} = useFetch("/admin/inventories");
  const {data, setData, errors, delete: destroy, reset, processing, success} = useForm();
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    if (!inventoriesLoading && Array.isArray(inventories)) {
      // Prevent duplicate setRowData by verifying length or deep equality
      const data = inventories.map((inventory) => ({
        id: inventory.id,
        product: inventory.product?.name,
        variants: inventory.variants,
        imageUrl: inventory.media?.full_path || inventory.product?.media[0]?.full_path,
        sku: inventory.sku,
        available: inventory.qty,
      }));

      setRowData(data); // This REPLACES existing data, not appending
    }
  }, [inventoriesLoading, inventories]);
  const [colDefs, setColDefs] = useState([
    {
      headerName: "Product",
      field: "product", // use a field for filtering/sorting, etc.
      cellRenderer: (params) => {
        return (
          <div className={"flex items-center h-20"}>
            <img
              alt="img"
              className="w-12 h-12 object-contain rounded-lg border border-gray-300"
              src={params.data.imageUrl}
            />
            <div className="flex flex-col gap-2">
                <Link className="text-[#303030] text-sm ml-2 max-w-60 hover:underline font-semibold" href={`/admin/inventories/${params.data.id}/edit`}>
                {params.data.product}
                </Link>
                <div className="text-[#303030] text-xs ml-2 max-w-60">
                    {params.data.variants.map((variant, i) => 
                        <span key={i} className="mr-2 bg-gray-200 px-2 py-1 rounded-md">{variant.name}</span>
                    )}
                </div>
            </div>
          </div>
        );
      },
    },
    { field: "sku" },
    { field: "available" },
  ]);
  const handleEdit = (e, product) => {
    e.preventDefault();
    console.log("Editing:", product);
    router.push(`/admin/inventories/${product.id}/edit`);
  };

  const handleDelete = (e, product) => {
    e.preventDefault();
    console.log("Deleting:", product);
    destroy(`/admin/inventories/${product.id}`, {
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
      <form className="collection-wrapper w-[100%] max-w-w-75 flex flex-col justify-center gap-3 mx-auto px-2">
        {inventoriesLoading && <Loader />}
        <div className="heading-sec flex items-center py-5 gap-2 justify-center">
          <div className="flex w-[100%]  max-w-[100%] justify-between">
            <h2 className="text-[20px] font-[700] text-[#303030]">Inventory</h2>
            <div className="buttons-sec flex gap-2">
              <button className="export-button text-[12px] text-gray-900 font-[400] px-2 py-1 bg-gray-200 rounded-lg button-shadow h-[30px]">
                Export
              </button>

              <button className="import-button text-[12px] text-gray-900 font-[400] px-2 py-1 bg-gray-200 rounded-lg button-shadow h-[30px]">
                Import
              </button>
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
                      <button className="text-[12px] text-gray-900 font-normal px-3 py-1 bg-white rounded-lg h-[30px] focus:bg-gray-200 active:bg-gray-200">
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
                          <i data-lucide="columns-3" className="w-4"></i>
                        </span>
                      </button>

                      <button className="bg-white submit-search-button rounded-lg px-3 py-1 border border-gray-200 text-gray-500/50 text-[13px]">
                        <span>
                          <i data-lucide="arrow-down-up" className="w-4"></i>
                        </span>
                      </button>
                    </div>
                  </div>

                  <Table data={rowData} columns={colDefs} edit={handleEdit} destroy={handleDelete} />
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

export default InventoriesList;
