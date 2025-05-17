"use client";
import Button from "@/admin/components/Button";
import React, {useEffect, useState} from "react";
import useFetch from "@/admin/hooks/useFetch"
import Loader from "@/admin/components/Loader";
import Table from "@/admin/components/Table";
import {useRouter} from "next/navigation";
import useForm from "@/admin/hooks/useForm";

const CollectionsList = () => {
    const router = useRouter();
    const {data: collections, loading, refetch} = useFetch('/admin/collections');
    const {data, setData, errors, delete: destroy, reset, processing, success} = useForm();
    const [rowData, setRowData] = useState([]);
    useEffect(() => {
        if (!collections) return;

        const data = collections.map(item => ({
            id: item.id,
            collection: item.name,
            imageUrl: item.media?.full_path,
            products: item.products_count,
            conditions: item.collection_conditions,
        }));

        setRowData(data); // This REPLACES existing data, not appending
    }, [loading]);
    const [colDefs, setColDefs] = useState([
        {
            headerName: 'Name',
            field: 'collection', // use a field for filtering/sorting, etc.
            cellRenderer: params => {
                return (
                    <div className={'flex align-center'}>
                        {params.data.imageUrl ? (
                            <img className="w-12 h-12 object-contain rounded-lg border border-gray-300" src={params.data.imageUrl}/>
                        ) : (
                            <div className="text-2xl w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200 text-gray-400">
                                <i className={'fa fa-image'}></i>
                            </div>
                        )}
                        <span className='text-[#303030] ml-2 truncate max-w-60 overflow-hidden text-ellipsis whitespace-nowrap'>{params.value}</span>
                    </div>
                );
            }
        },
        {field: "products"},
        {
            headerName: 'Conditions',
            field: 'conditions',
            cellRenderer: params => {
                console.log(params, "params");
                return (
                    <div className={'text-sm py-3'}>
                        {params.data?.conditions?.map((item, i) => (
                            <React.Fragment key={i}>
                    <span className="mr-2 py-1 rounded-md text-capitalize">
                      {`${item.column_condition?.name.charAt(0).toUpperCase() + item.column_condition?.name.slice(1)} ${item.condition?.name} ${item.value}`}
                    </span>
                                {i !== params.data.conditions.length - 1 && <br/>}
                            </React.Fragment>
                        ))}
                    </div>
                );
            }
        }
        // { field: "vendor" }
    ]);

    const handleEdit = (e, product) => {
        e.preventDefault();
        console.log("Editing:", product);
        router.push(`/admin/collections/${product.id}/edit`);
    };

    const handleDelete = (e, product) => {
        e.preventDefault();
        console.log("Deleting:", product);
        destroy(`/admin/collections/${product.id}`, {
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
    console.log(collections, "collections", rowData);
    return (
        <section
            className="main-body-wrapper ml-0 p-6 transition-all duration-300"
            id="content"
        >
            <div className="heading-sec flex w-[100%] justify-between items-center py-5">
                <h2 className="text-[20px] font-[700] text-[#303030]">Collections</h2>
                <Button href={"/admin/collections/create"} type="link">
                    Create Collection
                </Button>
            </div>
            {(processing || loading) && <Loader/>}
            <div
                className="overflow-x-auto overflow-y-hidden font-[sans-serif] rounded-lg border-[#3030302f] shadow-[ rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;]">
                <Table data={rowData} columns={colDefs} edit={handleEdit} destroy={handleDelete}/>
            </div>
            <div className="bottom-text text-center py-2">
                <h6 className="text-[13px]">
                    Learn more about{" "}
                    <a href="#" className="text-blue-500">
                        collections
                    </a>
                </h6>
            </div>
        </section>
    );
};

export default CollectionsList;
