'use client';
import React from 'react'
import { FaRegHeart } from 'react-icons/fa';
import { useCart } from "@/app/components/cart/CartContext";

function FavoriteBtn({product}) {
    const {addToFavorite} = useCart();

const handleAddToFavorites = () => {
    addToFavorite(product);


}
  return (
    <button onClick={handleAddToFavorites}>
        <FaRegHeart/> Add to favorite
    </button> 
  )
}

export default FavoriteBtn