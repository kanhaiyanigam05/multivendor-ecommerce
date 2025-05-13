import React from "react";

const BannerCollection = () => {
  return (
    <section className="flat-spacing pt-0">
      <div className="container">
        <div className="tf-grid-layout md-col-2">
          <div className="collection-default hover-img">
            <a className="img-style">
              <img
                className="lazyload"
                data-src="images/collections/banner-collection/banner-cls1.jpg"
                src="images/collections/banner-collection/banner-cls1.jpg"
                alt="banner-cls"
              />
            </a>
            <div className="content">
              <h3 className="title wow fadeInUp">
                <a href="shop-collection.php" className="link">
                  Crossbody bag
                </a>
              </h3>
              <p className="desc wow fadeInUp">
                From beach to party: Perfect styles for every occasion.
              </p>
              <div className="wow fadeInUp">
                <a href="shop-collection.php" className="btn-line">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="collection-position hover-img">
            <a className="img-style">
              <img
                className="lazyload"
                data-src="images/collections/banner-collection/banner-cls2.jpg"
                src="images/collections/banner-collection/banner-cls2.jpg"
                alt="banner-cls"
              />
            </a>
            <div className="content">
              <h3 className="title">
                <a
                  href="shop-collection.php"
                  className="link text-white wow fadeInUp"
                >
                  Capsule Collection
                </a>
              </h3>
              <p className="desc text-white wow fadeInUp">
                Reserved for special occasions
              </p>
              <div className=" wow fadeInUp">
                <a href="shop-collection.php" className="btn-line style-white">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCollection;
