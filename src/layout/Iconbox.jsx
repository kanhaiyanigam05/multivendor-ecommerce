"use client";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Iconbox = ({ varient = "index" }) => {
  return (
    <>
      <section
        className={`flat-spacing ${
          varient === "about" && "line-bottom-container"
        }`}
      >
        <div className="container">
          <Swiper
            dir="ltr"
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={15}
            speed={1000}
            pagination={{
              el: ".sw-pagination-iconbox",
              clickable: true,
            }}
            observer={true}
            observeParents={true}
            slidesPerGroup={1}
            navigation={{
              clickable: true,
              nextEl: ".nav-next-iconbox",
              prevEl: ".nav-prev-iconbox",
            }}
            breakpoints={{
              575: {
                slidesPerView: 2,
                spaceBetween: 30,
                slidesPerGroup: 2,
              },

              768: {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 3,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
                slidesPerGroup: 4,
              },
            }}
          >
            <SwiperSlide>
              <div
                className={`tf-icon-box ${varient === "about" && "style-2"}`}
              >
                <div className="icon-box">
                  <span className="icon icon-return"></span>
                </div>
                <div
                  className={`content ${varient === "index" && "text-center"}`}
                >
                  <h6>14-Day Returns</h6>
                  <p className="text-secondary">
                    Risk-free shopping with easy returns.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`tf-icon-box ${varient === "about" && "style-2"}`}
              >
                <div className="icon-box">
                  <span className="icon icon-shipping"></span>
                </div>
                <div
                  className={`content ${varient === "index" && "text-center"}`}
                >
                  <h6>Free Shipping</h6>
                  <p className="text-secondary">
                    No extra costs, just the price you see.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`tf-icon-box ${varient === "about" && "style-2"}`}
              >
                <div className="icon-box">
                  <span className="icon icon-headset"></span>
                </div>
                <div
                  className={`content ${varient === "index" && "text-center"}`}
                >
                  <h6>24/7 Support</h6>
                  <p className="text-secondary">
                    24/7 support, always here just for you
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`tf-icon-box ${varient === "about" && "style-2"}`}
              >
                <div className="icon-box">
                  <span className="icon icon-sealCheck"></span>
                </div>
                <div
                  className={`content ${varient === "index" && "text-center"}`}
                >
                  <h6>Member Discounts</h6>
                  <p className="text-secondary">
                    Special prices for our loyal customers.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <div className="sw-pagination-iconbox sw-dots type-circle justify-content-center"></div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Iconbox;
