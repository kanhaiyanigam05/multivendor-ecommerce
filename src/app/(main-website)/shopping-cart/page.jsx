"use client";
import { useCartModal } from "@/context/CartModalContext";
import Link from "next/link";
import React from "react";

const ShoppingCartPage = () => {
  const {
    isOpen,
    setOpen,
    data,
    setData,
    total,
    handleAddCartItem,
    handleRemoveCartItem,
  } = useCartModal();
  const incQuantity = (productId) => {
    setData((prevData) => {
      return prevData.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
              subtotal:
                parseFloat(item.subtotal) +
                (item.discounted_price ? item.discounted_price : item.price),
            }
          : item
      );
    });
  };

  const decQuantity = (productId) => {
    console.log(productId);

    setData((prevData) => {
      return prevData.map((item) =>
        item.quantity > 1 && item.id === productId
          ? {
              ...item,
              quantity: item.quantity - 1,
              subtotal:
                parseFloat(item.subtotal) -
                (item.discounted_price ? item.discounted_price : item.price),
            }
          : item
      );
    });
  };
  return (
    <>
      {/* <!-- page-title --> */}
      <div
        className="page-title"
        style={{ backgroundImage: 'url("images/section/page-title.jpg")' }}
      >
        <div className="container">
          <h3 className="heading text-center">Shopping Cart</h3>
          <ul className="breadcrumbs d-flex align-items-center justify-content-center">
            <li>
              <Link className="link" href={"/"}>
                Homepage
              </Link>
            </li>
            <li>
              <i className="icon-arrRight"></i>
            </li>
            <li>
              <Link className="link" href={"/shop"}>
                Shop
              </Link>
            </li>
            <li>
              <i className="icon-arrRight"></i>
            </li>
            <li>Shopping Cart</li>
          </ul>
        </div>
      </div>
      {/* <!-- /page-title --> */}
      {/* <!-- Section cart --> */}
      <section className="flat-spacing">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              {/* <div className="tf-cart-sold">
                <div className="notification-sold bg-surface">
                  <img
                    className="icon"
                    src="images/logo/icon-fire.png"
                    alt="img"
                  />
                  <div className="count-text">
                    Your cart will expire in
                    <div
                      className="js-countdown time-count"
                      data-timer="600"
                      data-labels=":,:,:,"
                    ></div>
                    minutes! Please checkout now before your items sell out!
                  </div>
                </div>
                <div className="notification-progress">
                  <div className="text">
                    Buy <span className="fw-semibold text-primary">$70.00</span>
                    more to get <span className="fw-semibold">Freeship</span>
                  </div>
                  <div className="progress-cart">
                    <div
                      className="value"
                      style={{ width: "0%" }}
                      data-progress="50"
                    >
                      <span className="round"></span>
                    </div>
                  </div>
                </div>
              </div> */}
              <form>
                <table className="tf-table-page-cart">
                  <thead>
                    <tr>
                      <th>Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 &&
                      data.map((product, i) => {
                        return (
                          <tr className="tf-cart-item file-delete" key={i}>
                            <td className="tf-cart-item_product">
                              <Link
                                href={`/shop/${product.slug}`}
                                className="img-box"
                              >
                                <img
                                  src={product.first_image}
                                  alt={product.title}
                                />
                              </Link>
                              <div className="cart-info">
                                <Link
                                  href={`/shop/${product.slug}`}
                                  className="cart-title link"
                                >
                                  V-neck cotton T-shirt
                                </Link>
                                <p>{product.category}</p>
                                {/* <div className="variant-box">
                                  <div className="tf-select">
                                    <select>
                                      <option>Blue</option>
                                      <option>Black</option>
                                      <option>White</option>
                                      <option>Red</option>
                                      <option>Beige</option>
                                      <option>Pink</option>
                                    </select>
                                  </div>
                                  <div className="tf-select">
                                    <select>
                                      <option>XL</option>
                                      <option>XS</option>
                                      <option>S</option>
                                      <option>M</option>
                                      <option>L</option>
                                      <option>XL</option>
                                      <option>2XL</option>
                                    </select>
                                  </div>
                                </div> */}
                              </div>
                            </td>
                            <td
                              data-cart-title="Price"
                              className="tf-cart-item_price text-center"
                            >
                              <div className="cart-price text-button price-on-sale">
                                {`$${
                                  product.discounted_price
                                    ? product.discounted_price
                                    : product.price
                                }`}
                              </div>
                            </td>
                            <td
                              data-cart-title="Quantity"
                              className="tf-cart-item_quantity"
                            >
                              <div className="wg-quantity mx-md-auto">
                                <span
                                  className="btn-quantity btn-decrease"
                                  onClick={() => decQuantity(product.id)}
                                >
                                  -
                                </span>
                                <input
                                  type="text"
                                  className="quantity-product"
                                  name="number"
                                  value={product.quantity}
                                  readOnly
                                />
                                <span
                                  className="btn-quantity btn-increase"
                                  onClick={() => incQuantity(product.id)}
                                >
                                  +
                                </span>
                              </div>
                            </td>
                            <td
                              data-cart-title="Total"
                              className="tf-cart-item_total text-center"
                            >
                              <div className="cart-total text-button total-price">
                                {`$${product.subtotal.toFixed(2)}`}
                              </div>
                            </td>
                            <td
                              data-cart-title="Remove"
                              className="remove-cart"
                            >
                              <span
                                className="remove icon icon-close"
                                onClick={() => handleRemoveCartItem(product.id)}
                              ></span>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
                <div className="ip-discount-code">
                  <input type="text" placeholder="Add voucher discount" />
                  <button className="tf-btn">
                    <span className="text">Apply Code</span>
                  </button>
                </div>
                <div className="group-discount">
                  <div className="box-discount">
                    <div className="discount-top">
                      <div className="discount-off">
                        <div className="text-caption-1">Discount</div>
                        <span className="sale-off text-btn-uppercase">
                          10% OFF
                        </span>
                      </div>
                      <div className="discount-from">
                        <p className="text-caption-1">
                          For all orders <br /> from 200$
                        </p>
                      </div>
                    </div>
                    <div className="discount-bot">
                      <span className="text-btn-uppercase">Mo234231</span>
                      <button className="tf-btn">
                        <span className="text">Apply Code</span>
                      </button>
                    </div>
                  </div>
                  <div className="box-discount active">
                    <div className="discount-top">
                      <div className="discount-off">
                        <div className="text-caption-1">Discount</div>
                        <span className="sale-off text-btn-uppercase">
                          10% OFF
                        </span>
                      </div>
                      <div className="discount-from">
                        <p className="text-caption-1">
                          For all orders <br /> from 200$
                        </p>
                      </div>
                    </div>
                    <div className="discount-bot">
                      <span className="text-btn-uppercase">Mo234231</span>
                      <button className="tf-btn">
                        <span className="text">Apply Code</span>
                      </button>
                    </div>
                  </div>
                  <div className="box-discount">
                    <div className="discount-top">
                      <div className="discount-off">
                        <div className="text-caption-1">Discount</div>
                        <span className="sale-off text-btn-uppercase">
                          10% OFF
                        </span>
                      </div>
                      <div className="discount-from">
                        <p className="text-caption-1">
                          For all orders <br /> from 200$
                        </p>
                      </div>
                    </div>
                    <div className="discount-bot">
                      <span className="text-btn-uppercase">Mo234231</span>
                      <button className="tf-btn">
                        <span className="text">Apply Code</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-xl-4">
              <div className="fl-sidebar-cart">
                <div className="box-order bg-surface">
                  <h5 className="title">Order Summary</h5>
                  <div className="subtotal text-button d-flex justify-content-between align-items-center">
                    <span>Subtotal</span>
                    <span className="total">{`$${total.subtotal}`}</span>
                  </div>
                  <div className="discount text-button d-flex justify-content-between align-items-center">
                    <span>Discounts</span>
                    <span className="total">{`-$0.00`}</span>
                  </div>
                  {/* <div className="ship">
                    <span className="text-button">Shipping</span>
                    <div className="flex-grow-1">
                      <fieldset className="ship-item">
                        <input
                          type="radio"
                          name="ship-check"
                          className="tf-check-rounded"
                          id="free"
                          checked
                        />
                        <label for="free">
                          <span>Free Shipping</span>
                          <span className="price">$0.00</span>
                        </label>
                      </fieldset>
                      <fieldset className="ship-item">
                        <input
                          type="radio"
                          name="ship-check"
                          className="tf-check-rounded"
                          id="local"
                        />
                        <label for="local">
                          <span>Local:</span>
                          <span className="price">$35.00</span>
                        </label>
                      </fieldset>
                      <fieldset className="ship-item">
                        <input
                          type="radio"
                          name="ship-check"
                          className="tf-check-rounded"
                          id="rate"
                        />
                        <label for="rate">
                          <span>Flat Rate:</span>
                          <span className="price">$35.00</span>
                        </label>
                      </fieldset>
                    </div>
                  </div> */}
                  <h5 className="total-order d-flex justify-content-between align-items-center">
                    <span>Total</span>
                    <span className="total">{`$${total.subtotal}`}</span>
                  </h5>
                  <div className="box-progress-checkout">
                    <fieldset className="check-agree">
                      <input
                        type="checkbox"
                        id="check-agree"
                        className="tf-check-rounded"
                      />
                      <label for="check-agree">
                        I agree with the
                        <a href="term-of-use.html">terms and conditions</a>
                      </label>
                    </fieldset>
                    <Link href={"/checkout"} className="tf-btn btn-reset">
                      Process To Checkout
                    </Link>
                    <p className="text-button text-center">
                      Or continue shopping
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /Section cart --> */}
      {/* <!-- Recent product --> */}
      <section className="flat-spacing pt-0">
        <div className="container">
          <div className="heading-section text-center wow fadeInUp">
            <h4 className="heading">You may also like</h4>
          </div>
          <div
            dir="ltr"
            className="swiper tf-sw-recent"
            data-preview="4"
            data-tablet="3"
            data-mobile="2"
            data-space-lg="30"
            data-space-md="30"
            data-space="15"
            data-pagination="1"
            data-pagination-md="1"
            data-pagination-lg="1"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="card-product wow fadeInUp" data-wow-delay="0s">
                  <div className="card-product-wrapper">
                    <a href="product-detail.html" className="product-img">
                      <img
                        className="lazyload img-product"
                        data-src="images/products/womens/women-19.jpg"
                        src="images/products/womens/women-19.jpg"
                        alt="image-product"
                      />
                      <img
                        className="lazyload img-hover"
                        data-src="images/products/womens/women-20.jpg"
                        src="images/products/womens/women-20.jpg"
                        alt="image-product"
                      />
                    </a>
                    <div className="list-product-btn">
                      <a
                        href="javascript:void(0);"
                        className="box-icon wishlist btn-icon-action"
                      >
                        <span className="icon icon-heart"></span>
                        <span className="tooltip">Wishlist</span>
                      </a>
                      <a
                        href="#compare"
                        data-bs-toggle="offcanvas"
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
                      >
                        <span className="icon icon-eye"></span>
                        <span className="tooltip">Quick View</span>
                      </a>
                    </div>
                    <div className="list-btn-main">
                      <a
                        href="#shoppingCart"
                        data-bs-toggle="modal"
                        className="btn-main-product"
                      >
                        Add To cart
                      </a>
                    </div>
                  </div>
                  <div className="card-product-info">
                    <a href="product-detail.html" className="title link">
                      V-neck cotton T-shirt
                    </a>
                    <span className="price">$59.99</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="card-product wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="card-product-wrapper">
                    <a href="product-detail.html" className="product-img">
                      <img
                        className="lazyload img-product"
                        data-src="images/products/womens/women-176.jpg"
                        src="images/products/womens/women-176.jpg"
                        alt="image-product"
                      />
                      <img
                        className="lazyload img-hover"
                        data-src="images/products/womens/women-179.jpg"
                        src="images/products/womens/women-179.jpg"
                        alt="image-product"
                      />
                    </a>
                    <div className="on-sale-wrap">
                      <span className="on-sale-item">-25%</span>
                    </div>
                    <div className="marquee-product bg-main">
                      <div className="marquee-wrapper">
                        <div className="initial-child-container">
                          <div className="marquee-child-item">
                            <p className="font-2 text-btn-uppercase fw-6 text-white">
                              Hot Sale 25% OFF
                            </p>
                          </div>
                          <div className="marquee-child-item">
                            <span className="icon icon-lightning text-critical"></span>
                          </div>
                          <div className="marquee-child-item">
                            <p className="font-2 text-btn-uppercase fw-6 text-white">
                              Hot Sale 25% OFF
                            </p>
                          </div>
                          <div className="marquee-child-item">
                            <span className="icon icon-lightning text-critical"></span>
                          </div>
                          <div className="marquee-child-item">
                            <p className="font-2 text-btn-uppercase fw-6 text-white">
                              Hot Sale 25% OFF
                            </p>
                          </div>
                          <div className="marquee-child-item">
                            <span className="icon icon-lightning text-critical"></span>
                          </div>
                          <div className="marquee-child-item">
                            <p className="font-2 text-btn-uppercase fw-6 text-white">
                              Hot Sale 25% OFF
                            </p>
                          </div>
                          <div className="marquee-child-item">
                            <span className="icon icon-lightning text-critical"></span>
                          </div>
                          <div className="marquee-child-item">
                            <p className="font-2 text-btn-uppercase fw-6 text-white">
                              Hot Sale 25% OFF
                            </p>
                          </div>
                          <div className="marquee-child-item">
                            <span className="icon icon-lightning text-critical"></span>
                          </div>
                        </div>
                      </div>
                      <div className="marquee-wrapper">
                        <div className="initial-child-container">
                          <div className="marquee-child-item">
                            <p className="font-2 text-btn-uppercase fw-6 text-white">
                              Hot Sale 25% OFF
                            </p>
                          </div>
                          <div className="marquee-child-item">
                            <span className="icon icon-lightning text-critical"></span>
                          </div>
                          <div className="marquee-child-item">
                            <p className="font-2 text-btn-uppercase fw-6 text-white">
                              Hot Sale 25% OFF
                            </p>
                          </div>
                          <div className="marquee-child-item">
                            <span className="icon icon-lightning text-critical"></span>
                          </div>
                          <div className="marquee-child-item">
                            <p className="font-2 text-btn-uppercase fw-6 text-white">
                              Hot Sale 25% OFF
                            </p>
                          </div>
                          <div className="marquee-child-item">
                            <span className="icon icon-lightning text-critical"></span>
                          </div>
                          <div className="marquee-child-item">
                            <p className="font-2 text-btn-uppercase fw-6 text-white">
                              Hot Sale 25% OFF
                            </p>
                          </div>
                          <div className="marquee-child-item">
                            <span className="icon icon-lightning text-critical"></span>
                          </div>
                          <div className="marquee-child-item">
                            <p className="font-2 text-btn-uppercase fw-6 text-white">
                              Hot Sale 25% OFF
                            </p>
                          </div>
                          <div className="marquee-child-item">
                            <span className="icon icon-lightning text-critical"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="list-product-btn">
                      <a
                        href="javascript:void(0);"
                        className="box-icon wishlist btn-icon-action"
                      >
                        <span className="icon icon-heart"></span>
                        <span className="tooltip">Wishlist</span>
                      </a>
                      <a
                        href="#compare"
                        data-bs-toggle="offcanvas"
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
                      >
                        <span className="icon icon-eye"></span>
                        <span className="tooltip">Quick View</span>
                      </a>
                    </div>
                    <div className="list-btn-main">
                      <a
                        href="#shoppingCart"
                        data-bs-toggle="modal"
                        className="btn-main-product"
                      >
                        Add To cart
                      </a>
                    </div>
                  </div>
                  <div className="card-product-info">
                    <a href="product-detail.html" className="title link">
                      Polarized sunglasses
                    </a>
                    <span className="price">
                      <span className="old-price">$98.00</span> $79.99
                    </span>
                    <ul className="list-color-product">
                      <li className="list-color-item color-swatch active line">
                        <span className="swatch-value bg-light-blue"></span>
                        <img
                          className="lazyload"
                          data-src="images/products/womens/women-176.jpg"
                          src="images/products/womens/women-176.jpg"
                          alt="image-product"
                        />
                      </li>
                      <li className="list-color-item color-swatch">
                        <span className="swatch-value bg-light-blue-2"></span>
                        <img
                          className="lazyload"
                          data-src="images/products/womens/women-177.jpg"
                          src="images/products/womens/women-177.jpg"
                          alt="image-product"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="card-product card-product-size wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="card-product-wrapper">
                    <a href="product-detail.html" className="product-img">
                      <img
                        className="lazyload img-product"
                        data-src="images/products/womens/women-29.jpg"
                        src="images/products/womens/women-29.jpg"
                        alt="image-product"
                      />
                      <img
                        className="lazyload img-hover"
                        data-src="images/products/womens/women-30.jpg"
                        src="images/products/womens/women-30.jpg"
                        alt="image-product"
                      />
                    </a>
                    <div className="variant-wrap size-list">
                      <ul className="variant-box">
                        <li className="size-item">S</li>
                        <li className="size-item">M</li>
                        <li className="size-item">L</li>
                        <li className="size-item">XL</li>
                      </ul>
                    </div>
                    <div className="variant-wrap countdown-wrap">
                      <div className="variant-box">
                        <div
                          className="js-countdown"
                          data-timer="1007500"
                          data-labels="D :,H :,M :,S"
                        ></div>
                      </div>
                    </div>
                    <div className="list-product-btn">
                      <a
                        href="javascript:void(0);"
                        className="box-icon wishlist btn-icon-action"
                      >
                        <span className="icon icon-heart"></span>
                        <span className="tooltip">Wishlist</span>
                      </a>
                      <a
                        href="#compare"
                        data-bs-toggle="offcanvas"
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
                      >
                        <span className="icon icon-eye"></span>
                        <span className="tooltip">Quick View</span>
                      </a>
                    </div>
                    <div className="list-btn-main">
                      <a
                        href="#quickAdd"
                        data-bs-toggle="modal"
                        className="btn-main-product"
                      >
                        Quick Add
                      </a>
                    </div>
                  </div>
                  <div className="card-product-info">
                    <a href="product-detail.html" className="title link">
                      Ramie shirt with pockets{" "}
                    </a>
                    <span className="price">
                      <span className="old-price">$98.00</span> $89.99
                    </span>
                    <ul className="list-color-product">
                      <li className="list-color-item color-swatch active line">
                        <span className="swatch-value bg-light-orange"></span>
                        <img
                          className="lazyload"
                          data-src="images/products/womens/women-29.jpg"
                          src="images/products/womens/women-29.jpg"
                          alt="image-product"
                        />
                      </li>
                      <li className="list-color-item color-swatch">
                        <span className="swatch-value bg-light-grey"></span>
                        <img
                          className="lazyload"
                          data-src="images/products/womens/women-33.jpg"
                          src="images/products/womens/women-33.jpg"
                          alt="image-product"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="card-product wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="card-product-wrapper">
                    <a href="product-detail.html" className="product-img">
                      <img
                        className="lazyload img-product"
                        data-src="images/products/womens/women-1.jpg"
                        src="images/products/womens/women-1.jpg"
                        alt="image-product"
                      />
                      <img
                        className="lazyload img-hover"
                        data-src="images/products/womens/women-2.jpg"
                        src="images/products/womens/women-2.jpg"
                        alt="image-product"
                      />
                    </a>
                    <div className="list-product-btn">
                      <a
                        href="javascript:void(0);"
                        className="box-icon wishlist btn-icon-action"
                      >
                        <span className="icon icon-heart"></span>
                        <span className="tooltip">Wishlist</span>
                      </a>
                      <a
                        href="#compare"
                        data-bs-toggle="offcanvas"
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
                      >
                        <span className="icon icon-eye"></span>
                        <span className="tooltip">Quick View</span>
                      </a>
                    </div>
                    <div className="list-btn-main">
                      <a
                        href="#shoppingCart"
                        data-bs-toggle="modal"
                        className="btn-main-product"
                      >
                        Add To cart
                      </a>
                    </div>
                  </div>
                  <div className="card-product-info">
                    <a href="product-detail.html" className="title link">
                      Ribbed cotton-blend top
                    </a>
                    <span className="price">$69.99</span>
                    <ul className="list-color-product">
                      <li className="list-color-item color-swatch active line">
                        <span className="swatch-value bg-dark-grey"></span>
                        <img
                          className="lazyload"
                          data-src="images/products/womens/women-1.jpg"
                          src="images/products/womens/women-1.jpg"
                          alt="image-product"
                        />
                      </li>
                      <li className="list-color-item color-swatch">
                        <span className="swatch-value bg-light-pink"></span>
                        <img
                          className="lazyload"
                          data-src="images/products/womens/women-2.jpg"
                          src="images/products/womens/women-2.jpg"
                          alt="image-product"
                        />
                      </li>
                      <li className="list-color-item color-swatch">
                        <span className="swatch-value bg-dark-grey-2"></span>
                        <img
                          className="lazyload"
                          data-src="images/products/womens/women-3.jpg"
                          src="images/products/womens/women-3.jpg"
                          alt="image-product"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="sw-pagination-recent sw-dots type-circle justify-content-center"></div>
          </div>
        </div>
      </section>
      {/* <!-- /Recent product --> */}
    </>
  );
};

export default ShoppingCartPage;
