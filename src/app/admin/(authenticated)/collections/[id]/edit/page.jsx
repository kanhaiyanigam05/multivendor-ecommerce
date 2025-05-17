"use client";
import Button from "@/admin/components/Button";
import Checkbox from "@/admin/components/Checkbox";
import Editor from "@/admin/components/Editor";
import Input from "@/admin/components/Input";
import Loader from "@/admin/components/Loader";
import Select from "@/admin/components/Select";
import {Media} from "@/admin/context/MediaContext";
import useFetch from "@/admin/hooks/useFetch";
import useForm from "@/admin/hooks/useForm";
import SearchableModal from "@/admin/components/SearchableModal";
import {slugify} from "@/utils/utilities";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import Conditions from "@/admin/components/conditions/Conditions";
import {useParams} from "next/navigation";

const CollectionEdit = () => {
    const {id} = useParams();
    const {data, setData, put, errors, processing, reset, success} = useForm({
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
    const {data: collection, loading: collectionLoading} = useFetch(`/admin/collections/${id}`);
    const {data: products, loading: productsLoading} = useFetch("/admin/products");
    const {data: columns, loading: columnsLoading} = useFetch("/admin/conditions");
    console.log('columns', columns);
    const [isOpen, setOpen] = useState(false);
    const [openMeta, setOpenMeta] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const productSortOptions = [
        {label: "Best selling", value: ""},
        {label: "Product title A-Z", value: "asc-title"},
        {label: "Product title Z-A", value: "desc-title"},
        {label: "Highest price", value: "high-price"},
        {label: "Lowest price", value: "low-price"},
        {label: "Newest", value: "new"},
        {label: "Oldest", value: "old"},
    ];
    const statusOptions = [
        {value: "active", label: "Active"},
        {value: "draft", label: "Draft"},
    ];
    useEffect(() => {
        if (!collection) return;
        setData({
            id: collection.id,
            name: collection.name,
            description: collection.description,
            type: collection.type,
            products: collection.products.map(p => p.id),
            match: collection.match,
            meta_title: collection.meta_title,
            meta_description: collection.meta_description,
            meta_keywords: collection.meta_keywords,
            slug: collection.slug,
            status: collection.status,
            media_id: collection.media_id
        });
        setData("conditions", collection.collection_conditions?.map(condition => {
            return {
                column: condition.column_condition_id,
                condition: condition.condition_id,
                value: condition.value
            }
        }));
        setOpenMeta(true);
    }, [collectionLoading]);
    console.log(data, "collection data", products, "collection", collection);
    const handleModelClose = () => {
        setOpen(false);
        setSearchTerm("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        await put(`/admin/collections/${data.id}`, {
            onSuccess: (result) => {
                console.log(success);
            },
            onError: (error) => {
                console.log("Custom error handler:", error);
            },
        }).then((r) => console.log("result", r));
    };
    return (
        <section
            className="main-body-wrapper ml-0 p-6 transition-all duration-300 bg-[#f1f1f1] h-[100%]"
            id="content"
        >
            {/* <!-- page-starts --> */}
            <form className="collection-wrapper w-[100%] max-w-[920px] flex flex-col justify-center gap-3 mx-auto">
                {(collectionLoading || productsLoading || columnsLoading || processing) && <Loader/>}
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
                                                    {products && data.products?.map((item, index) => {
                                                        const product = products?.find((p) => p.id === item);
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
                                {products?.length > 0 && (
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
                                )}
                                {/* <!-- Main modal --> */}
                            </>
                        )}
                        {data.type === "smart" && (
                            <>
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
                                        <Conditions value={data.conditions} onChange={(e) => setData("conditions", e)} columns={columns}/>
                                    </div>
                                </div>
                                <div className="page-section w-[100%] bg-[#fff] px-3 py-4 border border-[#3030302d] rounded-lg">
                                    <div className="space-y-6 font-[sans-serif] max-w-[100%] mx-auto">
                                        <h5 className="mb-2 text-sm text-[#303030] font-[600] block">
                                            Products
                                        </h5>
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
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </>
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

export default CollectionEdit;
