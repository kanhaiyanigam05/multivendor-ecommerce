import React from "react";

const Countdown = () => {
  return (
    <section className="bg-surface flat-spacing flat-countdown-banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="banner-left">
              <div className="box-title">
                <h3 className="wow fadeInUp">Limited-Time Deals On!</h3>
                <p className="text-secondary wow fadeInUp">
                  Up to 50% Off Selected Styles. Don't Miss Out.
                </p>
              </div>
              <div className="btn-banner wow fadeInUp">
                <a href="shop.php" className="tf-btn btn-fill">
                  <span className="text">Shop Now</span>
                  <i className="icon icon-arrowUpRight"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="banner-img">
              <img
                className="lazyload"
                data-src="images/banner/img-countdown1.png"
                src="images/banner/img-countdown1.png"
                alt="banner"
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="banner-right">
              <div className="tf-countdown-lg">
                <div
                  className="js-countdown"
                  data-timer="1007500"
                  data-labels="Days,Hours,Mins,Secs"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
