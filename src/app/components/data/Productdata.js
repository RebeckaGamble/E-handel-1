"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "../product/ProductCard";

function ProductData() {
  /*states */
  const [products, setProducts] = useState([]); //empty arr - to store fetched products

  /*fetch data from fakestoreapi */
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();

        setProducts(result); //update products state with result from api
        //console.log("fetched products", result);
      } catch (err) {
        console.error("Error fetching products!", err);
      }
    }
    getProducts();
  }, []);

  return (
    <div className="px-4 2xl:px-0">
      <h3 className="text-blue-900 text-[24px] font-semibold my-8">
        Bestsellers{" "}
      </h3>
      {/**pass product state as prop */}
      <ProductCard products={products} />
    </div>
  );
}

export default ProductData;
