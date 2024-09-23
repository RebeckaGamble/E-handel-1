"use client";
import React from "react";
import ProductCard from "../product/ProductCard";
import { useCart } from "../cart/CartContext";
import SearchBar from "../header/SearchBar";

function ProductData() {
  const { products, filteredProducts } = useCart();

  return (
    <div className="px-4 py-10 2xl:px-0">
      <div className="flex justify-center py-4">
        <SearchBar />
      </div>
      <h3 className="text-blue-900 text-[24px] font-semibold my-8">
        Bestsellers{" "}
      </h3>
      {/**pass product state as prop */}
      <ProductCard products={products} filteredProducts={filteredProducts} />
    </div>
  );
}

export default ProductData;
