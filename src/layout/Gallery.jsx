"use client";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Gallery = () => {
  return (
    <section>
      <div className="container">
        <div className="heading-section text-center">
          <h3 className="heading wow fadeInUp">Shop Instagram</h3>
          <p className="subheading text-secondary wow fadeInUp">
            Elevate your wardrobe with fresh finds today!
          </p>
        </div>
        <Swiper
          dir="ltr"
          modules={[Navigation, Pagination]}
          slidesPerView={2}
          spaceBetween={8}
          observer={true}
          observeParents={true}
          pagination={{
            el: ".sw-pagination-gallery",
            clickable: true,
          }}
          loop={true}
          slidesPerGroup={2}
          centeredSlides={false}
          speed={1000}
          navigation={{
            clickable: true,
            nextEl: ".nav-next-gallery",
            prevEl: ".nav-prev-gallery",
          }}
          breakpoints={{
            575: {
              slidesPerView: 2,
              spaceBetween: 8,
              slidesPerGroup: 2,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
              slidesPerGroup: 3,
              centeredSlides: false,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 10,
              slidesPerGroup: 1,
              centeredSlides: false,
            },
          }}
        >
          <SwiperSlide className="swiper-wrapper">
            <div
              className="gallery-item hover-overlay hover-img wow fadeInUp"
              data-wow-delay=".1s"
            >
              <div className="img-style">
                <img
                  className="lazyload img-hover"
                  data-src="images/gallery/gallery-1.jpg"
                  src="images/gallery/gallery-1.jpg"
                  alt="image-gallery"
                />
              </div>
              <a href="product-inner.php" className="box-icon hover-tooltip">
                <span className="icon icon-eye"></span>{" "}
                <span className="tooltip">View Product</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="gallery-item hover-overlay hover-img wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="img-style">
                <img
                  className="lazyload img-hover"
                  data-src="images/gallery/gallery-2.jpg"
                  src="images/gallery/gallery-2.jpg"
                  alt="image-gallery"
                />
              </div>
              <a href="product-inner.php" className="box-icon hover-tooltip">
                <span className="icon icon-eye"></span>{" "}
                <span className="tooltip">View Product</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="gallery-item hover-overlay hover-img wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="img-style">
                <img
                  className="lazyload img-hover"
                  data-src="images/gallery/gallery-3.jpg"
                  src="images/gallery/gallery-3.jpg"
                  alt="image-gallery"
                />
              </div>
              <a href="product-inner.php" className="box-icon hover-tooltip">
                <span className="icon icon-eye"></span>{" "}
                <span className="tooltip">View Product</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="gallery-item hover-overlay hover-img wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="img-style">
                <img
                  className="lazyload img-hover"
                  data-src="images/gallery/gallery-4.jpg"
                  src="images/gallery/gallery-4.jpg"
                  alt="image-gallery"
                />
              </div>
              <a href="product-inner.php" className="box-icon hover-tooltip">
                <span className="icon icon-eye"></span>{" "}
                <span className="tooltip">View Product</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="gallery-item hover-overlay hover-img wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="img-style">
                <img
                  className="lazyload img-hover"
                  data-src="images/gallery/gallery-5.jpg"
                  src="images/gallery/gallery-5.jpg"
                  alt="image-gallery"
                />
              </div>
              <a href="product-inner.php" className="box-icon hover-tooltip">
                <span className="icon icon-eye"></span>{" "}
                <span className="tooltip">View Product</span>
              </a>
            </div>
          </SwiperSlide>
          <div className="sw-pagination-gallery sw-dots type-circle justify-content-center"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
