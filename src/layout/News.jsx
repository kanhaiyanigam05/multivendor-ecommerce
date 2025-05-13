"use client";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const News = () => {
  return (
    <section className="flat-spacing pt-0">
      <div className="container">
        <div className="heading-section text-center">
          <h3 className="heading wow fadeInUp">News insight</h3>
          <p className="subheading text-secondary wow fadeInUp">
            Browse our Top Trending: the hottest picks loved by all.
          </p>
        </div>
        <Swiper
          dir="ltr"
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={15}
          pagination={{
            el: ".sw-pagination-recent",
            clickable: true,
          }}
          slidesPerGroup={1}
          observer={true}
          observeParents={true}
          speed={1000}
          navigation={{
            clickable: true,
            nextEl: ".nav-prev-recent",
            prevEl: ".nav-next-recent",
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
              slidesPerGroup: 1,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
              slidesPerGroup: 1,
            },
          }}
        >
          <SwiperSlide>
            <div className="wg-blog style-1 hover-image wow fadeInUp">
              <div className="image">
                <img
                  className="lazyload"
                  data-src="images/blog/blog-grid-1.jpg"
                  src="images/blog/blog-grid-1.jpg"
                  alt=""
                />
              </div>
              <div className="content">
                <p className="text-btn-uppercase text-secondary-2">13 August</p>
                <div>
                  <h6 className="title fw-5">
                    <a className="link" href="blog-detail.php">
                      Top 10 Summer Fashion Trends You Can't Miss in 2024
                    </a>
                  </h6>
                  <div className="body-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    sed vulputate massa.
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="wg-blog style-1 hover-image wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="image">
                <img
                  className="lazyload"
                  data-src="images/blog/blog-grid-8.jpg"
                  src="images/blog/blog-grid-8.jpg"
                  alt=""
                />
              </div>
              <div className="content">
                <p className="text-btn-uppercase text-secondary-2">13 August</p>
                <div>
                  <h6 className="title fw-5">
                    <a className="link" href="blog-detail.php">
                      How to Effortlessly Style Your Office Wear for a Modern
                      Look
                    </a>
                  </h6>
                  <div className="body-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    sed vulputate massa.
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="wg-blog style-1 hover-image wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="image">
                <img
                  className="lazyload"
                  data-src="images/blog/blog-grid-6.jpg"
                  src="images/blog/blog-grid-6.jpg"
                  alt=""
                />
              </div>
              <div className="content">
                <p className="text-btn-uppercase text-secondary-2">13 August</p>

                <div>
                  <h6 className="title fw-5">
                    <a className="link" href="blog-detail.php">
                      Sustainable Fashion: Eco-Friendly Brands to Watch This
                      Year
                    </a>
                  </h6>
                  <div className="body-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    sed vulputate massa.
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="sw-pagination-recent sw-dots type-circle justify-content-center"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default News;
