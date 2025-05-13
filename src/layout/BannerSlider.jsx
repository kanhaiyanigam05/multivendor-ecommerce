"use client";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const BannerSlider = () => {
  return (
    <section className="tf-slideshow slider-default slider-effect-fade">
      <Swiper
        dir="ltr"
        modules={[Pagination, Navigation]}
        autoplay={{
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={1}
        loop={true}
        spaceBetween={0}
        speed={1000}
        observer={true}
        observeParents={true}
        pagination={{
          el: ".sw-pagination-slider",
          clickable: true,
        }}
        navigation={{
          clickable: true,
          nextEl: ".navigation-next-slider",
          prevEl: ".navigation-prev-slider",
        }}
        centeredSlides={false}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false,
          },
          1200: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false,
          },
        }}
      >
        <SwiperSlide>
          <div className="wrap-slider">
            <img
              src="images/slider/slider-decor1.jpg"
              alt="fashion-slideshow"
            />
            <div className="box-content">
              <div className="content-slider">
                <div className="box-title-slider">
                  <p className="fade-item fade-item-1 subheading text-btn-uppercase text-white">
                    BIKINIS & SWIMSUITS
                  </p>
                  <div className="fade-item fade-item-2 heading text-white title-display">
                    Find Your <br /> Signature Style
                  </div>
                </div>
                <div className="fade-item fade-item-3 box-btn-slider">
                  <a href="shop.php" className="tf-btn btn-fill btn-white">
                    <span className="text">Explore Collection</span>
                    <i className="icon icon-arrowUpRight"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrap-slider">
            <img
              src="images/slider/slider-decor1.jpg"
              alt="fashion-slideshow"
            />
            <div className="box-content">
              <div className="content-slider">
                <div className="box-title-slider">
                  <p className="fade-item fade-item-1 subheading text-btn-uppercase text-white">
                    BIKINIS & SWIMSUITS
                  </p>
                  <div className="fade-item fade-item-2 heading text-white title-display">
                    Find Your <br /> Signature Style
                  </div>
                </div>
                <div className="fade-item fade-item-3 box-btn-slider">
                  <a href="shop.php" className="tf-btn btn-fill btn-white">
                    <span className="text">Explore Collection</span>
                    <i className="icon icon-arrowUpRight"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrap-slider">
            <img
              src="images/slider/slider-decor1.jpg"
              alt="fashion-slideshow"
            />
            <div className="box-content">
              <div className="content-slider">
                <div className="box-title-slider">
                  <p className="fade-item fade-item-1 subheading text-btn-uppercase text-white">
                    BIKINIS & SWIMSUITS
                  </p>
                  <div className="fade-item fade-item-2 heading text-white title-display">
                    Find Your <br /> Signature Style
                  </div>
                </div>
                <div className="fade-item fade-item-3 box-btn-slider">
                  <a href="shop.php" className="tf-btn btn-fill btn-white">
                    <span className="text">Explore Collection</span>
                    <i className="icon icon-arrowUpRight"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="wrap-pagination">
          <div className="container">
            <div className="sw-dots sw-pagination-slider type-circle white-circle justify-content-center"></div>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default BannerSlider;
