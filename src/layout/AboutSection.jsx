"use client";
import React, { useState } from "react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <section className="flat-spacing about-us-main pb_0">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-us-features wow fadeInLeft">
              <img
                className="lazyload"
                data-src="images/banner/about-us.jpg"
                src="images/banner/about-us.jpg"
                alt="image-team"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-us-content">
              <h3 className="title wow fadeInUp">
                Modave – Offering rare and beautiful items worldwide
              </h3>
              <div className="widget-tabs style-3">
                <ul className="widget-menu-tab wow fadeInUp">
                  <li
                    className={`item-title ${activeTab === 0 ? "active" : ""}`}
                    onClick={() => handleTabClick(0)}
                  >
                    <span className="inner text-button">Introduction</span>
                  </li>
                  <li
                    className={`item-title ${activeTab === 1 ? "active" : ""}`}
                    onClick={() => handleTabClick(1)}
                  >
                    <span className="inner text-button">Our Vision</span>
                  </li>
                  <li
                    className={`item-title ${activeTab === 2 ? "active" : ""}`}
                    onClick={() => handleTabClick(2)}
                  >
                    <span className="inner text-button">
                      What Sets Us Apart
                    </span>
                  </li>
                  <li
                    className={`item-title ${activeTab === 3 ? "active" : ""}`}
                    onClick={() => handleTabClick(3)}
                  >
                    <span className="inner text-button">Our Commitment</span>
                  </li>
                </ul>
                <div className="widget-content-tab wow fadeInUp">
                  <div
                    className={`widget-content-inner ${
                      activeTab === 0 ? "active" : ""
                    }`}
                  >
                    <p>
                      Welcome to Modave Store, your premier destination for
                      fashion-forward clothing and accessories. We pride
                      ourselves on offering a curated selection of rare and
                      beautiful items sourced both locally and globally. Our
                      mission is to bring you the latest trends and timeless
                      styles, ensuring every piece reflects quality and
                      elegance. Discover the perfect addition to your wardrobe
                      at Modave Store.
                    </p>
                  </div>
                  <div
                    className={`widget-content-inner ${
                      activeTab === 1 ? "active" : ""
                    }`}
                  >
                    <p>
                      Welcome to Modave Store, your premier destination for
                      fashion-forward clothing and accessories. We pride
                      ourselves on offering a curated selection of rare and
                      beautiful items sourced both locally and globally. Our
                      mission is to bring you the latest trends and timeless
                      styles, ensuring every piece reflects quality and
                      elegance. Discover the perfect addition to your wardrobe
                      at Modave Store.
                    </p>
                  </div>
                  <div
                    className={`widget-content-inner ${
                      activeTab === 2 ? "active" : ""
                    }`}
                  >
                    <p>
                      Welcome to Modave Store, your premier destination for
                      fashion-forward clothing and accessories. We pride
                      ourselves on offering a curated selection of rare and
                      beautiful items sourced both locally and globally. Our
                      mission is to bring you the latest trends and timeless
                      styles, ensuring every piece reflects quality and
                      elegance. Discover the perfect addition to your wardrobe
                      at Modave Store.
                    </p>
                  </div>
                  <div
                    className={`widget-content-inner ${
                      activeTab === 3 ? "active" : ""
                    }`}
                  >
                    <p>
                      Welcome to Modave Store, your premier destination for
                      fashion-forward clothing and accessories. We pride
                      ourselves on offering a curated selection of rare and
                      beautiful items sourced both locally and globally. Our
                      mission is to bring you the latest trends and timeless
                      styles, ensuring every piece reflects quality and
                      elegance. Discover the perfect addition to your wardrobe
                      at Modave Store.
                    </p>
                  </div>
                </div>
              </div>
              <a href="#" className="tf-btn btn-fill wow fadeInUp">
                <span className="text text-button">Read More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
