"use client";
import React, { useEffect, useRef, useState } from "react";
import Checkbox from "./Checkbox";

const TagsInput = ({
    variant = "",
    label = null,
    labelClass = null,
    className = "",
    type = "text",
    id = null,
    required = false,
    wrapperClass = null,
    onChange = () => {},
    value = [], // controlled tags array from parent
    disabled = false,
    error = null,
    list = [],
    isColor = false,
    ...props
}) => {
    const [inputValue, setInputValue] = useState("");
    const [isFocused, setFocused] = useState(false);
    const wrapperRef = useRef(null);
    const [filteredList, setFilteredList] = useState(list);
    useEffect(() => {
        if (list.length > 0) {
            const filtered = list.filter(item =>
                item.name.toLowerCase().includes(inputValue.toLowerCase())
            );
            setFilteredList(filtered);
        }
    }, [inputValue, list]);
    
    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            const raw = inputValue.trim();
            if (!raw) return;
    
            if (list.length > 0) {
                const matchedItem = list.find(item => item.name.toLowerCase() === raw.toLowerCase());
                if (!matchedItem) return; // don't add if not in list
                if (value.some(tag => tag.name === matchedItem.name)) return; // avoid duplicates
    
                onChange([...value, matchedItem]);
            } else {
                if (value.some(tag => tag.name === raw)) return; // avoid duplicates
                onChange([...value, { name: raw }]);
            }
    
            setInputValue("");
        }
    };
    

    const handleRemoveTag = (indexToRemove) => {
        const updatedTags = value.filter((_, i) => i !== indexToRemove);
        onChange(updatedTags);
    };

    const handleListClick = (tag) => {
        const tagExists = value.some(existingTag => existingTag.name === tag.name); // Adjust comparison as needed
    
        let newTags;
        if (tagExists) {
            newTags = value.filter(existingTag => existingTag.name !== tag.name);
        } else {
            newTags = [...value, tag];
        }
    
        onChange(newTags);
        setInputValue("");
    };
    
    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setFocused(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    

    return (
        <div ref={wrapperRef} className={`${wrapperClass} flex max-w-[100%] w-full flex-col gap-1`}>
            {label && (
                <label htmlFor={id} className={`text-[13px] text-[#303030] font-500 ${labelClass}`}>
                    {label}
                    {required ? <span className="text-red-800">*</span> : null}
                </label>
            )}

            <div
                className={`relative text-[13px] bg-gray-50 rounded-lg w-full text-[#303030] border py-1 px-2 outline-offset-2 focus-within:outline-2 focus-within:outline-blue-800 ${className}
                    ${error ? "border-red-800 bg-red-100" : "border-black bg-gray-50"}`}
            >
                {/* Render tags */}
                <div className="flex gap-2 flex-wrap mt-1">
                    {value.map((tag, index) => (
                        <span
                            key={index}
                            className="w-fit flex items-center gap-1 px-2 py-1 text-xs font-thin text-blue-950 bg-blue-100 hover:bg-blue-200 rounded"
                        >
                            {isColor && <span className="w-4 h-4 rounded-md" style={{ backgroundColor: isColor ? tag.value : undefined }}></span>}
                            <span>{tag.name}</span>
                            <button type="button" onClick={() => handleRemoveTag(index)}>
                                <i className="fa fa-close"></i>
                            </button>
                        </span>
                    ))}
                </div>

                {/* Input to enter tags */}
                {!disabled && (
                    <input
                        className="h-[35px] w-full focus:outline-none bg-transparent mt-1"
                        type={type}
                        id={id}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        onFocus={() => setFocused(true)}
                        placeholder="e.g. red:#f00"
                        required={required}
                        {...props}
                    />
                )}
            </div>

            {error && (
                <span className="text-red-800 text-[13px] font-500">
                    <i className="fa fa-exclamation-circle me-2"></i>
                    {Array.isArray(error) ? error[0] : error}
                </span>
            )}
            {isFocused && list?.length > 0 && (
                <div className={'flex flex-col items-center text-xs bg-gray-50 py-2 w-full px-4 shadow-lg rounded-lg border border-gray-200'}>
                    <div className="max-h-32 overflow-y-auto w-full">
                        {filteredList.map((field, index) => (
                            <div className={`text-xs leading-none w-full px-4 py-2 cursor-pointer hover:bg-gray-200 text-[#303030] rounded-md flex items-center gap-2`}
                                key={index} onClick={() => handleListClick(field)}>
                                <Checkbox checked={value.some(existingTag => existingTag.name === field.name)} onChange={() => handleListClick(field)} />
                                {isColor && <span className="w-5 h-5 rounded-md" style={{ backgroundColor: isColor ? field.value : undefined }}></span>}
                                <span>{field.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TagsInput;
