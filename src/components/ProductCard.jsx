"use client";
import { useCompare } from "@/context/CompareContext";
import { useQuickAdd } from "@/context/QuickAddContext";
import { useQuickView } from "@/context/QuickViewContext";
import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";
import React from "react";

const ProductCard = ({ data, ...props }) => {
  const { setOpen: setOpenQuickAdd, setData: setDataQuickAdd } = useQuickAdd();
  const { setOpen: setOpenQuickView, setData: setDataQuickView } =
    useQuickView();
  const { setOpen: setOpenCompare, setCompareData } = useCompare();
  const { setOpen: setOpenWishlist, setWishlistData } = useWishlist();
  const firstImage = data?.images?.[0] || null;
  const hoverImage = data?.images?.[1] || firstImage;
  let discountedAmount = 0;
  if (data.discount) {
    discountedAmount =
      data.price -
      (data.discount.type === "percent"
        ? (data.discount.amount * data.price) / 100
        : data.discount.amount);
    discountedAmount = parseFloat(discountedAmount.toFixed(2));
  }
  data.first_image = firstImage;
  data.hover_image = hoverImage;
  data.discounted_price = discountedAmount;
  data.sizes = data.sizes ? data.sizes : [];
  data.colors = data.colors ? data.colors : [];
  console.log(discountedAmount);

  return (
    <div
      {...props}
      className={`card-product${
        data.sizes && data.sizes.length > 0 ? " card-product-size" : ""
      } wow fadeInUp`}
      data-wow-delay="0.2s"
    >
      <div className="card-product-wrapper">
        <Link href={`/shop/${data.slug}`} className="product-img">
          <img
            className="lazyload img-product"
            data-src={firstImage}
            src={firstImage}
            alt={data.title}
          />
          <img
            className="lazyload img-hover"
            data-src={hoverImage}
            src={hoverImage}
            alt={`${data.title} hover`}
          />
        </Link>
        {data.sizes && data.sizes.length > 0 ? (
          <div className="variant-wrap size-list">
            <ul className="variant-box">
              <li className="size-item">S</li>
              <li className="size-item">M</li>
              <li className="size-item">L</li>
              <li className="size-item">XL</li>
            </ul>
          </div>
        ) : null}
        {/* <div className="variant-wrap countdown-wrap">
          <div className="variant-box">
            <div
              className="js-countdown"
              data-timer="1007500"
              data-labels="D :,H :,M :,S"
            ></div>
          </div>
        </div> */}
        <div className="list-product-btn">
          <a
            onClick={() => {
              setOpenWishlist(true);
              setWishlistData(data);
            }}
            href="#wishlist"
            className="box-icon wishlist btn-icon-action"
          >
            <span className="icon icon-heart"></span>
            <span className="tooltip">Wishlist</span>
          </a>

          <a
            onClick={() => {
              setOpenCompare(true);
              setCompareData(data);
            }}
            href="#compare"
            aria-controls="compare"
            className="box-icon compare btn-icon-action"
          >
            <span className="icon icon-gitDiff"></span>
            <span className="tooltip">Compare</span>
          </a>

          <a
            href="#quickView"
            data-bs-toggle="modal"
            className="box-icon quickview tf-btn-loading"
            onClick={() => {
              setOpenQuickView(true);
              setDataQuickView(data);
            }}
          >
            <span className="icon icon-eye"></span>
            <span className="tooltip">Quick View</span>
          </a>
        </div>
        <div className="list-btn-main">
          <button
            href="#quickAdd"
            data-bs-toggle="modal"
            className="btn-main-product"
            onClick={() => {
              setOpenQuickAdd(true);
              setDataQuickAdd(data);
            }}
          >
            Quick Add
          </button>
        </div>
      </div>
      <div className="card-product-info">
        <Link href={`/shop/${data.slug}`} className="title link">
          {data.title}
        </Link>
        <span className="price">
          {data.discount ? (
            <>
              <span className="old-price">{`$ ${data.price}`}</span>{" "}
              {`$ ${discountedAmount}`}
            </>
          ) : (
            <>{`$ ${data.price}`}</>
          )}
        </span>
        {data.colors && (
          <ul className="list-color-product">
            {data.colors.map((color, index) => {
              return (
                <li
                  key={index}
                  className={`list-color-item color-swatch${
                    index == 0 ? " active" : null
                  } line`}
                >
                  <span
                    className="swatch-value"
                    style={{ backgroundColor: color.code }}
                  ></span>
                  {/* <img
                className="lazyload"
                data-src="images/products/womens/women-29.jpg"
                src="images/products/womens/women-29.jpg"
                alt="image-product"
              /> */}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
