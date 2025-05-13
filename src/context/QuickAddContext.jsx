"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useWishlist } from "./WishlistContext";
import { useCompare } from "./CompareContext";
import { ShopingCart, useCartModal } from "./CartModalContext";

const QuickAddContext = createContext();

export const QuickAddProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const [active, setActive] = useState({
    color: data?.colors?.length > 0 ? data.colors[0].name : null,
    size: data?.sizes?.length > 0 ? data.sizes[0].name : null,
  });

  return (
    <QuickAddContext.Provider
      value={{ isOpen, setOpen, data, setData, active, setActive }}
    >
      {children}
    </QuickAddContext.Provider>
  );
};

export const useQuickAdd = () => {
  const context = useContext(QuickAddContext);
  if (!context) {
    throw new Error("useQuickAdd must be used within a QuickAddProvider");
  }
  return context;
};

export const QuickAdd = ({ ...props }) => {
  const [quantity, setQuantity] = useState(1);
  const {
    isOpen: isOpenQuickAdd,
    setOpen: setOpenQuickAdd,
    data: dataQuickAdd,
    setData: setDataQuickAdd,
    active: activeQuickAdd,
    setActive: setActiveQuickAdd,
  } = useQuickAdd();
  const { isOpen: isOpenWishlist, setOpen: setOpenWishlist } = useWishlist();
  const { isOpen: isOpenCompare, setOpen: setOpenCompare } = useCompare();
  const {
    isOpen: isOpenCart,
    setOpen: setOpenCart,
    data: dataCart,
    setData: setDataCart,
    handleAddCartItem,
  } = useCartModal();
  useEffect(() => {
    setActiveQuickAdd({
      color:
        dataQuickAdd.colors?.length > 0 ? dataQuickAdd.colors[0]?.name : null,
      size:
        dataQuickAdd?.sizes?.length > 0 ? dataQuickAdd?.sizes[0]?.code : null,
    });
  }, []);

  const handleCartAdd = () => {
    handleAddCartItem({
      product: dataQuickAdd,
      quantity: quantity,
      subtotal: (
        (dataQuickAdd.discounted_price
          ? dataQuickAdd.discounted_price
          : dataQuickAdd.price) * quantity
      ).toFixed(2),
    });
    setOpenCart(true);
    setOpenQuickAdd(false);
  };
  const handleBuyNow = () => {
    // Add product to cart and redirect to cart page
    setOpenQuickAdd(false);
  };
  const incQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decQuantity = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity);
  };
  return (
    isOpenQuickAdd &&
    dataQuickAdd && (
      <>
        {/* <!-- quickAdd --> */}
        <Modal
          show={isOpenQuickAdd}
          centered
          onHide={() => setOpenQuickAdd(false)}
          className="modal-quick-add"
        >
          <div className="header">
            <span
              onClick={() => setOpenQuickAdd(false)}
              className="icon-close icon-close-popup"
              data-bs-dismiss="modal"
            ></span>
          </div>
          <div>
            <div className="tf-product-info-list">
              <div className="tf-product-info-item">
                <div className="image">
                  <img
                    src={dataQuickAdd.first_image}
                    alt={dataQuickAdd.title}
                  />
                </div>
                <div className="content">
                  <a href="product-inner.php">{dataQuickAdd.title}</a>
                  <div className="tf-product-info-price">
                    {dataQuickAdd.discount ? (
                      <>
                        <h5 className="price-on-sale font-2">{`$${dataQuickAdd.discounted_price}`}</h5>
                        <div className="compare-at-price font-2">{`$${dataQuickAdd.price}`}</div>
                        <div className="badges-on-sale text-btn-uppercase">
                          -25%
                        </div>
                      </>
                    ) : (
                      <h5 className="price-on-sale font-2">{`$${dataQuickAdd.price}`}</h5>
                    )}
                  </div>
                </div>
              </div>

              <div className="tf-product-info-choose-option">
                {activeQuickAdd?.color && (
                  <div className="variant-picker-item">
                    <div className="variant-picker-label mb_12">
                      Colors:
                      <span className="text-title variant-picker-label-value">
                        {activeQuickAdd.color && activeQuickAdd.color}
                      </span>
                    </div>
                    <div className="variant-picker-values type-click">
                      {dataQuickAdd.colors?.map((color, index) => {
                        return (
                          <div key={index}>
                            <input
                              id={`color-${color.name}`}
                              type="radio"
                              name="color"
                              value={color.code}
                              checked={activeQuickAdd.color === color.name}
                              onChange={() =>
                                setActiveQuickAdd({
                                  ...activeQuickAdd,
                                  color: color.name,
                                })
                              }
                            />
                            <label
                              className="hover-tooltip tooltip-bot radius-60"
                              htmlFor={`color-${color.name}`}
                              data-value={color.name}
                            >
                              <span
                                className="btn-checkbox"
                                style={{ backgroundColor: color.code }}
                              ></span>
                              <span className="tooltip">{color.name}</span>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                {activeQuickAdd?.size && (
                  <div className="variant-picker-item">
                    <div className="variant-picker-label">
                      Size:
                      <span className="text-title variant-picker-label-value">
                        {activeQuickAdd?.size}
                      </span>
                    </div>
                    <div className="variant-picker-values gap12">
                      {dataQuickAdd.sizes.map((size, i) => {
                        return (
                          <div key={i}>
                            <input
                              type="radio"
                              name="size"
                              id={`size-${i}`}
                              value={activeQuickAdd?.size}
                              checked={activeQuickAdd?.size === size.code}
                              onChange={() =>
                                setActiveQuickAdd({
                                  ...activeQuickAdd,
                                  size: size.code,
                                })
                              }
                            />
                            <label
                              className="style-text size-btn"
                              htmlFor={`size-${i}`}
                              data-value={size.code}
                            >
                              <span className="text-title">{size.code}</span>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                <div className="tf-product-info-quantity">
                  <div className="title mb_12">Quantity:</div>
                  <div className="wg-quantity">
                    <span
                      className="btn-quantity btn-decrease"
                      onClick={decQuantity}
                    >
                      -
                    </span>
                    <input
                      className="quantity-product"
                      type="text"
                      name="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <span
                      className="btn-quantity btn-increase"
                      onClick={incQuantity}
                    >
                      +
                    </span>
                  </div>
                </div>
                <div>
                  <div className="tf-product-info-by-btn mb_10">
                    <a
                      className="btn-style-2 flex-grow-1 text-btn-uppercase fw-6 show-shopping-cart"
                      onClick={handleCartAdd}
                    >
                      <span>Add to cart -&nbsp;</span>
                      <span className="tf-qty-price total-price">{`$${
                        quantity *
                        (dataQuickAdd.discounted_price
                          ? dataQuickAdd.discounted_price
                          : dataQuickAdd.price)
                      }`}</span>
                    </a>
                    <a
                      href="#compare"
                      data-bs-toggle="offcanvas"
                      aria-controls="compare"
                      className="box-icon hover-tooltip compare btn-icon-action show-compare"
                      onClick={() => {
                        setOpenCompare(true);
                        setOpenQuickAdd(false);
                      }}
                    >
                      <span className="icon icon-gitDiff"></span>
                      <span className="tooltip text-caption-2">Compare</span>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="box-icon hover-tooltip text-caption-2 wishlist btn-icon-action"
                      onClick={() => {
                        setOpenWishlist(true);
                        setOpenQuickAdd(false);
                      }}
                    >
                      <span className="icon icon-heart"></span>
                      <span className="tooltip text-caption-2">Wishlist</span>
                    </a>
                  </div>
                  <a
                    href="#buynow"
                    className="btn-style-3 text-btn-uppercase"
                    onClick={handleBuyNow}
                  >
                    Buy it now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Modal>
        {/* <!-- /quickAdd --> */}
      </>
    )
  );
};
