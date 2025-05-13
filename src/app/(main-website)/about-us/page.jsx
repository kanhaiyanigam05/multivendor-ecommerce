import AboutSection from "@/layout/AboutSection";
import Iconbox from "@/layout/Iconbox";
import Partner from "@/layout/Partner";
import Teams from "@/layout/Teams";
import Testimonial from "@/layout/Testimonial";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <>
      {/* <!-- page-title --> */}
      <div
        className="page-title"
        style={{ backgroundImage: "url(images/section/page-title.jpg)" }}
      >
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">About Our Store</h3>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <Link className="link" href="/">
                    Homepage
                  </Link>
                </li>
                <li>
                  <i className="icon-arrRight"></i>
                </li>
                <li>About Our Store</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /page-title --> */}

      {/* <!-- about-us --> */}
      <AboutSection />
      {/* <!-- /about-us --> */}

      {/* <!-- Iconbox --> */}
      <Iconbox varient="about" />
      {/* <!-- /Iconbox --> */}

      {/* <!-- Our Teams --> */}
      <Teams />
      {/* <!-- /Our Teams --> */}

      {/* <!-- Partner --> */}
      <Partner />
      {/* <!-- /Partner --> */}

      {/* <!-- Testimonial --> */}
      <Testimonial varient="about" />
      {/* <!-- /Testimonial --> */}
    </>
  );
};

export default AboutPage;
