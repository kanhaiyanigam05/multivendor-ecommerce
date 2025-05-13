"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Variant from "./Variant";
import Button from "../Button";
import VariantList from "./VariantList";
import Select from "../Select";
import Dropdown from "../Dropdown";

const VariantSection = ({
  variants: combinations,
  setVariants: setCombinations,
  meta_fields, loading = false,
}) => {
  
  // useState
  const [validate, setValidate] = useState([]);
  const [activeVariant, setActiveVariant] = useState(null);
  const [openRows, setOpenRows] = useState({});
  const [variants, setVariants] = useState([]);
  const hasInitialized = useRef(false);


  // useEffect to generate variants based on combinations
  useEffect(() => {
    if (!hasInitialized.current && combinations?.length > 0) {
      const newVariants = generateVariantsFromCombinations(combinations);
      setVariants(newVariants);
      
      if (newVariants.length > 0) {
        setActiveVariant(newVariants[0]);
      }
  
      hasInitialized.current = true; // prevent reruns
    }
  }, [combinations]);
  

  // Function to generate variants from combinations
  const generateVariantsFromCombinations = (combinations) => {
    if (!combinations || combinations.length === 0) return [];
  
    const variantMap = new Map();
  
    combinations.forEach((combination) => {
      combination?.variants.forEach((variant) => {
        const key = variant.type;
        const existing = variantMap.get(key);
  
        const valueToAdd = { name: variant.name, value: variant.value };
  
        if (existing) {
          // Avoid duplicate values
          const valueExists = existing.values.some(
            (v) => v.name === valueToAdd.name && v.value === valueToAdd.value
          );
  
          if (!valueExists) {
            existing.values.push(valueToAdd);
          }
        } else {
          // Create new variant group
          variantMap.set(key, {
            name: key,
            values: [valueToAdd],
            isActive: true,
            meta_field: meta_fields.find((field) => field.name === key) || {},
          });
        }
      });
    });
  
    return Array.from(variantMap.values());
  };
  

  // Function to generate combinations based on variants
  // const generateCombinations = (variants) => {
  //   if (!variants || variants.length === 0) return [];

  //   let result = variants[0].values.map((val) => [
  //     { ...val, type: variants[0].name },
  //   ]);

  //   // Generate all combinations of variants
  //   for (let i = 1; i < variants.length; i++) {
  //     const current = variants[i];
  //     const currentValues = current.values.map((val) => ({
  //       ...val,
  //       type: current.name,
  //     }));
  //     result = result.flatMap((r) => currentValues.map((cv) => [...r, cv]));
  //   }

  //   // Format the combinations to include necessary details
  //   const formatted = result.map((variantCombo) => ({
  //     price: "", // Placeholder
  //     qty: "", // Placeholder
  //     id: generateId(),
  //     variants: variantCombo,
  //   }));

  //   return formatted;
  // };
  const generateCombinations = (variants, existingCombinations = []) => {
    if (!variants || variants.length === 0) return [];
  
    let result = variants[0].values.map((val) => [
      { ...val, type: variants[0].name },
    ]);
  
    for (let i = 1; i < variants.length; i++) {
      const current = variants[i];
      const currentValues = current.values.map((val) => ({
        ...val,
        type: current.name,
      }));
      result = result.flatMap((r) => currentValues.map((cv) => [...r, cv]));
    }
  
    const formatted = result.map((variantCombo) => {
      // Check if this combination already exists in existingCombinations
      const existing = existingCombinations.find((combo) =>
        areVariantCombosEqual(combo.variants, variantCombo)
      );
  
      if (existing) {
        return { ...existing }; // Preserve price, qty, and ID
      }
  
      // New combination
      return {
        price: "",
        qty: "",
        id: generateId(),
        variants: variantCombo,
      };
    });
  
    return formatted;
  };
  const areVariantCombosEqual = (a, b) => {
    if (a.length !== b.length) return false;
  
    const sortByTypeAndName = (arr) =>
      [...arr].sort((v1, v2) => {
        const t1 = v1.type + v1.name;
        const t2 = v2.type + v2.name;
        return t1.localeCompare(t2);
      });
  
    const sortedA = sortByTypeAndName(a);
    const sortedB = sortByTypeAndName(b);
  
    return sortedA.every((v, i) =>
      v.name === sortedB[i].name &&
      v.value === sortedB[i].value &&
      v.type === sortedB[i].type
    );
  };
  

  // Generate a unique ID
  const generateId = () =>
    `id-${Date.now()}-${Math.floor(Math.random() * 1_000_000)}`;

  // Handle adding a new variant
  const handleAddVariant = (meta_field = {}) => {
    const newVariant = { name: "", values: [], isActive: true, meta_field };
    const newVariants = [...variants, newVariant];
    setVariants(newVariants);

    // Only set active variant if this is the first one
    if (variants.length === 0) {
      setActiveVariant(newVariant);
    }

    // Generate and update combinations after adding a new variant
    const newCombinations = generateCombinations(newVariants, combinations);
    setCombinations(newCombinations);
  };

  // Handle deleting a variant
  const handleDeleteVariant = (index) => {
    const updatedVariants = [...variants];
    updatedVariants.splice(index, 1);
    setVariants(updatedVariants);

    // Generate and update combinations after deleting a variant
    const newCombinations = generateCombinations(updatedVariants, combinations);
    setCombinations(newCombinations);
  };

  // Handle activating/deactivating a variant
  const handleIsActive = (index) => {
    const updatedVariants = [...variants];
    updatedVariants[index].isActive = !updatedVariants[index].isActive;
    setVariants(updatedVariants);
  };

  // Handle variant input changes
  const handleVariantChange = (index, field, value) => {
    const updatedVariants = [...variants];
    updatedVariants[index][field] = value;

    setVariants(updatedVariants);

    // Reset validation for this index if input becomes valid
    const updatedValidation = [...validate];
    const currentVariant = updatedVariants[index];
    const nameValid = currentVariant.name.trim() !== "";
    const valuesValid = currentVariant.values.length > 0;

    if (nameValid && valuesValid) {
      updatedValidation[index] = false;
      setValidate(updatedValidation);
    }
  };

  useEffect(() => {
    const validVariants = variants.filter(
      (v) => v.name?.trim() && v.values?.length > 0
    );

    const combos = generateCombinations(validVariants, combinations);
    setCombinations(combos);
  }, [variants]);

  // Group combinations by active variant type
  const groupedCombinations = useMemo(() => {
    if (!activeVariant?.name) return [];

    const grouped = {};

    (Array.isArray(combinations) ? combinations : []).forEach((combination) => {
      const variant = combination?.variants.find(
        (v) => v.type === activeVariant.name
      );
      if (!variant) return;

      const key = variant.name;

      if (!grouped[key]) {
        grouped[key] = {
          ...combination,
          name: key,
          type: activeVariant.name,
          variants: [],
        };
      }

      const childVariants = combination?.variants.filter(
        (v) => v.type !== activeVariant.name
      );

      grouped[key].variants.push({
        ...combination,
        name: key,
        type: activeVariant.name,
        variants: childVariants,
      });
    });

    Object.keys(grouped).forEach((key) => {
      const allEmpty = grouped[key].variants.every(
        (v) => !v.variants || v.variants.length === 0
      );
      if (allEmpty) {
        grouped[key].variants = [];
      }
    });

    return Object.values(grouped);
  }, [combinations, activeVariant]);

  const options = variants.map((item) => ({
    label: item.name,
    value: item.name,
  }));

  const toggleRow = (rowKey) => {
    setOpenRows((prev) => ({
      ...prev,
      [rowKey]: !prev[rowKey],
    }));
  };

  const handleCombinationChange = (id, field, value) => {
    const updatedCombinations = combinations.map((combo) =>
      combo.id === id ? { ...combo, [field]: value } : combo
    );
  
    // This updates both combinations and data.variants via prop.
    setCombinations(updatedCombinations);
  };
  
  

  return (
    <div className="bg-[#fff] px-4 py-4 border border-[#3030302d] rounded-lg mb-5 w-[100%] flex flex-col gap-3">
      {/* Variants Header */}
      <h3 className="text-[13px] text-[#303030] font-500 font-[600]">
        Variants
      </h3>

      <div className="relative">
        {/* Variants List */}
        {variants?.length > 0 && (
          <div className="border border-gray-300 rounded-lg">
            {variants.map((variant, index) => (
              <Variant
                key={index}
                variant={variant}
                index={index}
                validate={validate[index] || false}
                meta_field={
                  meta_fields.find(
                    (field) => field.name === variant.meta_field?.name
                  ) || {}
                }
                onChange={(field, value) =>
                  handleVariantChange(index, field, value)
                }
                onDelete={handleDeleteVariant}
                onDone={handleIsActive}
              />
            ))}
          </div>
        )}

        {/* Add Another Option */}
        {variants.length < 3 && (
          <div className="relative">
            {meta_fields.filter(
              (field) =>
                !variants.some((variant) => variant.name === field.name)
            )?.length > 0 ? (
              <Dropdown
                btnClass="flex justify-start rounded-lg gap-2 border border-gray-300 text-xs font-semibold !text-gray-700 py-2 px-4 w-full hover:bg-gray-100"
                btnText={
                  <>
                    <span className="text-xl leading-none fa fa-plus-circle"></span>
                    Add another option like size or color
                  </>
                }
                itemsWrapperClass="flex flex-col items-center text-xs bg-gray-50 px-2 max-w-80 w-full shadow-lg rounded-lg border border-gray-200 z-50"
              >
                <div className="relative w-full">
                  <div className="max-h-32 overflow-y-auto w-full">
                    {meta_fields
                      .filter(
                        (field) =>
                          !variants.some(
                            (variant) => variant.name === field.name
                          )
                      )
                      .map((field, index) => (
                        <p
                          className="text-xs font-semibold leading-none w-full px-4 py-2 cursor-pointer hover:bg-gray-200 text-[#303030] rounded-md"
                          key={index}
                          onClick={() => handleAddVariant(field)}
                        >
                          {field.name}
                        </p>
                      ))}
                  </div>
                  <Button
                    variant="transparent"
                    className={
                      "rounded-t-none rounded-lg flex justify-start gap-2 text-sm !text-gray-700 py-2 px-4 w-full hover:bg-gray-100 relative left-0 right-0"
                    }
                    onClick={handleAddVariant}
                  >
                    <span className="text-xl leading-none fa fa-plus-circle"></span>
                    Create custom option
                  </Button>
                </div>
              </Dropdown>
            ) : (
              <Button
                className="flex justify-start gap-2 border border-gray-300 text-sm !text-gray-700 py-2 px-4 w-full hover:bg-gray-100"
                variant="transparent"
                onClick={handleAddVariant}
              >
                <span className="text-xl leading-none fa fa-plus-circle"></span>
                Add another option like size or color
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Group by Dropdown */}
      {variants.length > 1 && (
        <Select
          id="group-by"
          label={"Group by"}
          wrapperClass="!flex-row items-center gap-2 text-sm"
          className="min-w-20 !w-auto border rounded-md px-2 py-1 text-sm"
          options={options}
          value={activeVariant.name}
          onChange={(e) => {
            setActiveVariant(variants.find((item) => item.name === e));
            setOpenRows({});
          }}
        />
      )}

      {/* Variant List */}
      {variants && variants.length > 0 && (
        <VariantList
          activeVariant={activeVariant}
          openRows={openRows}
          toggleRow={toggleRow}
          combinations={groupedCombinations}
          onChange={handleCombinationChange}
        />
      )}
    </div>
  );
};

export default VariantSection;
