"use client";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const DiscountCheckoutSwiper = () => {
  return (
    <Swiper
      dir="ltr"
      modules={[Pagination, Navigation]}
      slidesPerView={1.2}
      spaceBetween={15}
      speed={1000}
      pagination={{
        el: ".sw-pagination-categories",
        clickable: true,
      }}
      slidesPerGroup={1}
      observer={true}
      centeredSlides={false}
      observeParents={true}
      navigation={{
        clickable: true,
        nextEl: ".nav-next-categories",
        prevEl: ".nav-prev-categories",
      }}
      loop={true}
      breakpoints={{
        575: {
          slidesPerView: 2.5,
          spaceBetween: 15,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
        1200: {
          slidesPerView: 2.25,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
      }}
    >
      <SwiperSlide>
        <div className="box-discount active">
          <div className="discount-top">
            <div className="discount-off">
              <div className="text-caption-1">Discount</div>
              <span className="sale-off text-btn-uppercase">10% OFF</span>
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
      </SwiperSlide>
      <SwiperSlide>
        <div className="box-discount">
          <div className="discount-top">
            <div className="discount-off">
              <div className="text-caption-1">Discount1</div>
              <span className="sale-off text-btn-uppercase">10% OFF</span>
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
      </SwiperSlide>
      <SwiperSlide>
        <div className="box-discount">
          <div className="discount-top">
            <div className="discount-off">
              <div className="text-caption-1">Discount</div>
              <span className="sale-off text-btn-uppercase">10% OFF</span>
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
      </SwiperSlide>
    </Swiper>
  );
};

export default DiscountCheckoutSwiper;
