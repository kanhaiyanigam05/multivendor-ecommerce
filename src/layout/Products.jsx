"use client";
import useFetch from "@/admin/hooks/useFetch";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS_DATA } from "@/utils/JsonData";
import Link from "next/link";
import React, { useState } from "react";

const Products = () => {
  const { data: products, loading, refetch } = useFetch("/products");
  // const [products, setProducts] = useState(PRODUCTS_DATA);
  console.log(products, "products");

  return (
    <section className="flat-spacing-3">
      <div className="container">
        <div className="heading-section-2 wow fadeInUp">
          <div>
            <h3>Today's Top Picks</h3>
            <p>Fresh styles just in! Elevate your look.</p>
          </div>
        </div>
        <div className="tf-grid-layout tf-col-2 lg-col-3 xl-col-4">
          {/* <!-- card product 1 --> */}
          {!loading &&
            products.map((product, index) => {
              return <ProductCard key={index} data={product} />;
            })}
        </div>
        <div className="sec-btn text-center">
          <Link href="/shop" className="btn-line">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
