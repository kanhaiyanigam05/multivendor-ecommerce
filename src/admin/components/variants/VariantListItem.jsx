import React from "react";
import Checkbox from "../Checkbox";
import Input from "../Input";

const VariantListItem = ({
    value = {},
    parent = false,
    isOpen = false,
    toggle = () => {},
    childs = [],
    onChange = () => {},
  }) => {
    
    return (
      <tr className="border-b border-gray-300 hover:bg-gray-100">
        <td className="w-full py-2 px-4 rounded-md">
          <div className={`flex items-center w-full gap-3 max-w-full ${parent && "pl-8"}`}>
            {/* <Checkbox id="link-checkbox-2" /> */}
            <button
                type="button"
                className="block max-w-[200px] cursor-pointer w-full"
                onMouseDown={(e) => e.preventDefault()} // prevent focus shift
                onClick={!parent ? toggle : undefined}
            >
              <div className="product_var_img flex gap-2 items-center">
                <div className={`${parent ? "w-10 h-10 text-lg" : "w-16 h-16 text-2xl"} rounded-lg bg-gray-50 border border-dashed border-gray-400 flex items-center justify-center`}>
                  <i className="fa fa-image text-blue-500"></i>
                </div>
                {/* <img
                  src="https://ikshitachoudhary.com/cdn/shop/files/5x970_b1aea86c-09fb-48a2-95ff-a8f926d75ce0.jpg?v=1726916822&width=1080"
                  alt="product"
                  className={`${parent ? "w-10 h-10" : "w-16 h-16"} rounded-lg`}
                /> */}
                <div className="flex flex-col gap-1 justify-center">
                    <p className="text-[12px] text-gray-600">
                        {!parent ? value.name : Array.isArray(value?.variants) ? value.variants.map(v => v.name).join(" / ") : ""}
                    </p>

                    {childs.length > 0 && !parent && (
                        <p className="text-[12px] text-gray-600">
                            {`${childs.length} variant${childs.length !== 1 ? "s" : ""}`}
                            <i className={`fa fa-angle-${isOpen ? "up" : "down"} pl-2`}></i>
                        </p>
                    )}
                </div>
              </div>
            </button>
          </div>
        </td>
        <td>
          <Input
            wrapperClass="!w-36 mr-3"
            prefix="fa fa-rupee"
            placeholder="0.00"
            {...(childs.length > 0 ? { disabled: true } : {onChange: (e) => onChange(value.id, 'price', e.target.value), value: value.price})}
          />
        </td>
        <td>
          <Input
            type="number"
            wrapperClass="!w-18 mr-3"
            placeholder="0"
            {...(childs.length > 0 ? { disabled: true } : {onChange: (e) => onChange(value.id, 'qty', e.target.value), value: value.qty})}
          />
        </td>
      </tr>
    );
  };
  


export default VariantListItem;
