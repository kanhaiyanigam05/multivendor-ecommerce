"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Teams = () => {
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="heading-section text-center wow fadeInUp">
          <h3 className="heading">Meet Our Teams</h3>
          <p className="subheading text-secondary-2">
            Discover exceptional experiences through testimonials from our
            satisfied customers.
          </p>
        </div>
        <Swiper
          dir="ltr"
          slidesPerView={2}
          spaceBetween={15}
          observer={true}
          observeParents={true}
          speed={1000}
          pagination={{
            el: ".sw-pagination-latest",
            clickable: true,
          }}
          slidesPerGroup={1}
          navigation={{
            clickable: true,
            nextEl: ".nav-prev-latest",
            prevEl: ".nav-next-latest",
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
              slidesPerGroup: 1,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
              slidesPerGroup: 1,
            },
          }}
        >
          <SwiperSlide className="swiper-slide">
            <div
              className="team-item hover-image wow fadeInUp"
              data-wow-delay="0s"
            >
              <div className="image">
                <img
                  className="lazyload"
                  data-src="images/team/team-1.jpg"
                  src="images/team/team-1.jpg"
                  alt="image-team"
                />
              </div>
              <div className="content">
                <div>
                  <h6 className="name">
                    <a className="link text-line-clamp-1" href="#">
                      Annette Black
                    </a>
                  </h6>
                  <div className="infor text-caption-1 text-secondary-2">
                    Founder/CEO
                  </div>
                </div>
                <ul className="tf-social-icon">
                  <li>
                    <a href="#" className="social-facebook">
                      <i className="icon icon-fb"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="team-item hover-image wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="image">
                <img
                  className="lazyload"
                  data-src="images/team/team-2.jpg"
                  src="images/team/team-2.jpg"
                  alt="image-team"
                />
              </div>
              <div className="content">
                <div>
                  <h6 className="name">
                    <a className="link text-line-clamp-1" href="#">
                      Jane Cooper
                    </a>
                  </h6>
                  <div className="infor text-caption-1 text-secondary-2">
                    Sales Director
                  </div>
                </div>
                <ul className="tf-social-icon">
                  <li>
                    <a href="#" className="social-facebook">
                      <i className="icon icon-fb"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="team-item hover-image wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="image">
                <img
                  className="lazyload"
                  data-src="images/team/team-3.jpg"
                  src="images/team/team-3.jpg"
                  alt="image-team"
                />
              </div>
              <div className="content">
                <div>
                  <h6 className="name">
                    <a className="link text-line-clamp-1" href="#">
                      Brooklyn Simmons
                    </a>
                  </h6>
                  <div className="infor text-caption-1 text-secondary-2">
                    Manager
                  </div>
                </div>
                <ul className="tf-social-icon">
                  <li>
                    <a href="#" className="social-facebook">
                      <i className="icon icon-fb"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="team-item hover-image wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="image">
                <img
                  className="lazyload"
                  data-src="images/team/team-4.jpg"
                  src="images/team/team-4.jpg"
                  alt="image-team"
                />
              </div>
              <div className="content">
                <div>
                  <h6 className="name">
                    <a className="link text-line-clamp-1" href="#">
                      Theresa Webb
                    </a>
                  </h6>
                  <div className="infor text-caption-1 text-secondary-2">
                    Product Manager
                  </div>
                </div>
                <ul className="tf-social-icon">
                  <li>
                    <a href="#" className="social-facebook">
                      <i className="icon icon-fb"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <div className="sw-pagination-latest sw-dots type-circle justify-content-center"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Teams;
