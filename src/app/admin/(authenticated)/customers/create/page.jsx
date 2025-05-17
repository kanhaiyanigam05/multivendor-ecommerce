"use client";
import Button from "@/admin/components/Button";
import Input from "@/admin/components/Input";
import Modal from "@/admin/components/Modal";
import Select from "@/admin/components/Select";
import useForm from "@/admin/hooks/useForm";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import useFetch from "@/admin/hooks/useFetch";
import Loader from "@/admin/components/Loader";

const CustomerCreate = () => {
    const {data, setData, post, errors, processing, reset, success} = useForm({
        fname: "",
        lname: "",
        email: "",
        country: "",
        telcode: "",
        phone: "",
        address: [],
        status: "active",
    });
    const {data: countries, loading: countriesLoading} = useFetch("/admin/countries");
    const [address, setAddress] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [addressErrors, setAddressErrors] = useState({});
    useEffect(() => {
        setAddress(data.address);
    }, [data.address]);
    const countriesOptions = countries?.map((country) => ({
        value: country.id,
        label: country.name,
    }));
    useEffect(() => {
        if (!countries) return;
        let activeCountry = countries.find((country) => country.id === Number(address.country));
        activeCountry = activeCountry || countries[0];
        setAddress((prevState) => ({
            ...prevState,
            country: activeCountry.id,
            telcode: activeCountry.telcode,
            countryData: activeCountry,
            zoneOptions: activeCountry.zones?.map((zone) => ({
                value: zone.id,
                label: zone.name,
            })),
        }))
        setData("country", data.country === '' ? countries[0].id : data.country);
    }, [address.country, countries]);
    console.log(data, "data, address", address, "countries", countries, "address", address);

    const handleAddressSubmit = () => {
        // Validate address fields before saving
        const errors = {};

        if (!address?.country) {
            errors.country = "Country is required";
        }

        if (!address?.fname || address.fname.trim() === "") {
            errors.fname = "First name is required";
        }

        if (!address?.lname || address.lname.trim() === "") {
            errors.lname = "Last name is required";
        }

        if (!address?.address_1 || address.address_1.trim() === "") {
            errors.address_1 = "Address is required";
        }

        if (!address?.city || address.city.trim() === "") {
            errors.city = "City is required";
        }

        if (address?.zoneOptions && address.zoneOptions.length > 0 && !address?.zone) {
            errors.zone = `${address?.countryData?.zone || 'State/Province'} is required`;
        }

        if (address?.countryData?.postalcode && (!address?.postalcode || address.postalcode.trim() === "")) {
            errors.postalcode = `${address?.countryData?.postalcode || 'Postal code'} is required`;
        }

        if (!address?.phone || address.phone.trim() === "") {
            errors.phone = "Phone number is required";
        }

        setAddressErrors(errors);

        // If there are no errors, save the address and close the modal
        if (Object.keys(errors).length === 0) {
            setShowModal(false);
            setData("address", address);
        }
    }
    const statusOptions = [
        {value: "active", label: "Active"},
        {value: "draft", label: "Draft"},
    ];
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate form fields before submitting
        await post("/admin/customers", {
            onSuccess: (result) => {
                reset();
                console.log(result);
            },
            onError: (error) => {
                // Perform actions when there are errors
                console.log("Custom error handler:", error);
            },
        });
        console.log(success);
    }
    return (
        <section
            className="main-body-wrapper ml-0 p-6 transition-all duration-300 bg-[#f1f1f1] h-full"
            id="content"
        >
            {/* <!-- page-starts --> */}
            <form className="collection-wrapper w-full max-w-[920px] flex flex-col justify-center gap-3 mx-auto px-2" onSubmit={handleSubmit}>
                {(countriesLoading || processing) && <Loader/>}
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
                                <Select
                                    label={"Country"}
                                    id={"country"}
                                    options={countriesOptions}
                                    value={data.country}
                                    onChange={(e) => setData("country", Number(e))}
                                />
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="phone"
                                        className="text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Phone Number
                                    </label>
                                    <div className="flex justify-between w-full gap-3 mb-3 items-end">
                                        <button type="button"
                                                className={'min-w-16 relative h-[35px] bg-gray-50 rounded-lg text-[#303030] text-[13px] border py-1 px-2 outline-offset-2 focus-within:outline-2 focus-within:outline-blue-800'}>
                                            <img src={countries?.find(country => country.id === data.country)?.flag_url || '#!'} alt="" className="w-6 h-6 object-contain"/>
                                            <span className="dropdown-toggle-icon-type text-[11px] absolute top-1 right-2 cursor-pointer flex flex-col gap-0">
                                                <i className="fa fa-angle-up text-[11px]"></i>
                                                <i className="fa fa-angle-down text-[11px]"></i>
                                            </span>
                                        </button>
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
                                                    <p>{`${address?.fname} ${address?.lname}`}</p>
                                                    <p>{address?.company}</p>
                                                    <p>{address?.address_1}</p>
                                                    <p>{address?.address_2}</p>
                                                    {address?.zone ? (
                                                        <>
                                                            <p>{address?.city}</p>
                                                            <p>{`${address?.zone} ${address?.postalcode}`}</p>
                                                        </>
                                                    ) : (
                                                        <p>{`${address?.city} ${address?.postalcode}`}</p>
                                                    )}
                                                    <p>{address?.countryData?.name}</p>
                                                    <p>{`+${address?.telcode} ${address?.phone}`}</p>
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
                                    options={countriesOptions}
                                    value={address?.country || ""}
                                    error={addressErrors.country}
                                    onChange={(e) => {
                                        console.log(e, 'e');
                                        setAddress((prevData) => ({
                                            ...prevData,
                                            country: Number(e)
                                        }));
                                        // Clear the error when the field is updated
                                        if (addressErrors.country) {
                                            setAddressErrors(prev => ({
                                                ...prev,
                                                country: null
                                            }));
                                        }
                                    }}
                                />
                                <div className="flex justify-between w-full gap-3">
                                    <Input
                                        label={"First Name"}
                                        id={"fname"}
                                        placeholder={"First Name"}
                                        value={address?.fname || ""}
                                        error={addressErrors.fname}
                                        onChange={(e) => {
                                            setAddress((prevData) => ({
                                                ...prevData,
                                                fname: e.target.value,
                                            }));
                                            // Clear the error when the field is updated
                                            if (addressErrors.fname) {
                                                setAddressErrors(prev => ({
                                                    ...prev,
                                                    fname: null
                                                }));
                                            }
                                        }}
                                    />
                                    <Input
                                        label={"Last Name"}
                                        id={"lname"}
                                        placeholder={"Last Name"}
                                        value={address?.lname || ""}
                                        error={addressErrors.lname}
                                        onChange={(e) => {
                                            setAddress((prevData) => ({
                                                ...prevData,
                                                lname: e.target.value,
                                            }));
                                            // Clear the error when the field is updated
                                            if (addressErrors.lname) {
                                                setAddressErrors(prev => ({
                                                    ...prev,
                                                    lname: null
                                                }));
                                            }
                                        }}
                                    />
                                </div>
                                <Input
                                    label={"Company"}
                                    id={"company"}
                                    placeholder={"Company"}
                                    value={address?.company || ""}
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
                                    value={address?.address_1 || ""}
                                    error={addressErrors.address_1}
                                    onChange={(e) => {
                                        setAddress((prevData) => ({
                                            ...prevData,
                                            address_1: e.target.value,
                                        }));
                                        // Clear the error when the field is updated
                                        if (addressErrors.address_1) {
                                            setAddressErrors(prev => ({
                                                ...prev,
                                                address_1: null
                                            }));
                                        }
                                    }}
                                />
                                <Input
                                    label={"Apartment,suite,etc"}
                                    id={"apartment"}
                                    placeholder={"Apartment,suite,etc"}
                                    value={address?.address_2 || ""}
                                    onChange={(e) =>
                                        setAddress((prevData) => ({
                                            ...prevData,
                                            address_2: e.target.value,
                                        }))
                                    }
                                />
                                <div className="grid grid-cols-2 justify-between w-full gap-3 mb-3">
                                    <Input
                                        label={"City"}
                                        id={"city"}
                                        placeholder={"City"}
                                        value={address?.city || ""}
                                        error={addressErrors.city}
                                        onChange={(e) => {
                                            setAddress((prevData) => ({
                                                ...prevData,
                                                city: e.target.value,
                                            }));
                                            // Clear the error when the field is updated
                                            if (addressErrors.city) {
                                                setAddressErrors(prev => ({
                                                    ...prev,
                                                    city: null
                                                }));
                                            }
                                        }}
                                    />
                                    {address?.zoneOptions && address?.zoneOptions.length > 0 && (
                                        <Select
                                            label={address?.countryData?.zone}
                                            id={address?.countryData?.zone}
                                            placeholder={`Select ${address?.countryData?.zone}`}
                                            options={address?.zoneOptions}
                                            value={address?.zone || ""}
                                            error={addressErrors.zone}
                                            onChange={(e) => {
                                                setAddress((prevData) => ({
                                                    ...prevData,
                                                    zone: e,
                                                }));
                                                // Clear the error when the field is updated
                                                if (addressErrors.zone) {
                                                    setAddressErrors(prev => ({
                                                        ...prev,
                                                        zone: null
                                                    }));
                                                }
                                            }}
                                        />
                                    )}
                                    {address?.countryData?.postalcode && (
                                        <Input
                                            wrapperClass={`${address?.zoneOptions && address?.zoneOptions.length > 0 ? 'col-span-2' : 'col-span-1'}`}
                                            label={address?.countryData?.postalcode}
                                            id={address?.countryData?.postalcode}
                                            placeholder={address?.countryData?.postalcode}
                                            value={address?.postalcode || ""}
                                            error={addressErrors.postalcode}
                                            onChange={(e) => {
                                                setAddress((prevData) => ({
                                                    ...prevData,
                                                    postalcode: e.target.value,
                                                }));
                                                // Clear the error when the field is updated
                                                if (addressErrors.postalcode) {
                                                    setAddressErrors(prev => ({
                                                        ...prev,
                                                        postalcode: null
                                                    }));
                                                }
                                            }}
                                        />
                                    )}
                                </div>

                                <div className="flex flex-col">
                                    <label
                                        htmlFor="phone"
                                        className="text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Phone Number
                                    </label>
                                    <div className="flex justify-between w-full gap-3 mb-3 items-start">
                                        <button type="button"
                                                className={'min-w-16 relative h-[35px] bg-gray-50 rounded-lg text-[#303030] text-[13px] border py-1 px-2 outline-offset-2 focus-within:outline-2 focus-within:outline-blue-800'}>
                                            <img src={address?.countryData?.flag_url} alt="flag" className="w-6 h-6 object-contain"/>
                                            <span className="dropdown-toggle-icon-type text-[11px] absolute top-1 right-2 cursor-pointer flex flex-col gap-0">
                                                <i className="fa fa-angle-up text-[11px]"></i>
                                                <i className="fa fa-angle-down text-[11px]"></i>
                                            </span>
                                        </button>
                                        <Input
                                            id={"phone"}
                                            placeholder={"Phone"}
                                            value={address?.phone || ""}
                                            error={addressErrors.phone}
                                            onChange={(e) => {
                                                setAddress((prevData) => ({
                                                    ...prevData,
                                                    phone: e.target.value,
                                                }));
                                                // Clear the error when the field is updated
                                                if (addressErrors.phone) {
                                                    setAddressErrors(prev => ({
                                                        ...prev,
                                                        phone: null
                                                    }));
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Modal footer --> */}
                            <div className="rounded-b-lg top-box-shadow flex justify-end items-center gap-2 px-2 py-2 border-t border-gray-200 dark:border-gray-600 bg-white">
                                <Button
                                    variant="white"
                                    className="w-18"
                                    onClick={() => {
                                        setShowModal(false);
                                        setAddressErrors({});
                                    }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    className="w-18"
                                    onClick={handleAddressSubmit}
                                >
                                    {Object.keys(data?.address || {}).length === 0
                                        ? "Save"
                                        : "Update"}
                                </Button>
                            </div>
                        </Modal>
                        {/*<div
                            className=" bg-[#fff] px-4 py-4 border border-[#3030302d] rounded-lg mb-5 w-full flex flex-col gap-3"
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
                        </div>*/}
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
                    </div>
                    {/* <!-- second-section --> */}
                </div>
                {/* <!-- Main modal --> */}
            </form>
            {/* <!-- page-starts --> */}
        </section>
    );
};

export default CustomerCreate;
