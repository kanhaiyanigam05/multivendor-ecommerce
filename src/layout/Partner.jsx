"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Partner = () => {
  return (
    <section className="flat-spacing-5 bg-surface">
      <Swiper
        className="sw-auto"
        modules={[Pagination, Navigation, Autoplay]}
        dir="ltr"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        spaceBetween={50}
        speed={1000}
        loop={true}
        observer={true}
        observeParents={true}
        pagination={{
          el: ".sw-pagination-partner",
          clickable: true,
        }}
        navigation={{
          clickable: true,
          nextEl: ".nav-next-partner",
          prevEl: ".nav-prev-partner",
        }}
        breakpoints={{
          575: {
            slidesPerView: "auto",
            spaceBetween: 50,
          },
          768: {
            slidesPerView: "auto",
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: "autp",
            spaceBetween: 74,
          },
        }}
      >
        <SwiperSlide>
          <a href="#" className="brand-item">
            <img src="images/brand/vanfaba.png" alt="brand" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="brand-item">
            <img src="images/brand/anvouge.png" alt="brand" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="brand-item">
            <img src="images/brand/carolin.png" alt="brand" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="brand-item">
            <img src="images/brand/shangxi.png" alt="brand" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="brand-item">
            <img src="images/brand/ecomife.png" alt="brand" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="brand-item">
            <img src="images/brand/cheryl.png" alt="brand" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="brand-item">
            <img src="images/brand/sopify.png" alt="brand" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="brand-item">
            <img src="images/brand/pennyw.png" alt="brand" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="brand-item">
            <img src="images/brand/panadoxn.png" alt="brand" />
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Partner;
