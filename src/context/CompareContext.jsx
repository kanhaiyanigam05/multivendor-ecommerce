"use client";
import Link from "next/link";
import { createContext, useContext, useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";

const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("compare")) || []
  );
  const setCompareData = (item) => {
    if (data.length > 0) {
      if (!data.some((compare) => compare.id === item.id)) {
        setData([...data, item]);
      }
    } else {
      setData([item]);
    }
  };
  const removeCompareData = (itemId) => {
    const updatedData = data.filter((item) => item.id !== itemId);
    setData(updatedData);
    if (updatedData.length === 0) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  useEffect(() => {
    localStorage.setItem("compare", JSON.stringify(data));
  }, [data]);
  return (
    <CompareContext.Provider
      value={{
        isOpen,
        setOpen,
        data,
        setData,
        setCompareData,
        removeCompareData,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error("useCompare must be used within a CompareProvider");
  }
  return context;
};

export const Compare = ({ product, ...props }) => {
  const { isOpen, setOpen, data, setData, removeCompareData } = useCompare();

  return (
    <Offcanvas
      className="offcanvas-bottom offcanvas-compare"
      show={isOpen}
      onHide={() => setOpen(false)}
      placement={"bottom"}
      name={"bottom"}
    >
      <div className="offcanvas-content">
        <div className="header">
          <span
            onClick={() => setOpen(false)}
            className="icon-close icon-close-popup"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></span>
        </div>
        <div className="wrap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tf-compare-list list-file-delete">
                  <div className="tf-compare-head">
                    <h5 className="title">
                      Compare <br /> Products
                    </h5>
                  </div>
                  <div className="tf-compare-wrap">
                    {data.map((item, i) => {
                      return (
                        <div className="tf-compare-item file-delete" key={i}>
                          <span className="btns-repeat">
                            <svg
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_5628_27)">
                                <path
                                  d="M11.334 1.33301L14.0007 3.99967L11.334 6.66634"
                                  stroke="#181818"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M2 7.99951V6.66618C2 5.95893 2.28095 5.28066 2.78105 4.78056C3.28115 4.28046 3.95942 3.99951 4.66667 3.99951H14"
                                  stroke="#181818"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M4.66667 15.9996L2 13.3329L4.66667 10.6663"
                                  stroke="#181818"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M14 9.33301V10.6663C14 11.3736 13.719 12.0519 13.219 12.552C12.7189 13.0521 12.0406 13.333 11.3333 13.333H2"
                                  stroke="#181818"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_5628_27">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                    transform="translate(0 0.66626)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          <span
                            className="icon-close remove"
                            onClick={() => {
                              removeCompareData(item.id);
                            }}
                          ></span>
                          <Link href={`/shop/${item.slug}`} className="image">
                            <img
                              className="lazyload"
                              data-src={item.first_image}
                              src={item.first_image}
                              alt={item.title}
                            />
                          </Link>
                          <div className="content">
                            <div className="text-title">
                              <Link
                                className="link text-line-clamp-2"
                                href={`/shop/${item.slug}`}
                              >
                                {item.title}
                              </Link>
                            </div>
                            <div className="text-button">
                              {`$${
                                item.discounted_price
                                  ? item.discounted_price
                                  : item.price
                              }`}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="tf-compare-buttons">
                    <div className="tf-compare-buttons-wrap">
                      <Link
                        href={`/shop`}
                        className="tf-btn w-100 btn-fill radius-4"
                      >
                        <span className="text text-btn-uppercase">
                          Compare Products
                        </span>
                      </Link>
                      <div className="tf-compapre-button-clear-all clear-file-delete tf-btn w-100 btn-white radius-4 has-border">
                        <span
                          className="text text-btn-uppercase"
                          onClick={() => {
                            setData([]);
                            setOpen(false);
                          }}
                        >
                          Clear All Products
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Offcanvas>
  );
};
