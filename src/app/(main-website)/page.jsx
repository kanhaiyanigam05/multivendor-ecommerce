import BannerCollection from "@/layout/BannerCollection";
import BannerSlider from "@/layout/BannerSlider";
import Collection from "@/layout/Collection";
import Countdown from "@/layout/Countdown";
import Gallery from "@/layout/Gallery";
import Iconbox from "@/layout/Iconbox";
import News from "@/layout/News";
import Testimonial from "@/layout/Testimonial";
import React from "react";
import Products from "@/layout/Products";

export const metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};
const Index = () => {
  return (
    <>
      {/* <!-- Slider --> */}
      <BannerSlider />
      {/* <!-- /Slider --> */}
      {/* <!-- collection --> */}
      <Collection />
      {/* <!-- /collection --> */}
      {/* <!-- Seller --> */}
      <Products />
      {/* <!-- /Seller --> */}
      {/* <!-- Banner collection --> */}
      <BannerCollection />
      {/* <!-- /Banner collection --> */}
      {/* <!-- Banner countdown --> */}
      <Countdown />
      {/* <!-- /Banner countdown --> */}
      {/* <!-- Testimonial --> */}
      <Testimonial />
      {/* <!-- /Testimonial --> */}
      {/* <!-- Latest new --> */}
      <News />
      {/* <!-- /Latest new --> */}
      {/* <!-- Gallery shop gram --> */}
      <Gallery />
      {/* <!-- /Gallery shop gram --> */}
      {/* <!-- Iconbox --> */}
      <Iconbox />
      {/* <!-- /Iconbox --> */}

      {/* <!-- Shopping Cart --> */}
      {/* <ShopingCart /> */}
    </>
  );
};

export default Index;
