import React, { useEffect, useState, useRef } from "react";
import Modal from "./Modal";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import Checkbox from "./Checkbox";

const SearchableModal = ({
  type = "product",
  show = false,
  onHide = () => {},
  items = [],
  options = [],
  value = [],
  onChange = () => {},
  search = "",
  onSearch = () => {},
}) => {
  const [selectedProducts, setSelectedProducts] = useState(value || []);
  const [productFilter, setProductFilter] = useState(items || []);
  const [sortOption, setSortOption] = useState("manual");

  useEffect(() => {
    setSelectedProducts(value);
  }, [value]);

  useEffect(() => {
    if (!items) return;
    let filtered = [...items];
    if (search) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    switch (sortOption) {
      case "asc-title":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "desc-title":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "high-price":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "low-price":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "new":
        filtered.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        break;
      case "old":
        filtered.sort(
          (a, b) => new Date(a.created_at) - new Date(b.created_at)
        );
        break;
    }
    setProductFilter(filtered);
  }, [search, sortOption, items]);

  const isInventorySelected = (productId, inventoryId) => {
    const product = selectedProducts.find((p) => p.id === productId);
    return !!product?.inventories?.includes(inventoryId);
  };

  const isProductChecked = (product) => {
    const selected = selectedProducts.find((p) => p.id === product.id);
    return selected?.inventories?.length === product.inventories.length;
  };

  const isProductIndeterminate = (product) => {
    const selected = selectedProducts.find((p) => p.id === product.id);
    if (!selected) return false;
    const count = selected.inventories.length;
    return count > 0 && count < product.inventories.length;
  };

  const toggleProduct = (product) => {
    const selected = selectedProducts.find((p) => p.id === product.id);
    const allInventoryIds = product.inventories.map((i) => i.id);

    if (selected) {
      // Always deselect on click
      setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
    } else {
      // Select all inventories
      setSelectedProducts([
        ...selectedProducts,
        { id: product.id, inventories: allInventoryIds },
      ]);
    }
  };

  const toggleInventory = (productId, inventoryId) => {
    const updated = [...selectedProducts];
    const index = updated.findIndex((p) => p.id === productId);

    if (index > -1) {
      const set = new Set(updated[index].inventories);
      set.has(inventoryId) ? set.delete(inventoryId) : set.add(inventoryId);
      const newInvs = Array.from(set);
      if (newInvs.length === 0) {
        updated.splice(index, 1); // remove if none selected
      } else {
        updated[index].inventories = newInvs;
      }
      setSelectedProducts(updated);
    } else {
      setSelectedProducts([
        ...updated,
        { id: productId, inventories: [inventoryId] },
      ]);
    }
  };

  const isSubmitDisabled =
    type === "product-inventories"
      ? selectedProducts.length === 0 ||
        selectedProducts.every((p) => p.inventories.length === 0)
      : selectedProducts.length === 0;
  console.log(selectedProducts, "selectedProductsselectedProducts");

  return (
    <Modal show={show} onHide={onHide} title="Add products">
      <div className="p-4 md:p-5 space-y-4 w-full">
        <div className="product-search w-full">
          <div className="flex gap-3 w-full">
            <Input
              prefix={"fa fa-search"}
              placeholder="Search products"
              wrapperClass={"!max-w-2/3"}
              value={search}
              onChange={(e) => onSearch(e.target.value)}
            />
            <Select
              wrapperClass={"!max-w-1/3"}
              options={options}
              onChange={(value) => setSortOption(value)}
            />
          </div>
        </div>
      </div>
      <div className="flex min-h-100 border-t border-gray-300 rounded-y justify-start gap-2">
        <div className="w-full">
          {productFilter.map((product) => (
            <React.Fragment key={product.id}>
              <Checkbox
                id={`product-${product.id}`}
                labelClass={"flex items-center gap-3 w-full"}
                wrapperClass="hover:bg-gray-100 border-b border-gray-300 py-2 px-4"
                checked={isProductChecked(product)}
                indeterminate={isProductIndeterminate(product)}
                onChange={() => toggleProduct(product)}
                label={
                  <>
                    <div className="image">
                      <img
                        src={product.media[0]?.full_path}
                        alt={product.media[0]?.alt}
                        className="w-10 h-10 object-contain rounded-lg border border-gray-300 bg-gray-100"
                      />
                    </div>
                    <div className="product-name max-w-[280px]">
                      <h5 className="text-[12px] text-[#303030]">
                        {product.name}
                      </h5>
                    </div>
                  </>
                }
              />
              {type === "product-inventories" &&
                product.inventories?.map((inventory) => (
                  <Checkbox
                    key={`${product.id}-${inventory.id}`}
                    id={`inventory-${inventory.id}`}
                    labelClass={"flex items-center gap-3 w-full"}
                    wrapperClass="hover:bg-gray-100 border-b border-gray-300 py-2 px-4 ml-6"
                    checked={isInventorySelected(product.id, inventory.id)}
                    onChange={() => toggleInventory(product.id, inventory.id)}
                    label={
                      <div className="product-name max-w-[280px]">
                        <h5 className="text-[12px] text-[#303030]">
                          {inventory.variants
                            ?.map((variant) => variant.name)
                            .join(" / ")}
                        </h5>
                      </div>
                    }
                  />
                ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="flex items-center p-4 md:p-5 border-t border-gray-300 rounded-y justify-end gap-2">
        <Button
          onClick={onHide}
          variant="light"
          className="!bg-white !text-gray-700 border border-gray-300 hover:!bg-gray-100 !shadow-lg hover:text-[#303030]"
        >
          Cancel
        </Button>
        <Button
          disabled={isSubmitDisabled}
          className={`${
            isSubmitDisabled ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={() => {
            onChange(selectedProducts);
            onHide();
          }}
        >
          Done
        </Button>
      </div>
    </Modal>
  );
};

export default SearchableModal;
