'use client';
import React from "react";
import { useCart } from "@/app/components/cart/CartContext";
import AddToCartBtn from "../product/AddToCartBtn";

export default function Favorite() {
  const { favorite, removeFromFavorite } = useCart();

const handleRemoveFromFavorite = (product) => {
    removeFromFavorite(product)
}
  return (
    <div>
      {favorite.length > 0 ? (
        <div>
          {favorite.map((item) => (
            <div key={item.id}>
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain rounded"
                />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p>Price: {item.price} £</p>
                </div>
              </div>
              <AddToCartBtn product={item}/>
              <button
                onClick={() => handleRemoveFromFavorite(item.id)}
                className="bg-red-500 rounden-full text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove from favorite
              </button>
            </div>
          ))}
        </div>
      ) : (
        <>
          <p> You have no favorites</p>
        </>
      )}
    </div>
  );
}
