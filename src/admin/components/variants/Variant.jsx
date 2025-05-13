"use client";
import React, { useEffect } from "react";
import Input from "../Input";
import Button from "../Button";
import TagsInput from "../TagsInput";

const Variant = ({ variant = {}, index = 0, validate = false, onDelete = () => {}, onDone = () => {}, onChange = () => {}, meta_field = {} }) => {
    console.log(meta_field.value);
    useEffect(() => {
        if (!variant.name && meta_field?.name) {
            onChange('name', meta_field.name);
        }
    }, [meta_field?.name]);
    return (
        <>
            {variant.isActive ? (
                <div className="cursor-pointer px-4 py-4 hover:bg-gray-100 rounded-t-md border-b border-gray-300 flex flex-col gap-3">
                    <Input
                        label="Option name"
                        id={`option-${index}`}
                        placeholder="Size"
                        error={validate && !variant.name && "Option name is required"}
                        value={variant.name || meta_field.name || ''}
                        onChange={(e) => onChange('name', e.target.value)}
                    />
                    <TagsInput
                        label="Tags"
                        id={`tags-${index}`}
                        placeholder="Notebook, Ultrabook"
                        error={validate && (!variant.values || variant.values.length === 0) && "Tags are required"}
                        value={variant.values}
                        onChange={(e) => onChange('values', e)}
                        list={meta_field.value || []} isColor={meta_field.name === 'Color'}
                    />
                    

                    <div className="flex justify-between items-center gap-2">
                        <Button variant="danger" className="hover:opacity-90" onClick={() => onDelete(index)}>Delete</Button>
                        <Button className="hover:opacity-90" onClick={() => onDone(index)}>Done</Button>
                    </div>
                </div>
            ) : (
                <div
                    className="cursor-pointer px-4 py-4 hover:bg-gray-100 rounded-t-md border-b border-gray-300"
                    onClick={() => onDone(index)}
                >
                    <label className="text-sm font-semibold">{variant.name || "Untitled Option"}</label>
                    <div className="flex gap-2 mt-2">
                        {variant.values.map((val, i) => (
                            <span key={i} className="bg-blue-100 text-blue-950 text-xs font-thin p-1.5 rounded flex items-center gap-2">
                                {meta_field.name === 'Color' && <div className="w-4 h-4 rounded-md" style={{ backgroundColor: val.value }} />}
                                <span className="">{val.name}</span>
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};


export default Variant;
