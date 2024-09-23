'use client';

import React from "react";
import { TbShoppingBagPlus } from "react-icons/tb";
import { useCart } from "../cart/CartContext";

function AddToCartBtn({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
   // window.alert(`${product.title} has been added to your cart!`)
  };

  return (
    <button onClick={handleAddToCart} className="uppercase tracking-wider font-semibold text-[18px] bg-blue-900 text-white rounded-full w-full justify-center py-2 flex flex-row items-center gap-3 hover:py-2.5 hover:mt-[-4px] ">
      <TbShoppingBagPlus size={24} /> Add to cart{" "}
    </button>
  );
}

export default AddToCartBtn;
