"use client";
import React, { useEffect, useState } from "react";
import { Outfit } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CartProvider } from "@/context/CartContext";
import { CartModalProvider } from "@/context/CartModalContext";
import SizeGuide from "@/layout/modal/SizeGuide";
import { QuickAddProvider } from "@/context/QuickAddContext";
import { QuickViewProvider } from "@/context/QuickViewContext";
import { CompareProvider } from "@/context/CompareContext";
import { WishlistProvider } from "@/context/WishlistContext";

// Css styles
import "../../fonts/fonts.css";
import "../../fonts/font-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/animate.css";
import "../../fonts/font-icons.css";
import "../../css/styles.css";

// Js scripts
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "../../js/jquery.min.js";
// import "../../js/jquery-validate.js";
import "../../js/lazysize.min.js";
import AdminHeader from "@/layout/AdminHeader";
import InitModal from "@/layout/InitModal";
// import "../../js/count-down.js";
// import "../../js/wow.min.js";
// import "../../js/multiple-modal.js";
// import "../../js/main.js";

const outfit = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});
const AdminLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false); // State for fade-out animation
  const route = usePathname();

  useEffect(() => {
    // Simulate preloader fade out after a delay
    const timer = setTimeout(() => {
      setFadeOut(true); // Trigger fade-out animation
      setTimeout(() => {
        setLoading(false); // Set loading to false to hide preloader after fade-out
      }, 500); // Delay for fade-out animation
    }, 100); // Initial delay for the preloader to show

    return () => clearTimeout(timer); // Cleanup timer if component unmounts
  }, []);

  if (loading) {
    return (
      <body
        className={`preload-wrapper popup-loader ${fadeOut ? "fade-out" : ""}`}
        style={{
          transition: "opacity 0.5s ease-out",
          opacity: fadeOut ? 0 : 1,
        }}
      >
        {/* Preload content */}
        <div className="preload preload-container">
          <div className="preload-logo">
            <div className="spinner"></div>
          </div>
        </div>
      </body>
    );
  }
  return (
    <body>
      <CartModalProvider>
        {/* <AuthProvidor> */}
        <CartProvider>
          <WishlistProvider>
            <CompareProvider>
              <QuickViewProvider>
                <QuickAddProvider>
                  {/* <!-- Scroll Top --> */}
                  <div id="#modals"></div>
                  <button id="scroll-top">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_15741_24194)">
                        <path
                          d="M3 11.9175L12 2.91748L21 11.9175H16.5V20.1675C16.5 20.3664 16.421 20.5572 16.2803 20.6978C16.1397 20.8385 15.9489 20.9175 15.75 20.9175H8.25C8.05109 20.9175 7.86032 20.8385 7.71967 20.6978C7.57902 20.5572 7.5 20.3664 7.5 20.1675V11.9175H3Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_15741_24194">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0 0.66748)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>

                  <div id="wrapper">
                    <AdminHeader />
                    {children}

                    {/* <!-- Footer --> */}
                    <footer id="footer" className="footer">
                      <div className="footer-wrap">
                        <div className="footer-body">
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="footer-infor">
                                  <div className="footer-logo">
                                    <a href="index.php">
                                      <img src="images/logo.png" alt="" />
                                    </a>
                                  </div>
                                  <div className="footer-address">
                                    <p>
                                      Lackland Ave, Piscataway, NJ 08854, USA
                                    </p>
                                    <a
                                      href="https://g.co/kgs/Z9egrku"
                                      className="tf-btn-default fw-6"
                                    >
                                      GET DIRECTION
                                      <i className="icon-arrowUpRight"></i>
                                    </a>
                                  </div>
                                  <ul className="footer-info">
                                    <li>
                                      <i className="icon-mail"></i>
                                      <p>
                                        <a href="##">ecommerce@domain.com</a>
                                      </p>
                                    </li>
                                    <li>
                                      <i className="icon-phone"></i>
                                      <p>
                                        <a href="##">123-456-7890</a>
                                      </p>
                                    </li>
                                  </ul>
                                  <ul className="tf-social-icon">
                                    <li>
                                      <a href="##" className="social-facebook">
                                        <i className="icon icon-fb"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="##" className="social-twiter">
                                        <i className="icon icon-x"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="##" className="social-instagram">
                                        <i className="icon icon-instagram"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="##" className="social-tiktok">
                                        <i className="icon icon-tiktok"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="##" className="social-amazon">
                                        <i className="icon icon-amazon"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="##" className="social-pinterest">
                                        <i className="icon icon-pinterest"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="footer-menu">
                                  <div className="footer-col-block">
                                    <div className="footer-heading text-button footer-heading-mobile">
                                      Infomation
                                    </div>
                                    <div className="tf-collapse-content">
                                      <ul className="footer-menu-list">
                                        <li className="text-caption-1">
                                          <a
                                            href="about-us.php"
                                            className="footer-menu_item"
                                          >
                                            About Us
                                          </a>
                                        </li>
                                        <li className="text-caption-1">
                                          <a
                                            href="checkout.php"
                                            className="footer-menu_item"
                                          >
                                            Checkout
                                          </a>
                                        </li>
                                        <li className="text-caption-1">
                                          <a
                                            href="FAQs.php"
                                            className="footer-menu_item"
                                          >
                                            FAQs
                                          </a>
                                        </li>
                                        <li className="text-caption-1">
                                          <a
                                            href="my-account.php"
                                            className="footer-menu_item"
                                          >
                                            My Account
                                          </a>
                                        </li>
                                        <li className="text-caption-1">
                                          <a
                                            href="order-tracking.php"
                                            className="footer-menu_item"
                                          >
                                            Order Tracking
                                          </a>
                                        </li>
                                        <li className="text-caption-1">
                                          <a
                                            href="login.php"
                                            className="footer-menu_item"
                                          >
                                            Login
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="footer-col-block">
                                    <div className="footer-heading text-button footer-heading-mobile">
                                      Customer Services
                                    </div>
                                    <div className="tf-collapse-content">
                                      <ul className="footer-menu-list">
                                        <li className="text-caption-1">
                                          <a
                                            href="wish-list.php"
                                            className="footer-menu_item"
                                          >
                                            Wishlist
                                          </a>
                                        </li>
                                        <li className="text-caption-1">
                                          <a
                                            href="returns-refund.php"
                                            className="footer-menu_item"
                                          >
                                            Return & Refund
                                          </a>
                                        </li>
                                        <li className="text-caption-1">
                                          <a
                                            href="privacy-policy.php"
                                            className="footer-menu_item"
                                          >
                                            Privacy Policy
                                          </a>
                                        </li>
                                        <li className="text-caption-1">
                                          <a
                                            href="term-of-use.php"
                                            className="footer-menu_item"
                                          >
                                            Terms & Conditions
                                          </a>
                                        </li>
                                        <li className="text-caption-1">
                                          <a
                                            href="disclaimer.php"
                                            className="footer-menu_item"
                                          >
                                            Disclaimer
                                          </a>
                                        </li>
                                        <li className="text-caption-1">
                                          <a
                                            href="wish-list.php"
                                            className="footer-menu_item"
                                          >
                                            My Wishlist
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="footer-col-block">
                                  <div className="footer-heading text-button footer-heading-mobile">
                                    Newletter
                                  </div>
                                  <div className="tf-collapse-content">
                                    <div className="footer-newsletter">
                                      <p className="text-caption-1">
                                        Sign up for our newsletter and get 10%
                                        off your first purchase
                                      </p>
                                      <form
                                        className="form-newsletter subscribe-form"
                                        acceptCharset="utf-8"
                                        data-mailchimp="true"
                                      >
                                        <div className="subscribe-content">
                                          <fieldset className="email">
                                            <input
                                              type="email"
                                              name="email-form"
                                              className="subscribe-email"
                                              placeholder="Enter your e-mail"
                                              tabIndex="0"
                                              aria-required="true"
                                            />
                                          </fieldset>
                                          <div className="button-submit">
                                            <button
                                              className="subscribe-button"
                                              type="submit"
                                            >
                                              <i className="icon icon-arrowUpRight"></i>
                                            </button>
                                          </div>
                                        </div>
                                        <div className="subscribe-msg"></div>
                                      </form>
                                      <div className="tf-cart-checkbox">
                                        <div className="tf-checkbox-wrapp">
                                          <input
                                            className=""
                                            type="checkbox"
                                            id="footer-Form_agree"
                                            name="agree_checkbox"
                                          />
                                          <div>
                                            <i className="icon-check"></i>
                                          </div>
                                        </div>
                                        <label
                                          className="text-caption-1"
                                          htmlFor="footer-Form_agree"
                                        >
                                          By clicking subcribe, you agree to the{" "}
                                          <a
                                            className="fw-6 link"
                                            href="term-of-use.php"
                                          >
                                            Terms of Service
                                          </a>{" "}
                                          and{" "}
                                          <a
                                            className="fw-6 link"
                                            href="privacy-policy.php"
                                          >
                                            Privacy Policy
                                          </a>
                                          .
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="footer-bottom">
                          <div className="container">
                            <div className="row">
                              <div className="col-12">
                                <div className="footer-bottom-wrap">
                                  <div className="left">
                                    <p className="text-caption-1">
                                      ©2025 eCommerce. All Rights Reserved.
                                    </p>
                                  </div>
                                  <div className="tf-payment">
                                    <ul>
                                      <li>
                                        <img
                                          src="images/payment/img-1.png"
                                          alt=""
                                        />
                                      </li>
                                      <li>
                                        <img
                                          src="images/payment/img-2.png"
                                          alt=""
                                        />
                                      </li>
                                      <li>
                                        <img
                                          src="images/payment/img-3.png"
                                          alt=""
                                        />
                                      </li>
                                      <li>
                                        <img
                                          src="images/payment/img-4.png"
                                          alt=""
                                        />
                                      </li>
                                      <li>
                                        <img
                                          src="images/payment/img-5.png"
                                          alt=""
                                        />
                                      </li>
                                      <li>
                                        <img
                                          src="images/payment/img-6.png"
                                          alt=""
                                        />
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </footer>
                    {/* <!-- /Footer --> */}

                    {/* <!-- toolbar-bottom --> */}
                    <div className="tf-toolbar-bottom">
                      <div className="toolbar-item">
                        <a href="shop.php">
                          <div className="toolbar-icon">
                            <svg
                              className="icon"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.125 3.125H4.375C4.04348 3.125 3.72554 3.2567 3.49112 3.49112C3.2567 3.72554 3.125 4.04348 3.125 4.375V8.125C3.125 8.45652 3.2567 8.77446 3.49112 9.00888C3.72554 9.2433 4.04348 9.375 4.375 9.375H8.125C8.45652 9.375 8.77446 9.2433 9.00888 9.00888C9.2433 8.77446 9.375 8.45652 9.375 8.125V4.375C9.375 4.04348 9.2433 3.72554 9.00888 3.49112C8.77446 3.2567 8.45652 3.125 8.125 3.125ZM8.125 8.125H4.375V4.375H8.125V8.125ZM15.625 3.125H11.875C11.5435 3.125 11.2255 3.2567 10.9911 3.49112C10.7567 3.72554 10.625 4.04348 10.625 4.375V8.125C10.625 8.45652 10.7567 8.77446 10.9911 9.00888C11.2255 9.2433 11.5435 9.375 11.875 9.375H15.625C15.9565 9.375 16.2745 9.2433 16.5089 9.00888C16.7433 8.77446 16.875 8.45652 16.875 8.125V4.375C16.875 4.04348 16.7433 3.72554 16.5089 3.49112C16.2745 3.2567 15.9565 3.125 15.625 3.125ZM15.625 8.125H11.875V4.375H15.625V8.125ZM8.125 10.625H4.375C4.04348 10.625 3.72554 10.7567 3.49112 10.9911C3.2567 11.2255 3.125 11.5435 3.125 11.875V15.625C3.125 15.9565 3.2567 16.2745 3.49112 16.5089C3.72554 16.7433 4.04348 16.875 4.375 16.875H8.125C8.45652 16.875 8.77446 16.7433 9.00888 16.5089C9.2433 16.2745 9.375 15.9565 9.375 15.625V11.875C9.375 11.5435 9.2433 11.2255 9.00888 10.9911C8.77446 10.7567 8.45652 10.625 8.125 10.625ZM8.125 15.625H4.375V11.875H8.125V15.625ZM15.625 10.625H11.875C11.5435 10.625 11.2255 10.7567 10.9911 10.9911C10.7567 11.2255 10.625 11.5435 10.625 11.875V15.625C10.625 15.9565 10.7567 16.2745 10.9911 16.5089C11.2255 16.7433 11.5435 16.875 11.875 16.875H15.625C15.9565 16.875 16.2745 16.7433 16.5089 16.5089C16.7433 16.2745 16.875 15.9565 16.875 15.625V11.875C16.875 11.5435 16.7433 11.2255 16.5089 10.9911C16.2745 10.7567 15.9565 10.625 15.625 10.625ZM15.625 15.625H11.875V11.875H15.625V15.625Z"
                                fill="#4D4E4F"
                              />
                            </svg>
                          </div>
                          <div className="toolbar-label">Shop</div>
                        </a>
                      </div>
                      <div className="toolbar-item">
                        <a
                          href="#shopCategories"
                          data-bs-toggle="offcanvas"
                          aria-controls="shopCategories"
                        >
                          <div className="toolbar-icon">
                            <svg
                              className="icon"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.5 10C17.5 10.1658 17.4342 10.3247 17.3169 10.4419C17.1997 10.5592 17.0408 10.625 16.875 10.625H3.125C2.95924 10.625 2.80027 10.5592 2.68306 10.4419C2.56585 10.3247 2.5 10.1658 2.5 10C2.5 9.83424 2.56585 9.67527 2.68306 9.55806C2.80027 9.44085 2.95924 9.375 3.125 9.375H16.875C17.0408 9.375 17.1997 9.44085 17.3169 9.55806C17.4342 9.67527 17.5 9.83424 17.5 10ZM3.125 5.625H16.875C17.0408 5.625 17.1997 5.55915 17.3169 5.44194C17.4342 5.32473 17.5 5.16576 17.5 5C17.5 4.83424 17.4342 4.67527 17.3169 4.55806C17.1997 4.44085 17.0408 4.375 16.875 4.375H3.125C2.95924 4.375 2.80027 4.44085 2.68306 4.55806C2.56585 4.67527 2.5 4.83424 2.5 5C2.5 5.16576 2.56585 5.32473 2.68306 5.44194C2.80027 5.55915 2.95924 5.625 3.125 5.625ZM16.875 14.375H3.125C2.95924 14.375 2.80027 14.4408 2.68306 14.5581C2.56585 14.6753 2.5 14.8342 2.5 15C2.5 15.1658 2.56585 15.3247 2.68306 15.4419C2.80027 15.5592 2.95924 15.625 3.125 15.625H16.875C17.0408 15.625 17.1997 15.5592 17.3169 15.4419C17.4342 15.3247 17.5 15.1658 17.5 15C17.5 14.8342 17.4342 14.6753 17.3169 14.5581C17.1997 14.4408 17.0408 14.375 16.875 14.375Z"
                                fill="#4D4E4F"
                              />
                            </svg>
                          </div>
                          <div className="toolbar-label">Categories</div>
                        </a>
                      </div>
                      <div className="toolbar-item">
                        <a href="#search" data-bs-toggle="modal">
                          <div className="toolbar-icon">
                            <svg
                              className="icon"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.9419 17.058L14.0302 13.1471C15.1639 11.7859 15.7293 10.04 15.6086 8.27263C15.488 6.50524 14.6906 4.85241 13.3823 3.65797C12.074 2.46353 10.3557 1.81944 8.58462 1.85969C6.81357 1.89994 5.12622 2.62143 3.87358 3.87407C2.62094 5.12671 1.89945 6.81406 1.8592 8.5851C1.81895 10.3561 2.46304 12.0745 3.65748 13.3828C4.85192 14.691 6.50475 15.4884 8.27214 15.6091C10.0395 15.7298 11.7854 15.1644 13.1466 14.0306L17.0575 17.9424C17.1156 18.0004 17.1845 18.0465 17.2604 18.0779C17.3363 18.1094 17.4176 18.1255 17.4997 18.1255C17.5818 18.1255 17.6631 18.1094 17.739 18.0779C17.8149 18.0465 17.8838 18.0004 17.9419 17.9424C17.9999 17.8843 18.046 17.8154 18.0774 17.7395C18.1089 17.6636 18.125 17.5823 18.125 17.5002C18.125 17.4181 18.1089 17.3367 18.0774 17.2609C18.046 17.185 17.9999 17.1161 17.9419 17.058ZM3.12469 8.75018C3.12469 7.63766 3.45459 6.55012 4.07267 5.6251C4.69076 4.70007 5.56926 3.9791 6.5971 3.55336C7.62493 3.12761 8.75593 3.01622 9.84707 3.23326C10.9382 3.4503 11.9405 3.98603 12.7272 4.7727C13.5138 5.55937 14.0496 6.56165 14.2666 7.6528C14.4837 8.74394 14.3723 9.87494 13.9465 10.9028C13.5208 11.9306 12.7998 12.8091 11.8748 13.4272C10.9497 14.0453 9.86221 14.3752 8.74969 14.3752C7.25836 14.3735 5.82858 13.7804 4.77404 12.7258C3.71951 11.6713 3.12634 10.2415 3.12469 8.75018Z"
                                fill="#4D4E4F"
                              />
                            </svg>
                          </div>
                          <div className="toolbar-label">Search</div>
                        </a>
                      </div>
                      <div className="toolbar-item">
                        <a href="#wishlist" data-bs-toggle="modal">
                          <div className="toolbar-icon">
                            <svg
                              className="icon"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.4215 4.45326C16.5724 3.60627 15.4225 3.12997 14.2231 3.1285C13.0238 3.12704 11.8727 3.60054 11.0215 4.44545L9.99965 5.39467L8.97699 4.44232C8.12602 3.59373 6.9728 3.11795 5.77103 3.11963C4.56926 3.12132 3.41738 3.60034 2.56879 4.45131C1.7202 5.30228 1.24441 6.4555 1.2461 7.65727C1.24778 8.85904 1.7268 10.0109 2.57777 10.8595L9.55824 17.9423C9.6164 18.0014 9.68572 18.0483 9.76217 18.0803C9.83862 18.1123 9.92067 18.1288 10.0036 18.1288C10.0864 18.1288 10.1685 18.1123 10.2449 18.0803C10.3214 18.0483 10.3907 18.0014 10.4489 17.9423L17.4215 10.8595C18.2707 10.0098 18.7477 8.85768 18.7477 7.65639C18.7477 6.45509 18.2707 5.30296 17.4215 4.45326ZM16.5348 9.98139L9.99965 16.6095L3.46059 9.97514C2.8452 9.35975 2.49948 8.52511 2.49948 7.65482C2.49948 6.78454 2.8452 5.9499 3.46059 5.33451C4.07597 4.71913 4.91061 4.37341 5.7809 4.37341C6.65118 4.37341 7.48583 4.71913 8.10121 5.33451L8.11684 5.35014L9.57387 6.7056C9.68953 6.81324 9.84166 6.87307 9.99965 6.87307C10.1576 6.87307 10.3098 6.81324 10.4254 6.7056L11.8825 5.35014L11.8981 5.33451C12.5139 4.71954 13.3488 4.37438 14.219 4.37497C15.0893 4.37555 15.9237 4.72184 16.5387 5.33764C17.1537 5.95344 17.4988 6.78831 17.4983 7.6586C17.4977 8.52888 17.1514 9.36329 16.5356 9.97826L16.5348 9.98139Z"
                                fill="#4D4E4F"
                              />
                            </svg>
                            <div className="toolbar-count">1</div>
                          </div>
                          <div className="toolbar-label">Wishlist</div>
                        </a>
                      </div>
                      <div className="toolbar-item">
                        <a href="#shoppingCart" data-bs-toggle="modal">
                          <div className="toolbar-icon">
                            <svg
                              className="icon"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.75 8.23389V4.48389C13.75 3.48932 13.3549 2.5355 12.6517 1.83224C11.9484 1.12897 10.9946 0.733887 10 0.733887C9.00544 0.733887 8.05161 1.12897 7.34835 1.83224C6.64509 2.5355 6.25 3.48932 6.25 4.48389V8.23389M3.4375 6.35889H16.5625L17.5 17.6089H2.5L3.4375 6.35889Z"
                                stroke="#4D4E4F"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="toolbar-label">Cart</div>
                        </a>
                      </div>
                    </div>
                    {/* <!-- /toolbar-bottom --> */}
                  </div>

                  {/* <!-- auto popup  --> */}
                  <div className="modal modalCentered fade auto-popup modal-newleter">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-top">
                          <img
                            className="lazyload"
                            data-src="images/section/newsletter.jpg"
                            src="images/section/newsletter.jpg"
                            alt="images"
                          />
                          <span
                            className="icon icon-close btn-hide-popup"
                            data-bs-dismiss="modal"
                          ></span>
                        </div>
                        <div className="modal-bottom text-center">
                          <p className="text-btn-uppercase fw-4 font-2">
                            Subscribe To Our Newletter!
                          </p>
                          <h5>
                            Receive 10% OFF your next order, exclusive offers &
                            more!
                          </h5>
                          <div className="sib-form">
                            <div
                              id="sib-form-container"
                              className="sib-form-container"
                            >
                              <div
                                id="error-message"
                                className="sib-form-message-panel"
                              >
                                <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                                  <span className="sib-form-message-panel__inner-text">
                                    Your subscription could not be saved. Please
                                    try again.
                                  </span>
                                </div>
                              </div>
                              <div
                                id="success-message"
                                className="sib-form-message-panel"
                              >
                                <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                                  <span className="sib-form-message-panel__inner-text">
                                    Your subscription has been successful.
                                  </span>
                                </div>
                              </div>
                              <div
                                id="sib-container"
                                className="sib-container--large sib-container--vertical"
                              >
                                <form id="sib-form" data-type="subscription">
                                  <div>
                                    <div className="sib-form-block">
                                      <p></p>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="sib-form-block">
                                      <div className="sib-text-form-block">
                                        <p></p>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="sib-input sib-form-block">
                                      <div className="form__entry entry_block">
                                        <div className="form__label-row ">
                                          <label
                                            className="entry__label"
                                            htmlFor="EMAIL"
                                          ></label>
                                          <div className="entry__field">
                                            <input
                                              className="input "
                                              type="text"
                                              id="EMAIL"
                                              name="EMAIL"
                                              autoComplete="off"
                                              placeholder="Enter Your Email..."
                                              data-required="true"
                                              required
                                            />
                                          </div>
                                        </div>
                                        <label className="entry__error entry__error--primary"></label>
                                        <label className="entry__specification"></label>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="sib-optin sib-form-block">
                                      <div className="form__entry entry_mcq">
                                        <div className="form__label-row ">
                                          <div className="entry__choice">
                                            <label>
                                              <input
                                                type="checkbox"
                                                className="input_replaced"
                                                // value="1"
                                                id="OPT_IN"
                                                name="OPT_IN"
                                              />
                                              <span className="checkbox checkbox_tick_positive"></span>
                                              <span>
                                                <p></p>
                                              </span>
                                            </label>
                                          </div>
                                        </div>
                                        <label className="entry__error entry__error--primary"></label>
                                        <label className="entry__specification"></label>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="sib-form-block">
                                      <button
                                        className="sib-form-block__button sib-form-block__button-with-loader btn-style-2 radius-12 w-100 justify-content-center"
                                        form="sib-form"
                                        type="submit"
                                      >
                                        <svg
                                          className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                                          viewBox="0 0 512 512"
                                        >
                                          <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                                        </svg>
                                        <span className="text text-btn-uppercase">
                                          SUBSCRIBE
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <input
                                    type="text"
                                    name="email_address_check"
                                    // value=""
                                    className="input--hidden"
                                  />
                                  <input
                                    type="hidden"
                                    name="locale" /*value="en"*/
                                  />
                                </form>
                              </div>
                            </div>
                          </div>
                          <ul className="tf-social-icon style-default justify-content-center">
                            <li>
                              <a href="##" className="social-facebook">
                                <i className="icon icon-fb"></i>
                              </a>
                            </li>
                            <li>
                              <a href="##" className="social-twiter">
                                <i className="icon icon-x"></i>
                              </a>
                            </li>
                            <li>
                              <a href="##" className="social-instagram">
                                <i className="icon icon-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="##" className="social-pinterest">
                                <i className="icon icon-pinterest"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /auto popup  --> */}

                  {/* <!-- search --> */}
                  <div className="modal fade modal-search" id="search">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5>Search</h5>
                          <span
                            className="icon-close icon-close-popup"
                            data-bs-dismiss="modal"
                          ></span>
                        </div>
                        <form className="form-search">
                          <fieldset className="text">
                            <input
                              type="text"
                              placeholder="Searching..."
                              className=""
                              name="text"
                              tabIndex="0"
                              //   value=""
                              aria-required="true"
                              required=""
                            />
                          </fieldset>
                          <button className="" type="submit">
                            <svg
                              className="icon"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                                stroke="#181818"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M21.35 21.0004L17 16.6504"
                                stroke="#181818"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </button>
                        </form>
                        <div>
                          <h5 className="mb_16">Feature keywords Today</h5>
                          <ul className="list-tags">
                            <li>
                              <a href="#" className="radius-60 link">
                                Dresses
                              </a>
                            </li>
                            <li>
                              <a href="#" className="radius-60 link">
                                Dresses women
                              </a>
                            </li>
                            <li>
                              <a href="#" className="radius-60 link">
                                Dresses midi
                              </a>
                            </li>
                            <li>
                              <a href="#" className="radius-60 link">
                                Dress summer
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="mb_16">Recently viewed products</h6>
                          <div
                            className="tf-grid-layout tf-col-2 lg-col-3 xl-col-4 loadmore-item"
                            data-display="4"
                            data-count="4"
                          >
                            <div className="fl-item card-product card-product-size">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-inner.php"
                                  className="product-img"
                                >
                                  <img
                                    className="lazyload img-product"
                                    data-src="images/products/womens/women-8.jpg"
                                    src="images/products/womens/women-8.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="lazyload img-hover"
                                    data-src="images/products/womens/women-9.jpg"
                                    src="images/products/womens/women-9.jpg"
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
                                <a
                                  href="product-inner.php"
                                  className="title link"
                                >
                                  Ribbed cotton-blend top
                                </a>
                                <span className="price current-price">
                                  $39.99
                                </span>
                              </div>
                            </div>
                            <div className="fl-item card-product">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-inner.php"
                                  className="product-img"
                                >
                                  <img
                                    className="lazyload img-product"
                                    data-src="images/products/womens/women-171.jpg"
                                    src="images/products/womens/women-171.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="lazyload img-hover"
                                    data-src="images/products/womens/women-172.jpg"
                                    src="images/products/womens/women-172.jpg"
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
                                    href="#quickAdd"
                                    data-bs-toggle="modal"
                                    className="btn-main-product"
                                  >
                                    Quick Add
                                  </a>
                                </div>
                              </div>
                              <div className="card-product-info">
                                <a
                                  href="product-inner.php"
                                  className="title link"
                                >
                                  Faux-leather trousers
                                </a>
                                <span className="price current-price">
                                  $79.99
                                </span>
                                <ul className="list-color-product">
                                  <li className="list-color-item color-swatch active">
                                    <span className="d-none text-capitalize color-filter">
                                      Orange
                                    </span>
                                    <span className="swatch-value bg-orange"></span>
                                    <img
                                      className="lazyload"
                                      data-src="images/products/womens/women-171.jpg"
                                      src="images/products/womens/women-171.jpg"
                                      alt="image-product"
                                    />
                                  </li>
                                  <li className="list-color-item color-swatch">
                                    <span className="d-none text-capitalize color-filter">
                                      Pink
                                    </span>
                                    <span className="swatch-value bg-dark-pink"></span>
                                    <img
                                      className="lazyload"
                                      data-src="images/products/womens/women-172.jpg"
                                      src="images/products/womens/women-172.jpg"
                                      alt="image-product"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="fl-item card-product card-product-size">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-inner.php"
                                  className="product-img"
                                >
                                  <img
                                    className="lazyload img-product"
                                    data-src="images/products/womens/women-83.jpg"
                                    src="images/products/womens/women-83.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="lazyload img-hover"
                                    data-src="images/products/womens/women-84.jpg"
                                    src="images/products/womens/women-84.jpg"
                                    alt="image-product"
                                  />
                                </a>
                                <div className="on-sale-wrap">
                                  <span className="on-sale-item">-25%</span>
                                </div>
                                <div className="variant-wrap size-list">
                                  <ul className="variant-box">
                                    <li className="size-item">S</li>
                                    <li className="size-item">M</li>
                                    <li className="size-item">L</li>
                                    <li className="size-item">XL</li>
                                  </ul>
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
                                <a
                                  href="product-inner.php"
                                  className="title link"
                                >
                                  Belt wrap dress
                                </a>
                                <div className="price">
                                  <span className="old-price">$98.00</span>
                                  <span className="current-price">$129.99</span>
                                </div>
                                <ul className="list-color-product">
                                  <li className="list-color-item color-swatch active">
                                    <span className="d-none text-capitalize color-filter">
                                      Green
                                    </span>
                                    <span className="swatch-value bg-light-green"></span>
                                    <img
                                      className="lazyload"
                                      data-src="images/products/womens/women-83.jpg"
                                      src="images/products/womens/women-83.jpg"
                                      alt="image-product"
                                    />
                                  </li>
                                  <li className="list-color-item color-swatch">
                                    <span className="d-none text-capitalize color-filter">
                                      Grey
                                    </span>
                                    <span className="swatch-value bg-grey"></span>
                                    <img
                                      className="lazyload"
                                      data-src="images/products/womens/women-94.jpg"
                                      src="images/products/womens/women-94.jpg"
                                      alt="image-product"
                                    />
                                  </li>
                                  <li className="list-color-item color-swatch line">
                                    <span className="d-none text-capitalize color-filter">
                                      White
                                    </span>
                                    <span className="swatch-value bg-white"></span>
                                    <img
                                      className="lazyload"
                                      data-src="images/products/womens/women-87.jpg"
                                      src="images/products/womens/women-87.jpg"
                                      alt="image-product"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="fl-item card-product card-product-size">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-inner.php"
                                  className="product-img"
                                >
                                  <img
                                    className="lazyload img-product"
                                    data-src="images/products/womens/women-102.jpg"
                                    src="images/products/womens/women-102.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="lazyload img-hover"
                                    data-src="images/products/womens/women-103.jpg"
                                    src="images/products/womens/women-103.jpg"
                                    alt="image-product"
                                  />
                                </a>
                                <div className="on-sale-wrap">
                                  <span className="on-sale-item">-25%</span>
                                </div>
                                <div className="variant-wrap size-list">
                                  <ul className="variant-box">
                                    <li className="size-item">S</li>
                                    <li className="size-item">M</li>
                                    <li className="size-item">L</li>
                                    <li className="size-item">XL</li>
                                  </ul>
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
                                <a
                                  href="product-inner.php"
                                  className="title link"
                                >
                                  Double-button trench coat
                                </a>
                                <div className="price">
                                  <span className="old-price">$98.00</span>
                                  <span className="current-price">$219.99</span>
                                </div>
                                <ul className="list-color-product">
                                  <li className="list-color-item color-swatch active">
                                    <span className="d-none text-capitalize color-filter">
                                      Grey
                                    </span>
                                    <span className="swatch-value bg-grey-2"></span>
                                    <img
                                      className="lazyload"
                                      data-src="images/products/womens/women-102.jpg"
                                      src="images/products/womens/women-102.jpg"
                                      alt="image-product"
                                    />
                                  </li>
                                  <li className="list-color-item color-swatch">
                                    <span className="d-none text-capitalize color-filter">
                                      Orange
                                    </span>
                                    <span className="swatch-value bg-light-orange"></span>
                                    <img
                                      className="lazyload"
                                      data-src="images/products/womens/women-111.jpg"
                                      src="images/products/womens/women-111.jpg"
                                      alt="image-product"
                                    />
                                  </li>
                                  <li className="list-color-item color-swatch line">
                                    <span className="d-none text-capitalize color-filter">
                                      White
                                    </span>
                                    <span className="swatch-value bg-white"></span>
                                    <img
                                      className="lazyload"
                                      data-src="images/products/womens/women-104.jpg"
                                      src="images/products/womens/women-104.jpg"
                                      alt="image-product"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="fl-item card-product">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-inner.php"
                                  className="product-img"
                                >
                                  <img
                                    className="lazyload img-product"
                                    data-src="images/products/mens/men-11.jpg"
                                    src="images/products/mens/men-11.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="lazyload img-hover"
                                    data-src="images/products/mens/men-12.jpg"
                                    src="images/products/mens/men-12.jpg"
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
                                <a
                                  href="product-inner.php"
                                  className="title link"
                                >
                                  V-neck cotton T-shirt
                                </a>
                                <span className="price current-price">
                                  $59.99
                                </span>
                              </div>
                            </div>
                            <div className="fl-item card-product">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-inner.php"
                                  className="product-img"
                                >
                                  <img
                                    className="lazyload img-product"
                                    data-src="images/products/mens/men-13.jpg"
                                    src="images/products/mens/men-13.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="lazyload img-hover"
                                    data-src="images/products/mens/men-14.jpg"
                                    src="images/products/mens/men-14.jpg"
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
                                <a
                                  href="product-inner.php"
                                  className="title link"
                                >
                                  Polarized sunglasses
                                </a>
                                <div className="price">
                                  <span className="old-price">$98.00</span>{" "}
                                  <span className="current-price">$79.99</span>
                                </div>
                                <ul className="list-color-product">
                                  <li className="list-color-item color-swatch active">
                                    <span className="d-none text-capitalize color-filter">
                                      Beige
                                    </span>
                                    <span className="swatch-value bg-beige"></span>
                                    <img
                                      className="lazyload"
                                      data-src="images/products/mens/men-13.jpg"
                                      src="images/products/mens/men-13.jpg"
                                      alt="image-product"
                                    />
                                  </li>
                                  <li className="list-color-item color-swatch">
                                    <span className="d-none text-capitalize color-filter">
                                      Light Blue
                                    </span>
                                    <span className="swatch-value bg-light-blue-2"></span>
                                    <img
                                      className="lazyload"
                                      data-src="images/products/mens/men-12.jpg"
                                      src="images/products/mens/men-12.jpg"
                                      alt="image-product"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="fl-item card-product card-product-size">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-inner.php"
                                  className="product-img"
                                >
                                  <img
                                    className="lazyload img-product"
                                    data-src="images/products/mens/men-7.jpg"
                                    src="images/products/mens/men-7.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="lazyload img-hover"
                                    data-src="images/products/mens/men-8.jpg"
                                    src="images/products/mens/men-8.jpg"
                                    alt="image-product"
                                  />
                                </a>
                                <div className="on-sale-wrap">
                                  <span className="on-sale-item">-25%</span>
                                </div>
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
                                <a
                                  href="product-inner.php"
                                  className="title link"
                                >
                                  Ramie shirt with pockets{" "}
                                </a>
                                <div className="price">
                                  <span className="old-price">$98.00</span>{" "}
                                  <span className="current-price">$89.99</span>
                                </div>
                                <ul className="list-color-product">
                                  <li className="list-color-item color-swatch active line">
                                    <span className="d-none text-capitalize color-filter">
                                      Green
                                    </span>
                                    <span className="swatch-value bg-light-green"></span>
                                    <img
                                      className="lazyload"
                                      data-src="images/products/mens/men-7.jpg"
                                      src="images/products/mens/men-7.jpg"
                                      alt="image-product"
                                    />
                                  </li>
                                  <li className="list-color-item color-swatch">
                                    <span className="d-none text-capitalize color-filter">
                                      Grey
                                    </span>
                                    <span className="swatch-value bg-light-grey"></span>
                                    <img
                                      className="lazyload"
                                      data-src="images/products/mens/men-11.jpg"
                                      src="images/products/mens/men-11.jpg"
                                      alt="image-product"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="fl-item card-product">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-inner.php"
                                  className="product-img"
                                >
                                  <img
                                    className="lazyload img-product"
                                    data-src="images/products/mens/men-1.jpg"
                                    src="images/products/mens/men-1.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="lazyload img-hover"
                                    data-src="images/products/mens/men-3.jpg"
                                    src="images/products/mens/men-3.jpg"
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
                                <a
                                  href="product-inner.php"
                                  className="title link"
                                >
                                  Ribbed cotton-blend top
                                </a>
                                <span className="price current-price">
                                  $69.99
                                </span>
                                <ul className="list-color-product">
                                  <li className="list-color-item color-swatch active line">
                                    <span className="d-none text-capitalize color-filter">
                                      Light Blue
                                    </span>
                                    <span className="swatch-value bg-light-blue"></span>
                                    <img
                                      className="lazyload"
                                      data-src="images/products/mens/men-1.jpg"
                                      src="images/products/mens/men-1.jpg"
                                      alt="image-product"
                                    />
                                  </li>
                                  <li className="list-color-item color-swatch">
                                    <span className="d-none text-capitalize color-filter">
                                      Pink
                                    </span>
                                    <span className="swatch-value bg-light-pink"></span>
                                    <img
                                      className="lazyload"
                                      data-src="images/products/mens/men-13.jpg"
                                      src="images/products/mens/men-13.jpg"
                                      alt="image-product"
                                    />
                                  </li>
                                  <li className="list-color-item color-swatch">
                                    <span className="d-none text-capitalize color-filter">
                                      Grey
                                    </span>
                                    <span className="swatch-value bg-dark-grey-2"></span>
                                    <img
                                      className="lazyload"
                                      data-src="images/products/mens/men-9.jpg"
                                      src="images/products/mens/men-9.jpg"
                                      alt="image-product"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="fl-item card-product card-product-size">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-inner.php"
                                  className="product-img"
                                >
                                  <img
                                    className="lazyload img-product"
                                    data-src="images/products/womens/women-37.jpg"
                                    src="images/products/womens/women-37.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="lazyload img-hover"
                                    data-src="images/products/womens/women-38.jpg"
                                    src="images/products/womens/women-38.jpg"
                                    alt="image-product"
                                  />
                                </a>
                                <div className="variant-wrap size-list">
                                  <ul className="variant-box">
                                    <li className="size-item">XS</li>
                                    <li className="size-item">L</li>
                                    <li className="size-item">XL</li>
                                    <li className="size-item">2XL</li>
                                    <li className="size-item">3XL</li>
                                  </ul>
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
                                <a
                                  href="product-inner.php"
                                  className="title link"
                                >
                                  Buttoned cotton shirt
                                </a>
                                <span className="price current-price">
                                  $89.99
                                </span>
                                <ul className="list-color-product">
                                  <li className="list-color-item color-swatch active">
                                    <span className="d-none text-capitalize color-filter">
                                      Light Blue
                                    </span>
                                    <span className="swatch-value bg-light-blue"></span>
                                    <img
                                      className="lazyload"
                                      data-src="images/products/womens/women-37.jpg"
                                      src="images/products/womens/women-37.jpg"
                                      alt="image-product"
                                    />
                                  </li>
                                  <li className="list-color-item color-swatch line">
                                    <span className="d-none text-capitalize color-filter">
                                      White
                                    </span>
                                    <span className="swatch-value bg-white"></span>
                                    <img
                                      className="lazyload"
                                      data-src="images/products/womens/women-41.jpg"
                                      src="images/products/womens/women-41.jpg"
                                      alt="image-product"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="fl-item card-product card-product-size">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-inner.php"
                                  className="product-img"
                                >
                                  <img
                                    className="lazyload img-product"
                                    data-src="images/products/mens/men-15.jpg"
                                    src="images/products/mens/men-15.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="lazyload img-hover"
                                    data-src="images/products/mens/men-16.jpg"
                                    src="images/products/mens/men-16.jpg"
                                    alt="image-product"
                                  />
                                </a>
                                <div className="variant-wrap size-list">
                                  <ul className="variant-box">
                                    <li className="size-item">XS</li>
                                    <li className="size-item">M</li>
                                    <li className="size-item">L</li>
                                    <li className="size-item">XL</li>
                                    <li className="size-item">2XL</li>
                                    <li className="size-item">3XL</li>
                                  </ul>
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
                                <a
                                  href="product-inner.php"
                                  className="title link"
                                >
                                  Chest pocket cotton over shirt
                                </a>
                                <span className="price current-price">
                                  $99.25
                                </span>
                                <ul className="list-color-product">
                                  <li className="list-color-item color-swatch active">
                                    <span className="d-none text-capitalize color-filter">
                                      Beige
                                    </span>
                                    <span className="swatch-value bg-beige"></span>
                                    <img
                                      className="lazyload"
                                      data-src="images/products/mens/men-15.jpg"
                                      src="images/products/mens/men-15.jpg"
                                      alt="image-product"
                                    />
                                  </li>
                                  <li className="list-color-item color-swatch">
                                    <span className="d-none text-capitalize color-filter">
                                      Black
                                    </span>
                                    <span className="swatch-value bg-main"></span>
                                    <img
                                      className="lazyload"
                                      data-src="images/products/mens/men-18.jpg"
                                      src="images/products/mens/men-18.jpg"
                                      alt="image-product"
                                    />
                                  </li>
                                  <li className="list-color-item color-swatch">
                                    <span className="d-none text-capitalize color-filter">
                                      Dark Blue
                                    </span>
                                    <span className="swatch-value bg-dark-blue"></span>
                                    <img
                                      className="lazyload"
                                      data-src="images/products/mens/men-17.jpg"
                                      src="images/products/mens/men-17.jpg"
                                      alt="image-product"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="fl-item card-product">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-inner.php"
                                  className="product-img"
                                >
                                  <img
                                    className="lazyload img-product"
                                    data-src="images/products/womens/women-167.jpg"
                                    src="images/products/womens/women-167.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="lazyload img-hover"
                                    data-src="images/products/womens/women-168.jpg"
                                    src="images/products/womens/women-168.jpg"
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
                                <a
                                  href="product-inner.php"
                                  className="title link"
                                >
                                  Cotton shopper bag
                                </a>
                                <span className="price current-price">
                                  $199.25
                                </span>
                                <ul className="list-color-product">
                                  <li className="list-color-item color-swatch active line">
                                    <span className="d-none text-capitalize color-filter">
                                      White
                                    </span>
                                    <span className="swatch-value bg-white"></span>
                                    <img
                                      className="lazyload"
                                      data-src="images/products/womens/women-167.jpg"
                                      src="images/products/womens/women-167.jpg"
                                      alt="image-product"
                                    />
                                  </li>
                                  <li className="list-color-item color-swatch">
                                    <span className="d-none text-capitalize color-filter">
                                      Beige
                                    </span>
                                    <span className="swatch-value bg-beige"></span>
                                    <img
                                      className="lazyload"
                                      data-src="images/products/womens/women-162.jpg"
                                      src="images/products/womens/women-162.jpg"
                                      alt="image-product"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="fl-item card-product card-product-size">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-inner.php"
                                  className="product-img"
                                >
                                  <img
                                    className="lazyload img-product"
                                    data-src="images/products/mens/men-19.jpg"
                                    src="images/products/mens/men-19.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="lazyload img-hover"
                                    data-src="images/products/mens/men-20.jpg"
                                    src="images/products/mens/men-20.jpg"
                                    alt="image-product"
                                  />
                                </a>
                                <div className="variant-wrap size-list">
                                  <ul className="variant-box">
                                    <li className="size-item">XS</li>
                                    <li className="size-item">M</li>
                                    <li className="size-item">L</li>
                                    <li className="size-item">XL</li>
                                    <li className="size-item">2XL</li>
                                    <li className="size-item">3XL</li>
                                  </ul>
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
                                <a
                                  href="product-inner.php"
                                  className="title link"
                                >
                                  Chest pocket cotton over shirt
                                </a>
                                <span className="price current-price">
                                  $250.00
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Load Item --> */}
                        <div className="wd-load view-more-button text-center">
                          <button className="tf-loading btn-loadmore tf-btn btn-reset">
                            <span className="text text-btn text-btn-uppercase">
                              Load more
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /search --> */}

                  {/* <!-- mobile menu --> */}
                  <div
                    className="offcanvas offcanvas-start canvas-mb"
                    id="mobileMenu"
                  >
                    <span
                      className="icon-close icon-close-popup"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></span>
                    <div className="mb-canvas-content">
                      <div className="mb-body">
                        <div className="mb-content-top">
                          <form className="form-search">
                            <fieldset className="text">
                              <input
                                type="text"
                                placeholder="What are you looking for?"
                                className=""
                                name="text"
                                tabIndex="0"
                                // value=""
                                aria-required="true"
                                required=""
                              />
                            </fieldset>
                            <button className="" type="submit">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                                  stroke="#181818"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M20.9984 20.9999L16.6484 16.6499"
                                  stroke="#181818"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          </form>
                          <ul
                            className="nav-ul-mb"
                            id="wrapper-menu-navigation"
                          >
                            <li className="nav-mb-item active">
                              <h2 style={{ fontSize: "17px", fontWeight: 600 }}>
                                <a href="index.php">Home</a>
                              </h2>
                            </li>
                            <li className="nav-mb-item active">
                              <h2 style={{ fontSize: "17px", fontWeight: 600 }}>
                                <a href="about.php">About</a>
                              </h2>
                            </li>
                            <li className="nav-mb-item">
                              <a
                                href="#dropdown-menu-two"
                                className="collapsed mb-menu-link"
                                data-bs-toggle="collapse"
                                aria-expanded="true"
                                aria-controls="dropdown-menu-two"
                              >
                                <span>Shop</span>
                                <span className="btn-open-sub"></span>
                              </a>
                              <div id="dropdown-menu-two" className="collapse">
                                <ul className="sub-nav-menu">
                                  <li>
                                    <a
                                      href="shop-collection.php"
                                      className="sub-nav-link"
                                    >
                                      Product Category
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="product-inner.php"
                                      className="sub-nav-link"
                                    >
                                      Product Inner
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="nav-mb-item">
                              <a
                                href="#dropdown-menu-four"
                                className="collapsed mb-menu-link"
                                data-bs-toggle="collapse"
                                aria-expanded="true"
                                aria-controls="dropdown-menu-four"
                              >
                                <span>Blogs</span>
                                <span className="btn-open-sub"></span>
                              </a>
                              <div id="dropdown-menu-four" className="collapse">
                                <ul className="sub-nav-menu">
                                  <li>
                                    <a
                                      href="blog-detail.php"
                                      className="sub-nav-link"
                                    >
                                      Blog Detail
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="nav-mb-item active">
                              <h2 style={{ fontSize: "17px", fontWeight: 600 }}>
                                <a href="contact.php">Contact</a>
                              </h2>
                            </li>
                          </ul>
                        </div>
                        <div className="mb-other-content">
                          <div className="group-icon">
                            <a href="wish-list.php" className="site-nav-icon">
                              <svg
                                className="icon"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987V4.60987Z"
                                  stroke="#181818"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              Wishlist
                            </a>

                            <a href="login.php" className="site-nav-icon">
                              <svg
                                className="icon"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                                  stroke="#181818"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                                  stroke="#181818"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              Login
                            </a>
                          </div>
                          <div className="mb-notice">
                            <a href="contact.php" className="text-need">
                              Need Help?
                            </a>
                          </div>
                          <div className="mb-contact">
                            <p className="text-caption-1">
                              549 Oak St.Crystal Lake, IL 60014
                            </p>
                            <a
                              href="contact.php"
                              className="tf-btn-default text-btn-uppercase"
                            >
                              GET DIRECTION<i className="icon-arrowUpRight"></i>
                            </a>
                          </div>
                          <ul className="mb-info">
                            <li>
                              <i className="icon icon-mail"></i>
                              <p>ecommerce@domain.com</p>
                            </li>
                            <li>
                              <i className="icon icon-phone"></i>
                              <p>123-456-7890</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mb-bottom">
                        <div className="bottom-bar-language">
                          <div className="tf-currencies">
                            <select className="image-select center style-default type-currencies">
                              <option data-thumbnail="images/country/us.svg">
                                USD
                              </option>
                              <option data-thumbnail="images/country/vn.svg">
                                VND
                              </option>
                            </select>
                          </div>
                          <div className="tf-languages">
                            <select className="image-select center style-default type-languages">
                              <option>English</option>
                              <option>Vietnam</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /mobile menu --> */}
                  <InitModal />
                  {/* <!-- size-guide --> */}
                  <SizeGuide />
                  {/* <!-- /size-guide --> */}
                </QuickAddProvider>
              </QuickViewProvider>
            </CompareProvider>
          </WishlistProvider>
        </CartProvider>
        {/* </AuthProvidor> */}
      </CartModalProvider>
    </body>
  );
};

export default AdminLayout;
