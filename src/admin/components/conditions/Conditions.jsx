import Select from "@/admin/components/Select";
import Input from "@/admin/components/Input";
import Button from "@/admin/components/Button";
import React, { useState, useEffect } from "react";

const Conditions = ({ value = [], onChange = conditions => {}, columns = [] }) => {
    const [conditions, setConditions] = useState(() => {
        return value.length > 0
            ? value
            : [{
                column: columns?.[0]?.id || "",
                condition: columns?.[0]?.conditions?.[0]?.id || "",
                value: ""
            }];
    });

    const columnsOptions = columns?.map((column) => ({
        label: column.name,
        value: column.id
    }));

    useEffect(() => {
        onChange(conditions);
    }, [conditions]);

    const updateCondition = (index, updatedItem) => {
        setConditions((prev) => {
            const updated = [...prev];
            updated[index] = { ...updated[index], ...updatedItem };
            return updated;
        });
    };
    console.log('conditions', conditions);
    return (
        <div className="flex flex-col justify-center items-start gap-3 pt-3">
            {conditions.map((condition, i) => {
                const selectedColumn = columns.find(col => col.id === Number(condition.column));
                const columnConditionsOptions = selectedColumn?.conditions?.map(cond => ({
                    label: cond.name,
                    value: cond.id
                })) || [];

                return <div
                    className="flex justify-start items-center gap-3 w-full"
                    key={i}
                >
                    <Select
                        options={columnsOptions}
                        wrapperClass={"w-full"}
                        value={condition.column}
                        onChange={(newColumnId) => {
                            const newColumn = columns.find(col => col.id === Number(newColumnId));
                            const firstConditionId = newColumn?.conditions?.[0]?.id || "";

                            updateCondition(i, {
                                column: Number(newColumnId),
                                condition: Number(firstConditionId),
                                value: "",
                            });
                        }}
                    />

                    <Select
                        options={columnConditionsOptions}
                        wrapperClass={"w-full"}
                        value={condition.condition}
                        onChange={(newConditionId) => {
                            updateCondition(i, {
                                condition: Number(newConditionId),
                                value: "",
                            });
                        }}
                    />
                    <Input
                        wrapperClass={"w-full"}
                        value={condition.value || ""}
                        onChange={(e) =>
                            updateCondition(i, { value: e.target.value })
                        }
                    />
                    {conditions.length > 1 && <Button
                            variant="white"
                            className="w-fit !text-sm !text-gray-600 border border-gray-300 hover:!bg-gray-50 shadow-md"
                            onClick={() =>
                                setConditions(conditions.filter((_, index) => index !== i))
                            }
                        >
                            <i className="fa fa-trash"></i>
                        </Button>}
                </div>;
            })}

            <Button
                variant="white"
                className="w-fit !text-xs !text-gray-600 border border-gray-300 hover:!bg-gray-50 shadow-md"
                onClick={() => {
                    const firstColumn = columns?.[0];
                    const firstCondition = firstColumn?.conditions?.[0];
                    setConditions([
                        ...conditions,
                        {
                            column: firstColumn?.id || "",
                            condition: firstCondition?.id || "",
                            value: "",
                        },
                    ]);
                }}
            >
                <i className="fa fa-plus mr-2"></i> Add another condition
            </Button>
        </div>
    );
};

export default Conditions;
