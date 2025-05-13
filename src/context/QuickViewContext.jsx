"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useWishlist } from "./WishlistContext";
import { useCompare } from "./CompareContext";
import { useCartModal } from "./CartModalContext";

const QuickViewContext = createContext();

export const QuickViewProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [active, setActive] = useState({
    color: data?.colors?.length > 0 ? data.colors[0].name : null,
    size: data?.sizes?.length > 0 ? data.sizes[0].name : null,
  });
  return (
    <QuickViewContext.Provider
      value={{ isOpen, setOpen, data, setData, active, setActive }}
    >
      {children}
    </QuickViewContext.Provider>
  );
};

export const useQuickView = () => {
  const context = useContext(QuickViewContext);
  if (!context) {
    throw new Error("useQuickView must be used within a QuickViewProvider");
  }
  return context;
};

export const QuickView = ({ ...props }) => {
  const [quantity, setQuantity] = useState(1);
  const {
    isOpen: isOpenQuickView,
    setOpen: setOpenQuickView,
    data: dataQuickView,
    setData: setDataQuickView,
    active: activeQuickView,
    setActive: setActiveQuickView,
  } = useQuickView();
  const { isOpen: isOpenWishlist, setOpen: setOpenWishlist } = useWishlist();
  const { isOpen: isOpenCompare, setOpen: setOpenCompare } = useCompare();
  const {
    isOpen: isOpenCart,
    setOpen: setOpenCart,
    handleAddCartItem,
  } = useCartModal();
  useEffect(() => {
    setActiveQuickView({
      color:
        dataQuickView.colors?.length > 0 ? dataQuickView.colors[0]?.name : null,
      size:
        dataQuickView?.sizes?.length > 0 ? dataQuickView?.sizes[0]?.code : null,
    });
  }, []);
  const incQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decQuantity = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity);
  };
  const handleCartAdd = () => {
    handleAddCartItem({
      product: dataQuickView,
      quantity: quantity,
      subtotal: (
        (dataQuickView.discounted_price
          ? dataQuickView.discounted_price
          : dataQuickView.price) * quantity
      ).toFixed(2),
    });
    setOpenCart(true);
    setOpenQuickView(false);
  };
  const handleBuyNow = () => {
    // Add product to cart and redirect to cart page
    setOpenQuickAdd(false);
  };
  return (
    isOpenQuickView &&
    dataQuickView && (
      <Modal
        className="modal-quick-view fullRight"
        show={isOpenQuickView}
        onHide={() => {
          setOpenQuickView(false);
        }}
      >
        {dataQuickView.images && (
          <div className="tf-quick-view-image">
            <div className="wrap-quick-view wrapper-scroll-quickview">
              {dataQuickView.images?.length > 0 &&
                dataQuickView.images.map((image, i) => {
                  return (
                    <div
                      key={i}
                      className="quickView-item item-scroll-quickview"
                      data-scroll-quickview="beige"
                    >
                      <img
                        className="lazyload"
                        data-src={image}
                        src={image}
                        alt={`image-${i}`}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        )}
        <div className="wrap">
          <div className="header">
            <h5 className="title">Quick View</h5>
            <span
              onClick={() => {
                setOpenQuickView(false);
              }}
              className="icon-close icon-close-popup"
            ></span>
          </div>
          <div className="tf-product-info-list">
            <div className="tf-product-info-heading">
              <div className="tf-product-info-name">
                {dataQuickView.category && (
                  <div className="text text-btn-uppercase">
                    {dataQuickView.category}
                  </div>
                )}
                <h3 className="name">{dataQuickView.title}</h3>
                {dataQuickView.rating && (
                  <div className="sub">
                    <div className="tf-product-info-rate">
                      <div className="list-star">
                        {[1, 2, 3, 4, 5].map((i) =>
                          i <= dataQuickView.rating.avg ? (
                            <i className="icon icon-star" key={i}></i>
                          ) : (
                            <i className="text-gray icon icon-star" key={i}></i>
                          )
                        )}
                        {dataQuickView.rating.avg}
                      </div>
                      <div className="text text-caption-1">
                        (
                        {`${dataQuickView.rating.count} review${
                          dataQuickView.rating.count > 1 ? "s" : ""
                        }`}
                        )
                      </div>
                    </div>
                    <div className="tf-product-info-sold">
                      <i className="icon icon-lightning"></i>
                      <div className="text text-caption-1">
                        18 sold in last 32 hours
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="tf-product-info-desc">
                <div className="tf-product-info-price">
                  {dataQuickView.discount ? (
                    <>
                      <h5 className="price-on-sale font-2">{`$${dataQuickView.discounted_price}`}</h5>
                      <div className="compare-at-price font-2">{`$${dataQuickView.price}`}</div>
                      <div className="badges-on-sale text-btn-uppercase">
                        {dataQuickView.discount.type === "percent"
                          ? `-${dataQuickView.discount.amount}%`
                          : `-$${dataQuickView.discount.amount}`}
                      </div>
                    </>
                  ) : (
                    <h5 className="price-on-sale font-2">{`$${dataQuickView.price}`}</h5>
                  )}
                </div>
                <p>{dataQuickView.short_description}</p>
                {/* <div className="tf-product-info-liveview">
                  <i className="icon icon-eye"></i>
                  <p className="text-caption-1">
                    <span className="liveview-count">28</span>
                    people are viewing this right now
                  </p>
                </div> */}
              </div>
            </div>
            <div className="tf-product-info-choose-option">
              {activeQuickView.color && (
                <div className="variant-picker-item">
                  <div className="variant-picker-label mb_12">
                    Colors:
                    <span className="text-title variant-picker-label-value">
                      {activeQuickView.color}
                    </span>
                  </div>
                  <div className="variant-picker-values type-click">
                    {dataQuickView.colors?.map((color, index) => {
                      return (
                        <div key={index}>
                          <input
                            id={`view-color-${color.name}`}
                            type="radio"
                            name="color1"
                            checked={activeQuickView.color === color.name}
                            onChange={() => {
                              setActiveQuickView({
                                ...activeQuickView,
                                color: color.name,
                              });
                            }}
                          />
                          <label
                            className={`hover-tooltip tooltip-bot radius-60 color-btn btn-scroll-quickview ${
                              activeQuickView.color === color.name
                                ? "active"
                                : ""
                            }`}
                            htmlFor={`view-color-${color.name}`}
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
              {activeQuickView.size && (
                <div className="variant-picker-item">
                  <div className="d-flex justify-content-between mb_12">
                    <div className="variant-picker-label">
                      Size:
                      <span className="text-title variant-picker-label-value">
                        {activeQuickView.size}
                      </span>
                    </div>
                    <a className="size-guide text-title link show-size-guide">
                      Size Guide
                    </a>
                  </div>
                  <div className="variant-picker-values gap12">
                    {dataQuickView.sizes.map((size, index) => {
                      return (
                        <div key={index}>
                          <input
                            type="radio"
                            name="size"
                            id={`sizes-${index}`}
                            value={activeQuickView.size}
                            checked={activeQuickView.size === size.code}
                            onChange={() =>
                              setActiveQuickView({
                                ...activeQuickView,
                                size: size.code,
                              })
                            }
                          />
                          <label
                            className="style-text size-btn"
                            htmlFor={`sizes-${index}`}
                            data-value="S"
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
                      (dataQuickView.discounted_price
                        ? dataQuickView.discounted_price
                        : dataQuickView.price)
                    }`}</span>
                  </a>
                  <a
                    href="#compare"
                    data-bs-toggle="offcanvas"
                    aria-controls="compare"
                    className="box-icon hover-tooltip compare btn-icon-action show-compare"
                    onClick={() => {
                      setOpenCompare(true);
                      setOpenQuickView(false);
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
                      setOpenQuickView(false);
                    }}
                  >
                    <span className="icon icon-heart"></span>
                    <span className="tooltip text-caption-2">Wishlist</span>
                  </a>
                </div>
                <a
                  href="#"
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
    )
  );
};
