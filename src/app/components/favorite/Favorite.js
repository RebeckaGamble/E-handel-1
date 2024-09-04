'use client';
import React from "react";
import { useCart } from "@/app/components/cart/CartContext";

export default function Favorite() {
  const { favorite } = useCart();
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
