"use client";
import Link from "next/link";
import { createContext, useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  const setWishlistData = (item) => {
    if (data.length > 0) {
      if (!data.some((wishlist) => wishlist.id === item.id)) {
        setData([...data, item]);
      }
    } else {
      setData([item]);
    }
  };
  const removeWishlistData = (itemId) => {
    const updatedData = data.filter((item) => item.id !== itemId);
    setData(updatedData);
    if (updatedData.length === 0) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(data));
  }, [data]);
  return (
    <WishlistContext.Provider
      value={{
        isOpen,
        setOpen,
        data,
        setData,
        setWishlistData,
        removeWishlistData,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};

export const Wishlist = ({ ...props }) => {
  const { isOpen, setOpen, data, setData, removeWishlistData } = useWishlist();
  console.log(data);

  return (
    <Modal
      className="fullRight fade modal-wishlist"
      show={isOpen}
      onHide={() => setOpen(false)}
    >
      <div className="header">
        <h5 className="title">Wish List</h5>
        <span
          className="icon-close icon-close-popup"
          data-bs-dismiss="modal"
          onClick={() => setOpen(false)}
        ></span>
      </div>
      <div className="wrap">
        <div className="tf-mini-cart-wrap">
          <div className="tf-mini-cart-main">
            <div className="tf-mini-cart-sroll">
              <div className="tf-mini-cart-items">
                {data.map((item, i) => {
                  return (
                    <div className="tf-mini-cart-item file-delete" key={i}>
                      <div className="tf-mini-cart-image">
                        <img
                          className="lazyload"
                          data-src={item.first_image}
                          src={item.first_image}
                          alt={item.title}
                        />
                      </div>
                      <div className="tf-mini-cart-info flex-grow-1">
                        <div className="mb_12 d-flex align-items-center justify-content-between flex-wrap gap-12">
                          <div className="text-title">
                            <Link
                              href={`/shop/${item.slug}`}
                              className="link text-line-clamp-1"
                            >
                              {item.title}
                            </Link>
                          </div>
                          <div
                            className="text-button tf-btn-remove remove"
                            onClick={() => removeWishlistData(item.id)}
                          >
                            Remove
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-12">
                          <div className="text-secondary-2">XL/Blue</div>
                          <div className="text-button">{`1 X $${
                            item.discounted_price
                              ? item.discounted_price
                              : item.price
                          }`}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="tf-mini-cart-bottom">
            <a
              href="wish-list.php"
              className="btn-style-2 w-100 radius-4 view-all-wishlist"
            >
              <span className="text-btn-uppercase">View All Wish List</span>
            </a>
            <a
              href="#continue"
              className="text-btn-uppercase"
              onClick={() => setOpen(false)}
            >
              Or continue shopping
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};
