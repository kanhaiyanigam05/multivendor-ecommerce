"use client";
import Loader from '@/admin/components/Loader';
import useFetch from '@/admin/hooks/useFetch';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from '@/admin/components/Button';
import Table from '@/admin/components/Table';
import { useRouter } from 'next/navigation';
import useForm from '@/admin/hooks/useForm';

const ProductList = () => {
    const router = useRouter();
    const { data: products, loading: productsLoading, refetch } = useFetch('/admin/products');
    const { data, setData, errors, delete: destroy, reset, processing, success } = useForm();
    const [rowData, setRowData] = useState([]);
    console.log(products, "products");

    useEffect(() => {
        if (!productsLoading && Array.isArray(products)) {
            // Prevent duplicate setRowData by verifying length or deep equality
            const data = products.map(product => ({
                id: product.id,
                product: product.name,
                imageUrl: product.media[0]?.full_path,
                status: product.status,
                inventory: product.inventory,
                category: product.category?.name || '',
                type: product.product_type,
            }));

            setRowData(data); // This REPLACES existing data, not appending
        }
    }, [productsLoading, products]);
    const [colDefs, setColDefs] = useState([
        {
            headerName: 'Product',
            field: 'product', // use a field for filtering/sorting, etc.
            cellRenderer: params => {
                return (
                    <div className={'flex align-center'}>
                        <img alt="img" className="px-2 w-[50px] rounded-lg border border-gray-300" src={params.data.imageUrl} />
                        <span className='text-[#303030] ml-2 truncate max-w-60 overflow-hidden text-ellipsis whitespace-nowrap'>{params.value}</span>
                    </div>
                );
            }
        },
        { field: "status" },
        { field: "inventory" },
        { field: "category" },
        { field: "type" }
        // { field: "vendor" }
    ]);
    const handleEdit = (e, product) => {
        e.preventDefault();
        console.log("Editing:", product);
        router.push(`/admin/products/${product.id}/edit`);
    };

    const handleDelete = (e, product) => {
        e.preventDefault();
        console.log("Deleting:", product);
        destroy(`/admin/products/${product.id}`, {
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
        <>
            <section className="main-body-wrapper ml-0 p-6 transition-all duration-300 bg-[#f1f1f1] h-[100%] relative z-1" id="content">
                {/* <!-- page-starts --> */}
                <form className="relative collection-wrapper w-[100%] max-w-w-75 flex flex-col justify-center gap-3 mx-auto px-2">
                    {(productsLoading || processing) && <Loader />}
                    {products?.length <= 0 ? (
                        <>
                            <div className="heading-sec flex items-center py-5 gap-2 justify-center">
                                <div className="flex w-[100%]  max-w-[100%] justify-between">
                                    <h2 className="text-[20px] font-[700] text-[#303030]">Products</h2>
                                </div>
                            </div>
                            <div className="collection-wrapper w-[100%] max-w-full">
                                {/* <!-- first-section --> */}
                                <div className="full-page-w max-w-full">
                                    <div className="page-section w-[100%] bg-[#fff]  border border-[#3030302d] rounded-lg">
                                        <div className="flex justify-between items-center max-w-full py-3 px-5 border-b border-gray-200">
                                            <div className="flex gap-3">
                                                <button className="bg-gray-100 rounded-lg px-2 py-1 border border-gray-200 text-gray-500/50 text-[13px]" disabled>All</button>
                                                <button className="bg-transparent rounded-lg px-2 py-1 border border-none text-gray-500/75 text-[16px]" disabled>
                                                    <i data-lucide="plus" className="w-4"></i>
                                                </button>
                                            </div>
                                            <div className="flex gap-3">
                                                <button className="bg-gray-100 rounded-lg px-2 py-1 border border-gray-200 text-gray-500/50 text-[13px] flex gap-2" disabled>
                                                    <span><i className="fa fa-search w-4"></i></span>
                                                    <span><i className="fa fa-list w-4"></i></span>
                                                </button>
                                                <button className="bg-gray-100 rounded-lg px-2 py-1 border border-gray-200 text-gray-500/50 text-[13px]" disabled>
                                                    <span><i className="fa fa-exchange rotate-90 w-4"></i></span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="middle-part flex justify-between items-center px-[130px]">
                                            <div className="px-[150px] py-[50px]">
                                                <h3 className="font-[600] text-[20px] pb-0">Add your products</h3>
                                                <p className="text-[13px] pb-4">Start by stocking your store with products your customers will love</p>
                                                <div className="flex gap-2">
                                                    <Button type='link' href={"products/create"} className={'text-nowrap'}>
                                                        <i className="fa fa-plus w-4 h-4 mr-1 text-[#fff] !flex items-center"></i> Add Products
                                                    </Button>
                                                    <Button className="text-nowrap" variant='light'>
                                                        <i className="fa fa-plus w-4 h-4 mr-1 text-[#000] !flex items-center"></i> Import
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="px-[150px] py-[50px]">
                                                <img src="https://cdn.shopify.com/shopifycloud/web/assets/v1/vite/client/en/assets/empty-state-personalized-Bu4xlcHV0rQu.svg"
                                                    alt="img" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* <!-- first-section --> */}

                            </div>
                            {/* <!-- Main modal --> */}
                        </>
                    ) : (
                        <>
                            <div className="heading-sec flex items-center py-5 gap-2 justify-center">
                                <div className="flex w-[100%]  max-w-[100%] justify-between">
                                    <h2 className="text-[20px] font-[700] text-[#303030]">Products</h2>
                                    <div className="buttons-sec flex gap-2">
                                        <button className="export-button text-[12px] text-gray-900 font-[400] px-2 py-1 bg-gray-200 rounded-lg button-shadow h-[30px]">Export</button>
                                        <button className="import-button text-[12px] text-gray-900 font-[400] px-2 py-1 bg-gray-200 rounded-lg button-shadow h-[30px]">Import</button>
                                        <div className="relative inline-block text-left">
                                            <button className="h-[30px] text-[12px] text-gray-900 font-[400] px-2 py-1 bg-gray-200 rounded-lg button-shadow flex gap-1 items-center" type="button">
                                                More Actions
                                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                </svg>
                                            </button>

                                            {/* <!-- Dropdown menu --> */}
                                            <div className=" z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Add</a></li>
                                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a></li>
                                                    <li><a href="#" className="text-red-700 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-red-700">Remove</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <Link href={"products/create"} className="import-button text-[12px] text-white font-[400] px-2 py-1 bg-black rounded-lg button-shadow">
                                            Add Products
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="collection-wrapper w-[100%] max-w-full">
                                {/* <!-- first-section --> */}
                                <div className="full-page-w max-w-full">
                                    <Table data={rowData} columns={colDefs} edit={handleEdit} destroy={handleDelete} />
                                </div>
                                {/* <!-- first-section --> */}
                            </div>
                            {/* <!-- Main modal --> */}
                        </>
                    )}
                </form>
                {/* <!-- page-starts --> */}
            </section>

        </>
    );
}

export default ProductList;