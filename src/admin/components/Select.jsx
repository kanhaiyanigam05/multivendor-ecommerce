"use client";
import React, {useEffect, useRef, useState} from "react";
import {default as ReactSelect} from "react-select";
import Checkbox from "./Checkbox";
import Input from "./Input";

const Select = ({
                    id = null,
                    options = [],
                    multiple = false,
                    value = null,
                    required,
                    variant = null,
                    label = null,
                    placeholder = null,
                    labelClass = null,
                    searchable = false,
                    wrapperClass = null,
                    className = null,
                    error = null,
                    onChange = () => {
                    },
                    ...props
                }) => {
    const [focus, setFocus] = useState(false);
    const [selectValue, setSelectValue] = useState(multiple ? [] : "");
    useEffect(() => {
        const getMatchingOptions = (vals) => {
            return options?.filter((opt) => vals.includes(opt.value)) || [];
        };

        if (multiple) {
            if (Array.isArray(value)) {
                const matched = getMatchingOptions(value);
                setSelectValue(matched.map((opt) => opt.label));
            } else if (value) {
                const matched = getMatchingOptions([value]);
                setSelectValue(matched.map((opt) => opt.label));
            } else {
                setSelectValue([]);
            }
        } else {
            const matched = options?.find((opt) => opt.value === value);
            setSelectValue(matched?.label || "");
        }
    }, [value, options, multiple]);

    const [searchTerm, setSearchTerm] = useState("");
    const wrapperRef = useRef(null);
    const customStyles = {
        control: (base) => ({
            ...base, innerHeight: "30px", innerWidth: "100%", backgroundColor: "#f9fafb", borderColor: "#000000", borderRadius: "8px", color: "#303030",
        }), option: (base, {isFocused}) => ({
            ...base, backgroundColor: isFocused ? "lightblue" : "white", color: "black",
        }),
    };
    // Close dropdown if click is outside component
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setFocus(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleInputClick = () => setFocus(true);
    const handleToggleClick = () => setFocus((prev) => !prev);

    return (<div className={`flex max-w-[100%] w-full flex-col gap-1 ${wrapperClass}`}>
        {label && (<label
            htmlFor={id}
            className={`text-[13px] text-[#303030] font-500 ${labelClass}`}
        >
            {label} {required ? <span className="text-red-800">*</span> : null}
        </label>)}
        {variant === "react-select" ? (<ReactSelect styles={customStyles} options={options}/>) : variant === "advance" || variant === "simple" ? (<div className="relative" ref={wrapperRef}>
            {/* <!-- Searchable Input --> */}
            <Input
                id={id}
                {...props}
                onClick={handleInputClick}
                value={searchable ? searchTerm || selectValue || "" : multiple ? "" : selectValue || ""}
                onChange={(e) => searchable ? setSearchTerm(e.target.value) : !multiple && setSelectValue(e.target.value)}
            />
            {multiple && selectValue.length > 0 ? (<div className="flex flex-wrap gap-2 mt-2">
                {selectValue.map((item, i) => (<span
                    key={i}
                    className="w-fit flex items-center gap-1 px-2 py-1 text-xs font-thin text-gray-500 bg-gray-200 hover:bg-gray-300 hover:underline rounded-lg shadow-md"
                >
                  {item}
                    <button
                        type="button"
                        onClick={() => {
                            onChange(selectValue.filter((label) => label !== item));
                            setSelectValue(selectValue.filter((label) => label !== item));
                        }}
                    >
                    <i className="fa fa-close"></i>
                  </button>
                </span>))}
            </div>) : null}
            <span
                onClick={handleToggleClick}
                className="dropdown-toggle-icon-type text-[11px] absolute top-1 right-2 cursor-pointer flex flex-col gap-0"
            >
            {!focus ? (<>
                <i className="fa fa-angle-up text-[11px]"></i>
                <i className="fa fa-angle-down text-[11px]"></i>
            </>) : (<i className="fa fa-close relative top-2 text-[15px]"></i>)}
          </span>
            {/* <!-- Dropdown menu (Custom Select) --> */}
            <ul
                className={`${!focus ? "hidden " : ""}px-1 py-2 absolute z-10 bg-white border border-gray-200 rounded-lg w-full max-h-[250px] overflow-y-auto mt-2 shadow-lg unique-dropdown`}
            >
                {options
                    .filter((item) => item.label.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((item, i) => {
                        const isChecked = multiple ? (selectValue || []).includes(item.label) : selectValue === item.label;

                        const handleItemChange = () => {
                            if (multiple) {
                                const newValues = isChecked ? selectValue.filter((label) => label !== item.label) : [...(selectValue || []), item.label];
                                setSelectValue(newValues);
                                onChange(options
                                    .filter((opt) => newValues.includes(opt.label))
                                    .map((opt) => opt.value));
                                setFocus(true);
                                setSearchTerm("");
                            } else {
                                setSelectValue(item.label);
                                onChange(item.value);
                                setFocus(false);
                                setSearchTerm("");
                            }
                        };

                        return (<li
                            key={i}
                            className="px-2 py-1 cursor-pointer hover:bg-gray-100 text-[13px] text-[#303030]"
                            onClick={variant === "simple" ? handleItemChange : null}
                        >
                            {variant === "advance" ? (<Checkbox
                                labelClass={"w-full"}
                                name="type"
                                type={multiple ? "checkbox" : "radio"}
                                value={item.value}
                                label={item.label}
                                id={`${id}${i}`}
                                checked={isChecked}
                                onChange={handleItemChange}
                            />) : (item.label)}
                        </li>);
                    })}
            </ul>
        </div>) : (<select
            id={id}
            className={`h-[35px] bg-gray-50 rounded-lg w-full text-[#303030] text-[13px] border py-1 px-2 outline-offset-2 focus-within:outline-2 focus-within:outline-blue-800 ${className}${error ? "border-red-800 bg-red-100" : "border-black bg-gray-50"}`}
            value={value || selectValue}
            onChange={(e) => {
                setSelectValue(e.target.value);
                onChange(e.target.value);
            }}
            {...props}
        >
            {placeholder && (<option value="">{placeholder}</option>)}
            {options.map((option, i) => (
                <option value={option.value} key={i}>
                    {option.label}
                </option>))}
        </select>)}
        {error && (<span className="text-red-800 text-[13px] font-500">
          <i className="fa fa-exclamation-circle me-2"></i>
            {Array.isArray(error) ? error[0] : error}
        </span>)}
    </div>);
};

export default Select;
