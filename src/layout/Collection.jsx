"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Collection = () => {
  const swiperConfig = {
    autoplay: false,
    slidesPerView: 2,
    loop: false,
    spaceBetween: 15,
    speed: 1000,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".sw-pagination-collection",
      clickable: true,
    },
    slidesPerGroup: 1,
    navigation: {
      clickable: true,
      nextEl: ".nav-next-collection",
      prevEl: ".nav-prev-collection",
    },
    centeredSlides: false,
    breakpoints: {
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
    },
    // Handle effect
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  };
  return (
    <section className="flat-spacing-2 pb_0">
      <div className="container">
        <div className="heading-section-2 wow fadeInUp">
          <h3>Categories you might like</h3>
          <a href="shop-collection.php" className="btn-line">
            View All Collection
          </a>
        </div>
        <div className="flat-collection-circle wow fadeInUp" data-wow-delay="0.1s">
          <Swiper
            dir="ltr"
            className="tf-sw-collection"
            modules={[Navigation]}
            spaceBetween={15}
            speed={1000}
            slidesPerView={3}
            observer={true}
            observeParents={true}
            navigation={{
              clickable: true,
              nextEl: ".nav-next-collection",
              prevEl: ".nav-prev-collection",
            }}
            breakpoints={{
              575: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
                slidesPerGroup: 1,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 20,
                slidesPerGroup: 1,
              },
            }}
          >
            {/* Your Swiper Slides Here */}
            <SwiperSlide>
              <div className="collection-circle hover-img">
                <a href="shop-collection.php" className="img-style">
                  <img className="lazyload" data-src="images/collections/collection-circle/cls-circle1.jpg" src="images/collections/collection-circle/cls-circle1.jpg" alt="collection-img" />
                </a>
                <div className="collection-content text-center">
                  <div>
                    <a href="shop-collection.php" className="cls-title">
                      <h6 className="text">$category name</h6>
                      <i className="icon icon-arrowUpRight"></i>
                    </a>
                  </div>
                  <div className="count text-secondary"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="collection-circle hover-img">
                <a href="shop-collection.php" className="img-style">
                  <img className="lazyload" data-src="images/collections/collection-circle/cls-circle1.jpg" src="images/collections/collection-circle/cls-circle1.jpg" alt="collection-img" />
                </a>
                <div className="collection-content text-center">
                  <div>
                    <a href="shop-collection.php" className="cls-title">
                      <h6 className="text">$category name</h6>
                      <i className="icon icon-arrowUpRight"></i>
                    </a>
                  </div>
                  <div className="count text-secondary"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="collection-circle hover-img">
                <a href="shop-collection.php" className="img-style">
                  <img className="lazyload" data-src="images/collections/collection-circle/cls-circle1.jpg" src="images/collections/collection-circle/cls-circle1.jpg" alt="collection-img" />
                </a>
                <div className="collection-content text-center">
                  <div>
                    <a href="shop-collection.php" className="cls-title">
                      <h6 className="text">$category name</h6>
                      <i className="icon icon-arrowUpRight"></i>
                    </a>
                  </div>
                  <div className="count text-secondary"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="collection-circle hover-img">
                <a href="shop-collection.php" className="img-style">
                  <img className="lazyload" data-src="images/collections/collection-circle/cls-circle1.jpg" src="images/collections/collection-circle/cls-circle1.jpg" alt="collection-img" />
                </a>
                <div className="collection-content text-center">
                  <div>
                    <a href="shop-collection.php" className="cls-title">
                      <h6 className="text">$category name</h6>
                      <i className="icon icon-arrowUpRight"></i>
                    </a>
                  </div>
                  <div className="count text-secondary"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="collection-circle hover-img">
                <a href="shop-collection.php" className="img-style">
                  <img className="lazyload" data-src="images/collections/collection-circle/cls-circle1.jpg" src="images/collections/collection-circle/cls-circle1.jpg" alt="collection-img" />
                </a>
                <div className="collection-content text-center">
                  <div>
                    <a href="shop-collection.php" className="cls-title">
                      <h6 className="text">$category name</h6>
                      <i className="icon icon-arrowUpRight"></i>
                    </a>
                  </div>
                  <div className="count text-secondary"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="collection-circle hover-img">
                <a href="shop-collection.php" className="img-style">
                  <img className="lazyload" data-src="images/collections/collection-circle/cls-circle1.jpg" src="images/collections/collection-circle/cls-circle1.jpg" alt="collection-img" />
                </a>
                <div className="collection-content text-center">
                  <div>
                    <a href="shop-collection.php" className="cls-title">
                      <h6 className="text">$category name</h6>
                      <i className="icon icon-arrowUpRight"></i>
                    </a>
                  </div>
                  <div className="count text-secondary"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="collection-circle hover-img">
                <a href="shop-collection.php" className="img-style">
                  <img className="lazyload" data-src="images/collections/collection-circle/cls-circle1.jpg" src="images/collections/collection-circle/cls-circle1.jpg" alt="collection-img" />
                </a>
                <div className="collection-content text-center">
                  <div>
                    <a href="shop-collection.php" className="cls-title">
                      <h6 className="text">$category name</h6>
                      <i className="icon icon-arrowUpRight"></i>
                    </a>
                  </div>
                  <div className="count text-secondary"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="collection-circle hover-img">
                <a href="shop-collection.php" className="img-style">
                  <img className="lazyload" data-src="images/collections/collection-circle/cls-circle1.jpg" src="images/collections/collection-circle/cls-circle1.jpg" alt="collection-img" />
                </a>
                <div className="collection-content text-center">
                  <div>
                    <a href="shop-collection.php" className="cls-title">
                      <h6 className="text">$category name</h6>
                      <i className="icon icon-arrowUpRight"></i>
                    </a>
                  </div>
                  <div className="count text-secondary"></div>
                </div>
              </div>
            </SwiperSlide>
            <div className="nav-prev-collection d-none d-lg-flex nav-sw style-line nav-sw-left">
              <i className="icon icon-arrLeft"></i>
            </div>
            <div className="nav-next-collection d-none d-lg-flex nav-sw style-line nav-sw-right">
              <i className="icon icon-arrRight"></i>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Collection;
