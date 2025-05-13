import React, { useEffect, useState } from "react";
import Checkbox from "../Checkbox";
import VariantListItem from "./VariantListItem";

const VariantList = ({ activeVariant = {}, openRows = {}, toggleRow = () => {}, combinations = [], onChange = () => {} }) => {
    
    let mainCombos = [];
    activeVariant?.values?.map((value) => {
        mainCombos = combinations.filter(
            combo => combo.type === activeVariant.name
        );   
    })
    
    const [count, setCount] = useState(0);
    // Optimized countQty function with termination conditions
    const countQty = (items) => {
        let totalQty = 0;

        items.forEach(item => {
        // Sum the qty from the current item (if exists)
        totalQty += parseInt(item.qty || 0, 10); // Ensure qty is treated as a number

        // If the item has variants, recursively count their qty (avoid infinite recursion)
        if (item.variants && Array.isArray(item.variants)) {
            totalQty += countQty(item.variants); // Recursively sum the variants' qtys
        }
        });

        return totalQty;
    };

    useEffect(() => {
        const totalQuantity = countQty(combinations);
        setCount(totalQuantity);
    }, [combinations]);  // Only rerun effect when `combinations` changes

    return (
      <>
        <div className="product_varient_table relative -left-4 right-0 w-[calc(100%+2rem)]">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 border-t border-b border-gray-300">
                <td className="product-varient_options flex justify-between items-center w-full px-4 py-2">
                  <div className="text-gray-700 text-[13px] font-[500]">
                    {/* <Checkbox
                      label={"Variants. Collapse All"}
                      id={"variants-collapse"}
                    /> */}
                  </div>
                </td>
                <td className="text-gray-700 text-[13px] font-[500] w-full">
                  Price
                </td>
                <td className="text-gray-700 text-[13px] font-[500] w-full">
                  Available
                </td>
              </tr>
            </thead>
            <tbody>
              {mainCombos?.map((combo, i) => {
                return (
                  <React.Fragment key={i}>
                    <VariantListItem
                      value={combo}
                      parent={false}
                      isOpen={!!openRows[i]}
                      toggle={() => toggleRow(i)}
                      childs={combo.variants}
                      onChange={onChange}
                    />

                    {combo.variants &&
                      combo.variants.length > 0 &&
                      openRows[i] &&
                      combo.variants.map((childCombo, comboIndex) => (
                        <VariantListItem
                          key={`${i}-child-${comboIndex}`}
                          value={childCombo}
                          parent={true}
                          isOpen={false}
                          toggle={() => {}}
                          onChange={onChange}
                        />
                      ))}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
          <div className="bg-gray-100 py-2 border-t border-gray-300 rounded-b-lg">
            <p className="text-[13px] text-center">
              Total inventory across all locations: {count} available
            </p>
          </div>
        </div>
      </>
    );
};

export default VariantList;
