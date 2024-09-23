"use client";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { useCart } from "@/app/components/cart/CartContext";

function FavoriteBtn({ product, text }) {
  const { addToFavorite } = useCart();

  const handleAddToFavorites = () => {
    addToFavorite(product);
  };

  return (
    <button
      className="flex flex-row gap-1 items-center"
      onClick={handleAddToFavorites}
    >
      <FaRegHeart /> <p>{text}</p>
    </button>
  );
}

export default FavoriteBtn;
